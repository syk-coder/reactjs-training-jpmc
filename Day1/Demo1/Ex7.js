function show(...args){
    let sum = 0;
    for(let i of args){
        sum+=i;
    }
    console.log("Sum ="+sum);
    console.log("My func");
}
show(12,22,34,56,78,98);
