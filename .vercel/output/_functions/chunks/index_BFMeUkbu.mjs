import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, b as $$Icon, a as $$Button } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Glosario de Términos Logísticos | Traustar Logistics";
  const description = "Guía completa para entender los conceptos, siglas y procesos fundamentales de la cadena de suministro global.";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const terms = [
    {
      name: "Bill of Lading (B/L)",
      category: "Documentación",
      description: "Conocimiento de embarque. Es un documento legal emitido por un transportista a un remitente que detalla el tipo, la cantidad y el destino de las mercancías que se transportan. Sirve como recibo de envío cuando las mercancías se entregan en el destino predeterminado."
    },
    {
      name: "Customs Broker",
      category: "Legal",
      description: "Agente aduanal. Profesional o empresa con licencia oficial para actuar en nombre de los importadores y exportadores en la gestión de trámites ante la aduana, asegurando el cumplimiento de todas las normativas y el pago de aranceles."
    },
    {
      name: "Drayage",
      category: "Transporte",
      description: "Transporte de corta distancia. Se refiere al traslado de contenedores o mercancías desde un puerto marítimo, terminal ferroviaria o centro logístico hasta un almacén cercano o destino final dentro de la misma región metropolitana."
    },
    {
      name: "FTL (Full Truckload)",
      category: "Modalidad",
      description: "Carga completa. Modalidad de transporte en la que un solo envío ocupa la capacidad total de un remolque de camión, o cuando el remitente prefiere contratar el espacio completo para mayor seguridad y rapidez en la entrega directa."
    },
    {
      name: "LTL (Less Than Truckload)",
      category: "Modalidad",
      description: "Carga consolidada o menor que un camión completo. Servicio de transporte para envíos que no requieren el espacio total de un remolque, permitiendo compartir el costo del transporte con otros remitentes cuyos envíos van en la misma dirección."
    },
    {
      name: "Incoterms",
      category: "Internacional",
      description: "Términos de Comercio Internacional. Reglas establecidas por la Cámara de Comercio Internacional (ICC) que definen las responsabilidades de compradores y vendedores en transacciones globales sobre el costo, riesgo y transporte de mercancías."
    }
  ];
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="flex-1 px-4 sm:px-6 md:px-8 lg:px-20 py-10 max-w-7xl mx-auto w-full pt-28"> <!-- Hero Section --> <div class="mb-12"> <h1 class="text-slate-900 text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
Glosario de Términos Logísticos
</h1> <p class="text-slate-600 text-lg max-w-2xl">
Nuestra guía completa para entender los conceptos, siglas y procesos fundamentales de la cadena de suministro global.
</p> </div> <!-- Search and Filters --> <div class="flex flex-col md:flex-row gap-4 mb-8"> <div class="flex-1 relative group"> <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search" })} </span> <input class="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Buscar término (ej. FTL, Aduana...)" type="text"> </div> <div class="flex gap-2"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "className": "flex items-center gap-2 shadow-lg shadow-primary/20" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "filter_list", "size": "text-sm" })} Filtrar
` })} </div> </div> <!-- Alphabetical Navigation --> <div class="flex flex-wrap gap-2 mb-12 p-2 bg-slate-50 rounded-xl border border-slate-200"> <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">TODOS</button> ${alphabet.map((letter) => renderTemplate`<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white text-slate-600 font-semibold text-sm transition-all"> ${letter} </button>`)} </div> <!-- Glossary Items --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${terms.map((term) => renderTemplate`<div class="p-6 bg-white border border-slate-200 rounded-2xl hover:border-primary/50 transition-all group"> <div class="flex items-start justify-between mb-3"> <h3 class="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">${term.name}</h3> <span class="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full uppercase flex-shrink-0 ml-4">${term.category}</span> </div> <p class="text-slate-600 leading-relaxed mb-4"> ${term.description} </p> <div class="pt-4 border-t border-slate-100 flex items-center gap-2 text-primary font-semibold text-sm cursor-pointer hover:gap-3 transition-all">
Ver más detalles ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow_forward", "size": "text-sm" })} </div> </div>`)} </div> <!-- Call to Action --> <div class="mt-20 p-8 md:p-12 bg-primary rounded-3xl text-white relative overflow-hidden"> <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8"> <div class="text-center md:text-left"> <h2 class="text-3xl font-black mb-4">¿No encuentras el término que buscas?</h2> <p class="text-white/80 text-lg max-w-xl">
Nuestro equipo de expertos está disponible para resolver cualquier duda sobre tus envíos o procesos logísticos.
</p> </div> <a href="/contacto" class="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all shadow-xl whitespace-nowrap">
Contactar Soporte
</a> </div> <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div> <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div> </div> </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/glossary/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/glossary/index.astro";
const $$url = "/glossary";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
