/* eslint-disable no-shadow */
import React, { useState, useEffect, createRef } from 'react';

const bubble = (canvas, ctx, amount = 40) => {
  const element = () => {
    const xPos = () => Number.parseInt(Math.random() * canvas.width, 0);
    const yPos = () =>
      canvas.height + Number.parseInt(Math.random() * canvas.height * 2, 0);
    const size = () => Number.parseInt((Math.random() + 0.1) * 7, 0);
    const dy = 0.3;
    const createBubble = amount => {
      const result = [];
      for (let i = 1; i <= amount; i += 1) {
        const bubble = {
          xPos: xPos(),
          yPos: yPos(),
          size: size(),
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
        if (bubble.yPos < 0) {
          return { xPos: xPos(), yPos: yPos(), size: size() };
        }
        return { ...bubble, yPos: bubble.yPos - dy };
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
