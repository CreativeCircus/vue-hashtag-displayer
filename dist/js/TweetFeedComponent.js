"use strict";

var TweetFeedComponent = Vue.component("tweet-feed", {
	template: "\n\t\t<div class=\"tweetfeed\">\n\t\t\t<hashtag-form :hashtag=\"hashtag\"></hashtag-form>\n\t\t\t<p>Showing {{tweets.length}} tweet<span v-if=\"tweets.length != 1\">s</span> containing \"{{hashtag}}\"</p>\n\t\t\t<clock :countdown=\"countdown\"></clock>\n\t\t\t<ul class=\"tweets\" v-if=\"tweets.length\">\n\t\t\t\t<li v-for=\"tweet in tweets\">\n\t\t\t\t\t{{tweet.text}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<router-link class=\"nav\" to=\"/\">&lt;back</router-link>\t\n\t\t\t\n\t\t</div>\n\t",
	props: ["countdown", "hashtag", "tweets"]

});
//# sourceMappingURL=TweetFeedComponent.js.map
