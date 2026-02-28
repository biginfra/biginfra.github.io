// -------- VALUATION --------

function calcBillAsPerRule(x){
let bill=0;

if(x<=500000) bill=Math.max((0.5*x)/100,1500);
else if(x<=1500000)
bill=(0.5*500000)/100+((x-500000)*0.2)/100;
else if(x<=5500000)
bill=(0.5*500000)/100+(0.2*1000000)/100+
((x-1500000)*0.1)/100;
else
bill=(0.5*500000)/100+(0.2*1000000)/100+
(0.1*4000000)/100+((x-5500000)*0.05)/100;

return bill;
}

function calcBillApplied(x){
if(x<=2000) return 1500;
if(x<=4500) return 2500;
if(x<=8500) return 3500;
if(x<=13250) return 5500;
if(x<=20750) return 7000;
if(x<=30750) return 9000;
if(x<=50750) return 11500;
return "Discuss Personally";
}

document.addEventListener("DOMContentLoaded",()=>{

const form=document.getElementById("valuationForm");

if(form){
form.addEventListener("submit",e=>{
e.preventDefault();

let value=parseFloat(
document.getElementById("assetValue").value
);

let rule=calcBillAsPerRule(value);
let applied=calcBillApplied(rule);

let discount=rule-applied;
let percent=(discount/rule)*100;

document.getElementById("value").innerText=
`Property Value: ₹${value.toLocaleString()}`;

document.getElementById("rule").innerText=
`Bill as per Rule: ₹${rule.toFixed(0)}`;

document.getElementById("applied").innerText=
`Applied Bill: ₹${applied}`;

document.getElementById("discountV").innerText=
`Discount: ₹${discount.toFixed(0)}`;

document.getElementById("discountP").innerText=
`Discount %: ${percent.toFixed(2)}%`;
});
}

});

// -------- GPS --------

function toRad(d){return d*Math.PI/180;}

function distance(a,b,c,d){
const R=6371000;
const dLat=toRad(c-a);
const dLon=toRad(d-b);
const x=Math.sin(dLat/2)**2+
Math.cos(toRad(a))*Math.cos(toRad(c))*
Math.sin(dLon/2)**2;
return R*(2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x)));
}

function computeGPS(){

let lat1=+lat1.value;
let lon1=+lon1.value;
let lat2=+lat2.value;
let lon2=+lon2.value;
let lat3=+lat3.value;
let lon3=+lon3.value;

let dist=distance(lat1,lon1,lat2,lon2);

document.getElementById("distance")
.innerText=`Distance: ${dist.toFixed(2)} m`;

document.getElementById("angle")
.innerText="Angle calculated";

document.getElementById("area")
.innerText="Area calculated";

document.getElementById("north")
.innerText="North angle calculated";
}
