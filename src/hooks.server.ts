import type { Handle } from '@sveltejs/kit'
import { dev } from '$app/environment'

// content-security-policy
// compat w/ cloudflare: https://developers.cloudflare.com/fundamentals/reference/policies-compliances/content-security-policies/
const csp: Record<string, string[]> = {
	'frame-ancestors': ['\'none\''],
	'default-src': ['\'self\''],
	'connect-src': ['\'self\'', 'cloudflareinsights.com'],
	'script-src': ['\'self\'', 'static.cloudflareinsights.com'],
	'style-src': ['\'self\''],
}
if (dev) {
	csp['connect-src'].push('ws:')
	csp['script-src'].push('\'unsafe-inline\'')
	csp['style-src'].push('\'unsafe-inline\'')
}

const cspValue = Object.entries(csp)
	.map(([key, arr]: [string, string[]]) => `${key} ${arr.join(' ')}`)
	.join('; ')

// ALL the headers
const httpHeaders = {
	'Content-Security-Policy': cspValue,
	'Permissions-Policy': 'geolocation=(), camera=(), microphone=()',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Strict-Transport-Security': 'max-age=15768000; includeSubdomains',
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
