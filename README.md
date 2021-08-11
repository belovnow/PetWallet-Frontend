# PetWallet Frontend
Клиентская часть приложения для отслеживание финансов.

![localhost_3000_ (1)](https://user-images.githubusercontent.com/38051895/129099410-daa94d3a-e985-4edc-8a7c-e0bd9340b441.png)

### Используемые библиотеки
* [Typescript](https://www.typescriptlang.org/)
* [Material-UI](https://material-ui.com/)
* [Redux](https://redux.js.org/)
* [Redux-Saga](https://redux-saga.js.org/)
* [React Hook Form](https://react-hook-form.com/)

### Запуск приложения
Запустить [бэкенд](https://github.com/belovnow/PetWallet-Backend) и БД: `docker run --name petwalletdb -p 54321:5432 -e POSTGRES_PASSWORD=password -d postgres`.

Внутри каталога приложения выполнить:
```
npm install
npm start
```
Открыть [http://localhost:3000](http://localhost:3000) в браузере.
