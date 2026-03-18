import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, e as renderHead } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';
import { $ as $$ServiceHero } from './ServiceHero_CTTeXm1Q.mjs';
import { $ as $$ValuePropsGrid } from './ValuePropsGrid_DPOrlOxw.mjs';
import 'clsx';
import { $ as $$ServiceCta } from './ServiceCta_DYOCjd7b.mjs';

const $$ServiceCardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceCardGrid;
  const { sectionTitle, cards } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-24 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold mb-10 text-center">${sectionTitle}</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${cards.map((card) => renderTemplate`<a${addAttribute(card.href, "href")} class="group flex flex-col bg-slate-50 rounded-xl overflow-hidden border border-transparent hover:border-primary/30 transition-all shadow-sm hover:shadow-md"> <div class="aspect-video relative overflow-hidden"> <div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"${addAttribute(`background-image: url('${card.image}');`, "style")}></div> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute bottom-4 left-4 text-white font-bold text-sm">${card.label}</div> </div> <div class="p-6 flex flex-col flex-1"> <h3 class="text-lg font-bold mb-2">${card.title}</h3> <p class="text-slate-600 text-sm flex-1 mb-4">${card.description}</p> <span class="text-primary text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
View Details
<span class="material-symbols-outlined text-sm">arrow_forward</span> </span> </div> </a>`)} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/ServiceCardGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Our Logistics Services | Traustar Logistics Inc.";
  const description = "From standard truckloads to complex intermodal freight, Traustar Logistics provides the expertise and technology to keep your business moving forward.";
  const valueProps = [
    { icon: "analytics", title: "Real-Time Visibility", description: "Advanced TMS integration provides 100% accurate tracking and predictive arrival times for every shipment." },
    { icon: "hub", title: "Scalable Capacity", description: "Direct access to a vetted network of over 50,000 premium carriers across North America and beyond." },
    { icon: "support_agent", title: "24/7 Expert Support", description: "Dedicated account managers and operations teams available around the clock to solve complex freight challenges." }
  ];
  const services = [
    { image: "/images/svc-ftl-hero.jpg", imageAlt: "FTL truck", label: "FTL", title: "Full Truckload", description: "Dedicated capacity for high-volume needs with point-to-point security.", href: "/servicios/ftl" },
    { image: "/images/svc-ltl-hero.jpg", imageAlt: "LTL warehouse", label: "LTL", title: "Less-Than-Truckload", description: "Cost-effective shipping for smaller loads through our optimized network.", href: "/servicios/ltl" },
    { image: "/images/svc-reefer-hero.jpg", imageAlt: "Reefer container", label: "Reefer", title: "Temp Controlled", description: "Precise climate control for sensitive perishables and pharmaceuticals.", href: "/servicios/reefer" },
    { image: "/images/svc-flatbed-hero.jpg", imageAlt: "Flatbed trailer", label: "Flatbed", title: "Open Deck", description: "Versatile solutions for oversized cargo and construction materials.", href: "/servicios/flatbed" },
    { image: "/images/svc-specialized-hero.jpg", imageAlt: "Specialized cargo", label: "Specialized", title: "Heavy Haul", description: "Expert handling for high-value, complex, and oversized freight.", href: "/servicios/carga-especializada" },
    { image: "/images/svc-inter-hero.jpg", imageAlt: "Intermodal train", label: "Intermodal", title: "Intermodal & Rail", description: "Eco-friendly and cost-efficient long-haul transportation solutions.", href: "/servicios/intermodal" },
    { image: "/images/svc-drayage-hero.jpg", imageAlt: "Container port", label: "Drayage", title: "Port Services", description: "Seamless container movement from ports to rail heads or warehouses.", href: "/servicios/drayage" },
    { image: "/images/svc-cb-hero.jpg", imageAlt: "Border crossing", label: "Cross-Border", title: "Global Trade", description: "Customs expertise in US-Mexico-Canada trade and beyond.", href: "/servicios/cross-border" },
    { image: "/images/svc-exp-hero.jpg", imageAlt: "Expedited delivery", label: "Expedited", title: "Hot Shot", description: "Time-critical delivery when every second counts for your supply chain.", href: "/servicios/expedited" }
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "ServiceHero", $$ServiceHero, { "badge": "Global Supply Chain Solutions", "title": "Our Comprehensive Logistics", "titleHighlight": "Services", "description": "From standard truckloads to complex intermodal freight, Traustar Logistics provides the expertise and technology to keep your business moving forward.", "primaryCta": "Request Strategy Session", "primaryCtaHref": "/quote", "secondaryCta": "Download Brochure", "secondaryCtaHref": "/contact", "heroImage": "/images/svc-overview-hero.jpg", "heroImageAlt": "Modern logistics warehouse with shipping containers and trucks", "variant": "light" })} ${renderComponent($$result, "ValuePropsGrid", $$ValuePropsGrid, { "sectionTitle": "The Traustar Strategic Advantage", "sectionSubtitle": "Why leading enterprises choose Traustar as their primary logistics partner.", "items": valueProps })} ${renderComponent($$result, "ServiceCardGrid", $$ServiceCardGrid, { "sectionTitle": "Our Core Logistics Solutions", "cards": services })} ${renderComponent($$result, "ServiceCta", $$ServiceCta, { "title": "Ready to Optimize Your Logistics?", "description": "Join thousands of companies who trust Traustar for their critical shipping needs. Get a custom quote or schedule a consultation today.", "primaryCta": "Get Started Now", "primaryCtaHref": "/quote", "secondaryCta": "Speak with an Expert", "secondaryCtaHref": "/contact" })} ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/index.astro";
const $$url = "/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
