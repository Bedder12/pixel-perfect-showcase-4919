import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  Home, BookOpenCheck, ClipboardCheck, Library, User, ChevronLeft, Search, Check,
  Info, AlertTriangle, Lightbulb, Timer, ChevronRight,
} from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

/* ---------- Layout ---------- */
export function AppScreen({ children, nav = true, footer }: { children: ReactNode; nav?: boolean; footer?: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex justify-center sm:py-8">
      <div className="relative w-full max-w-[440px] min-h-screen sm:min-h-[860px] sm:rounded-[44px] sm:shadow-float sm:border bg-background overflow-hidden flex flex-col">
        <main className={cn("flex-1 px-5 safe-top", nav ? "pb-32" : footer ? "pb-36" : "pb-10")}>{children}</main>
        {footer && (
          <div className="absolute inset-x-0 bottom-0 px-5 pt-4 safe-bottom bg-gradient-to-t from-background via-background to-transparent">
            {footer}
          </div>
        )}
        {nav && <BottomNavigation />}
      </div>
    </div>
  );
}

export function AppHeader({ title, subtitle, back, right }: { title?: string; subtitle?: string; back?: string; right?: ReactNode }) {
  return (
    <header className="pt-4 pb-6">
      {(back || right) && (
        <div className="flex items-center justify-between mb-5">
          {back ? <IconButton to={back} label="Tillbaka"><ChevronLeft className="size-5" /></IconButton> : <span />}
          {right}
        </div>
      )}
      {subtitle && <p className="text-sm font-semibold text-muted-foreground mb-1">{subtitle}</p>}
      {title && <h1 className="text-[32px] leading-[1.1] font-extrabold tracking-tight">{title}</h1>}
    </header>
  );
}

const tabs = [
  { to: "/", label: "Hem", icon: Home },
  { to: "/plugga", label: "Plugga", icon: BookOpenCheck },
  { to: "/prov", label: "Prov", icon: ClipboardCheck },
  { to: "/teoribok", label: "Teoribok", icon: Library },
  { to: "/profil", label: "Profil", icon: User },
] as const;

