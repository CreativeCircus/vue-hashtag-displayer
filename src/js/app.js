const TWITTER_API_BASE = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php"; 

const router = new VueRouter({
	routes: [
		{ path: '', component: HomeComponent },
	]
})

var app = new Vue({
	el: "#app",
	router: router,
	data: {},
	created: function() {
		// use created to do initial AJAX lookups
		this.getTweets();
	},
	methods: {
		getTweets: function() {
			if (!this.hashtag) {
				this.tweets = [];
				return;
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
		}
	}
})



