"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import without SSR to avoid hydration issues
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const ACHIEVEMENTS = [
  { label: "Projects", value: 10, postfix: "+" },
  { label: "Publications", value: 2, postfix: "" },
  { label: "Hackathons", value: 2, postfix: "" },
];

const AchievementsSection = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 15000); // refresh every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-6 sm:py-16 xl:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border border-gray-700 rounded-lg p-8">
        {ACHIEVEMENTS.map((item, index) => (
          <div
            key={`${index}-${animationKey}`}
            className="text-center flex flex-col items-center"
          >
            <h2 className="text-white text-5xl font-bold flex items-baseline">
              <AnimatedNumbers
                key={`${index}-${animationKey}`}
                animateToNumber={item.value}
                className="text-white text-5xl font-bold"
                locale="en-US"
                includeComma
                configs={[
                  { mass: 1, tension: 200, friction: 100 },
                  { mass: 1, tension: 150, friction: 100 },
                ]}
              />
              <span className="ml-1 text-3xl">{item.postfix}</span>
            </h2>
            <p className="text-gray-400 text-lg mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
