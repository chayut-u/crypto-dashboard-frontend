import { Alert, Analysis, SummaryResponse, Transaction } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || 'change-me';

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'X-API-Key': API_KEY,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data.data as T;
}

export async function getSummary(): Promise<SummaryResponse> {
  return request<SummaryResponse>('/summary');
}

export async function getAlerts(): Promise<Alert[]> {
  return request<Alert[]>('/alerts');
}

export async function getTransactions(): Promise<Transaction[]> {
  return request<Transaction[]>('/transactions');
}

export async function getInterestingTransactions(): Promise<Transaction[]> {
  return request<Transaction[]>('/transactions/interesting');
}

export async function getLatestAnalysis(): Promise<Analysis | null> {
  const summary = await getSummary();
  return summary.latest_analysis;
}
