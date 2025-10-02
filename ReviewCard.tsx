import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ReviewCardProps {
  name: string;
  review: string;
  date: string;
  verified: boolean;
}

export function ReviewCard({ name, review, date, verified }: ReviewCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="hover-elevate">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{name}</h4>
                {verified && (
                  <Badge variant="secondary" className="bg-cyan/10 text-cyan border-cyan/20 text-xs">
                    Verified Purchase
                  </Badge>
                )}
              </div>
              <span className="text-xs text-muted-foreground">{date}</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {review}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
