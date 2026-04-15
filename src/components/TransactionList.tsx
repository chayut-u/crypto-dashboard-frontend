import { Transaction } from '@/lib/types';

interface TransactionListProps {
  transactions: Transaction[];
  title?: string;
}

function formatNumber(value: number | null | undefined, digits = 2) {
  if (value === null || value === undefined) {
    return '-';
  }
  return value.toLocaleString(undefined, { maximumFractionDigits: digits });
}

function formatTimestamp(value?: string | null, fallback?: string) {
  const target = value || fallback;
  if (!target) {
    return '-';
  }
  return new Date(target).toLocaleString();
}

export function TransactionList({ transactions, title = 'Recent Movements' }: TransactionListProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg shadow-black/20">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <span className="text-sm text-muted">{transactions.length} items</span>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium text-white">
                    {transaction.tx_type || transaction.source} · {transaction.symbol}
                  </p>
                  {transaction.category ? (
                    <span className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
                      {transaction.category}
                    </span>
                  ) : null}
                  {transaction.is_interesting ? (
                    <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs text-amber-300">
                      interesting
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-muted">
                  {transaction.wallet_address || transaction.account_index || 'Unknown wallet'}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {transaction.description || transaction.interesting_reason || 'No extra details'}
                </p>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-base font-semibold text-accent">
                  {formatNumber(transaction.amount)} {transaction.symbol}
                </p>
                {transaction.quote_amount ? (
                  <p className="text-xs text-slate-300">≈ ${formatNumber(transaction.quote_amount)}</p>
                ) : null}
                <p className="text-xs text-muted">{formatTimestamp(transaction.event_timestamp, transaction.created_at)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
