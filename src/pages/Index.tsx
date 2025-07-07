import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const eventTypes = [
    {
      title: "Городские праздники",
      description: "Организация крупных городских мероприятий и торжеств",
      icon: "Building",
    },
    {
      title: "Концерты и фестивали",
      description: "Музыкальные и культурные мероприятия различных форматов",
      icon: "Music",
    },
    {
      title: "Спортивные события",
      description: "Соревнования, марафоны и спортивные праздники",
      icon: "Trophy",
    },
    {
      title: "Выставки и ярмарки",
      description: "Торговые и культурные выставочные мероприятия",
      icon: "Store",
    },
    {
      title: "Корпоративные мероприятия",
      description: "Деловые события и корпоративные праздники",
      icon: "Briefcase",
    },
    {
      title: "Частные торжества",
      description: "Свадьбы, юбилеи и семейные празднования",
      icon: "Heart",
    },
  ];

  const services = [
    {
      title: "Полная организация",
      description: "Комплексное планирование и проведение мероприятий",
      price: "от 50 000 ₽",
    },
    {
      title: "Консультации",
      description: "Профессиональные консультации по организации",
      price: "от 2 000 ₽",
    },
    {
      title: "Техническое обеспечение",
      description: "Звук, свет, сценическое оборудование",
      price: "от 15 000 ₽",
    },
    {
      title: "Согласование документов",
      description: "Оформление всех необходимых разрешений",
      price: "от 5 000 ₽",
    },
  ];

  const news = [
    {
      title: "Новый год в Санкт-Петербурге 2024",
      date: "15 декабря 2024",
      category: "Городские праздники",
    },
    {
      title: "Фестиваль «Белые ночи» - итоги сезона",
      date: "30 августа 2024",
      category: "Культурные события",
    },
    {
      title: "Изменения в порядке подачи заявок",
      date: "10 ноября 2024",
      category: "Документооборот",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  СПб ГКУ "Дирекция массовых мероприятий"
                </h1>
                <p className="text-sm text-gray-600">
                  Организация массовых мероприятий
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                Связаться
              </Button>
              <Button size="sm">
                <Icon name="Calendar" className="h-4 w-4 mr-2" />
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary text-white">
                Официальный государственный орган
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Организация массовых мероприятий
              </h2>
              <p className="text-xl mb-8 text-gray-600">
                Профессиональная организация городских праздников, концертов и
                фестивалей. Комплексное сопровождение от концепции до
                реализации.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  <Icon name="Calendar" className="h-5 w-5 mr-2" />
                  Записаться на консультацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <Icon name="FileText" className="h-5 w-5 mr-2" />
                  Подробнее о службе
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/71b6ac86-7bfb-4d09-a70b-cb5c6245e513.jpg"
                alt="Здание дирекции массовых мероприятий"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по организации массовых мероприятий любого
              масштаба и сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                    <Button size="sm" variant="outline">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Виды мероприятий</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Организация всех видов массовых мероприятий для жителей и гостей
              Санкт-Петербурга
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon
                        name={type.icon as any}
                        className="h-5 w-5 text-primary"
                      />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Записаться на приём</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="AlertTriangle"
                    className="h-5 w-5 text-yellow-600"
                  />
                  <p className="text-yellow-800 font-medium">Внимание!</p>
                </div>
                <p className="text-yellow-700 mt-2">
                  Для приёма в офисе обязательно нужна запись, лучше за
                  несколько дней.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Адрес офиса:</p>
                    <p className="text-gray-600">
                      Санкт-Петербург, Большой проспект В.О., 83
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Часы работы:</p>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00-18:00, Сб-Вс: выходной
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Телефон:</p>
                    <p className="text-gray-600">+7 (812) 000-00-00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Форма записи</CardTitle>
                <CardDescription>
                  Заполните форму для записи на консультацию или приём
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" placeholder="Ваша фамилия" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="appointmentType">Тип встречи</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип встречи" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Консультация</SelectItem>
                      <SelectItem value="meeting">Приём в офисе</SelectItem>
                      <SelectItem value="online">Онлайн-встреча</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Описание мероприятия</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем мероприятии..."
                  />
                </div>
                <Button className="w-full">
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Пресс-центр</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Последние новости и информация о предстоящих мероприятиях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    <Icon name="ArrowRight" className="h-4 w-4 mr-2" />
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <p>Санкт-Петербург</p>
                <p>Большой проспект В.О., 83</p>
                <p>+7 (812) 000-00-00</p>
                <p>info@spb-events.ru</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Полная организация</li>
                <li>Консультации</li>
                <li>Техническое обеспечение</li>
                <li>Согласование документов</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Мероприятия</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Городские праздники</li>
                <li>Концерты и фестивали</li>
                <li>Спортивные события</li>
                <li>Корпоративные мероприятия</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-300">
                <li>О дирекции</li>
                <li>Документы</li>
                <li>Новости</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 СПб ГКУ "Дирекция массовых мероприятий". Все права
              защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Mail" className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="Phone" className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <Icon name="MapPin" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
