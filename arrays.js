arr = [1,2,3,4,5];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log (arr[i]);
}
console.log("The element in third index is",arr[3]);
arr.push(6);//add in the last 
console.log(arr);
arr.pop();//remove the last element
console.log(arr);
arr.unshift(2);//add the element in the front of the array
console.log(arr);
arr.shift();//remove the first element of the  array  
console.log(arr);
brr = ['a',"Azhar",true,8,7.9,[1,2,3,4,5]];
console.log(brr);
for(let i = 0; i<brr.length;i++)
{
    console.log(i,brr[i]);
}
for (const i of brr) 
{
    console.log(i)
}
brr.forEach((i,idx,brr) => {
    console.log(i,idx,brr);
});

