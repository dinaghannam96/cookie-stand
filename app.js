"use strict";
let sales= document.getElementById("sales")
let sales_header= document.getElementById("t_header")

let total_table= document.getElementById("total")

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
// <tr> <td></td> </tr>  
      let tr=document.createElement("tr")
      let td=document.createElement("td")
      tr.appendChild(td)
      sales.prepend(tr) 
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
    let td = document.createElement('th')
    td.textContent= "City"
    sales_header.append(td)
    
   
    for (let i=0; i<hoursOfWork.length;i++){
        let td= document.createElement("td")
        sales_header.appendChild(td)
        td.textContent = hoursOfWork[i]

    }
    let td4=document.createElement("td")
      sales_header.appendChild(td4)
      td4.textContent= "total for each location"


}
sales2() // 
function sofa (){
    total_table.innerHTML = "";
    let td4=document.createElement("td")
    total_table.appendChild(td4)
    td4.textContent= "total"
    for (let i=0; i<array2.length;i++){
    let td5= document.createElement("td")
    total_table.appendChild(td5)
    td5.textContent = array2[i]
    totalOftotal+= array2[i]
    }
    let td6=document.createElement("td")
    total_table.appendChild(td6)
    td6.textContent= totalOftotal
}

    

    function addItem() {
  var city = document.getElementById('city').value; 
  var min = document.getElementById('min').value; 
  var max = document.getElementById('max').value; 
  var avg = document.getElementById('avg').value; 
  var add = new Locations (city,min,max,avg);
   add.numberOfCookies() 
   add.render()
   sofa()
   alert("New record Inserted successfuly")
} 