export function BottomNavigation() {
  const { pathname } = useLocation();
  return (
    <nav className="absolute inset-x-0 bottom-0 px-4 safe-bottom">
      <div className="flex items-center justify-between rounded-[28px] bg-card border shadow-float p-1.5">
        {tabs.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link key={to} to={to} className={cn(
              "pressable flex-1 flex flex-col items-center gap-1 py-2 rounded-[22px] text-[11px] font-bold",
              active ? "bg-primary-soft text-primary-deep" : "text-muted-foreground hover:text-foreground",
            )}>
              <Icon className="size-[22px]" strokeWidth={active ? 2.3 : 1.8} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/* ---------- Buttons ---------- */
type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { to?: string; full?: boolean };
function BtnBase({ to, className, children, ...rest }: BtnProps) {
  if (to) return <Link to={to} className={className}>{children}</Link>;
  return <button className={className} {...rest}>{children}</button>;
}
export function PrimaryButton({ full = true, className, ...p }: BtnProps) {
  return <BtnBase {...p} className={cn("pressable inline-flex items-center justify-center gap-2 h-14 px-6 rounded-2xl bg-primary text-primary-foreground text-base font-bold hover:bg-primary-deep disabled:opacity-40", full && "w-full", className)} />;
}
export function SecondaryButton({ full = true, className, ...p }: BtnProps) {
  return <BtnBase {...p} className={cn("pressable inline-flex items-center justify-center gap-2 h-14 px-6 rounded-2xl bg-card border text-foreground text-base font-bold hover:border-primary/40", full && "w-full", className)} />;
}
export function IconButton({ to, label, children }: { to?: string; label: string; children: ReactNode }) {
  return <BtnBase to={to} aria-label={label} className="pressable size-11 grid place-items-center rounded-full bg-card border hover:bg-muted">{children}</BtnBase>;
}

/* ---------- Content ---------- */
export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-end justify-between mt-9 mb-4">
      <h2 className="text-xl font-extrabold tracking-tight">{children}</h2>
      {action && <span className="text-sm font-bold text-primary">{action}</span>}
    </div>
  );
}
export function Card({ className, children, to }: { className?: string; children: ReactNode; to?: string }) {
  const cls = cn("block rounded-3xl bg-card border shadow-card p-5", to && "pressable hover:border-primary/30", className);
  return to ? <Link to={to} className={cls}>{children}</Link> : <div className={cls}>{children}</div>;
}

export function ProgressBar({ value, tone = "primary", className }: { value: number; tone?: "primary" | "light" | "warning" | "destructive"; className?: string }) {
  const fill = { primary: "bg-primary", light: "bg-primary-foreground", warning: "bg-warning", destructive: "bg-destructive" }[tone];
  const track = tone === "light" ? "bg-primary-foreground/20" : "bg-muted";
  return (
    <div className={cn("h-2 w-full rounded-full overflow-hidden", track, className)}>
      <div className={cn("h-full rounded-full transition-all", fill)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function ProgressRing({ value, size = 56, stroke = 6, label = true, className }: { value: number; size?: number; stroke?: number; label?: boolean; className?: string }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return (
    <div className={cn("relative shrink-0", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--muted)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--primary)" strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} />
      </svg>
      {label && <span className="absolute inset-0 grid place-items-center text-sm font-extrabold">{value}%</span>}
    </div>
  );
}

export function StatusBadge({ tone = "primary", children }: { tone?: "primary" | "warning" | "destructive" | "neutral" | "ink"; children: ReactNode }) {
  const t = {
    primary: "bg-primary-soft text-primary-deep",
    warning: "bg-warning-soft text-foreground",
    destructive: "bg-destructive-soft text-destructive",
    neutral: "bg-muted text-muted-foreground",
    ink: "bg-ink-foreground/10 text-ink-foreground",
  }[tone];
  return <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold", t)}>{children}</span>;
}

export function SearchField({ placeholder }: { placeholder: string }) {
  return (
    <label className="flex items-center gap-3 h-14 px-4 rounded-2xl bg-card border focus-within:border-primary">
      <Search className="size-5 text-muted-foreground" />
      <input placeholder={placeholder} className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground" />
    </label>
  );
}

function Block({ icon, title, children, cls }: { icon: ReactNode; title: string; children: ReactNode; cls: string }) {
  return (
    <div className={cn("rounded-2xl p-4 my-5 flex gap-3", cls)}>
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div><p className="font-extrabold mb-1">{title}</p><div className="text-[15px] leading-relaxed">{children}</div></div>
    </div>
  );
}
export const InfoBlock = (p: { title: string; children: ReactNode }) => <Block {...p} cls="bg-primary-soft text-primary-deep" icon={<Info className="size-5" />} />;
export const ExampleBlock = (p: { title: string; children: ReactNode }) => <Block {...p} cls="bg-card border" icon={<Lightbulb className="size-5 text-warning" />} />;
export const WarningBlock = (p: { title: string; children: ReactNode }) => <Block {...p} cls="bg-warning-soft" icon={<AlertTriangle className="size-5 text-warning" />} />;

export function TimerPill({ time }: { time: string }) {
  return <span className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-ink text-ink-foreground text-sm font-bold tabular-nums"><Timer className="size-4" />{time}</span>;
}

export function StateIcon({ state }: { state: "done" | "current" | "upcoming" }) {
  if (state === "done") return <span className="size-8 rounded-full bg-primary text-primary-foreground grid place-items-center"><Check className="size-4" strokeWidth={3} /></span>;
  if (state === "current") return <span className="size-8 rounded-full bg-primary-soft ring-2 ring-primary grid place-items-center"><ChevronRight className="size-4 text-primary" strokeWidth={3} /></span>;
  return <span className="size-8 rounded-full border-2 border-dashed border-border" />;
}
