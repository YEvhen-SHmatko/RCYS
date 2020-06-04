import React from 'react';
import { nanoid } from 'nanoid';
import Styles from './index.module.css';

const data = [
  { name: 'chery', value: 2500 },
  { name: 'chery', value: 4500 },
  { name: 'chery', value: 500 },
  { name: 'chery', value: 5500 },
  // { name: 'chery', value: 4100 },
  // { name: 'chery', value: 300 },
  // { name: 'chery', value: 2000 },
  // { name: 'chery', value: 1500 },
  // { name: 'chery', value: 500 },
  // { name: 'chery', value: 200 },
  // { name: 'chery', value: 200 },
  // { name: 'chery', value: 200 },
  // { name: 'chery', value: 200 },
  // { name: 'chery', value: 200 },
  // { name: 'chery', value: 300 },
  // { name: 'chery', value: 2000 },
  // { name: 'chery', value: 1500 },
  // { name: 'chery', value: 500 },
  // { name: 'chery', value: 200 },
  // { name: 'chery', value: 200 },
];
const H = () => {
  const max = Math.max(...data.map(item => item.value));
  const onePersent = 100 / max;
  const newData = data
    .map(item => {
      return {
        ...item,
        id: nanoid(),
        height: +(item.value * onePersent).toFixed(0),
      };
    })
    .sort((a, b) => {
      if (a.height < b.height) {
        return 1;
      }
      if (a.height > b.height) {
        return -1;
      }
      if (a.height === b.height) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      }
      return 0;
    });
  console.log(newData.map(i => i.value));
  const width = '40px';
  const padding = '20px';
  const background = '#000';
  const border = {
    borderTopLeftRadius: '14px',
    borderTopRightRadius: '14px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
  };
  const stylesList = {
    display: 'flex',
    flexWrap: 'nowrap',
    height: '400px',
    width: '400px',
    'overflow-x': 'auto',
    listStyle: 'none',
    boxSizing: 'border-box',
    padding,
  };
  const stylesElem = {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: padding || width / 2,
    flexDirection: 'column',
  };
  const stylesBar = height => ({
    boxSizing: 'border-box',
    width,
    background,
    ...border,
    height: `${height}%`,
  });
  return (
    <ul style={stylesList}>
      {newData.map(item => (
        <li style={stylesElem} key={item.id}>
          <div>{item.value}</div>
          <div style={stylesBar(item.height)} />
          <div>{item.name}</div>
        </li>
      ))}
    </ul>
  );
};
export default H;
