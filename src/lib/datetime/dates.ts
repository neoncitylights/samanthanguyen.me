export type DateTimeKind = 'datetime' | 'date' | 'time'
export const getKind = (
	timeStyle: Intl.DateTimeFormatOptions['timeStyle'],
	dateStyle: Intl.DateTimeFormatOptions['dateStyle'],
): DateTimeKind => {
	const isTimeDefined = timeStyle !== undefined
	const isDateDefined = dateStyle !== undefined

	if (isTimeDefined && !isDateDefined) {
		return 'time'
	}
	else if (isDateDefined && !isTimeDefined) {
		return 'date'
	}
	else {
		return 'datetime'
	}
}

const padZero = (n: number, max: number = 2) =>
	n.toString().padStart(max, '0')

export const formatDate = (d: Date) =>
	`${d.getUTCFullYear()}-${padZero(d.getUTCMonth() + 1)}-${padZero(d.getUTCDate())}`

export const formatTime = (d: Date, timeStyle: 'short' | 'medium' | 'long' = 'short') => {
	const hour = padZero(d.getUTCHours())
	const min = padZero(d.getUTCMinutes())
	const sec = padZero(d.getUTCSeconds())
	const milli = padZero(d.getUTCMilliseconds(), 3)

	switch (timeStyle) {
		case 'short': return `${hour}:${min}`
		case 'medium': return `${hour}:${min}:${sec}`
		case 'long': return `${hour}:${min}:${sec}.${milli}`
	}
}

/**
 * Format a date for a `datetime` HTML attribute value used in
 * `<time>` elements.
 */
export const formatAttribute = (
	d: Date,
	timeStyle: Intl.DateTimeFormatOptions['timeStyle'],
	dateStyle: Intl.DateTimeFormatOptions['dateStyle'],
): string => {
	const kind = getKind(timeStyle, dateStyle)
	switch (kind) {
		case 'date': return formatDate(d)
		case 'time': return formatTime(d)
		case 'datetime': return `${formatDate(d)}T${formatTime(d)}`
	}
}
