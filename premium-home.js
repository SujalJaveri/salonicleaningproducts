import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";

const h = React.createElement;
const M = motion;

const A = {
  logo: "assets/saloni-logo-catalog.jpg",
  lineup: "assets/catalog-product-lineup.jpg",
  hero: "assets/hero-products-crop.jpg",
  womenFactory: "assets/women-led-manufacturing.jpg",
  products: {
    floor: "assets/products/super-floor-cleaner.jpg",
    toilet: "assets/products/wash-out-toilet-cleaner.jpg",
    glass: "assets/products/super-glass-cleaner.jpg",
    dish: "assets/products/shine-perfect-dishwash-gel.jpg",
    fabric: "assets/products/feelz-fabric-conditioner.jpg",
    detergent: "assets/products/safedi-liquid-detergent.jpg",
    room: "assets/products/fresh-room-freshener.jpg",
    industrial: "assets/products/leo-power-concentrate-cleaner.jpg",
    soap: "assets/products/clean-white-liquid-soap.jpg",
    bleach: "assets/products/sparclean-bleach.jpg",
    bathroom: "assets/products/wash-out-bathroom-cleaner.jpg",
    surface: "assets/products/lespark-surface-cleaner.jpg",
  },
};

const navItems = [
  ["Home", "#home"],
  ["Products", "#products"],
  ["About", "#about"],
  ["Distributors", "#distributors"],
  ["Contact", "#contact"],
];

const stats = [
  ["15+", "Products"],
  ["Since 2011", "Established"],
  ["Women-Led", "Enterprise"],
  ["Distributor", "Network"],
  ["Maharashtra", "Presence"],
];

const categories = [
  {
    title: "Floor Cleaners",
    desc: "Daily mopping, fragrance-led hygiene, and shine for high-traffic surfaces.",
    image: A.products.floor,
    tags: ["Homes", "Offices", "5 L and 35 L"],
    href: "products/floor-cleaners/",
  },
  {
    title: "Toilet Cleaners",
    desc: "Thick formulations for stains, odour control, and bathroom confidence.",
    image: A.products.toilet,
    tags: ["Bathrooms", "Deep Clean", "Retail"],
    href: "products/toilet-cleaners/",
  },
  {
    title: "Glass Cleaners",
    desc: "Clear shine for mirrors, glass, tabletops, display counters, and windows.",
    image: A.products.glass,
    tags: ["Glass", "Mirrors", "Spray Use"],
    href: "products/glass-cleaners/",
  },
  {
    title: "Dish Wash",
    desc: "Grease-cutting dishwash gels made for fast rinsing and fresh kitchens.",
    image: A.products.dish,
    tags: ["Kitchen", "Lime Fresh", "Repeat Demand"],
    href: "products/dishwash/",
  },
  {
    title: "Fabric Conditioner",
    desc: "Softness, fragrance, and cloth care for everyday laundry routines.",
    image: A.products.fabric,
    tags: ["Laundry", "Soft Finish", "Fragrance"],
    href: "products/laundry/",
  },
  {
    title: "Detergents",
    desc: "Liquid detergent for bucket and machine wash with practical pack sizes.",
    image: A.products.detergent,
    tags: ["Machine Wash", "Bucket Wash", "pH Balanced"],
    href: "products/laundry/",
  },
  {
    title: "Room Fresheners",
    desc: "Bright room fragrances for homes, offices, shops, and hospitality spaces.",
    image: A.products.room,
    tags: ["Fragrance", "Interiors", "Spray"],
    href: "products/glass-cleaners/",
  },
  {
    title: "Industrial Cleaners",
    desc: "Concentrated cleaners for distributors serving bulk commercial demand.",
    image: A.products.industrial,
    tags: ["Bulk Packs", "Commercial", "35 L"],
    href: "products/floor-cleaners/",
  },
];

