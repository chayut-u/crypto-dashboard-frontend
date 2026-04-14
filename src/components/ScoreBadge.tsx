interface ScoreBadgeProps {
  score: number;
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  let color = 'bg-slate-700 text-slate-100';

  if (score >= 80) {
    color = 'bg-red-500/20 text-red-300';
  } else if (score >= 60) {
    color = 'bg-amber-500/20 text-amber-300';
  } else {
    color = 'bg-emerald-500/20 text-emerald-300';
  }

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}>Score {score}</span>;
}
