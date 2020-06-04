import React, { useEffect, createRef } from 'react';

const CanvasContainer = ({ width, height, animation, background }) => {
  const ref = createRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = ref.current.getContext('2d');
    animation(canvas, ctx);
  });
  return (
    <div style={{ width, height }}>
      <canvas ref={ref} style={{ background }} />
    </div>
  );
};
export default CanvasContainer;
