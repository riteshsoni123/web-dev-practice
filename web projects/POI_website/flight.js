


var button = document.querySelector('.btn');
var origin = document.querySelector('.origin');
var destination = document.querySelector('.destination');
origin.value = "IN";
destination.value = "US";


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
			let count=0;
			for (let i = 0; i < 50; i++) {

				let destinationId=result["Routes"][i]["DestinationId"];
				let price=result["Routes"][i]["Price"];
				let datetime=result["Routes"][i]["QuoteDateTime"];

				if (price != undefined) {

					console.log("Number=",count);
					console.log("price=",price);

					let quoteId=result["Routes"][i]["QuoteIds"][0];
					let quotelength=result["Quotes"]["length"];

					quotelength=Number(quotelength);

					for(let j=0;j<quotelength;j++){

						if(quoteId==result['Quotes'][j]['QuoteId']){

							let departureDate=result['Quotes'][j]['OutboundLeg']['DepartureDate'];
							let originId=result['Quotes'][j]['OutboundLeg']['OriginId'];
							let carrierId=result['Quotes'][j]['OutboundLeg']['CarrierIds'][0];
							let placelength=result['Places']['length'];

							console.log("DepartureDate=",departureDate);

							placelength=Number(placelength);

							for(let k=0;k<placelength;k++){

								if(destinationId==result['Places'][k]['PlaceId']){

									let destinationCity=result['Places'][k]['CityName'];
									let destinationCountry=result['Places'][k]['CountryName'];

									console.log("DestinationCity=",destinationCity);
									console.log("DestinatonCountry=",destinationCountry);

								}
								else if(originId==result['Places'][k]['PlaceId']){

									let originCity=result['Places'][k]['CityName'];
									let originCountry=result['Places'][k]['CountryName'];

									console.log("OriginCity=",originCity);
									console.log("OriginCountry=",originCountry);

								}
								else{
									continue;
								}
							}

							let carrierlength=result['Carriers']['length'];

							carrierlength=Number(carrierlength);

							for(let k=0;k<carrierlength;k++){

								if(carrierId==result['Carriers'][k]['CarrierId']){

									let carrierName=result['Carriers'][k]['Name'];
									console.log("CarrierName=",carrierName);

								}
							}

						}
					}
					count++;
					if(count==3){
						break;
					}
				}

			}

		});

});





