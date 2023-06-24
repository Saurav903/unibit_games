// 1 . Given an array of integers and a target value, you must determine which two integers' sum
// equals the target and return a 2D array. Then merge the array into a single array with sorting (
// ascending ) order, in the next step double the target value and find again the combination of
// digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D
// array.
// Sample Input : [1, 3, 2, 2, -4, -6, -2, 8];
// Target Value = 4,
// Output: First Combination For “4” : [ [1,3],[2,2],[-4,8],[-6,2] ];
// Merge Into a single Array : [-6,-4,1,2,2,2,3,8];
// Second Combination For “8” : [ [ 1,3,2,2], [8,-4,2,2],....,[n,n,n,n] ]



let inp = [1, 3, 2, 2, -4, -6, -2, 8];

let target = 4;

let arr1 = [];
for(let i=0; i<inp.length; i++){
    for(let j=i+1; j<inp.length; j++){
        if(inp[i]+inp[j]===target){
            arr1.push([inp[i],inp[j]]);
        }
    }
}


let arr2 = [];
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr1[i].length; j++){
        arr2.push(arr1[i][j]);
    }
}
arr2.sort((a,b)=>a-b);


let arr3 = [];
for(let i=0; i<inp.length; i++){
    for(let j=0; j<inp.length; j++){
        if(i!==j){
            for(let k=0; k<inp.length; k++){
                if(j!==k){
                    for(let l=0; l<inp.length; l++){
                        if(k!==l){
                            if(inp[i]+inp[j]+inp[k]+inp[l]===(target*2)){
                                arr3.push([inp[i],inp[j],inp[k],inp[l]]);
                            }
                        }
                    }
                    if(inp[i]+inp[j]+inp[k]===(target*2)){
                        arr3.push([inp[i],inp[j],inp[k]]);
                    }
                }
            }
            if(inp[i]+inp[j]===(target*2)){
                arr3.push([inp[i],inp[j]]);
            }
        }
    }
}

console.log(`First Combination For “4” :`,arr1);
console.log(`Merge Into a single Array :`,arr2);
console.log(`Second Combination For “8” :`,arr3);