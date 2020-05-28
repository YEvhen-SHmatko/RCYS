import React from 'react';
import CanvasContainer from '../components/Animation/CanvasContainer';
import bubble from '../components/Animation/background/bubble';

const HomePage = () => (
  <CanvasContainer
    width={500}
    height={250}
    animation={bubble}
    background="linear-gradient(0deg, #1a237e 0%, #0091ea 100%)"
  />
);
export default HomePage;
