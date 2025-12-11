
import React, { useState, useEffect } from 'react';
import type { WorldTime } from '../types';

interface ClockCardProps {
  timeData: WorldTime;
}

const ClockCard: React.FC<ClockCardProps> = ({ timeData }) => {
  const [currentTime, setCurrentTime] = useState(timeData.dateObject);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timeData.timezone,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: timeData.timezone,
    });
  };

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col justify-between text-white border border-purple-500/30 transition-all duration-300 hover:border-purple-500/80 hover:shadow-purple-500/20">
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-purple-300">{timeData.city}</h2>
          <span className="text-sm font-mono bg-purple-500/20 px-2 py-1 rounded">{timeData.abbreviation}</span>
        </div>
        <p className="text-sm text-gray-400">{timeData.timezone}</p>
      </div>
      <div className="text-center my-6">
        <p className="text-6xl md:text-7xl font-mono font-bold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
          {formatTime(currentTime)}
        </p>
      </div>
      <div className="text-right text-gray-300">
        <p>{formatDate(currentTime)}</p>
      </div>
    </div>
  );
};

export default ClockCard;
