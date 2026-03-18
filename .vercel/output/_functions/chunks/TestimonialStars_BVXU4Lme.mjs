import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { m as maybeRenderHead, d as renderComponent, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { b as $$Icon } from './Navbar_DbnW6vow.mjs';

const $$TestimonialStars = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TestimonialStars;
  const { count = 5 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex text-primary"> ${Array.from({ length: count }).map(() => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "star", "filled": true })}`)} </div>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/components/molecules/TestimonialStars.astro", void 0);

export { $$TestimonialStars as $ };
