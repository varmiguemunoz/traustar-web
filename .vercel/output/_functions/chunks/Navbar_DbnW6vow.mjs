import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, f as renderSlot, d as renderComponent } from './entrypoint_DqZWjQNj.mjs';
import 'clsx';

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  const { name, size = "", filled = false, className = "" } = Astro2.props;
  const fillClass = filled ? "fill-1" : "";
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["material-symbols-outlined", fillClass, size, className], "class:list")}> ${name} </span>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/atoms/Icon.astro", void 0);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Button;
  const { variant = "primary", size = "md", href, className = "" } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center font-bold transition-all cursor-pointer";
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20",
    secondary: "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700",
    ghost: "text-primary hover:text-primary-hover bg-transparent"
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2.5 text-sm rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };
  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className].join(" ");
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(classes, "class")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/atoms/Button.astro", void 0);

const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavLink;
  const { href = "#", label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="text-sm font-semibold hover:text-primary transition-colors"> ${label} </a>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/molecules/NavLink.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 w-full z-50 bg-white/90 dark:bg-navy-deep/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20"> <!-- Logo --> <a href="/" class="flex items-center gap-2 no-underline"> <div class="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white"> ${renderComponent($$result, "Icon", $$Icon, { "name": "local_shipping", "size": "text-3xl" })} </div> <span class="text-2xl font-black tracking-tight text-navy-deep dark:text-white uppercase">
Traustar<span class="text-primary">.</span> </span> </a> <!-- Desktop Links --> <div class="hidden md:flex items-center gap-8"> ${renderComponent($$result, "NavLink", $$NavLink, { "label": "Servicios", "href": "#servicios" })} ${renderComponent($$result, "NavLink", $$NavLink, { "label": "Tecnología", "href": "#tecnologia" })} ${renderComponent($$result, "NavLink", $$NavLink, { "label": "Cobertura", "href": "#cobertura" })} ${renderComponent($$result, "NavLink", $$NavLink, { "label": "Nosotros", "href": "#nosotros" })} ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "md" }, { "default": ($$result2) => renderTemplate`
Cotizar Carga
` })} </div> <!-- Mobile Hamburger --> <div class="md:hidden cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "menu", "size": "text-3xl" })} </div> </div> </div> </nav>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/organisms/Navbar.astro", void 0);

export { $$Navbar as $, $$Button as a, $$Icon as b };
