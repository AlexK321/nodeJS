const fs = require('fs')
const path = require('path')

// запись JSON
// const man = {
//   name: 'Alex',
//   age: '22',
//   car: 'vaz',
// }
// fs.writeFile('one.json', JSON.stringify(man), (err) => {
//     if(err) console.log('Error')
// })

//чтение JSON 
// const man2 = require('./one.json')
// console.log(man2)

//читать CSV (подобие формата для Exel)
//npm i csv-parser

// const csv = require('csv-parser')
// const results = [];
// fs.createReadStream('table.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//   });

//запись CSV
//npm i csv-writer

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//   path: './table2.csv',
//   header: [
//     {id: 'name', title: 'NAME'}, // соответсвтие ключа к названию колонки
//     {id: 'lang', title: 'LANGUAGE'}
//   ]
// });
 
// const data = [
//   {name: 'Bob',  lang: 'French, English'},
//   {name: 'Mary', lang: 'English'}
// ];
 
// csvWriter.writeRecords(data)       // returns a promise
// .then(() => {
//   console.log('...Done');
// });