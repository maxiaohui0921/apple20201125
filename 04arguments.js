function func(a,b){
    // console.log(a);
    // console.log(b);
    console.log(arguments);
    console.log("arguments[0] = "+arguments[0]);
    console.log("arguments[\"0\"] = "+arguments["0"])
    console.log("arguments.length = ："+arguments.length)
}

func("hello","kevin");
console.log("函数调用完毕后，查看arguments,显示为："+func.arguments);

/*
* 当调用函数时，会把传入的实参打包成一个类数组对象，传给函数
* 这个类数组对象[Arguments] { '0': 'hello', '1': 'kevin' }
* 调用时是Arguments[0] 或者 Arguments["0"]
* 只有调用时才存在，函数调用完毕，被清除
* */