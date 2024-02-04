const cities: string[] = ["BANGKOK", "ALGIERS", "ISTANBUL", "NASSAU", "JEDDAH", "WINNIPEG", "GUATEMALA CITY", "YASUJ", "EDMONTON", "FECAMP", "ROME", "PLOVDIV", "OSAKA", "UTRECHT", "DAR ES SALAAM", "KUALA LUMPUR", "MAZAR E SHARIF", "SHANGHAI", "TOKYO", "LUCKNOW", "HYDERABAD"];

let result = 'Not found';

function build(cityList: string[] = cities, prev: string) {
    if (cityList.length === 0) {
        console.log(prev);
        return;
    }

    const i = cityList.findIndex(city => city[0] === prev[prev.length - 1]);
    const [currentCity] = cityList.splice(i, 1);

    build(cityList, currentCity);
    return;
}

const first = cities.shift() || cities[0];
build(cities, first);
