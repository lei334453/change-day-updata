function f(){
    return {x:10,y:3}
}
//type P=ReturnType<type f> 這樣不對值和類型并不是一個東西
type P=ReturnType<typeof f>

//函數使用typeof

function identity<Type>(arg:Type):Type{
    return arg;
}

type result=typeof identity
//type result = <Type>(arg: Type) =>Type

//對枚舉使用 （enum)使用typeof

namespace dsds{
    enum UserResponse{
        No=0,
        Yes=1
    }
    
    // let result = typeof UserResponse;
    
    // const a:result={
    //     "No":2,
    //     "Yes":3
    // }
    
    // type result = keyof typeof UserResponse;
}