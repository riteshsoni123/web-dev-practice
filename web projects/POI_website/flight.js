


var button = document.querySelector('.btn');
var origin = document.querySelector('.origin');
var destination = document.querySelector('.destination');





btn.addEventListener('click', function () {

	fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/${origin.value}/INR/${origin.value}/${origin.value}/${destination.value}/2021-08-21?inboundpartialdate=2021-08-21`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "05dce523ffmshb8fc17a05f8c86ap156854jsn4d098c6ba72f",
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
		}
	})
		.then(resp => resp.json())
		.then(result => {
			console.log(result);
		});

});





