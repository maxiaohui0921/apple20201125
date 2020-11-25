const arr = [
    {name:"孙悟空",age:18},
    {name:"猪八戒",age:28},
    {name:"沙和尚",age:38},
    {name:"白骨精",age:20},
    {name:"红孩儿",age:8}
];

for (let index in arr){
    if (arr[index].age>20){
        // alert(arr[index].name);   alert是浏览器中的对象，在这里是undefined
        console.log(arr[index].name);
    }
}