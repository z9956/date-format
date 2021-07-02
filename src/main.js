class DateFormat {
	constructor(dateString) {
		this.parse(dateString);
	}

	parse(dateString) {
		this.$d = parseDate(dateString);
		this.init();
	}

	init() {
		const $d = this.$d;

		this.$y = $d.getFullYear();
		this.$M = $d.getMonth();
		this.$D = $d.getDate();
		this.$W = $d.getDay();
		this.$H = $d.getHours();
		this.$m = $d.getMinutes();
		this.$s = $d.getSeconds();
		this.$ms = $d.getMilliseconds();
	}

	valueOf() {
		return this.$d.getTime();
	}

	unix() {
		return Math.floor(this.valueOf() / 1000);
	}

	format(formatStr) {
		return this.$d;
	}

	diff() {}

	add() {}

	set() {}

	get() {}

	year() {
		return this.$y;
	}
}

/**
 * @param { string } dateString
 */
const parseDate = (dateString) => {
	if (typeof dateString === 'string') {
		return new Date(Date.parse(dateString));
	}

	return new Date();
};

/**
 * @param { string } dateString
 */
const dateFormat = (dateString) => {
	return new DateFormat(dateString);
};
export default dateFormat;
