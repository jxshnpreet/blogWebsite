import React from 'react'
import { client } from '@/sanity'
import imageUrlBuilder from '@sanity/image-url'
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

interface SanityImageSource {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

type SourceType = SanityImageSource | undefined;

export default function urlFor(source: any) {
  if(!source) return
  console.log("source == ", source)
  return builder.image(source)
}