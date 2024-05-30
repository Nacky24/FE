"use strict";
/*function log(message) {
    console.log(message);
}

var message = "hello world";

log(message);


function doSomething() {
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log("finally:"+i);
}

doSomething();



let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true,'a',false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color{Red, Green, Blue };
let backgroundColor = Color.Red;



let msg;
msg = "abc";
let endwith = (<string>msg).endsWith("c");
let alter = (msg as string).endsWith("c");


 let funcName = function(message){
    console.log(message);
 }

 let arrowName = (message) => {
    console.log(message);
 }

 let sumarrowName = () => console.log();



// interface for decleariation

interface Point {
    x: number,
    y: number,
}

let drawPoint = (point: Point) => {
    //..
}



drawPoint ({
    x:1,
    y:2
})
*/
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton_1 = require("./LikeButton");
var button = new LikeButton_1.Like(true, 5);
console.log(button.likeCount);
