let num:number[] = [1,2,3,4,5,6,7,8];

console.log("List of even numbers: ")
for(let i=0; i<num.length; i++){
    if (num[i]%2==0){
        console.log(num[i]);
    }
}