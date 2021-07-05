import * as constant from './constant.js';

export const padStart = (string, length, pad) => {
	const s = String(string);
	if (!s || s.length >= length) return string;
	return `${Array(length + 1 - s.length).join(pad)}${string}`;
};

export const prettyUnit = (unit) => {
	const special = {
		M: constant.M,
		y: constant.Y,
		w: constant.W,
		d: constant.D,
		D: constant.DATE,
		h: constant.H,
		m: constant.MIN,
		s: constant.S,
		ms: constant.MS,
		Q: constant.Q,
	};

	return (
		special[unit] ||
		String(unit || '')
			.toLowerCase()
			.replace(/s$/, '')
	);
};
