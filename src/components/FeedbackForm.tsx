
import { useState } from "react";

export function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки данных на сервер
    console.log("Form submitted:", formData);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        rating: 5
      });
    }, 500);
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold mb-2">Спасибо за отзыв!</h3>
          <p className="text-muted-foreground mb-4">
            Ваше мнение очень важно для нас и поможет улучшить проект.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Отправить ещё один отзыв
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold mb-4">Обратная связь</h3>
          <p className="text-muted-foreground mb-6">
            Поделитесь своим мнением о проекте или предложите новые идеи
          </p>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Оцените наш проект
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className="text-2xl focus:outline-none"
                >
                  {star <= formData.rating ? "⭐" : "☆"}
                </button>
              ))}
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Отправить отзыв
          </button>
        </form>
      )}
    </div>
  );
}
