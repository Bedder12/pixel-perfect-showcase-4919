import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { AppHeader, AppScreen, Card, PrimaryButton, ProgressRing, StateIcon } from "@/components/ui/kit";
import { Art } from "@/components/illustrations";
import { lessons } from "@/mock/data";
import { cn } from "@/lib/utils";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/plugga/amne")({
  head: () => meta("Säkerhet", "Åtta moment om risker, hastighet och passagerarsäkerhet."),
  component: Subject,
});

function Subject() {
  return (
    <AppScreen>
      <AppHeader back="/plugga/stig" />
      <Card className="flex items-center gap-5">
        <div className="flex-1">
          <h1 className="text-[32px] font-extrabold tracking-tight leading-tight">Säkerhet</h1>
          <p className="text-muted-foreground font-semibold mt-1">8 moment · 3 klara</p>
        </div>
        <ProgressRing value={38} size={72} stroke={7} />
      </Card>
      <Art name="seatbelt" className="w-full h-auto mt-4 rounded-3xl" />
      <PrimaryButton to="/plugga/lektion" className="mt-4">Fortsätt med Mörkerkörning</PrimaryButton>

      <h2 className="text-xl font-extrabold mt-9 mb-3">Moment</h2>
      <div className="space-y-2">
        {lessons.map((l, i) => (
          <LessonRow key={l.title} index={i + 1} {...l} />
        ))}
      </div>
    </AppScreen>
  );
}

function LessonRow({ title, state, index }: { title: string; state: "done" | "current" | "upcoming"; index: number }) {
  const current = state === "current";
  return (
    <Link to="/plugga/lektion" className={cn(
      "pressable flex items-center gap-4 rounded-2xl px-4 py-4",
      current ? "bg-primary-soft border-2 border-primary" : "bg-card border hover:border-primary/30",
    )}>
      <StateIcon state={state} />
      <div className="flex-1">
        <p className={cn("font-bold", state === "done" && "text-muted-foreground")}>{title}</p>
        {current && <p className="text-xs font-bold text-primary-deep mt-0.5">Moment {index} · Pågår</p>}
      </div>
      <ChevronRight className="size-5 text-muted-foreground" />
    </Link>
  );
}
