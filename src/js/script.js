// var jsondata = '{
// 	"employees":[
//     {
//     	"firstName":"John", 
//     	"lastName":"Doe"
//     },
//     {
//     	"firstName":"Anna", 
//     	"lastName":"Smith"
//     },
//     {
//     	"firstName":"Peter", 
//     	"lastName":"Jones"
//     }
// 	]
// }'

// function functionFoo() {
// 	document.getElementById("foo").innerHTML = jsondata.props[0];
// }

window.onload = function () {
	var jsondata = [
	    {
	    	"firstName":"John", 
	    	"lastName":"Doe"
	    },
	    {
	    	"firstName":"Anna", 
	    	"lastName":"Smith"
	    },
	    {
	    	"firstName":"Peter", 
	    	"lastName":"Jones"
	    }
		]

	var obj = JSON.parse(jsondata);

function myfunction() {
		document.getElementById("foo").innerHTML = jsondata[0].firstName;
	}
}
