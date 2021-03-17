"use strict";
let sales= document.getElementById("sales")
let hoursOfWork= ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
    let array2= [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let totalOftotal= 0
function Locations(location, min, max,Avg){
    this.location= location
    this.min= min
    this.max= max
    this.Avg= Avg
    this.total=0,
    this.CookiesPerHour= [],
    this.math= function (min, max) {
         return Math.floor(Math.random() * (max - min) + min);

      },
      this.hoursArray= ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
      this.numberOfCookies= function (){
     
    for (var i=0; i<this.hoursArray.length;i++){ 
        let result= this.math (this.min, this.max) * this.Avg
    this.CookiesPerHour.push(Math.floor(result))
    this.total+= Math.floor(result)
    array2[i]+=Math.floor(result)
    }
    totalOftotal+= this.total

}
this.render= function(){

      let tr=document.createElement("tr")
      let td=document.createElement("td")
      tr.appendChild(td)
      sales.appendChild(tr) 
      td.textContent= this.location
      for (var i=0; i<this.CookiesPerHour.length;i++){
          let td3=document.createElement("td")
          tr.appendChild(td3)
          td3.textContent= this.CookiesPerHour[i]

      } 
      let td4=document.createElement("td")
      tr.appendChild(td4)
      td4.textContent= this.total
}
}

function sales2 (){
    let tr = document.createElement('tr')
    sales.appendChild(tr)
    let td2=document.createElement("td")
    tr.appendChild(td2)
    
   
    for (let i=0; i<hoursOfWork.length;i++){
        let td= document.createElement("td")
        tr.appendChild(td)
        td.textContent = hoursOfWork[i]

    }
    let td4=document.createElement("td")
      tr.appendChild(td4)
      td4.textContent= "total for each location"


}
sales2()
function sofa (){
    let tr=document.createElement("tr")
    let td4=document.createElement("td")
    sales.appendChild(tr)
    tr.appendChild(td4)
    td4.textContent= "total"
    for (let i=0; i<array2.length;i++){
    let td5= document.createElement("td")
    tr.appendChild(td5)
    td5.textContent = array2[i]
    totalOftotal+= array2[i]
    }
    let td6=document.createElement("td")
    tr.appendChild(td6)
    td6.textContent= totalOftotal


}
var item= new Locations ("Seattle", 23, 65, 6.3);
item.numberOfCookies()
item.render()



var item2= new Locations ("Tokyo", 3, 24, 1.2);
item2.numberOfCookies()
item2.render()


var item3= new Locations ("Paris", 20, 38, 2.3);
item3.numberOfCookies()
item3.render()

var item4= new Locations ("Dubai", 11, 38, 3.7);
item4.numberOfCookies()
item4.render()


var item5= new Locations ("Lima", 2, 16, 4.6);
item5.numberOfCookies()
item5.render()
    sofa ()

