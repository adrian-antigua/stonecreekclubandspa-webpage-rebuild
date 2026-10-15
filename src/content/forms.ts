import type { FormField } from "@/components/ui/DemoForm";
import { referralSources, visitInterests } from "./site";

/** Field labels match the live "Request More Information About Memberships" form. */
export const visitFormFields: FormField[] = [
  { type: "text", name: "firstName", label: "First Name", required: true, half: true, autoComplete: "given-name" },
  { type: "text", name: "lastName", label: "Last Name", required: true, half: true, autoComplete: "family-name" },
  { type: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
  { type: "tel", name: "phone", label: "Phone number", required: true, half: true, autoComplete: "tel" },
  { type: "select", name: "interest", label: "Let Us Know Your Interests!", options: visitInterests, half: true },
  { type: "select", name: "referral", label: "How'd You Hear About Us?", options: referralSources, half: true },
];
