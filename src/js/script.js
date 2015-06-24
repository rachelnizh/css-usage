var props = [
    {
    	name: "background",
    	percentage: 90,
    	values: [
    		{
    			name: "green",
    			count: "5"
    		},
    		{
    			name: "url",
    			count: "300"
    		}
    	],
    	trend: [ 
	    	{
	    		date: "4/22/2015",
	    		percentage: 89
	    	},
	    	{
	    		date: "6/22/2015",
	    		percentage: 91
	    	}
    	],
    	urls: [
    		{
    			url: "www.google.com",
    			rank: 1
    		},
    		{
    			url: "www.bing.com",
    			rank: 26
    		},
    		{
    			url: "www.apple.com",
    			rank: 48
    		},
    		{
    			url: "www.tumblr.com",
    			rank: 41
    		}
    	]    	
    }
	];

var propertynav = document.getElementById("props");
var valuesnav = document.getElementById("prop-values");
var trendnav = document.getElementById("prop-trends");
var urlnav = document.getElementById("prop-urls");
var propertyname = document.getElementsByClassName('property-name');

props.forEach(function(prop) {
	for (var i = 0; i < propertyname.length; i++) {
	    propertyname[i].innerHTML = prop.name;
	}
	var newprop = document.createElement("li");
	newprop.innerHTML = '<a href="./index.html?prop=' + prop.name + '">' + prop.name + " " + prop.percentage + "%" + "</a>"; 
	propertynav.appendChild(newprop);

	for (var i = 0; i < prop.values.length; i++) {
		var value = prop.values[i];
		var newvalue = document.createElement("li");
		newvalue.innerHTML = value.name + " " + value.count;
		valuesnav.appendChild(newvalue);
	};
	 for (var i = 0; i < prop.trend.length; i++) {
	 	var trend = prop.trend[i];
		var newtrend = document.createElement("li");
		newtrend.innerHTML = trend.date + " " + trend.percentage;
		trendnav.appendChild(newtrend);
	};
	 for (var i = 0; i < prop.urls.length; i++) {
	 	var url = prop.urls[i];
		var newurl = document.createElement("li");
		newurl.innerHTML = url.url + " " + url.rank;
		urlnav.appendChild(newurl);
	};
});