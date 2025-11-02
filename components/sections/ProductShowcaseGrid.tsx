"use client";

import TiltGlassCard from "@/components/interactive/TiltGlassCard";
import SpecKPI from "@/components/interactive/SpecKPI";

const items = [
{
title: "Tempered Glass",
subtitle: "Safety | Strength | Clarity",
imageSrc: "/images/products/tempered.svg",
badge: "EN 12150",
href: "/(en)/technology"
},
{
title: "Laminated Glass",
subtitle: "Acoustic | Security | UV",
imageSrc: "/images/products/laminated.svg",
badge: "EN 14449",
href: "/(en)/technology"
},
{
title: "Insulated (IGU) Low-E",
subtitle: "Thermal | Energy Savings",
imageSrc: "/images/products/igu.svg",
badge: "U-value 1.6",
href: "/(en)/technology"
},
{
title: "Fire-Rated Systems",
subtitle: "Integrity | Insulation",
imageSrc: "/images/products/fire.svg",
badge: "EI30–EI120",
href: "/(en)/technology"
}
];

export default function ProductShowcaseGrid() {
return ( <section className="bg-crystal py-16"> <div className="mx-auto max-w-7xl px-6"> <h2 className="text-3xl font-semibold text-graphite">Signature Products</h2> <p className="mt-2 text-graphite/70">
Engineered glass solutions for façades, interiors, and performance envelopes. </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <TiltGlassCard
          key={it.title}
          title={it.title}
          subtitle={it.subtitle}
          imageSrc={it.imageSrc}
          badge={it.badge}
          href={it.href}
        >
          <div className="mt-3 grid grid-cols-3 gap-2">
            {it.title === "Insulated (IGU) Low-E" ? (
              <>
                <SpecKPI label="U-value" value="1.6 W/m²·K" />
                <SpecKPI label="VLT" value="64%" />
                <SpecKPI label="SHGC" value="0.35" />
              </>
            ) : (
              <>
                <SpecKPI label="Thickness" value="6–24 mm" />
                <SpecKPI label="Max Size" value="6000×3200" />
                <SpecKPI label="Warranty" value="10 Years" />
              </>
            )}
          </div>
        </TiltGlassCard>
      ))}
    </div>
  </div>
</section>

);
}
