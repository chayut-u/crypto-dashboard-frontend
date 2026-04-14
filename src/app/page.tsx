import { AISummaryCard } from '@/components/AISummaryCard';
import { TransactionList } from '@/components/TransactionList';
import { getSummary } from '@/lib/api';

export default async function HomePage() {
  const summary = await getSummary();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-muted">Recent Transactions</p>
          <p className="mt-2 text-3xl font-bold text-white">{summary.stats.recent_transactions}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-muted">Recent Alerts</p>
          <p className="mt-2 text-3xl font-bold text-white">{summary.stats.recent_alerts}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-muted">Analysis Source</p>
          <p className="mt-2 text-3xl font-bold text-white">{summary.latest_analysis?.source || 'none'}</p>
        </div>
      </section>
      <AISummaryCard analysis={summary.latest_analysis} />
      <TransactionList transactions={summary.latest_transactions} />
    </div>
  );
}
