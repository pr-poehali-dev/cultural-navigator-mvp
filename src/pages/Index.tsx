
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CultureMap } from "@/components/CultureMap";
import { FeedbackForm } from "@/components/FeedbackForm";
import { MapIcon, BookOpenIcon, LandmarkIcon, UserIcon } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Карта культурных объектов */}
        <section id="map" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Интерактивная карта культурного наследия
              </h2>
              <p className="text-lg text-gray-600">
                Исследуйте уникальные достопримечательности и культурные объекты на нашей интерактивной карте
              </p>
            </div>
            <CultureMap />
          </div>
        </section>
        
        {/* Статистика */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <MapIcon className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">300+</h3>
                <p className="text-primary-foreground/80">Культурных объектов</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LandmarkIcon className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-primary-foreground/80">Городов России</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpenIcon className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">1000+</h3>
                <p className="text-primary-foreground/80">Исторических справок</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <UserIcon className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-primary-foreground/80">Ежемесячных посещений</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Форма обратной связи */}
        <section id="feedback" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ваше мнение важно для нас
              </h2>
              <p className="text-lg text-gray-600">
                Помогите нам улучшить проект "Культурный Навигатор", оставив свой отзыв или предложение
              </p>
            </div>
            <FeedbackForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
