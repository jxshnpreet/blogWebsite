import { client } from "@/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  if (!source) return;
  const url = builder.image(source);
  if (!url) return;
  return url;
}
