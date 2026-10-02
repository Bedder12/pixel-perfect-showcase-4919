import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppHeader, AppScreen, Card, ProgressBar, StatusBadge } from "@/components/ui/kit";
import { Art } from "@/components/illustrations";
import { parts } from "@/mock/data";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/plugga/")({
  head: () => meta("Plugga", "Guidad lärostig för delprov 1 och delprov 2."),
  component: Plugga,
});

function Plugga() {
  return (
    <AppScreen>
      <AppHeader title="Plugga" subtitle="Välj delprov" />
      <div className="space-y-4">
        {parts.map((p, i) => (
          <Card key={p.id} to="/plugga/stig" className="p-0 overflow-hidden">
            <div className="p-5 pb-0 flex justify-between items-start">
              <div>
                <StatusBadge>{p.title}</StatusBadge>
                <p className="text-2xl font-extrabold tracking-tight mt-3">{p.subtitle}</p>
                <p className="text-sm font-semibold text-muted-foreground mt-1">{p.completed} av {p.subjects} ämnen klara</p>
              </div>
              <Art name={i === 0 ? "seatbelt" : "book"} className="w-24 h-auto" />
            </div>
            <div className="p-5">
              <div className="flex justify-between text-sm font-bold mb-2"><span>Progress</span><span>{p.progress}%</span></div>
              <ProgressBar value={p.progress} />
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-primary-soft px-4 h-12 text-primary-deep font-bold">
                Fortsätt lärostigen <ArrowRight className="size-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </AppScreen>
  );
}
