export const decOfNum = (num: number, arr: string[]) => {
	let decCache: number[] = [],
		decCases = [2, 0, 1, 1, 1, 2]

	if (!decCache[num])
		decCache[num] =
			num % 100 > 4 && num % 100 < 20 ? 2 : decCases[Math.min(num % 10, 5)]

	return arr[decCache[num]]
}
