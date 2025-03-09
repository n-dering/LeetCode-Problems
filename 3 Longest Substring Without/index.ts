function lengthOfLongestSubstring(s: string): number {
	let maxLength = 0;
	const characters = s.split("");

	if (characters.length === 0) {
		return 0;
	}

	for (const [index, char] of characters.entries()) {
		let currentSubstring: Array<string> = [char];

		for (const [nextIndex, nextChar] of characters.slice(index + 1).entries()) {
			if (currentSubstring.length > maxLength) {
				maxLength = currentSubstring.length;
			}

			if (currentSubstring.includes(nextChar)) {
				break;
			}

			if (!nextChar) break;
			currentSubstring.push(nextChar);
		}

		if (currentSubstring.length > maxLength) {
			maxLength = currentSubstring.length;
		}
	}

	return maxLength;
}

let result = lengthOfLongestSubstring("tmmzuxt");
console.log(result);