const featured = [
  {
    name: "Leo Power Concentrate Cleaner",
    image: A.products.industrial,
    benefits: "Degreasing, deodorising, pine-like freshness",
    sizes: "200 ml, 500 ml, 1 L, 5 L, 35 L",
    surface: "Floors, hard surfaces, commercial cleaning",
    fragrance: "Pine freshness",
    use: "Dilute 50 to 100 ml in half a bucket of water.",
  },
  {
    name: "Shine Perfect Dishwash Gel",
    image: A.products.dish,
    benefits: "Tough on grease, gentle on hands",
    sizes: "500 ml, 1 L, 5 L, 35 L",
    surface: "Utensils and kitchenware",
    fragrance: "Fresh lime",
    use: "Mix one teaspoon in water, scrub, and rinse.",
  },
  {
    name: "Safedi Liquid Detergent",
    image: A.products.detergent,
    benefits: "Stain removal, odour control, fabric-friendly wash",
    sizes: "500 ml, 1 L, 5 L, 35 L",
    surface: "Clothes, machine wash, bucket wash",
    fragrance: "Fresh after-wash effect",
    use: "Use one cap for regular loads and two caps for heavier loads.",
  },
];

const why = [
  ["ISO Certified", "Credibility and process discipline built into the brand promise."],
  ["Safe Formulations", "Practical cleaning chemistry for homes, businesses, and institutions."],
  ["Wide Product Range", "A complete daily-use catalogue across surface, laundry, kitchen, and hygiene care."],
  ["Strong Distribution Network", "Distributor-friendly pack sizes, repeat-demand categories, and responsive support."],
  ["Affordable Pricing", "Value-led products designed for Indian households and trade markets."],
  ["Trusted Quality", "Consistent products made for customers who buy again and recommend often."],
];

const testimonials = [
  {
    quote:
      "Saloni products move well because customers understand the value quickly. The quality is consistent and the repeat business is strong.",
    name: "Rahul Patil",
    role: "Distributor, Pune",
  },
  {
    quote:
      "The product range covers daily household needs, so it is easy to build a basket for retail customers and small offices.",
    name: "Neha Jadhav",
    role: "Retail Partner, Pimpri-Chinchwad",
  },
  {
    quote:
      "We appreciate the distributor support and practical packaging sizes. It feels like a local brand with serious manufacturing intent.",
    name: "Amit Shinde",
    role: "Commercial Supplier, Maharashtra",
  },
];

const gallery = [
  [A.lineup, "Complete Saloni cleaning product lineup", ""],
  [A.products.floor, "Floor cleaner bottle", ""],
  [A.womenFactory, "Women-led manufacturing operations", "photo"],
  [A.products.detergent, "Liquid detergent packaging", ""],
  [A.products.toilet, "Toilet cleaner packaging", ""],
  [A.products.room, "Room freshener packaging", ""],
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionLabel({ children, light = false }) {
  return h(
    "p",
    {
      className: cx(
        "section-kicker mb-4 text-xs font-black uppercase",
        light ? "text-cyan-100" : "text-saloni-red"
      ),
    },
    children
  );
}

function Button({ children, href, variant = "primary", className = "" }) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-black uppercase tracking-[0.08em] transition duration-200 focus:outline-none focus:ring-4 focus:ring-saloni-cyan/20";
  const styles =
    variant === "light"
      ? "bg-white text-saloni-blue hover:bg-slate-100"
      : variant === "outline"
        ? "border border-saloni-blue/20 bg-white text-saloni-blue hover:border-saloni-blue hover:shadow-product"
        : "bg-saloni-blue text-white shadow-product hover:bg-[#0b416f]";
  return h("a", { href, className: cx(base, styles, className) }, children);
}

