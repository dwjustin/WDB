let weather={
    apiKey: "8910d8bd41576e1b9c96e6f86ac612fe",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+this.apiKey)
        .then((response)=> response.json())
        .then(data=>{
            
            
            this.displayWeather(data);
        });
        
    },
    displayWeather: function (data){
        const {name}=data;
        const {icon, description}=data.weather[0];
        const {country}=data.sys;
        const {temp}=data.main;
        console.log(name, icon, description, temp, country);
        
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".temp").innerText=temp+"°F";
        document.querySelector(".contents").innerText= description.toUpperCase();
        document.querySelector(".weather").classList.remove("loading");


    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button")
.addEventListener("click",()=>{
    weather.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Berkeley");

const toggle=document.getElementById("toggle");

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    document.querySelector(".search-button").classList.toggle("dark");
})