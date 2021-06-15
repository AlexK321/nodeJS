// npm i mysql
// https://www.apachefriends.org/ru/index.html - установить XAMPP - пакет для работы с MySQL
// запустить Apachi и MySQL в XAMPP-control
// http://localhost/phpmyadmin - адрес админки
const mysql = require('mysql');

//конфигурация 
const conn = mysql.createConnection({
  host: "localhost", 
  user: "root",
  database: "phone_book",
  password: ""
});
//установить соединение с БД
conn.connect(err=>{
  if (err) {
    console.error("Ошибка: " + err.message);
    return err
  }
  else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
})
//получить данные из таблицы aonents
let query = 'SELECT * FROM abonents'
conn.query(query, (err, result, field)=> {
  console.log(err)
  console.log(result)
  console.log(result[1]['Name'])
  //console.log(field) // показывает служебные данные (обьект параметров столбцов таблицы)
})

// после работы с БД необходимо закрывать соединение
// закрыть соединение с БД
conn.end((err=>{
  if (err) {
    console.error("Ошибка: " + err.message);
  }
  console.error("dataBase closed");
})
)  