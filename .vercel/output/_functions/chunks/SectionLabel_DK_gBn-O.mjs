import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, b as addAttribute, f as renderSlot, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import 'clsx';

const $$SectionLabel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionLabel;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["text-primary font-bold uppercase tracking-widest text-sm mb-4 block", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/atoms/SectionLabel.astro", void 0);

export { $$SectionLabel as $ };
