import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, b as $$Icon } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';
import { $ as $$ServiceHero } from './ServiceHero_CTTeXm1Q.mjs';
import { $ as $$ValuePropsGrid } from './ValuePropsGrid_DPOrlOxw.mjs';
import { $ as $$ServiceCta } from './ServiceCta_DYOCjd7b.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Drayage Services | Traustar Logistics Inc.";
  const description = "Fast and reliable port-to-facility container movement. Minimize dwell time at every major terminal with our specialized drayage fleet.";
  const metrics = [
    { icon: "timer", label: "Avg. Terminal Turn Time", value: "< 45 mins", sub: "" },
    { icon: "location_on", label: "Strategic Proximity", value: "5 Miles", sub: "Distance to major terminal gates" },
    { icon: "verified", label: "On-Time Performance", value: "99.8%", sub: "" }
  ];
  const capabilities = [
    { icon: "anchor", title: "Port-to-Door", description: "Efficient container hauling from all major coastal ports directly to your warehouse or distribution center." },
    { icon: "train", title: "Intermodal Transfer", description: "Rapid transition services from ocean freight to rail ramps or long-haul trucking networks." },
    { icon: "settings_input_component", title: "Terminal Expertise", description: "Direct integration with terminal operating systems for real-time pickup alerts and expedited processing." },
    { icon: "local_shipping", title: "OTR Seamless Move", description: "Direct transloading services to over-the-road equipment for long-distance domestic delivery." }
  ];
  const portFeatures = [
    "24/7 Gate Surveillance & Real-Time Tracking",
    "Pre-pull capabilities to avoid demurrage",
    "Dedicated chassis pool availability"
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-slate-50 text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "ServiceHero", $$ServiceHero, { "badge": "Premium Drayage Services", "title": "Fast & Reliable Port-to-Facility", "titleHighlight": "Container Movement", "description": "Minimize dwell time at every major terminal. Our specialized drayage fleet ensures a seamless transition from port to warehouse with industry-leading turn times.", "primaryCta": "Book Shipment", "primaryCtaHref": "/quote", "secondaryCta": "View Port Coverage", "secondaryCtaHref": "#ports", "heroImage": "/images/svc-drayage-hero.jpg", "heroImageAlt": "Container ship at busy port terminal", "variant": "light" })} <!-- Key Metrics --> <section class="px-4 sm:px-6 lg:px-8 py-12"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"> ${metrics.map((m) => renderTemplate`<div class="flex flex-col gap-2 rounded-xl p-8 bg-white border border-slate-200 shadow-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": m.icon, "className": "text-primary", "size": "text-3xl" })} <p class="text-slate-500 text-sm font-semibold uppercase tracking-wider mt-2">${m.label}</p> <p class="text-4xl font-black tracking-tight">${m.value}</p> ${m.sub && renderTemplate`<p class="text-xs text-slate-400 italic">${m.sub}</p>`} </div>`)} </div> </section> <!-- Capabilities Grid --> ${renderComponent($$result, "ValuePropsGrid", $$ValuePropsGrid, { "sectionTitle": "Our Drayage Capabilities", "sectionSubtitle": "We offer comprehensive short-haul trucking solutions designed to bridge the gap between ocean terminals, rail ramps, and your local facilities.", "items": capabilities, "bgColor": "white", "columns": 4 })} <!-- Port Coverage Section --> <section class="px-4 sm:px-6 lg:px-8 py-12" id="ports"> <div class="max-w-7xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200"> <div class="flex flex-col lg:flex-row"> <div class="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center"> <h2 class="text-3xl font-bold tracking-tight mb-6">Strategic Proximity to Major Terminals</h2> <p class="text-slate-600 mb-8 leading-relaxed">
Our dispatch centers are located within minutes of the nation's largest ports. This proximity allows us to secure equipment faster, avoid terminal congestion peaks, and respond instantly to last-minute container discharges.
</p> <ul class="space-y-4"> ${portFeatures.map((feature) => renderTemplate`<li class="flex items-center gap-3 text-slate-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check_circle", "className": "text-primary" })} ${feature} </li>`)} </ul> </div> <div class="lg:w-1/2 h-80 lg:h-auto bg-slate-200" style="background-image: url('/images/svc-drayage-map.jpg'); background-size: cover; background-position: center;"></div> </div> </div> </section> ${renderComponent($$result, "ServiceCta", $$ServiceCta, { "title": "Ready to streamline your drayage?", "description": "Get a custom quote in under 30 minutes for your next container movement. Experience the Traustar efficiency.", "primaryCta": "Request a Quote", "primaryCtaHref": "/quote", "secondaryCta": "Talk to an Expert", "secondaryCtaHref": "/contact" })} ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/drayage/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/drayage/index.astro";
const $$url = "/servicios/drayage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
