import { AISummaryCard } from '@/components/AISummaryCard';
import { TransactionList } from '@/components/TransactionList';
import { getSummary } from '@/lib/api';

export default async function HomePage() {
  const summary = await getSummary();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-muted">Tracked Movements</p>
          <p className="mt-2 text-3xl font-bold text-white">{summary.stats.recent_transactions}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-muted">Recent Alerts</p>
          <p className="mt-2 text-3xl font-bold text-white">{summary.stats.recent_alerts}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-muted">Interesting Movements</p>
          <p className="mt-2 text-3xl font-bold text-white">{summary.stats.interesting_movements}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-sm text-muted">Tracked Wallets</p>
          <p className="mt-2 text-3xl font-bold text-white">{summary.stats.tracked_wallets}</p>
        </div>
      </section>

      <AISummaryCard analysis={summary.latest_analysis} />

      <section className="grid gap-6 xl:grid-cols-2">
        <TransactionList title="Latest Movements" transactions={summary.latest_transactions} />
        <TransactionList title="Interesting Movements Monitor" transactions={summary.interesting_transactions} />
      </section>
    </div>
  );
}
