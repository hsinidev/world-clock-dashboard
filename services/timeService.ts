
import type { WorldTimeApiResponse } from '../types';

const API_BASE_URL = 'https://worldtimeapi.org/api/timezone';

export const fetchTimeForTimezone = async (timezone: string): Promise<WorldTimeApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${timezone}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch time for ${timezone}. Status: ${response.status}`);
    }
    const data: WorldTimeApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching time for ${timezone}:`, error);
    throw error;
  }
};