function Header() {
  const [open, setOpen] = useState(false);
  return h(
    React.Fragment,
    null,
    h(
      "div",
      { className: "bg-saloni-blue px-4 py-2 text-center text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-white sm:text-xs" },
      "ISO Certified | Proudly Women-Led | Empowering Women Since 2011"
    ),
    h(
      "header",
      { className: "sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur nav-glow" },
      h(
        "div",
        { className: "mx-auto flex min-h-[86px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8" },
        h(
          "a",
          { href: "#home", className: "flex items-center", "aria-label": "Saloni Cleaning Products home" },
          h("img", { className: "brand-logo-premium", src: A.logo, alt: "Saloni Cleaning Products logo" })
        ),
        h(
          "nav",
          { className: "hidden items-center gap-8 lg:flex", "aria-label": "Main navigation" },
          navItems.map(([label, href]) =>
            h("a", { key: label, href, className: "text-sm font-extrabold text-slate-700 transition hover:text-saloni-blue" }, label)
          )
        ),
        h(
          "div",
          { className: "hidden items-center gap-3 lg:flex" },
          h(Button, { href: "#distributors", className: "min-h-11 px-5" }, "Become Distributor")
        ),
        h(
          "button",
          {
            type: "button",
            className: "grid h-11 w-11 place-items-center border border-slate-200 bg-white text-saloni-blue lg:hidden",
            "aria-label": "Toggle menu",
            "aria-expanded": open,
            onClick: () => setOpen(!open),
          },
          h("span", { className: "text-2xl leading-none" }, open ? "x" : "menu")
        )
      ),
      h(
        AnimatePresence,
        null,
        open &&
          h(
            M.nav,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              className: "overflow-hidden border-t border-slate-200 bg-white lg:hidden",
            },
            h(
              "div",
              { className: "grid gap-1 px-5 py-4" },
              navItems.map(([label, href]) =>
                h(
                  "a",
                  {
                    key: label,
                    href,
                    onClick: () => setOpen(false),
                    className: "px-2 py-3 text-sm font-extrabold text-slate-800",
                  },
                  label
                )
              ),
              h(Button, { href: "#distributors", className: "mt-2" }, "Become Distributor")
            )
          )
      )
    )
  );
}

function Hero() {
  const badges = ["ISO Certified", "Women-Led Company", "Made in India", "Since 2011"];
  return h(
    "section",
    { id: "home", className: "relative overflow-hidden bg-white" },
    h("div", { className: "industrial-band" }),
    h(
      "div",
      { className: "mx-auto grid min-h-[740px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-20" },
      h(
        M.div,
        fadeUp,
        h(SectionLabel, null, "Trusted Cleaning Solutions"),
        h(
          "h1",
          { className: "headline-balance max-w-3xl font-display text-[2.72rem] font-black leading-[0.98] tracking-tight text-saloni-ink sm:text-6xl lg:text-7xl" },
          "Industrial-Grade Cleaning Products Built on Quality & Women Empowerment"
        ),
        h(
          "p",
          { className: "mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl" },
          "Saloni Cleaning Products is a proudly women-led manufacturing company delivering trusted cleaning solutions for homes, businesses, and distributors across Maharashtra."
        ),
        h(
          "div",
          { className: "mt-8 flex flex-wrap gap-3" },
          badges.map((badge) =>
            h("span", { key: badge, className: "border border-saloni-blue/15 bg-saloni-bg px-4 py-2 text-sm font-extrabold text-saloni-blue" }, "✓ ", badge)
          )
        ),
        h(
          "div",
          { className: "mt-9 flex flex-col gap-3 sm:flex-row" },
          h(Button, { href: "#products" }, "Explore Products"),
          h(Button, { href: "#distributors", variant: "outline" }, "Become Distributor")
        )
      ),
      h(
        M.div,
        { ...fadeUp, transition: { duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }, className: "product-stage min-h-[540px] p-6 shadow-premium lg:p-10" },
        h(
          "div",
          { className: "relative z-10 grid h-full place-items-center" },
          h("img", { src: A.lineup, alt: "Saloni cleaning product bottles", className: "product-shadow w-full max-w-[620px]", loading: "eager", decoding: "async" }),
          h("div", { className: "absolute left-0 top-0 bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-saloni-blue shadow-product" }, "15+ product range"),
          h("div", { className: "absolute bottom-0 right-0 bg-saloni-red px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-product" }, "Made in India")
        )
      )
    )
  );
}

function TrustStrip() {
  return h(
    "section",
    { className: "border-y border-slate-200 bg-white" },
    h(
      "div",
      { className: "mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0 lg:px-8" },
      stats.map(([value, label]) =>
        h(
          "div",
          { key: value, className: "px-3 py-8 text-center" },
          h("strong", { className: "block font-display text-2xl font-black text-saloni-blue" }, value),
          h("span", { className: "mt-1 block text-xs font-black uppercase tracking-[0.12em] text-slate-500" }, label)
        )
      )
    )
  );
}

