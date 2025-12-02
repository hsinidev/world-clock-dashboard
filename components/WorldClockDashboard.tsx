import React, { useState, useEffect } from 'react';
import ClockCard from './ClockCard';
import type { ClockData } from '../types';

const timezones = [
  { city: 'London', timezone: 'Europe/London' },
  { city: 'New York', timezone: 'America/New_York' },
  { city: 'Tokyo', timezone: 'Asia/Tokyo' },
  { city: 'Dubai', timezone: 'Asia/Dubai' },
  { city: 'Sydney', timezone: 'Australia/Sydney' },
  { city: 'Paris', timezone: 'Europe/Paris' },
  { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { city: 'Beijing', timezone: 'Asia/Shanghai' },
  { city: 'Moscow', timezone: 'Europe/Moscow' },
  { city: 'São Paulo', timezone: 'America/Sao_Paulo' },
  { city: 'Cairo', timezone: 'Africa/Cairo' },
];

// Helper function to get the timezone abbreviation using the Intl API
const getTimezoneAbbreviation = (timezone: string) => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    timeZoneName: 'short',
  });
  // Find the 'timeZoneName' part from the formatted parts
  const parts = formatter.formatToParts(now);
  return parts.find(part => part.type === 'timeZoneName')?.value || '';
};


const initialClocks: ClockData[] = timezones.map(tz => ({
    id: tz.timezone,
    city: tz.city,
    timezone: tz.timezone,
    time: new Date(), // Current time, will be formatted to the correct timezone in the card
    abbreviation: getTimezoneAbbreviation(tz.timezone),
}));


const WorldClockDashboard: React.FC = () => {
  const [clocks, setClocks] = useState<ClockData[]>(initialClocks);

  useEffect(() => {
    const timerId = setInterval(() => {
      // It's more accurate to create a new Date() object each time
      // to avoid drift from when the component first rendered.
      const now = new Date();
      setClocks(prevClocks =>
        prevClocks.map(clock => ({
          ...clock,
          time: now,
        }))
      );
    }, 1000);

    return () => clearInterval(timerId);
  }, []);


  return (
    <div>
      <div className="text-center mb-10 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 mb-2">
          Global Time at a Glance
        </h1>
        <p className="text-lg text-purple-300/80 max-w-2xl mx-auto">
          Live clocks from major cities around the world, synchronized to your device.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {clocks.map(clockData => (
          <ClockCard key={clockData.id} data={clockData} />
        ))}
      </div>
    </div>
  );
};

export default WorldClockDashboard;