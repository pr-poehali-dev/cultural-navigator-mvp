
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary mt-auto">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground mb-4">
              Культурный Навигатор
            </h3>
            <p className="text-primary-foreground/80">
              Интерактивная карта культурных объектов и достопримечательностей
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              Ссылки
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Обратная связь
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              Контакты
            </h3>
            <p className="text-primary-foreground/80">Email: info@культурный-навигатор.рф</p>
            <p className="text-primary-foreground/80">Телефон: +7 (XXX) XXX-XX-XX</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary-foreground">
                📱
              </a>
              <a href="#" className="text-primary-foreground">
                📘
              </a>
              <a href="#" className="text-primary-foreground">
                📸
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/70">
            © {new Date().getFullYear()} Культурный Навигатор. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
