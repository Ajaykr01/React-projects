const apiKey = "AIzaSyBPxrvwS6cx6Ws_uGWsNvshUZY_X7rl-vM";
const model = "gemini-2.5-pro";
const api = "generateContent";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:${api}?key=${apiKey}`;

async function main(prompt) {
  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
    generationConfig: {
      thinkingConfig: {
        thinkingBudget: -1,
      },
      responseMimeType: "text/plain",
      maxOutputTokens: 100,
    },
    tools: [
      {
        googleSearch: {},
      },
    ],
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (
      data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0]
    ) {
      return data.candidates[0].content.parts[0].text;
    }
    return "";
  } catch (error) {
    console.error("Error:", error);
    return "";
  }
}

export default main;
