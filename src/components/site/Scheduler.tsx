import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HORARIOS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const WHATSAPP = "5551996398755";

export function Scheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hora, setHora] = useState<string | null>(null);

  const disabled = !date || !hora;

  const agendar = () => {
    if (!date || !hora) return;
    const dataFmt = format(date, "dd/MM/yyyy (EEEE)", { locale: ptBR });
    const msg = `Olá, Iuri Dall' Olmo! Gostaria de agendar uma sessão de psicanálise. O horário do dia ${dataFmt} às ${hora} estaria disponível?`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <h3 className="text-2xl text-primary">Agende sua sessão</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Escolha a data e o horário desejado — a confirmação é feita pelo WhatsApp.
      </p>

      <div className="mt-5 flex flex-col gap-6 sm:flex-row">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ptBR}
          disabled={{ before: new Date() }}
          className={cn("pointer-events-auto rounded-xl border border-border p-3")}
        />

        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Horários
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {HORARIOS.map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => setHora(h)}
                className={cn(
                  "rounded-lg border border-border px-2 py-2 text-sm transition-colors",
                  hora === h
                    ? "border-primary bg-primary text-primary-foreground"
                    : "bg-background hover:border-primary/50 hover:bg-secondary",
                )}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button
        onClick={agendar}
        disabled={disabled}
        size="lg"
        className="mt-6 w-full rounded-full"
      >
        {disabled
          ? "Selecione data e horário"
          : `Agendar ${date ? format(date, "dd/MM", { locale: ptBR }) : ""} às ${hora}`}
      </Button>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Você será direcionado ao WhatsApp com a mensagem pronta.
      </p>
    </div>
  );
}