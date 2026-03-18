import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, r as renderTemplate, b as addAttribute } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Navbar, a as $$Button, b as $$Icon } from './Navbar_DbnW6vow.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';
import { $ as $$TestimonialStars } from './TestimonialStars_BVXU4Lme.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Únete a nuestra Red de Carriers | Traustar Logistsics";
  const description = "Accede a cargas premium en toda Norteamérica con QuickPay en 48 hrs. Empoderamos a las empresas de transporte con tecnología y soporte real.";
  const benefits = [
    {
      icon: "currency_exchange",
      title: "Pagos rápidos",
      description: "Nuestro programa QuickPay garantiza depósitos en 48 horas tras completar la entrega."
    },
    {
      icon: "public",
      title: "Cargas Premium",
      description: "Acceso exclusivo a rutas transfronterizas y nacionales en EE.UU., México y Canadá."
    },
    {
      icon: "edgesensor_low",
      title: "Tecnología",
      description: "Gestión digital de documentos y rutas optimizadas para reducir tiempos muertos."
    },
    {
      icon: "headset_mic",
      title: "Soporte 24/7",
      description: "Asistencia real por personas capacitadas en cada kilómetro de tu trayecto."
    }
  ];
  const requirements = [
    {
      icon: "verified_user",
      title: "Autoridad Activa",
      description: "MC/MX/DOT vigente por al menos 6 meses."
    },
    {
      icon: "description",
      title: "Seguro de Carga",
      description: "Mínimo $100,000 Cargo & $1M Auto Liability."
    },
    {
      icon: "workspace_premium",
      title: "Calificación de Seguridad",
      description: "Satisfactory safety rating (FMCSA)."
    },
    {
      icon: "assignment_ind",
      title: "W-9 / RFC",
      description: "Identificación fiscal actualizada."
    }
  ];
  const testimonials = [
    {
      text: '"La rapidez de los pagos es real. Con QuickPay de Traustar, nunca hemos tenido problemas de flujo de caja para nuestra flota."',
      name: "Roberto Méndez",
      company: "Méndez Logistics",
      image: "/images/carrier-testimonial-1.jpg",
      stars: 5,
      featured: false
    },
    {
      text: '"El soporte transfronterizo es excepcional. Conocen perfectamente los procesos en Laredo y eso nos ahorra horas de espera."',
      name: "Elena Rivas",
      company: "Transportes ER",
      image: "/images/carrier-testimonial-2.jpg",
      stars: 5,
      featured: true
    },
    {
      text: '"La aplicación móvil es muy intuitiva. Mis choferes suben las evidencias al momento y todo queda registrado sin llamadas."',
      name: "David Smith",
      company: "Smith Trans Inc.",
      image: "/images/carrier-testimonial-3.jpg",
      stars: 4.5,
      featured: false
    }
  ];
  const certifications = ["FMCSA", "DOT", "C-TPAT", "SCT", "FAST"];
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="bg-white text-slate-900 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Hero Section --> <section class="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32 bg-white"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="grid gap-12 lg:grid-cols-2 lg:items-center"> <div class="relative z-10 space-y-8"> <div class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
Únete a la Red de Traustar Logistics
</div> <h1 class="text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
Optimiza tu capacidad y recibe pagos rápidos
</h1> <p class="text-lg text-slate-600 max-w-xl">
Accede a cargas premium en toda Norteamérica con QuickPay en 48
              hrs. Empoderamos a las empresas de transporte con tecnología y
              soporte real.
</p> <div class="flex flex-col sm:flex-row gap-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "lg", "className": "shadow-lg shadow-primary/30" }, { "default": ($$result2) => renderTemplate`
Registrarme como Carrier
` })} ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "size": "lg", "href": "#requisitos" }, { "default": ($$result2) => renderTemplate`
Ver Requisitos
` })} </div> </div> <div class="relative"> <div class="aspect-square overflow-hidden rounded-3xl bg-slate-100 shadow-2xl ring-1 ring-slate-200"> <img class="h-full w-full object-cover" alt="Camión moderno en la autopista al atardecer" src="/images/carrier-hero.jpg" loading="eager"> </div> <div class="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl border border-slate-100"> <div class="flex items-center gap-4"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600"> ${renderComponent($$result, "Icon", $$Icon, { "name": "payments" })} </div> <div> <p class="text-xs font-bold uppercase tracking-wider text-slate-500">
QuickPay
</p> <p class="text-xl font-black text-slate-900">48 Horas</p> </div> </div> </div> </div> </div> </div> </section> <!-- Benefits Grid --> <section class="bg-white py-24 border-t border-slate-100" id="beneficios"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
Por qué conducir con Traustar
</h2> <p class="mt-4 text-slate-600">
Diseñamos nuestro ecosistema pensando en la rentabilidad de tu flota.
</p> <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"> ${benefits.map((benefit) => renderTemplate`<div class="group rounded-2xl border border-slate-200 p-8 text-left hover:border-primary/50 transition-all"> <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": benefit.icon, "size": "text-3xl" })} </div> <h3 class="mb-3 text-xl font-bold">${benefit.title}</h3> <p class="text-slate-600">${benefit.description}</p> </div>`)} </div> </div> </section> <!-- Technology Preview --> <section class="overflow-hidden bg-slate-50 py-24" id="tecnologia"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex flex-col lg:flex-row items-center gap-16"> <div class="lg:w-1/2 space-y-6"> <h2 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
Nuestra Tecnología al Servicio del Conductor
</h2> <p class="text-lg text-slate-600">
Olvídate del papeleo excesivo. Con la App de Traustar, gestionas
              toda tu operación desde la palma de tu mano.
