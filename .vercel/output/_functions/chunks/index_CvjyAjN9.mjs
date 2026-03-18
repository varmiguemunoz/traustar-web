import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, r as renderTemplate, b as addAttribute } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, b as $$Icon } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';
import { $ as $$ServiceCta } from './ServiceCta_DYOCjd7b.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Reefer & Perishable Logistics | Traustar Logistics Inc.";
  const description = "Precision temperature controlled logistics. Maintaining the integrity of your most sensitive cargo with advanced telematics, real-time thermal monitoring, and full FSMA compliance.";
  const kpis = [
    { icon: "thermostat", label: "Range", value: "-20°F to 70°F", sub: "Full range precision control for any cargo type." },
    { icon: "sensors", label: "Visibility", value: "100% Real-Time", sub: "Live data streams for temperature and humidity." },
    { icon: "verified_user", label: "Compliance", value: "FSMA Certified", sub: "Full digital audit trails for every single shipment." }
  ];
  const solutions = [
    {
      icon: "eco",
      title: "Perishables & Produce",
      description: "Advanced respiration management and humidity controls for fruits, vegetables, and floral shipments.",
      checks: ["Ethylene gas management", "Rapid pre-cooling protocols"],
      image: "/images/svc-reefer-produce.jpg",
      imageAlt: "Fresh green produce in crates"
    },
    {
      icon: "vaccines",
      title: "Bio-Pharma Logistics",
      description: "GDP-compliant transport for vaccines, medicines, and clinical trial materials requiring strict stability.",
      checks: ["Validated thermal packaging", "Redundant cooling systems"],
      image: "/images/svc-reefer-pharma.jpg",
      imageAlt: "Pharmaceutical laboratory setting"
    }
  ];
  const techFeatures = [
    { icon: "notifications_active", title: "Instant Alerts", description: "Automated notifications for temp excursions." },
    { icon: "map", title: "GPS Tracking", description: "Precise location and door sensor data." }
  ];
  const complianceItems = [
    { icon: "cleaning_services", title: "Sanitary Wash-outs", description: "Documented cleaning between every load." },
    { icon: "description", title: "Digital Log Archives", description: "6-month minimum data retention for audits." },
    { icon: "model_training", title: "Driver Training", description: "Quarterly re-certification on reefer operations." }
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-slate-50 text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Hero Section --> <section class="pt-20 px-4 sm:px-6 lg:px-8 mb-12"> <div class="max-w-7xl mx-auto"> <div class="relative overflow-hidden rounded-xl bg-slate-900 min-h-[400px] md:min-h-[480px] flex items-end"> <div class="absolute inset-0 z-0"> <img class="w-full h-full object-cover opacity-60" src="/images/svc-reefer-hero.jpg" alt="Refrigerated cargo truck" loading="eager"> <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div> </div> <div class="relative z-10 p-8 md:p-16 max-w-3xl"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span> </span>
Cold Chain Excellence
</div> <h1 class="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
Precision Temperature <br class="hidden md:block"> Controlled Logistics
</h1> <p class="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
Maintaining the integrity of your most sensitive cargo with advanced telematics, real-time thermal monitoring, and full FSMA compliance.
</p> <div class="flex flex-wrap gap-4"> <a href="/quote" class="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
Request Refrigerated Quote ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow_forward" })} </a> </div> </div> </div> </div> </section> <!-- KPI Grid --> <section class="px-4 sm:px-6 lg:px-8 mb-16"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"> ${kpis.map((kpi) => renderTemplate`<div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"> <div class="text-primary mb-4 flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": kpi.icon, "size": "text-3xl" })} <span class="text-sm font-bold uppercase tracking-widest">${kpi.label}</span> </div> <p class="text-3xl font-black text-slate-900 mb-1">${kpi.value}</p> <p class="text-slate-500 text-sm">${kpi.sub}</p> </div>`)} </div> </section> <!-- Solutions Grid --> <section class="px-4 sm:px-6 lg:px-8 mb-20"> <div class="max-w-7xl mx-auto"> <div class="mb-10"> <h2 class="text-3xl font-bold mb-4">Refrigerated Solutions</h2> <p class="text-slate-600 max-w-2xl">From pharmaceuticals to fresh produce, we provide specialized equipment and handling protocols to ensure your perishables arrive exactly as intended.</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> ${solutions.map((sol) => renderTemplate`<div class="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"> <div class="md:w-1/3 h-48 md:h-auto overflow-hidden bg-slate-200"${addAttribute(`background-image: url('${sol.image}'); background-size: cover; background-position: center;`, "style")}></div> <div class="p-8 md:w-2/3"> ${renderComponent($$result, "Icon", $$Icon, { "name": sol.icon, "className": "text-primary mb-4", "size": "text-4xl" })} <h3 class="text-xl font-bold mb-3">${sol.title}</h3> <p class="text-slate-600 mb-4">${sol.description}</p> <ul class="space-y-2 text-sm"> ${sol.checks.map((check) => renderTemplate`<li class="flex items-center gap-2 text-slate-700"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check_circle", "className": "text-primary", "size": "text-lg" })} ${check} </li>`)} </ul> </div> </div>`)} </div> </div> </section> <!-- Real-time Tech Section --> <section class="px-4 sm:px-6 lg:px-8 mb-20"> <div class="max-w-7xl mx-auto bg-primary rounded-2xl p-8 md:p-12 overflow-hidden relative"> <div class="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12"></div> <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12"> <div class="lg:w-1/2"> <h3 class="text-3xl font-black text-white mb-6">Real-Time Thermal Visibility</h3> <p class="bg-white/10 p-4 rounded-lg border border-white/20 text-white mb-8 leading-relaxed">
Every reefer unit in our fleet is equipped with state-of-the-art telematics. Our 24/7 Monitoring Center tracks temperature fluctuations within 0.5 degrees, allowing us to intervene before your cargo is at risk.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"> ${techFeatures.map((feat) => renderTemplate`<div class="flex items-start gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": feat.icon, "className": "text-white", "size": "text-3xl" })} <div> <h5 class="text-white font-bold">${feat.title}</h5> <p class="text-white/70 text-sm">${feat.description}</p> </div> </div>`)} </div> </div> <div class="lg:w-1/2 w-full"> <div class="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-2xl"> <div class="aspect-video rounded-lg bg-slate-800" style="background-image: url('/images/svc-reefer-dashboard.jpg'); background-size: cover; background-position: center;"></div> </div> </div> </div> </div> </section> <!-- FSMA Compliance Section --> <section class="px-4 sm:px-6 lg:px-8 mb-20"> <div class="max-w-7xl mx-auto"> <div class="flex flex-col md:flex-row gap-12 lg:gap-16 items-center"> <div class="md:w-1/2"> <div class="relative"> <div class="aspect-square rounded-2xl shadow-lg overflow-hidden bg-slate-200" style="background-image: url('/images/svc-reefer-compliance.jpg'); background-size: cover; background-position: center;"></div> <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl border border-slate-200 shadow-xl max-w-[200px] hidden sm:block"> <p class="text-primary font-bold text-xl mb-1">FSMA</p> <p class="text-xs text-slate-500 font-medium">Fully Compliant Sanitary Transportation of Food</p> </div> </div> </div> <div class="md:w-1/2"> <h3 class="text-3xl font-bold mb-6">Food Safety & Quality Assurance</h3> <p class="text-slate-600 mb-6 text-lg">
We don't just move food; we protect it. Our protocols meet and exceed the FDA's FSMA guidelines for the sanitary transportation of human and animal food.
</p> <div class="space-y-4"> ${complianceItems.map((item) => renderTemplate`<div class="flex gap-4 p-4 rounded-lg bg-white border border-slate-100 shadow-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "className": "text-green-500" })} <div> <h6 class="font-bold">${item.title}</h6> <p class="text-sm text-slate-500">${item.description}</p> </div> </div>`)} </div> </div> </div> </div> </section> ${renderComponent($$result, "ServiceCta", $$ServiceCta, { "title": "Ready to Protect Your Cold Chain?", "description": "Get a custom quote for your refrigerated logistics needs. Our specialists are ready to design a solution for your specific cargo requirements.", "primaryCta": "Get a Custom Quote", "primaryCtaHref": "/quote", "secondaryCta": "Speak to a Specialist", "secondaryCtaHref": "/contact" })} ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/reefer/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/reefer/index.astro";
const $$url = "/servicios/reefer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
