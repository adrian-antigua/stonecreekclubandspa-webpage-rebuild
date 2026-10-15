"use client";

import { useId, useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { useToast } from "./Toast";

export const DEMO_MESSAGE = "Demo mode: this form isn't connected yet.";

type BaseField = { name: string; label: string; required?: boolean; half?: boolean };

export type FormField =
  | (BaseField & { type: "text" | "email" | "tel"; autoComplete?: string })
  | (BaseField & { type: "textarea"; rows?: number })
  | (BaseField & { type: "select"; options: string[] });

type DemoFormProps = {
  fields: FormField[];
  submitLabel: string;
  /** Names the form for assistive tech. */
  title: string;
  className?: string;
};

const inputClass =
  "w-full rounded-[2px] border border-stone-300 bg-stone-50 px-4 py-3 text-body text-slate-950 transition-colors placeholder:text-warmgray-500 hover:border-warmgray-500 focus-visible:border-sky-700 aria-[invalid=true]:border-error";

export function DemoForm({ fields, submitLabel, title, className }: DemoFormProps) {
  const { showToast } = useToast();
  const formId = useId();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors: Record<string, string> = {};
    for (const field of fields) {
      const el = form.elements.namedItem(field.name) as HTMLInputElement | null;
      if (!el) continue;
      if (field.required && !el.value.trim()) nextErrors[field.name] = `${field.label} is required.`;
      else if (field.type === "email" && el.value && !el.validity.valid) nextErrors[field.name] = "Enter a valid email address.";
    }
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      await fetch("/api/demo", { method: "POST", body: new FormData(form) });
    } finally {
      setSubmitting(false);
      showToast(DEMO_MESSAGE);
    }
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-label={title} className={cn("grid gap-6 sm:grid-cols-2", className)}>
      {fields.map((field) => {
        const id = `${formId}-${field.name}`;
        const errorId = `${id}-error`;
        const error = errors[field.name];
        const shared = {
          id,
          name: field.name,
          required: field.required,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? errorId : undefined,
        };
        return (
          <div key={field.name} className={cn("flex flex-col gap-2", !field.half && "sm:col-span-2")}>
            <label htmlFor={id} className="eyebrow text-slate-600">
              {field.label}
              {field.required && (
                <span aria-hidden className="text-sky-700">
                  {" "}*
                </span>
              )}
            </label>
            {field.type === "textarea" ? (
              <textarea {...shared} rows={field.rows ?? 4} className={inputClass} />
            ) : field.type === "select" ? (
              <select {...shared} defaultValue="" className={cn(inputClass, "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10")} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%231f2c36' stroke-width='1.5'/%3E%3C/svg%3E\")" }}>
                <option value="" disabled>
                  Select one
                </option>
                {field.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input {...shared} type={field.type} autoComplete={field.autoComplete} className={inputClass} />
            )}
            {error && (
              <p id={errorId} className="text-small text-error">
                {error}
              </p>
            )}
          </div>
        );
      })}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-warmgray-700">Demo site — submissions aren’t sent anywhere.</p>
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}