function About() {
  return h(
    "section",
    { id: "about", className: "bg-saloni-bg py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1fr] lg:px-8" },
      h(
        M.div,
        { ...fadeUp, className: "photo-panel min-h-[500px] shadow-premium" },
        h("img", { src: A.hero, alt: "Saloni cleaning product manufacturing range", loading: "lazy", decoding: "async" }),
        h("div", { className: "absolute bottom-0 left-0 z-10 p-8 text-white" }, h("p", { className: "text-sm font-black uppercase tracking-[0.16em]" }, "Pune, Maharashtra"), h("h3", { className: "mt-2 max-w-sm font-display text-3xl font-black" }, "A practical Indian FMCG cleaning brand built for daily demand."))
      ),
      h(
        M.div,
        fadeUp,
        h(SectionLabel, null, "About Saloni"),
        h("h2", { className: "water-line headline-balance font-display text-4xl font-black leading-tight text-saloni-ink sm:text-5xl" }, "Built on Trust, Quality & Women Empowerment"),
        h(
          "p",
          { className: "mt-10 text-lg leading-8 text-slate-600" },
          "Saloni Cleaning Products is a women-led manufacturing company established in 2011 with a mission to deliver high-quality cleaning products while creating opportunities for women entrepreneurship and business growth."
        ),
        h(
          "div",
          { className: "mt-9 grid grid-cols-2 gap-4" },
          [["15+", "Products"], ["ISO", "Certified"], ["2011", "Established"], ["Growing", "Distributor Network"]].map(([v, l]) =>
            h("div", { key: v + l, className: "border border-slate-200 bg-white p-5 shadow-sm" }, h("strong", { className: "block text-3xl font-black text-saloni-blue" }, v), h("span", { className: "mt-1 block text-sm font-bold text-slate-600" }, l))
          )
        ),
        h(Button, { href: "about/", className: "mt-9" }, "Learn More")
      )
    )
  );
}

function Empowerment() {
  const highlights = ["Women-Led Leadership", "Made in India", "Trusted Since 2011", "Community-Focused Growth"];
  return h(
    "section",
    { className: "bg-[#f4f1ec] py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.92fr] lg:px-8" },
      h(
        M.div,
        fadeUp,
        h(SectionLabel, null, "Proudly Women-Led"),
        h("h2", { className: "headline-balance font-display text-4xl font-black leading-tight text-saloni-ink sm:text-5xl" }, "Empowering Women Through Manufacturing & Entrepreneurship"),
        h(
          "p",
          { className: "mt-7 text-lg leading-8 text-slate-700" },
          "Saloni Cleaning Products proudly supports women empowerment through leadership, employment, and distributor partnerships. The company believes in creating opportunities for women to achieve financial independence and business success."
        ),
        h(
          "div",
          { className: "mt-8 grid gap-3 sm:grid-cols-2" },
          highlights.map((item) => h("div", { key: item, className: "border-l-4 border-saloni-red bg-white px-5 py-4 text-sm font-black text-saloni-blue shadow-sm" }, "✓ ", item))
        )
      ),
      h(
        M.div,
        { ...fadeUp, className: "photo-panel min-h-[520px] shadow-premium" },
        h("img", { src: A.womenFactory, alt: "Professional woman working in an Indian factory", loading: "lazy", decoding: "async" }),
        h("div", { className: "absolute bottom-0 left-0 z-10 max-w-md p-8 text-white" }, h("p", { className: "text-sm font-black uppercase tracking-[0.16em]" }, "Built by Women"), h("h3", { className: "mt-2 font-display text-3xl font-black" }, "A business mission with manufacturing discipline."))
      )
    )
  );
}

function ProductCategories() {
  return h(
    "section",
    { id: "products", className: "bg-white py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto max-w-7xl px-5 lg:px-8" },
      h(M.div, { ...fadeUp, className: "mb-14 max-w-3xl" }, h(SectionLabel, null, "Product Portfolio"), h("h2", { className: "font-display text-4xl font-black text-saloni-ink sm:text-5xl" }, "Our Product Categories")),
      h(
        "div",
        { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4" },
        categories.map((cat, index) =>
          h(
            M.article,
            { key: cat.title, ...fadeUp, transition: { ...fadeUp.transition, delay: (index % 4) * 0.035 }, className: "product-card group flex min-h-[420px] flex-col border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium" },
            h("div", { className: "grid h-48 place-items-center overflow-hidden bg-saloni-bg p-5" }, h("img", { src: cat.image, alt: cat.title, className: "max-h-40 object-contain product-shadow", loading: "lazy", decoding: "async" })),
            h("div", { className: "flex flex-1 flex-col p-5" }, h("h3", { className: "font-display text-xl font-black text-saloni-blue" }, cat.title), h("p", { className: "mt-3 text-sm leading-6 text-slate-600" }, cat.desc), h("div", { className: "mt-4 flex flex-wrap gap-2" }, cat.tags.map((tag) => h("span", { key: tag, className: "bg-saloni-bg px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.08em] text-slate-600" }, tag))), h("a", { href: cat.href, className: "mt-auto pt-6 text-sm font-black uppercase tracking-[0.08em] text-saloni-red" }, "View Products"))
          )
        )
      )
    )
  );
}

