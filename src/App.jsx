import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState({
    yar: new Date().getFullYear(),
    mon: new Date().getMonth(),
    day: new Date().getDate(),
    hou: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds()
  });

  const [mode, setMode] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setTime({
        yar: new Date().getFullYear(),
        mon: new Date().getMonth(),
        day: new Date().getDate(),
        hou: new Date().getHours() % 12,
        min: new Date().getMinutes(),
        sec: new Date().getSeconds()
      });
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="drag_none">Clock</h1>
        <a href="https://github.com/lavi27">lavi</a>
      </header>

      <main>
        <div className='ui_wrap'>
          <div className='ui_left'>
            <div className='calendar'>
              <span>{time.yar}</span>
              <span>{time.mon + 1}</span>
              <span>{time.day}</span>
            </div>

            <div className='degitalClock'>
              <span>{(time.hou !== 0) ? time.hou : 12}</span>
              <span>{time.min}</span>
              <span>{time.sec}</span>
            </div>
          </div>
          <div className='ui_right'>
            <div className='mode'>{mode}</div>
            <input className='setMode' ></input>
          </div>
        </div>

        <div className='analogClock'>
          <div className='hands'>
            <div className='hourHand' style={{transform: `rotate(${time.hou * 30 + 180}deg)`}}></div>
            <div className='minuteHand' style={{transform: `rotate(${time.min * 6 + 180}deg)`}}></div>
            <div className='secondHand' style={{transform: `rotate(${time.sec * 6 + 180}deg)`}}></div>
          </div>
        </div>
      </main>
    </div>
  );
}