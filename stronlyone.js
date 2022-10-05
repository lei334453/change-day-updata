str='lovewasaad';//0


const set=new Set([1,2,3,4,5]);

const obj=Object.prototype.toString.call(set).slice(8,-1);

console.log(obj);

const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
  ]);
  const obj1=Object.prototype.toString.call(map).slice(8,-1);
  console.log(obj1);
  
