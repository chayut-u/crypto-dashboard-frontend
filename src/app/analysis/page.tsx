import { AISummaryCard } from '@/components/AISummaryCard';
import { getLatestAnalysis } from '@/lib/api';

export default async function AnalysisPage() {
  const analysis = await getLatestAnalysis();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">AI Analysis</h1>
        <p className="text-sm text-muted">Daily analysis summary and recommended actions.</p>
      </div>
      <AISummaryCard analysis={analysis} />
    </div>
  );
}
