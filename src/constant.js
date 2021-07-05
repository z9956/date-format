export const MS = 'millisecond';
export const S = 'second';
export const MIN = 'minute';
export const H = 'hour';
export const D = 'day';
export const W = 'week';
export const M = 'month';
export const Q = 'quarter';
export const Y = 'year';
export const DATE = 'date';

export const FORMAT_DEFAULT = 'YYYY-MM-DD d HH:mm:ss';

export const REGEX_PARSE =
	/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
export const REGEX_FORMAT =
	/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
