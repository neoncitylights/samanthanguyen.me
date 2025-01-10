import type { Handle } from '@sveltejs/kit'

const httpHeaders = {
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'X-XSS-Protection': '0',
}

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)
	Object.entries(httpHeaders).forEach(
		([header, value]) => response.headers.set(header, value),
	)

	return response
}