function FeaturedProducts() {
  const [active, setActive] = useState(0);
  const product = featured[active];
  return h(
    "section",
    { className: "bg-saloni-bg py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.86fr_1fr] lg:px-8" },
      h(
        M.div,
        { ...fadeUp, className: "product-stage grid min-h-[560px] place-items-center p-8 shadow-premium" },
        h(AnimatePresence, { mode: "wait" }, h(M.img, { key: product.name, initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.98 }, transition: { duration: 0.36 }, src: product.image, alt: product.name, className: "relative z-10 max-h-[430px] object-contain product-shadow", loading: "lazy", decoding: "async" }))
      ),
      h(
        M.div,
        fadeUp,
        h(SectionLabel, null, "Featured Products"),
        h("h2", { className: "font-display text-4xl font-black leading-tight text-saloni-ink sm:text-5xl" }, "High-demand products for retail and distribution."),
        h(
          "div",
          { className: "mt-9 grid gap-4" },
          featured.map((item, i) =>
            h(
              "button",
              {
                key: item.name,
                type: "button",
                onClick: () => setActive(i),
                className: cx(
                  "border p-5 text-left transition",
                  active === i ? "border-saloni-blue bg-white shadow-product" : "border-slate-200 bg-white/70 hover:border-saloni-blue/40"
                ),
              },
              h("span", { className: "text-xs font-black uppercase tracking-[0.12em] text-saloni-red" }, item.sizes),
              h("h3", { className: "mt-2 font-display text-2xl font-black text-saloni-blue" }, item.name),
              h("p", { className: "mt-2 text-sm leading-6 text-slate-600" }, item.benefits),
              active === i &&
                h("div", { className: "mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2" }, h("p", null, h("strong", null, "Surface: "), item.surface), h("p", null, h("strong", null, "Fragrance: "), item.fragrance), h("p", { className: "sm:col-span-2" }, h("strong", null, "Usage: "), item.use))
            )
          )
        )
      )
    )
  );
}

function WhyChooseUs() {
  return h(
    "section",
    { className: "bg-white py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto max-w-7xl px-5 lg:px-8" },
      h(M.div, { ...fadeUp, className: "mb-12 max-w-3xl" }, h(SectionLabel, null, "Why Choose Us"), h("h2", { className: "font-display text-4xl font-black text-saloni-ink sm:text-5xl" }, "Professional quality, practical business value.")),
      h(
        "div",
        { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3" },
        why.map(([title, desc], i) =>
          h(M.article, { key: title, ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.03 }, className: "border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-premium" }, h("div", { className: "mb-6 grid h-12 w-12 place-items-center bg-saloni-blue text-lg font-black text-white" }, String(i + 1).padStart(2, "0")), h("h3", { className: "font-display text-xl font-black text-saloni-blue" }, title), h("p", { className: "mt-3 text-sm leading-6 text-slate-600" }, desc))
        )
      )
    )
  );
}

