// http://api.weatherapi.com/v1/current.json?key=119f2bad735140d2807141007250210&q=------&aqi=no   <= this is the api i am using (need to put a valid location in this '----' part for response)

const temArea = document.querySelector(".tem");
const locationArea = document.querySelector(".Location");
const timeArea = document.querySelector(".Time");
const dateArea = document.querySelector(".Date");
const conditionArea = document.querySelector(".condition");
// const contryArea = document.querySelector(".tem");
// const regionArea = document.querySelector(".tem");
const searchBox = document.querySelector('.search-box')
const form = document.querySelector('form');

form.addEventListener('submit', searchLoc)

const data = async (location) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=119f2bad735140d2807141007250210&q=${loc}&aqi=no`
    
    try {
        const response = await fetch(url)
    const decp_data = await response.json()
    //console.log(decp_data)

    if (decp_data.error) {
            alert("Please enter a valid location.")
            return
        }

    let temp = decp_data.current.temp_c
    let locationName = decp_data.location.name
    let time = decp_data.location.localtime
    let condition = decp_data.current.condition.text
    // let country = decp_data.location.country
    // let region = decp_data.location.region
    
    // console.log(temp)
    // console.log(locationName)
    // console.log(time)
    // console.log(condition)
    // console.log(country)
    // console.log(region)

    updateData(temp,locationName,time,condition)
    } catch (err) {
        alert("Something went wrong. Please check your internet or try again later.")
        console.error("API fetch failed:", err)

    }
}

function updateData(temp,locationName,time,condition){
    
    let [date, newTime] = time.split(' ')

    temArea.innerText = `${temp}°C`
    locationArea.innerText = locationName
    timeArea.innerText = `Time Now : ${newTime}`
    dateArea.innerText = date
    conditionArea.innerText = `Air Condition is : ${condition}`
}

function searchLoc(e){
    e.preventDefault()
    loc = searchBox.value
    data(loc)
    searchBox.value = ''
}

data(loc)
