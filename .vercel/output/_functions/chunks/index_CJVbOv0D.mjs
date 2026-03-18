import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, e as renderHead } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { b as $$Icon, $ as $$Navbar } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';
import { $ as $$ServiceHero } from './ServiceHero_CTTeXm1Q.mjs';
import { $ as $$ValuePropsGrid } from './ValuePropsGrid_DPOrlOxw.mjs';
import 'clsx';
import { $ as $$ServiceCta } from './ServiceCta_DYOCjd7b.mjs';

const $$FeatureWithImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeatureWithImage;
  const {
    sectionTitle,
    sectionDescription,
    features,
    image,
    imageAlt = "Service feature",
    variant = "light",
    imagePosition = "left"
  } = Astro2.props;
  const isDark = variant === "dark";
  const sectionBg = isDark ? "bg-slate-900 text-white" : "bg-white";
  const textMuted = isDark ? "text-slate-400" : "text-slate-600";
  const iconColor = isDark ? "text-primary text-3xl" : "text-primary";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-16 md:py-24 ${sectionBg} overflow-hidden`, "class")}> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div${addAttribute(`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${imagePosition === "right" ? "" : ""}`, "class")}>  <div${addAttribute(`${imagePosition === "right" ? "order-1 lg:order-2" : ""}`, "class")}> <div${addAttribute(`rounded-2xl overflow-hidden shadow-2xl ${isDark ? "border border-slate-700" : ""}`, "class")}> <div class="aspect-square bg-cover bg-center bg-slate-200"${addAttribute(`background-image: url('${image}');`, "style")} role="img"${addAttribute(imageAlt, "aria-label")}></div> </div> </div>  <div${addAttribute(`space-y-8 md:space-y-12 ${imagePosition === "right" ? "order-2 lg:order-1" : ""}`, "class")}> <div> <h2 class="text-3xl md:text-4xl font-black mb-4 md:mb-6 tracking-tight">${sectionTitle}</h2> ${sectionDescription && renderTemplate`<p${addAttribute(`text-lg leading-relaxed ${textMuted}`, "class")}>${sectionDescription}</p>`} </div> <div class="grid sm:grid-cols-2 gap-6 md:gap-8"> ${features.map((feat) => renderTemplate`<div class="flex gap-4"> <div class="shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "name": feat.icon, "className": iconColor, "size": "text-3xl" })} </div> <div> <h5 class="font-bold text-lg mb-1">${feat.title}</h5> <p${addAttribute(`text-sm ${textMuted}`, "class")}>${feat.description}</p> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/FeatureWithImage.astro", void 0);

