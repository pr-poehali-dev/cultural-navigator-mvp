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
  {
    id: 4,
    name: "Третьяковская галерея",
    description:
      "Главный музей национального искусства России с крупнейшей коллекцией русского изобразительного искусства.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 30, y: 45 },
    category: "gallery",
  },
  {
    id: 5,
    name: "Русский музей",
    description:
      "Первый государственный музей русского изобразительного искусства в Санкт-Петербурге.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 55, y: 40 },
    category: "museum",
  },
  {
    id: 6,
    name: "Мариинский театр",
    description:
      "Академический театр оперы и балета в Санкт-Петербурге, один из ведущих музыкальных театров России.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 40, y: 55 },
    category: "theater",
  },
  {
    id: 7,
    name: "Памятник Петру I",
    description:
      "Монумент работы Этьена Фальконе, известный как 'Медный всадник', символ Санкт-Петербурга.",
    image:
      "https://images.unsplash.com/photo-1597149051399-9d2eabfa5c13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 75, y: 30 },
    category: "monument",
  },
  {
    id: 8,
    name: "ГМИИ им. Пушкина",
    description:
      "Один из самых значительных музеев мирового искусства, обладающий коллекциями зарубежного искусства.",
    image:
      "https://images.unsplash.com/photo-1589397086084-ec857b04e98f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 25, y: 60 },
    category: "museum",
  },
  {
    id: 9,
    name: "Центр современного искусства 'Винзавод'",
    description:
      "Один из крупнейших частных центров современного искусства в России.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 70, y: 65 },
    category: "gallery",
  },
  {
    id: 10,
    name: "МХТ им. Чехова",
    description:
      "Московский Художественный театр, основанный Станиславским и Немировичем-Данченко.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 50, y: 20 },
    category: "theater",
  },
  {
    id: 11,
    name: "Памятник Минину и Пожарскому",
    description:
      "Скульптурная группа на Красной площади, первый памятник в Москве, поставленный не в честь государя.",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 60, y: 50 },
    category: "monument",
  },
  {
    id: 12,
    name: "Эрарта",
    description: "Крупнейший частный музей современного искусства в России.",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 35, y: 75 },
    category: "gallery",
  },
  {
    id: 13,
    name: "Кунсткамера",
    description:
      "Первый музей России, основанный Петром I, музей антропологии и этнографии.",
    image:
      "https://images.unsplash.com/photo-1601562347730-f15c8dfd0d3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 80, y: 45 },
    category: "museum",
  },
  {
    id: 14,
    name: "Александринский театр",
    description:
      "Старейший государственный театр России, основанный в 1756 году.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 15, y: 35 },
    category: "theater",
  },
  {
    id: 15,
    name: "Родина-мать зовёт!",
    description:
      "Композиционный центр памятника-ансамбля 'Героям Сталинградской битвы' на Мамаевом кургане.",
    image:
      "https://images.unsplash.com/photo-1576420252689-53311cad261e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 85, y: 75 },
    category: "monument",
  },
  {
    id: 16,
    name: "Новая Третьяковка",
    description:
      "Галерея искусства XX-XXI веков, часть Государственной Третьяковской галереи.",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    location: { x: 45, y: 80 },
    category: "gallery",
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
