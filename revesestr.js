// var str=['s','w','k','d','r','t'];

// var reverseString = function(s) {
//    return s.reverse();
//     };

//     let x=reverseString(str)
//     console.log(x);

var str=123;
//转数字
var reverseString = function(s) {
   let x=s.toString().split('').reverse().join("");
   return Number(x);
    };
    console.log(reverseString(str));
