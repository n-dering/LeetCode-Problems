function twoSum(nums: number[], target: number): number[] {
	//this spread is for copying original array since "=" is making only reference
	let x = [...nums];
	let index_1 = 0;
	let index_2 = 0;

	for (const number of nums) {
		for (const number_2 of x.slice(1, nums.length)) {
			if (number + number_2 === target) {
				index_2 = nums.lastIndexOf(number_2);
				return [index_1, index_2];
			}
		}
		x.shift();
		index_1++;
	}
	return [];
}

console.log(twoSum([1, 3, 4, 2], 6));
