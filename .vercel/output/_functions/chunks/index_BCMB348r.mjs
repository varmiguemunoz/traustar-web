import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, d as renderComponent, r as renderTemplate, e as renderHead } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { b as $$Icon, $ as $$Navbar } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';
import { $ as $$ServiceHero } from './ServiceHero_CTTeXm1Q.mjs';
import { $ as $$ServiceCta } from './ServiceCta_DYOCjd7b.mjs';

const $$ComparisonCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ComparisonCards;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="px-4 sm:px-6 lg:px-8 py-12 md:py-16"> <div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${items.map((item) => renderTemplate`<div class="flex flex-col gap-6 p-8 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"> <div class="bg-primary/10 size-12 rounded-lg flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "className": "text-primary" })} </div> <div> <h3 class="text-xl font-bold mb-2">${item.title}</h3> <p class="text-slate-600 leading-relaxed mb-4">${item.description}</p> <ul class="space-y-2"> ${item.checks.map((check) => renderTemplate`<li class="flex items-center gap-2 text-sm text-slate-500"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check_circle", "className": "text-primary", "size": "text-xs" })} ${check} </li>`)} </ul> </div> </div>`)} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/ComparisonCards.astro", void 0);

const $$DataDrivenSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DataDrivenSection;
  const { title, subtitle, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary text-white rounded-2xl p-8 md:p-16 my-12 md:my-20 mx-4 sm:mx-6 lg:mx-auto max-w-7xl"> <div class="max-w-3xl mx-auto text-center flex flex-col gap-6"> <h2 class="text-3xl md:text-5xl font-black tracking-tight leading-tight">${title}</h2> <p class="text-lg md:text-xl text-white/80">${subtitle}</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"> ${features.map((feat) => renderTemplate`<div class="flex flex-col items-center gap-3"> <div class="size-14 rounded-full bg-white/10 flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": feat.icon, "size": "text-3xl" })} </div> <h4 class="font-bold text-lg">${feat.title}</h4> <p class="text-sm text-white/70">${feat.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/DataDrivenSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Spot & Contract Freight Management | Traustar Logistics Inc.";
  const description = "Navigate the complexities of modern logistics. Balance long-term financial stability with the agility required for immediate market demands.";
  const comparisonItems = [
    {
      icon: "calendar_today",
      title: "Contract: Long-Term Stability",
      description: "Secure predictable, fixed rates for consistent high-volume lanes. Best for established supply chains requiring budget certainty and guaranteed capacity throughout the year.",
      checks: ["Protection against market volatility", "Guaranteed carrier commitment", "Simplified administrative overhead"]
    },
    {
      icon: "trending_up",
      title: "Spot: Immediate Agility",
      description: "Access real-time market capacity for urgent shipments or seasonal surges. Leverage fluctuating rates to find quick wins and handle overflow when your contracted routes are at capacity.",
      checks: ["Real-time market rate dynamic", "Instant capacity for urgent loads", "Flexibility for seasonal changes"]
    }
  ];
  const dataFeatures = [
    { icon: "precision_manufacturing", title: "Predictive Models", description: "Anticipate rate shifts before they happen with our AI forecasting." },
    { icon: "speed", title: "Real-time Benchmarking", description: "Compare your contract rates against current market spot rates instantly." },
    { icon: "hub", title: "Dynamic Routing", description: "Optimize your lane mix based on historical performance and future trends." }
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-slate-50 text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "ServiceHero", $$ServiceHero, { "badge": "Freight Management Solutions", "title": "Strategic Freight:", "titleHighlight": "Spot & Contract", "description": "Navigate the complexities of modern logistics. Balance long-term financial stability with the agility required for immediate market demands.", "primaryCta": "View Pricing", "primaryCtaHref": "/quote", "secondaryCta": "Talk to Expert", "secondaryCtaHref": "/contact", "heroImage": "/images/svc-spot-contract-hero.jpg", "heroImageAlt": "Modern logistics warehouse with shipping containers", "variant": "light" })} <!-- Comparison Section --> <section class="px-4 sm:px-6 lg:px-8 py-8"> <div class="max-w-7xl mx-auto"> <div class="flex border-b border-slate-200 gap-8 mb-8 overflow-x-auto whitespace-nowrap"> <button class="flex items-center gap-2 border-b-2 border-primary text-primary pb-4 font-bold transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "handshake", "size": "text-sm" })} Contract Logistics
</button> <button class="flex items-center gap-2 border-b-2 border-transparent text-slate-500 pb-4 font-bold hover:text-slate-700 transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "flash_on", "size": "text-sm" })} Spot Market
</button> <button class="flex items-center gap-2 border-b-2 border-transparent text-slate-500 pb-4 font-bold hover:text-slate-700 transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "monitoring", "size": "text-sm" })} Data Analytics
</button> </div> </div> </section> ${renderComponent($$result, "ComparisonCards", $$ComparisonCards, { "items": comparisonItems })} ${renderComponent($$result, "DataDrivenSection", $$DataDrivenSection, { "title": "The Data-Driven Advantage", "subtitle": "Our platform uses millions of data points to ensure you're getting the most competitive rates regardless of your strategy.", "features": dataFeatures })} ${renderComponent($$result, "ServiceCta", $$ServiceCta, { "title": "Ready to optimize your shipping strategy?", "description": "Join over 500+ enterprises who trust Traustar for their global logistics management. Let our experts build a custom mix of spot and contract for your business.", "primaryCta": "Book a Strategy Session", "primaryCtaHref": "/quote" })} ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/spot-contract/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/spot-contract/index.astro";
const $$url = "/servicios/spot-contract";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
