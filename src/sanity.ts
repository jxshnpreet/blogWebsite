import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'fy5c13ea',
    dataset: "production",
    apiVersion: "2024-07-12",
    useCdn: false
  });