const $$FleetGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FleetGrid;
  const { sectionTitle, sectionSubtitle, cards, ctaText, ctaHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-24 bg-slate-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6"> <div class="max-w-2xl"> <h2 class="text-3xl font-bold mb-4">${sectionTitle}</h2> ${sectionSubtitle && renderTemplate`<p class="text-slate-600">${sectionSubtitle}</p>`} </div> ${ctaText && ctaHref && renderTemplate`<a class="text-primary font-bold flex items-center gap-2 group"${addAttribute(ctaHref, "href")}> ${ctaText} <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span> </a>`} </div> <div class="grid md:grid-cols-3 gap-8"> ${cards.map((card) => renderTemplate`<div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl transition-all"> <div class="h-48 bg-slate-100 bg-cover bg-center"${addAttribute(`background-image: url('${card.image}');`, "style")} role="img"${addAttribute(card.imageAlt, "aria-label")}></div> <div class="p-6"> <h3 class="font-bold text-xl mb-2">${card.title}</h3> <p class="text-sm text-slate-500 mb-4">${card.description}</p> <div class="flex flex-wrap gap-2"> ${card.tags.map((tag) => renderTemplate`<span class="bg-slate-100 text-xs font-bold px-2 py-1 rounded">${tag}</span>`)} </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/FleetGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Flatbed Transport Services | Traustar Logistics Inc.";
  const description = "Precision-engineered flatbed shipping for the most demanding cargo. From construction machinery to oversized industrial components, we deliver on schedule.";
  const solutions = [
    { icon: "construction", title: "Construction Machinery", description: "Expert transport for excavators, cranes, pavers, and earth-moving equipment. We handle all height and weight permits." },
    { icon: "factory", title: "Industrial Units", description: "Safe passage for heavy manufacturing units, generators, and large engines requiring open-deck access." },
    { icon: "straighten", title: "Structural Materials", description: "Dedicated logistics for steel beams, pipes, oversized lumber, and pre-cast concrete structures." },
    { icon: "precision_manufacturing", title: "Oversized Loads", description: "Custom solutions for unique dimensions, including pilot cars and specialized route planning for superloads." }
  ];
  const securityFeatures = [
    { icon: "verified", title: "Dunnage & Tarping", description: "Premium weather protection and load-balancing support systems." },
    { icon: "lock", title: "Chain & Binder", description: "High-tensile steel securing for the heaviest industrial machinery." },
    { icon: "monitor_heart", title: "Real-time Tracking", description: "GPS-monitored shipments with 24/7 visibility for all clients." },
    { icon: "engineering", title: "Certified Riggers", description: "Professional oversight for complex loading and unloading ops." }
  ];
  const fleetCards = [
    {
      image: "/images/svc-flatbed-standard.jpg",
      imageAlt: "Standard flatbed trailer",
      title: "Standard Flatbeds",
      description: "48ft and 53ft trailers for general freight, lumber, and steel.",
      tags: ["UP TO 48,000 LBS", "OPEN DECK"]
    },
    {
      image: "/images/svc-flatbed-stepdeck.jpg",
      imageAlt: "Step deck trailer",
      title: "Step Deck (Drop Deck)",
      description: "Ideal for taller cargo that exceeds standard height regulations.",
      tags: [`10' 2" CLEARANCE`, "LOWER GRAVITY"]
    },
    {
      image: "/images/svc-flatbed-rgn.jpg",
      imageAlt: "RGN trailer",
      title: "RGN (Removable Gooseneck)",
      description: "Drive-on capability for heavy mobile machinery and oversized loads.",
      tags: ["UP TO 150,000+ LBS", "MULTI-AXLE"]
    }
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "ServiceHero", $$ServiceHero, { "badge": "Specialized Logistics", "title": "Heavy-Haul &", "titleHighlight": "Flatbed Experts", "description": "Traustar Logistics provides precision-engineered flatbed shipping for the most demanding cargo. From construction machinery to oversized industrial components, we ensure your load is secured and delivered on schedule.", "primaryCta": "Start Your Shipment", "primaryCtaHref": "/quote", "secondaryCta": "View Fleet Specs", "secondaryCtaHref": "#fleet", "heroImage": "/images/svc-flatbed-hero.jpg", "heroImageAlt": "Modern flatbed truck carrying heavy industrial equipment on a highway", "variant": "light" })} ${renderComponent($$result, "ValuePropsGrid", $$ValuePropsGrid, { "sectionTitle": "Flatbed Solutions for Every Industry", "sectionSubtitle": "Our fleet is equipped to handle unconventional loads that standard van trailers simply cannot accommodate.", "items": solutions, "bgColor": "white", "columns": 4 })} ${renderComponent($$result, "FeatureWithImage", $$FeatureWithImage, { "sectionTitle": "Uncompromising Load Security", "sectionDescription": "Our commitment to safety begins with our securing methods. Every driver is trained in advanced rigging and tie-down procedures to ensure cargo stability throughout the journey.", "features": securityFeatures, "image": "/images/svc-flatbed-security.jpg", "imageAlt": "Heavy-duty cargo straps and chains securing a large load", "variant": "dark", "imagePosition": "right" })} <div id="fleet"> ${renderComponent($$result, "FleetGrid", $$FleetGrid, { "sectionTitle": "Our Specialized Fleet", "sectionSubtitle": "From standard flatbeds to complex multi-axle configurations, we maintain the right equipment for any challenge.", "cards": fleetCards, "ctaText": "See Equipment Specifications", "ctaHref": "/contact" })} </div> ${renderComponent($$result, "ServiceCta", $$ServiceCta, { "title": "Ready to move your heaviest assets?", "description": "Get a personalized quote within hours. Our logistics specialists are standing by to plan your next complex move.", "primaryCta": "Request Free Quote", "primaryCtaHref": "/quote", "secondaryCta": "Call (786) 688-9819", "secondaryCtaHref": "tel:+17866889819" })} ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/flatbed/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/flatbed/index.astro";
const $$url = "/servicios/flatbed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
