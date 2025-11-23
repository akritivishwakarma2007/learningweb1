import { GoogleGenAI } from "@google/genai";

// Initialize the client
// NOTE: In a real production app, ensure this is behind a backend proxy if possible,
// or strictly control the environment variable exposure.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askGeminiTutor = async (
  language: string,
  topic: string,
  currentCode: string,
  userQuestion: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      You are an expert programming tutor.
      The student is learning ${language}.
      Current Topic: ${topic}.
      
      Code Context:
      \`\`\`
      ${currentCode}
      \`\`\`
      
      Student Question: "${userQuestion}"
      
      Please provide a clear, concise, and helpful explanation. Use Markdown for formatting.
      If the student asks for a solution, guide them rather than giving the answer directly if it's an exercise.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: "You are a friendly, encouraging coding tutor. Keep answers concise (under 200 words) unless detailed code is needed.",
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the AI tutor right now. Please try again later.";
  }
};

export const generateNewExercise = async (language: string, level: string, topic: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Generate a new, unique, short coding exercise for ${language} (${level} level) regarding the topic "${topic}". Include a brief problem statement and expected output. Do not provide the solution code.`,
        });
        return response.text || "Could not generate exercise.";
    } catch (error) {
        return "Failed to generate new exercise.";
    }
}