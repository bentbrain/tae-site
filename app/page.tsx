"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const adjectives = [
    { text: "awesome", emoji: "🌟" },
    { text: "cool", emoji: "😎" },
    { text: "smart", emoji: "🧠" },
    { text: "funny", emoji: "😂" },
    { text: "creative", emoji: "🎨" },
    { text: "brilliant", emoji: "💡" },
    { text: "amazing", emoji: "🤩" },
    { text: "fantastic", emoji: "🌈" },
    { text: "kind", emoji: "🤗" },
    { text: "thoughtful", emoji: "💭" },
    { text: "generous", emoji: "🎁" },
    { text: "patient", emoji: "⏳" },
    { text: "reliable", emoji: "🤝" },
    { text: "helpful", emoji: "🛠️" },
    { text: "friendly", emoji: "😊" },
    { text: "caring", emoji: "❤️" },
    { text: "trustworthy", emoji: "🤞" },
    { text: "adventurous", emoji: "🌍" },
    { text: "lovable", emoji: "💖" },
    { text: "enthusiastic", emoji: "🎉" },
    { text: "optimistic", emoji: "☀️" },
    { text: "witty", emoji: "🥂" },
    { text: "charming", emoji: "😌" },
    { text: "considerate", emoji: "🤲" },
    { text: "humble", emoji: "🙏" },
    { text: "energetic", emoji: "⚡" },
    { text: "gracious", emoji: "🎩" },
    { text: "encouraging", emoji: "📈" },
    { text: "supportive", emoji: "🤗" },
    { text: "motivated", emoji: "🚀" },
    { text: "resilient", emoji: "🌱" },
    { text: "dedicated", emoji: "🏅" },
    { text: "determined", emoji: "🏆" },
    { text: "inspirational", emoji: "🌠" },
    { text: "open-minded", emoji: "🌐" },
    { text: "resourceful", emoji: "🛠️" },
    { text: "hardworking", emoji: "💪" },
    { text: "positive", emoji: "➕" },
    { text: "loyal", emoji: "🐾" },
    { text: "unique", emoji: "🌟" },
    { text: "exceptional", emoji: "🎖️" },
    { text: "talented", emoji: "🎶" },
    { text: "imaginative", emoji: "🖌️" },
    { text: "skillful", emoji: "🧰" },
    { text: "gentle", emoji: "🕊️" },
    { text: "understanding", emoji: "👂" },
    { text: "compassionate", emoji: "💞" },
    { text: "joyful", emoji: "🎊" },
    { text: "humorous", emoji: "😂" },
    { text: "thought-provoking", emoji: "🤔" },
    { text: "radiant", emoji: "🌞" },
    { text: "warm-hearted", emoji: "💓" },
    { text: "innovative", emoji: "💡" },
    { text: "selfless", emoji: "🤲" },
    { text: "diligent", emoji: "📅" },
    { text: "polite", emoji: "🙇" },
    { text: "incredible", emoji: "🎆" },
    { text: "uplifting", emoji: "⬆️" },
    { text: "forgiving", emoji: "🌷" },
    { text: "adaptable", emoji: "🌊" },
    { text: "bold", emoji: "🦁" },
    { text: "intuitive", emoji: "🔮" },
    { text: "perceptive", emoji: "👀" },
    { text: "insightful", emoji: "🧩" },
    { text: "versatile", emoji: "🔄" },
    { text: "graceful", emoji: "🕊️" },
    { text: "thoughtful", emoji: "🌻" },
    { text: "empathetic", emoji: "🥰" },
    { text: "balanced", emoji: "⚖️" },
    { text: "amusing", emoji: "🎭" },
    { text: "endearing", emoji: "😍" },
    { text: "magnetic", emoji: "🧲" },
    { text: "influential", emoji: "📣" },
    { text: "steadfast", emoji: "🌳" },
    { text: "vivacious", emoji: "🎇" },
    { text: "fearless", emoji: "🦅" },
    { text: "compelling", emoji: "🌌" },
    { text: "artistic", emoji: "🖼️" },
    { text: "peaceful", emoji: "🕊️" },
    { text: "proactive", emoji: "⚙️" },
    { text: "relaxed", emoji: "🌿" },
    { text: "wise", emoji: "🦉" },
    { text: "fair-minded", emoji: "⚖️" },
    { text: "tactful", emoji: "💬" },
    { text: "honest", emoji: "👌" },
    { text: "self-assured", emoji: "🧍" },
    { text: "jovial", emoji: "🎈" },
    { text: "motivating", emoji: "💥" },
    { text: "passionate", emoji: "🔥" },
    { text: "bright", emoji: "💡" },
    { text: "receptive", emoji: "👂" },
    { text: "observant", emoji: "🔍" },
    { text: "curious", emoji: "🧐" },
    { text: "analytical", emoji: "🧮" },
    { text: "genuine", emoji: "💯" },
    { text: "considerate", emoji: "💝" },
    { text: "supportive", emoji: "🤝" },
    { text: "respectful", emoji: "🤲" },
  ];

  const [adjective, setAdjective] = useState(adjectives[0]);

  const handleClick = () => {
    // set a random adjective, but not the same one twice
    const newAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    if (newAdjective !== adjective) {
      setAdjective(newAdjective);
    } else {
      handleClick();
    }
  };

  return (
    <div className="grid text-center place-items-center p-3 md:p-6 lg:p-10 min-h-dvh">
      <div className="grid gap-4 place-items-center">
        <h1 className="font-bold text-2xl md:text-5xl ">{adjective.emoji}</h1>
        <h1 className="font-bold text-lg md:text-3xl">
          Tae is <span className="text-fuchsia-600">{adjective.text}</span>!
        </h1>
        <Button onClick={handleClick}>Click me</Button>
      </div>
    </div>
  );
}
