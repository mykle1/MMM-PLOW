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
			animationSpeed: 3000,
			updateInterval: 30 * 60 * 1000,
	},

	// use double quotes outside, single quotes inside
	// and use \ as the line continuation character

	jswrapper_front:"<html><body><script type='text/javascript' src='",

  /////////////////// Reminder to self, DO NOT edit the next line. Edit this.iframe_src in the getDom///////////////////
  iframe_src: "https://darksky.net/widget/default/40.683,-74.9708/us12/en.js?width=100%&height=350&title=This is like a header&textColor=ffffff&bgColor=000000&fontFamily=Default&htColor=ffffff&ltColor=00dfff&displaySum=yes&displayHeader=yes", /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	jswrapper_back: "'></script></body><html>",


	start: function () {
	self = this;

	// ADDED: Schedule update timer courtesy of ninjabreadman
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


		// type="text/javascript";
    // insert config options
    this.iframe_src= "https://darksky.net/widget/"+this.config.style+"/"+this.config.latLong+"/"+this.config.tempUnits+"12/"+this.config.languages+".js?width=100%&height=350&title="+this.config.title+"&textColor="+this.config.textColor+"&bgColor=000000&fontFamily="+this.config.font+"&htColor="+this.config.htColor+"&ltColor="+this.config.ltColor+"&displaySum="+this.config.displaySum+"&displayHeader="+this.config.displayHeader+"&timeColor="+this.config.timeColor+"&tempColor="+this.config.tempColor+"&currentDetailsOption="+this.config.currentDetails+"&graph="+this.config.graphType+"&lineColor="+this.config.lineColor+"&markerColor="+this.config.markerColor+""  + new Date();

    // join the parts in the Dom
    iframe.srcdoc = this.jswrapper_front+this.iframe_src+this.jswrapper_back;

		return iframe;
	},

});
