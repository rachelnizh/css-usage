document.addEventListener('DOMContentLoaded', function() {
    //SO MUCH DATA
    var parsedresults = JSON.parse(results);
    var props = parsedresults.props;

    //Variable declarations for DOM elements
    var propertynav = document.getElementById("props");
    var propvalues = document.getElementById("prop-values");
    var proptrend = document.getElementById("prop-trends");
    var proppercent = document.getElementsByClassName("prop-percent");
    var propurls = document.getElementById("prop-urls");
    var propranks = document.getElementById("prop-ranks");
    var propcount = document.getElementById('prop-count');
    var propertyname = document.getElementsByClassName('property-name');

    
    //PROPERTY NAMES NAVIGATION
    props.forEach(function(prop) {
        var newprop = document.createElement("li");       
        newprop.innerHTML = '<a href="#' + prop.name + '">' + prop.name + '</a>';        
        //newprop.innerHTML = '<a href="#"' + '">' + prop.name + " " + ppercent + "%" + '</a>';
        //newprop.innerHTML = '<a href="./index.html?prop=' + prop.name + '">' + prop.name + " " + ppercent + "%" + '</a>';
        newprop.setAttribute("id", prop.name);
        propertynav.appendChild(newprop);      

        //Prevent page jumping when property is clicked
        document.getElementById(prop.name).addEventListener("click", function(stopJump) {
        	stopJump.preventDefault()
        });

        //When a property is clicked load the data
        document.getElementById(prop.name).addEventListener("click", loadPropData);
        function loadPropData() {    
            document.getElementById(prop.name);
            //add active class to selected property
            //newprop.className += " active"; 

            //PROPERTY NAME DATA
            for (var i = 0; i < propertyname.length; i++) {
                propertyname[i].innerHTML = prop.name;
            }
            
            //PROPERTY COUNT DATA
            propcount.innerHTML = prop.totalUniqueCount;

            //PROPERTY PERCENTAGE DATA
        	var ppercent = Math.round(prop.percentage*100); //converting to percentage rather decimal by *100
            for (var i = 0; i < proppercent.length; i++) {
                proppercent[i].innerHTML = ppercent;
            }

            //TREND DATA
            var propertytrend = prop.trend;
            var propertylayout = "";

            for (var i = 0; i < propertytrend.length; i++) {
	            var trenddate = prop.trend[i].date;
	            var trendpercentage = prop.trend[i].percentage;
	            var newtrend = document.createElement("li");

	            newtrend.innerHTML = trenddate + " " + trendpercentage;
	            propertylayout += newtrend.outerHTML;

	        	if (i == propertytrend.length -1) {
	           		proptrend.innerHTML = propertylayout;
                }
            }

            //VALUES DATA
		    //HIGHCHARTS PIE GRAPH
		    var options = {
			    chart: {
			        renderTo: 'pie-chart',
			        type: 'pie'
			    },
		        title: {
		            text: " "
		        },		
		        tooltip: {
            		pointFormat: '<b>{point.percentage:.1f}%</b>'
        		},	 
        		plotOptions: {
        			pie: {
        				allowPointSelect: true,
        				dataLabels: {
        					distance: 50,
        					enabled: true,
        				    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        				}
        			}
        		},   
			    series: [{
			    }]
			};
            
            //Variable to keep propvalues empty so it doesn't append when a new prop is clicked
            var propertyvalues = prop.values;
			var piechartobjects = [];            			

            //Add property values to prop-values list or graph
            for (var i = 0; i < propertyvalues.length; i++) {
                var valuename = prop.values[i].name;
                var valuepercentage = (Math.round(prop.values[i].percentage*100)); //converting to percentage rather decimal by *100
                var valuecount = prop.values[i].count;
                var valuetrend = prop.values[i].trend;
                var piechartobject = {};

				piechartobject['name'] = valuename;
				piechartobject['y'] = valuepercentage;

				piechartobjects[i]  = piechartobject;

            }

			options.series.push({
			    data: piechartobjects
			});

			$(document).ready(function() {
			    var chart = new Highcharts.Chart(options);
			});

            //URLS DATA
            var propertyurls = prop.urls;
            var urlslayout = "";
            var ranklayout = "";

            for (var i=0; i < 10; i++) {
            	var url = prop.urls[i].url;
            	var rankglobal = prop.urls[i].rankGlobal;

            	var newurl = document.createElement("li");
            	var newrank = document.createElement("li");

            	newrank.innerHTML = rankglobal;
            	newurl.innerHTML = url;

            	ranklayout += newrank.outerHTML;
            	urlslayout += newurl.outerHTML;
            }
            
            propranks.innerHTML = ranklayout;
            propurls.innerHTML = urlslayout;

        }
    });
});