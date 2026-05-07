import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function askCaveAssistant(message: string, gameState: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: `You are the Cave Assistant in the 'Crystal Deep Tycoon' mining game. 
        You help players with tips, explain mechanics, and 'fix' their bad luck with encouraging words.
        Keep it brief, slightly robotic but friendly.
        Current Player Stats: ${JSON.stringify(gameState)}
        If they ask to 'fix errors', explain that you are monitoring the system and everything is optimal (even if it's just flavor text).
        If they are bored, suggest getting the 'Drill Efficiency' upgrade or reaching the next leaderboard rank.`
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with deep-cave core. Please try again.";
  }
}
