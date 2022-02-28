var clickedCity1 = document.querySelector('#city-1').innerText;
var clickedCity2 = document.querySelector('#city-2').innerText;
var clickedCity3 = document.querySelector('#city-3').innerText;

function cityName1() {
    alert("Loading weather report for " + clickedCity1)
}
function cityName2() {
    alert("Loading weather report for " + clickedCity2)
}
function cityName3() {
    alert("Loading weather report for " + clickedCity3)
}

// remove cookie on click
var cookieBanner = document.querySelector('.cookie'); // target the entire cookie banner div

function removeCookie() {
    cookieBanner.remove()
}

// update temperature
// we want to find the .innerText of each temperature. Possiblly to substring(0,2), for first 2 digits. Could look for
// a third digit if not a degree symbol.
// once that is found, it will be default at Celcius, and when changed will run formula, and paste the new value
// into the inner.text of original element
// and if it is in faranheit and want celcius, then change back to Celcius


var tempUnit = document.querySelector('#temp-unit')
var highSpans = document.querySelectorAll('.high')
var highs = []

for (var i = 0; i < highSpans.length; i++) {
    highs.push(highSpans[i].innerText)
}

// console.log('highs: ', highs)

var lowSpans = document.querySelectorAll('.low')
var lows = []

for (var i = 0; i < lowSpans.length; i++) {
    lows.push(lowSpans[i].innerText)
}

// console.log('lows: ', lows)

function remove(element) {
    element.remove()
}

/* 

1. User selects unit for temperature
2. 

*/

function changeUnit() {
    if (tempUnit.value == 'f') {
        console.log('user selected fahrenheit')
        for (var i = 0; i < highs.length; i++) {
            highSpans[i].innerText = Math.floor((highs[i] * 9 / 5) + 32)
        }
        for (var i = 0; i < lows.length; i++) {
            lowSpans[i].innerText = Math.floor((lows[i] * 9 / 5) + 32)
        }
        console.log('highs', highs)
        console.log('lows', lows)
    } else {
        console.log('user selected celsius')
        for (var i = 0; i < highs.length; i++) {
            highSpans[i].innerText = highs[i]
        }
        for (var i = 0; i < lows.length; i++) {
            lowSpans[i].innerText = lows[i]
        }
    }
}