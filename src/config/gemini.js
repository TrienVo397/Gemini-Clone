// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// And add: "type": "module" in your package.json

import { GoogleGenAI } from '@google/genai';

const MODEL_NAME = 'gemini-1.5-flash-8b';

// Main function to call Gemini with prompt
async function runChat(prompt) {
  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyDWOLfywTQJ_vurIJMbHgT_dtoGfOTX9VA', // <-- Your API key
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model: MODEL_NAME,
    config,
    contents,
  });

let output = '';
 for await (const chunk of response) {
  output += chunk.text;
  console.log(output); // ✅ Use this instead
  // ❌ Don't use process.stdout.write in browser
}


  return output;
}

export default runChat;


