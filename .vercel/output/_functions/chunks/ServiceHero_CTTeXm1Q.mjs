import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, d as renderComponent, O as Fragment, r as renderTemplate, u as unescapeHTML } from './entrypoint_DqZWjQNj.mjs';
import { b as $$Icon } from './Navbar_DbnW6vow.mjs';

const $$ServiceHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceHero;
  const {
    badge,
    title,
    titleHighlight,
    description,
    primaryCta,
    primaryCtaHref,
    secondaryCta,
    secondaryCtaHref,
    heroImage = "/images/svc-ftl-hero.jpg",
    heroImageAlt = "Traustar Logistics service",
    variant = "light"
  } = Astro2.props;
  const isDark = variant === "dark";
  return renderTemplate`${isDark ? renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden bg-slate-900 py-24 lg:py-32 pt-28 lg:pt-40"><div class="absolute inset-0 opacity-40"><div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div><img class="h-full w-full object-cover"${addAttribute(heroImage, "src")}${addAttribute(heroImageAlt, "alt")} loading="eager"></div><div class="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="max-w-3xl"><div class="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary ring-1 ring-inset ring-primary/30 mb-6">${badge}</div><h1 class="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">${titleHighlight ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`${title} <span class="text-primary">${titleHighlight}</span>`)}` })}` : title}</h1><p class="text-lg leading-relaxed text-slate-300 mb-10 max-w-2xl">${description}</p><div class="flex flex-wrap gap-4"><a${addAttribute(primaryCtaHref, "href")} class="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">${primaryCta}${renderComponent($$result, "Icon", $$Icon, { "name": "arrow_forward" })}</a>${secondaryCta && secondaryCtaHref && renderTemplate`<a${addAttribute(secondaryCtaHref, "href")} class="rounded-lg border border-slate-700 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-all">${secondaryCta}</a>`}</div></div></div></section>` : renderTemplate`<section class="px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-28 lg:pt-36 bg-white"><div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="flex flex-col gap-8"><div class="flex flex-col gap-4"><span class="text-primary font-bold tracking-wider text-sm uppercase">${badge}</span><h1 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">${titleHighlight ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`${title} <span class="text-primary">${titleHighlight}</span>`)}` })}` : title}</h1><p class="text-slate-600 text-lg md:text-xl leading-relaxed">${description}</p></div><div class="flex flex-wrap gap-4"><a${addAttribute(primaryCtaHref, "href")} class="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">${primaryCta}</a>${secondaryCta && secondaryCtaHref && renderTemplate`<a${addAttribute(secondaryCtaHref, "href")} class="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-6 bg-slate-100 text-slate-900 text-base font-bold hover:bg-slate-200 transition-all">${secondaryCta}</a>`}</div></div><div class="relative h-80 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200"${addAttribute(`background-image: url('${heroImage}'); background-size: cover; background-position: center;`, "style")}><div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div></div></div></section>`}`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/ServiceHero.astro", void 0);

export { $$ServiceHero as $ };
