
# Таблица маршрутов (Angular 18)

[![Open in GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Open%20App-success)](https://Gaigerov.github.io/ndm-systems/routing-table/)

## Как открыть приложение

1. Перейдите по ссылке: [https://Gaigerov.github.io/ndm-systems/routing-table/](https://Gaigerov.github.io/ndm-systems/routing-table/)
2. Или запустите локально:

```bash
npm install
ng serve
```

Проект реализует таблицу для вывода списка сетевых маршрутов с возможностью сортировки по различным параметрам. Приложение разработано с использованием современных технологий Angular 18 и RxJS, с оптимизированной производительностью и чистым кодом.

## Особенности

- 📊 Вывод таблицы сетевых маршрутов
- 🔄 Сортировка по всем столбцам:
  - Адрес назначения: сравнение IP-адресов
  - Шлюз: сравнение IP-адресов
  - Интерфейс: сравнение строк
- ⚡ Оптимальная производительность
- 🎨 Чистый UI с использованием БЭМ методологии
- 📱 Адаптивный дизайн

## Технический стек

- **Frontend**: Angular 18
- **Язык**: TypeScript
- **State Management**: RxJS
- **Стили**: CSS с использованием БЭМ методологии
- **Сборка**: Angular CLI

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/Gaigerov/routing-tablegit
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
ng serve
```

4. Откройте приложение в браузере:
```
http://localhost:4200
```

Для production-сборки:
```bash
ng build --configuration production
```

## Структура проекта

```
src/
├── app/
│   ├── route.model.ts              # Модель данных маршрута
│   ├── route.service.ts            # Сервис для работы с данными
│   ├── sortable-header/            # Компонент сортируемого заголовка
│   │   ├── sortable-header.component.ts
│   │   ├── sortable-header.component.html
│   │   └── sortable-header.component.css
│   ├── routes-table/               # Главный компонент таблицы
│   │   ├── routes-table.component.ts
│   │   ├── routes-table.component.html
│   │   └── routes-table.component.css
│   └── app.component.ts            # Корневой компонент
├── assets/                         # Статические ресурсы
├── environments/                   # Конфигурации окружений
├── index.html                      # Главная HTML-страница
└── styles.css                      # Глобальные стили
```

## Алгоритмы сортировки

### Сравнение IP-адресов
```typescript
private compareIps(ipA: string, ipB: string): number {
  const numA = this.ipToNumber(ipA);
  const numB = this.ipToNumber(ipB);
  return numA > numB ? 1 : numA < numB ? -1 : 0;
}

private ipToNumber(ip: string): number {
  if (!ip) return 0;
  const cleanIp = ip.split('/')[0];
  return cleanIp.split('.').reduce((acc, octet, idx) => 
    acc + parseInt(octet, 10) * Math.pow(256, 3 - idx), 0);
}
```

### Сравнение строк
```typescript
// Для сортировки по интерфейсу
a.interface.localeCompare(b.interface) * modifier;
```

## Производительность

Приложение оптимизировано с помощью:
- OnPush change detection strategy
- Мемоизации вычислений
- Оптимального трекинга в *ngFor
- Ленивой загрузки данных

**Разработано с использованием Angular 18**  
