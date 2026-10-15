import { cn } from "@/lib/cn";

type PlaceholderProps = {
  /** Visible label, e.g. "Portrait". */
  label: string;
  /** Describes the photo that belongs here — used as the accessible name. */
  description: string;
  ratio?: "portrait" | "landscape" | "square";
  /** Hide the visible description (it stays in the accessible name) for small tiles. */
  compact?: boolean;
  className?: string;
};

/** Stand-in for photography we don't have yet. Labeled so nobody mistakes it for final art. */
export function Placeholder({ label, description, ratio = "portrait", compact = false, className }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${description}`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-stone-100 p-6 text-center ring-1 ring-inset ring-stone-300",
        ratio === "portrait" && "aspect-[4/5]",
        ratio === "landscape" && "aspect-[3/2]",
        ratio === "square" && "aspect-square",
        className,
      )}
    >
      <svg aria-hidden viewBox="0 0 48 48" className="size-10 fill-none stroke-warmgray-500" strokeWidth="1">
        <circle cx="24" cy="24" r="22" />
        <path d="M10 33c4-5 8-7 14-7s10 2 14 7M24 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      </svg>
      <span className="eyebrow text-slate-600">{label}</span>
      {!compact && <span className="max-w-[16rem] text-small text-warmgray-700">{description}</span>}
    </div>
  );
}
