import { GoogleGenAI, Type } from "@google/genai";
// FIX: Corrected import path for types.ts to ensure proper module resolution.
import { ListingDetails } from "../types.ts";

// FIX: Initialize GoogleGenAI with apiKey from environment variables.
// FIX: Removed non-null assertion '!' to align with coding guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const listingSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "A concise, catchy, and descriptive title for the item. (e.g., 'Vintage 1980s Fender Stratocaster Electric Guitar').",
    },
    description: {
      type: Type.STRING,
      description: "A detailed and compelling description of the item, including its condition, features, and any relevant history. Should be a few sentences long.",
    },
    category: {
      type: Type.STRING,
      description: "The most relevant category for the item from this list: Electronics, Fashion, Home & Garden, Musical Instruments, Sports & Outdoors, Collectibles & Art, Other.",
    },
    tags: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
      },
      description: "A list of 3-5 relevant keywords or tags that will help buyers find the item. (e.g., ['guitar', 'vintage', 'fender', 'electric guitar', 'stratocaster']).",
    },
    price: {
      type: Type.NUMBER,
      description: "A suggested price for the item in USD, based on the image and description. Do not include a currency symbol.",
    },
  },
  required: ["title", "description", "category", "tags", "price"],
};

export const generateListingDetails = async (
  image: { mimeType: string; data: string },
  userNotes: string
): Promise<Partial<ListingDetails>> => {
  const imagePart = {
    inlineData: {
      mimeType: image.mimeType,
      data: image.data,
    },
  };

  const textPart = {
    text: `Based on the attached image and the user's notes, generate details for a marketplace listing. User notes: "${userNotes}"`,
  };

  try {
    // FIX: Use the correct method to generate content with a schema.
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: { parts: [imagePart, textPart] },
      config: {
        responseMimeType: "application/json",
        responseSchema: listingSchema,
      },
    });

    // FIX: Extract text and parse JSON from the response.
    const jsonText = response.text.trim();
    if (jsonText) {
      return JSON.parse(jsonText) as Partial<ListingDetails>;
    }
    throw new Error("Failed to generate listing details: empty response");
  } catch (error) {
    console.error("Error generating listing details:", error);
    throw new Error("Failed to generate listing details. Please try again.");
  }
};