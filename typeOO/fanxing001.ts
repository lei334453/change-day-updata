function print<T>(arg:T):T{
    console.log(arg);
    return arg;
}

// console.log(print<string>('xiaolei'));  可以不指定
console.log(print('xiaolei'));

//type形式
type Print=<T>(arg:T)=>T;

const printFn:Print=(arg)=>arg;
//可以在接口上默认参数
interface Iprint<T=number>{
    (arg:T):T
}

function print2<T>(arg:T){
   console.log(arg);
   return arg
}

const myPrint:Iprint<number>=print2

console.log(print2("sajhsad"));

//泛型处理多个参数
function swap(tuple){
    //这样写会丧失类型
    return [tuple[1],tuple[2]]
}
//:[U,T]  返回值的第一项是函数是number 有number上的所有的方法
function swap2<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const res = swap2(['line',18]);
// res[1].  


// 函数副作用操作  

function request(url:string){
    return fetch(url).then(res=>res.json())
}

request('user/info').then(res=>{
    console.log(res);//any
    
})

interface UserInfo{
    name:string
    age:number
}

function request2<T>(url:string):Promise<T>{
    return fetch(url).then(res=>res.json())
}

request2<UserInfo>('user/info').then(res=>{
    console.log(res);
    
})

//约束泛型

interface Ilength{
    length:number
}
//泛型继承接口 ILength
function printLength<T extends Ilength>(arg:T):T{
    console.log(arg.length);//不确定 T 是否有 length 属性，会报错
    return arg;
    
}


//泛型约束类 
class Stack<T>{
    private data:T[]=[]
    push(item:T){
        return this.data.push(item);
    }
    pop():T|undefined{
        return this.data.pop();
    }
}

const s1=new Stack<number>()
//，泛型无法约束类的静态成员。


// 泛型约束接口

interface IkeyValue<T,U>{
    key:T
    value:U
}

const k1:IkeyValue<number,string>={key:18,value:"line"}
const k2:IkeyValue<string,number>={key:"linew",value:15}