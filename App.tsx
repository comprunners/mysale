import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { DraggableWidget } from "@/components/DraggableWidget";
import { ChatWidget } from "@/components/ChatWidget";
import Home from "@/pages/Home";
import OrderTrackingPage from "@/pages/OrderTrackingPage";
import ReviewsPage from "@/pages/ReviewsPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/order-tracking" component={OrderTrackingPage} />
      <Route path="/reviews" component={ReviewsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Navigation />
          <main className="pt-16">
            <Router />
          </main>
          <DraggableWidget />
          <ChatWidget />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
