import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell } from "lucide-react";
import { AppScreen, Card, IconButton, ProgressBar, ProgressRing, SectionTitle } from "@/components/ui/kit";
import { Art } from "@/components/illustrations";
import { continueLearning, parts, chapters } from "@/mock/data";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/")({
  head: () => meta("Hem", "Plugga till taxiförarlegitimationen – fortsätt där du slutade."),
  component: Home,
});

function Home() {
  return (
    <AppScreen>
      <header className="pt-4 pb-6 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Fredag 2 oktober</p>
          <h1 className="text-[32px] leading-tight font-extrabold tracking-tight">Hej igen, Bedder</h1>
        </div>
        <IconButton label="Notiser"><Bell className="size-5" /></IconButton>
      </header>

      <Link to="/plugga/lektion" className="pressable block rounded-3xl bg-ink text-ink-foreground p-6 shadow-float">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-ink-muted">Fortsätt plugga</p>
            <p className="text-2xl font-extrabold mt-2">{continueLearning.subject}</p>
            <p className="text-ink-muted font-semibold">{continueLearning.lesson}</p>
          </div>
          <span className="text-3xl font-extrabold tabular-nums">{continueLearning.progress}%</span>
        </div>
        <ProgressBar value={continueLearning.progress} tone="light" className="mt-5 bg-ink-foreground/15" />
        <span className="mt-5 inline-flex items-center gap-2 h-12 px-5 rounded-2xl bg-primary text-primary-foreground font-bold">
          Fortsätt <ArrowRight className="size-4" />
        </span>
      </Link>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {[
          { to: "/plugga", t: "Plugga", s: "Lärostig", art: "book" as const },
          { to: "/prov", t: "Prov", s: "Testa dig", art: "test" as const },
        ].map((q) => (
          <Card key={q.to} to={q.to} className="p-4">
            <Art name={q.art} className="w-full h-auto" />
            <p className="text-lg font-extrabold mt-3">{q.t}</p>
            <p className="text-sm text-muted-foreground font-semibold">{q.s}</p>
          </Card>
        ))}
      </div>

      <SectionTitle>Din progress</SectionTitle>
      <Card className="space-y-5">
        {parts.map((p) => (
          <div key={p.id} className="flex items-center gap-4">
            <ProgressRing value={p.progress} />
            <div className="flex-1">
              <p className="font-extrabold">{p.title}</p>
              <p className="text-sm text-muted-foreground font-semibold">{p.subtitle}</p>
            </div>
          </div>
        ))}
      </Card>

      <SectionTitle action="Visa alla">Rekommenderat för dig</SectionTitle>
      <div className="-mx-5 px-5 flex gap-3 overflow-x-auto pb-2 snap-x">
        {chapters.slice(0, 3).map((c) => (
          <Card key={c.name} to="/teoribok" className="min-w-[220px] snap-start p-4">
            <Art name={c.art} className="w-full h-auto" />
            <p className="font-extrabold mt-3">{c.name}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{c.summary}</p>
          </Card>
        ))}
      </div>
    </AppScreen>
  );
}