</p> <ul class="space-y-4"> <li class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check_circle", "className": "text-primary" })} <span class="font-medium">Subida de documentos instantánea (POD)</span> </li> <li class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check_circle", "className": "text-primary" })} <span class="font-medium">Seguimiento GPS en tiempo real</span> </li> <li class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "check_circle", "className": "text-primary" })} <span class="font-medium">Notificaciones de carga automatizadas</span> </li> </ul> </div> <div class="lg:w-1/2 relative flex justify-center"> <div class="relative z-10 w-64 rounded-[3rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl"> <div class="h-[500px] w-full overflow-hidden rounded-[2.5rem] bg-white"> <div class="p-6 text-center space-y-4"> <div class="flex justify-center text-primary"> ${renderComponent($$result, "Icon", $$Icon, { "name": "local_shipping", "size": "text-4xl" })} </div> <h4 class="font-bold">Carga Activa</h4> <div class="rounded-lg bg-slate-100 p-4 text-left"> <p class="text-xs text-slate-500">ORIGEN</p> <p class="text-sm font-bold">Laredo, TX</p> <div class="my-2 h-8 w-px bg-slate-300 ml-2"></div> <p class="text-xs text-slate-500">DESTINO</p> <p class="text-sm font-bold">Monterrey, NL</p> </div> <button class="w-full rounded-lg bg-primary py-2 text-sm font-bold text-white">Ver Detalles</button> </div> </div> </div> <div class="absolute -right-8 top-1/2 -z-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div> </div> </div> </div> </section> <!-- Requirements Section --> <section class="py-24 bg-white" id="requisitos"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="rounded-3xl bg-primary px-8 py-16 text-white lg:px-16"> <div class="grid gap-12 lg:grid-cols-2"> <div> <h2 class="text-3xl font-black sm:text-4xl">
Requisitos de Onboarding
</h2> <p class="mt-4 text-blue-100/80">
Proceso ágil para que empieces a cargar lo antes posible.
                Prepara los siguientes documentos:
</p> </div> <div class="grid gap-6 sm:grid-cols-2"> ${requirements.map((req) => renderTemplate`<div class="flex gap-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": req.icon })} <div> <p class="font-bold">${req.title}</p> <p class="text-sm text-blue-100/70">${req.description}</p> </div> </div>`)} </div> </div> </div> </div> </section> <!-- Testimonials --> <section class="py-24 bg-white" id="testimonios"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
Lo que dicen nuestros Carriers
</h2> </div> <div class="grid gap-8 md:grid-cols-3"> ${testimonials.map((t) => renderTemplate`<div${addAttribute([
    "rounded-2xl bg-slate-50 p-8 shadow-sm",
    t.featured && "border-t-4 border-primary"
  ], "class:list")}> ${renderComponent($$result, "TestimonialStars", $$TestimonialStars, { "rating": t.stars })} <p class="italic text-slate-600 mb-6 mt-4">${t.text}</p> <div class="flex items-center gap-4"> <div class="h-12 w-12 rounded-full bg-slate-300 overflow-hidden"> <img class="h-full w-full object-cover"${addAttribute(`Foto de ${t.name}`, "alt")}${addAttribute(t.image, "src")} loading="lazy"> </div> <div> <p class="font-bold">${t.name}</p> <p class="text-xs text-slate-500">${t.company}</p> </div> </div> </div>`)} </div> </div> </section> <!-- Certifications --> <section class="border-y border-slate-200 py-12 bg-white"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"> ${certifications.map((cert) => renderTemplate`<div class="flex items-center gap-2 font-black text-2xl"> ${cert} </div>`)} </div> </div> </section> <!-- Registration Form --> <section class="py-24 overflow-hidden relative bg-white"> <div class="absolute inset-0 bg-primary/5 -z-10"></div> <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"> <div class="rounded-3xl bg-white p-8 lg:p-12 shadow-2xl border border-slate-200"> <div class="text-center mb-10"> <h2 class="text-3xl font-black text-slate-900 tracking-tight">
Comienza tu Registro
</h2> <p class="mt-2 text-slate-600">
Completa el formulario y un especialista se pondrá en contacto en
              menos de 24 hrs.
</p> </div> <form class="space-y-6"> <div class="grid gap-6 sm:grid-cols-2"> <div> <label class="block text-sm font-semibold mb-2">Nombre de la Empresa</label> <input class="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none" type="text"> </div> <div> <label class="block text-sm font-semibold mb-2">Número DOT / MC</label> <input class="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none" type="text"> </div> </div> <div> <label class="block text-sm font-semibold mb-2">Correo Electrónico</label> <input class="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none" type="email"> </div> <div> <label class="block text-sm font-semibold mb-2">Número de Unidades</label> <select class="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-3 focus:border-primary focus:ring-primary focus:outline-none"> <option>1-5 unidades</option> <option>6-20 unidades</option> <option>21-50 unidades</option> <option>50+ unidades</option> </select> </div> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "lg", "className": "w-full shadow-lg shadow-primary/30" }, { "default": ($$result2) => renderTemplate`
Enviar Solicitud
` })} <p class="text-center text-xs text-slate-500">
Al registrarte, aceptas nuestros <a href="/terminos" class="text-primary hover:underline">términos y condiciones</a> y <a href="/privacidad" class="text-primary hover:underline">política de privacidad</a>.
</p> </form> </div> </div> </section> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/carriers/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/carriers/index.astro";
const $$url = "/carriers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
