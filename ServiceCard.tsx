import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  onPurchase: () => void;
}

export function ServiceCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  onPurchase,
}: ServiceCardProps) {
  return (
    <Card className={`relative overflow-visible hover:-translate-y-1 transition-transform duration-300 ${isPopular ? "border-primary shadow-lg shadow-primary/20" : ""}`}>
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-gradient-to-r from-primary to-cyan px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="space-y-2 pb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold text-primary">${price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Button
          onClick={onPurchase}
          className="w-full"
          variant={isPopular ? "default" : "outline"}
          data-testid={`button-purchase-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
