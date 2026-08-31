import { SITE_URL } from "@/lib/pages";

export const revalidate = 3600;

export function GET() {
  const content = [
    "User-Agent: *",
    "Allow: /",
    "",
    "User-Agent: facebookexternalhit",
    "Allow: /",
    "",
    "User-Agent: Twitterbot",
    "Allow: /",
    "",
    "User-Agent: LinkedInBot",
    "Allow: /",
    "",
    "User-Agent: WhatsApp",
    "Allow: /",
    "",
    "User-Agent: Googlebot",
    "Allow: /",
    "",
    "User-Agent: Bingbot",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
