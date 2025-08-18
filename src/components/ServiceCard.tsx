import React from 'react';
import { ArrowRight, DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  icon: Icon,
  ctaText,
  ctaLink,
  featured = false
}) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
      featured ? 'ring-2 ring-blue-600 transform scale-105' : ''
    }`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
          Featured
        </div>
      )}
      
      <div className="p-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
          featured ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
        }`}>
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <a
          href={ctaLink}
          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            featured
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          <span>{ctaText}</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;