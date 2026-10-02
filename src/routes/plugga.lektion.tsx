import { createFileRoute } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { AppScreen, ExampleBlock, IconButton, InfoBlock, PrimaryButton, ProgressBar, WarningBlock } from "@/components/ui/kit";
import { NightRoadScene } from "@/components/illustrations";
import { meta } from "@/lib/meta";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/plugga/lektion")({
  head: () => meta("Mörkerkörning", "Så kör du säkert som taxiförare när det är mörkt."),
  component: Lesson,
});

function Lesson() {
  return (
    <AppScreen nav={false} footer={<PrimaryButton to="/plugga/amne">Fortsätt</PrimaryButton>}>
      <div className="flex items-center gap-3 pt-4 pb-4">
        <IconButton to="/plugga/amne" label="Tillbaka"><ChevronLeft className="size-5" /></IconButton>
        <div className="flex-1">
          <p className="text-sm font-bold text-muted-foreground">Säkerhet · Moment 4</p>
          <ProgressBar value={68} className="mt-1.5 h-1.5" />
        </div>
        <IconButton label="Spara"><Bookmark className="size-5" /></IconButton>
      </div>

      <article className="pt-4">
        <h1 className="text-[34px] font-extrabold tracking-tight leading-tight">Mörkerkörning</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mt-3">
          I mörker ser du mindre, senare och sämre. Som taxiförare kör du ofta sent – och ansvarar för fler än dig själv.
        </p>
        <NightRoadScene className="w-full h-auto my-7" />
        <div className="text-[17px] leading-[1.7] space-y-4">
          <p>Med halvljus ser du ungefär 50–100 meter framåt. Oskyddade trafikanter utan reflex syns ofta först på 25–30 meters avstånd.</p>
          <p>Anpassa hastigheten så att du hinner stanna inom den sträcka du kan överblicka.</p>
          <ul className="space-y-2 pl-1">
            {["Håll rutor och strålkastare rena", "Blända av i god tid vid möte", "Titta mot högra vägkanten när du blir bländad"].map((t) => (
              <li key={t} className="flex gap-3"><span className="mt-2.5 size-1.5 rounded-full bg-primary shrink-0" />{t}</li>
            ))}
          </ul>
        </div>
        <InfoBlock title="Bra att veta">Ögonen behöver flera minuter för att vänja sig vid mörker efter ett starkt upplyst område.</InfoBlock>
        <ExampleBlock title="Exempel">Du lämnar en kund vid en belyst entré och kör ut på en mörk väg. Sänk farten de första minuterna.</ExampleBlock>
        <WarningBlock title="Se upp">Trötthet förstärker effekten av mörker. Ta paus om du märker att koncentrationen sviktar.</WarningBlock>
      </article>
    </AppScreen>
  );
}
