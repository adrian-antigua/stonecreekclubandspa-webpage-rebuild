import type { HoursSchedule } from "@/content/site";
import { cn } from "@/lib/cn";

type HoursTableProps = {
  schedules: HoursSchedule[];
  variant?: "full" | "condensed";
  tone?: "light" | "dark";
  /** Columns for the full variant at md and up. */
  columns?: 1 | 2;
  className?: string;
};

export function HoursTable({ schedules, variant = "full", tone = "light", columns = 2, className }: HoursTableProps) {
  const dark = tone === "dark";

  if (variant === "condensed") {
    return (
      <dl className={cn("flex flex-col gap-4 text-small", className)}>
        {schedules.map((s) => (
          <div key={s.id}>
            <dt className={cn("eyebrow", dark ? "text-sky-300" : "text-slate-600")}>{s.venue}</dt>
            <dd className={cn("mt-1", dark ? "text-stone-100" : "text-warmgray-700")}>{s.condensed}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <div className={cn("grid gap-12", columns === 2 && "md:grid-cols-2 md:gap-x-16", className)}>
      {schedules.map((s) => (
        <table key={s.id} className="w-full self-start border-collapse text-left">
          <caption
            className={cn(
              "mb-4 border-b pb-4 text-left font-display text-h3 font-medium",
              dark ? "border-slate-800 text-stone-50" : "border-stone-300 text-slate-950",
            )}
          >
            {s.venue}
          </caption>
          <tbody>
            {s.rows.map((row) => (
              <tr key={row.days} className={cn("border-b text-small sm:text-body", dark ? "border-slate-800" : "border-stone-300")}>
                <th scope="row" className={cn("whitespace-nowrap py-3 pr-4 align-top font-medium", dark ? "text-stone-50" : "text-slate-950")}>
                  {row.days}
                </th>
                <td className={cn("py-3 text-right align-top tabular-nums", dark ? "text-stone-100" : "text-warmgray-700")}>
                  {/* "Counter … · Kitchen …" splits onto separate lines; ranges never break mid-time. */}
                  {row.hours.split(" · ").map((part) => (
                    <span key={part} className="block whitespace-nowrap">
                      {part}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
