function inc(num,callback){
    num = num + 1;
    callback(num);
}

function display(n){
     console.log(n);
}

inc(99,display); //Callback function

inc(99,function(n){console.log(n)}); //Anonymous function

inc(99,(n)=>{console.log(n)}); //Arrow function