// let clintid="L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
// let clintsecret="3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";

// fetch(`https://api.foursquare.com/v2/venues/explore/search?ll=40.7,-74&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
// ).then(resp => resp.json())
// .then(result => console.log(result));


//this is to extract the restaurents near any places
// let clintid="L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
// let clintsecret="3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";

// fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=mumbai&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
// ).then(resp => resp.json())
// .then(result => console.log(result));










///this is to extract point of interest in the city
let clintid = "L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
let clintsecret = "3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";

fetch(`https://api.foursquare.com/v2/venues/explore?cat=arts&mode=url&near=india&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
).then(resp => resp.json())
    .then(result => {
        console.log(result);
        console.log(result['response']['groups'][0]['items'][0]['venue']);
        let tmp = result['response']['groups'][0]['items'][0]['venue'];
        let address = tmp['location']['formattedAddress'];
        let id = tmp['id'];
        console.log(address);
        console.log(id);

        fetch(`https://api.foursquare.com/v2/venues/${id}/photos?&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
        ).then(resp => resp.json())
        .then(photo => {
            console.log(photo);
            let link='';
            // photo['response']['photos']['items'][0]['source']
            console.log(photo['response']['photos']['items'][0]['source']);
            let source=photo['response']['photos']['items'][0];
            let prefix=source['prefix'];;
            let suffix=source['suffix'];;
            link=`${prefix}300x300${suffix}`;
            console.log(link);

        });

    });





/////this is to extract photos of venue
// let clintid="L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
// let clintsecret="3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";
// let id="4b0587caf964a520f1a122e3";

// fetch(`https://api.foursquare.com/v2/venues/${id}/photos?&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
// ).then(resp => resp.json())
// .then(result => console.log(result));