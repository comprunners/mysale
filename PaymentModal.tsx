import { PaymentModal } from "../PaymentModal";
import { ThemeProvider } from "../ThemeProvider";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PaymentModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex items-center justify-center h-screen">
        <Button onClick={() => setIsOpen(true)}>Open Payment Modal</Button>
        <PaymentModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          planName="Pro Plan"
          price={10}
        />
      </div>
    </ThemeProvider>
  );
}
