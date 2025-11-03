"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type TiltGlassCardProps = {
title: string;
subtitle?: string;
href?: string;
imageSrc?: string;
badge?: string;
children?: React.ReactNode;
className?: string;
maxTilt?: number;
glare?: boolean;
};

export default function TiltGlassCard({
title,
subtitle,
href,
imageSrc,
badge,
children,
className = "",
maxTilt = 10,
glare = true,
}: TiltGlassCardProps) {
const ref = useRef<HTMLDivElement>(null);
const rotateX = useMotionValue(0);
const rotateY = useMotionValue(0);
const xSpring = useSpring(rotateX, { stiffness: 200, damping: 20 });
const ySpring = useSpring(rotateY, { stiffness: 200, damping: 20 });
const [isHover, setHover] = useState(false);

const [prefersReduced, setReduced] = useState(false);
useEffect(() => {
const m = window.matchMedia("(prefers-reduced-motion: reduce)");
setReduced(m.matches);
const handler = () => setReduced(m.matches);
m.addEventListener("change", handler);
return () => m.removeEventListener("change", handler);
}, []);

const handleMove = (e: MouseEvent) => {
if (!ref.current || prefersReduced) return;
const rect = ref.current.getBoundingClientRect();
const px = (e.clientX - rect.left) / rect.width;
const py = (e.clientY - rect.top) / rect.height;
const rX = (py - 0.5) * -2 * maxTilt;
const rY = (px - 0.5) * 2 * maxTilt;
rotateX.set(rX);
rotateY.set(rY);
};

const reset = () => {
rotateX.set(0);
rotateY.set(0);
};

const CardBody = (
<motion.div
ref={ref}
onMouseMove={handleMove}
onMouseEnter={() => setHover(true)}
onMouseLeave={() => {
setHover(false);
reset();
}}
onFocus={() => setHover(true)}
onBlur={() => {
setHover(false);
reset();
}}
style={{
transformStyle: "preserve-3d",
perspective: 1000,
rotateX: prefersReduced ? 0 : xSpring,
rotateY: prefersReduced ? 0 : ySpring,
}}
className={[
"relative rounded-3xl p-5 sm:p-6",
"bg-slate-100 backdrop-blur-md border border-slate-300",
"shadow-glass hover:shadow-xl transition-shadow",
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt/40",
"sheen",
className,
].join(" ")}
role="group"
aria-label={title}
tabIndex={0}
>
<div
aria-hidden
className="pointer-events-none absolute -inset-[1px] rounded-3xl"
style={{
background:
"radial-gradient(80% 60% at 10% 0%, rgba(20,184,166,0.18) 0%, rgba(11,60,133,0.10) 45%, rgba(248,250,252,0) 70%)",
filter: "blur(22px)",
}}
/>

  {glare && (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-3xl"
      style={{
        transform: "translateZ(60px)",
        willChange: "transform, opacity",
      }}
      animate={{
        opacity: isHover ? 0.6 : 0.35,
      }}
    >
      <motion.div
        className="absolute h-1/2 w-1/2 rounded-full"
        style={{
          top: "-10%",
          left: "-10%",
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.25), rgba(255,255,255,0))",
          filter: "blur(20px)",
        }}
        animate={{
          x: isHover ? 30 : 0,
          y: isHover ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      />
    </motion.div>
  )}

  {badge && (
    <span
      className="relative z-10 inline-flex items-center rounded-full border border-white/25 bg-white/20 px-3 py-1 text-xs font-medium text-graphite/90 backdrop-blur-xs"
      style={{ transform: "translateZ(30px)" }}
    >
      {badge}
    </span>
  )}

  {imageSrc && (
    <div
      className="relative mt-3 overflow-hidden rounded-2xl"
      style={{ transform: "translateZ(45px)" }}
    >
      <Image
        src={imageSrc}
        alt="Glass product"
        width={1200}
        height={800}
        className="h-44 w-full object-cover sm:h-56"
        priority={false}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  )}

  <div className="relative z-10 mt-4" style={{ transform: "translateZ(50px)" }}>
    <h3 className="text-xl font-semibold text-graphite">{title}</h3>
    {subtitle && <p className="mt-1 text-sm text-graphite/70">{subtitle}</p>}
  </div>

  {children && (
    <div className="relative z-10 mt-4" style={{ transform: "translateZ(55px)" }}>
      {children}
    </div>
  )}

  {href && (
    <div
      aria-hidden
      className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/30 p-2 backdrop-blur-xs transition-opacity group-hover:opacity-100 sm:opacity-0"
      style={{ transform: "translateZ(60px)" }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80">
        <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  )}
</motion.div>

);

if (href) {
return ( <Link href={href} className="block">
{CardBody} </Link>
);
}
return CardBody;
}
