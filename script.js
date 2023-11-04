function threeSum(arr, target) {
// write your code here
  var sum=undefined;
		var ans;
		let least=Infinity;
		for(let i=0;i<arr.length-2;i++){
			for(let j=i+1;j<arr.length-1;j++){
				for(let k=j+1;k<arr.length;k++){
					if(sum!=undefined){
						let presentsum=arr[i]+arr[j]+arr[k];
						let premin=sum-target;
						let present=presentsum-target;
						let minval=Math.min(Math.abs(premin,present));
					
						if(minval<least){
							least=minval;
								if(minval==premin){
							ans=sum;
						}
						else{
							ans=presentsum;
						}
						}
						
						
					}
					sum=arr[i]+arr[j]+arr[k];
				}
			}
		}
		return ans;
}
module.exports = threeSum;
