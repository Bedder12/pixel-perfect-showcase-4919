import { createFileRoute } from "@tanstack/react-router";
import { Clock, ListChecks } from "lucide-react";
import { AppHeader, AppScreen, Card, PrimaryButton, SectionTitle } from "@/components/ui/kit";
import { Art } from "@/components/illustrations";
import { practice } from "@/mock/data";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/prov/")({
  head: () => meta("Prov", "Gör fullständiga provsimuleringar och övningsprov."),
  component: Prov,
});

const exams = [
  { t: "Delprov 1", s: "Säkerhet och beteende", q: 70 },
  { t: "Delprov 2", s: "Lagstiftning", q: 50 },
];

function Prov() {
  return (
    <AppScreen>
      <AppHeader title="Prov" subtitle="Testa dina kunskaper" />
      <div className="space-y-4">
        {exams.map((e, i) => (
          <div key={e.t} className={i === 0 ? "rounded-3xl bg-ink text-ink-foreground p-6 shadow-float" : "rounded-3xl bg-card border shadow-card p-6"}>
            <p className={i === 0 ? "text-sm font-bold text-ink-muted" : "text-sm font-bold text-muted-foreground"}>{e.t}</p>
            <p className="text-2xl font-extrabold tracking-tight mt-1">{e.s}</p>
            <div className={i === 0 ? "flex gap-5 mt-4 text-sm font-semibold text-ink-muted" : "flex gap-5 mt-4 text-sm font-semibold text-muted-foreground"}>
              <span className="flex items-center gap-1.5"><ListChecks className="size-4" />{e.q} frågor</span>
              <span className="flex items-center gap-1.5"><Clock className="size-4" />50 min</span>
            </div>
            <PrimaryButton to="/prov/fraga" className="mt-5">Starta fullständigt prov</PrimaryButton>
          </div>
        ))}
      </div>
      <SectionTitle>Övningsprov</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {practice.map((p) => (
          <Card key={p.name} to="/prov/fraga" className="p-4">
            <Art name={p.art} className="w-full h-auto" />
            <p className="font-extrabold mt-3">{p.name}</p>
            <p className="text-sm text-muted-foreground font-semibold">{p.questions} frågor</p>
          </Card>
        ))}
      </div>
    </AppScreen>
  );
}
