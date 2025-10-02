import { OrderTracking } from "../OrderTracking";
import { ThemeProvider } from "../ThemeProvider";

export default function OrderTrackingExample() {
  return (
    <ThemeProvider>
      <div className="pt-16">
        <OrderTracking />
      </div>
    </ThemeProvider>
  );
}
