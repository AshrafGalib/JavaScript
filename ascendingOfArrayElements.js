let numbers=[7,20,1,100,56];

var swap;
for(var i=0;i<numbers.length;i++){
    for(var j=i;j<numbers.length;j++){
        if(numbers[i]>numbers[j]){
        swap=numbers[i];
        numbers[i]=numbers[j];
        numbers[j]=swap
        }
    }
}
console.log(numbers)