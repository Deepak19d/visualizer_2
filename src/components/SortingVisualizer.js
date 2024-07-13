// src/components/SortingVisualizer.js
import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(randomIntFromInterval(5, 730));
    }
    setArray(arr);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Bubble Sort Algorithm
  const bubbleSort = async () => {
    let arr = array.slice();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray(arr.slice());
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      }
    }
  };

  return (
    <div className="sorting-visualizer-container">
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default SortingVisualizer;
