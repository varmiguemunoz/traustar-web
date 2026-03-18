import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as addAttribute, e as renderHead } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { a as $$Button, b as $$Icon, $ as $$Navbar } from './Navbar_DbnW6vow.mjs';
import 'clsx';
import { $ as $$SectionLabel } from './SectionLabel_DK_gBn-O.mjs';
import { $ as $$TestimonialStars } from './TestimonialStars_BVXU4Lme.mjs';
import { $ as $$SiteFooter } from './SiteFooter_Bqm_snkQ.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_B4osWC81.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"> <!-- Background Image --> <div class="absolute inset-0 z-0"> <div class="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-background-dark dark:via-background-dark/80 z-10"></div> <div class="w-full h-full bg-cover bg-center" style="background-image: url('/images/hero-bg.jpg');"></div> </div> <!-- Content --> <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <h1 class="text-4xl sm:text-5xl lg:text-7xl font-black text-navy-deep dark:text-white leading-[1.1] mb-6 tracking-tighter">
Capacidad <span class="text-primary">Garantizada</span> para Cargas Críticas
</h1> <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
Elimine la incertidumbre en su cadena de suministro. Visibilidad total 24/7, costos optimizados y una red de carriers certificados por la FMCSA a su disposición.
</p> <!-- CTAs --> <div class="flex flex-wrap gap-4 mb-12"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "lg", "className": "shadow-xl shadow-primary/30" }, { "default": ($$result2) => renderTemplate`
Cotizar Carga ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow_forward" })} ` })} ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "size": "lg" }, { "default": ($$result2) => renderTemplate`
Nuestros Servicios
` })} </div> <!-- Trust Badges --> <div class="flex flex-wrap items-center gap-6 sm:gap-8 py-6 border-t border-slate-200 dark:border-slate-800"> <div class="flex items-center gap-2 text-navy-deep dark:text-white font-bold text-sm sm:text-base"> ${renderComponent($$result, "Icon", $$Icon, { "name": "verified", "className": "text-primary" })} Certificado FMCSA
</div> <div class="flex items-center gap-2 text-navy-deep dark:text-white font-bold text-sm sm:text-base"> ${renderComponent($$result, "Icon", $$Icon, { "name": "schedule", "className": "text-primary" })} 99.8% a tiempo
</div> <div class="flex items-center gap-2 text-navy-deep dark:text-white font-bold text-sm sm:text-base"> ${renderComponent($$result, "Icon", $$Icon, { "name": "groups", "className": "text-primary" })} +1,400 carriers
</div> </div> </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/HeroSection.astro", void 0);

const $$StatItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StatItem;
  const { value, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <p class="text-primary text-4xl lg:text-5xl font-black mb-2">${value}</p> <p class="text-slate-400 text-sm font-medium uppercase tracking-widest">${label}</p> </div>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/molecules/StatItem.astro", void 0);

const $$MetricsBar = createComponent(($$result, $$props, $$slots) => {
  const metrics = [
    { value: "50k+", label: "Cargas Entregadas" },
    { value: "1,400+", label: "Red de Carriers" },
    { value: "99.8%", label: "Tasa de Puntualidad" },
    { value: "15+", label: "Años Operando" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-navy-deep py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8"> ${metrics.map((metric) => renderTemplate`${renderComponent($$result, "StatItem", $$StatItem, { "value": metric.value, "label": metric.label })}`)} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/MetricsBar.astro", void 0);

const $$ServiceLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceLink;
  const { href = "#", label = "Ver detalles" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"> ${label} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow_right_alt" })} </a>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/molecules/ServiceLink.astro", void 0);

const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: "local_shipping",
      title: "FTL (Carga Completa)",
      description: "Capacidad dedicada de 53' para sus embarques de mayor volumen en Norteamérica."
    },
    {
      icon: "inventory_2",
      title: "LTL (Carga Consolidada)",
      description: "Optimice sus costos pagando solo por el espacio que su mercancía utiliza."
    },
    {
      icon: "public",
      title: "Cross-Border",
      description: "Expertos en cruce fronterizo México - USA - Canadá sin contratiempos."
    },
    {
      icon: "ac_unit",
      title: "Reefer (Refrigerado)",
      description: "Control estricto de temperatura para productos perecederos y farmacéuticos."
    },
    {
      icon: "conveyor_belt",
      title: "Flatbed (Plataformas)",
      description: "Soluciones para carga sobredimensionada, maquinaria y construcción."
    },
    {
      icon: "train",
      title: "Intermodal",
      description: "Combine ferrocarril y carretera para maximizar la eficiencia en largas distancias."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="py-24 bg-white dark:bg-background-dark"> <!-- Section Header --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"> <h2 class="text-3xl sm:text-4xl font-black text-navy-deep dark:text-white mb-4">
Soluciones Logísticas Integrales
</h2> <p class="text-slate-500 max-w-2xl mx-auto">
Equipamiento diverso y servicios especializados adaptados a sus requerimientos de transporte.
</p> </div> <!-- Cards Grid --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service) => renderTemplate`<div class="group p-8 rounded-2xl bg-background-light dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5"> ${renderComponent($$result, "Icon", $$Icon, { "name": service.icon, "size": "text-4xl", "className": "text-primary mb-6" })} <h3 class="text-xl font-bold mb-3">${service.title}</h3> <p class="text-slate-600 dark:text-slate-400 mb-6">${service.description}</p> ${renderComponent($$result, "ServiceLink", $$ServiceLink, {})} </div>`)} </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/ServicesGrid.astro", void 0);

