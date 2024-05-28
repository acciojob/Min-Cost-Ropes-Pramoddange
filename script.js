function mincost(arr)
{ 
//write your code here
// return the min cost
   arr.sort();
	let totalCost=0;
	while(arr.length>1){
		let a=arr.shift();
		let b=arr.shift();
		totalCost+=a+b;
		arr.push(a+b);
		arr.sort();
	}
	return totalCost;
	}
  


module.exports=mincost;
