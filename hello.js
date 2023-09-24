const say_Hello = (name)=>{
    setInterval(()=>{
        console.log(`Hello ${name} we were waiting for you`)
    },2000)
}

module.exports=say_Hello