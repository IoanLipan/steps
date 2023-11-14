import React, { useState } from "react";
import ChooseProfession from "./ChooseProfession";
import ProfessionSteps from "./ProfessionSteps";

const professionSteps = {
  "Developer 👨‍💻": [
    "Learn Programming Languages 💻",
    "Build Projects 🏗️",
    "Contribute to Open Source 🌐",
    "Create a Personal Website 🖥️",
    "Apply for Developer Jobs 💼",
  ],
  "Designer 🎨": [
    "Learn Design Principles 🖌️",
    "Master Design Tools 🛠️",
    "Create a Portfolio 📁",
    "Work on Freelance Projects 🎨",
    "Apply for Designer Jobs 💼",
  ],
  "Marketer 📈": [
    "Learn Marketing Strategies 📊",
    "Understand Digital Marketing 🌐",
    "Develop a Marketing Plan 📝",
    "Build an Online Presence 💻",
    "Network with Professionals 💬",
  ],
  "Data Scientist 🧪": [
    "Learn Data Analysis 📊",
    "Master Data Manipulation Tools 🔧",
    "Understand Machine Learning 🤖",
    "Work on Data Projects 📈",
    "Apply for Data Science Jobs 💼",
  ],
  "Writer ✍️": [
    "Improve Writing Skills ✏️",
    "Create a Writing Portfolio 📚",
    "Write and Publish Articles 📰",
    "Explore Different Writing Styles 🖊️",
    "Apply for Writing Jobs 📖",
  ],
  "Chef 👩‍🍳": [
    "Learn Cooking Basics 🍳",
    "Experiment with Recipes 📗",
    "Understand Food Presentation 🍲",
    "Work in a Professional Kitchen 🍴",
    "Apply for Chef Positions 🧑‍🍳",
  ],
  "Engineer 👷": [
    "Study Engineering Fundamentals ⚙️",
    "Participate in Engineering Projects 🌉",
    "Learn CAD and Simulation Tools 🖥️",
    "Intern with an Engineering Firm 🏗️",
    "Apply for Engineering Jobs 🛠️",
  ],
  "Photographer 📸": [
    "Learn Photography Basics 📷",
    "Master Photo Editing Software 🖥️",
    "Build a Photography Portfolio 🖼️",
    "Work on Freelance Photography Projects 🌄",
    "Apply for Photography Jobs 📸",
  ],
  "Graphic Artist 🎨": [
    "Learn Graphic Design Basics ✒️",
    "Master Graphic Design Software 💻",
    "Create Digital Artworks 🖌️",
    "Work on Freelance Projects 🎭",
    "Apply for Graphic Design Jobs 🎨",
  ],
  "Musician 🎵": [
    "Learn Music Theory 🎶",
    "Master an Instrument 🎸",
    "Compose and Record Music 🎹",
    "Perform at Local Events 🎷",
    "Apply for Music Industry Jobs 🎤",
  ],
  "Teacher 👩‍🏫": [
    "Study Education Theory 📚",
    "Develop Teaching Materials 📖",
    "Practice Classroom Management 👥",
    "Gain Experience through Internships 🏫",
    "Apply for Teaching Positions 🎓",
  ],
  "Nurse 👩‍⚕️": [
    "Learn Nursing Fundamentals 📋",
    "Complete Clinical Rotations 🏥",
    "Understand Patient Care Techniques 🩺",
    "Work in Healthcare Settings 🚑",
    "Apply for Nursing Positions 💉",
  ],
};

const colorSchemes = {
  "Developer 👨‍💻": { primaryColor: "#7950f2", hoverColor: "#6741d9" },
  "Designer 🎨": { primaryColor: "#e91e63", hoverColor: "#c2185b" },
  "Marketer 📈": { primaryColor: "#00bcd4", hoverColor: "#0097a7" },
  "Data Scientist 🧪": { primaryColor: "#9c27b0", hoverColor: "#7b1fa2" },
  "Writer ✍️": { primaryColor: "#ff9800", hoverColor: "#f57c00" },
  "Chef 👩‍🍳": { primaryColor: "#4caf50", hoverColor: "#388e3c" },
  "Engineer 👷": { primaryColor: "#f44336", hoverColor: "#d32f2f" },
  "Photographer 📸": { primaryColor: "#3f51b5", hoverColor: "#303f9f" },
  "Graphic Artist 🎨": { primaryColor: "#00acc1", hoverColor: "#007c91" },
  "Musician 🎵": { primaryColor: "#673ab7", hoverColor: "#512da8" },
  "Teacher 👩‍🏫": { primaryColor: "#ffc107", hoverColor: "#ffa000" },
  "Nurse 👩‍⚕️": { primaryColor: "#2196f3", hoverColor: "#1976d2" },
};

export default function App() {
  const [profession, setProfession] = useState("");
  const [step, setStep] = useState(1);

  const resetProfession = () => {
    setProfession("");
    setStep(1);

    const scheme = colorSchemes[profession];

    if (scheme) {
      document.documentElement.style.setProperty('--primary-color', scheme.primaryColor);
      document.documentElement.style.setProperty('--primary-hover-color', scheme.hoverColor);
    }
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
