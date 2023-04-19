import Image from "next/image";

interface BadgeProps {
  image: any;
  title: string;
  event: { name: string; url: string };
  description?: string;
}
const Badge = ({ image, title, description, event }: BadgeProps) => {
  return (
    <div className="flex flex-col justify-center">
      <a href={event.url} target="_blank" rel="noreferrer">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <Image
            src={image}
            alt="Event logo"
            layout="fill"
            objectFit="contain"
          />
          <div className="absolute top-0 bottom-0 -left m-auto w-28 h-6 bg-white text-black">
            <p className="text-center font-semibold">{title}</p>
          </div>
        </div>
        {event.name}
        <p className="text-sm italic">{description}</p>
      </a>
    </div>
  );
};

export default Badge;