const $$FeatureItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeatureItem;
  const { icon, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4"> <div class="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon })} </div> <h4 class="font-bold text-lg">${title}</h4> <p class="text-slate-600 dark:text-slate-400 text-sm">${description}</p> </div>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/molecules/FeatureItem.astro", void 0);

const $$WhyUsSection = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: "payments",
      title: "Pricing en Tiempo Real",
      description: "Tarifas competitivas basadas en datos actuales del mercado."
    },
    {
      icon: "satellite_alt",
      title: "Monitoreo Satelital",
      description: "Seguimiento por GPS de cada unidad en tránsito las 24 horas."
    },
    {
      icon: "bolt",
      title: "Ejecución Rápida",
      description: "Respuesta inmediata a solicitudes de carga y emergencias."
    },
    {
      icon: "gavel",
      title: "Cumplimiento Federal",
      description: "Estricto apego a normativas SCT y DOT de Estados Unidos."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="nosotros" class="py-24 bg-background-light dark:bg-navy-deep/20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <!-- Features --> <div> <h2 class="text-3xl sm:text-4xl font-black text-navy-deep dark:text-white mb-8">
¿Por qué Traustar Logistics es su aliado estratégico?
</h2> <div class="grid sm:grid-cols-2 gap-8"> ${features.map((feature) => renderTemplate`${renderComponent($$result, "FeatureItem", $$FeatureItem, { "icon": feature.icon, "title": feature.title, "description": feature.description })}`)} </div> </div> <!-- Image --> <div class="relative"> <div class="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div> <div class="relative rounded-3xl overflow-hidden shadow-2xl"> <img src="/images/team-control.jpg" alt="Equipo de coordinadores logísticos en un centro de control moderno" class="w-full h-auto" loading="lazy"> </div> </div> </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/WhyUsSection.astro", void 0);

