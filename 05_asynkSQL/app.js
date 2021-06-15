// npm i mysql2 - для работы с асинхронным режимом

const mysql = require('mysql2/promise');

const config = require('./config')

//1 вариант
async function main(){
  const conn = await mysql.createConnection(config) //установить соединение с БД
  const [rows, fields] = await conn.execute('SELECT * FROM abonents') // 1 запрос
  console.log(rows)
  await conn.execute('UPDATE `abonents` SET `Name`="Наташа" WHERE id=3') // 2ой запрос к БД
  conn.end() // завершить соединение
}

main();

//2 вариант 
// async function main(){
//   const conn = await mysql.createConnection(config) //установить соединение с БД
//   const [rows, fields] = await conn.execute('SELECT * FROM abonents') // 1 запрос
//   conn.end()
//   return rows
// }

// async function f(){
//   const data = await main()
//   console.log(data)
// }
// f()