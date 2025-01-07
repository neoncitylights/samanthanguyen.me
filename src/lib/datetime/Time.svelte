<script lang="ts">
	import { formatAttribute } from './dates'

	type Options = Intl.DateTimeFormatOptions
	export let date: Date
	export let locale = 'en-US'
	export let calendar: Options['calendar'] = undefined
	export let dayPeriod: Options['dayPeriod'] = undefined
	export let numberingSystem: Options['numberingSystem'] = undefined
	export let dateStyle: Options['dateStyle'] = undefined
	export let timeStyle: Options['timeStyle'] = undefined
	export let hourCycle: Options['hourCycle'] = undefined
	export let formatMatcher: Options['formatMatcher'] = undefined
	export let fractionalSecondDigits: Options['fractionalSecondDigits'] = undefined

	const formatter = new Intl.DateTimeFormat(locale, {
		calendar: calendar,
		dayPeriod: dayPeriod,
		numberingSystem: numberingSystem,
		dateStyle: dateStyle,
		timeStyle: timeStyle,
		hourCycle: hourCycle,
		formatMatcher: formatMatcher,
		fractionalSecondDigits: fractionalSecondDigits,
	})
	const value = formatter.format(date)
	const attribute = formatAttribute(date, timeStyle, dateStyle)
</script>

<time datetime={attribute}>
	{value}
</time>
