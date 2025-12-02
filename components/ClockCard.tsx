
import React, { useMemo } from 'react';
import type { ClockData } from '../types';

interface ClockCardProps {
  data: ClockData;
}

const ClockCard: React.FC<ClockCardProps> = ({ data }) => {
  const { city, time, timezone, abbreviation } = data;

  const formattedTime = useMemo(() => {
    return time.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }, [time, timezone]);

  const formattedDate = useMemo(() => {
    return time.toLocaleDateString('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [time, timezone]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-white border border-white/20 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-purple-300">{city}</h2>
          <span className="text-lg font-semibold bg-pink-500/50 px-2 py-1 rounded">{abbreviation}</span>
        </div>
        <p className="text-sm text-purple-200/80 mb-4">{timezone.replace('_', ' ')}</p>
      </div>
      <div className="text-center my-4">
        <p className="text-6xl md:text-7xl font-mono font-black text-shadow-lg" style={{textShadow: '0 0 10px rgba(236, 72, 153, 0.5)'}}>
          {formattedTime}
        </p>
      </div>
      <div className="text-right mt-4">
        <p className="text-md text-purple-200/90">{formattedDate}</p>
      </div>
    </div>
  );
};

export default ClockCard;
