import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const LoveCalculator = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [lovePercentage, setLovePercentage] = useState(null);

  const calculateLovePercentage = async () => {
    try {
      const response = await axios.get(
        `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`,
        {
          headers: {
            'x-rapidapi-host':'love-calculator.p.rapidapi.com',
            'x-rapidapi-key': '5f456e2935msh5a72edefbab8a1cp10c6a2jsn121ad586ed11', 
          },
        }
      );
      setLovePercentage(response.data.percentage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="heading">Love Calculator</h1>
      <div className="input-container">
        <label className="label">Enter your name:</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          className="input"
        />
      </div>
      <div className="input-container">
        <label className="label">Enter your crush's name:</label>
        <input
          type="text"
          value={secondName}
          onChange={handleSecondNameChange}
          className="input"
        />
      </div>
      <button onClick={calculateLovePercentage} className="button">
        Calculate
      </button>
      {lovePercentage !== null && (
        <p className="result">Your love percentage: {lovePercentage}%</p>
      )}
    </div>
  );
};

export default LoveCalculator;