function DistributorCTA() {
  return h(
    "section",
    { id: "distributors", className: "overflow-hidden bg-saloni-blue py-24 text-white lg:py-28" },
    h(
      "div",
      { className: "mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_0.86fr] lg:px-8" },
      h(
        M.div,
        fadeUp,
        h(SectionLabel, { light: true }, "Distributor Opportunity"),
        h("h2", { className: "headline-balance font-display text-4xl font-black leading-tight sm:text-5xl" }, "Grow Your Business with Saloni Cleaning Products"),
        h("p", { className: "mt-6 max-w-2xl text-lg leading-8 text-blue-50" }, "Join our growing distributor network and build a successful business with high-demand cleaning products trusted across Maharashtra."),
        h("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row" }, h(Button, { href: "distributor/", variant: "light" }, "Become Distributor"), h(Button, { href: "#contact", className: "border border-white/25 bg-transparent hover:bg-white/10" }, "Contact Us"))
      ),
      h(
        M.div,
        { ...fadeUp, className: "relative bg-white p-6 shadow-premium" },
        h("img", { src: A.lineup, alt: "Distributor product range for Saloni Cleaning Products", className: "w-full object-contain product-shadow", loading: "lazy", decoding: "async" }),
        h("div", { className: "mt-5 grid grid-cols-3 gap-3 text-center text-saloni-blue" }, [["Bulk", "5 L and 35 L"], ["Retail", "Fast repeat"], ["Support", "Responsive"]].map(([a, b]) => h("div", { key: a, className: "bg-saloni-bg p-4" }, h("strong", { className: "block font-display text-xl font-black" }, a), h("span", { className: "text-xs font-bold text-slate-600" }, b))))
      )
    )
  );
}

function Testimonials() {
  return h(
    "section",
    { className: "bg-saloni-bg py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto max-w-7xl px-5 lg:px-8" },
      h(M.div, { ...fadeUp, className: "mb-12 max-w-3xl" }, h(SectionLabel, null, "Trade Confidence"), h("h2", { className: "font-display text-4xl font-black text-saloni-ink sm:text-5xl" }, "Trusted by partners who build repeat business.")),
      h("div", { className: "grid gap-5 lg:grid-cols-3" }, testimonials.map((t) => h(M.article, { key: t.name, ...fadeUp, className: "border border-slate-200 bg-white p-8 shadow-sm" }, h("p", { className: "text-lg font-semibold leading-8 text-slate-700" }, '"', t.quote, '"'), h("div", { className: "mt-8 border-t border-slate-200 pt-5" }, h("strong", { className: "block font-display text-xl font-black text-saloni-blue" }, t.name), h("span", { className: "text-sm font-bold text-slate-500" }, t.role)))))
    )
  );
}

function Gallery() {
  return h(
    "section",
    { className: "bg-white py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto max-w-7xl px-5 lg:px-8" },
      h(M.div, { ...fadeUp, className: "mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end" }, h("div", null, h(SectionLabel, null, "Product Gallery"), h("h2", { className: "font-display text-4xl font-black text-saloni-ink sm:text-5xl" }, "Packaging, products, and manufacturing pride.")), h("p", { className: "max-w-md text-sm font-semibold leading-6 text-slate-600" }, "A visual system anchored in real product packaging, practical pack sizes, and the business credibility distributors need.")),
      h("div", { className: "masonry-grid" }, gallery.map(([src, alt, type]) => h(M.figure, { key: alt, ...fadeUp, className: cx("gallery-tile border border-slate-200 p-5 shadow-sm", type) }, h("img", { src, alt, loading: "lazy", decoding: "async" }))))
    )
  );
}

