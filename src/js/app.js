"use strict";

// this uses greg haygood's simple twitter API proxy
// https://github.com/greghaygood/wd4-ajax-twitter
// with an added CORS fix.
const TWITTER_API_BASE = "http://localhost:8888/twitter-proxy.php"; 

const router = new VueRouter({
	routes: [
		{ path: '', component: HomeComponent },
		{ path: '/tweets', component: TweetFeedComponent },
	]
})

var app = new Vue({
	el: "#app",
	router: router,
	data() { // dont need to do this, but why not be uniform with components
		return {
			hashtag: "#cats",
			countdown: 20,
			tweets: [],
		}
	},
	created: function() {
		// use created to do initial AJAX lookups
		console.log("app created");
		this.getTweets();
		setInterval(this.tickCountdown, 1000);
	},
	methods: {
		getTweets: function() {
			if (!this.hashtag) {
				this.tweets = [];
			}
			var uri = TWITTER_API_BASE + '?op=search_tweets&q=' + encodeURIComponent(this.hashtag);
			console.log('getTweets', uri);
			axios.get(uri)
				.then((response) => {
					console.log(response);
					if (response && response.data && response.data.statuses) {
						this.tweets = response.data.statuses;
					} else {
						console.warn("Valid response from twitter api/proxy, but bad data");
						this.tweets = [];
					}
				})
				.catch((error) => {
					console.warn(error);
				});
		},
		tickCountdown() {
			this.countdown--;
			if (!this.countdown) {
				this.getTweets();
				this.restartCountdown();
			}
		},
		restartCountdown() {
			this.countdown = 20;
		}
	},
	watch: {
		hashtag: function() {
			console.log("watch hashtag tripped", this);
			this.getTweets();
			this.restartCountdown();
		}
	}
})



