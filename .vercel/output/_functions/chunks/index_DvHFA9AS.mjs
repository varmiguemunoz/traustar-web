import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, a as $$Button, b as $$Icon } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Sobre Nosotros | Traustar Logistics Inc.";
  const description = "Combinamos el poder tecnológico de una gran corporación con la atención personalizada de una firma boutique. Conoce nuestra misión y valores.";
  const values = [
    { icon: "target", title: "Misión", description: "Impulsar el éxito de nuestros clientes mediante soluciones logísticas inteligentes, transparentes y un servicio que supera las fronteras tradicionales." },
    { icon: "visibility", title: "Visión", description: "Ser el referente regional en logística transfronteriza, reconocidos por nuestra innovación tecnológica y por ser el aliado más confiable del sector." },
    { icon: "verified_user", title: "Valores", description: "Integridad en cada trato, innovación constante, seguridad absoluta en procesos y un compromiso inquebrantable con la excelencia operativa." }
  ];
  const certifications = [
    { icon: "security", label: "FMCSA Certified" },
    { icon: "verified", label: "DOT Compliant" },
    { icon: "shield_with_heart", label: "C-TPAT Partner" },
    { icon: "gavel", label: "Safety Standards" }
  ];
  const coverage = [
    "Presencia en las 10 fronteras comerciales más activas.",
    "Monitoreo 24/7 en tiempo real en todo el territorio de TLCAN/USMCA.",
    "Alianzas con transportistas certificados en los tres países."
  ];
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Hero Section --> <section class="relative h-[500px] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0 bg-cover bg-center" style="background-image: linear-gradient(rgba(15, 73, 189, 0.7), rgba(16, 22, 34, 0.9)), url('/images/nosotros-hero.jpg');"></div> <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center"> <h1 class="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
Nuestra Misión: Transformar la Logística con Inteligencia y Cercanía
</h1> <p class="text-slate-200 text-lg md:text-xl font-normal max-w-2xl mx-auto mb-8">
Combinamos el poder tecnológico de una gran corporación con la atención personalizada de una firma boutique.
</p> <div class="flex flex-wrap justify-center gap-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "lg", "className": "shadow-lg" }, { "default": ($$result2) => renderTemplate`Conoce Más` })} ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "size": "lg", "className": "bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md" }, { "default": ($$result2) => renderTemplate`Ver Servicios` })} </div> </div> </section> <!-- Nuestra Historia --> <section class="py-20 px-4 sm:px-6 bg-white"> <div class="mx-auto max-w-6xl"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <h2 class="text-primary font-bold tracking-widest uppercase text-sm">Nuestra Historia</h2> <h3 class="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
Redefiniendo el Transporte Transfronterizo
</h3> <p class="text-slate-600 text-lg leading-relaxed">
Traustar Logistics Inc. nació con la visión de revolucionar el transporte entre naciones. Entendemos que en el mundo actual, la eficiencia no debe sacrificar la cercanía. Por eso, hemos diseñado un modelo híbrido que utiliza algoritmos de optimización de vanguardia mientras mantiene un equipo de soporte dedicado para cada uno de nuestros clientes.
</p> <div class="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border-l-4 border-primary"> ${renderComponent($$result, "Icon", $$Icon, { "name": "lightbulb", "className": "text-primary text-3xl flex-shrink-0" })} <p class="text-slate-700 italic">
"No solo movemos carga; impulsamos el crecimiento de negocios que conectan Norteamérica."
</p> </div> </div> <div class="grid grid-cols-2 gap-4"> <div class="h-64 rounded-xl bg-slate-200 bg-cover bg-center overflow-hidden" style="background-image: url('/images/nosotros-worker.jpg')"></div> <div class="h-64 rounded-xl bg-slate-200 bg-cover bg-center mt-8 overflow-hidden" style="background-image: url('/images/nosotros-meeting.jpg')"></div> </div> </div> </div> </section> <!-- Misión, Visión y Valores --> <section class="py-20 px-4 sm:px-6 bg-slate-50"> <div class="mx-auto max-w-6xl"> <div class="text-center mb-16"> <h2 class="text-3xl font-bold mb-4 text-slate-900">Misión, Visión y Valores</h2> <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div> </div> <div class="grid md:grid-cols-3 gap-8"> ${values.map((item) => renderTemplate`<div class="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"> <div class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "size": "text-3xl" })} </div> <h4 class="text-xl font-bold mb-4 text-slate-900">${item.title}</h4> <p class="text-slate-600">${item.description}</p> </div>`)} </div> </div> </section> <!-- Certificaciones --> <section class="py-20 px-4 sm:px-6 bg-white"> <div class="mx-auto max-w-6xl text-center"> <h2 class="text-2xl font-bold mb-12 text-slate-900">Cumplimiento y Certificaciones Federales</h2> <div class="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"> ${certifications.map((cert) => renderTemplate`<div class="flex flex-col items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": cert.icon, "size": "text-5xl", "className": "text-primary" })} <span class="font-bold text-slate-800">${cert.label}</span> </div>`)} </div> <p class="mt-12 text-slate-500 max-w-2xl mx-auto">
Mantenemos los más altos estándares de seguridad y regulación para garantizar que su carga cruce fronteras sin contratiempos legales o técnicos.
</p> </div> </section> <!-- Cobertura Estratégica --> <section class="py-20 px-4 sm:px-6 bg-slate-50"> <div class="mx-auto max-w-6xl"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-bold mb-6 text-slate-900">Cobertura Estratégica</h2> <p class="text-slate-600 text-lg mb-8">
Nuestra red conecta los puntos vitales de comercio en Norteamérica. Operamos con fluidez en los principales corredores de México, Estados Unidos y Canadá, asegurando una transición suave en cada puerto de entrada.
</p> <ul class="space-y-4"> ${coverage.map((item) => renderTemplate`<li class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check_circle", "className": "text-primary flex-shrink-0" })} <span>${item}</span> </li>`)} </ul> </div> <div class="rounded-2xl overflow-hidden shadow-2xl h-[400px] relative bg-slate-300"> <img class="w-full h-full object-cover" alt="Mapa de rutas logísticas en Norteamérica" src="/images/nosotros-map.jpg" loading="lazy"> <div class="absolute inset-0 bg-primary/20"></div> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-16 px-4 sm:px-6"> <div class="mx-auto max-w-4xl bg-primary rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"> <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div> <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div> <h2 class="text-3xl md:text-4xl font-bold mb-6 relative z-10">¿Listo para optimizar tu cadena de suministro?</h2> <p class="text-blue-100 text-lg mb-10 relative z-10 opacity-90">
Únete a nuestra red estratégica y experimenta la diferencia de una logística inteligente.
</p> <div class="flex flex-wrap justify-center gap-6 relative z-10"> <a href="/shippers" class="bg-white text-primary hover:bg-slate-100 font-bold py-4 px-10 rounded-xl transition-all shadow-lg flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "business" })} Soy Shipper
</a> <a href="/carriers" class="bg-white/10 hover:bg-white/20 border border-white/50 text-white font-bold py-4 px-10 rounded-xl transition-all backdrop-blur-sm flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "local_shipping" })} Soy Carrier
</a> </div> </div> </section> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/about/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
