"use client";
import { motion } from "framer-motion";

export default function SpecKPI({ label, value }: { label: string; value: string }) {
return (
<motion.div
initial={{ y: 8, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: true, amount: 0.6 }}
className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-graphite/90 shadow-glass backdrop-blur-xs"
> <div className="text-[11px] uppercase tracking-wide text-graphite/60">{label}</div> <div className="text-base font-semibold">{value}</div>
</motion.div>
);
}
