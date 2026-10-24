const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : "https://www.granjaflow.com.br";

export const IS_PRODUCTION_DEPLOYMENT = process.env.VERCEL_ENV === "production";
export const SHOULD_INDEX = IS_PRODUCTION_DEPLOYMENT;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
