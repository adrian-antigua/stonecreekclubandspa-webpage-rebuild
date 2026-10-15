import { cn } from "@/lib/cn";

type RateTableProps = {
  caption: string;
  /** Column headings after the first (e.g. ["Member", "Non-member"]). */
  columns: string[];
  rows: { label: string; values: (string | undefined)[] }[];
  tone?: "light" | "dark";
  className?: string;
};

/** Compact label → price table for brochure rates. */
export function RateTable({ caption, columns, rows, tone = "light", className }: RateTableProps) {
  const dark = tone === "dark";
  return (
    <table className={cn("w-full border-collapse text-left", className)}>
      <caption className={cn("eyebrow mb-3 text-left", dark ? "text-sky-300" : "text-slate-600")}>{caption}</caption>
      <thead>
        <tr className={cn("border-b", dark ? "border-stone-100" : "border-slate-950")}>
          <td className="py-2" />
          {columns.map((c) => (
            <th
              key={c}
              scope="col"
              className={cn("py-2 pl-4 text-right text-small font-medium", dark ? "text-stone-100" : "text-slate-600")}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className={cn("border-b text-small sm:text-body", dark ? "border-slate-800" : "border-stone-300")}>
            <th scope="row" className={cn("py-3 pr-4 font-normal", dark ? "text-stone-50" : "text-slate-950")}>
              {row.label}
            </th>
            {row.values.map((v, i) => (
              <td
                key={columns[i]}
                className={cn("whitespace-nowrap py-3 pl-4 text-right tabular-nums", dark ? "text-stone-100" : "text-warmgray-700")}
              >
                {v ?? "—"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
