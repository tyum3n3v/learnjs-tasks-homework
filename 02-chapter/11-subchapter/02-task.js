console.log( console.log(1) || 2 || console.log(3) ); // console.log(1) == undefined
// boolean: console.log(1) == undefined == false, 2 == true, console.log(3) == false -> on fulfilling true -> stop
// 1, then 2