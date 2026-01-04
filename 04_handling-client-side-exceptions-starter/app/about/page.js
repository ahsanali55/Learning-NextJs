"use client"
import { useState } from "react";

const About = () => {
  const [fruits, setfruits] = useState(['apple', 'banana', 'mangoes', 'orange']);
  const handleError = () => {

     setfruits(null);
      
  }
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>
      <ul> Healthy Fruits
      {fruits.map((fruit, index) => (
          <li key={index} >{fruit}</li>
          
      ))}
        </ul>
      <button onClick={handleError} >Click me</button>
    </div>
  );
};

export default About;
