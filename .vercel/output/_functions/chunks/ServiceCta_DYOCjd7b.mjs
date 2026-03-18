import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import 'clsx';

const $$ServiceCta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceCta;
  const {
    title,
    description,
    primaryCta,
    primaryCtaHref,
    secondaryCta,
    secondaryCtaHref
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-20 md:py-24"> <div class="absolute inset-0 bg-primary"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div> <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-black text-white sm:text-5xl mb-6 md:mb-8">${title}</h2> <p class="text-lg md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed">${description}</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"> <a${addAttribute(primaryCtaHref, "href")} class="w-full sm:w-auto rounded-lg bg-white px-10 py-5 text-lg font-black text-primary hover:bg-slate-100 transition-all shadow-xl"> ${primaryCta} </a> ${secondaryCta && secondaryCtaHref && renderTemplate`<a${addAttribute(secondaryCtaHref, "href")} class="w-full sm:w-auto rounded-lg border-2 border-white/30 px-10 py-5 text-lg font-bold text-white hover:bg-white/10 transition-all"> ${secondaryCta} </a>`} </div> </div> </section>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/screens/services/ServiceCta.astro", void 0);

export { $$ServiceCta as $ };
