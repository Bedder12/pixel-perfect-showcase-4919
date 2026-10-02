import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NodeState } from "@/mock/data";

const W = 400, STEP = 132, TOP = 70;
const xs = [0.3, 0.68, 0.36, 0.7];

export function LearningPath({ nodes }: { nodes: { name: string; state: NodeState; progress: number }[] }) {
  const pts = nodes.map((_, i) => ({ x: xs[i % xs.length]! * W, y: TOP + i * STEP }));
  const d = pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = pts[i - 1]!, my = (prev.y + p.y) / 2;
    return `${acc} C ${prev.x} ${my}, ${p.x} ${my}, ${p.x} ${p.y}`;
  }, "");
  const doneIdx = nodes.findIndex((n) => n.state === "current");
  const doneLen = doneIdx > 0 ? pts.slice(0, doneIdx + 1) : [];
  const dDone = doneLen.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = doneLen[i - 1]!, my = (prev.y + p.y) / 2;
    return `${acc} C ${prev.x} ${my}, ${p.x} ${my}, ${p.x} ${p.y}`;
  }, "");
  const H = TOP + (nodes.length - 1) * STEP + 90;

  return (
    <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full" aria-hidden>
        <path d={d} fill="none" stroke="var(--border)" strokeWidth="10" strokeLinecap="round" strokeDasharray="1 18" />
        <path d={dDone} fill="none" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" opacity=".35" />
      </svg>
      {nodes.map((n, i) => (
        <LearningPathNode key={n.name} {...n} left={(pts[i]!.x / W) * 100} top={(pts[i]!.y / H) * 100} labelSide={pts[i]!.x / W < 0.5 ? "right" : "left"} />
      ))}
    </div>
  );
}

export function LearningPathNode({ name, state, progress, left, top, labelSide }: { name: string; state: NodeState; progress: number; left: number; top: number; labelSide: "left" | "right" }) {
  const size = state === "current" ? 84 : 64;
  return (
    <Link to="/plugga/amne" className="group absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${left}%`, top: `${top}%` }}>
      <div className="relative" style={{ width: size, height: size }}>
        {state === "current" && <span className="absolute -inset-2.5 rounded-full border-2 border-primary/30 bg-primary-soft" />}
        <span className={cn(
          "pressable relative grid place-items-center rounded-full w-full h-full font-extrabold text-lg group-hover:scale-105",
          state === "done" && "bg-primary text-primary-foreground shadow-card",
          state === "current" && "bg-primary text-primary-foreground shadow-float",
          state === "upcoming" && "bg-card border-2 text-foreground shadow-card",
        )}>
          {state === "done" ? <Check className="size-7" strokeWidth={3} /> : state === "current" ? `${progress}%` : name.slice(0, 1)}
        </span>
        {state === "current" && (
          <span className="absolute left-1/2 -translate-x-1/2 -top-11 whitespace-nowrap rounded-full bg-ink text-ink-foreground text-xs font-bold px-3 py-1.5">Fortsätt här</span>
        )}
      </div>
      <div className={cn("absolute top-1/2 -translate-y-1/2 w-36", labelSide === "right" ? "left-full ml-4 text-left" : "right-full mr-4 text-right")}>
        <p className={cn("font-extrabold leading-tight", state === "current" ? "text-base" : "text-[15px]")}>{name}</p>
        <p className="text-xs font-semibold text-muted-foreground mt-0.5">{state === "done" ? "Klar" : state === "current" ? "Pågår" : progress ? `${progress}% påbörjad` : "Inte påbörjad"}</p>
      </div>
    </Link>
  );
}
