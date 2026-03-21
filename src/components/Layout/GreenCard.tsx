import Image from "next/image";
import Link from "next/link";

type CardProps = {
  imageSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  href?: string;
};

export default function GreenCard({
  imageSrc,
  imgAlt,
  title,
  description,
  href = "#",
}: CardProps) {
  return (
    <Link href={href} className="group block w-full md:w-auto">
      <div className="w-full md:w-[450px] md:h-[650px] bg-card rounded-2xl overflow-hidden transition-all duration-300 ease-in-out transform will-change-transform hover:-translate-y-1 hover:shadow-xl hover:bg-[#b4ede0]">

        <div className="relative overflow-hidden">
          <Image
            src={imageSrc}
            alt={imgAlt}
            width={500}
            height={300}
            className="w-full h-52 sm:h-64 md:h-100 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
          />

          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>

        <div className="p-5 space-y-3 transition-colors duration-300">
          <h3 className="text-lg font-bold text-foreground">
            {title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}