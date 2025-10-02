import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { randomUUID } from "crypto";
import type { Request, Response } from "express";

interface Order {
  id: string;
  productId: string;
  amount: number;
  cardLast4?: string;
  createdAt: string;
}

const orders: Order[] = [];

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic purchase endpoint: accepts { productId, price, cardNumber, exp, cvc }
  // This is a mock gateway for demo purposes — NO real payments performed.
  app.post('/api/purchase', async (req: Request, res: Response) => {
    try {
      const { productId, price, cardNumber, exp, cvc } = req.body ?? {};
      if (!productId || !price) {
        return res.status(400).json({ error: 'Missing productId or price' });
      }
      // basic validation of card fields (mock)
      if (!cardNumber || typeof cardNumber !== 'string' || cardNumber.replace(/\D/g,'').length < 12) {
        return res.status(400).json({ error: 'Invalid card number (mock validation)' });
      }
      // create mock order
      const id = randomUUID();
      const order = {
        id,
        productId,
        amount: Number(price),
        cardLast4: cardNumber.slice(-4),
        createdAt: new Date().toISOString(),
      };
      orders.push(order);
      // respond with a success payload
      return res.json({ success: true, order });
    } catch (err) {
      console.error('Purchase error', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  // simple order lookup (for testing)
  app.get('/api/orders/:id', (req, res) => {
    const id = req.params.id;
    const o = orders.find(x => x.id === id);
    if (!o) return res.status(404).json({ error: 'Order not found' });
    return res.json({ order: o });
  });

  const httpServer = createServer(app);
  return httpServer;
}
