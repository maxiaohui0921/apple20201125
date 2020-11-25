function arrRemoveSame(arr){
    let result = [];
    for(let index in arr){
        let value = arr[index];
        let position = result.indexOf(value);
        if (position>=0){
            continue;
        }
        else {
            result.push(arr[index]);
        }
    }
    return result;
}

obj = {name:"obj"};
const arr = [5,6,5,4,78,5,"hello","hi",null,null,obj,obj];

console.log(
    arrRemoveSame(arr)
);

/*
* 如果是对象去重的话，只要对象指向的内存空间一致就能去重，对对象里面的内容不尽兴判断
*/