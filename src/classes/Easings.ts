export default class Easings {

	public static easeInOutCubic(x: number): number {
		return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
	}

	public static easeInOutQuart(x: number): number {
		return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
	}

	public static easeInOutQuad(x: number): number {
		return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
	}

	public static easeInOutExpo(x: number): number {
		return x === 0
			? 0
			: x === 1
				? 1
				: x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
					: (2 - Math.pow(2, -20 * x + 10)) / 2;
	}

	public static easeInQuad(x: number): number {
		return x * x;
	}
	
	public static easeOutQuad(x: number): number {
		return 1 - (1 - x) * (1 - x);
	}

	public static easeOutCubic(x: number): number {
		return 1 - Math.pow(1 - x, 3);
	}

	public static easeInOutSine(x: number): number {
		return -(Math.cos(Math.PI * x) - 1) / 2;
	}
}