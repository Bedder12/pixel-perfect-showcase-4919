import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Flag, X } from "lucide-react";
import { AppScreen, IconButton, PrimaryButton, ProgressBar, TimerPill } from "@/components/ui/kit";
import { AnswerOption, type AnswerState } from "@/components/exam/AnswerOption";
import { NightRoadScene } from "@/components/illustrations";
import { question } from "@/mock/data";
import { cn } from "@/lib/utils";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/prov/fraga")({
  head: () => meta("Provfråga", "Fokuserat provläge för taxiteori."),
  component: Question,
});

const previews = ["Svara", "Rätt svar", "Fel svar"] as const;

function Question() {
  const [selected, setSelected] = useState<number | null>(1);
  const [mode, setMode] = useState<(typeof previews)[number]>("Svara");

  const stateFor = (i: number): AnswerState => {
    if (mode === "Svara") return selected === i ? "selected" : "default";
    const pick = mode === "Rätt svar" ? 1 : 2;
    if (i === 1) return "correct";
    if (i === pick) return "incorrect";
    return "disabled";
  };

  return (
    <AppScreen nav={false} footer={<PrimaryButton to="/prov/resultat" disabled={selected === null}>Nästa</PrimaryButton>}>
      <div className="flex items-center gap-3 pt-4">
        <IconButton to="/prov" label="Avsluta"><X className="size-5" /></IconButton>
        <span className="flex-1 text-center font-extrabold tabular-nums">{question.index} <span className="text-muted-foreground">/ {question.total}</span></span>
        <TimerPill time={question.time} />
      </div>
      <ProgressBar value={(question.index / question.total) * 100} className="mt-4" />

      <div className="flex gap-1 p-1 mt-5 rounded-full bg-muted text-xs font-bold">
        {previews.map((p) => (
          <button key={p} onClick={() => setMode(p)} className={cn("flex-1 h-8 rounded-full", mode === p ? "bg-card shadow-card" : "text-muted-foreground")}>{p}</button>
        ))}
      </div>

      <h1 className="text-[24px] font-extrabold leading-snug tracking-tight mt-6">{question.prompt}</h1>
      <NightRoadScene className="w-full h-auto my-6" />
      <div className="space-y-3">
        {question.options.map((o, i) => (
          <AnswerOption key={i} letter={"ABCD"[i]} text={o} state={stateFor(i)} onClick={() => mode === "Svara" && setSelected(i)} />
        ))}
      </div>
      <button className="mt-5 mx-auto flex items-center gap-2 text-sm font-bold text-muted-foreground"><Flag className="size-4" />Markera fråga</button>
    </AppScreen>
  );
}
