import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";

export default function Home() {
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    planName: string;
    price: number;
  }>({
    isOpen: false,
    planName: "",
    price: 0,
  });

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />

      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() =>
          setPaymentModal({ isOpen: false, planName: "", price: 0 })
        }
        planName={paymentModal.planName}
        price={paymentModal.price}
      />
    </div>
  );
}
