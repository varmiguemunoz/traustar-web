import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, r as renderTemplate, b as addAttribute } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, b as $$Icon } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Servicio Intermodal | Traustar Logistics Inc.";
  const description = "Optimice su cadena de suministro combinando la flexibilidad de la carretera con la eficiencia del ferrocarril para rutas de larga distancia.";
  const valueProps = [
    { icon: "trending_down", title: "Reducción de Costos", description: "Ahorros de hasta un 20% en rutas de larga distancia en comparación con el transporte terrestre FTL tradicional." },
    { icon: "eco", title: "Menor Huella de Carbono", description: "Reduzca sus emisiones de CO2 hasta en un 60% utilizando el medio de transporte más ecológico por tonelada-milla." },
    { icon: "calendar_today", title: "Capacidad Constante", description: "Acceso prioritario a equipos y surcos ferroviarios incluso durante picos de demanda estacionales." }
  ];
  const capabilities = [
    { icon: "train", title: "Redes Ferroviarias Clase I", description: "Alianzas estratégicas con Union Pacific, BNSF, CSX, Norfolk Southern y CPKC." },
    { icon: "local_shipping", title: "Servicios de Drayage Especializados", description: 'Recogida y entrega de "última milla" en los principales puertos y rampas ferroviarias.' },
    { icon: "track_changes", title: "Seguimiento Door-to-Door", description: "Visibilidad en tiempo real mediante tecnología EDI e integración directa con sistemas ferroviarios." }
  ];
  const comparisonRows = [
    { feature: "Costo (>700 millas)", intermodal: "Significativamente Menor", ftl: "Precio de Mercado Alto", highlight: true },
    { feature: "Impacto Ambiental", intermodal: "Bajo (75% menos emisiones)", ftl: "Alto", highlight: false },
    { feature: "Escalabilidad", intermodal: "Alta capacidad por envío", ftl: "Limitada por conductor", highlight: false },
    { feature: "Consistencia de Precio", intermodal: "Estable / Contrato", ftl: "Volátil (Spot market)", highlight: false }
  ];
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Hero --> <section class="px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-28 bg-white"> <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="flex flex-col gap-8"> <div class="flex flex-col gap-4"> <span class="text-primary font-bold tracking-wider text-sm uppercase">Transporte Multimodal</span> <h1 class="text-4xl md:text-6xl font-black leading-tight tracking-tight">
Eficiencia de Costos y Sostenibilidad con Transporte Intermodal
</h1> <p class="text-slate-600 text-lg md:text-xl leading-relaxed">
Optimice su cadena de suministro combinando la flexibilidad de la carretera con la eficiencia del ferrocarril para sus rutas de larga distancia.
</p> </div> <div class="flex flex-wrap gap-4"> <a href="/quote" class="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
Solicitar Cotización Intermodal
</a> <a href="/contacto" class="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-6 bg-slate-100 text-slate-900 text-base font-bold hover:bg-slate-200 transition-all">
Hablar con un Experto
</a> </div> </div> <div class="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200" style="background-image: url('/images/svc-inter-hero.jpg'); background-size: cover; background-position: center;"> <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div> </div> </div> </section> <!-- Value Props --> <section class="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Nuestra Propuesta de Valor</h2> <p class="text-slate-600 max-w-2xl mx-auto">
Descubra por qué el transporte intermodal es la elección inteligente para sus envíos estratégicos en Norteamérica.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${valueProps.map((vp) => renderTemplate`<div class="bg-white p-8 rounded-xl border border-slate-200 hover:border-primary transition-colors"> <div class="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6"> ${renderComponent($$result, "Icon", $$Icon, { "name": vp.icon, "size": "text-3xl" })} </div> <h3 class="text-xl font-bold mb-3">${vp.title}</h3> <p class="text-slate-600">${vp.description}</p> </div>`)} </div> </div> </section> <!-- Capabilities --> <section class="px-4 sm:px-6 lg:px-8 py-16 bg-white"> <div class="max-w-7xl mx-auto"> <div class="flex flex-col md:flex-row gap-16 items-center"> <div class="w-full md:w-1/2 grid grid-cols-2 gap-4"> <div class="bg-slate-100 h-48 rounded-lg bg-cover bg-center" style="background-image: url('/images/svc-cb-ops.jpg');"></div> <div class="bg-slate-100 h-48 rounded-lg mt-8 bg-cover bg-center" style="background-image: url('/images/svc-inter-hero.jpg');"></div> </div> <div class="w-full md:w-1/2 flex flex-col gap-8"> <h2 class="text-3xl font-bold">Capacidades Operativas de Clase Mundial</h2> <div class="space-y-6"> ${capabilities.map((cap) => renderTemplate`<div class="flex gap-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": cap.icon, "className": "text-primary" })} <div> <h4 class="font-bold">${cap.title}</h4> <p class="text-slate-600 text-sm">${cap.description}</p> </div> </div>`)} </div> </div> </div> </div> </section> <!-- Comparison Table --> <section class="px-4 sm:px-6 lg:px-8 py-16 bg-slate-50"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12">Intermodal vs. Carretera (FTL)</h2> <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-sm"> <table class="w-full text-left bg-white"> <thead class="bg-slate-50"> <tr> <th class="p-6 font-bold">Característica</th> <th class="p-6 text-primary font-bold">Servicio Intermodal</th> <th class="p-6 text-slate-600 font-bold">Carretera (FTL)</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> ${comparisonRows.map((row) => renderTemplate`<tr> <td class="p-6 font-medium">${row.feature}</td> <td${addAttribute(`p-6 ${row.highlight ? "text-green-600 font-semibold" : ""}`, "class")}>${row.intermodal}</td> <td class="p-6">${row.ftl}</td> </tr>`)} </tbody> </table> </div> </div> </section> <!-- Coverage map --> <section class="px-4 sm:px-6 lg:px-8 py-16 bg-white"> <div class="max-w-7xl mx-auto text-center"> <h2 class="text-3xl font-bold mb-4">Cobertura Total en Norteamérica</h2> <p class="text-slate-600 mb-12 max-w-2xl mx-auto">Nuestra red intermodal conecta los centros industriales clave de EE.UU., México y Canadá.</p> <div class="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100" style="background-image: url('/images/svc-inter-map.jpg'); background-size: cover; background-position: center;"> <div class="absolute inset-0 bg-primary/10 flex items-center justify-center"> <div class="bg-white/90 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-slate-200"> <h4 class="font-bold text-primary mb-2">Presencia Regional</h4> <ul class="text-left text-sm space-y-1 text-slate-700"> <li class="flex items-center gap-2"><span class="size-2 rounded-full bg-primary"></span> +120 Rampas Ferroviarias</li> <li class="flex items-center gap-2"><span class="size-2 rounded-full bg-primary"></span> Conectividad Transfronteriza</li> <li class="flex items-center gap-2"><span class="size-2 rounded-full bg-primary"></span> Puertos Marítimos Principales</li> </ul> </div> </div> </div> </div> </section> <!-- CTA --> <section class="px-4 sm:px-6 lg:px-8 py-20 bg-primary text-white text-center"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl md:text-5xl font-black mb-6">Optimice su Presupuesto de Transporte Hoy</h2> <p class="text-white/80 text-lg mb-10 leading-relaxed">
Deje que nuestros expertos diseñen una solución intermodal a la medida de sus necesidades logísticas y objetivos de sostenibilidad.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/quote" class="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all">
Solicitar Cotización Intermodal
</a> <a href="/contacto" class="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
Hablar con un Experto
</a> </div> </div> </section> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/intermodal/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/servicios/intermodal/index.astro";
const $$url = "/servicios/intermodal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
