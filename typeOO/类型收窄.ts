function printId(id:number|string){
    if(typeof id==='string'){
        console.log(id.toLowerCase());
    }else{
        console.log(id);
    }
}

printId(122);
printId('str')


function  WelcomePeople(x:string[]|string){
    if(Array.isArray(x)){
        console.log('Hello,'+x.join("and"));
    }else{
        console.log("Welcome lone traveler"+x);
        
    }
}

function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
  }