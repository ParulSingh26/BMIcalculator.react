import { useState } from "react";
import bgvideo from'../src/assets/bgvideo.mp4'

function Bmicalc() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height || weight <= 0 || height <= 0) {
      setMessage("Please enter valid height and weight.");
      setBmi(null);
      return;
    }

    const heightInMeters = height / 100;//152cm = 152/100= 1.52meters

    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);//tofixed(2) represents two digits after decimal
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage("You are underweight!");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are normal!");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("You are Overweight!");
    } else {
      setMessage("Obese!");
    }

    setHeight("");
    setWeight("");
  };

  return (
    <section>
      <video
        src={bgvideo}
        title="Demo Background Sample Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        autoplay
        muted
        loop
      ></video>
      <div className="main-page">
        <h1>BMI Calculator</h1>
        <form className="form-page">
          <div>
            <label htmlFor="height">Height(in cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="weight">weight(in kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit" className="btn-primary" onClick={calculateBMI}>
            calculate
          </button>
        </form>
        <h3 className="result">Your BMI: {bmi}</h3>
        <p> {message}</p>
      </div>
    </section>
  );
}
export default Bmicalc;
