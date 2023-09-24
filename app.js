const a=8
const names=require('./names')
const say_Hello=require('./hello')

if(a<10){
    console.log("It is a small number")
}else{
    console.log("It is a big number")
}


setInterval(()=>{
    console.log("This code executes after 2 seconds")
},2000)






say_Hello(names.name2)
say_Hello(names.name1)
say_Hello(names.name3)
console.log(names)
