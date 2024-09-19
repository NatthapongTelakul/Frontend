function operatenum(callback,x,y){
    console.log(`Use ${x} and ${y}`)
    console.log(callback(x,y))
}

//addnum function
// function addnum(x,y){
//     return(`Adding ${x} and ${y} gives us: ${x+y}`)
// }
 


operatenum(function(x,y){return(`${x} + ${y} = ${x+y}`)},3,4)
 
operatenum((x,y)=>{return(`${x} + ${y} = ${x+y}`)},3,4)