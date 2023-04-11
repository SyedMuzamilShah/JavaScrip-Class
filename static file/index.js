// var b = document.querySelector('#p').addEventListener("click", function(){ alert("Hello World!"); });
// var a = document.querySelector('#new').addEventListener("click", function(){ alert("Hello World!"); });

// var a = document.querySelector('#btn')

// var p = document.querySelector('p')

// var b =1
// setInterval(() => {
// function parent() {
//     a.innerHTML = `<b><h1> ${b}sec</h1></b>`;
//     a.style.backgroundColor =   '#'+Math.floor(Math.random()*16777215).toString(16);
//     a.style.color =   '#'+Math.floor(Math.random()*16777215).toString(16);
//     if (b === 10) {
//         b = 0
//     }
//     b = b+1
// }
// parent()

// }, 1000);


// //      Question No. 1
// function outer(a) {
//     function inner(b) {
//         return a+b;
//     }
//     return inner(40)
// }
// console.log(outer(50))

// //      Question No. 2
// function Rcf(arr , value) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr[0] === value) {
//         return true;
//     }
    
//     return Rcf(arr.slice(1), value);
// }
// const list = [1,2,3,4,5,6,7,8,9]
// console.log(Rcf(list, 4))

// //      Question No. 3
// const par = document.createElement('p')
// const text = document.createTextNode('This Is My New Parhgraph')
// par.appendChild(text);
// document.body.appendChild(par)


// //      Question No. 4
// const para = document.createElement('li')
// const u = document.createElement('ul')
// u.appendChild(para).append('List Item In Unorder list')
// document.body.appendChild(u)


// //      Question No. 5
// function colorAdd(ele , col) {
//     setInterval(function name(params) {
//         ele.style.backgroundColor = col;
//         col = '#'+Math.floor(Math.random()*16777215).toString(16);
//     },1000)
//     return setInterval;
// }
// var e = document.querySelector('#p')
// var c = '#'+Math.floor(Math.random()*16777215).toString(16);
// colorAdd(e,c)



// //      Question No. 6
// function local(key , value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }
// const obj = {
//     'name' : 'Muzamil',
//     'Class' : 'JavaScripts'
// }
// local('OBJECT', obj)


// //      Question No. 7
// function retrive(key) {
//     console.log(JSON.parse(localStorage.getItem(key)))
// }
// retrive('OBJECT')


// //      Question No. 8
// function outer(obj) {
//     for (var i in obj){
//         localStorage.setItem(i , JSON.stringify(obj[i]))
//     }
//     var NEW = new Object
//     for (var j in obj){
//         var a = JSON.parse(localStorage.getItem(j))
//         NEW[j] = a
//     }
//     return console.log(NEW)
// }
// var Dic = {
//     'Name' : 'Muzamil',
//     'Class' : 'JAVA Scripts',
//     'Roll' : 4000
// }
// outer(Dic)