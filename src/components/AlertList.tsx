import { Alert } from '@/lib/types';
import { ScoreBadge } from './ScoreBadge';

interface AlertListProps {
  alerts: Alert[];
}

export function AlertList({ alerts }: AlertListProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg shadow-black/20">
      <h2 className="mb-4 text-lg font-semibold text-white">Alert History</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="font-medium text-white">{alert.transaction_external_id}</p>
              <ScoreBadge score={alert.score} />
            </div>
            <p className="text-sm text-slate-300">{alert.reason}</p>
            <p className="mt-2 text-xs text-muted">{new Date(alert.created_at).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
