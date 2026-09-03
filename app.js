const athletes=[
{name:"山田 太郎",sport:"サッカー",age:"U18",region:"関東",position:"FW",score:91,vision:94,strength:82,endurance:88,power:96,jump:89,number:"11"},
{name:"佐藤 海斗",sport:"野球",age:"U18",region:"関東",position:"外野手",score:88,vision:92,strength:86,endurance:76,power:91,jump:87,number:"7"},
{name:"鈴木 蓮",sport:"バスケットボール",age:"U15",region:"東海",position:"PG",score:84,vision:89,strength:72,endurance:91,power:85,jump:83,number:"4"},
{name:"高橋 悠真",sport:"サッカー",age:"U15",region:"関西",position:"MF",score:82,vision:86,strength:75,endurance:93,power:79,jump:77,number:"8"},
{name:"伊藤 陽翔",sport:"陸上",age:"U18",region:"関西",position:"短距離",score:93,vision:81,strength:90,endurance:80,power:98,jump:95,number:"1"},
{name:"中村 蒼",sport:"野球",age:"U15",region:"東海",position:"投手",score:80,vision:88,strength:84,endurance:74,power:83,jump:71,number:"18"}];

const grid=document.getElementById("grid"), resultCount=document.getElementById("resultCount");
function render(list){
  resultCount.textContent=`${list.length} ATHLETES`;
  grid.innerHTML=list.map(a=>`<article class="athlete-card" onclick="showAthlete('${a.name}')">
    <div class="photo"><span>${a.number}</span></div>
    <div class="athlete-body">
      <span class="tag">${a.sport} / ${a.position}</span>
      <h3>${a.name}</h3>
      <div class="meta">${a.age} ｜ ${a.region}</div>
      <div class="score-row"><span>ARROWZ PHYSICAL SCORE</span><strong>${a.score}</strong></div>
    </div></article>`).join("");
}
function filterA(){
  const s=sport.value,a=age.value,r=region.value,n=+score.value;
  render(athletes.filter(x=>(!s||x.sport===s)&&(!a||x.age===a)&&(!r||x.region===r)&&x.score>=n));
}
function showAthlete(name){
  const a=athletes.find(x=>x.name===name);
  const v=[["視機能",a.vision],["筋力",a.strength],["持久力",a.endurance],["瞬発力",a.power],["跳躍力",a.jump]];
  detail.innerHTML=`<p class="eyebrow dark">ATHLETE PROFILE</p>
  <div class="detail-top"><div><span class="tag">${a.sport} / ${a.position}</span><h2>${a.name}</h2><div class="meta">${a.age} ｜ ${a.region} ｜ 最終測定 2026.08</div></div>
  <div><div class="meta">PHYSICAL SCORE</div><div class="big-score">${a.score}</div></div></div>
  <div>${v.map(x=>`<div class="bar"><b>${x[0]}</b><div class="track"><div class="fill" style="width:${x[1]}%"></div></div><strong>${x[1]}</strong></div>`).join("")}</div>
  <p class="meta">同年代・同競技比較、成長履歴、映像、スカウト・スポンサー打診は本番版で接続予定です。</p>`;
  modal.classList.add("open");
}
function openLogin(){
  detail.innerHTML=`<p class="eyebrow dark">MEMBER LOGIN</p><h2>ログイン</h2>
  <label>メールアドレス<input type="email" placeholder="name@example.com"></label>
  <label>パスワード<input type="password" placeholder="••••••••"></label>
  <button class="submit">LOGIN</button><p class="meta">※認証処理は本番版で接続します。</p>`;
  modal.classList.add("open");
}
function openContact(){
  detail.innerHTML=`<p class="eyebrow dark">BUSINESS CONTACT</p><h2>法人利用について</h2>
  <label>会社・団体名<input type="text"></label><label>ご担当者名<input type="text"></label>
  <label>メールアドレス<input type="email"></label><button class="submit">相談する</button>
  <p class="meta">※送信処理は本番版で接続します。</p>`;
  modal.classList.add("open");
}
function closeM(){modal.classList.remove("open")}
render(athletes);