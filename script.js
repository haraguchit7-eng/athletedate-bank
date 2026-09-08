const athletes=[
{id:1,name:"K. TANAKA",sport:"サッカー",age:"U-15",area:"関東",pos:"FW",score:92.4,speed:95,power:86,jump:96,endurance:79,vision:90,growth:"+8.4%"},
{id:2,name:"R. SUZUKI",sport:"バスケットボール",age:"U-18",area:"東海",pos:"PG",score:91.8,speed:92,power:84,jump:94,endurance:88,vision:91,growth:"+6.1%"},
{id:3,name:"H. ITO",sport:"陸上",age:"U-12",area:"関西",pos:"SPRINT",score:90.7,speed:97,power:82,jump:91,endurance:76,vision:84,growth:"+12.3%"},
{id:4,name:"S. YAMADA",sport:"野球",age:"U-18",area:"関東",pos:"OF",score:89.9,speed:88,power:94,jump:87,endurance:78,vision:93,growth:"+7.0%"},
{id:5,name:"M. KATO",sport:"バレーボール",age:"U-15",area:"九州",pos:"OH",score:88.6,speed:83,power:88,jump:97,endurance:81,vision:86,growth:"+10.1%"},
{id:6,name:"A. NAKAMURA",sport:"サッカー",age:"大学",area:"関西",pos:"MF",score:87.8,speed:86,power:82,jump:80,endurance:95,vision:92,growth:"+4.8%"}];

const grid=document.getElementById("athleteGrid"),count=document.getElementById("resultCount");
function card(a){
return `<article class="athlete-card" data-id="${a.id}">
<div class="athlete-photo" data-no="${String(a.id).padStart(2,"0")}"><div class="score-badge"><b>${a.score}</b><small>JDC SCORE</small></div></div>
<div class="card-body"><div class="card-meta">${a.age} / ${a.sport.toUpperCase()} / ${a.area.toUpperCase()}</div><h3>${a.name}</h3>
<div class="metric-row"><span><b>${a.speed}</b>SPEED</span><span><b>${a.power}</b>POWER</span><span><b>${a.jump}</b>JUMP</span><span><b>${a.endurance}</b>END.</span><span><b>${a.vision}</b>VISION</span></div></div></article>`}
function render(list){grid.innerHTML=list.map(card).join("");count.textContent=`${list.length} ATHLETES`;document.querySelectorAll(".athlete-card").forEach(el=>el.onclick=()=>openProfile(+el.dataset.id))}
render(athletes);

document.getElementById("searchBtn").onclick=()=>{
 const sport=document.getElementById("sport").value,age=document.getElementById("age").value,area=document.getElementById("area").value,p=document.getElementById("physical").value;
 const list=athletes.filter(a=>(!sport||a.sport===sport)&&(!age||a.age===age)&&(!area||a.area===area)&&(!p||a[p]>=90));
 render(list);
};
const modal=document.getElementById("modal"),content=document.getElementById("modalContent");
function openProfile(id){
 const a=athletes.find(x=>x.id===id);
 content.innerHTML=`<div class="profile-head"><div class="profile-pic">${String(a.id).padStart(2,"0")}</div><div><small>${a.age} / ${a.sport} / ${a.area}</small><h2>${a.name}</h2><p>${a.pos}　｜　GROWTH ${a.growth}</p></div><div class="big-score"><small>JDC PHYSICAL SCORE</small><strong>${a.score}</strong><small>NATIONAL TOP CLASS</small></div></div>
 <div class="profile-metrics"><div><b>${a.speed}</b><small>SPEED / 瞬発力</small></div><div><b>${a.power}</b><small>POWER / 筋力</small></div><div><b>${a.jump}</b><small>JUMP / 跳躍力</small></div><div><b>${a.endurance}</b><small>ENDURANCE / 持久力</small></div><div><b>${a.vision}</b><small>VISION / 視機能</small></div></div>
 <div class="profile-message"><div><small>ATHLETE INSIGHT</small><br><b>現在値だけでなく、成長履歴・競技歴・映像を組み合わせて評価します。</b></div><button class="btn" data-toast="スカウト送信はPhase 2で接続します">スカウトを送る →</button></div>`;
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");bindToast();
}
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")});
const toast=document.getElementById("toast");let timer;
function showToast(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove("show"),2600)}
function bindToast(){document.querySelectorAll("[data-toast]").forEach(x=>x.onclick=()=>showToast(x.dataset.toast))}
bindToast();
document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll(".nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));