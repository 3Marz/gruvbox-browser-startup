
const searchBox = document.getElementById("search-box") 
const timeEle = document.getElementById("time")

const date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let mer = hours >= 12 ? "pm" : "am";

if (min < 10) {
	min = "0"+min;
}

hours = hours % 12;
hours = hours ? hours : 12;

timeEle.innerHTML = `${hours}:${min} ${mer}`;

searchBox.addEventListener("keypress", ({ key }) => {
    if(key == 'Enter') {
        search();
    }
})

function search() {
    let url = 'https://www.google.com/search?q=' + searchBox.value;
    console.log(url)
    window.location.assign(url)
}


