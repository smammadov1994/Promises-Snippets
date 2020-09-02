const fetch = require('node-fetch')
const { isNumber } = require('util')

fetch("https://api.nasa.gov/planetary/apod?api_key=asYycRHMsOOAqbJ95hCIvXsdzj2NcfOWODeKeJc4")
.then(response=>response.json())
.then(data=>{
    return alert(data.code)
})
.then(data=>console.log(data))
.catch(err=>console.log(err))

// was getting a code error of 404 so I decided to work with it and use that as a parameter to make the promise happen

const alert=(something)=>{
    return new Promise((resolve,reject)=>{
        if(isNumber(something)){
        console.log('hi')
        resolve()
        }
        else{
        reject(new Error("You suck lol"))
        }
    })
}

