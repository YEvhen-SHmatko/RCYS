/* eslint-disable no-shadow */
import React, { useState, useEffect, createRef } from 'react';

const CanvasContainer = ({ width, height, animation, background }) => {
  const [ref, setRef] = useState(createRef());
  useEffect(() => {
    const canvas = ref.current;
    const ctx = ref.current.getContext('2d');
    animation(canvas, ctx);
  }, [ref]);
  return (
    <>
      <canvas ref={ref} width={width} height={height} style={{ background }} />
    </>
  );
};
export default CanvasContainer;
