import React, { createContext, useState } from "react";
import main from "../gemini";
export const dataContext = createContext();

function UserContext({ children }) {
  const [prompt, setPrompt] = useState("listening");
  const [response, setResponse] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  function speak(text) {
    window.speechSynthesis.cancel();

    const speakWithVoice = (voice) => {
      let utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.volume = 1;
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.lang = "en-US";

      utterance.onend = () => {
        setSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    };

    const jarvisVoice = "Microsoft David";
    const voices = window.speechSynthesis.getVoices();

    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voice = window.speechSynthesis
          .getVoices()
          .find((v) => v.name === jarvisVoice);
        speakWithVoice(voice);
      };
    } else {
      const voice = voices.find((v) => v.name === jarvisVoice);
      speakWithVoice(voice);
    }
  }

  async function AiResponse(prompt) {
    let finalPrompt = `You are a helpful and smart assistant. Answer clearly and briefly. \n\nQuenstion: ${prompt}\nAnswer:`;

    let text = await main(finalPrompt);
    let newText = text?.replace(/[*_]/g, "")?.replace(/google/gi, "Ajay");

    if (newText?.trim()) {
      setPrompt(newText);
      speak(newText);
      setResponse(true);
    } else {
      const fallback = "Sorry, I couldn't understand that.";
      setPrompt(fallback);
      speak(fallback);
      setResponse(true);
    }
  }

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();
  recognition.onresult = (e) => {
    let currentIndex = e.resultIndex;
    let transcript = e.results[currentIndex][0].transcript;
    setPrompt(transcript);
    takeCommand(transcript.toLowerCase());
  };

  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank");
      speak("Opening YouTube");
      setResponse(true);
      setPrompt("Opening YouTube...");
    } else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com/", "_blank");
      speak("Opening Google");
      setResponse(true);
      setPrompt("Opening Google...");
    } else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com/", "_blank");
      speak("Opening Instagram");
      setResponse(true);
      setPrompt("Opening Instagram...");
    } else if (command.includes("open") && command.includes("facebook")) {
      window.open("https://www.facebook.com/", "_blank");
      speak("Opening Facebook");
      setResponse(true);
      setPrompt("Opening Facebook...");
    } else if (command.includes("time")) {
      let time = new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
      });

      speak(time);
      setResponse(true);
      setPrompt(time);
    } else if (command.includes("date")) {
      let date = new Date().toLocaleString(undefined, {
        day: "numeric",
        month: "short",
      });

      speak(date);
      setResponse(true);
      setPrompt(date);
    } else {
      AiResponse(command);
    }
  }

  let value = {
    recognition,
    prompt,
    setPrompt,
    response,
    setResponse,
    speaking,
    setSpeaking,
  };

  return (
    <div>
      <dataContext.Provider value={value}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;
