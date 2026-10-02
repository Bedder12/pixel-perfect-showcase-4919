import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type AnswerState = "default" | "selected" | "correct" | "incorrect" | "disabled";

export function AnswerOption({ letter, text, state = "default", onClick }: { letter: string; text: string; state?: AnswerState; onClick?: () => void }) {
  const s = {
    default: "bg-card border hover:border-primary/40",
    selected: "bg-primary-soft border-2 border-primary",
    correct: "bg-primary-soft border-2 border-success",
    incorrect: "bg-destructive-soft border-2 border-destructive",
    disabled: "bg-card border opacity-45",
  }[state];
  const badge = {
    default: "bg-muted text-foreground",
    selected: "bg-primary text-primary-foreground",
    correct: "bg-success text-primary-foreground",
    incorrect: "bg-destructive text-destructive-foreground",
    disabled: "bg-muted text-muted-foreground",
  }[state];
  return (
    <button onClick={onClick} disabled={state === "disabled"} className={cn("pressable w-full flex items-center gap-4 text-left rounded-2xl p-4 min-h-[68px]", s)}>
      <span className={cn("size-9 shrink-0 rounded-xl grid place-items-center font-extrabold", badge)}>
        {state === "correct" ? <Check className="size-5" strokeWidth={3} /> : state === "incorrect" ? <X className="size-5" strokeWidth={3} /> : letter}
      </span>
      <span className="text-[15px] font-semibold leading-snug">{text}</span>
    </button>
  );
}
