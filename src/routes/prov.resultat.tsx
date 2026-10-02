import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { AppScreen, Card, PrimaryButton, ProgressBar, SecondaryButton, SectionTitle } from "@/components/ui/kit";
import { result } from "@/mock/data";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/prov/resultat")({
  head: () => meta("Resultat", "Ditt provresultat med uppdelning per ämne."),
  component: Result,
});

function Result() {
  const pct = (result.score / result.total) * 100;
  const limitPct = (result.limit / result.total) * 100;
  return (
    <AppScreen nav={false}>
      <div className="pt-6 rounded-b-[36px] -mx-5 px-5 pb-8 bg-primary text-primary-foreground -mt-4 safe-top">
        <div className="size-14 rounded-full bg-primary-foreground/15 grid place-items-center mt-4"><Check className="size-7" strokeWidth={3} /></div>
        <p className="text-sm font-bold opacity-80 mt-5">Delprov 1 · Säkerhet och beteende</p>
        <h1 className="text-[44px] font-extrabold tracking-tight leading-none mt-1">Godkänt</h1>
        <p className="text-6xl font-extrabold tabular-nums mt-6">{result.score}<span className="text-3xl opacity-70"> / {result.total}</span></p>
        <div className="relative mt-5">
          <ProgressBar value={pct} tone="light" className="h-3" />
          <span className="absolute -top-1 h-5 w-0.5 bg-primary-foreground" style={{ left: `${limitPct}%` }} />
        </div>
        <p className="text-sm font-semibold opacity-80 mt-2">Godkäntgräns {result.limit}</p>
      </div>

      <SectionTitle>Per ämne</SectionTitle>
      <Card className="space-y-4">
        {result.subjects.map((s) => {
          const v = (s.score / s.total) * 100;
          return (
            <div key={s.name}>
              <div className="flex justify-between text-[15px] font-bold mb-1.5"><span>{s.name}</span><span className="tabular-nums">{s.score} / {s.total}</span></div>
              <ProgressBar value={v} tone={v < 70 ? "warning" : "primary"} className="h-1.5" />
            </div>
          );
        })}
      </Card>
      <div className="space-y-3 mt-6">
        <PrimaryButton to="/prov/fraga">Granska fel</PrimaryButton>
        <SecondaryButton to="/prov/fraga">Gör nytt prov</SecondaryButton>
        <Link to="/prov" className="block text-center font-bold text-primary py-3">Tillbaka till Prov</Link>
      </div>
    </AppScreen>
  );
}
