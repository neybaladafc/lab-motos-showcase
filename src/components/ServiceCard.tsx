import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  serviceId: string;
}

const ServiceCard = ({ icon, title, description, serviceId }: ServiceCardProps) => {
  const navigate = useNavigate();
  const cardRef = useScrollReveal();

  const handleClick = () => {
    navigate(`/servico/${serviceId}`);
  };

  return (
    <div ref={cardRef} className="card h-100 border-0 shadow-sm card-hover scroll-reveal">
      <div className="card-body text-center p-4 d-flex flex-column">
        <div className="bg-lab-black text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 mx-auto" 
             style={{ width: '64px', height: '64px' }}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        <h3 className="card-title h5 fw-bold mb-3">{title}</h3>
        <p className="card-text text-muted mb-4 flex-grow-1">{description}</p>
        <button
          onClick={handleClick}
          className="btn btn-lab-primary w-100 mt-auto"
        >
          SAIBA MAIS
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
