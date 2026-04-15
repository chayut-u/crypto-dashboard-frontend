export interface Transaction {
  id: number;
  source: string;
  category?: string | null;
  external_id?: string;
  tx_type?: string;
  amount: number | null;
  symbol: string;
  wallet_address: string;
  account_index?: string | null;
  exchange_name?: string | null;
  direction?: string | null;
  unit_price?: number | null;
  quote_amount?: number | null;
  event_timestamp?: string | null;
  is_interesting?: boolean;
  interesting_reason?: string | null;
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
    interesting_movements: number;
    tracked_wallets: number;
  };
  latest_analysis: Analysis | null;
  latest_transactions: Transaction[];
  interesting_transactions: Transaction[];
}
