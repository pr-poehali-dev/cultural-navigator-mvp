export function Hero() {
  return (
    <div className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Откройте для себя культурное наследие
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Интерактивная карта достопримечательностей и культурных объектов для
            планирования ваших культурных маршрутов
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#map"
              className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Исследовать карту
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              О проекте
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
