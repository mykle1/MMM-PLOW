/* Magic Mirror
 * Module: MMM-WWX
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-WWX",{

	defaults: {
			latLong: "", // Your latitude and longitude seperated by a comma
			tempUnits: "", // us = F or uk for C
			color: "",
			font: ""
	},

	getStyles: function() {
        return ["MMM-WWX.css"];
    },


	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.scrolling = "no";
		type="text/javascript";

	//	Tomorrow try double quotes interior and single quotes for the entire url


        iframe.srcdoc = `<html>

<body>



<iframe srcdoc="<html>

<body>

<script type='text/javascript' src='https://darksky.net/widget/default/40.683,-73.9708/us12/en.js?width=100%&height=350&title=New York, NY&textColor=ffffff&bgColor=000000&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes'></script>

</body>

<html>"></iframe>



</body>

<html>>`;



        // smallest
				// iframe.src = 'https://darksky.net/widget/default-small/'+this.config.latLong+'/'+this.config.tempUnits+'12/en.js?width=120&height=60&title=Full Forecast&textColor='+this.config.color+'&bgColor=000000&skyColor=DCFF4D&fontFamily='+this.config.font+'';

				// smallest with today's forecast
				// iframe.src = 'https://darksky.net/widget/small/'+this.config.latLong+'/'+this.config.tempUnits+'12/en.js?width=160&height=60&title=Full Forecast&textColor='+this.config.color+'&bgColor=000000&skyColor=DCFF4D&fontFamily='+this.config.font;



		return iframe;
	},

});
