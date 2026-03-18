import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, b as $$Icon, a as $$Button } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Cotización FTL | Traustar Logistics Inc.";
  const description = "Fast, secure, and dedicated Full Truckload shipping across the USA, Canada, and Mexico. Access guaranteed capacity with our network of 50,000+ verified carriers.";
  const benefits = [
    { icon: "local_shipping", title: "Guaranteed Capacity", description: "Access our massive network of vetted carriers even during peak seasons and tight market conditions." },
    { icon: "verified_user", title: "Dedicated Shipments", description: "Your freight is the only cargo on the trailer, ensuring faster transit times and significantly reduced risk of damage." },
    { icon: "track_changes", title: "Real-Time Tracking", description: "Full visibility from pickup to delivery. Monitor your shipment's progress 24/7 with GPS-enabled tracking." }
  ];
  const stats = [
    { value: "99.8%", label: "On-Time Delivery" },
    { value: "50k+", label: "Carrier Network" },
    { value: "24/7", label: "Expert Support" },
    { value: "15m", label: "Avg. Quote Time" }
  ];
  const coverage = [
    { country: "USA", detail: "48 States Covered" },
    { country: "MEXICO", detail: "Border Mastery" },
    { country: "CANADA", detail: "Coast-to-Coast" }
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Hero & Quote Form --> <section class="relative overflow-hidden pt-28 pb-24 px-4 sm:px-6 bg-white"> <div class="mx-auto max-w-7xl"> <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center"> <div> <div class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6"> ${renderComponent($$result, "Icon", $$Icon, { "name": "verified_user", "size": "text-sm" })}
North American FTL Specialists
</div> <h1 class="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl mb-6">
Reliable FTL Solutions Across <span class="text-primary">North America</span> </h1> <p class="text-lg leading-relaxed text-slate-600 mb-8 max-w-xl">
Fast, secure, and dedicated Full Truckload shipping across the USA, Canada, and Mexico. Access guaranteed capacity with our network of 50,000+ verified carriers.
</p> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"> <div class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "speed", "className": "text-primary" })} <span class="text-sm font-semibold">Quotes in minutes</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "monitoring", "className": "text-primary" })} <span class="text-sm font-semibold">24/7 Monitoring</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "verified", "className": "text-primary" })} <span class="text-sm font-semibold">Verified Carriers</span> </div> </div> <div class="rounded-2xl bg-white p-2 shadow-xl border border-slate-100"> <div class="h-64 w-full rounded-xl bg-slate-200 bg-cover bg-center" style="background-image: url('/images/quote-ftl-hero.jpg');"></div> </div> </div> <!-- FTL Quote Form --> <div class="relative"> <div class="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl"></div> <div class="relative rounded-2xl bg-white p-8 shadow-2xl border border-slate-200"> <h3 class="text-2xl font-bold mb-6">Get an Instant FTL Quote</h3> <form class="space-y-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="space-y-2"> <label class="text-sm font-semibold text-slate-700">Origin Zip/City</label> <div class="relative"> <span class="absolute left-3 top-3.5 text-slate-400">${renderComponent($$result, "Icon", $$Icon, { "name": "location_on", "size": "text-lg" })}</span> <input class="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-primary" placeholder="e.g. Chicago, IL" type="text"> </div> </div> <div class="space-y-2"> <label class="text-sm font-semibold text-slate-700">Destination Zip/City</label> <div class="relative"> <span class="absolute left-3 top-3.5 text-slate-400">${renderComponent($$result, "Icon", $$Icon, { "name": "flag", "size": "text-lg" })}</span> <input class="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-primary" placeholder="e.g. Laredo, TX" type="text"> </div> </div> </div> <div class="space-y-2"> <label class="text-sm font-semibold text-slate-700">Equipment Type</label> <select class="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:border-primary focus:ring-primary"> <option>Dry Van</option> <option>Reefer (Temperature Controlled)</option> <option>Flatbed</option> <option>Step Deck</option> </select> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="space-y-2"> <label class="text-sm font-semibold text-slate-700">Cargo Weight (lbs)</label> <input class="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:border-primary focus:ring-primary" placeholder="45,000" type="number"> </div> <div class="space-y-2"> <label class="text-sm font-semibold text-slate-700">Pickup Date</label> <input class="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:border-primary focus:ring-primary" type="date"> </div> </div> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "lg", "className": "w-full shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-lg" }, { "default": ($$result2) => renderTemplate`
Generate Quote ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow_forward" })} ` })} <p class="text-center text-xs text-slate-500 mt-4">
By submitting, you agree to our <a href="/terminos" class="underline text-primary">Terms of Service</a> and <a href="/privacidad" class="underline text-primary">Privacy Policy</a>.
</p> </form> </div> </div> </div> </div> </section> <!-- Benefits Section --> <section class="bg-slate-50 py-24 px-4 sm:px-6"> <div class="mx-auto max-w-7xl"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Traustar for FTL?</h2> <p class="text-slate-600 max-w-2xl mx-auto">We streamline the complexities of Full Truckload logistics with dedicated support and cutting-edge technology.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${benefits.map((b) => renderTemplate`<div class="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-shadow group"> <div class="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": b.icon, "size": "text-3xl" })} </div> <h4 class="text-xl font-bold mb-3">${b.title}</h4> <p class="text-slate-600">${b.description}</p> </div>`)} </div> </div> </section> <!-- Coverage Section --> <section class="py-24 px-4 sm:px-6"> <div class="mx-auto max-w-7xl"> <div class="rounded-3xl bg-primary p-8 md:p-16 overflow-hidden relative"> <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-bold text-white mb-6">Seamless Cross-Border FTL</h2> <p class="text-blue-100 text-lg mb-8 leading-relaxed">
We specialize in North American logistics, moving thousands of loads monthly between the USA, Canada, and Mexico. Our team handles all customs documentation and cross-docking needs.
</p> <div class="flex flex-wrap gap-4"> ${coverage.map((c) => renderTemplate`<div class="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 flex items-center gap-3 text-white"> <span class="font-bold">${c.country}</span> <div class="h-4 w-px bg-white/30"></div> <span class="text-sm">${c.detail}</span> </div>`)} </div> </div> <div class="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"> <img alt="Logistics map" class="w-full h-full object-cover" src="/images/quote-ftl-map.jpg" loading="lazy"> </div> </div> </div> </div> </section> <!-- Stats --> <section class="py-12 px-4 sm:px-6 border-y border-slate-200"> <div class="mx-auto max-w-7xl"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8"> ${stats.map((stat) => renderTemplate`<div class="text-center"> <div class="text-4xl font-black text-primary mb-2">${stat.value}</div> <div class="text-sm font-medium text-slate-500 uppercase tracking-widest">${stat.label}</div> </div>`)} </div> </div> </section> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/quote/ftl/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/quote/ftl/index.astro";
const $$url = "/quote/ftl";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
