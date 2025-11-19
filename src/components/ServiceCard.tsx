import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-lab-black text-white w-16 h-16 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <Button
          variant="default"
          className="bg-lab-black hover:bg-lab-black/90 text-white font-semibold px-6 mt-4 transition-transform hover:scale-105"
        >
          SAIBA MAIS
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
