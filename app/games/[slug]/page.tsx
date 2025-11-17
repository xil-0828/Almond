import { games } from "@/app/data/games";
import { notFound } from "next/navigation";

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games[params.slug as keyof typeof games];
  if (!game) return notFound();

  return (
    <main style={{ padding: "3rem", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{game.title}</h1>
      <p style={{ color: "#777", marginBottom: "1.5rem" }}>{game.date}</p>
      <p>{game.description}</p>
    </main>
  );
}
