export const createOgImage = ({ title, meta }: { title: string; meta: string }) =>
  [
    // Base Cloudinary URL
    `https://res.cloudinary.com/dy7kvvzgj/image/upload`,

    // Logo
    `jeouwa5trszwteqwlhfe_l4dwdy`,
    // OG-friendly image size (1200x630 standard)
    `w_1200,h_630,q_90`,

    // Brand mark in the top-right corner
    `ni8reifydcj1456wvspu_hj0p4j/fl_layer_apply,g_north_east,x_80,y_80,w_120`,

    // Dynamic title layer
    `l_text:Ubuntu_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1000,h_320`,
    `fl_layer_apply,g_south_west,x_80,y_280`,

    // Subtitle / supporting meta text
    `l_text:Ubuntu_42:${e(meta)},co_rgb:ffe4e680,c_fit,w_1000,h_200`,
    `fl_layer_apply,g_south_west,x_80,y_80`,

    `e_brightness:-20,e_contrast:20`,
  ].join('/');

const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
