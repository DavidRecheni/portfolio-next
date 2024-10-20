import Image from "next/image";

interface BadgeProps {
  image: string;
  title: string;
  event: { name: string; url: string };
  description?: string;
}
const Badge = ({ image, title, description, event }: BadgeProps) => {
  return (
    <div className="flex flex-col justify-center">
      <a href={event.url} target="_blank" rel="noreferrer">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <Image src={image} alt="Event logo" />
          <div className="absolute top-0 bottom-0 -left m-auto w-24 h-8 bg-white text-black">
            <p className="text-center font-semibold">{title}</p>
          </div>
        </div>
        <p className="font-light text-sm">{event.name}</p>
        <p className="text-sm italic font-light">{description}</p>
      </a>
    </div>
  );
};

export default Badge;
