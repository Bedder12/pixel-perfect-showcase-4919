import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, ChevronRight, Settings, UserRound, Flame } from "lucide-react";
import { AppScreen, Card, ProgressRing, SectionTitle, StatusBadge } from "@/components/ui/kit";
import { history, parts } from "@/mock/data";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/profil")({
  head: () => meta("Profil", "Din progress, sparat innehåll och provhistorik."),
  component: Profile,
});

function Row({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <button className="pressable w-full flex items-center gap-4 py-3 text-left">
      <span className="size-11 rounded-2xl bg-primary-soft text-primary-deep grid place-items-center">{icon}</span>
      <span className="flex-1"><span className="block font-bold">{title}</span><span className="block text-sm text-muted-foreground">{sub}</span></span>
      <ChevronRight className="size-5 text-muted-foreground" />
    </button>
  );
}

function Profile() {
  return (
    <AppScreen>
      <div className="pt-6 flex flex-col items-center text-center">
        <div className="size-24 rounded-full bg-ink text-ink-foreground grid place-items-center text-3xl font-extrabold">BM</div>
        <h1 className="text-2xl font-extrabold mt-4">Bedder M.</h1>
        <div className="mt-2"><StatusBadge><Flame className="size-3.5" />6 dagar i rad</StatusBadge></div>
      </div>

      <SectionTitle>Progress</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {parts.map((p) => (
          <Card key={p.id} className="flex flex-col items-center text-center p-5">
            <ProgressRing value={p.progress} size={72} stroke={7} />
            <p className="font-extrabold mt-3">{p.title}</p>
            <p className="text-xs text-muted-foreground font-semibold">{p.subtitle}</p>
          </Card>
        ))}
      </div>

      <SectionTitle>Provhistorik</SectionTitle>
      <Card className="divide-y py-1">
        {history.map((h) => (
          <div key={h.date} className="flex items-center justify-between py-4">
            <div><p className="font-bold">{h.title}</p><p className="text-sm text-muted-foreground">{h.date}</p></div>
            <div className="text-right"><p className="font-extrabold tabular-nums">{h.score}</p>
              <StatusBadge tone={h.passed ? "primary" : "destructive"}>{h.passed ? "Godkänt" : "Ej godkänt"}</StatusBadge></div>
          </div>
        ))}
      </Card>

      <Card className="mt-6 py-2 divide-y">
        <Row icon={<Bookmark className="size-5" />} title="Sparat" sub="12 moment och frågor" />
        <Row icon={<Settings className="size-5" />} title="Inställningar" sub="Notiser, textstorlek" />
        <Row icon={<UserRound className="size-5" />} title="Konto" sub="E-post och prenumeration" />
      </Card>
    </AppScreen>
  );
}
