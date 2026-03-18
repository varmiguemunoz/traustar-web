import { c as createComponent } from './astro-component_BTpquHhU.mjs';
import { c as createRenderInstruction, b as addAttribute, r as renderTemplate, u as unescapeHTML, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead } from './entrypoint_DqZWjQNj.mjs';
import { jsx } from 'react/jsx-runtime';
import { Button as Button$1 } from '@base-ui/react/button';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { $ as $$Footer } from './Footer_Dr7rPHnj.mjs';
import { $ as $$Navbar } from './Navbar_DbnW6vow.mjs';
/* empty css                 */

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Button$1,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

const createOgImage = ({ title, meta }) => [
  // Base Cloudinary URL
  `https://res.cloudinary.com/dy7kvvzgj/image/upload`,
  // Logo
  `jeouwa5trszwteqwlhfe_l4dwdy`,
  // Tamaño optimizado para OG (1200x630 es el estándar)
  `w_1200,h_630,q_90`,
  // Logo en esquina superior derecha
  `ni8reifydcj1456wvspu_hj0p4j/fl_layer_apply,g_north_east,x_80,y_80,w_120`,
  // Título dinámico (ajustado para mejor legibilidad)
  `l_text:Ubuntu_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1000,h_320`,
  `fl_layer_apply,g_south_west,x_80,y_280`,
  // Subtítulo / meta info
  `l_text:Ubuntu_42:${e(meta)},co_rgb:ffe4e680,c_fit,w_1000,h_200`,
  `fl_layer_apply,g_south_west,x_80,y_80`,
  `e_brightness:-20,e_contrast:20`
].join("/");
const e = (str) => encodeURIComponent(encodeURIComponent(str));

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/node_modules/.pnpm/astro@6.0.4_@types+node@25.0.3_@vercel+functions@3.4.3_jiti@2.6.1_lightningcss@1.32.0_r_824b2ccbfca2bc96d584fbb678d8879e/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/node_modules/.pnpm/astro@6.0.4_@types+node@25.0.3_@vercel+functions@3.4.3_jiti@2.6.1_lightningcss@1.32.0_r_824b2ccbfca2bc96d584fbb678d8879e/node_modules/astro/components/ClientRouter.astro", void 0);

const site = {"title":"varmiguemunoz Software Engineer | Agency Dev Partner","base_url":"https://www.varmiguemunoz.com/","favicon":"/favicon.ico","lang":"en"};
const metadata = {"meta_author":"varmiguemunoz Software Engineer | Agency Dev Partner","meta_description":"I help agencies ship fast, high-performance digital experiences for their clients from landing pages and storefronts to mobile apps and automations."};
const config = {
  site,
  metadata};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Base;
  const {
    title,
    meta_title,
    description,
    noindex,
    keywords,
    schema,
    ogImageTitle,
    ogImageMeta,
    hreflang
  } = Astro2.props;
  const ogImage = createOgImage({
    title: ogImageTitle || meta_title || title || "GrowthlyFast - Monthly Dev Packs & Agency Development",
    meta: ogImageMeta || description || "Professional development services for agencies, startups, and contractors."
  });
  const canonicalURL = `${config.site.base_url}${Astro2.url.pathname.replace(/\/$/, "")}`;
  const isPayment = Astro2.url.pathname.startsWith("/payment");
  const shouldNoindex = noindex || isPayment;
  return renderTemplate`<html${addAttribute(config.site.lang, "lang")}> <head><!-- Charset FIRST for security (OWASP best practice) --><meta charset="utf-8"><!-- Resource hints - Optimized for critical resources --><link rel="preconnect" href="https://res.cloudinary.com" crossorigin><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="dns-prefetch" href="https://crm.growthlyfast.com"><!-- favicon --><link rel="shortcut icon"${addAttribute(config.site.favicon, "href")}><!-- theme meta --><meta name="theme-name" content="growthlyfast"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><title>${meta_title ? meta_title : title ? title : config.site.title}</title><meta name="title"${addAttribute(meta_title ? meta_title : title ? title : config.site.title, "content")}><!-- Canonical fix --><link rel="canonical"${addAttribute(canonicalURL, "href")} itemprop="url"><!-- Hreflang for multilingual support -->${hreflang && hreflang.map((link) => renderTemplate`<link rel="alternate"${addAttribute(link.lang, "hreflang")}${addAttribute(link.url, "href")}>`)}${shouldNoindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<meta name="description"${addAttribute(description ? description : config.metadata.meta_description, "content")}><!-- Keywords (opcional pero útil para contexto) -->${keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`}<!-- author from config.json --><meta name="author"${addAttribute(config.metadata.meta_author, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(meta_title ? meta_title : title ? title : config.site.title, "content")}><meta property="og:description"${addAttribute(description ? description : config.metadata.meta_description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:site_name" content="GrowthlyFast"><meta property="og:locale" content="en_US"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(meta_title ? meta_title : title ? title : config.site.title, "content")}><meta name="twitter:description"${addAttribute(description ? description : config.metadata.meta_description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- Schema.org JSON-LD -->${schema && (Array.isArray(schema) ? schema.map((s) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(s)))) : renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))))}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="mx-auto w-full"> ${renderSlot($$result, $$slots["default"])} </main> <!-- <Whatsapp
      url="sms:+573023278057&body=Hi, I'm interested in your Services 🚀"
    /> --> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/layouts/Base.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "404 - Page Not Found", "meta_title": "404 - Page Not Found", "description": "The page you are looking for doesn't exist or may have been moved. Let's guide you back to the GrowthlyFast assistant.", "keywords": "404, page not found, growthlyfast, assistant, guide, back to home", "ogImageTitle": "404 - Page Not Found", "ogImageMeta": "The page you are looking for doesn't exist or may have been moved. Let's guide you back to the GrowthlyFast assistant", "noindex": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex h-screen w-full items-center justify-center bg-[#0A0A0A]"> <div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.35),transparent_60%)] from-[#FFFFFF] via-[#F9FAFB] to-[#E5E7EB] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> <div class="relative z-10 flex flex-col items-center justify-center gap-4 px-6"> <div class="max-w-lg rounded-2xl border border-[#1F2937] bg-[#0A0A0A]/90 p-8 text-center shadow-[0_25px_60px_-20px_rgba(0,0,0,0.85),0_0_40px_rgba(124,58,237,0.35)]"> <p class="bg-[linear-gradient(90deg,#7C3AED_0%,#5B21B6_50%,#A78BFA_100%)] bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
404 · Page Not Found
</p> <p class="mt-4 text-sm text-[#D1D5DB]">
The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s guide you back to the GrowthlyFast assistant.
</p> <div class="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-center"> <a href="/" class="w-full sm:w-auto"> ${renderComponent($$result2, "Button", Button, { "className": "w-full text-white shadow-[0_0_24px_rgba(124,58,237,0.55)]", "variant": "default" }, { "default": ($$result3) => renderTemplate`
Go back home
` })} </a> <span class="text-xs text-[#9CA3AF]">
Need help? Reach out to support from your dashboard.</span> </div> </div> </div> </div> ` })}`;
}, "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/404.astro", void 0);

const $$file = "/Users/varmiguemunoz/varmiguemunoz/clients/traustar-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