const $$TechnologySection = createComponent(($$result, $$props, $$slots) => {
  const techFeatures = [
    {
      icon: "analytics",
      title: "Pricing Basado en Datos",
      description: "Algoritmos que analizan miles de puntos de datos para ofrecer el mejor costo-beneficio."
    },
    {
      icon: "my_location",
      title: "Tracking 24/7",
      description: "Acceda en tiempo real a la ubicación exacta de su mercancía desde cualquier dispositivo."
    },
    {
      icon: "integration_instructions",
      title: "Integración API/EDI",
      description: "Conectamos nuestros sistemas directamente con su ERP para un flujo de información sin fisuras."
    },
    {
      icon: "dashboard_customize",
      title: "Portal del Cliente",
      description: "Gestione documentos, facturas e historial de embarques en un solo lugar centralizado."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="tecnologia" class="py-24 bg-white dark:bg-background-dark"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16"> <!-- Feature List --> <div class="lg:w-1/2"> ${renderComponent($$result, "SectionLabel", $$SectionLabel, {}, { "default": ($$result2) => renderTemplate`Tecnología de Vanguardia` })} <h2 class="text-3xl sm:text-4xl font-black text-navy-deep dark:text-white mb-8">
Visibilidad Total en la Palma de su Mano
</h2> <ul class="space-y-6"> ${techFeatures.map((feature) => renderTemplate`<li class="flex items-start gap-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": feature.icon, "className": "text-primary mt-1" })} <div> <h4 class="font-bold text-lg">${feature.title}</h4> <p class="text-slate-500">${feature.description}</p> </div> </li>`)} </ul> </div> <!-- Dashboard Mockup --> <div class="lg:w-1/2 w-full"> <div class="bg-navy-deep rounded-2xl p-4 shadow-2xl border border-slate-700"> <!-- Browser Chrome --> <div class="flex items-center gap-2 mb-4 px-2"> <div class="w-3 h-3 rounded-full bg-red-500"></div> <div class="w-3 h-3 rounded-full bg-yellow-500"></div> <div class="w-3 h-3 rounded-full bg-green-500"></div> </div> <!-- Screen --> <div class="rounded-lg bg-slate-900 overflow-hidden"> <img src="/images/dashboard-mockup.jpg" alt="Panel de software logístico con gráficos y mapas" class="w-full h-auto opacity-80" loading="lazy"> </div> </div> </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/TechnologySection.astro", void 0);

const $$CoverageMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="cobertura" class="py-24 bg-background-light dark:bg-slate-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-16"> <h2 class="text-3xl sm:text-4xl font-black text-navy-deep dark:text-white mb-4">
Cobertura en toda Norteamérica
</h2> <p class="text-slate-500">Sin fronteras para su crecimiento. Red activa en México, USA y Canadá.</p> </div> <!-- Map --> <div class="aspect-video w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative"> <img src="/images/coverage-map.jpg" alt="Mapa estilizado de rutas logísticas en Norteamérica" class="w-full h-full object-cover" loading="lazy"> <div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div> <div class="absolute inset-0 flex items-center justify-center"> <div class="flex flex-wrap justify-center gap-4"> <span class="px-6 py-2 bg-white/90 dark:bg-navy-deep/90 rounded-full font-bold shadow-lg text-sm sm:text-base">México</span> <span class="px-6 py-2 bg-white/90 dark:bg-navy-deep/90 rounded-full font-bold shadow-lg text-sm sm:text-base">USA</span> <span class="px-6 py-2 bg-white/90 dark:bg-navy-deep/90 rounded-full font-bold shadow-lg text-sm sm:text-base">Canada</span> </div> </div> </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/CoverageMap.astro", void 0);

const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: '"Traustar ha sido clave para nuestra expansión en el mercado de Texas. Su puntualidad y visibilidad de carga no tienen comparación."',
      name: "Ricardo Méndez",
      role: "Gerente de Logística, InduMex",
      industry: "Manufactura"
    },
    {
      quote: '"El servicio de Reefer es impecable. Nunca hemos tenido un problema con la cadena de frío desde que operamos con ellos."',
      name: "Sarah Williams",
      role: "Operations VP, FreshFoods Inc.",
      industry: "Alimenticio"
    },
    {
      quote: '"Su capacidad para resolver urgencias de Cross-Border es lo que los hace destacar. Son verdaderos socios estratégicos."',
      name: "Javier Ortiz",
      role: "Director General, AutoPartes Global",
      industry: "Automotriz"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-white dark:bg-background-dark"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl sm:text-4xl font-black text-navy-deep dark:text-white mb-16 text-center">
Lo que dicen nuestros clientes
</h2> <div class="grid md:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`<div class="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"> ${renderComponent($$result, "TestimonialStars", $$TestimonialStars, {})} <p class="text-slate-600 dark:text-slate-400 italic mb-8 mt-4"> ${testimonial.quote} </p> <div> <p class="font-bold">${testimonial.name}</p> <p class="text-sm text-slate-500">${testimonial.role}</p> <p class="text-xs text-primary font-bold uppercase mt-1">${testimonial.industry}</p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/TestimonialsSection.astro", void 0);

const $$CtaBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-navy-deep rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"> <!-- Glow Effects --> <div class="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div> <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div> <!-- Content --> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 relative z-10">
¿Listo para mover tu carga con precisión?
</h2> <p class="text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto relative z-10">
Solicite una cotización hoy y experimente la diferencia de una logística profesional y tecnificada.
</p> <div class="relative z-10"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "lg", "className": "shadow-2xl shadow-primary/40 text-xl px-12 py-5" }, { "default": ($$result2) => renderTemplate`
Solicitar Cotización
` })} </div> </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/CtaBanner.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderComponent($$result, "HeroSection", $$HeroSection, {})} ${renderComponent($$result, "MetricsBar", $$MetricsBar, {})} ${renderComponent($$result, "ServicesGrid", $$ServicesGrid, {})} ${renderComponent($$result, "WhyUsSection", $$WhyUsSection, {})} ${renderComponent($$result, "TechnologySection", $$TechnologySection, {})} ${renderComponent($$result, "CoverageMap", $$CoverageMap, {})} ${renderComponent($$result, "TestimonialsSection", $$TestimonialsSection, {})} ${renderComponent($$result, "CtaBanner", $$CtaBanner, {})} </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
