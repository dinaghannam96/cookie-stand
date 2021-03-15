"use strict";
let Seattle= {
    location: "Seattle",
    min: 23,
    max:65,
    Avg: 6.3,
    total: 0,
    CookiesPerHour: [],
    math: function (min, max) {
         return Math.floor(Math.random() * (max - min) + min);

      },
      hoursArray: ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
      numberOfCookies: function (){
    
    for (var i=0; i<this.hoursArray.length;i++){ 
        let result= this.math (this.min, this.max) * this.Avg
this.CookiesPerHour.push(Math.floor(result))
this.total+= Math.floor(result)
    }


 },
 render: function () {
    var ul = document.createElement('ul');
    var city= document.createElement("h1")
    city.innerText= this.location
    ul.appendChild(city)
     var branch=document.getElementById("main")
     branch.appendChild(ul)
     var Seattle= document.createElement('li');
    
    for (var i=0; i<this. CookiesPerHour.length;i++){
        var li = document.createElement('li');
        li.innerText= this.hoursArray[i]+ ": " +this.CookiesPerHour[i] +" cookies";

        ul.appendChild(li)



    }
    var li = document.createElement('li'); 
    li.innerText= "Total: " +this.total +" cookies";
    ul.appendChild(li)

 },



}
Seattle.numberOfCookies ()
Seattle.render()


let Tokyo= {
    location: "Tokyo",
    min: 3,
    max:24,
    Avg: 1.2,
    total: 0,
    CookiesPerHour: [],
    math: function (min, max) {
         return Math.floor(Math.random() * (max - min) + min);

      },
      hoursArray: ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
      numberOfCookies: function (){
    
    for (var i=0; i<this.hoursArray.length;i++){ 
        let result= this.math (this.min, this.max) * this.Avg
this.CookiesPerHour.push(Math.floor(result))
this.total+= Math.floor(result)
    }


 },
 render: function () {
    var ul = document.createElement('ul');
    var city= document.createElement("h1")
    city.innerText= this.location
    ul.appendChild(city)
     var branch=document.getElementById("main")
     branch.appendChild(ul)
     var Tokyo= document.createElement('li');
    
    for (var i=0; i<this. CookiesPerHour.length;i++){
        var li = document.createElement('li');
        li.innerText= this.hoursArray[i]+ ": " +this.CookiesPerHour[i] +" cookies";

        ul.appendChild(li)



    }
    var li = document.createElement('li'); 
    li.innerText= "Total: " +this.total +" cookies";
    ul.appendChild(li)

 },



}
Tokyo.numberOfCookies ()
Tokyo.render ()

let Paris= {
    location: "Paris",
    min: 20,
    max:38,
    Avg: 2.3,
    total: 0,
    CookiesPerHour: [],
    math: function (min, max) {
         return Math.floor(Math.random() * (max - min) + min);

      },
      hoursArray: ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
      numberOfCookies: function (){
    
    for (var i=0; i<this.hoursArray.length;i++){ 
        let result= this.math (this.min, this.max) * this.Avg
this.CookiesPerHour.push(Math.floor(result))
this.total+= Math.floor(result)
    }


 },
 render: function () {
    var ul = document.createElement('ul');
    var city= document.createElement("h1")
    city.innerText= this.location
    ul.appendChild(city)
     var branch=document.getElementById("main")
     branch.appendChild(ul)
     var Paris= document.createElement('li');
    
    for (var i=0; i<this. CookiesPerHour.length;i++){
        var li = document.createElement('li');
        li.innerText= this.hoursArray[i]+ ": " +this.CookiesPerHour[i] +" cookies";

        ul.appendChild(li)



    }
    var li = document.createElement('li'); 
    li.innerText= "Total: " +this.total +" cookies";
    ul.appendChild(li)

 },



}
Paris.numberOfCookies ()
Paris.render ()

let Dubai= {
    location: "Dubai",
    min: 11,
    max:38,
    Avg: 3.7,
    total: 0,
    CookiesPerHour: [],
    math: function (min, max) {
         return Math.floor(Math.random() * (max - min) + min);

      },
      hoursArray: ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
      numberOfCookies: function (){
    
    for (var i=0; i<this.hoursArray.length;i++){ 
        let result= this.math (this.min, this.max) * this.Avg
this.CookiesPerHour.push(Math.floor(result))
this.total+= Math.floor(result)
    }


 },
 render: function () {
    var ul = document.createElement('ul');
    var city= document.createElement("h1")
    city.innerText= this.location
    ul.appendChild(city)
     var branch=document.getElementById("main")
     branch.appendChild(ul)
     var Dubai= document.createElement('li');
    
    for (var i=0; i<this. CookiesPerHour.length;i++){
        var li = document.createElement('li');
        li.innerText= this.hoursArray[i]+ ": " +this.CookiesPerHour[i] +" cookies";

        ul.appendChild(li)



    }
    var li = document.createElement('li'); 
    li.innerText= "Total: " +this.total +" cookies";
    ul.appendChild(li)

 },



}
Dubai.numberOfCookies ()
Dubai.render ()

let Lima= {
    location: "Lima",
    min: 2,
    max: 16,
    Avg: 4.6,
    total: 0,
    CookiesPerHour: [],
    math: function (min, max) {
         return Math.floor(Math.random() * (max - min) + min);

      },
      hoursArray: ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
      numberOfCookies: function (){
    
    for (var i=0; i<this.hoursArray.length;i++){ 
        let result= this.math (this.min, this.max) * this.Avg
this.CookiesPerHour.push(Math.floor(result))
this.total+= Math.floor(result)
    }


 },
 render: function () {
    var ul = document.createElement('ul');
    var city= document.createElement("h1")
    city.innerText= this.location
    ul.appendChild(city)
    var branch=document.getElementById("main")
     branch.appendChild(ul)
     var Lima= document.createElement('li');
    
    for (var i=0; i<this. CookiesPerHour.length;i++){
        var li = document.createElement('li');
        li.innerText= this.hoursArray[i]+ ": " +this.CookiesPerHour[i] +" cookies";

        ul.appendChild(li)



    }
    var li = document.createElement('li'); 
    li.innerText= "Total: " +this.total +" cookies";
    ul.appendChild(li)

 },



}
Lima.numberOfCookies ()
Lima.render ()








