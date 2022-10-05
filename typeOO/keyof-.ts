type Point={x:number,y:number};

type P=keyof Point;//"x|y"

type Arrayish={[n:number]:unknown};

type A=keyof Arrayish;
//type A = number

type Mapish={[k:string]:boolean}
type M=keyof Mapish;

const NumericObject = {
    [1]: "冴羽一号",
    [2]: "冴羽二号",
    [3]: "冴羽三号"
  };
  
  type result = keyof typeof NumericObject
  
  // typeof NumbericObject 的结果为：
  // {
  //   1: string;
  //   2: string;
  //   3: string;
  // }
  // 所以最终的结果为：
  // type result = 1 | 2 | 3