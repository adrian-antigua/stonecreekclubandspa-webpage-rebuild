import { fullAddress, site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Google Maps embed of the club (URL from content.md). */
export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden bg-stone-300", className)}>
      <iframe
        src={site.mapsEmbedUrl}
        title={`Map showing Stone Creek Club & Spa at ${fullAddress}`}
        className="absolute inset-0 size-full border-0 grayscale-[35%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
