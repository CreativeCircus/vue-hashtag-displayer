var HashtagFormComponent = Vue.component("hashtag-form", {
	template: `
		<div>
			<input v-model="localHashtag" placeholder="#cats" @keyup="hashtagChange">
		</div>
	`,
	props: ["hashtag", "tweets"],
	data: () => {
		return {
			localHashtag: ""
		}
	},
	created: function() {
		this.localHashtag = this.hashtag;
	},
	methods: {
		hashtagChange: function() {
			console.log("hashtag has changed", this);
			if (this.localHashtag.length > 0 && this.localHashtag[0] != "#") {
				this.localHashtag = "#" + this.localHashtag;
			}
			if (this.localHashtag.length > 3 && this.localHashtag != this.$root.hashtag) {
				this.$root.hashtag = this.localHashtag;
			} else {
				this.$root.hashTag = "";
			}
		}
	}
})
