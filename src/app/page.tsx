import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Placeholder until the Home page is built.
export default function Home() {
  return (
    <section className="section-lg">
      <div className="container-site flex flex-col gap-10">
        <SectionHeading
          as="h1"
          eyebrow="The Northshore Sports Resort"
          title="Welcome to Your Everyday Getaway"
          intro="The home page is next. In the meantime, the design system lives in the styleguide."
        />
        <div>
          <Button href="/styleguide" variant="outline">
            View the styleguide
          </Button>
        </div>
      </div>
    </section>
  );
}
