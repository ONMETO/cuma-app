import React from "react";
import { Marquee } from "./Marquee";
import { cn } from "../utils/cn";
import ScrollReveal from "./ui/ScrollReveal";

const reviews = [
  {
    name: "Alex Rivera",
    username: "@arivera",
    body: "Melo completely changed how I experience music on my daily runs. The pace rhythm is unreal.",
    img: "https://avatar.vercel.sh/alex",
  },
  {
    name: "Samantha Wu",
    username: "@samwu",
    body: "The AI playlist generation is scary good. It knows exactly what I want before I do.",
    img: "https://avatar.vercel.sh/samantha",
  },
  {
    name: "Jordan Lee",
    username: "@jordanlee",
    body: "I'm obsessed with the minimalist design. It feels like magic. No distractions, just pure focus.",
    img: "https://avatar.vercel.sh/jordan",
  },
  {
    name: "Mia Hassan",
    username: "@miah",
    body: "Sharing lyrics as GIFs is my new favorite thing to do. My stories look so much better now.",
    img: "https://avatar.vercel.sh/mia",
  },
  {
    name: "David Chen",
    username: "@dchen99",
    body: "The nearby discovery feature is incredible. Met someone with my exact niche taste today.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emily Clark",
    username: "@emclark",
    body: "Wallpaper conversion works flawlessly. My lock screen has never looked this aesthetic.",
    img: "https://avatar.vercel.sh/emily",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-2xl border p-5",
        "border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:bg-neutral-900/80 transition-all duration-300 group"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full grayscale brightness-125 group-hover:grayscale-0 transition-all duration-300" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white tracking-tight">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-neutral-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm font-medium text-neutral-300 leading-relaxed">"{body}"</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-32 z-10 border-t border-neutral-900 bg-black">
      <div className="mb-16 text-center px-4">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
            Loved by <span className="text-neutral-600">listeners.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-lg text-neutral-400 font-medium max-w-xl mx-auto">
            See what our early adopters have to say about Melo. Join the beta today.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative flex w-full max-w-screen-2xl mx-auto flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
