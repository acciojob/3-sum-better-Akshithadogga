function threeSum(arr, target) {
// write your code here
	var sum;
	for(let i=0;i<arr.length-2;i++){
		for(let j=0;j<arr.length-1;j++){
			for(let k=0;k<arr.length;k++){
				sum=arr[i]+arr[j]+arr[k];
			}
		}
	}
	let arr;
	var ans;
for(let i=0;i<sum.length-1;i++){
	arr=Math.abs(sum[i]-target);
	ans=Math.min(arr[i],arr[i+1]);
	if(ans==arr[i]){
		return sum[i];
	}
}
	// return ans;
  
}

module.exports = threeSum;
