import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="relative z-0 py-32 md:py-48 lg:py-60">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Background Grain Image to make the Rings look good */}
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* Rings */}
        <div className="hero-glow-ring size-[620px]" />
        <div className="hero-glow-ring size-[820px]" />
        <div className="hero-glow-ring size-[1020px]" />
        <div className="hero-glow-ring size-[1220px]" />

        {/* Stars */}
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-green-400" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-green-400" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-green-400" />
        </HeroOrbit>
        {/* Sparkles */}
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 opacity-25" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={79}>
          <SparkleIcon className="size-5 opacity-25" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 opacity-25" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 opacity-25" />
        </HeroOrbit>

        {/* Circles */}
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/25" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/25" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-3 rounded-full bg-emerald-300/25" />
        </HeroOrbit>
      </div>

      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="Me" width={100} height={100} />
        </div>
        <div>
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-slate-950 px-4 py-1.5 text-sm">
            <span className="size-2.5 rounded-full bg-green-500" />
            {/* <span className="absolute top-2.5 ml-2 mr-4 inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-green-500" /> */}
            <span className="text-sm font-medium">
              Available for new projects
            </span>
          </div>
        </div>

        <div className="max-w-lg">
          <div className="flex flex-col items-center gap-4 py-8">
            <h1 className="text-center font-serif text-3xl tracking-wide md:text-5xl">
              Building Exceptional
              <br />
              User Experiences
            </h1>
            <p className="text-center text-white/60 md:text-lg">
              I specialize in transforming desings into functional,
              high-performing web applications. Let&apos;s discuss your next
              project.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6">
              <span>Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-4">
              <span className="group-hover:animate-wiggle text-2xl">👋</span>
              <span className="font-semibold text-gray-900">
                Let&apos;s Connect
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
