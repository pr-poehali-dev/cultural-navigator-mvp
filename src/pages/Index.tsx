
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CultureMap } from "@/components/CultureMap";
import { FeedbackForm } from "@/components/FeedbackForm";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">Исследуйте культурные объекты</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Интерактивная карта поможет вам найти интересные места и спланировать культурный маршрут
          </p>
          <CultureMap />
        </section>
        
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Статистика проекта</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <p className="text-muted-foreground">Культурных объектов</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Городов России</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <p className="text-muted-foreground">Активных пользователей</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ваше мнение важно для нас</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы стремимся сделать "Культурный Навигатор" максимально полезным и удобным. 
                Поделитесь своими впечатлениями или предложениями по улучшению нашего сервиса.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Каждый отзыв помогает нам становиться лучше и расширять функционал проекта.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-2 border-background">
                      👤
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Присоединяйтесь к сообществу энтузиастов культуры
                </p>
              </div>
            </div>
            <FeedbackForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
