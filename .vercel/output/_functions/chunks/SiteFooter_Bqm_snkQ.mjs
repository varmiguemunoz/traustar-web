import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, f as renderSlot, r as renderTemplate, d as renderComponent } from './entrypoint_DqZWjQNj.mjs';
import { b as $$Icon } from './Navbar_DbnW6vow.mjs';
import 'clsx';

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "primary", className = "" } = Astro2.props;
  const variantClasses = {
    primary: "text-primary bg-primary/10 font-bold",
    success: "text-green-500 bg-white/5 border border-white/10",
    neutral: "text-slate-500 bg-slate-100 dark:bg-slate-800"
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest", variantClasses[variant], className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/atoms/Badge.astro", void 0);

const $$ContactItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContactItem;
  const { icon, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "className": "text-primary" })} <span>${text}</span> </li>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/molecules/ContactItem.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = [
    { label: "Nuestros Servicios", href: "#servicios" },
    { label: "Tecnología de Carga", href: "#tecnologia" },
    { label: "Mapa de Cobertura", href: "#cobertura" },
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Portal de Carriers", href: "#" }
  ];
  const legalLinks = [
    { label: "Aviso de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
    { label: "Políticas de Seguro", href: "#" },
    { label: "Cumplimiento FMCSA", href: "#" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-950 text-slate-400 py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"> <!-- Brand Column --> <div> <div class="flex items-center gap-2 mb-6"> <div class="w-8 h-8 bg-primary flex items-center justify-center rounded text-white"> ${renderComponent($$result, "Icon", $$Icon, { "name": "local_shipping", "size": "text-xl" })} </div> <span class="text-xl font-black tracking-tight text-white uppercase">
Traustar<span class="text-primary">.</span> </span> </div> <p class="text-sm leading-relaxed mb-6">
Líderes en soluciones logísticas integrales en Norteamérica. Transformando la cadena de suministro con tecnología y confianza.
</p> <div class="flex gap-4"> <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Sitio web"> ${renderComponent($$result, "Icon", $$Icon, { "name": "public", "size": "text-sm" })} </a> <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Compartir"> ${renderComponent($$result, "Icon", $$Icon, { "name": "share", "size": "text-sm" })} </a> <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Comunidad"> ${renderComponent($$result, "Icon", $$Icon, { "name": "group", "size": "text-sm" })} </a> </div> </div> <!-- Quick Links --> <div> <h4 class="text-white font-bold mb-6">Quick Links</h4> <ul class="space-y-4 text-sm"> ${quickLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:text-primary transition-colors">${link.label}</a> </li>`)} </ul> </div> <!-- Legal --> <div> <h4 class="text-white font-bold mb-6">Legal</h4> <ul class="space-y-4 text-sm"> ${legalLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:text-primary transition-colors">${link.label}</a> </li>`)} </ul> </div> <!-- Contact --> <div> <h4 class="text-white font-bold mb-6">Contacto</h4> <ul class="space-y-4 text-sm"> ${renderComponent($$result, "ContactItem", $$ContactItem, { "icon": "location_on", "text": "Chicago, IL. 60601, USA" })} ${renderComponent($$result, "ContactItem", $$ContactItem, { "icon": "phone", "text": "+1 (800) 123-4567" })} ${renderComponent($$result, "ContactItem", $$ContactItem, { "icon": "mail", "text": "contacto@traustar.com" })} </ul> <div class="mt-8"> ${renderComponent($$result, "Badge", $$Badge, { "variant": "success" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "check_circle", "size": "text-sm", "className": "text-green-500" })} <span class="text-white">FMCSA Certified</span> ` })} </div> </div> </div> <!-- Bottom Bar --> <div class="pt-8 border-t border-slate-900 text-center text-xs"> <p>&copy; ${currentYear} Traustar Logistics Inc. Todos los derechos reservados.</p> </div> </div> </footer>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/SiteFooter.astro", void 0);

export { $$SiteFooter as $ };
