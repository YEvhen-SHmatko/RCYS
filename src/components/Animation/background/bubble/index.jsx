/* eslint-disable no-shadow */
import React, { useState, useEffect, createRef } from 'react';

const bubble = (canvas, ctx, amount = 50) => {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const element = () => {
    const xPos = () => Number.parseInt(Math.random() * canvas.width, 0);
    const yPos = () =>
      canvas.height + Number.parseInt(Math.random() * canvas.height * 2, 0);
    const size = () => Number.parseInt((Math.random() + 0.1) * 7, 0);
    const plus = () => Math.random() > 0.5;
    const createBubble = amount => {
      const result = [];
      for (let i = 1; i <= amount; i += 1) {
        const bubble = {
          xPos: xPos(),
          yPos: yPos(),
          size: size(),
          plus: plus(),
          step: 0,
        };
        result.push(bubble);
      }
      return result;
    };
    let allBubble = createBubble(amount);
    const big = ({ xPos, yPos, size }) => {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(200, 200, 200, 0.28)';
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.shadowBlur = 1;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.arc(xPos, yPos, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    };
    const small = ({ xPos, yPos, size }) => {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(250, 250, 250, 0.34)';
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.shadowBlur = 1;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.arc(xPos + size / 4, yPos - size / 4, size / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    };
    const ball = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      allBubble = allBubble.map(bubble => {
        const stepBubble = Number.parseInt(bubble.size + 3, 0);
        if (bubble.yPos < 0) {
          return {
            xPos: xPos(),
            yPos: yPos(),
            size: size(),
            plus: plus(),
            step: 0,
          };
        }
        const newYPos = bubble.yPos - bubble.size / 3;
        if (bubble.plus && bubble.step < stepBubble) {
          const newXPos = bubble.xPos + bubble.size / 30;
          return {
            ...bubble,
            step: bubble.step + 1,
            xPos: newXPos,
            yPos: newYPos,
          };
        }
        if (bubble.plus && bubble.step === stepBubble) {
          const newXPos = bubble.xPos + bubble.size / 40;
          return {
            ...bubble,
            step: bubble.step + 1,
            plus: !bubble.plus,
            xPos: newXPos,
            yPos: newYPos,
          };
        }
        if (!bubble.plus && bubble.step > 0 - stepBubble) {
          const newXPos = bubble.xPos - bubble.size / 40;
          return {
            ...bubble,
            step: bubble.step - 1,
            xPos: newXPos,
            yPos: newYPos,
          };
        }
        if (!bubble.plus && bubble.step === 0 - stepBubble) {
          const newXPos = bubble.xPos - bubble.size / 40;
          return {
            ...bubble,
            step: bubble.step - 1,
            plus: !bubble.plus,
            xPos: newXPos,
            yPos: newYPos,
          };
        }
      });
      allBubble.forEach((bubble, index) => {
        big(bubble);
        small(bubble);
      });
    };
    setInterval(ball, 20);
  };
  element();
};

export default bubble;
