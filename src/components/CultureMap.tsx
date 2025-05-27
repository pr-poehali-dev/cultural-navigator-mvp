import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CulturePoint {
  id: number;
  name: string;
  description: string;
  image: string;
  location: { x: number; y: number };
  category: "museum" | "theater" | "monument" | "gallery";
}

const culturePoints: CulturePoint[] = [
  {
    id: 1,
    name: "Эрмитаж",
    description:
      "Один из крупнейших и наиболее значительных художественных и культурно-исторических музеев мира.",
    image:
      "https://images.unsplash.com/photo-1564372694889-5002ac2828c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVybWl0YWdlfGVufDB8fDB8fHww",
    location: { x: 45, y: 35 },
    category: "museum",
  },
  {
    id: 2,
    name: "Большой театр",
    description:
      "Один из крупнейших театров оперы и балета России, историческая сцена и символ российской культуры.",
    image:
      "https://images.unsplash.com/photo-1556281167-46e8d9db5af1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9sc2hvaXxlbnwwfHwwfHx8MA%3D%3D",
    location: { x: 65, y: 25 },
    category: "theater",
  },
  {
    id: 3,
    name: "Мамаев курган",
    description:
      "Мемориальный комплекс на месте ожесточённых боёв во время Сталинградской битвы.",
    image:
      "https://images.unsplash.com/photo-1576420252689-53311cad261e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZvbGdvZ3JhZHxlbnwwfHwwfHx8MA%3D%3D",
    location: { x: 20, y: 70 },
    category: "monument",
  },
];

const categoryIcons = {
  museum: "🏛️",
  theater: "🎭",
  monument: "🗿",
  gallery: "🖼️",
};

export function CultureMap() {
  const [selectedPoint, setSelectedPoint] = useState<CulturePoint | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredPoints =
    filter === "all"
      ? culturePoints
      : culturePoints.filter((point) => point.category === filter);

  return (
    <div className="relative">
      <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
        <button
          className={`px-3 py-1 rounded-full ${filter === "all" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`px-3 py-1 rounded-full flex items-center ${filter === "museum" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
          onClick={() => setFilter("museum")}
        >
          {categoryIcons.museum} Музеи
        </button>
        <button
          className={`px-3 py-1 rounded-full flex items-center ${filter === "theater" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
          onClick={() => setFilter("theater")}
        >
          {categoryIcons.theater} Театры
        </button>
        <button
          className={`px-3 py-1 rounded-full flex items-center ${filter === "monument" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
          onClick={() => setFilter("monument")}
        >
          {categoryIcons.monument} Памятники
        </button>
        <button
          className={`px-3 py-1 rounded-full flex items-center ${filter === "gallery" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
          onClick={() => setFilter("gallery")}
        >
          {categoryIcons.gallery} Галереи
        </button>
      </div>

      <div className="bg-muted rounded-lg relative w-full h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop')] bg-cover bg-center"></div>

        {filteredPoints.map((point) => (
          <button
            key={point.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center 
              ${selectedPoint?.id === point.id ? "bg-primary text-white scale-125" : "bg-white border-2 border-primary hover:scale-110"} 
              transition-all duration-200`}
            style={{
              left: `${point.location.x}%`,
              top: `${point.location.y}%`,
            }}
            onClick={() => setSelectedPoint(point)}
          >
            {categoryIcons[point.category]}
          </button>
        ))}
      </div>

      {selectedPoint && (
        <Card className="mt-4 animate-fade-in">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{selectedPoint.name}</CardTitle>
                <CardDescription>
                  {categoryIcons[selectedPoint.category]}{" "}
                  {selectedPoint.category}
                </CardDescription>
              </div>
              <button
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setSelectedPoint(null)}
              >
                ✕
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={selectedPoint.image}
                alt={selectedPoint.name}
                className="rounded-md w-full md:w-1/3 h-48 object-cover"
              />
              <div>
                <p>{selectedPoint.description}</p>
                <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
