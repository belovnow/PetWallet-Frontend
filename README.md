# PetWallet Frontend
Клиентская часть приложения для отслеживание финансов.

![localhost_3000_ (2)](https://user-images.githubusercontent.com/38051895/129927490-bce7808e-0dbd-4bff-9dcd-1c1472a92296.png)

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
