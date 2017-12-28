var ClockComponent = Vue.component("clock", {
	template: `
		<p>Fetching new tweets in {{countdown}}s</p>
	`,
	props: ["countdown"],
})
