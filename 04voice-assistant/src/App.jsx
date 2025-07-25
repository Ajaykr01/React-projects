import jarvisGif from "./assets/jarvis.gif";
import { FaMicrophone } from "react-icons/fa";
import listenGif from "./assets/listen.gif";
import aiVoiceGif from "./assets/aivoice.gif";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "./Context/UserContext";

function App() {
  let {
    recognition,
    prompt,
    setPrompt,
    response,
    setResponse,
    speaking,
    setSpeaking,
  } = useContext(dataContext);

  useEffect(() => {
    recognition.onend = () => {
      setSpeaking(true);
    };
  }, [recognition]);

  function speakListenToggle() {
    navigator.mediaDevices.getUserMedia({ audio: true }).catch((err) => {
      console.log(err.message);
    });
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center px-3">
        <img
          src={jarvisGif}
          className="h-[30rem] max-h-[60vh] w-auto object-contain mb-4"
        />
        <h1 className="text-2xl sm:text-2xl xs:text-lg font-bold bg-gradient-to-r from-cyan-400 via-red-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x text-center mb-4">
          I'm Jarvis. Your Virtual Assistant
        </h1>
        {!speaking ? (
          <div className="speak-btn">
            <button
              className="bg-cyan-400 flex items-center gap-2 rounded-2xl px-4 py-1 text-sm mt-3 cursor-pointer hover:shadow-lg shadow-cyan-400 transition-shadow duration-100 w-full max-w-xs justify-center"
              onClick={() => {
                speakListenToggle();
                setSpeaking(true);
                setResponse(false);
                setPrompt("listening....");
                recognition.start();
              }}
            >
              Click here <FaMicrophone />
            </button>
          </div>
        ) : (
          <div className="flex items-center flex-col w-full">
            {!response ? (
              <>
                <img
                  src={listenGif}
                  className="h-20 w-auto mb-2 sm:h-20 xs:h-14"
                />
                <p className="text-white text-center text-base sm:text-sm xs:text-xs break-words">
                  {prompt}
                </p>
              </>
            ) : (
              <>
                <img
                  src={aiVoiceGif}
                  className="h-24 w-auto mb-2 sm:h-16 xs:h-12"
                />
                <p className="text-white text-center px-5 text-base sm:text-sm xs:text-xs break-words">
                  {prompt}
                </p>
              </>
            )}
          </div>
        )}
      </div>
      <style>
        {`
        @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease-in-out infinite;
          }`}
      </style>
    </>
  );
}

export default App;
