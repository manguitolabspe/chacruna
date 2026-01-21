
import { GoogleGenAI } from "@google/genai";
import { CHACRUNA_PROMPT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: CHACRUNA_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text || "Lo siento, no pude procesar tu solicitud. ¿Podrías intentarlo de nuevo?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Ups, parece que mi conexión mística se ha interrumpido momentáneamente.";
  }
};
