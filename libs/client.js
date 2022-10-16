import { createClient }  from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "shin-anago",
    apiKey: process.env.API_KEY,
});