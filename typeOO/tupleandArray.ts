// type MapToPromise<T>={[K in keyof T]:Promise<T[K]>}

let strArray:string[]=["1",'2','3','4','5'];

interface NumberArray{
    [index:number]:number;
}

let fibonacci:NumberArray=[1,1,2,3,5]