import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, b as addAttribute, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, b as $$Icon } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';

const $$LogisticsGuides = createComponent(($$result, $$props, $$slots) => {
  const title = "Logistics Resource Center | Traustar Logistics";
  const description = "Domine las complejidades del transporte moderno con nuestra biblioteca curada de guías en profundidad, checklists e insights de la industria.";
  const guides = [
    {
      title: "The Ultimate Guide to FTL vs LTL",
      description: "Learn the key differences between Full Truckload and Less Than Truckload shipping to optimize your strategy.",
      image: "/images/guides-ftl.jpg",
      icon: "picture_as_pdf",
      alt: "FTL vs LTL Guide"
    },
    {
      title: "Navigating Cross-Border Logistics (US/MX/CA)",
      description: "A comprehensive guide to seamless shipping between the US, Mexico, and Canada markets.",
      image: "/images/guides-crossborder.jpg",
      icon: "public",
      alt: "Cross-Border Logistics"
    },
    {
      title: "Carrier Selection Checklist: 10 Critical Factors",
      description: "Ensure you're choosing the right logistics partner with these 10 essential vetting criteria.",
      image: "/images/guides-checklist.jpg",
      icon: "fact_check",
      alt: "Carrier Selection Checklist"
    },
    {
      title: "Understanding Freight Class & NMFC Numbers",
      description: "Master the complexities of freight classification to optimize and protect your shipping costs.",
      image: "/images/guides-freight.jpg",
      icon: "inventory_2",
      alt: "Freight Class Guide"
    }
  ];
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Hero Section --> <section class="bg-white py-16 sm:py-24 border-b border-slate-200 pt-28"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <nav class="mb-4 flex items-center gap-2 text-sm font-medium text-primary"> <a class="hover:underline" href="/">Home</a> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron_right", "size": "text-xs" })} <span class="text-slate-500">Resources</span> </nav> <h1 class="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
Logistics Resource Center
</h1> <p class="text-lg sm:text-xl text-slate-600 leading-relaxed">
Master the complexities of modern transportation with our expert-curated library of in-depth guides, checklists, and industry insights.
</p> </div> </div> </section> <!-- Guides Grid --> <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"> <div class="flex items-center justify-between mb-10"> <h2 class="text-2xl font-bold text-slate-900">Featured Educational Guides</h2> <div class="flex items-center gap-2 text-sm font-semibold text-primary cursor-pointer hover:underline">
View all resources
${renderComponent($$result, "Icon", $$Icon, { "name": "arrow_forward", "size": "text-sm" })} </div> </div> <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"> ${guides.map((guide) => renderTemplate`<div class="group flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1"> <div class="relative aspect-[16/10] overflow-hidden bg-slate-200"> <img${addAttribute(guide.alt, "alt")} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"${addAttribute(guide.image, "src")} loading="lazy"> <div class="absolute top-3 right-3 rounded-full bg-white/90 p-2 text-primary shadow-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": guide.icon })} </div> </div> <div class="flex flex-1 flex-col p-6"> <h3 class="mb-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-primary transition-colors"> ${guide.title} </h3> <p class="mb-6 flex-1 text-sm leading-relaxed text-slate-600"> ${guide.description} </p> <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-primary hover:text-white transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "download", "size": "text-lg" })}
Download Guide
</button> </div> </div>`)} </div> </section> <!-- Newsletter Section --> <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"> <div class="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-center shadow-2xl sm:px-12 sm:py-24"> <div class="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div> <div class="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div> <div class="relative z-10 flex flex-col items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mail", "size": "text-5xl", "className": "text-white/90 mb-6" })} <h2 class="text-3xl font-black tracking-tight text-white sm:text-4xl mb-4">Stay Informed</h2> <p class="mx-auto max-w-2xl text-lg bg-white/10 rounded-full px-6 py-1 text-white mb-10">
Subscribe to our newsletter for the latest logistics insights and industry updates.
</p> <form class="flex w-full max-w-lg flex-col gap-3 sm:flex-row"> <input class="h-14 flex-1 rounded-xl border-none bg-white px-6 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-white/30" placeholder="Enter your email address" required type="email"> <button class="h-14 rounded-xl bg-slate-900 px-8 text-base font-bold text-white shadow-xl hover:bg-slate-800 transition-all sm:w-auto" type="submit">
Subscribe Now
</button> </form> <p class="mt-4 text-sm text-white/70">We respect your privacy. Unsubscribe at any time.</p> </div> </div> </section> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/logistics-guides/logistics-guides.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/logistics-guides/logistics-guides.astro";
const $$url = "/logistics-guides/logistics-guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$LogisticsGuides,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
