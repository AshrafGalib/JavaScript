let x=[16,34,90,23,87,56,4]

let reverseArray=[]

for(var i=x.length-1;i>=0;i--){
    let number =x[i];
    reverseArray.push(number);
}
console.log(reverseArray);