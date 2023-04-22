import { useState, useEffect } from "react";
import { FaTwitter, FaTumblr, FaFreeCodeCamp } from "react-icons/fa";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [indexColor, setIndexColor] = useState();
  const colors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  const colorVariants = [
    'bg-red-500 hover:bg-red-300',
    'bg-yellow-500 hover:bg-yellow-300',
    'bg-green-500 hover:bg-green-300',
    'bg-blue-500 hover:bg-blue-300',
    'bg-indigo-500 hover:bg-indigo-300',
    'bg-purple-500 hover:bg-purple-300',
    'bg-pink-500 hover:bg-pink-300',
  ]

  function randomFeature(feature) {
    const dataLenght = feature.length;
    return Math.floor(Math.random() * dataLenght);
  }

  async function fetchQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuote(data[randomFeature(data)]);
    setIndexColor(randomFeature(colors))
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className={`w-screen h-screen ${colors[indexColor]} flex flex-col justify-center items-center`}
    >
      <div className="max-w-xl mx-auto p-12 rounded-md bg-white/30 backdrop-blur-sm">
        <p className="max-w-md text-3xl text-center font-bold tracking-wide">{`"${quote.text}"`}</p>
        <span className="mt-4 block text-right text-white/80 text-lg font-medium">
          {quote.author}
        </span>
        <div className="mt-6 flex items-center justify-between">
          <div className="space-x-2">
            <button className={`btn p-3 ${colorVariants[indexColor]}  transition`}>
              <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </button>
            <button className={`btn p-3 ${colorVariants[indexColor]} transition`}>
              <a href="https://www.tumblr.com/" target="_blank" rel="noreferrer">
                <FaTumblr />
              </a>
            </button>
          </div>
          <button
            className={`btn px-4 py-2 ${colorVariants[indexColor]} transition`}
            onClick={fetchQuote}
          >
            New qoute
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center">
        <p className="inline-flex items-center ">
          freeCodeCamp
          <FaFreeCodeCamp />
        </p>
        <p>designed and coded by henry.</p>
      </div>
    </div>
  );
}

export default App;
