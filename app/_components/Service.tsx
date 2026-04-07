import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
} from "@/components/ui";

export const SERVICES: {
  name: string;
  description: string;
  image?: string;
}[] = [
  { name: "🔧 Phone Repair", description: "Cracked screen? We fix it fast." },
  { name: "🔓 Phone Unlocking", description: "Switch carriers easily" },
  {
    name: "🔊 Car Audio Installation",
    description: "Get your system installed professionally",
  },
  {
    name: "⚙️ Setup & Support",
    description: "Get your system installed professionally",
  },
];

export default function Service() {
  return (
    <section className="bg-white py-16">
      <Container>
        <header className="max-w-2xl">
          <h2 className="text-3xl text-neutral-900 font-bold">
            We Don’t Just Sell — We Help
          </h2>
          <p className="mt-2 text-neutral-700">
            Fast solutions when you need them most.
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, idx) => (
            <Card key={idx}>
              <CardHeader>{s.name}</CardHeader>
              <CardContent>{s.description}</CardContent>
            </Card>
          ))}
        </div>

        <a href="tel:+1">
          <Button variant="primary" className="mt-8">
            📞 Call Now for Fast Service
          </Button>
        </a>
      </Container>
    </section>
  );
}
