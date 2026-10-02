import { createFileRoute } from "@tanstack/react-router";
import { AppHeader, AppScreen, ProgressBar, StatusBadge } from "@/components/ui/kit";
import { LearningPath } from "@/components/learning/LearningPath";
import { pathSubjects } from "@/mock/data";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/plugga/stig")({
  head: () => meta("Lärostig", "Din väg genom delprov 1 – säkerhet och beteende."),
  component: Path,
});

function Path() {
  return (
    <AppScreen>
      <AppHeader back="/plugga" subtitle="Delprov 1" title="Säkerhet och beteende" right={<StatusBadge>3 av 8 klara</StatusBadge>} />
      <ProgressBar value={42} />
      <div className="mt-10"><LearningPath nodes={pathSubjects} /></div>
    </AppScreen>
  );
}
