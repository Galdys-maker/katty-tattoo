import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Instagram } from "lucide-react";

export default function KattyTattoo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-wide">Katty Tattoo</h1>
        <p className="mt-2 text-lg italic">Tetování s charakterem</p>
      </header>

      <section className="px-4 py-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-700 rounded-xl"></div>
          ))}
        </div>
      </section>

      <section className="px-4 py-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">Rezervace</h2>
        <p className="mb-4">Pro rezervaci termínu mě kontaktuj přes Instagram nebo přímo do zpráv:</p>
        <a
          href="https://www.instagram.com/katty.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="flex items-center gap-2">
            <Instagram size={18} />
            @katty.tattoo
          </Button>
        </a>
      </section>

      <section className="px-4 py-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-700">O mně</h2>
        <p className="mb-2">
          Ahoj! Jsem Katty, tatérka specializující se na precizní linky, jemné motivy a osobní přístup ke každému designu.
        </p>
        <p>
          Pracuji v ateliéru s důrazem na detail a pohodlí. Věnuji se stylům jako je blackwork, minimalistická kresba i jemná realistika.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Katty Tattoo • Všechna práva vyhrazena
      </footer>
    </div>
  );
}