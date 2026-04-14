export interface Transaction {
  id: number;
  source: string;
  external_id?: string;
  tx_type?: string;
  amount: number;
  symbol: string;
  wallet_address: string;
  exchange_name?: string | null;
  description?: string;
  created_at: string;
}

export interface Alert {
  id: number;
  transaction_external_id: string;
  score: number;
  threshold: number;
  status: string;
  reason: string;
  payload: Record<string, unknown>;
  created_at: string;
}

export interface Analysis {
  id: number;
  analysis_date: string;
  summary: string;
  sentiment: string;
  signals: string[];
  recommended_actions: string[];
  source: string;
  created_at: string;
}

export interface SummaryResponse {
  stats: {
    recent_transactions: number;
    recent_alerts: number;
  };
  latest_analysis: Analysis | null;
  latest_transactions: Transaction[];
}
