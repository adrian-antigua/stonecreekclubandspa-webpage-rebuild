/**
 * Local stub for every DemoForm. Nothing is stored or sent anywhere —
 * this proof of concept has no form backend.
 */
export async function POST() {
  return Response.json({ ok: true, demo: true });
}