function Contact() {
  return h(
    "section",
    { id: "contact", className: "bg-saloni-bg py-24 lg:py-32" },
    h(
      "div",
      { className: "mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8" },
      h(
        M.div,
        { ...fadeUp, className: "border border-slate-200 bg-white p-6 shadow-premium sm:p-9" },
        h(SectionLabel, null, "Send Inquiry"),
        h("h2", { className: "font-display text-4xl font-black text-saloni-ink" }, "Tell us what you want to build."),
        h(
          "form",
          {
            className: "mt-8 grid gap-4",
            onSubmit: (event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const message = `Hello, I want to inquire about Saloni Cleaning Products.\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nBusiness Type: ${data.get("type")}\nMessage: ${data.get("message")}`;
              window.open(`https://wa.me/919527517078?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
            },
          },
          h("input", { className: "input-field", name: "name", placeholder: "Name", required: true }),
          h("input", { className: "input-field", name: "phone", placeholder: "Phone", required: true }),
          h("select", { className: "input-field", name: "type", defaultValue: "Distributor inquiry" }, ["Distributor inquiry", "Retail purchase", "Bulk order", "Institutional supply", "Other"].map((x) => h("option", { key: x }, x))),
          h("textarea", { className: "input-field min-h-36", name: "message", placeholder: "Message", required: true }),
          h("button", { className: "min-h-12 bg-saloni-red px-6 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#c92f2b]", type: "submit" }, "Send Inquiry")
        )
      ),
      h(
        M.div,
        { ...fadeUp, className: "grid gap-5" },
        h("div", { className: "border border-slate-200 bg-white p-8 shadow-sm" }, h(SectionLabel, null, "Contact Details"), h("h3", { className: "font-display text-3xl font-black text-saloni-blue" }, "Pune, Maharashtra"), h("div", { className: "mt-6 grid gap-4 text-sm font-semibold leading-6 text-slate-700" }, h("p", null, h("strong", null, "Address: "), "Sr. No. 58/1, Shikshak Society, Galli No. 1, Gokul Nagar, Katraj Kondhwa Road, Pune 411048"), h("p", null, h("strong", null, "Phone: "), h("a", { href: "tel:+919527517078", className: "text-saloni-blue" }, "+91 95275 17078"), " / ", h("a", { href: "tel:+918087681507", className: "text-saloni-blue" }, "+91 80876 81507")), h("p", null, h("strong", null, "Email: "), h("a", { href: "mailto:salonipune2001@gmail.com", className: "text-saloni-blue" }, "salonipune2001@gmail.com")), h("p", null, h("strong", null, "Working Hours: "), "Monday to Saturday, 10:00 AM to 6:30 PM"))),
        h("div", { className: "map-frame overflow-hidden border border-slate-200 bg-white shadow-sm" }, h("iframe", { title: "Saloni Cleaning Products location map", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", src: "https://www.google.com/maps?q=Gokul%20Nagar%20Katraj%20Kondhwa%20Road%20Pune%20411048&output=embed" }))
      )
    )
  );
}

function Footer() {
  return h(
    "footer",
    { className: "bg-[#081c31] pt-16 text-white" },
    h(
      "div",
      { className: "mx-auto grid max-w-7xl gap-10 px-5 pb-12 lg:grid-cols-[1.15fr_0.7fr_0.9fr_1fr] lg:px-8" },
      h("div", null, h("img", { src: A.logo, alt: "Saloni Cleaning Products logo", className: "footer-logo-premium bg-white p-2" }), h("p", { className: "mt-5 max-w-sm text-sm leading-7 text-blue-100" }, "A proudly women-led Indian manufacturing company creating practical cleaning products, distributor opportunities, and business growth since 2011.")),
      h("div", null, h("h3", { className: "mb-5 font-display text-lg font-black" }, "Quick Links"), navItems.map(([label, href]) => h("a", { key: label, href, className: "mb-3 block text-sm font-semibold text-blue-100 hover:text-white" }, label))),
      h("div", null, h("h3", { className: "mb-5 font-display text-lg font-black" }, "Product Categories"), categories.slice(0, 6).map((cat) => h("a", { key: cat.title, href: cat.href, className: "mb-3 block text-sm font-semibold text-blue-100 hover:text-white" }, cat.title))),
      h("div", null, h("h3", { className: "mb-5 font-display text-lg font-black" }, "Contact Details"), h("p", { className: "text-sm leading-7 text-blue-100" }, "Pune, Maharashtra"), h("a", { href: "tel:+919527517078", className: "mt-3 block text-sm font-semibold text-blue-100 hover:text-white" }, "+91 95275 17078"), h("a", { href: "tel:+918087681507", className: "mt-3 block text-sm font-semibold text-blue-100 hover:text-white" }, "+91 80876 81507"), h("a", { href: "mailto:salonipune2001@gmail.com", className: "mt-3 block text-sm font-semibold text-blue-100 hover:text-white" }, "salonipune2001@gmail.com"))
    ),
    h("div", { className: "border-t border-white/10 px-5 py-5 text-center text-sm font-semibold text-blue-100" }, "© 2026 Saloni Cleaning Products")
  );
}

function App() {
  return h(
    React.Fragment,
    null,
    h("div", { className: "grain" }),
    h(Header),
    h("main", null, h(Hero), h(TrustStrip), h(About), h(Empowerment), h(ProductCategories), h(FeaturedProducts), h(WhyChooseUs), h(DistributorCTA), h(Testimonials), h(Gallery), h(Contact)),
    h(Footer)
  );
}

createRoot(document.getElementById("root")).render(h(App));
