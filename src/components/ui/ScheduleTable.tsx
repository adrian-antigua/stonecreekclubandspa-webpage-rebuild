"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type ScheduleClass = {
  day: string;
  time: string;
  name: string;
  studio: string;
  minutes: number;
  category: string;
};

type ScheduleTableProps = {
  classes: ScheduleClass[];
  days: string[];
  categories: string[];
};

const ALL = "All classes";

/** Day tabs + category filter over a static class list. */
export function ScheduleTable({ classes, days, categories }: ScheduleTableProps) {
  const [day, setDay] = useState(days[0]);
  const [category, setCategory] = useState(ALL);
  const selectId = useId();

  const rows = classes.filter((c) => c.day === day && (category === ALL || c.category === category));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div role="group" aria-label="Day" className="grid grid-cols-7 gap-1 md:flex md:flex-wrap md:gap-2">
          {days.map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={d === day}
              onClick={() => setDay(d)}
              className={cn(
                "eyebrow border px-0 py-3 tracking-[0.12em] transition-colors md:px-4 md:tracking-[0.22em]",
                d === day
                  ? "border-slate-950 bg-slate-950 text-stone-50"
                  : "border-stone-300 text-slate-600 hover:border-slate-950 hover:text-slate-950",
              )}
            >
              <span className="md:hidden">{d.slice(0, 3)}</span>
              <span className="hidden md:inline">{d}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor={selectId} className="eyebrow shrink-0 text-slate-600">
            Type
          </label>
          <select
            id={selectId}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-[2px] border border-stone-300 bg-stone-50 bg-[length:12px] bg-[right_1rem_center] bg-no-repeat py-3 pl-4 pr-10 text-body text-slate-950 hover:border-warmgray-500 lg:w-56"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%231f2c36' stroke-width='1.5'/%3E%3C/svg%3E\")",
            }}
          >
            {[ALL, ...categories].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          {day} classes{category !== ALL ? ` — ${category}` : ""} (sample schedule)
        </caption>
        <thead>
          <tr className="border-b border-slate-950">
            <th scope="col" className="eyebrow py-3 pr-4 font-medium text-slate-600">
              Time
            </th>
            <th scope="col" className="eyebrow py-3 pr-4 font-medium text-slate-600">
              Class
            </th>
            <th scope="col" className="eyebrow hidden py-3 pr-4 font-medium text-slate-600 md:table-cell">
              Studio
            </th>
            <th scope="col" className="eyebrow py-3 text-right font-medium text-slate-600">
              Length
            </th>
          </tr>
        </thead>
        <tbody aria-live="polite">
          {rows.map((c) => (
            <tr key={`${c.day}-${c.time}-${c.name}`} className="border-b border-stone-300 align-baseline">
              <td className="whitespace-nowrap py-4 pr-4 font-display text-[1.375rem] tabular-nums text-slate-950">{c.time}</td>
              <td className="py-4 pr-4">
                <span className="block font-medium text-slate-950">{c.name}</span>
                <span className="block text-small text-warmgray-700 md:hidden">{c.studio}</span>
                <span className="eyebrow mt-1 block text-slate-600">{c.category}</span>
              </td>
              <td className="hidden py-4 pr-4 text-warmgray-700 md:table-cell">{c.studio}</td>
              <td className="whitespace-nowrap py-4 text-right tabular-nums text-warmgray-700">{c.minutes} min</td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={4} className="py-10 text-center text-warmgray-700">
                No {category.toLowerCase()} classes on {day} in this sample.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
