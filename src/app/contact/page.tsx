import type { Metadata } from "next";
import { DemoForm, type FormField } from "@/components/ui/DemoForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HoursTable } from "@/components/ui/HoursTable";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { visitFormFields } from "@/content/forms";
import { directionsUrl, fullAddress, hours, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Stone Creek Club & Spa at 1201 Ochsner Blvd, Covington, LA 70433. Phone numbers, hours and directions for the club, spa, Pebble Creek and café.",
};

const directory = [
  { label: "Main / Front Desk", display: site.phones.main.display, tel: site.phones.main.tel },
  { label: "Membership", display: site.phones.membership.display, tel: site.phones.membership.tel },
  { label: "Childcare Director", display: site.phones.childcare.display, tel: site.phones.childcare.tel },
  { label: "Pebble Creek Reservations", display: "985.801.7130", tel: "+19858017130" },
  { label: "The Spa", display: site.phones.spa.display, tel: site.phones.spa.tel },
  { label: "Café To-Go Orders", display: site.phones.cafe.display, tel: site.phones.cafe.tel },
  { label: "Catering", display: "985.801.7105", tel: "+19858017105" },
  { label: "The Movement Science Center", display: "985.801.7145", tel: "+19858017145" },
];

const contactFields: FormField[] = [
  { type: "text", name: "name", label: "Name", required: true, half: true, autoComplete: "name" },
  { type: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
  { type: "tel", name: "phone", label: "Phone number", half: true, autoComplete: "tel" },
  {
    type: "select",
    name: "topic",
    label: "Topic",
    options: ["Membership", "Tennis & Pickleball", "Fitness", "The Spa", "Kids & Pebble Creek", "The Café & Catering", "Facility Rentals", "Other"],
    half: true,
  },
  { type: "textarea", name: "message", label: "Message", required: true, rows: 5 },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-stone-50 pb-16 pt-16 md:pb-24 md:pt-28">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:col-span-7">
            <Eyebrow rule>Contact</Eyebrow>
            <h1 className="font-display text-display-lg font-light uppercase tracking-[0.04em]">Contact Us</h1>
            <p className="font-display text-h3 font-light italic text-warmgray-700">
              Stop by for a tour and receive a complimentary guest pass.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9 lg:self-end">
            <address className="flex flex-col gap-1 text-body-lg not-italic text-slate-950">
              <span>{site.address.street}</span>
              <span>
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </address>
            <p className="flex flex-col gap-2 text-body">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="w-fit text-sky-700 underline underline-offset-4 hover:text-slate-950">
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={`mailto:${site.email}`} className="w-fit text-sky-700 underline underline-offset-4 hover:text-slate-950">
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section aria-label={`Map of ${fullAddress}`} className="bg-stone-50">
        <div className="container-site">
          <MapEmbed className="aspect-[4/3] md:aspect-[21/9]" />
        </div>
      </section>

      {/* Directory */}
      <section className="section bg-stone-50" aria-labelledby="directory-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Call Us" title={<span id="directory-title">Phone Directory</span>} />
          </div>
          <ul className="grid border-t border-slate-950 sm:grid-cols-2 sm:gap-x-10 lg:col-span-8">
            {directory.map((d) => (
              <li key={d.label} className="flex items-baseline justify-between gap-4 border-b border-stone-300 py-4">
                <span className="text-body text-slate-950">{d.label}</span>
                <a href={`tel:${d.tel}`} className="shrink-0 font-display text-[1.375rem] tabular-nums text-sky-700 hover:text-slate-950">
                  {d.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hours */}
      <section className="section bg-stone-100" aria-labelledby="contact-hours-title">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading eyebrow="Hours" title={<span id="contact-hours-title">When We’re Open</span>} />
          <HoursTable schedules={hours} />
          <p className="text-small text-warmgray-700">
            Closed Easter Sunday and Christmas Day; modified holiday hours are posted at least two weeks in advance.
          </p>
        </div>
      </section>

      {/* Forms */}
      <section className="section bg-stone-50" aria-label="Contact forms">
        <div className="container-site grid gap-20 lg:grid-cols-2 lg:gap-16">
          <div id="message" className="flex scroll-mt-28 flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Eyebrow rule>Send a Message</Eyebrow>
              <h2 className="font-display text-h2">General Inquiries</h2>
            </div>
            <DemoForm title="General inquiry" fields={contactFields} submitLabel="Send Message" />
          </div>
          <div id="visit" className="flex scroll-mt-28 flex-col gap-10 lg:border-l lg:border-stone-300 lg:pl-16">
            <div className="flex flex-col gap-6">
              <Eyebrow rule>Schedule a Visit</Eyebrow>
              <h2 className="font-display text-h2">Tour the Club</h2>
              <p className="text-body text-warmgray-700">
                Meet with our Member Services team to have all your questions answered — or call{" "}
                <a href={`tel:${site.phones.membership.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
                  {site.phones.membership.display}
                </a>
                .
              </p>
            </div>
            <DemoForm title="Schedule a visit" fields={visitFormFields} submitLabel="Request a Tour" />
          </div>
        </div>
      </section>
    </>
  );
}
