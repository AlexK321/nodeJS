const fs = require('fs')
const path = require('path')

//программа для отправки тестовых запросов - Postman

//создать сервер
const http = require('http')//подключается модуль сервера
const url = require('url')//модуль для разбора url на части
const { parse } = require('querystring') //преобразовать строку параметров запроса к обьекту

http.createServer((req, res) => {
  console.log('serverWork')
  console.log(req.method) // какой метод пост или гет

  if(req.method == 'GET'){
    let urlReq = url.parse(req.url, true)
    console.log(urlReq.query)
    if(urlReq.query.test === '5') {res.end('OK5')}//обработчик разных гет-запросов
    if(urlReq.query.test === '4') {res.end('OK4')}
    res.end('go')
  }
  
  if(req.method == 'POST'){
    let body = ''
    req.on('data', chank => { //chank- потоковое чтение . NodeJS разбивает запрос на части чанки и обрабатывает запрос маленькими частями. 
      body+=chank.toString()
    })
    req.on('end', () => {
      //console.log('body', body)
      let params = parse(body) // преобразование к обьекту тела запроса
      console.log(params)
      //console.log(params.qwe) 
      res.end('POSTOK')
    })
  }
}  
).listen(3000)//указывается порт