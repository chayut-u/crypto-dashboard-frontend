import { Transaction } from '@/lib/types';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg shadow-black/20">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
        <span className="text-sm text-muted">{transactions.length} items</span>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-white">{transaction.source} · {transaction.symbol}</p>
                <p className="text-sm text-muted">{transaction.wallet_address || 'Unknown wallet'}</p>
              </div>
              <div className="text-right">
                <p className="text-base font-semibold text-accent">{transaction.amount}</p>
                <p className="text-xs text-muted">{new Date(transaction.created_at).toLocaleString()}</p>
              </div>
            </div>
            {transaction.description ? <p className="mt-2 text-sm text-slate-300">{transaction.description}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
