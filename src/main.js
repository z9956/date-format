import * as constant from './constant.js';
import { prettyUnit, padStart } from './utils.js';

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
		const str = formatStr ?? constant.FORMAT_DEFAULT;

		let { $y, $M, $D, $W, $H, $m, $s, $ms } = this;

		$M = $M + 1;

		const matches = {
			YY: String($y).slice(-2),
			YYYY: $y,
			M: $M,
			MM: padStart($M, 2, 0),
			D: $D,
			DD: padStart($D, 2, 0),
			d: $W,
			H: String($H),
			HH: padStart($H, 2, 0),
			m: String($m),
			mm: padStart($m, 2, 0),
			s: String($s),
			ss: padStart($s, 2, 0),
		};

		return str.replace(
			constant.REGEX_FORMAT,
			(match, $1) => $1 || matches[match] || '',
		);
	}

	add(number, units) {
		number = Number(number);
		const unit = prettyUnit(units);
		let { $y, $M, $D, $H, $m, $s, $ms } = this;

		switch (unit) {
			case constant.Y:
				$y += number;
				break;
			case constant.M:
				$M += number;
				break;
			case constant.D:
				$D += number;
				break;
			case constant.H:
				$H += number;
				break;
			case constant.MIN:
				$m += number;
				break;
			case constant.S:
				$s += number;
				break;
			case constant.MS:
				$ms += number;
				break;
			default:
				break;
		}

		this.parse(new Date($y, $M, $D, $H, $m, $s, $ms));
		return this;
	}

	year() {
		return this.$y;
	}
}

/**
 * @param { string } dateString
 */
const parseDate = (dateString) => {
	if (typeof dateString === 'string') {
		return new Date(dateString);
	} else if (dateString instanceof Date) {
		return new Date(dateString);
	}

	return new Date();
};

/**
 * @param { string } dateString
 */
let dateFormat = (dateString) => {
	return new DateFormat(dateString);
};
export default dateFormat;
