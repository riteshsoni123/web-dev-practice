let clintid="L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
let clintsecret="3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";

fetch(`https://api.foursquare.com/v2/venues/explore/search?ll=40.7,-74&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
).then(resp => resp.json())
.then(result => console.log(result));

let clintid="L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
let clintsecret="3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";

fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=mumbai&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
).then(resp => resp.json())
.then(result => console.log(result));

///this is to extract point of interest in the city
let clintid="L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
let clintsecret="3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";

fetch(`https://api.foursquare.com/v2/venues/explore?cat=arts&mode=url&near=mumbai&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
).then(resp => resp.json())
.then(result => console.log(result));


/////this is to extract photos of venue
let clintid="L2LEFRWKXUWBUYFATD3B1KZHYSEWT1TKLL3ARBVK04EXFPEW";
let clintsecret="3JNNOQPCFFCPVECEQBRHW0XBVOLAKW25CSVARSNOEJJOD4FY";
let id="4b0587caf964a520f1a122e3";

fetch(`https://api.foursquare.com/v2/venues/${id}/photos?&client_id=${clintid}&client_secret=${clintsecret}&v=20210101`
).then(resp => resp.json())
.then(result => console.log(result));