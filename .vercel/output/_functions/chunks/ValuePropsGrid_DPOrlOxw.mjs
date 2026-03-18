import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from './entrypoint_DqZWjQNj.mjs';
import { b as $$Icon } from './Navbar_DbnW6vow.mjs';

const $$ValuePropsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ValuePropsGrid;
  const {
    sectionTitle,
    sectionSubtitle,
    items,
    bgColor = "slate",
    columns = 3
  } = Astro2.props;
  const bgClass = bgColor === "white" ? "bg-white" : "bg-slate-50";
  const gridCols = columns === 4 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-3";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${bgClass}`, "class")}> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold mb-4">${sectionTitle}</h2> ${sectionSubtitle && renderTemplate`<p class="text-slate-600 max-w-2xl mx-auto">${sectionSubtitle}</p>`} </div> <div${addAttribute(`grid ${gridCols} gap-6 md:gap-8`, "class")}> ${items.map((item) => renderTemplate`<div class="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all group"> <div class="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "size": "text-3xl" })} </div> <h3 class="text-xl font-bold mb-3">${item.title}</h3> <p class="text-slate-600 text-sm leading-relaxed">${item.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/ValuePropsGrid.astro", void 0);

export { $$ValuePropsGrid as $ };
