import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
	{
		ignores: [
			'.svelte-kit/',
		],
	},
	stylistic.configs.customize({
		indent: 'tab',
		quote: 'single',
		semi: false,
		jsx: false,
	}),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		rules: {
			'no-explicit-any': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
)
