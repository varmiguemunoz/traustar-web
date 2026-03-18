import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, b as addAttribute, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, b as $$Icon, a as $$Button } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Términos de Servicio | Traustar Logistics";
  const description = "Términos y condiciones de uso de los servicios de Traustar Logistics Inc. Conozca sus derechos y obligaciones.";
  const sidebarLinks = [
    { id: "introduccion", icon: "info", label: "Introducción" },
    { id: "servicio", icon: "work", label: "Descripción del Servicio" },
    { id: "responsabilidades", icon: "person", label: "Responsabilidades" },
    { id: "propiedad", icon: "copyright", label: "Propiedad Intelectual" },
    { id: "responsabilidad-limitada", icon: "gavel", label: "Limitación de Responsabilidad" },
    { id: "ley", icon: "format_paragraph", label: "Ley Aplicable" },
    { id: "terminacion", icon: "cancel", label: "Terminación" }
  ];
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-background-light text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"> <div class="flex flex-col lg:flex-row gap-12"> <!-- Sticky Sidebar Navigation --> <aside class="lg:w-1/4"> <div class="sticky top-24 space-y-1"> <div class="mb-6 px-3"> <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500">Contenido</h3> </div> ${sidebarLinks.map((link, i) => renderTemplate`<a${addAttribute(`#${link.id}`, "href")}${addAttribute([
    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
    i === 0 ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-100"
  ], "class:list")}> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "size": "text-[20px]" })} ${link.label} </a>`)} </div> </aside> <!-- Document Content --> <article class="lg:w-3/4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"> <div class="p-8 md:p-12"> <header class="mb-10 border-b border-slate-100 pb-8"> <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Términos y Condiciones de Uso</h1> <p class="text-slate-500 flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "calendar_today", "size": "text-[18px]" })}
Última actualización: 24 de mayo de 2024
</p> </header> <div class="space-y-10"> <section class="scroll-mt-24" id="introduccion"> <h2 class="text-xl font-bold text-slate-900 mb-4">1. Introducción</h2> <p class="text-slate-600 leading-relaxed">
Bienvenido a Traustar Logistics Inc. Al acceder y utilizar este sitio web y los servicios ofrecidos por nuestra firma de intermediación de carga (freight brokering), usted acepta estar sujeto a los siguientes términos y condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestro sitio web ni nuestros servicios profesionales.
</p> </section> <section class="scroll-mt-24" id="servicio"> <h2 class="text-xl font-bold text-slate-900 mb-4">2. Descripción del Servicio</h2> <p class="text-slate-600 leading-relaxed mb-4">
Traustar Logistics Inc. opera como un agente de intermediación de carga con licencia (Freight Broker), actuando como enlace entre cargadores (shippers) y transportistas motorizados (carriers).
</p> <ul class="list-disc pl-5 space-y-2 text-slate-600"> <li>Nuestra plataforma facilita la cotización, reserva y seguimiento de envíos terrestres.</li> <li>Traustar Logistics Inc. no es una compañía de transporte y no posee camiones propios para el traslado físico de la mercancía.</li> <li>Nuestra responsabilidad se limita a la selección diligente de transportistas calificados y la gestión administrativa del flete.</li> </ul> </section> <section class="scroll-mt-24" id="responsabilidades"> <h2 class="text-xl font-bold text-slate-900 mb-4">3. Responsabilidades del Usuario</h2> <p class="text-slate-600 leading-relaxed mb-4">
Al utilizar nuestros servicios, el usuario garantiza y se compromete a:
</p> <div class="grid md:grid-cols-2 gap-6"> <div class="p-4 bg-slate-50 rounded-lg"> <h4 class="font-bold text-sm mb-2 text-primary">Precisión de Información</h4> <p class="text-sm text-slate-600">Proporcionar datos precisos sobre el peso, dimensiones y naturaleza de la carga.</p> </div> <div class="p-4 bg-slate-50 rounded-lg"> <h4 class="font-bold text-sm mb-2 text-primary">Capacidad Legal</h4> <p class="text-sm text-slate-600">Confirmar que tiene la edad legal y autoridad para contratar servicios logísticos.</p> </div> <div class="p-4 bg-slate-50 rounded-lg"> <h4 class="font-bold text-sm mb-2 text-primary">Uso Lícito</h4> <p class="text-sm text-slate-600">No utilizar la plataforma para el transporte de materiales ilegales o prohibidos.</p> </div> <div class="p-4 bg-slate-50 rounded-lg"> <h4 class="font-bold text-sm mb-2 text-primary">Seguridad de Cuenta</h4> <p class="text-sm text-slate-600">Mantener la confidencialidad de sus credenciales de acceso al portal.</p> </div> </div> </section> <section class="scroll-mt-24" id="propiedad"> <h2 class="text-xl font-bold text-slate-900 mb-4">4. Propiedad Intelectual</h2> <p class="text-slate-600 leading-relaxed">
Todo el contenido presente en este sitio, incluyendo pero no limitado a logotipos, textos, gráficos, interfaces y software, es propiedad exclusiva de Traustar Logistics Inc. o de sus licenciantes y está protegido por las leyes de propiedad intelectual internacionales y de los Estados Unidos. Se prohíbe la reproducción parcial o total sin consentimiento previo por escrito.
</p> </section> <section class="scroll-mt-24" id="responsabilidad-limitada"> <h2 class="text-xl font-bold text-slate-900 mb-4">5. Limitación de Responsabilidad</h2> <div class="bg-primary/5 border-l-4 border-primary p-6 mb-4"> <p class="text-slate-700 italic text-sm">
"Traustar Logistics Inc. actúa únicamente como intermediario. La responsabilidad directa por daños, pérdidas o retrasos en la entrega recae exclusivamente en el transportista asignado (Carrier)."
</p> </div> <p class="text-slate-600 leading-relaxed">
No seremos responsables por pérdidas indirectas, lucro cesante o daños resultantes de causas de fuerza mayor, huelgas, condiciones climáticas extremas o acciones de autoridades gubernamentales. Nuestra responsabilidad financiera máxima en cualquier reclamación no excederá los montos pagados por el servicio de intermediación específico.
</p> </section> <section class="scroll-mt-24" id="ley"> <h2 class="text-xl font-bold text-slate-900 mb-4">6. Ley Aplicable</h2> <p class="text-slate-600 leading-relaxed">
Estos términos se rigen e interpretan de acuerdo con las leyes del <strong>Estado de Illinois, Estados Unidos</strong>. Cualquier disputa relacionada con estos términos será resuelta exclusivamente en los tribunales competentes de dicho estado.
</p> </section> <section class="scroll-mt-24" id="terminacion"> <h2 class="text-xl font-bold text-slate-900 mb-4">7. Terminación</h2> <p class="text-slate-600 leading-relaxed">
Traustar Logistics Inc. se reserva el derecho de suspender o terminar el acceso a los servicios de cualquier usuario que infrinja estos términos, a nuestra sola discreción y sin previo aviso, con el fin de proteger la integridad de nuestras operaciones y la red de transportistas.
</p> </section> </div> <!-- Contact Footer --> <div class="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6"> <div class="flex items-center gap-4"> <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mail" })} </div> <div> <h4 class="font-bold text-slate-900">¿Preguntas legales?</h4> <p class="text-sm text-slate-500">legal@traustarlogistics.com</p> </div> </div> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "md", "className": "gap-2" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "download", "size": "text-[20px]" })} Descargar PDF
` })} </div> </div> </article> </div> </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/terms/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/terms/index.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
