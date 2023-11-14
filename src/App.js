import React, { useState } from "react";
import ChooseProfession from "./ChooseProfession";
import ProfessionSteps from "./ProfessionSteps";

const professionSteps = {
  "Developer 👨‍💻": [
    "Learn Programming Languages 💻",
    "Build Projects 🏗️",
    "Apply for Developer Jobs 💼",
  ],
  "Designer 🎨": [
    "Learn Design Principles 🖌️",
    "Create a Portfolio 📁",
    "Apply for Designer Jobs 💼",
  ],
  "Marketer 📈": [
    "Learn Marketing Strategies 📊",
    "Develop a Marketing Plan 📝",
    "Network with Professionals 💬",
  ],
  // Add more professions with their steps here
};

export default function App() {
  const [profession, setProfession] = useState("");
  const [step, setStep] = useState(1);

  const resetProfession = () => {
    setProfession("");
    setStep(1);
  };

  return (
    <div>
      {profession === "" ? (
        <ChooseProfession
          professions={Object.keys(professionSteps)}
          setProfession={setProfession}
        />
      ) : (
        <ProfessionSteps
          steps={professionSteps[profession]}
          step={step}
          setStep={setStep}
          profession={profession}
          resetProfession={resetProfession}
        />
      )}
    </div>
  );
}
