const key = "611255a25a95a614ef96517d44fb5216"
const city = document.getElementById("city")
const search = document.getElementById("search")




function whetherInfo(cityname ="gilgit"){
    const req=  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`)
     return req
}

search.addEventListener("click" , function(){
      whetherInfo(city.value)
      .then((data)=>{
         return data.json()
      })
      .then((data)=>{
        console.log(data)
        const date = data.sys.sunrise

    })
      .catch((error)=>{
          console.log(error)
      })
})




(function updateOnlineStatus() {
    const statusElement = document.getElementById("status");
    if (navigator.onLine) {
      statusElement.textContent = "🟢 You are Online";
      statusElement.style.color = "green";
    } else {
      statusElement.textContent = "🔴 You are Offline";
      statusElement.style.color = "red";
    }
  }())


