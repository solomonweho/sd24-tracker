fetch("data.json")
.then(r => r.json())
.then(data => {

let latest = data[data.length-1];

document.getElementById("marshall").innerText =
latest.marshall.toLocaleString();

document.getElementById("goldsmith").innerText =
latest.goldsmith.toLocaleString();

document.getElementById("erickson").innerText =
latest.erickson.toLocaleString();

document.getElementById("irwin").innerText =
latest.irwin.toLocaleString();

new Chart(
document.getElementById("voteChart"),
{
type:"line",
data:{
labels:data.map(x=>x.update),
datasets:[
{
label:"Marshall",
data:data.map(x=>x.marshall)
},
{
label:"Goldsmith",
data:data.map(x=>x.goldsmith)
},
{
label:"Erickson",
data:data.map(x=>x.erickson)
},
{
label:"Irwin",
data:data.map(x=>x.irwin)
}
]
}
});
});
