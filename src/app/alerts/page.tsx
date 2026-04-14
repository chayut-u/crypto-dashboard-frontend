import { AlertList } from '@/components/AlertList';
import { getAlerts } from '@/lib/api';

export default async function AlertsPage() {
  const alerts = await getAlerts();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Alerts</h1>
        <p className="text-sm text-muted">Review all triggered alerts and their scores.</p>
      </div>
      <AlertList alerts={alerts} />
    </div>
  );
}
