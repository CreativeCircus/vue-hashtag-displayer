var TweetFeedComponent = Vue.component("tweet-feed", {
	template: `
		<div class="tweetfeed">
			<hashtag-form :hashtag="hashtag"></hashtag-form>
			<p>Showing {{tweets.length}} tweet<span v-if="tweets.length != 1">s</span> containing "{{hashtag}}"</p>
			<clock :countdown="countdown"></clock>
			<ul class="tweets" v-if="tweets.length">
				<li v-for="tweet in tweets">
					{{tweet.text}}
				</li>
			</ul>
			<router-link class="nav" to="/">&lt;back</router-link>	
			
		</div>
	`,
	props: ["countdown", "hashtag", "tweets"],
	
})
