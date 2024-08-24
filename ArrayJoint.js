let x=[2,5]
let y=[3,7]
joinArray(x,y)

function joinArray(a,b){
    var newArray=[];
    for(var i=0;i<x.length;i++){
        let number=x[i];
        newArray.push(number)
    }
    for(var i=0;i<y.length;i++){
        let number=y[i];
        newArray.push(number)
    }
    console.log(newArray)
}