import type { StaticImageData } from "next/image";
import Image from "next/image";

import laureles from "@/../public/images/laureles.svg";

interface BadgeProps {
  title: string;
  event: { name: string; url: string };
  description?: string;
  className?: string;
}
const Badge = ({ title, description, event, className = "" }: BadgeProps) => {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noreferrer"
      className={`relative ${className} flex items-center justify-center flex-col`}
    >
      <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
        <Image
          src={laureles as StaticImageData}
          alt={`${event.name} event logo`}
          className="absolute top-0 right-0"
        />
        <div className="absolute bottom-4 sm:bottom-6 -left m-auto w-16 sm:w-24 h-5 bg-black text-white">
          <p className="text-center text-xs sm:text-sm whitespace-nowrap">
            {title}
          </p>
        </div>
      </div>
      <p className="font-light text-xs sm:text-sm whitespace-nowrap">
        {event.name}
      </p>
      <p className="text-xs sm:text-sm italic font-light whitespace-nowrap">
        {description}
      </p>
    </a>
  );
};

export default Badge;
