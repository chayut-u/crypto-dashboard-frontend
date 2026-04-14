import { Analysis } from '@/lib/types';

interface AISummaryCardProps {
  analysis: Analysis | null;
}

export function AISummaryCard({ analysis }: AISummaryCardProps) {
  if (!analysis) {
    return (
      <div className="rounded-2xl border border-border bg-card p-4 shadow-lg shadow-black/20">
        <h2 className="mb-2 text-lg font-semibold text-white">Latest AI Summary</h2>
        <p className="text-sm text-muted">No analysis available yet.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-lg shadow-black/20">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Latest AI Summary</h2>
        <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-300">{analysis.sentiment}</span>
      </div>
      <p className="text-sm text-slate-200">{analysis.summary}</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-white">Signals</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
            {analysis.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-white">Recommended Actions</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
            {analysis.recommended_actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
