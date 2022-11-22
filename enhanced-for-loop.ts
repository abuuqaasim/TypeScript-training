let sports:String[] = ["Soccer","Golf","Tennis"];

for (let s of sports){
    console.log(s);
}

console.log("==============Growable array test below===========================");
sports.push('Hockey');
sports.push("Cricket");

console.log(sports.length)
