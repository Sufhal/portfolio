export default class Utils {

	public static normalizeValueBetween(value: number, min: number, max: number) {
		return (value - min) / (max - min);
	}

	public static denormalizeValueBetween(value: number, min: number, max: number) {
		return value * (max - min) + min;
	}

}