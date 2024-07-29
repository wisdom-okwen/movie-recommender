import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from '../config';

const Home = () => {
  

  return (
    <div>
      <button>Generate Content</button>
      <p>{}</p>
    </div>
  );
};

export { Home };