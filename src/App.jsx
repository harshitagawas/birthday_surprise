import React, { useState, Suspense } from "react";
import Confetti from "react-confetti";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CakeScene from "./CakeModel";

function BirthdayPage() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 text-center p-4 overflow-hidden">
      {showSurprise && <Confetti />}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="text-7xl  text-purple-800 z-10 mt-40 font-barbie "
      >
        🎉 Happy Birthday [Name]! 🎉
      </motion.h1>

      {!showSurprise ? (
        <button
          onClick={() => setShowSurprise(true)}
          className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full text-lg shadow-lg hover:bg-pink-600 z-10"
        >
          Tap to Reveal Surprise 🎁
        </button>
      ) : (
        <>
          <div className="w-full h-full absolute top-0 left-0 z-0">
            <Suspense fallback={null}>
              <CakeScene />
            </Suspense>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-xl text-purple-700 z-10 bg-white/20 backdrop-blur-lg p-9 rounded-2xl border-[1px] border-white/50"
          >
            <p>[Birthday Message]</p>
            <p className="mt-2 font-barbie text-4xl">[Birthday Mesage]</p>
          </motion.div>
        </>
      )}
      <div className="fixed bottom-2 right-4 z-50 text-xs text-gray-500 bg-white/60 px-3 py-1 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1">
        Made by
        <a
          href="https://github.com/harshitagawas"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-purple-700 ml-1"
        >
          Harshita Gawas
        </a>
      </div>
    </div>
  );
}

export default BirthdayPage;
