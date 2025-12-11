
import type { WorldTime } from '../types';

const BASE_URL = 'https://worldtimeapi.org/api/timezone/';

export const fetchTimeForCity = async (timezone: string): Promise<WorldTime> => {
  try {
    const response = await fetch(`${BASE_URL}${timezone}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch time for ${timezone}`);
    }
    const data: WorldTime = await response.json();
    const city = timezone.split('/').pop()?.replace(/_/g, ' ') || 'Unknown';
    return { ...data, city, dateObject: new Date(data.datetime) };
  } catch (error) {
    console.error(error);
    // Return a fallback object on error to prevent crashes
    return {
      abbreviation: 'N/A',
      datetime: new Date().toISOString(),
      timezone: timezone,
      utc_offset: '+00:00',
      city: timezone.split('/').pop()?.replace(/_/g, ' ') || 'Error',
      dateObject: new Date(),
      client_ip: '',
      day_of_week: 0,
      day_of_year: 0,
      dst: false,
      dst_from: null,
      dst_offset: 0,
      dst_until: null,
      raw_offset: 0,
      unixtime: 0,
      utc_datetime: '',
      week_number: 0,
    };
  }
};
