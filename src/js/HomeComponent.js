var HomeComponent = Vue.component("home", {
	template: `
		<div class="home">
			<h1>Welcome</h1>
			<p>Enter a hashtag to see an auto-updating feed of tweets about it.</p>
			<router-link class="nav" to="/tweets">Got it.</router-link>	
		</div>
	`,
	// props: ["tweets"]
})
