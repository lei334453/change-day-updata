// const a = (expo as any) as T;
//具体的类型  as
const myCanvas = document.getElementById('#app') as HTMLCanvasElement;
//在.tsx文件中不能这样使用
const myCanvas1=<HTMLCanvasElement>document.getElementById('#app');