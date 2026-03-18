import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { d as renderComponent, e as renderHead, b as addAttribute, r as renderTemplate } from './entrypoint_DqZWjQNj.mjs';
import { $ as $$Image } from './_astro_assets_Cn5DiJxa.mjs';
import { g as getCollection } from './_astro_content_CFFuJ_Ra.mjs';
import { $ as $$BaseHead } from './BaseHead_DCtjqGSZ.mjs';
import { $ as $$Footer } from './Footer_Dr7rPHnj.mjs';
import { $ as $$Header, a as $$FormattedDate } from './Header_91ah88d3.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from './consts_B4osWC81.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5tznm7mj> ${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.heroImage, "alt": "", "data-astro-cid-5tznm7mj": true })}`} <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/blog/index.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
