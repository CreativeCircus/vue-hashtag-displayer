"use strict";

var HashtagFormComponent = Vue.component("hashtag-form", {
	template: "\n\t\t<div>\n\t\t\t<input v-model=\"localHashtag\" placeholder=\"#cats\" @keyup=\"hashtagChange\">\n\t\t</div>\n\t",
	props: ["hashtag", "tweets"],
	data: function data() {
		return {
			localHashtag: ""
		};
	},
	created: function created() {
		this.localHashtag = this.hashtag;
	},
	methods: {
		hashtagChange: function hashtagChange() {
			// console.log("hashtag has changed", this);
			if (this.localHashtag.length > 0 && this.localHashtag[0] != "#") {
				this.localHashtag = "#" + this.localHashtag;
			}
			if (this.localHashtag.length > 3 && this.localHashtag != this.$root.hashtag) {
				this.$emit("hashtag", this.localHashtag);
			} else {
				this.$emit("hashtag", "");
			}
		}
	}
});
//# sourceMappingURL=HashtagFormComponent.js.map
