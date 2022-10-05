type Point={
    x:number;
    y:number;
}

function PrintCoord(pt:Point){
    console.log("the coording",pt.x);
    console.log("the coording",pt.y);
    
}
PrintCoord({x:100,y:100})

type ID=number|string

// 类型别名与接口两者最关键的差别在于类型别名本身无法添加新的属性，而接口是可以扩展的。

interface Animal{
    name:string
}

interface Bear extends Animal{
    honey:boolean
}

// const bear = getBear()


// type 通过交集扩展类型
type Animal2 ={
    name:string
}

type Bear2=Animal&{
    honey:boolean
}

// const bear1=getBear();

// Interface
namespace a{
  // 对一个已经存在的接口添加新的字段
interface Window {
  title: string
}
// interface TypeScriptAPI{
//   name:string
// }
// interface Window1 {
//   ts: TypeScriptAPI
// }

const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});
        
// Type
// 创建后不能被改变
//   type Window2 = {
//     title: string
//   }

//   type Window2 = {
//     ts: TypeScriptAPI
//   }

// Error: Duplicate identifier 'Window'.

}