import React from 'react';

const ProfessionSteps = ({ steps, step, setStep, profession, resetProfession }) => {
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  return (
    <div className="steps">
      <button className="return-button" onClick={resetProfession}>Choose Another Profession</button>
      <div className="profession">
        <h4>Chosen Profession: {profession}</h4>
      </div>

      <div className="numbers">
        {steps.map((_, index) => (
          <div key={index} className={step > index ? "active" : ""}>
            {index + 1}
          </div>
        ))}
      </div>

      <p className="message">
        Step {step}: {steps[step - 1]}
      </p>

      <div className="buttons">
        <button onClick={handlePrev}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ProfessionSteps;
