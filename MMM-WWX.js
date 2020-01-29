/* Magic Mirror
 * Module: MMM-WWX
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-WWX",{

	defaults: {
		  languages: "",              // See language list
		  style: "",                  // See Style list
			latLong: "",                // Your latitude and longitude seperated by a comma
			title: "",                  // Location seems the most logical
			tempUnits: "",              // us = F or uk for C
			textColor: "",              // Hex color codes. No #
			font: "",                   // See font list
			htColor: "",                // high temp color.  Hex color codes. No #
			ltColor: "",                // low temp color.  Hex color codes. No #
			displaySum: "",             // Display Summary, yes or no
			displayHeader: "",          // yes or no
			timeColor: "",              // for graph-bar. Hex color codes. No #
			tempColor: "",              // for graph-bar. Hex color codes. No #
			currentDetails: "",         // for graph-bar. true or false
			graphType: "",              // when style is graph
			lineColor: "",              // when style is graph.  Hex color codes. No #
			markerColor: "",            // when style is graph.  Hex color codes. No #

			height: "",                 // when style is responsive
			width: "",                  // when style is responsive
			location: "",               // See instructions for location when style is responsive
			locationCode: "",           // See instructions for locationCode when style is responsive
			label: "",                  // when style is responsive
			label2: "",                 // when style is responsive
			days: "",                   // when style is responsive *** 3, 5 or 7 ***
			theme: "",                  // dark or random_grey
			animationSpeed: 3000,
			updateInterval: 15 * 60 * 1000,
	},

	// use double quotes outside, single quotes inside
	// and use \ as the line continuation character

	jswrapper_front:"<html><body><script type='text/javascript' src='",

  /////////////////// Reminder to self, DO NOT edit the next line. Edit this.iframe_src in the getDom///////////////////
  iframe_src: "https://darksky.net/widget/default/40.683,-74.9708/us12/en.js?width=100%&height=350&title=This is like a header&textColor=ffffff&bgColor=000000&fontFamily=Default&htColor=ffffff&ltColor=00dfff&displaySum=yes&displayHeader=yes", /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	jswrapper_back: "'></script></body><html>",

	start: function () {
	self = this;

	// update timer
	setInterval(function() {
	self.updateDom(self.config.animationSpeed || 0); // use config.animationSpeed or revert to zero @ninjabreadman
	}, this.config.updateInterval);
},


	getStyles: function() {
        return ["MMM-WWX.css"];
    },

	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.scrolling = "no";

		if (this.config.style === "default") {
			iframe.style.width = "620px";
			iframe.style.height = "310px";
		}
		if (this.config.style === "default-small") {
			iframe.style.width = "144px";
			iframe.style.height = "210px";
		}
		if (this.config.style === "small") {
			iframe.style.width = "304px";
			iframe.style.height = "200px";
		}
		if (this.config.style === "graph-bar") {
			iframe.style.width = "800px";
			iframe.style.height = "400px";
		}
		if (this.config.style === "graph") {
			iframe.style.width = "820px";
			iframe.style.height = "400px";
    }

		if (this.config.style === "responsive") {
			iframe.style.height = this.config.height;
			iframe.style.width = this.config.width;
    }

		// type="text/javascript";
    // insert config options
    this.iframe_src= "https://darksky.net/widget/"+this.config.style+"/"+this.config.latLong+"/"+this.config.tempUnits+"12/"+this.config.languages+".js?width=100%&height=350&title="+this.config.title+"&textColor="+this.config.textColor+"&bgColor=000000&fontFamily="+this.config.font+"&htColor="+this.config.htColor+"&ltColor="+this.config.ltColor+"&displaySum="+this.config.displaySum+"&displayHeader="+this.config.displayHeader+"&timeColor="+this.config.timeColor+"&tempColor="+this.config.tempColor+"&currentDetailsOption="+this.config.currentDetails+"&graph="+this.config.graphType+"&lineColor="+this.config.lineColor+"&markerColor="+this.config.markerColor+""  + new Date();

		if (this.config.style !== "responsive") {
    iframe.srcdoc = this.jswrapper_front+this.iframe_src+this.jswrapper_back;
   }

	 if (this.config.tempUnits === "us") {
		 this.config.tempUnits = "?unit=us";
	 }

	 if (this.config.tempUnits === "uk") {
		 this.config.tempUnits = "";
	 }

	 if (this.config.style === "responsive") {
		// join the parts in the Dom
		iframe.srcdoc = `<a class="weatherwidget-io" href="https://forecast7.com/${this.config.languages}/${this.config.locationCode}/${this.config.location}/${this.config.tempUnits}" data-label_1="${this.config.label}" data-label_2="${this.config.label2}" data-font="Roboto" data-icons="Climacons Animated" data-days="${this.config.days}" data-theme="${this.config.theme}" data-textcolor="#${this.config.textColor}" data-highcolor="#${this.config.htColor}" data-lowcolor="#${this.config.ltColor}" ></a>
		<script>
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
		</script>`+ new Date();
   }
		return iframe;
	},

});
