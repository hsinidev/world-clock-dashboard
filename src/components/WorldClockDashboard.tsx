import React, { useState, useEffect } from 'react';
import { fetchTimeForCity } from '../services/timeService';
import ClockCard from './ClockCard';
import type { WorldTime } from '../types';

const INITIAL_CITIES = [
  'Europe/London',
  'America/New_York',
  'Asia/Tokyo',
  'Asia/Dubai',
  'Australia/Sydney'
];

const WorldClockDashboard: React.FC = () => {
  const [timeData, setTimeData] = useState<WorldTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://worldtimeapi.org/api/timezone/');

  useEffect(() => {
    const fetchAllTimes = async () => {
      setLoading(true);
      const promises = INITIAL_CITIES.map(city => fetchTimeForCity(city));
      const results = await Promise.all(promises);
      setTimeData(results);
      setLoading(false);
    };

    fetchAllTimes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl">
            Global Time Command
        </h1>
        <p className="relative text-lg md:text-xl text-purple-200 font-light max-w-2xl mx-auto">
            Real-time synchronization across the world's financial and cultural capitals.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-64">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)]"></div>
          <p className="mt-4 text-purple-300 animate-pulse">Synchronizing Atomic Clocks...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {timeData.map((data) => (
            <ClockCard key={data.timezone} timeData={data} />
          ))}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col justify-center text-white border border-dashed border-purple-500/30 hover:border-purple-500/60 transition-colors group">
                <h3 className="text-xl font-semibold text-center text-purple-300 mb-6 group-hover:text-purple-200 transition-colors">Configuration</h3>
                <div className="flex flex-col space-y-3">
                    <label htmlFor="api-url" className="text-xs text-gray-400 uppercase tracking-wider font-bold">Time Zone API Endpoint</label>
                    <div className="relative">
                        <input
                            id="api-url"
                            type="text"
                            value={apiUrl}
                            onChange={(e) => setApiUrl(e.target.value)}
                            placeholder="https://..."
                            className="w-full bg-gray-900/80 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all shadow-inner"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500 text-xs">JSON</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default WorldClockDashboard;