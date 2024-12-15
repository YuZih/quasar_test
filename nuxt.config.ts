// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	ssr: true,
	typescript: {
		typeCheck: true,
		strict: true,
	},
	modules: ['nuxt-quasar-ui'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	},

	quasar: {
		plugins: ['Dialog', 'Notify'],
		sassVariables: '~/assets/scss/_quasar.variables.scss',
		// sassVariables: true,
		quietSassWarnings: true,
	},
})
