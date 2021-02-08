
document.querySelector('#btnPrint').style.display='none';

let flightNo = ["FR2144","FR3466","FR2971"];
let cities = ["Vilnius", "Kaunas", "Palanga", "London (Lutonas) LTN", "London (Stanstedas)", "Dublin DUB"];
let price = [110,120,130];
let luggage = [20,25,30];

let flights = document.querySelector('#FlightNo');
    for (let i = 0; i < flightNo.length; i++) {
        let option = document.createElement('option');
        option.value = flightNo[i];
        option.innerText = flightNo[i];
        flights.appendChild(option);
        
    };

let destinations = document.querySelector('#cityFrom');
let destinations2 = document.querySelector('#cityTo');
     for (let i = 0; i < cities.length; i++) {
        let option =document.createElement('option');
            option.value = cities[i];
            option.innerText = cities[i];
            destinations.appendChild(option);
        let option2 =document.createElement('option');
            option2.value = cities[i];
            option2.innerText = cities[i];
            destinations2.appendChild(option2);
        };

let prices = document.querySelector('#Price');
for (let i = 0; i < price.length; i++) {
    let option = document.createElement('option');
    option.value = price[i];
    option.innerText=price[i];
    prices.appendChild(option);
};

let luggages = document.querySelector('#Luggage');
for (let i = 0; i < luggage.length; i++) {
    let option = document.createElement('option');
    option.value = luggage[i];
    option.innerText=luggage[i];
    luggages.appendChild(option);
};


