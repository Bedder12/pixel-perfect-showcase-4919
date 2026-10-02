import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { AppHeader, AppScreen, Card, SearchField } from "@/components/ui/kit";
import { Art } from "@/components/illustrations";
import { chapters } from "@/mock/data";
import { cn } from "@/lib/utils";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/teoribok")({
  head: () => meta("Teoriboken", "Bläddra och sök i all teori för taxiförare."),
  component: Book,
});

const filters = ["Alla", "Delprov 1", "Delprov 2", "Sparade"];

function Book() {
  return (
    <AppScreen>
      <AppHeader title="Teoriboken" subtitle="Referensbibliotek" />
      <SearchField placeholder="Sök i teorin" />
      <div className="flex gap-2 mt-4 overflow-x-auto -mx-5 px-5">
        {filters.map((f, i) => (
          <button key={f} className={cn("pressable h-10 px-4 rounded-full text-sm font-bold whitespace-nowrap", i === 0 ? "bg-ink text-ink-foreground" : "bg-card border")}>{f}</button>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {chapters.map((c, i) => (
          <Card key={c.name} to="/plugga/lektion" className="p-3 flex items-center gap-4">
            <Art name={c.art} className="w-24 h-auto shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-muted-foreground">Kapitel {i + 1}</p>
              <p className="text-lg font-extrabold leading-tight">{c.name}</p>
              <p className="text-sm text-muted-foreground line-clamp-1">{c.summary}</p>
              <p className="text-xs font-bold mt-1.5"><span className="text-muted-foreground">{c.moments} moment</span> · <span className="text-primary">{c.progress}% läst</span></p>
            </div>
            <ChevronRight className="size-5 text-muted-foreground mr-1" />
          </Card>
        ))}
      </div>
    </AppScreen>
  );
}
