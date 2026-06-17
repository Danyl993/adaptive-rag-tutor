import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";

export default function DashboardPage() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <Card title="Study Progress">
        No data available yet.
      </Card>
    </PageLayout>
  );
}