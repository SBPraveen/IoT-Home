const selected=document.querySelector(".selected");
const optionsContainer=document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click",()=>{
  optionsContainer.classList.toggle("active");
});
optionsList.forEach(o=>{
  o.addEventListener("click",()=>{
    selected.innerHTML=o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


$("#handle1").roundSlider({
    sliderType: "min-range",
    editableTooltip: false,
    radius: 90,
    width: 16,
    value: 36,
    handleSize: 0,
    handleShape: "square",
    circleShape: "pie",
    startAngle: 315,
    tooltipFormat: "changeTooltip"
});

function changeTooltip(e) {
    var val = e.value, speed;
    if (val < 30) speed = "Low";
    else if (val < 55) speed = "Medium";
    else if (val < 90) speed = "High";
    else speed = "Very High";

    return val + "%" + "<div>" + speed + "<div>";
};


function realtimeClock(){
  var rtclock=new Date();
  var hours=rtclock.getHours();
  var minutes= rtclock.getMinutes();
  //for Pm and Am
  var amPm=(hours<12)?"AM":"PM";
  //convert thee hours component to 12 hrs
  hours=(hours>12)?hours-12:hours;
  //pad the hours min with leading zeros
  hours=("0"+hours).slice(-2);
  minutes = ("0"+minutes).slice(-2);
  //display the realtimeClock
  document.getElementById('clock').innerHTML=
      hours+" : "+minutes+" "+amPm;
  var t=setTimeout(realtimeClock,500);
};


const batteryLevel=document.querySelector('.battery-level');
navigator.getBattery().then(function(battery){
  const level=battery.level;
  const status=level*100+"%";
  batteryLevel.style.width=status;
  if (level>0.59) batteryLevel.innerHTML=status;

});

document.querySelector('.darkLight').addEventListener('click',()=>{
  document.body.classList.toggle('light')
});




// device chart

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    responsive: true,
    // The data for our dataset
    data: {
            labels: ['Fan-1', 'Fan-2', 'Light-1', 'Light-2', 'Plug-1', 'Plug-2'],
            datasets: [{
            label: "",
            data: [25, 8, 30, 12, 27, 15],
            backgroundColor: ["rgba(86, 51, 176, 0.2)","rgba(255, 251, 0, 0.2)","rgba(255, 68, 0, 0.2)","rgba(0, 255, 242, 0.2)","rgba(0, 255, 106, 0.2)","rgba(250, 0, 71, 0.2)"],
            borderColor: ["rgba(86, 51, 176, 1)","rgba(255, 251, 0, 1)","rgba(255, 68, 0, 1)","rgba(0, 255, 242, 1)","rgba(0, 255, 106, 1)","rgba(250, 0, 71, 1)"],
            borderWidth: [3, 3, 3, 3, 3, 3]
                      }]
          },

    // Configuration options go here
    options: {
      legend: {
            display: false,

        }
    }
});

homeBtn = document.querySelector(".addDevice");
powerConsumptionPg = document.querySelector(".deviceFull");
mainPg = document.querySelector(".top");
homeBtn.addEventListener("click",function(){
  mainPg.style.display = "none";
  powerConsumptionPg.style.display = "flex";
});
powerConsumptionBackBtn= document.querySelector(".powerConsumptionBack");
powerConsumptionBackBtn.addEventListener("click",function(){
  powerConsumptionPg.style.display = "none";
  mainPg.style.display = "block";
  });