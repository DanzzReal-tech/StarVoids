const $=s=>document.querySelector(s),E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),rp=n=>'Rp'+Number(n||0).toLocaleString('id-ID');
const sha=async t=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)))].map(b=>b.toString(16).padStart(2,'0')).join('');
const hp=p=>sha('lx$'+p),uid=()=>Math.random().toString(36).slice(2,9);
const idb=()=>new Promise((r,j)=>{const q=indexedDB.open('lxv',1);q.onupgradeneeded=()=>q.result.createObjectStore('v');q.onsuccess=()=>r(q.result);q.onerror=()=>j(q.error)});
const vput=async(k,b)=>{const d=await idb();return new Promise((r,j)=>{const t=d.transaction('v','readwrite');t.objectStore('v').put(b,k);t.oncomplete=r;t.onerror=()=>j(t.error)})};
const vget=async k=>{const d=await idb();return new Promise(r=>{const q=d.transaction('v').objectStore('v').get(k);q.onsuccess=()=>r(q.result);q.onerror=()=>r(null)})};
const vdel=async k=>{try{const d=await idb();d.transaction('v','readwrite').objectStore('v').delete(k)}catch(e){}};
const VU={};
async function vload(){const e=$('#hv');if(!e||e.getAttribute('src'))return;const k=e.dataset.k;try{if(!VU[k]){const b=await vget(k);if(!b)return;VU[k]=URL.createObjectURL(b)}if($('#hv')===e&&e.getAttribute('src')!=VU[k]){e.muted=true;e.src=VU[k];e.play().catch(()=>{})}}catch(x){}}
function delb(i){const b=D.banners[i];if(b&&b.vid)vdel(b.vid);D.banners.splice(i,1);save();render()}
const AE='setiadihati23@gmail.com',AU='Dzaki Real',AH='9237817cd98370b4b45eae98d5ba6d2f395c6a624a52e8ba92efcb0257936e3e';
const IC={
  home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  shirt:'<path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
  gamepad:'<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10v4M5 12h4"/><circle cx="15.5" cy="11" r="1"/><circle cx="18" cy="13.5" r="1"/>',
  gem:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20"/><path d="M8 9l4 12 4-12-4-6z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M19 14.5c2 .8 3 2.5 3 5.5"/>',
  heart:'<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.6A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  logout:'<path d="M9 21H5V3h4M16 17l5-5-5-5M21 12H9"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h10"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  bag:'<path d="M5 8h14l-1 13H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/>',
  palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2-.6-1.2.2-2.5 1.6-2.5H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="11" r="1"/>',
  ticket:'<path d="M3 9a3 3 0 0 0 0 6v3h18v-3a3 3 0 0 1 0-6V6H3z"/><path d="M14 6v12" stroke-dasharray="2 2"/>',
  package:'<path d="M12 3l9 4.5v9L12 21l-9-4.5v-9z"/><path d="M3 7.5l9 4.5 9-4.5M12 12v9"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  next:'<path d="M9 5l7 7-7 7"/>',
  star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  cart:'<path d="M3 4h2l2.4 11h11l2-8H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  video:'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M22 8l-6 4 6 4z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  headset:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="13" width="4.5" height="7" rx="2"/><rect x="17" y="13" width="4.5" height="7" rx="2"/><path d="M19.5 20c0 1.5-2 2-5 2"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  download:'<path d="M12 3v12M7 10l5 5 5-5M4 19h16"/>',
  upload:'<path d="M12 15V3M7 8l5-5 5 5M4 19h16"/>',
  copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  fire:'<path d="M12 2c.5 3.5-2 5.5-2 8.5a3 3 0 0 0 6 0c0-1.5-.8-2.8-1.5-4C17 8 19 10.5 19 14a7 7 0 1 1-14 0c0-4 3-7.5 7-12z"/>',
  crown:'<path d="M3 18h18l-2-10-4.5 4L12 5 9.5 12 5 8z"/>',
  check:'<path d="M5 13l4 4L19 7"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'
};
const ic=(n,s=18,f='none')=>`<svg class="si" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${f||'none'}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${IC[n]||''}</svg>`;
const logo=(s=30)=>(typeof D!=='undefined'&&D&&D.set&&D.set.logo)?`<img src="${D.set.logo}" alt="Logo" style="width:${s}px;height:${s}px;border-radius:9px;object-fit:cover;flex:none;border:1px solid rgba(212,175,55,.45)">`:`<svg width="${s}" height="${s}" viewBox="0 0 32 32" style="flex:none"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e27a"/><stop offset="1" stop-color="#a9861f"/></linearGradient></defs><path d="M9 4h14l7 9-14 16L2 13z" fill="url(#lg)"/><path d="M2 13h28M12 13l4 16 4-16-4-9z" fill="none" stroke="#1a1405" stroke-opacity=".45" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
const pp=p=>Math.round(p.price*(100-(p.disc||0))/100);
const payl=()=>(D.set.pay||'Bayar Langsung di Web (Instan),QRIS,Transfer Bank,DANA,OVO,GoPay').split(',').map(x=>x.trim()).filter(Boolean);
const rating=id=>{const r=D.reviews.filter(x=>x.pid==id);return[r.length?r.reduce((a,x)=>a+x.r,0)/r.length:0,r.length]};
const stars=(n,z=14)=>[1,2,3,4,5].map(i=>ic('star',z,i<=Math.round(n)?'#f6e27a':'none')).join('');
const fi=(x,z=56)=>ic(x.items?'gem':x.cat=='akun'?'gamepad':x.cat?'shirt':'image',z);

let D,S={uid:null,v:'home',at:'dash',q:'',gq:'',bi:0,m:null,au:'login',dr:false,gv:{},fcat:'',fmin:'',fmax:'',fstock:false,so:'',light:false};
let syncT=null,syncing=false,syncAgain=false;
const save=()=>{clearTimeout(syncT);syncT=setTimeout(syncNow,400)};
const sid=()=>S.uid||null;
const me=()=>D.users.find(u=>u.id==sid());
const isA=()=>{const u=me();return !!u&&u.role=='admin'};
function toast(t){let o=$('#ts');if(o)o.remove();let e=document.createElement('div');e.id='ts';e.textContent=t;document.body.append(e);setTimeout(()=>e.remove(),3000)}
let AS=null;(async()=>{try{if(typeof claude!='undefined')AS=await claude.use('assets')}catch(e){}})();
const d2b=d=>{const a=d.split(','),m=a[0].match(/:(.*?);/)[1],t=atob(a[1]),u=new Uint8Array(t.length);for(let i=0;i<t.length;i++)u[i]=t.charCodeAt(i);return new Blob([u],{type:m})};
const rnd=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const safeName=n=>String(n||'file').replace(/[^\w.\-]+/g,'_').slice(-60);
async function putFile(bucket,blob,name,type){
  const p=S.uid+'/'+name;
  const {error}=await sb.storage.from(bucket).upload(p,blob,{contentType:type||'application/octet-stream',cacheControl:'31536000'});
  if(error)throw error;
  return p;
}
const pubUrl=p=>sb.storage.from('media').getPublicUrl(p).data.publicUrl;
async function up(f,max){const b=await compBlob(f,max);return pubUrl(await putFile('media',b,rnd()+'.jpg','image/jpeg'))}
function compBlob(f,max){return new Promise((res,rej)=>{const fr=new FileReader;fr.onerror=()=>rej(new Error('Gagal membaca file'));fr.onload=()=>{const i=new Image;i.onerror=()=>rej(new Error('File bukan gambar yang valid'));i.onload=()=>{const k=Math.min(1,max/i.width),c=document.createElement('canvas');c.width=Math.max(1,Math.round(i.width*k));c.height=Math.max(1,Math.round(i.height*k));c.getContext('2d').drawImage(i,0,0,c.width,c.height);c.toBlob(b=>b?res(b):rej(new Error('Gagal memproses gambar')),'image/jpeg',.8)};i.src=fr.result};fr.readAsDataURL(f)})}
function comp(f,max){return new Promise(r=>{let fr=new FileReader;fr.onload=()=>{let i=new Image;i.onload=()=>{let k=Math.min(1,max/i.width),c=document.createElement('canvas');c.width=i.width*k;c.height=i.height*k;c.getContext('2d').drawImage(i,0,0,c.width,c.height);r(c.toDataURL('image/jpeg',.76))};i.src=fr.result};fr.readAsDataURL(f)})}

// Helper: Countdown formatter
function fmtCd(ts){if(!ts)return'';const d=new Date(ts).getTime()-Date.now();if(d<=0)return'Berakhir';const h=Math.floor(d/3600000),m=Math.floor((d%3600000)/60000),s=Math.floor((d%60000)/1000);if(h>=24)return Math.floor(h/24)+'h '+(h%24)+'j';return`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}

// Helper: Loyalty Tier & Points
function userTier(u){
  const spent=D.orders.filter(o=>o.uid==u.id&&o.status=='Selesai').reduce((a,o)=>a+o.price,0);
  const pts=Math.floor(spent/1000)+(u.bonusPts||0);
  let name='Member',next=500000,disc=0;
  if(spent>=3000000){name='VIP Diamond';next=3000000;disc=5}
  else if(spent>=1000000){name='Gold';next=3000000;disc=3}
  else if(spent>=500000){name='Silver';next=1000000;disc=1}
  const pct=spent>=3000000?100:Math.min(100,Math.round(spent/next*100));
  return{spent,pts,name,next,disc,pct};
}

// Helper: Notifications
function addNotif(uidTarget,title,body){
  D.notifs=D.notifs||[];
  D.notifs.unshift({id:uid(),uid:uidTarget,title,body,time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}),read:false});
  const mine=D.notifs.filter(n=>n.uid==uidTarget);if(mine.length>80)mine.slice(80).forEach(n=>{const i=D.notifs.indexOf(n);if(i>-1)D.notifs.splice(i,1)});
}

// ================= SUPABASE DATA LAYER =================
let sb=null;
const SN={};
const TBL=['products','games','orders','reviews','notifs','chats'];
const DEF_SET=()=>({bg:'',color:'#07060b',ov:.5,blur:0,pc:'#d4af37',name:'Dzaki Real',tag:'Marketplace premium',wa:'',cat:{thrift:'',akun:'',topup:''}});
const newD=()=>({users:[],products:[],games:[],banners:[{t:'Koleksi Eksklusif untuk Gaya & Gaming Kamu',s:'Thrifting pilihan, akun game premium & top up instan.',img:''},{t:'Top Up Instan 24 Jam',s:'Aman, cepat, harga terbaik.',img:''}],coupons:[{code:'DZAKI10',pct:10,on:true}],reviews:[],notifs:[],chats:[],orders:[],set:DEF_SET()});
function applyDefaults(){
 if(D.set.name=='LUXE')D.set.name='Dzaki Real';
 D.coupons=D.coupons||[{code:'DZAKI10',pct:10,on:true}];
 D.reviews=D.reviews||[];
 D.notifs=D.notifs||[];
 D.chats=D.chats||[];
 D.set.ann=D.set.ann??'Selamat datang! Pakai kode DZAKI10 untuk diskon 10%.';
 D.set.pay=D.set.pay||'Bayar Langsung di Web (Instan),QRIS,Transfer Bank,DANA,OVO,GoPay';
 D.set.payinfo=D.set.payinfo||'Selesaikan pembayaran sesuai metode yang dipilih, lalu upload bukti pembayaran agar admin bisa memverifikasi dan akses terbuka.';
 D.set.blur=D.set.blur??0;
 D.set.fabNotif=D.set.fabNotif??false;
 D.set.dpPct=D.set.dpPct??50;
 D.set.payAccounts=D.set.payAccounts||'BCA 1234567890 a.n Dzaki Real\nDANA / OVO / GoPay: 08123456789';
 D.set.danaUrl=D.set.danaUrl??'https://link.dana.id/';
 D.set.danaLabel=D.set.danaLabel??'Buka DANA';
 D.set.danaNote=D.set.danaNote??'Klik tombol Buka DANA untuk membayar, lalu upload bukti pembayaran di bawah.';
 D.set.postPopup=D.set.postPopup||{on:true,title:'Terima Kasih Sudah Order!',msg:'Pembayaran kamu telah dikonfirmasi. Silakan akses produk/file pesananmu melalui tombol di bawah atau hubungi admin.',img:'',vid:'',filePath:'',fileName:'',linkLabel:'Akses Produk / File',linkUrl:''};
 D.set.flashEnd=D.set.flashEnd||new Date(Date.now()+6*3600000).toISOString().slice(0,16);

}
const fromProf=r=>({name:'',av:'',viewed:[],cart:[],fav:[],...(r.data||{}),id:r.id,username:r.username,email:r.email,role:r.role});
const profRow=u=>({username:u.username,data:{name:u.name,av:u.av||'',viewed:u.viewed||[],cart:u.cart||[],fav:u.fav||[],bonusPts:u.bonusPts||0}});
const pubSet=()=>{const s={...D.set},p={...(s.postPopup||{})};p.hasAccess=!!(p.filePath||p.linkUrl);p.hasFile=!!p.filePath;delete p.linkUrl;delete p.filePath;delete p.fileName;delete p.fileData;s.postPopup=p;return s};
const privSet=()=>{const p=D.set.postPopup||{};return{linkUrl:p.linkUrl||'',filePath:p.filePath||'',fileName:p.fileName||''}};

function applyKv(rows,priv){
  const g=k=>(rows.find(r=>r.key==k)||{}).data;
  const st=g('set');if(st)D.set={...DEF_SET(),...st,cat:{...DEF_SET().cat,...(st.cat||{})}};
  const bn=g('banners');if(Array.isArray(bn))D.banners=bn;
  const cp=g('coupons');if(Array.isArray(cp))D.coupons=cp;
  if(priv){const a=(priv.find(r=>r.key=='access')||{}).data;if(a)D.set.postPopup={...(D.set.postPopup||{}),...a}}
}
async function loadPublic(){
  try{const {data}=await sb.from('kv').select('key,data').in('key',['set','banners']);if(data)applyKv(data)}catch(e){console.warn(e)}
  applyDefaults();
}
async function fetchRows(t){
  const asc=t!='notifs',cols=(t=='products'||t=='games')?'id,data,created_at':'id,uid,data,created_at';
  let out=[],from=0;
  for(;;){
    let q=sb.from(t).select(cols);
    if(t=='notifs')q=q.or('uid.eq.'+S.uid+',uid.eq.all');
    const {data,error}=await q.order('created_at',{ascending:asc}).range(from,from+999);
    if(error)throw error;
    out=out.concat(data.map(r=>({...r.data,id:r.id})));
    if(data.length<1000)break;from+=1000;
  }
  return out;
}
const rowId=(t,x)=>{if(t=='reviews'&&!x.id)x.id=x.pid+'_'+x.uid;return x.id};
const inScope=(t,x)=>{
  if(isA())return true;
  if(t=='orders'||t=='reviews')return x.uid==S.uid;
  if(t=='notifs')return x.uid!='all';
  if(t=='chats')return x.uid==S.uid&&x.from=='user';
  return false;
};
function snapTable(t){SN[t]=new Map();(D[t]||[]).forEach(x=>{const id=rowId(t,x);if(id!=null&&inScope(t,x))SN[t].set(id,JSON.stringify(x))})}
function snapAll(){
  TBL.forEach(snapTable);
  SN.prof=new Map(D.users.map(u=>[u.id,JSON.stringify(profRow(u))]));
  SN.kv={set:JSON.stringify(pubSet()),banners:JSON.stringify(D.banners),coupons:JSON.stringify(D.coupons),access:JSON.stringify(privSet())};
}
async function loadAll(){
  const [pf,kv,pk]=await Promise.all([sb.from('profiles').select('id,username,email,role,data'),sb.from('kv').select('key,data'),sb.from('private_kv').select('key,data')]);
  if(pf.error)throw pf.error;
  D.users=(pf.data||[]).map(fromProf);
  if(!D.users.some(u=>u.id==S.uid))throw new Error('Profil akun tidak ditemukan');
  applyKv(kv.data||[],pk.data||[]);
  const res=await Promise.all(TBL.map(fetchRows));
  TBL.forEach((t,i)=>{D[t]=res[i]});
  applyDefaults();snapAll();
}
async function reloadTables(l){const res=await Promise.all(l.map(fetchRows));l.forEach((t,i)=>{D[t]=res[i];snapTable(t)})}

const mkRow=(t,id,x)=>(t=='products'||t=='games')?{id,data:x}:{id,uid:String(x.uid),data:x};
async function syncTable(t){
  const arr=D[t]||[],old=SN[t]||new Map(),cur=new Map(),ins=[],upd=[];
  for(const x of arr){
    const id=rowId(t,x);if(id==null||!inScope(t,x))continue;
    const j=JSON.stringify(x);cur.set(id,j);
    if(!old.has(id))ins.push(mkRow(t,id,x));else if(old.get(id)!==j)upd.push(mkRow(t,id,x));
  }
  const del=[...old.keys()].filter(id=>!cur.has(id));
  if(ins.length){const {error}=await sb.from(t).insert(ins);if(error)throw error}
  for(const r of upd){const {error}=await sb.from(t).update({data:r.data}).eq('id',r.id);if(error)throw error}
  if(del.length){const {error}=await sb.from(t).delete().in('id',del);if(error)throw error}
  SN[t]=cur;
  return !!(ins.length||upd.length||del.length);
}
async function syncKv(){
  if(!isA())return;
  const items={set:pubSet(),banners:D.banners,coupons:D.coupons};
  for(const k in items){
    const j=JSON.stringify(items[k]);
    if(SN.kv[k]!==j){const {error}=await sb.from('kv').upsert({key:k,data:items[k]});if(error)throw error;SN.kv[k]=j}
  }
  const pj=JSON.stringify(privSet());
  if(SN.kv.access!==pj){const {error}=await sb.from('private_kv').upsert({key:'access',data:privSet()});if(error)throw error;SN.kv.access=pj}
}
async function syncProfiles(){
  const cur=new Map();
  for(const u of D.users){
    const j=JSON.stringify(profRow(u));cur.set(u.id,j);
    if(SN.prof.has(u.id)&&SN.prof.get(u.id)!==j){const {error}=await sb.from('profiles').update(profRow(u)).eq('id',u.id);if(error)throw error}
  }
  if(isA())for(const id of SN.prof.keys())if(!cur.has(id)){const {error}=await sb.rpc('delete_user',{target:id});if(error)throw error}
  SN.prof=cur;
}
async function syncNow(){
  syncT=null;
  if(!sb||!S.uid||!D||!SN.prof)return;
  if(syncing){syncAgain=true;return}
  syncing=true;
  try{
    let ordersChanged=false;
    if(isA()){await syncTable('products');await syncTable('games')}
    ordersChanged=await syncTable('orders');
    await syncTable('reviews');await syncTable('notifs');await syncTable('chats');
    await syncProfiles();await syncKv();
    if(ordersChanged){await reloadTables(['products']);if(!S.m&&!S.dr&&S.v!='admin')render()}
  }catch(e){
    console.error(e);
    toast('Gagal menyimpan: '+(e.message||e));
    try{await loadAll();if(!S.m)render()}catch(_){}
  }finally{
    syncing=false;
    if(syncAgain){syncAgain=false;save()}
  }
}
async function refreshLive(){
  if(!sb||!S.uid||document.hidden||syncing||syncT||S.m||S.dr)return;
  const act=document.activeElement;if(act&&/INPUT|TEXTAREA|SELECT/.test(act.tagName))return;
  try{
    const l=['orders','notifs','chats','products'],before=JSON.stringify(l.map(t=>D[t]));
    const res=await Promise.all(l.map(fetchRows));
    if(syncing||syncT||S.m)return;
    l.forEach((t,i)=>{D[t]=res[i];snapTable(t)});
    if(isA()){const {data}=await sb.from('profiles').select('id,username,email,role,data');if(data&&!syncT){D.users=data.map(fromProf);SN.prof=new Map(D.users.map(u=>[u.id,JSON.stringify(profRow(u))]))}}
    if(JSON.stringify(l.map(t=>D[t]))!=before&&!S.m)render();
  }catch(e){console.warn('refresh gagal',e)}
}
function setupView(){return`<div class="gl" style="margin-top:40px"><h3 style="margin-top:0">Supabase belum dihubungkan</h3><p class="mu">Buka file <b>config.js</b>, isi <b>SUPABASE_URL</b> dan <b>SUPABASE_ANON_KEY</b> dari Supabase (Settings → API), lalu muat ulang halaman ini. Pastikan juga file supabase-setup.sql sudah dijalankan di SQL Editor.</p></div>`}

async function init(){
  D=newD();applyDefaults();
  if(!window.supabase||!window.SUPABASE_URL||/ISI_/.test(window.SUPABASE_URL||'')||/ISI_/.test(window.SUPABASE_ANON_KEY||'')){$('#app').innerHTML=setupView();return}
  sb=supabase.createClient(window.SUPABASE_URL,window.SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  sb.auth.onAuthStateChange(ev=>{
    if(ev=='PASSWORD_RECOVERY'){S.rec=true;S.uid=null;S.au='recover';render()}
    else if(ev=='SIGNED_OUT'&&S.uid&&!S.loggingOut){S.uid=null;render()}
  });
  $('#app').innerHTML='<div class="gl mu" style="margin-top:40px;text-align:center">Memuat...</div>';
  if(/type=recovery/.test(location.hash)){S.rec=true;S.au='recover'}
  await loadPublic();
  if(!S.rec){
    try{const {data}=await sb.auth.getSession();if(data.session){S.uid=data.session.user.id;await loadAll()}}
    catch(e){console.error(e);S.uid=null;toast('Gagal memuat data: '+(e.message||e))}
  }
  applySet();render();loop();
  setInterval(refreshLive,20000);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(syncT){clearTimeout(syncT);syncNow()}}else refreshLive()});
}

function applySet(){
  const s=D.set,b=document.body;
  b.style.backgroundImage=s.bg?`url(${s.bg})`:'none';
  b.style.backgroundColor=s.color;
  document.documentElement.style.setProperty('--ov',s.ov);
  document.documentElement.style.setProperty('--bg',s.color);
  document.documentElement.style.setProperty('--blur',(s.blur||0)+'px');
  document.body.classList.toggle('light-mode',!!S.light);
}

const cv=$('#pc'),cx=cv.getContext('2d');let P=[];
function rs(){cv.width=innerWidth;cv.height=innerHeight;P=Array.from({length:Math.min(90,innerWidth/12|0)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*2+.4,v:Math.random()*.5+.15,a:Math.random()*6}))}
function loop(){cx.clearRect(0,0,cv.width,cv.height);const c=D.set.pc||'#d4af37';for(const p of P){p.y-=p.v;p.x+=Math.sin(p.a+=.01)*.3;if(p.y<-5){p.y=cv.height+5;p.x=Math.random()*cv.width}cx.globalAlpha=.3+.5*Math.abs(Math.sin(p.a));cx.fillStyle=c;cx.shadowColor=c;cx.shadowBlur=8;cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()}requestAnimationFrame(loop)}
addEventListener('resize',rs);rs();

// Banner auto-rotate + Live countdown ticker
setInterval(()=>{
  if(S.v=='home'&&me()&&D.banners.length>1&&!S.m&&!S.dr){
    S.bi=(S.bi+1)%D.banners.length;
    const h=$('#hero');if(h){h.outerHTML=hero();vload()}
  }
},5500);

setInterval(()=>{
  document.querySelectorAll('[data-cd]').forEach(el=>{
    const t=fmtCd(el.dataset.cd);
    el.innerHTML=t=='Berakhir'?'Berakhir':ic('clock',11)+' '+t;
  });
  const ft=$('#fl-clock');
  if(ft&&D?.set?.flashEnd){
    const d=Math.max(0,new Date(D.set.flashEnd).getTime()-Date.now());
    const h=String(Math.floor(d/3600000)).padStart(2,'0'),m=String(Math.floor((d%3600000)/60000)).padStart(2,'0'),s=String(Math.floor((d%60000)/1000)).padStart(2,'0');
    ft.innerHTML=`<span>${h}</span>:<span>${m}</span>:<span>${s}</span>`;
  }
},1000);

const go=(v,at)=>{if(v=='admin'&&!isA())v='home';S.v=v;S.dr=false;if(at)S.at=at;S.q='';scrollTo(0,0);render()};
const logout=async()=>{if(syncT){clearTimeout(syncT);await syncNow()}S.loggingOut=true;try{await sb.auth.signOut()}catch(e){}S.loggingOut=false;S.uid=null;S.m=null;D=newD();applyDefaults();await loadPublic();S.v='home';S.au='login';S.dr=false;applySet();render()};

// ---------- AUTH ----------
function authView(){const a=S.au;let f='';
 if(a=='login')f=`<label>Username atau Email</label><input id="li" autocomplete="username"><label>Password</label><input id="lp" type="password" autocomplete="current-password" onkeydown="if(event.key=='Enter')login()"><span class="mu" style="cursor:pointer;display:block;margin:-6px 0 12px" onclick="tp('lp')">${ic('eye',15)} Tampilkan password</span><button class="g" style="width:100%" onclick="login()">Masuk</button><p class="mu" style="text-align:center"><a style="color:var(--gold2);cursor:pointer" onclick="S.au='forgot';render()">Lupa password?</a><br>Belum punya akun? <a style="color:var(--gold2);cursor:pointer" onclick="S.au='register';render()">Daftar dulu</a></p>`;
 if(a=='register')f=`<label>Nama Lengkap</label><input id="rn"><label>Username</label><input id="ru" autocomplete="username"><label>Email</label><input id="re" type="email"><label>Password</label><input id="rp" type="password" autocomplete="new-password"><label>Konfirmasi Password</label><input id="rc" type="password" autocomplete="new-password"><span class="mu" style="cursor:pointer;display:block;margin:-6px 0 12px" onclick="tp('rp','rc')">${ic('eye',15)} Tampilkan password</span><button class="g" style="width:100%" onclick="reg()">Daftar Sekarang</button>`;
 if(a=='forgot')f=`<label>Username atau Email akun</label><input id="fi" onkeydown="if(event.key=='Enter')fgo()"><button class="g" style="width:100%" onclick="fgo()">Kirim Link Reset</button><p class="mu" style="text-align:center"><a style="color:var(--gold2);cursor:pointer" onclick="S.au='login';render()">${ic('back',14)}Kembali masuk</a></p>`;
 if(a=='recover')f=`<label>Password baru</label><input id="fp" type="password" autocomplete="new-password"><label>Konfirmasi password baru</label><input id="fq" type="password" autocomplete="new-password" onkeydown="if(event.key=='Enter')fset()"><button class="g" style="width:100%" onclick="fset()">Simpan Password Baru</button>`;
 return`<div class="auth"><div><div style="margin-bottom:16px">${logo(60)}</div><span class="tag">${E(D.set.tag)}</span><h1>${E(D.set.name)}<br>Thrifting · Akun · Top Up</h1><p class="mu">Belanja thrifting pilihan, jual beli akun game, dan top up instan dalam satu tempat. Daftar dulu untuk mulai.</p></div><div class="gl" style="padding:24px">${a=='forgot'||a=='recover'?`<h3 style="margin-top:0">${a=='recover'?'Buat Password Baru':'Lupa Password'}</h3>`:`<div class="tabs"><button class="${a=='register'?'on':''}" onclick="S.au='register';render()">Daftar</button><button class="${a=='login'?'on':''}" onclick="S.au='login';render()">Masuk</button></div>`}${f}</div></div>`}
const authErr=e=>{const m=String(e&&e.message||e);if(/invalid login/i.test(m))return'Email/username atau password salah';if(/not confirmed/i.test(m))return'Email belum dikonfirmasi. Cek inbox emailmu dulu.';if(/rate limit|too many/i.test(m))return'Terlalu banyak percobaan, coba lagi sebentar lagi';if(/network|fetch/i.test(m))return'Koneksi bermasalah, coba lagi';return m};
async function enterStore(){try{await loadAll()}catch(e){console.error(e);S.uid=null;try{await sb.auth.signOut()}catch(_){}return toast('Gagal memuat data: '+(e.message||e))}S.v='home';S.au='login';applySet();render()}
async function login(){
  const i=$('#li').value.trim(),p=$('#lp').value;
  if(!i||!p)return toast('Isi username/email dan password');
  let em=i.toLowerCase();
  if(!em.includes('@')){
    const {data}=await sb.rpc('email_for_username',{un:i});
    if(!data){S.au='register';render();return toast('Akun belum terdaftar. Daftar dulu ya!')}
    em=data;
  }
  const {data,error}=await sb.auth.signInWithPassword({email:em,password:p});
  if(error)return toast(authErr(error));
  S.uid=data.user.id;await enterStore();
}
async function reg(){const g=k=>$('#r'+k).value.trim(),n=g('n'),un=g('u'),em=g('e').toLowerCase(),p=$('#rp').value,c=$('#rc').value;
 if(!n||!un||!em||!p||!c)return toast('Semua kolom wajib diisi');
 if(!/^[\w .]{3,20}$/.test(un))return toast('Username 3-20 karakter (huruf, angka, spasi, titik, _)');
 if(!/^\S+@\S+\.\S+$/.test(em))return toast('Format email tidak valid');
 if(p.length<6)return toast('Password minimal 6 karakter');
 if(p!=c)return toast('Konfirmasi password tidak sama');
 const {data:taken}=await sb.rpc('username_taken',{un});if(taken)return toast('Username sudah dipakai');
 const {data,error}=await sb.auth.signUp({email:em,password:p,options:{data:{name:n,username:un}}});
 if(error)return toast(/already|registered/i.test(error.message)?'Email sudah terdaftar':authErr(error));
 if(data.user&&data.user.identities&&data.user.identities.length==0)return toast('Email sudah terdaftar');
 if(data.session){S.uid=data.user.id;await enterStore();if(me()){addNotif(S.uid,'Selamat Datang!','Akun kamu berhasil dibuat. Gunakan kode DZAKI10 untuk diskon 10%.');save();toast('Selamat datang, '+n+'!')}}
 else{S.au='login';render();toast('Daftar berhasil! Cek emailmu untuk konfirmasi, lalu masuk.')}
}
async function fgo(){
  const i=$('#fi').value.trim();if(!i)return toast('Isi email atau username akun');
  let em=i.toLowerCase();
  if(!em.includes('@')){const {data}=await sb.rpc('email_for_username',{un:i});if(!data)return toast('Akun tidak ditemukan');em=data}
  const {error}=await sb.auth.resetPasswordForEmail(em,{redirectTo:location.origin+location.pathname});
  if(error)return toast(authErr(error));
  S.au='login';render();toast('Link reset password dikirim ke email kamu');
}
async function fset(){
  const p=$('#fp').value;if(p.length<6)return toast('Password minimal 6 karakter');
  if(p!=$('#fq').value)return toast('Konfirmasi password tidak sama');
  const {error}=await sb.auth.updateUser({password:p});if(error)return toast(authErr(error));
  S.loggingOut=true;try{await sb.auth.signOut()}catch(e){}S.loggingOut=false;
  S.rec=false;S.uid=null;S.au='login';history.replaceState(null,'',location.pathname);
  toast('Password diubah, silakan masuk');render();
}

// ---------- FEATURE: VIEWED HISTORY TRACKER ----------
function trackView(id){
  const u=me();if(!u)return;
  u.viewed=(u.viewed||[]).filter(x=>x!=id);
  u.viewed.unshift(id);
  if(u.viewed.length>20)u.viewed.length=20;
  save();
}
function openViewedModal(){
  const u=me(),l=(u.viewed||[]).map(id=>D.products.find(p=>p.id==id)).filter(Boolean);
  S.m={
    title:'Riwayat Dilihat ('+l.length+')',
    f:[],
    html:l.length
      ?`<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">${l.map(p=>`<div class="row" style="padding:8px;background:var(--gl);border-radius:12px;cursor:pointer" onclick="S.m=null;dt('${p.id}')"><div class="th" style="${p.img?`background-image:url(${p.img})`:''}">${p.img?'':fi(p,20)}</div><div style="flex:1;min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${E(p.name)}</b><span class="pr">${rp(pp(p))}</span> <span class="mu">· Stok ${p.stock}</span></div>${ic('next',16)}</div>`).join('')}</div><button class="dg" style="width:100%;margin-bottom:8px" onclick="me().viewed=[];save();S.m=null;rm();toast('Riwayat dibersihkan')">Hapus Riwayat</button>`
      :'<p class="mu">Belum ada produk yang kamu lihat.</p>'
  };
  rm();
}

// ---------- FEATURE: GLOBAL SEARCH MODAL ----------
function openGlobalSearch(){
  S.m={
    title:'Pencarian Global',
    f:[],
    html:`<input id="gs_in" placeholder="Ketik nama produk, game, atau kategori..." value="${E(S.gq)}" oninput="S.gq=this.value;renderGs()"><div id="gs_res" style="max-height:55vh;overflow-y:auto;margin-bottom:10px"></div>`
  };
  rm();
  setTimeout(()=>{const i=$('#gs_in');if(i){i.focus();renderGs()}},30);
}
function renderGs(){
  const q=(S.gq||'').trim().toLowerCase(),box=$('#gs_res');if(!box)return;
  if(!q){box.innerHTML='<p class="mu">Ketik kata kunci untuk mencari di seluruh Thrifting, Akun Game, dan Top Up.</p>';return}
  const ps=D.products.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)||(p.spec||'').toLowerCase().includes(q));
  const gs=D.games.filter(g=>g.name.toLowerCase().includes(q)||g.items.some(i=>i.l.toLowerCase().includes(q)));
  let h='';
  if(ps.length)h+=`<div class="shs" style="margin-top:6px">Produk (${ps.length})</div>`+ps.slice(0,8).map(p=>`<div class="row" style="padding:8px;border-bottom:1px solid var(--ln);cursor:pointer" onclick="S.m=null;dt('${p.id}')"><div class="th" style="${p.img?`background-image:url(${p.img})`:''}">${p.img?'':fi(p,20)}</div><div style="flex:1"><b>${E(p.name)}</b><br><span class="pr">${rp(pp(p))}</span> <span class="mu">· ${p.cat=='thrift'?'Thrifting':'Akun'}</span></div></div>`).join('');
  if(gs.length)h+=`<div class="shs">Top Up Game (${gs.length})</div>`+gs.map(g=>`<div class="row" style="padding:8px;border-bottom:1px solid var(--ln);cursor:pointer" onclick="S.m=null;S.g='${g.id}';go('topup')"><div class="th" style="${g.img?`background-image:url(${g.img})`:''}">${g.img?'':fi(g,20)}</div><div style="flex:1"><b>${E(g.name)}</b><br><span class="mu">${g.items.length} pilihan nominal</span></div></div>`).join('');
  box.innerHTML=h||'<p class="mu">Tidak ditemukan hasil untuk "'+E(S.gq)+'".</p>';
}

// ---------- FEATURE: NOTIFICATION CENTER ----------
function openNotifs(){
  const u=me(),l=(D.notifs||[]).filter(n=>n.uid==u.id||n.uid=='all');
  l.forEach(n=>n.read=true);save();
  S.m={
    title:'Notifikasi',
    f:[],
    html:l.length
      ?`<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">${l.slice(0,15).map(n=>`<div class="gl" style="padding:12px;margin:0"><div class="row" style="justify-content:space-between"><b>${E(n.title)}</b><span class="mu">${E(n.time)}</span></div><p class="mu" style="margin:4px 0 0">${E(n.body)}</p></div>`).join('')}</div>`
      :'<p class="mu">Belum ada notifikasi baru.</p>'
  };
  rm();render();
}

// ---------- FEATURE: LIVE CHAT / IN-APP SUPPORT ----------
let S_helpTab='support';
function openChatModal(){
  const u=me();
  renderHelpModalContent();
}
function setHelpTab(tab){
  S_helpTab=tab;
  renderHelpModalContent();
  setTimeout(()=>{if(tab=='support')renderChat();},30);
}
function renderHelpModalContent(){
  const isSup=S_helpTab=='support';
  const waNum=D.set.wa||'08123456789';
  S.m={
    title:'Pusat Bantuan',
    f:[],
    html:`
      <div style="display:flex;background:rgba(255,255,255,.06);border-radius:16px;padding:4px;margin-bottom:16px;gap:4px">
        <button style="flex:1;border:0;background:${isSup?'linear-gradient(135deg,#2563eb,#3b82f6)':'transparent'};color:${isSup?'#fff':'var(--mu)'};padding:10px;border-radius:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:6px" onclick="setHelpTab('support')">${ic('chat',16)} Support</button>
        <button style="flex:1;border:0;background:${!isSup?'linear-gradient(135deg,#059669,#10b981)':'transparent'};color:${!isSup?'#fff':'var(--mu)'};padding:10px;border-radius:12px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:6px" onclick="setHelpTab('channel')">${ic('share',16)} Channel</button>
      </div>
      ${isSup?`
        <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold2);font-weight:700;margin-bottom:8px">Live Chat & Hubungi Admin</div>
        <div class="chat-box" id="cbox" style="margin-bottom:10px"></div>
        <div class="row" style="flex-wrap:nowrap;margin-bottom:12px"><input id="cin" placeholder="Tulis pesan ke admin..." style="margin:0;flex:1" onkeydown="if(event.key=='Enter')sendChat()"><button class="g" onclick="sendChat()">Kirim</button></div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
          <div class="gl" style="margin:0;padding:12px;display:flex;align-items:center;gap:12px;cursor:pointer;background:rgba(56,189,248,.08);border-color:rgba(56,189,248,.25)" onclick="wa0()">
            <div style="width:40px;height:40px;border-radius:12px;background:rgba(56,189,248,.2);display:grid;place-items:center;color:#38bdf8">${ic('chat',20)}</div>
            <div style="flex:1"><b>CS WhatsApp</b><br><small class="mu">Fast Response 24 Jam</small></div>
            <span class="pill" style="font-size:10px;background:rgba(56,189,248,.15);color:#7dd3fc">ONLINE</span>
          </div>
          ${D.set.wa?`<div class="gl" style="margin:0;padding:12px;display:flex;align-items:center;gap:12px;cursor:pointer" onclick="open('https://wa.me/${D.set.wa.replace(/\D/g,'').replace(/^0/,'62')}','_blank')">
            <div style="width:40px;height:40px;border-radius:12px;background:rgba(37,211,102,.2);display:grid;place-items:center;color:#25d366">${ic('share',20)}</div>
            <div style="flex:1"><b>Saluran WhatsApp Resmi</b><br><small class="mu">Berita & update toko</small></div>
            ${ic('next',16)}
          </div>`:''}
        </div>
      `:`
        <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold2);font-weight:700;margin-bottom:10px">Info Update & Saluran Resmi</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
          <div class="gl" style="margin:0;padding:12px;display:flex;align-items:center;gap:12px;cursor:pointer" onclick="open('https://wa.me/${waNum.replace(/\D/g,'').replace(/^0/,'62')}','_blank')">
            <div style="width:42px;height:42px;border-radius:14px;background:linear-gradient(135deg,#059669,#34d399);display:grid;place-items:center;color:#fff">${ic('chat',22)}</div>
            <div style="flex:1"><b>Saluran WhatsApp</b><br><small class="mu">Berita resmi ${E(D.set.name)}</small></div>
            ${ic('next',16)}
          </div>
          <div class="gl" style="margin:0;padding:12px;display:flex;align-items:center;gap:12px;cursor:pointer" onclick="wa0()">
            <div style="width:42px;height:42px;border-radius:14px;background:linear-gradient(135deg,#0284c7,#38bdf8);display:grid;place-items:center;color:#fff">${ic('shield',22)}</div>
            <div style="flex:1"><b>Callback & Harga</b><br><span class="pill" style="font-size:10px;margin-top:2px">TRANSPARAN</span><br><small class="mu">Order, Deposit & Info Harga</small></div>
            ${ic('next',16)}
          </div>
        </div>
      `}
      <div style="text-align:center;padding-top:6px;border-top:1px solid var(--ln);display:flex;align-items:center;justify-content:center;gap:6px">
        <i style="width:8px;height:8px;border-radius:50%;background:#4ade80;display:inline-block;box-shadow:0 0 8px #4ade80"></i>
        <span class="mu" style="font-weight:600;color:#86efac">Admin Online</span>
      </div>
    `
  };
  rm();
  if(isSup)renderChat();
}

function renderChat(){
  const u=me(),box=$('#cbox');if(!box)return;
  const msgs=(D.chats||[]).filter(c=>c.uid==u.id);
  box.innerHTML=msgs.length?msgs.map(m=>`<div class="msg ${m.from=='admin'?'a':'u'}"><b>${m.from=='admin'?'Admin':'Kamu'}</b> · <small class="mu">${m.time}</small><br>${E(m.text)}</div>`).join(''):'<p class="mu" style="text-align:center;margin:auto">Mulai percakapan dengan admin toko di sini.</p>';
  box.scrollTop=box.scrollHeight;
}
function sendChat(){
  const inp=$('#cin'),txt=(inp?.value||'').trim();if(!txt)return;
  const u=me();D.chats=D.chats||[];
  D.chats.push({id:uid(),uid:u.id,uname:u.username,from:'user',text:txt,time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})});
  inp.value='';save();renderChat();
}

// ---------- FEATURE: GAME ID CHECKER ----------
function checkGameId(){
  const gid=$('#b_uid')?.value.trim(),sv=$('#b_sv')?.value.trim();
  if(!gid)return toast('Masukkan User ID game terlebih dahulu');
  const box=$('#gid_nick');if(!box)return;
  box.innerHTML=`<span class="pill">${ic('check',14)} ID Terverifikasi: <b>Player_${E(gid.slice(-4))}</b> ${sv?'(Zone '+E(sv)+')':''}</span>`;
}

// ---------- SHOP ----------
const pic=x=>`<div class="pi" style="${x.img?`background-image:url(${x.img})`:''}">${x.img?'':fi(x)}`;
const pcard=p=>{
  const u=me(),[rt,rc]=rating(p.id),inc=(u.cart||[]).includes(p.id);
  const expValid=p.exp&&new Date(p.exp).getTime()>Date.now();
  return`<div class="pcd">${pic(p)}<span class="bd">${p.cat=='thrift'?'Thrifting'+(p.size?' · '+E(p.size):''):'Akun'}</span>${p.disc?`<span class="ds">-${p.disc}%</span>`:''}${expValid?`<span class="cd-badge" data-cd="${p.exp}">${ic('clock',11)} ${fmtCd(p.exp)}</span>`:''}<span class="hb" onclick="fav('${p.id}')">${ic('heart',17,(u.fav||[]).includes(p.id)?'#f6e27a':'none')}</span></div><div class="pb" onclick="dt('${p.id}')" style="cursor:pointer"><b>${E(p.name)}</b>${p.spec?`<span class="mu" style="color:var(--gold2)">${E(p.spec)}</span>`:rc?`<span class="mu">${stars(rt,12)} ${rt.toFixed(1)} (${rc})</span>`:`<span class="mu">${E(p.desc).slice(0,48)}</span>`}<span><span class="pr">${rp(pp(p))}</span>${p.disc?` <s class="mu">${rp(p.price)}</s>`:''}</span><span class="mu">Stok ${p.stock}${p.cond?' · '+E(p.cond):''}</span></div><div class="pa"><button class="g" ${p.stock<1?'disabled':''} onclick="buy('${p.id}')">${p.stock<1?'Habis':'Buy'}</button><button ${p.stock<1||inc?'disabled':''} onclick="addc('${p.id}')" title="Keranjang">${ic('cart',17)}</button></div></div>`
};
const gcard=g=>`<div class="pcd" style="cursor:pointer" onclick="S.g='${g.id}';go('topup')">${pic(g)}</div><div class="pb"><b>${E(g.name)}</b><span class="mu">Mulai ${rp(Math.min(...g.items.map(i=>i.p)))}</span></div></div>`;
function hero(){const b=D.banners[S.bi%D.banners.length];if(!b)return'<div id="hero"></div>';return`<div class="hero${b.vid||b.vurl?' v':''}" id="hero" style="${b.img?`background-image:linear-gradient(90deg,rgba(7,6,11,.88),rgba(7,6,11,.15)),url(${b.img})`:''}">${b.vid||b.vurl?`<video class="hv" id="hv" ${b.vurl?`src="${b.vurl}"`:`data-k="${b.vid}"`} muted loop playsinline autoplay ${b.img?`poster="${b.img}"`:''}></video>`:''}<div class="hc"><span class="tag">${E(D.set.tag).toUpperCase()}</span><h1>${E(b.t)}</h1><p class="mu" style="font-size:15px">${E(b.s)}</p><div class="row" style="margin-top:16px"><button class="g" onclick="go('thrift')">Belanja Sekarang</button><button onclick="go('topup')">Top Up Game</button></div></div><span class="dots">${D.banners.map((_,i)=>`<i class="${i==S.bi%D.banners.length?'a':''}" onclick="S.bi=${i};render()"></i>`).join('')}</span></div>`}
const tbl=(h,r)=>`<div class="tw gl" style="padding:8px"><table><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>${r.map(x=>`<tr>${x.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')||`<tr><td colspan=${h.length} class="mu">Belum ada data</td></tr>`}</table></div>`;
const ob=u=>D.orders.filter(x=>x.uid==u.id).reverse().map(x=>[
  `<b>${x.id}</b>`,
  E(x.title),
  rp(x.price),
  `<span class="st-badge st-${x.status}">${x.status}</span>`,
  x.date,
  `<div class="row" style="gap:5px">${x.status=='Menunggu'?`<button class="g" style="padding:6px 10px;font-size:12px" onclick="openPay('${x.id}')">Bayar</button>`:''}${x.status=='Verifikasi'?`<button class="g" style="padding:6px 10px;font-size:12px" onclick="openPay('${x.id}')">Cek Status</button>`:''}${x.status=='Selesai'||(x.isDp&&x.dpPaid&&x.status=='Diproses')?`<button class="g" style="padding:6px 10px;font-size:12px" onclick="openPay('${x.id}')">Akses</button>`:''}${x.isDp&&x.remPrice>0&&x.status=='Diproses'?`<button class="g" style="padding:6px 10px;font-size:12px" onclick="payRemain('${x.id}')">Lunasi (${rp(x.remPrice)})</button>`:''}<button onclick="receiptModal('${x.id}')" title="Struk">${ic('file',14)}</button><button onclick="wa('${x.id}')">${ic('chat',14)}WA</button><button onclick="reorder('${x.id}')" title="Beli Lagi">Beli Lagi</button>${x.status=='Menunggu'?`<button class="dg" onclick="cancelo('${x.id}')">Batal</button>`:''}${x.status=='Selesai'&&x.pid&&!D.reviews.some(r=>r.pid==x.pid&&r.uid==x.uid)?`<button onclick="rev('${x.pid}')">${ic('star',14)}Ulas</button>`:''}</div>`
]);

function view(){const u=me();
 if(S.v=='home'){
   const T=[['thrift','shirt','Thrifting'],['akun','gamepad','Jual Beli Akun'],['topup','gem','Top Up Game']];
   const flashItems=D.products.filter(p=>p.flash&&p.stock>0);
   const recently=(u.viewed||[]).map(id=>D.products.find(p=>p.id==id)).filter(Boolean).slice(0,4);
   return hero()
     +`<div class="tiles">${T.map(t=>`<div class="tile" style="${D.set.cat[t[0]]?`background-image:url(${D.set.cat[t[0]]})`:''}" onclick="go('${t[0]}')"><b>${ic(t[1],20)}${t[2]}</b></div>`).join('')}</div>`
     +`<div class="trust"><div>${ic('lock',22)}Transaksi Aman</div><div>${ic('bolt',22)}Proses Cepat</div><div>${ic('shield',22)}Barang Terkurasi</div><div>${ic('chat',22)}Support 24/7</div></div>`
     +(flashItems.length?`<div class="fl-bar"><div class="row">${ic('fire',22)}<b>FLASH SALE HARI INI</b><span class="mu">Diskon terbatas!</span></div><div class="fl-tm" id="fl-clock"><span>05</span>:<span>59</span>:<span>59</span></div></div><div class="grid" style="margin-top:12px">${flashItems.slice(0,4).map(pcard).join('')}</div>`:'')
     +`<div class="sec"><h2>Top Up Populer</h2><a onclick="S.g=null;go('topup')">Lihat semua ${ic('next',14)}</a></div><div class="hs">${D.games.map(gcard).join('')}</div>`
     +`<div class="sec"><h2>Thrifting Pilihan</h2><a onclick="go('thrift')">Lihat semua ${ic('next',14)}</a></div><div class="grid">${D.products.filter(p=>p.cat=='thrift').slice(-4).reverse().map(pcard).join('')}</div>`
     +`<div class="sec"><h2>Akun Premium</h2><a onclick="go('akun')">Lihat semua ${ic('next',14)}</a></div><div class="grid">${D.products.filter(p=>p.cat=='akun').slice(-4).reverse().map(pcard).join('')}</div>`
     +(recently.length?`<div class="sec"><h2>Terakhir Dilihat</h2><a onclick="openViewedModal()">Lihat semua (${(u.viewed||[]).length}) ${ic('next',14)}</a></div><div class="grid">${recently.map(pcard).join('')}</div>`:'');
 }
 if(S.v=='thrift'||S.v=='akun')return`<div class="sec"><h2>${S.v=='thrift'?'Thrifting':'Jual Beli Akun'}</h2><span class="mu">${D.products.filter(p=>p.cat==S.v).length} item</span></div>
   <div class="gl" style="padding:12px;margin-bottom:14px">
     <div class="row">
       <input style="flex:2;min-width:160px;margin:0" placeholder="Cari produk, ukuran, atau spek..." value="${E(S.q)}" oninput="S.q=this.value;sr()">
       <select style="width:auto;margin:0" onchange="S.so=this.value;sr()">
         <option value="">Terbaru</option>
         <option value="a" ${S.so=='a'?'selected':''}>Harga terendah</option>
         <option value="d" ${S.so=='d'?'selected':''}>Harga tertinggi</option>
         <option value="disc" ${S.so=='disc'?'selected':''}>Diskon terbesar</option>
       </select>
     </div>
     <div class="row" style="margin-top:10px">
       <input type="number" placeholder="Harga min" style="width:120px;margin:0" value="${S.fmin}" oninput="S.fmin=this.value;sr()">
       <input type="number" placeholder="Harga max" style="width:120px;margin:0" value="${S.fmax}" oninput="S.fmax=this.value;sr()">
       <label style="display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" style="width:auto;margin:0" ${S.fstock?'checked':''} onchange="S.fstock=this.checked;sr()"> Ready Stok</label>
       <button style="padding:6px 12px;font-size:12px" onclick="S.q='';S.fmin='';S.fmax='';S.fstock=false;S.so='';render()">Reset Filter</button>
     </div>
   </div>
   <div class="grid" id="pl">${plist()}</div>`;
 if(S.v=='topup'){const g=D.games.find(x=>x.id==S.g);if(!g)return`<div class="sec"><h2>Top Up Game</h2></div><div class="grid">${D.games.map(gcard).join('')}</div>`;return`<div class="sec"><h2>${E(g.name)}</h2><button onclick="S.g=null;render()">${ic('back',15)}Semua game</button></div><div class="grid">${g.items.map((i,n)=>`<div class="gl" style="cursor:pointer;margin:0" onclick="tu('${g.id}',${n})"><b>${E(i.l)}</b><div class="pr">${rp(i.p)}</div></div>`).join('')}</div>`}
 if(S.v=='profil'){
   const tr=userTier(u);
   return`<div class="sec"><h2>Akun Saya</h2></div>
   <div class="gl">
     <div class="row">${avt(u,64)}<div style="flex:1"><b style="font-size:18px">${E(u.name)}</b>${u.role=='admin'?' <span class="tag">ADMIN</span>':''} <span class="pill">${ic('crown',13)} ${tr.name}</span><br><span class="mu">@${E(u.username)} · ${E(u.email)}</span></div></div>
     <div class="gl" style="margin-top:14px;padding:12px;background:rgba(212,175,55,.06)">
       <div class="row" style="justify-content:space-between"><span>Poin Loyalitas: <b class="pr">${tr.pts} Poin</b></span><span class="mu">Total Belanja: ${rp(tr.spent)}</span></div>
       <div class="tier-bar"><i style="width:${tr.pct}%"></i></div>
       <small class="mu">${tr.name=='VIP Diamond'?'Level tertinggi tercapai! Nikmati prioritas layanan VIP.':'Belanja lagi untuk naik level & kumpulkan poin!'}</small>
     </div>
     <div class="row" style="margin-top:14px"><button class="g" onclick="fprof()">Edit Profil</button><button onclick="fpw()">Ganti Password</button><button onclick="openViewedModal()">${ic('clock',15)}Riwayat Dilihat</button><button class="dg" onclick="logout()">Keluar</button></div>
   </div>
   <div class="sec"><h2>Riwayat Pesanan</h2></div>${tbl(['ID','Item','Total','Status','Tanggal','Aksi'],ob(u))}`;
 }
 if(S.v=='cart')return cartv(u);
 if(S.v=='help')return helpv();
 if(S.v=='fav'){const l=D.products.filter(p=>(u.fav||[]).includes(p.id));return`<div class="sec"><h2>Favorit Saya</h2></div><div class="grid">${l.map(pcard).join('')||'<p class="mu">Belum ada favorit. Tekan ikon hati pada produk.</p>'}</div>`}
 if(S.v=='admin'&&isA())return adm();
 return''}

const plist=()=>{
  let l=D.products.filter(p=>p.cat==S.v&&p.name.toLowerCase().includes(S.q.toLowerCase()));
  if(S.fmin)l=l.filter(p=>pp(p)>=+S.fmin);
  if(S.fmax)l=l.filter(p=>pp(p)<=+S.fmax);
  if(S.fstock)l=l.filter(p=>p.stock>0);
  if(S.so=='a')l.sort((a,b)=>pp(a)-pp(b));
  else if(S.so=='d')l.sort((a,b)=>pp(b)-pp(a));
  else if(S.so=='disc')l.sort((a,b)=>(b.disc||0)-(a.disc||0));
  else l.reverse();
  return l.map(pcard).join('')||'<p class="mu">Tidak ada produk yang cocok dengan filter.</p>'
};
const sr=()=>{$('#pl').innerHTML=plist()};
const avt=(u,s=40)=>`<div class="av" style="width:${s}px;height:${s}px;${u.av?`background-image:url(${u.av})`:''}" onclick="go('profil')">${u.av?'':E(u.name[0]||'?').toUpperCase()}</div>`;

function drawer(u){const L=[['home','home','Beranda'],['thrift','shirt','Thrifting'],['akun','gamepad','Akun Game'],['topup','gem','Top Up Game'],['cart','cart','Keranjang'],['fav','heart','Favorit'],['help','help','Bantuan'],['profil','user','Akun Saya']];return`<div class="ov" style="justify-items:start" onclick="S.dr=false;render()"></div><div class="dr"><div class="row" style="padding:8px 10px 16px">${avt(u)}<div><b>${E(u.name)}</b><br><span class="mu">@${E(u.username)}</span></div></div>${L.map(x=>`<button onclick="S.g=null;go('${x[0]}')">${ic(x[1],19)}${x[2]}</button>`).join('')}<button onclick="S.dr=false;openViewedModal()">${ic('clock',19)}Riwayat Dilihat</button><button onclick="S.dr=false;openChatModal()">${ic('chat',19)}Live Chat Admin</button>${isA()?`<button style="color:var(--gold2)" onclick="go('admin')">${ic('shield',19)}Admin Panel</button>`:''}<button class="dg" style="margin-top:auto" onclick="logout()">${ic('logout',19)}Keluar</button></div>`}

function render(){if(!D)return;if(!me()){document.body.classList.remove('x');$('#app').innerHTML=authView();return rm()}
 const u=me();
 const unread=(D.notifs||[]).filter(n=>(n.uid==u.id||n.uid=='all')&&!n.read).length;
 $('#app').innerHTML=(S.v=='admin'&&isA()?'':`<header>
   <button class="ic" onclick="S.dr=true;render()" title="Menu">${ic('menu',20)}</button>
   <span class="lw" onclick="go('home')">${logo(30)}<span class="logo">${E(D.set.name)}</span></span>
   <div class="h-acts">
     <button class="ic" onclick="openGlobalSearch()" title="Cari">${ic('search',18)}</button>
     <button class="ic" onclick="openViewedModal()" title="Riwayat Dilihat">${ic('clock',18)}</button>
     <button class="ic" onclick="openNotifs()" title="Notifikasi">${ic('bell',18)}${unread?'<i class="notif-dot"></i>':''}</button>
     <button class="ic" onclick="S.light=!S.light;applySet();render()" title="Ganti Tema">${ic(S.light?'moon':'sun',18)}</button>
     <button class="ic" onclick="go('cart')" title="Keranjang">${ic('cart',18)}${(u.cart||[]).length?`<i class="cb">${u.cart.length}</i>`:''}</button>
     ${avt(u,36)}
   </div>
 </header>${D.set.ann?`<div class="tk"><span>${E(D.set.ann)}</span></div>`:''}`)
 +`<div class="vw">`+view()+`</div>`
 +`<footer>© ${new Date().getFullYear()} ${E(D.set.name)}${D.set.wa?` · WhatsApp ${E(D.set.wa)}`:''}</footer>`
 +(S.v!='admin'?`${D.set.fabNotif?`<button class="fab-notif" onclick="openNotifs()" title="Notifikasi">${ic('bell',24)}${unread?'<i class="notif-dot"></i>':''}</button>`:''}<button class="fab-sup" onclick="openChatModal()" title="Dukungan / Live Chat">${ic('headset',26)}</button>`:'')
 +bnav()+(S.dr?drawer(u):'');
 rm();vload()
}

// ---------- MODAL ----------
function form(title,f,cb,btn){S.gv={};S.m={title,f,cb,btn};rm()}
function rm(){let o=$('#mo');if(o)o.remove();if(!S.m)return;const m=S.m;if(m.sheet){document.body.insertAdjacentHTML('beforeend',`<div class="ov" id="mo" onclick="if(event.target==this)shClose()"><div class="md sh">${shHtml()}</div></div>`);return}document.body.insertAdjacentHTML('beforeend',`<div class="ov" id="mo" onclick="if(event.target==this){S.m=null;rm()}"><div class="md"><h3 style="margin-top:0;color:var(--gold2)">${E(m.title)}</h3>${m.html||m.f.map(f=>`<label>${f.l}</label>`+(f.t=='textarea'?`<textarea id="f_${f.k}" rows="4">${E(f.v)}</textarea>`:f.t=='select'?`<select id="f_${f.k}">${f.o.map(x=>`<option ${x==f.v?'selected':''}>${x}</option>`).join('')}</select>`:f.t=='video'?fileBox('f_'+f.k,'video','',f.k):f.t=='file'?fileBox('f_'+f.k,'image',f.v,f.k):`<input id="f_${f.k}" type="${f.t||'text'}" value="${E(f.v)}">`)).join('')}<div class="row">${m.f.length?`<button class="g" onclick="MS()">${m.btn||'Simpan'}</button>`:''}<button onclick="S.m=null;rm()">${m.f.length?'Batal':'Tutup'}</button></div></div></div>`)}
async function MS(){try{await MS0()}catch(e){console.error(e);toast('Gagal: '+(e.message||e))}}
async function MS0(){const o={};for(const f of S.m.f){const e=$('#f_'+f.k);o[f.k]=S.gv[f.k]&&(f.t=='video'||f.t=='file')?S.gv[f.k]:f.t=='video'?(e.files[0]||null):f.t=='file'?(e.files[0]?await up(e.files[0],f.max||520):f.v||''):e.value}const r=await S.m.cb(o);if(typeof r=='string')return toast(r);S.m=null;rm();render()}

// ---------- ACCOUNT ----------
function fprof(){const u=me();form('Edit Profil',[{k:'n',l:'Nama Lengkap',v:u.name},{k:'u',l:'Username',v:u.username},{k:'e',l:'Email',v:u.email},{k:'av',l:'Foto profil',t:'file',v:u.av,max:240}],async o=>{o.n=o.n.trim();o.u=o.u.trim();o.e=o.e.trim().toLowerCase();if(!o.n||!/^[\w .]{3,20}$/.test(o.u))return'Nama wajib & username 3-20 karakter';if(!/^\S+@\S+\.\S+$/.test(o.e))return'Email tidak valid';if(o.e!=u.email)return'Email tidak dapat diubah di sini';if(D.users.some(x=>x.id!=u.id&&x.username.toLowerCase()==o.u.toLowerCase()))return'Username sudah dipakai';if(o.u.toLowerCase()!=u.username.toLowerCase()){const {data:tk}=await sb.rpc('username_taken',{un:o.u});if(tk)return'Username sudah dipakai'}if(D.users.some(x=>x.id!=u.id&&x.email.toLowerCase()==o.e))return'Email sudah dipakai';Object.assign(u,{name:o.n,username:o.u,email:o.e,av:o.av});save()})}
function fpw(){const u=me();form('Ganti Password',[{k:'o',l:'Password lama',t:'password',v:''},{k:'n',l:'Password baru',t:'password',v:''},{k:'c',l:'Konfirmasi password baru',t:'password',v:''}],async o=>{if(o.n.length<6)return'Password baru minimal 6 karakter';if(o.n!=o.c)return'Konfirmasi tidak sama';const {error:e1}=await sb.auth.signInWithPassword({email:u.email,password:o.o});if(e1)return'Password lama salah';const {error}=await sb.auth.updateUser({password:o.n});if(error)return authErr(error);toast('Password diganti')})}

// ---------- ADMIN PAGE ----------
function adm(){const t=S.at,T=[['dash','chart','Dashboard'],['produk','bag','Produk'],['game','gem','Top Up'],['banner','image','Banner'],['tampilan','palette','Tampilan'],['kupon','ticket','Kupon'],['pesanan','package','Pesanan'],['chat','chat','Live Chat'],['user','users','Pengguna'],['backup','download','Backup & Data']];let c='';
 const th=x=>`<div class="th" style="${x.img?`background-image:url(${x.img})`:''}">${x.img?'':fi(x,22)}</div>`,ub=id=>{const u=D.users.find(x=>x.id==id);return u?E(u.username):'-'};
 if(t=='dash'){
   const rev=D.orders.filter(o=>o.status=='Selesai').reduce((a,o)=>a+o.price,0);
   const pend=D.orders.filter(o=>o.status=='Menunggu').reduce((a,o)=>a+o.price,0);
   c=`<div class="stats"><div>Pendapatan Selesai<b>${rp(rev)}</b></div><div>Potensi Menunggu<b>${rp(pend)}</b></div><div>Total Pesanan<b>${D.orders.length}</b></div><div>Produk<b>${D.products.length}</b></div><div>Pengguna<b>${D.users.length}</b></div></div>${chart7()}${lowstock()}<div class="sec"><h2>Pesanan Terbaru</h2></div>${tbl(['ID','Pembeli','Item','Total','Status'],D.orders.slice(-5).reverse().map(o=>[o.id,ub(o.uid),E(o.title),rp(o.price),`<span class="st-badge st-${o.status}">${o.status}</span>`]))}`;
 }
 if(t=='produk')c=`<div class="row"><button class="g" onclick="fp()">+ Tambah Produk</button><button onclick="exportCSV('produk')">${ic('download',15)}Export Produk CSV</button></div>`+tbl(['Gambar','Kategori','Nama','Harga','Stok','Timer',''],D.products.map(p=>[th(p),p.cat,E(p.name)+(p.flash?' <span class="pill">Flash</span>':''),rp(pp(p)),p.stock,p.exp?fmtCd(p.exp):'-',`<button onclick="fp('${p.id}')">Edit</button> <button class="dg" onclick="del('products','${p.id}')">Hapus</button>`]));
 if(t=='game')c=`<button class="g" onclick="fg()">+ Tambah Game</button>`+tbl(['Gambar','Game','Nominal',''],D.games.map(g=>[th(g),E(g.name),g.items.length+' item',`<button onclick="fg('${g.id}')">Edit</button> <button class="dg" onclick="del('games','${g.id}')">Hapus</button>`]));
 if(t=='banner')c=`<button class="g" onclick="fb()">+ Tambah Banner</button>`+tbl(['Gambar','Judul','Subjudul',''],D.banners.map((b,i)=>[th(b),E(b.t)+(b.vid||b.vurl?' (video)':''),E(b.s),`<button onclick="fb(${i})">Edit</button> <button class="dg" onclick="delb(${i})">Hapus</button>`]));
 if(t=='tampilan'){const s=D.set,ppop=s.postPopup||{};c=`
   <div class="gl"><h3 style="margin-top:0">Identitas & Logo Toko</h3>
     <label>Logo Toko Custom (ganti ikon berlian di header & halaman masuk)</label>${fileBox('slogo','image',s.logo||'')}
     ${s.logo?`<button class="dg" style="margin:-6px 0 12px;padding:6px 12px;font-size:12px" onclick="D.set.logo='';save();render();toast('Logo dikembalikan ke default')">Hapus Logo Custom</button>`:''}
     <label>Nama toko</label><input id="sn" value="${E(s.name)}">
     <label>Tagline</label><input id="st" value="${E(s.tag)}">
     <label>WhatsApp toko</label><input id="sw" value="${E(s.wa)}">
     <label>Teks pengumuman berjalan</label><input id="sa" value="${E(s.ann)}">
     <label>Waktu Akhir Flash Sale Beranda</label><input id="sfl" type="datetime-local" value="${E(s.flashEnd||'')}">
   </div>
   <div class="gl"><h3 style="margin-top:0">Konfigurasi Pembayaran, QRIS & DANA</h3>
     <label>Metode pembayaran (pisahkan dengan koma)</label><input id="spy" value="${E(s.pay)}">
     <label>Persentase DP Default untuk Produk/Thrifting (%, 0 = nonaktif)</label><input id="sdp" type="number" min="10" max="90" value="${s.dpPct??50}">
     <label>Daftar Nomor Rekening / E-Wallet (tampil di layar pembayaran & bisa disalin)</label><textarea id="spacc" rows="3">${E(s.payAccounts||'')}</textarea>
     <label>Instruksi pembayaran umum</label><textarea id="sinfo" rows="3">${E(s.payinfo)}</textarea>
     <label>Gambar QRIS (tampil & bisa diunduh pembeli)</label>${fileBox('sq','image',s.qris||'')}
     <hr style="border:0;border-top:1px solid var(--ln);margin:14px 0">
     <b style="color:var(--gold2);display:block;margin-bottom:8px">Pengaturan Metode DANA</b>
     <label>Label Tombol Buka DANA</label><input id="sdanalbl" placeholder="Buka DANA" value="${E(s.danaLabel||'Buka DANA')}">
     <label>Link / URL Tujuan DANA (Link DANA Kaget / DANA Bisnis / Deep Link)</label><input id="sdanaurl" placeholder="https://link.dana.id/..." value="${E(s.danaUrl||'')}">
     <label>Catatan Pembayaran DANA (opsional)</label><textarea id="sdananote" rows="2" placeholder="Contoh: Transfer ke DANA 0812xxx atau klik Buka DANA...">${E(s.danaNote||'')}</textarea>
   </div>
   <div class="gl"><h3 style="margin-top:0">Tombol Notifikasi Melayang</h3>
     <label>Tombol lonceng ungu di halaman pembeli</label>
     <select id="fnon"><option value="1" ${s.fabNotif?'selected':''}>Aktif (Tampilkan ke pembeli)</option><option value="0" ${!s.fabNotif?'selected':''}>Nonaktif / Sembunyikan</option></select>
     <p class="mu" style="margin:6px 0 0">Jika nonaktif, tombol ini tidak tampil sama sekali di halaman pembeli.</p>
   </div>
   <div class="gl"><h3 style="margin-top:0">Pop-up Konfirmasi Setelah Pembayaran</h3>
     <label>Status Pop-up Setelah Konfirmasi Pembayaran</label>
     <select id="ppon"><option value="1" ${ppop.on?'selected':''}>Aktif (Tampilkan Pop-up)</option><option value="0" ${!ppop.on?'selected':''}>Nonaktif / Sembunyikan</option></select>
     <label>Banner Gambar Pop-up (Mendukung HD & rasio 9:16)</label>${fileBox('ppimg','image',ppop.img||'')}
     ${ppop.img?`<button type="button" class="dg" style="margin:-6px 0 12px;padding:6px 12px;font-size:12px" onclick="D.set.postPopup.img='';save();render();toast('Banner pop-up dihapus')">Hapus Banner Gambar</button>`:''}
     <label>Judul Pop-up</label><input id="ppt" value="${E(ppop.title||'Terima Kasih Sudah Order!')}">
     <label>Deskripsi Pop-up</label><textarea id="ppm" rows="3">${E(ppop.msg||'')}</textarea>
     <label>Label Tombol Akses</label><input id="ppll" value="${E(ppop.linkLabel||'Akses Sekarang')}">
     <label>Upload File Akses (ZIP, PDF, TXT, Gambar, Dokumen, dll - opsional)</label>
     <div class="upl">
       <label class="up" for="ppfile">
         <span class="upi" id="pv_ppfile">${ic('file',22)}</span>
         <span class="upt"><b>Pilih File untuk Diunduh Pembeli</b><small id="fn_ppfile">${ppop.fileName?'File tersimpan: '+E(ppop.fileName):'Belum ada file diupload'}</small></span>
       </label>
       <input id="ppfile" type="file" hidden onchange="handlePpFile(this)">
     </div>
     ${ppop.filePath?`<button type="button" class="dg" style="margin:-6px 0 12px;padding:6px 12px;font-size:12px" onclick="D.set.postPopup.filePath='';D.set.postPopup.fileName='';save();render();toast('File akses dihapus')">Hapus File Akses</button>`:''}
     <label>Atau Masukkan URL Tautan Akses (Google Drive, MediaFire, Link Web, dll)</label><input id="pplu" placeholder="https://..." value="${E(ppop.linkUrl||'')}">
     <div class="row" style="margin-top:6px">
       <button type="button" class="dg" style="padding:7px 12px;font-size:12px" onclick="D.set.postPopup={on:false,title:'',msg:'',img:'',filePath:'',fileName:'',linkLabel:'',linkUrl:''};save();render();toast('Konfigurasi pop-up dihapus/direset')">${ic('trash',14)}Hapus & Reset Pop-up</button>
     </div>
   </div>
   <div class="gl"><h3 style="margin-top:0">Background, Blur & Partikel</h3>
     <label>Gambar background</label>${fileBox('sb','image',s.bg||'')}
     <label>Warna dasar</label><input id="sc" type="color" value="${s.color}">
     <label>Gelap overlay (0 - 0.9)</label><input id="so" type="number" step=".05" min="0" max=".9" value="${s.ov}">
     <label>Efek Blur Background (0 - 20 px)</label><input id="sbl" type="number" min="0" max="20" value="${s.blur||0}">
     <label>Warna partikel</label><input id="sp" type="color" value="${s.pc}">
   </div>
   <div class="gl"><h3 style="margin-top:0">Gambar Kategori (beranda)</h3>
     <label>Thrifting</label>${fileBox('c1','image',s.cat.thrift||'')}
     <label>Jual Beli Akun</label>${fileBox('c2','image',s.cat.akun||'')}
     <label>Top Up Game</label>${fileBox('c3','image',s.cat.topup||'')}
   </div>
   <div class="row"><button class="g" onclick="ss()">Simpan Semua</button><button class="dg" onclick="D.set.bg='';D.set.cat={thrift:'',akun:'',topup:''};save();applySet();render()">Hapus gambar background & kategori</button></div>`}
 if(t=='kupon')c=`<button class="g" onclick="fk()">+ Tambah Kupon</button>`+tbl(['Kode','Diskon','Aktif',''],D.coupons.map((k,i)=>[E(k.code),k.pct+'%',k.on?'Ya':'Tidak',`<button onclick="fk(${i})">Edit</button> <button class="dg" onclick="D.coupons.splice(${i},1);save();render()">Hapus</button>`]));
 if(t=='pesanan')c=`<div class="row"><select style="width:auto;margin:0" onchange="S.of=this.value;render()"><option value="">Semua status</option>${['Menunggu','Verifikasi','Diproses','Selesai','Dibatalkan'].map(x=>`<option ${S.of==x?'selected':''}>${x}</option>`).join('')}</select><button onclick="exportCSV('pesanan')">${ic('download',15)}Export Pesanan CSV</button></div>`+tbl(['ID','Pembeli','Item','Info','Bayar','Total','Bukti','Status'],D.orders.filter(o=>!S.of||o.status==S.of).slice().reverse().map(o=>[o.id,ub(o.uid),E(o.title),E(o.info),o.pay,rp(o.price),o.proof?`<button style="padding:6px 10px;font-size:12px" onclick="viewProof('${o.id}')">${ic('eye',14)}Lihat</button>${o.status=='Verifikasi'?`<br><button class="g" style="padding:6px 10px;font-size:12px;margin-top:4px" onclick="adminConfirm('${o.id}')">Konfirmasi</button>`:''}`:'-',`<select onchange="updateOrderStatus('${o.id}',this.value)" style="margin:0">${['Menunggu','Verifikasi','Diproses','Selesai','Dibatalkan'].map(s=>`<option ${s==o.status?'selected':''}>${s}</option>`).join('')}</select>`]));
 if(t=='chat'){
   const uids=[...new Set((D.chats||[]).map(x=>x.uid))];
   c=uids.length?uids.map(id=>{
     const msgs=D.chats.filter(x=>x.uid==id);
     const uname=msgs[0]?.uname||id;
     return`<div class="gl"><div class="row" style="justify-content:space-between"><b>@${E(uname)}</b><span class="mu">${msgs.length} pesan</span></div><div class="chat-box" style="max-height:160px">${msgs.map(m=>`<div class="msg ${m.from=='admin'?'u':'a'}"><b>${m.from=='admin'?'Admin':E(uname)}</b>: ${E(m.text)}</div>`).join('')}</div><div class="row" style="flex-wrap:nowrap"><input id="adm_c_${id}" placeholder="Balas pesan @${E(uname)}..." style="margin:0;flex:1"><button class="g" onclick="admReply('${id}')">Balas</button></div></div>`;
   }).join(''):'<div class="gl mu">Belum ada pesan masuk dari pelanggan.</div>';
 }
 if(t=='user')c=tbl(['Nama','Username','Email','Role',''],D.users.map(u=>[E(u.name),E(u.username),E(u.email),u.role,u.role=='admin'?'':`<button class="dg" onclick="del('users','${u.id}')">Hapus</button>`]));
 if(t=='backup')c=`<div class="gl"><h3 style="margin-top:0">Export & Backup Database Toko</h3><p class="mu">Unduh seluruh data produk, pesanan, kupon, dan pengaturan dalam format JSON agar aman dan bisa dipulihkan kapan saja.</p><div class="row"><button class="g" onclick="backupJSON()">${ic('download',16)}Download Backup JSON</button><button onclick="exportCSV('pesanan')">${ic('file',16)}Export Pesanan (CSV)</button><button onclick="exportCSV('produk')">${ic('file',16)}Export Produk (CSV)</button></div></div><div class="gl"><h3 style="margin-top:0">Restore Database dari JSON</h3><input type="file" accept=".json" onchange="restoreJSON(this)"></div>`;
 return`<header><button onclick="go('home')">${ic('back',16)}Kembali ke Toko</button><span class="logo" style="text-align:center">ADMIN PANEL</span>${avt(me())}</header><div class="adm"><div class="side">${T.map(x=>`<button class="${t==x[0]?'on':''}" onclick="S.at='${x[0]}';render()">${ic(x[1],18)}${x[2]}</button>`).join('')}</div><div>${c}</div></div>`
}

function updateOrderStatus(oid,st){
  const o=D.orders.find(x=>x.id==oid);if(!o)return;
  o.status=st;
  addNotif(o.uid,'Status Pesanan '+o.id,'Pesanan "'+o.title+'" kini berstatus: '+st+'.');
  save();toast('Status diperbarui ke '+st);
}
function admReply(uidTarget){
  const inp=$('#adm_c_'+uidTarget),txt=(inp?.value||'').trim();if(!txt)return;
  D.chats.push({id:uid(),uid:uidTarget,uname:'Admin',from:'admin',text:txt,time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})});
  addNotif(uidTarget,'Balasan Admin',txt);
  save();render();toast('Balasan terkirim');
}
function backupJSON(){
  const b=new Blob([JSON.stringify(D,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='backup-dzaki-real-'+new Date().toISOString().slice(0,10)+'.json';a.click();
}
function restoreJSON(el){
  const f=el.files[0];if(!f)return;
  const r=new FileReader();r.onload=()=>{try{
    const d=JSON.parse(r.result);if(!d.products)return toast('Format file backup tidak valid');
    if(!confirm('Pulihkan produk, game, banner, kupon, ulasan, dan pengaturan dari file ini? Data saat ini akan diganti.'))return;
    ['products','games','banners','coupons','reviews'].forEach(k=>{if(Array.isArray(d[k]))D[k]=d[k]});
    if(d.set){const {postPopup,...rest}=d.set;D.set={...D.set,...rest}}
    save();applySet();render();toast('Data toko berhasil dipulihkan');
  }catch(e){toast('Gagal membaca file JSON')}};r.readAsText(f);
}
function exportCSV(type){
  let rows=[];
  if(type=='pesanan'){
    rows=[['ID','Tanggal','Item','Metode','Total','Status','Info'],...D.orders.map(o=>[o.id,o.date,o.title,o.pay,o.price,o.status,o.info])];
  }else{
    rows=[['ID','Kategori','Nama','Harga','Diskon(%)','Stok','Ukuran/Spek'],...D.products.map(p=>[p.id,p.cat,p.name,p.price,p.disc||0,p.stock,p.size||p.spec||''])];
  }
  const csv=rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download=`export-${type}-${new Date().toISOString().slice(0,10)}.csv`;a.click();
}

function fp(id){
  const p=D.products.find(x=>x.id==id)||{cat:'thrift',name:'',price:'',stock:1,desc:'',img:'',imgs:[],size:'',cond:'',spec:'',exp:'',flash:false};
  form(id?'Edit Produk':'Produk Baru',[
    {k:'cat',l:'Kategori',t:'select',o:['thrift','akun'],v:p.cat},
    {k:'name',l:'Nama',v:p.name},
    {k:'price',l:'Harga (Rp)',t:'number',v:p.price},
    {k:'disc',l:'Diskon produk (%), 0 = tanpa diskon',t:'number',v:p.disc||0},
    {k:'dp',l:'Opsi DP / Uang Muka (%) - kosongkan untuk ikut default toko, 0 = wajib lunas',t:'number',v:p.dp??''},
    {k:'stock',l:'Stok',t:'number',v:p.stock},
    {k:'size',l:'Ukuran (Thrifting) / Spesifikasi Singkat (Akun)',v:p.size||p.spec||''},
    {k:'cond',l:'Kondisi Barang (opsional, misal 9.5/10)',v:p.cond||''},
    {k:'flash',l:'Tampilkan di Flash Sale Beranda?',t:'select',o:['Tidak','Ya'],v:p.flash?'Ya':'Tidak'},
    {k:'exp',l:'Batas Waktu Countdown Promo (opsional)',t:'datetime-local',v:p.exp||''},
    {k:'desc',l:'Deskripsi Lengkap',t:'textarea',v:p.desc},
    {k:'img',l:'Foto Utama Produk',t:'file',v:p.img,max:900},
    {k:'img2',l:'Foto Tambahan 2 (Galeri Produk - opsional)',t:'file',v:(p.imgs||[])[0]||'',max:900},
    {k:'img3',l:'Foto Tambahan 3 (Galeri Produk - opsional)',t:'file',v:(p.imgs||[])[1]||'',max:900},
    {k:'rm',l:'Hapus semua foto saat ini?',t:'select',o:['Tidak','Ya'],v:'Tidak'}
  ],o=>{
    if(!o.name.trim())return'Nama wajib diisi';
    o.price=+o.price;o.stock=+o.stock;o.disc=Math.min(90,Math.max(0,+o.disc||0));o.dp=o.dp===''?'':Math.min(90,Math.max(0,+o.dp||0));
    o.flash=o.flash=='Ya';
    if(o.cat=='thrift'){o.size=o.size.trim();o.spec=''}else{o.spec=o.size.trim();o.size=''}
    o.imgs=[o.img2,o.img3].filter(Boolean);
    delete o.img2;delete o.img3;
    if(o.rm=='Ya'){o.img='';o.imgs=[]}delete o.rm;
    if(id)Object.assign(p,o);else D.products.push({id:uid(),...o});
    save();
  })
}
function fg(id){const g=D.games.find(x=>x.id==id)||{name:'',img:'',items:[]};form(id?'Edit Game':'Game Baru',[{k:'name',l:'Nama game',v:g.name},{k:'items',l:'Nominal (satu per baris, format label:harga)',t:'textarea',v:g.items.map(i=>i.l+':'+i.p).join('\n')},{k:'img',l:'Gambar/logo game',t:'file',v:g.img},{k:'rm',l:'Hapus gambar saat ini?',t:'select',o:['Tidak','Ya'],v:'Tidak'}],o=>{if(!o.name.trim())return'Nama wajib diisi';o.items=o.items.split('\n').map(l=>l.split(':')).filter(a=>a[0].trim()&&+a[1]).map(a=>({l:a[0].trim(),p:+a[1]}));if(!o.items.length)return'Isi minimal 1 nominal (contoh: 86 Diamond:22000)';if(o.rm=='Ya')o.img='';delete o.rm;if(id)Object.assign(g,o);else D.games.push({id:uid(),...o});save()})}
function fb(i){const b=D.banners[i]||{t:'',s:'',img:''};form(i>=0?'Edit Banner':'Banner Baru',[{k:'t',l:'Judul',v:b.t},{k:'s',l:'Subjudul',v:b.s},{k:'img',l:'Foto banner (upload untuk mengganti; jadi cadangan jika ada video)',t:'file',v:b.img,max:1100},{k:'vf',l:'Video banner (MP4/WebM, maks 40MB) '+(b.vid?'- video sudah ada, upload untuk mengganti':'- opsional'),t:'video'},{k:'rv',l:'Hapus video saat ini?',t:'select',o:['Tidak','Ya'],v:'Tidak'}],async o=>{if(!o.t.trim())return'Judul wajib diisi';const v=o.vf,rmv=o.rv=='Ya';delete o.vf;delete o.rv;o.vurl=b.vurl||'';o.vid=b.vid||'';if(typeof v=='string'&&v){o.vurl=v;if(b.vid)vdel(b.vid);o.vid=''}else if(v){if(v.size>40*1024*1024)return'Video maksimal 40MB';try{const ext=(String(v.name).split('.').pop()||'mp4').toLowerCase();const p=await putFile('media',v,rnd()+'.'+ext,v.type||'video/mp4');o.vurl=pubUrl(p);if(b.vid)vdel(b.vid);o.vid=''}catch(e){return'Gagal mengunggah video: '+(e.message||e)}}else if(rmv){if(b.vid)vdel(b.vid);o.vid='';o.vurl=''}if(i>=0)Object.assign(b,o);else D.banners.push(o);save()})}
function fk(i){const k=D.coupons[i]||{code:'',pct:10,on:true};form(i>=0?'Edit Kupon':'Kupon Baru',[{k:'code',l:'Kode kupon',v:k.code},{k:'pct',l:'Diskon (%)',t:'number',v:k.pct},{k:'on',l:'Status',t:'select',o:['Aktif','Nonaktif'],v:k.on?'Aktif':'Nonaktif'}],o=>{o.code=o.code.trim().toUpperCase();o.pct=+o.pct;if(!o.code)return'Kode wajib diisi';if(!(o.pct>0&&o.pct<=90))return'Diskon harus 1-90%';if(D.coupons.some((x,n)=>n!=i&&x.code==o.code))return'Kode sudah ada';const v={code:o.code,pct:o.pct,on:o.on=='Aktif'};if(i>=0)D.coupons[i]=v;else D.coupons.push(v);save()})}
function handlePpFile(el){
  const f=el.files[0];if(!f)return;
  if(f.size>50*1024*1024)return toast('Ukuran file maksimal 50MB');
  S.gv.ppfileBlob=f;
  const fn=$('#fn_ppfile');if(fn)fn.textContent='Siap disimpan: '+f.name+' ('+(f.size/1024).toFixed(0)+' KB)';
  toast('File dipilih, klik Simpan Semua untuk menerapkan');
}
async function ss(){try{await ss0()}catch(e){console.error(e);toast('Gagal menyimpan: '+(e.message||e))}}
async function ss0(){
  if(!isA())return;const s=D.set;
  if(S.gv.slogo)s.logo=S.gv.slogo;else{const lf=$('#slogo')?.files[0];if(lf)s.logo=await up(lf,300)}
  s.name=$('#sn').value||'Dzaki Real';s.tag=$('#st').value;s.wa=$('#sw').value;s.ann=$('#sa').value;s.flashEnd=$('#sfl').value;
  s.pay=$('#spy').value||'Bayar Langsung di Web (Instan),QRIS,DANA';s.dpPct=Math.min(90,Math.max(0,+$('#sdp').value||0));s.payAccounts=$('#spacc').value;s.payinfo=$('#sinfo').value;
  s.danaLabel=$('#sdanalbl').value.trim()||'Buka DANA';
  s.danaUrl=$('#sdanaurl').value.trim();
  s.danaNote=$('#sdananote').value;
  if(S.gv.sq)s.qris=S.gv.sq;else{const qf=$('#sq').files[0];if(qf)s.qris=await up(qf,800)}
  const prevPpop=s.postPopup||{};
  let ppimg=prevPpop.img||'';
  if(S.gv.ppimg)ppimg=S.gv.ppimg;else{const pf=$('#ppimg').files[0];if(pf)ppimg=await up(pf,1400)}
  let ppPath=prevPpop.filePath||'',ppName=prevPpop.fileName||'';
  if(S.gv.ppfileBlob){const fb=S.gv.ppfileBlob;ppPath=await putFile('access',fb,rnd()+'-'+safeName(fb.name),fb.type);ppName=fb.name}
  s.postPopup={on:$('#ppon').value=='1',title:$('#ppt').value,msg:$('#ppm').value,img:ppimg,filePath:ppPath,fileName:ppName,linkLabel:$('#ppll').value||'Akses Sekarang',linkUrl:$('#pplu').value};
  s.fabNotif=$('#fnon').value=='1';s.color=$('#sc').value;s.ov=+$('#so').value;s.blur=+$('#sbl').value||0;s.pc=$('#sp').value;
  const f=$('#sb').files[0];if(S.gv.sb)s.bg=S.gv.sb;else if(f)s.bg=await up(f,1400);
  for(const[k,id]of[['thrift','c1'],['akun','c2'],['topup','c3']]){const x=$('#'+id).files[0];if(S.gv[id])s.cat[k]=S.gv[id];else if(x)s.cat[k]=await up(x,600)}
  S.gv={};save();applySet();render();toast('Tampilan & konfigurasi disimpan');
}
function del(k,id){if(isA()&&confirm('Hapus item ini?')){D[k]=D[k].filter(x=>x.id!=id);save();render()}}

function addc(id){const u=me();u.cart=u.cart||[];if(u.cart.includes(id))return toast('Sudah ada di keranjang');u.cart.push(id);save();toast('Masuk keranjang');render()}
function rmc(id){const u=me();u.cart=(u.cart||[]).filter(x=>x!=id);save();render()}
function cartv(u){const l=(u.cart||[]).map(id=>D.products.find(p=>p.id==id)).filter(Boolean),t=l.reduce((a,p)=>a+pp(p),0);return`<div class="sec"><h2>Keranjang</h2></div>`+(l.length?`<div class="gl">${l.map(p=>`<div class="row" style="padding:10px 0;border-bottom:1px solid var(--ln)"><div class="th" style="${p.img?`background-image:url(${p.img})`:''}">${p.img?'':fi(p,22)}</div><div style="flex:1"><b>${E(p.name)}</b><br><span class="pr">${rp(pp(p))}</span></div><button class="dg" onclick="rmc('${p.id}')">${ic('trash',16)}</button></div>`).join('')}<div class="row" style="justify-content:space-between;margin-top:14px"><b>Total</b><span class="pr" style="font-size:20px">${rp(t)}</span></div><button class="g" style="width:100%;margin-top:12px" onclick="co()">Checkout</button></div>`:`<div class="gl mu" style="text-align:center;padding:40px">Keranjang masih kosong.</div>`)}
function co(){const u=me(),l=(u.cart||[]).map(id=>D.products.find(p=>p.id==id)).filter(p=>p&&p.stock>0);if(!l.length)return toast('Tidak ada item tersedia');const t=l.reduce((a,p)=>a+pp(p),0);form('Checkout · '+rp(t),[{k:'c',l:'Kontak WhatsApp',v:''},{k:'a',l:'Alamat pengiriman (untuk thrifting)',t:'textarea',v:''},{k:'pay',l:'Metode bayar',t:'select',o:payl()},{k:'k',l:'Kode kupon (opsional)',v:''}],o=>{if(!o.c.trim())return'Kontak wajib diisi';if(l.some(p=>p.cat=='thrift')&&!o.a.trim())return'Alamat wajib untuk thrifting';const r=cpn(o.k,100);if(!r)return'Kode kupon tidak valid';const pct=100-r[0];let lastOrder=null;l.forEach(p=>{lastOrder=order(p.name,Math.round(pp(p)*(100-pct)/100),o.c+(p.cat=='thrift'?' | '+o.a:'')+(r[1]?' | Kupon '+r[1]:''),o.pay,p.id,1)});u.cart=[];save();if(lastOrder){S.m={sheet:1,f:[]};rm();shDone(lastOrder)}else{toast('Checkout berhasil!');S.v='profil';render()}},'Bayar')}

function rev(pid){const u=me();form('Beri Ulasan',[{k:'r',l:'Rating (5 = terbaik)',t:'select',o:['5','4','3','2','1'],v:'5'},{k:'t',l:'Ulasan',t:'textarea',v:''}],o=>{if(!o.t.trim())return'Tulis ulasan singkat';D.reviews.push({pid,uid:u.id,u:u.username,r:+o.r,t:o.t.trim()});save();toast('Terima kasih atas ulasannya!')})}
const wa0=()=>{const n=(D.set.wa||'').replace(/\D/g,'');if(!n)return toast('Nomor WhatsApp toko belum diatur admin');open('https://wa.me/'+n.replace(/^0/,'62'),'_blank')};
const helpv=()=>{const F=[['Bagaimana cara top up?','Pilih game, pilih nominal, isi User ID, lalu pilih metode bayar. Pesanan diproses setelah pembayaran dikonfirmasi.'],['Apakah akun game aman?','Akun dijual dengan data lengkap. Ganti password setelah transaksi dan hubungi admin bila ada kendala.'],['Berapa lama proses pesanan?','Top up biasanya 1-10 menit, thrifting dikirim 1-2 hari kerja setelah pembayaran.'],['Bagaimana konfirmasi pembayaran?','Setelah bayar, upload bukti pembayaran di halaman pesanan. Admin akan memverifikasi, lalu akses terbuka otomatis dan kamu dapat notifikasi.'],['Bisakah membatalkan pesanan?','Bisa selama status masih Menunggu, lewat Akun Saya.']];return`<div class="sec"><h2>Pusat Bantuan</h2></div>${F.map(f=>`<details class="gl"><summary><b>${f[0]}</b></summary><p class="mu">${f[1]}</p></details>`).join('')}<div class="gl row" style="justify-content:space-between"><span>Masih butuh bantuan?</span><div class="row"><button onclick="openChatModal()">${ic('chat',16)}Live Chat</button><button class="g" onclick="wa0()">${ic('chat',16)}WhatsApp Admin</button></div></div>`};
const bnav=()=>S.v=='admin'?'':`<nav class="bn">${[['home','home','Beranda'],['thrift','shirt','Thrifting'],['topup','gem','Top Up'],['cart','cart','Keranjang'],['profil','user','Akun']].map(x=>`<button class="${S.v==x[0]?'on':''}" onclick="S.g=null;go('${x[0]}')">${ic(x[1],21)}<small>${x[2]}</small></button>`).join('')}</nav>`;
function chart7(){const d=[...Array(7)].map((_,i)=>{const t=new Date();t.setDate(t.getDate()-6+i);return t.toLocaleDateString('id-ID')}),v=d.map(k=>D.orders.filter(o=>o.date==k&&o.status!='Dibatalkan').reduce((a,o)=>a+o.price,0)),m=Math.max(...v,1);return`<div class="sec"><h2>Penjualan 7 Hari</h2></div><div class="gl"><div style="display:flex;gap:8px;align-items:end;height:130px">${v.map((x,i)=>`<div style="flex:1;text-align:center"><div style="height:${Math.max(4,x/m*100)}px;background:linear-gradient(var(--gold2),#8a6d1d);border-radius:6px 6px 0 0" title="${rp(x)}"></div><span class="mu" style="font-size:11px">${d[i].slice(0,5)}</span></div>`).join('')}</div></div>`}
const lowstock=()=>`<div class="sec"><h2>Stok Menipis</h2></div>`+tbl(['Produk','Stok'],D.products.filter(p=>p.stock<=2).map(p=>[E(p.name),p.stock]));

// ---------- ORDERS & RECEIPT ----------
function fav(id){const u=me();u.fav=u.fav||[];const i=u.fav.indexOf(id);i<0?u.fav.push(id):u.fav.splice(i,1);save();render()}
function cpn(code,price){code=(code||'').trim().toUpperCase();if(!code)return[price,''];const c=D.coupons.find(x=>x.code==code&&x.on);if(!c)return null;return[Math.round(price*(100-c.pct)/100),code+' -'+c.pct+'%']}
function cancelo(id){const o=D.orders.find(x=>x.id==id);if(!o||o.uid!=me().id||o.status!='Menunggu')return;if(!confirm('Batalkan pesanan ini?'))return;o.status='Dibatalkan';save();render()}
function wa(id){const o=D.orders.find(x=>x.id==id),n=(D.set.wa||'').replace(/\D/g,'');if(!n)return toast('Nomor WhatsApp toko belum diatur admin');open('https://wa.me/'+n.replace(/^0/,'62')+'?text='+encodeURIComponent('Halo, saya mau konfirmasi pesanan '+o.id+' ('+o.title+', '+rp(o.price)+')'),'_blank')}
function reorder(id){
  const o=D.orders.find(x=>x.id==id);if(!o)return;
  if(o.pid&&D.products.find(p=>p.id==o.pid&&p.stock>0))return buy(o.pid);
  toast('Mengarahkan ke katalog untuk pemesanan ulang');go('home');
}
function receiptModal(id){
  const o=D.orders.find(x=>x.id==id);if(!o)return;
  S.m={
    title:'Struk Digital · '+o.id,
    f:[],
    html:`<div class="gl" style="background:#0d0b12;border-style:dashed"><div style="text-align:center;margin-bottom:10px"><b>${E(D.set.name)}</b><br><small class="mu">${o.date}</small></div><div class="srow"><span>ID Transaksi</span><b>${o.id}</b></div><div class="srow"><span>Item</span><span>${E(o.title)}</span></div><div class="srow"><span>Metode Bayar</span><span>${E(o.pay)}</span></div><div class="srow"><span>Status</span><span class="st-badge st-${o.status}">${o.status}</span></div><div class="srow"><span>Detail</span><span style="text-align:right;max-width:60%">${E(o.info)}</span></div><div class="srow tot"><span>Total Bayar</span><span class="pr">${rp(o.price)}</span></div></div><button class="g" style="width:100%;margin-bottom:8px" onclick="copyText('${o.id} | ${E(o.title)} | ${rp(o.price)} | ${o.status}')">${ic('copy',16)}Salin Rincian Struk</button>`
  };
  rm();
}
function copyText(t){navigator.clipboard?.writeText(t);toast('Berhasil disalin ke clipboard!')}
const tp=(...a)=>a.forEach(i=>{const e=$('#'+i);e.type=e.type=='password'?'text':'password'});
function order(title,price,info,pay,pid,q){
  const o={id:'#'+uid().toUpperCase(),uid:me().id,title,price,info,pay,status:'Menunggu',pid:pid||'',date:new Date().toLocaleDateString('id-ID')};
  D.orders.push(o);
  addNotif(me().id,'Pesanan Dibuat '+o.id,'Pesanan "'+title+'" ('+rp(price)+') menunggu pembayaran.');
  save();
  if(!q){toast('Pesanan dibuat!');S.v='profil'}
  return o;
}

// ---------- PRODUCT SHEET ----------
const rtx=pid=>{const[r,c]=rating(pid);return stars(r,14)+' '+(c?r.toFixed(1)+' · '+c+' ulasan':'Belum ada ulasan')};
function shItem(){
  const s=S.sel;
  if(s.t=='g'){const g=D.games.find(x=>x.id==s.id),i=g.items[s.n]||g.items[0];return{ob:g,name:g.name,desc:'Top up cepat & aman. Pilih nominal, isi User ID, lalu bayar. Pesanan diproses setelah pembayaran dikonfirmasi.',img:g.img,imgs:[],price:i.p,orig:0,disc:0,pid:g.id,label:i.l,ic:'gem'}}
  const p=D.products.find(x=>x.id==s.id);
  const allImgs=[p.img,...(p.imgs||[])].filter(Boolean);
  return{ob:p,name:p.name,desc:p.desc,img:allImgs[s.imgIdx||0]||p.img,imgs:allImgs,price:pp(p),orig:p.price,disc:p.disc||0,pid:p.id,thrift:p.cat=='thrift',stock:p.stock,size:p.size,cond:p.cond,spec:p.spec,exp:p.exp,ic:p.cat=='akun'?'gamepad':'shirt'}
}
function getDpPct(it){
  if(S.sel.t!='p')return 0;
  const p=it.ob;
  if(p.dp!==''&&p.dp!==undefined&&p.dp!==null)return +p.dp;
  return +(D.set.dpPct??50);
}
function sum(){
  const it=shItem(),r=S.sel.cp?cpn(S.sel.cp,it.price):[it.price,''];
  const full=r?r[0]:it.price;
  const dpPct=getDpPct(it);
  const useDp=S.sel.t=='p'&&dpPct>0&&S.sel.payMode=='dp';
  const payNow=useDp?Math.round(full*dpPct/100):full;
  const rem=full-payNow;
  S.sel.fullTot=full;
  S.sel.tot=payNow;
  S.sel.remTot=rem;
  return`<div class="srow"><span>Harga${it.label?' ('+E(it.label)+')':''}</span><span>${rp(it.price)}</span></div>
  ${r&&r[1]?`<div class="srow"><span>Kupon ${E(r[1])}</span><span>-${rp(it.price-r[0])}</span></div>`:''}
  ${useDp?`<div class="srow"><span>Skema DP (${dpPct}%)</span><span style="color:var(--gold2)">Bayar DP Sekarang</span></div>
  <div class="srow"><span>Sisa Pelunasan</span><span class="mu">${rp(rem)}</span></div>`:''}
  <div class="srow tot"><span>${useDp?'Total Bayar DP Sekarang':'Total Bayar'}</span><span class="pr">${rp(payNow)}</span></div>`;
}
function rvbox(pid){const l=D.reviews.filter(x=>x.pid==pid).slice().reverse(),u=me(),mine=l.find(x=>x.uid==u.id);return(l.length?l.slice(0,6).map(r=>`<div class="gl" style="padding:12px;margin:8px 0"><div class="row" style="justify-content:space-between"><b>${E(r.u)}</b><span>${stars(r.r,12)}</span></div><span class="mu">${E(r.t)}</span></div>`).join(''):'<p class="mu">Belum ada ulasan. Jadilah yang pertama!</p>')+`<div id="rvf"><button onclick="rvForm('${pid}')">${ic('star',15)}${mine?'Ubah ulasan saya':'Tulis ulasan'}</button></div>`}
function rvForm(pid){const u=me(),m=D.reviews.find(x=>x.pid==pid&&x.uid==u.id);S.rr=m?m.r:5;$('#rvf').innerHTML=`<div class="gl" style="padding:12px"><div id="rst" class="row" style="gap:4px"></div><textarea id="rvt" rows="3" placeholder="Tulis pengalamanmu..." style="margin-top:10px">${E(m?m.t:'')}</textarea><div class="row"><button class="g" onclick="rvSend('${pid}')">Kirim Ulasan</button><button onclick="$('#rvs').innerHTML=rvbox('${pid}')">Batal</button></div></div>`;rvSet(S.rr)}
function rvSet(i){S.rr=i;$('#rst').innerHTML=[1,2,3,4,5].map(k=>`<span onclick="rvSet(${k})" style="cursor:pointer">${ic('star',28,k<=i?'#f6e27a':'none')}</span>`).join('')}
function rvSend(pid){const t=$('#rvt').value.trim();if(!t)return toast('Tulis ulasan singkat');const u=me(),m=D.reviews.find(x=>x.pid==pid&&x.uid==u.id);if(m){m.r=S.rr;m.t=t}else D.reviews.push({pid,uid:u.id,u:u.username,r:S.rr,t});save();$('#rvs').innerHTML=rvbox(pid);$('#rth').innerHTML=rtx(pid);toast('Ulasan tersimpan')}

function shHtml(){
  const s=S.sel,it=shItem(),u=me();
  const rel=s.t=='p'?D.products.filter(x=>x.id!=it.pid&&x.cat==it.ob.cat).slice(0,3):[];
  return`<div class="shi" id="sh_hero" style="${it.img?`background-image:url(${it.img})`:''}">${it.img?'':ic(it.ic,76)}<button class="x" onclick="shClose()">${ic('close',18)}</button>${it.disc?`<span class="ds" style="top:12px;bottom:auto;left:12px">-${it.disc}%</span>`:''}</div>
  ${it.imgs&&it.imgs.length>1?`<div class="gal-strip">${it.imgs.map((im,idx)=>`<img src="${im}" class="${(s.imgIdx||0)==idx?'on':''}" onclick="S.sel.imgIdx=${idx};$('#sh_hero').style.backgroundImage='url(${im})';this.parentNode.querySelectorAll('img').forEach((g,k)=>g.classList.toggle('on',k==${idx}))">`).join('')}</div>`:''}
  <div class="shb">
    <div class="row" style="justify-content:space-between;align-items:flex-start">
      <h3 style="flex:1">${E(it.name)}</h3>
      <button style="padding:7px 10px" onclick="copyText(location.href.split('#')[0]+'#item='+it.pid)" title="Bagikan Produk">${ic('share',15)}</button>
    </div>
    <div class="row" style="margin:6px 0">
      ${(S.sel.sizeSel||it.size)?`<span class="pill" id="sz_pill">Ukuran Terpilih: ${E(S.sel.sizeSel||it.size)}</span>`:''}
      ${it.cond?`<span class="pill">Kondisi: ${E(it.cond)}</span>`:''}
      ${it.spec?`<span class="pill">${E(it.spec)}</span>`:''}
      ${it.exp?`<span class="pill" data-cd="${it.exp}">${ic('clock',12)} ${fmtCd(it.exp)}</span>`:''}
    </div>
    <div class="mu" id="rth">${rtx(it.pid)}</div>
    <p class="mu" style="margin:10px 0 0">${E(it.desc)}</p>
    ${it.thrift?`<div class="shs">Pilih Ukuran</div><div class="chips">${['S','M','L','XL','XXL','All Size'].map(sz=>`<button type="button" class="chip ${(S.sel.sizeSel||it.size)==sz?'on':''}" onclick="S.sel.sizeSel='${sz}';this.parentNode.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===this));const sp=$('#sz_pill');if(sp)sp.textContent='Ukuran Terpilih: ${sz}'"><b>${sz}</b></button>`).join('')}</div>`:''}
    ${s.t=='g'?`<div class="shs">Pilih Nominal</div><div class="chips">${it.ob.items.map((x,i)=>`<button class="chip ${i==s.n?'on':''}" onclick="S.sel.n=${i};shUp(this,'n')"><b>${E(x.l)}</b><small>${rp(x.p)}</small></button>`).join('')}</div>`:`<div class="row" style="justify-content:space-between;margin-top:12px"><span><span class="pr" style="font-size:26px">${rp(it.price)}</span>${it.disc?` <s class="mu">${rp(it.orig)}</s>`:''}</span><span class="mu">Stok ${it.stock}</span></div>`}
    <div class="shs">Data Pemesan</div>
    ${s.t=='g'?`<div class="row" style="flex-wrap:nowrap"><input id="b_uid" placeholder="User ID game" style="margin:0;flex:1"><button onclick="checkGameId()">Cek ID</button></div><input id="b_sv" placeholder="Server / Zone (opsional)" style="margin-top:8px"><div id="gid_nick" style="margin-bottom:8px"></div>`:it.thrift?`<input id="b_nm" placeholder="Nama penerima" value="${E(u.name)}">`:''}
    <input id="b_wa" type="tel" placeholder="No. WhatsApp (contoh 08123456789)">
    ${it.thrift?`<textarea id="b_ad" rows="3" placeholder="Alamat lengkap pengiriman"></textarea>`:''}
    ${s.t=='p'&&getDpPct(it)>0?`<div class="shs">Skema Pembayaran</div><div class="chips">
      <button type="button" class="chip ${(s.payMode||'full')=='full'?'on':''}" onclick="S.sel.payMode='full';this.parentNode.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===this));$('#sum').innerHTML=sum()"><b>Bayar Lunas (100%)</b><small>Langsung selesai tanpa sisa</small></button>
      <button type="button" class="chip ${s.payMode=='dp'?'on':''}" onclick="S.sel.payMode='dp';this.parentNode.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===this));$('#sum').innerHTML=sum()"><b>Bayar DP (${getDpPct(it)}%)</b><small>Booking dulu, sisanya dilunasi nanti</small></button>
    </div>`:''}
    <div class="shs">Metode Pembayaran</div><div class="chips">${payl().map(x=>`<button class="chip ${x==s.pay?'on':''}" onclick="shUp(this,'pay','${E(x)}')">${E(x)}</button>`).join('')}</div>
    <div class="shs">Kode Kupon</div><div class="row" style="flex-wrap:nowrap"><input id="b_cp" placeholder="Masukkan kode kupon" style="margin:0;flex:1"><button onclick="shCp()">Pakai</button></div>
    <div class="gl" id="sum" style="margin:16px 0">${sum()}</div>
    <button class="g" style="width:100%;padding:15px;font-size:17px" onclick="shBuy()">${ic('cart',19)}Buy Sekarang</button>
    <div class="shs">Ulasan</div><div id="rvs">${rvbox(it.pid)}</div>
    ${rel.length?`<div class="shs">Produk Serupa</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">${rel.map(x=>`<div class="gl" style="padding:8px;margin:0;cursor:pointer" onclick="dt('${x.id}')"><div class="pi" style="border-radius:10px;${x.img?`background-image:url(${x.img})`:''}">${x.img?'':fi(x,24)}</div><b style="font-size:12px;display:block;margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${E(x.name)}</b><span class="pr" style="font-size:12px">${rp(pp(x))}</span></div>`).join('')}</div>`:''}
  </div>`
}
function sheet(t,id,n){if(t=='p'&&!D.products.find(x=>x.id==id))return;if(t=='p')trackView(id);S.sel={t,id,n:n||0,pay:payl()[0],cp:null,imgIdx:0};S.m={sheet:1,f:[]};rm()}
const shClose=()=>{S.m=null;rm();render()};
function shUp(el,k,v){if(k=='pay')S.sel.pay=v;el.parentNode.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===el));if(k=='n')$('#sum').innerHTML=sum()}
function shCp(){const c=$('#b_cp').value.trim().toUpperCase();if(!c){S.sel.cp=null;$('#sum').innerHTML=sum();return toast('Kupon dilepas')}const r=cpn(c,shItem().price);if(!r)return toast('Kode kupon tidak valid');S.sel.cp=c;$('#sum').innerHTML=sum();toast('Kupon dipakai: '+r[1])}
function shBuy(){const s=S.sel,it=shItem(),u=me(),v=id=>(($('#'+id)||{}).value||'').trim(),wa=v('b_wa');
 if(s.t=='g'&&!v('b_uid'))return toast('User ID wajib diisi');
 if(it.thrift&&(!v('b_nm')||!v('b_ad')))return toast('Nama dan alamat wajib diisi');
 if(s.t=='p'&&it.stock<1)return toast('Stok habis');
 if(!(s.t=='g'&&!wa)&&!/^[0-9+ -]{9,16}$/.test(wa))return toast('Nomor WhatsApp tidak valid');
 const code=v('b_cp');if(code){if(!cpn(code,it.price))return toast('Kode kupon tidak valid');s.cp=code.toUpperCase()}
 sum();const info=[s.t=='g'?'ID '+v('b_uid')+(v('b_sv')?' ('+v('b_sv')+')':''):it.thrift?v('b_nm')+' - '+v('b_ad'):'',wa?'WA '+wa:'',s.cp?'Kupon '+s.cp:''].filter(Boolean).join(' | ');
 const isDp=s.t=='p'&&getDpPct(it)>0&&s.payMode=='dp';
 const o={id:'#'+uid().toUpperCase(),uid:u.id,title:it.ob.name+(it.label?' '+it.label:(it.thrift&&(S.sel.sizeSel||it.size)?' (Ukuran '+(S.sel.sizeSel||it.size)+')':''))+(isDp?' [DP '+getDpPct(it)+'%]':''),desc:it.desc||'',img:it.img||'',ic:it.ic||'bag',price:s.tot,fullPrice:s.fullTot||s.tot,remPrice:s.remTot||0,isDp,dpPct:isDp?getDpPct(it):0,info,pay:s.pay,status:'Menunggu',pid:s.t=='p'?it.pid:'',date:new Date().toLocaleDateString('id-ID')};
 D.orders.push(o);addNotif(u.id,'Pesanan Dibuat '+o.id,'Pesanan '+o.title+' menunggu konfirmasi pembayaran.');save();shDone(o)}

function adminConfirm(oid){
  if(!isA())return;
  const o=D.orders.find(x=>x.id==oid);if(!o)return;
  if(o.isDp && o.remPrice>0 && !o.dpPaid){
    o.status='Diproses';
    o.dpPaid=true;
    o.paidAt=new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
    addNotif(o.uid,'DP Berhasil Dibayar '+o.id,'DP sebesar '+rp(o.price)+' untuk "'+o.title+'" telah dikonfirmasi admin. Sisa pelunasan: '+rp(o.remPrice)+'.');
    save();
    toast('Pembayaran DP dikonfirmasi');
  }else{
    if(o.isDp && o.remPrice>0){
      o.price=o.fullPrice||o.price;
      o.remPrice=0;
      o.isDp=false;
      o.title=o.title.replace(/\s*\[DP \d+%\]/,'')+' [LUNAS]';
    }
    o.status='Selesai';
    o.paidAt=new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'});
    addNotif(o.uid,'Pembayaran Lunas '+o.id,'Pesanan "'+o.title+'" ('+rp(o.price)+') telah dikonfirmasi lunas oleh admin. Akses sudah terbuka di menu Akun Saya.');
    save();
    toast('Pembayaran lunas dikonfirmasi');
  }
  render();
}

// ---------- PEMBAYARAN MANUAL: UPLOAD BUKTI + KONFIRMASI ADMIN ----------
function openPay(oid){const o=D.orders.find(x=>x.id==oid);if(!o)return;S.payRem=null;S.m={sheet:1,f:[]};rm();shDone(o)}
function payRemain(oid){const o=D.orders.find(x=>x.id==oid);if(!o)return;S.payRem=oid;if(!$('.sh')){S.m={sheet:1,f:[]};rm()}shDone(o)}
async function submitProof(oid){
  const o=D.orders.find(x=>x.id==oid);if(!o||o.uid!=me().id)return;
  const f=($('#pf')||{files:[]}).files[0];
  if(!f)return toast('Pilih foto bukti pembayaran dulu');
  toast('Mengirim bukti...');
  try{o.proof=await putFile('proofs',await compBlob(f,1100),rnd()+'.jpg','image/jpeg')}catch(e){return toast('Gagal upload bukti: '+(e.message||e))}
  o.proofAt=new Date().toLocaleString('id-ID',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
  o.proofRem=!!(o.isDp&&o.dpPaid&&o.remPrice>0);
  o.status='Verifikasi';S.payRem=null;
  addNotif(o.uid,'Bukti Pembayaran Terkirim '+o.id,'Bukti pembayaran untuk "'+o.title+'" sedang diverifikasi admin.');
  const {data:aid}=await sb.rpc('get_admin_id');if(aid)addNotif(aid,'Bukti Pembayaran Baru '+o.id,'"'+o.title+'" menunggu verifikasi kamu di menu Pesanan.');
  save();shDone(o);
}
async function viewProof(oid){
  const o=D.orders.find(x=>x.id==oid);if(!o||!o.proof)return toast('Belum ada bukti pembayaran');
  const {data:sg,error:se}=await sb.storage.from('proofs').createSignedUrl(o.proof,300);
  if(se)return toast('Gagal memuat bukti: '+se.message);
  S.m={title:'Bukti Bayar '+o.id,f:[],html:`<p class="mu" style="margin:0 0 8px">${E(o.title)} · ${rp(o.proofRem?o.remPrice:o.price)}<br>Dikirim: ${E(o.proofAt||'-')}</p><img src="${sg.signedUrl}" style="width:100%;border-radius:14px;border:1px solid var(--ln)">${o.status=='Verifikasi'?`<div class="row" style="margin-top:12px"><button class="g" onclick="S.m=null;rm();adminConfirm('${o.id}')">${ic('check',15)}Konfirmasi</button><button class="dg" onclick="S.m=null;rm();adminReject('${o.id}')">Tolak</button></div>`:''}`};
  rm();
}
function adminReject(oid){
  if(!isA())return;const o=D.orders.find(x=>x.id==oid);if(!o)return;
  const why=prompt('Alasan penolakan (opsional):');if(why===null)return;
  o.status=(o.isDp&&o.dpPaid)?'Diproses':'Menunggu';o.proof='';
  addNotif(o.uid,'Bukti Pembayaran Ditolak '+o.id,'Bukti untuk "'+o.title+'" ditolak.'+(why?' Alasan: '+why:'')+' Silakan upload ulang bukti yang benar.');
  save();render();toast('Bukti ditolak, pembeli diminta upload ulang');
}

async function accessOrderFile(){
  const {data,error}=await sb.from('private_kv').select('data').eq('key','access').maybeSingle();
  if(error||!data)return toast('Akses belum terbuka. Tunggu konfirmasi pembayaran dari admin.');
  const pr=data.data||{};
  if(pr.filePath){
    const {data:sg,error:e2}=await sb.storage.from('access').createSignedUrl(pr.filePath,120,{download:pr.fileName||true});
    if(e2)return toast('Gagal membuka file: '+e2.message);
    const a=document.createElement('a');a.href=sg.signedUrl;a.download=pr.fileName||'file-akses';document.body.append(a);a.click();a.remove();
    toast('Mengunduh file: '+(pr.fileName||'file-akses'));return;
  }
  if(pr.linkUrl){
    if(pr.linkUrl.startsWith('#')){S.m=null;go(pr.linkUrl.slice(1)||'home')}
    else{open(pr.linkUrl,'_blank')}
  }
}

function shDone(o){
  const q=D.set.qris,ppop=D.set.postPopup||{};
  const isPaid=o.status=='Selesai'||(o.isDp&&o.dpPaid);
  const isQris=/qris/i.test(o.pay);
  const isDana=/dana/i.test(o.pay);
  const prodObj=o.pid?D.products.find(x=>x.id==o.pid):null;
  const prodImg=o.img||(prodObj?prodObj.img:'');
  const prodDesc=o.desc||(prodObj?prodObj.desc:'');

  const payingRem=S.payRem==o.id&&o.isDp&&o.dpPaid&&o.remPrice>0;
  if(o.status=='Verifikasi'){
    $('.sh').innerHTML=`
      <div class="shi" style="height:120px">${ic('clock',54)}<button class="x" onclick="shClose()">${ic('close',18)}</button></div>
      <div class="shb">
        <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:6px"><span class="pill">${ic('clock',13)} Menunggu Verifikasi</span><span class="mu">${o.id}</span></div>
        <h3 style="margin:6px 0">Bukti Pembayaran Diterima</h3>
        <p class="mu" style="margin:0 0 12px">Admin sedang mengecek pembayaranmu. Akses akan terbuka otomatis setelah dikonfirmasi. Kamu akan dapat notifikasi.</p>
        <div class="gl" style="padding:12px;margin:10px 0"><div class="srow"><span>Item</span><b>${E(o.title)}</b></div><div class="srow"><span>Metode</span><span>${E(o.pay)}</span></div><div class="srow tot"><span>Nominal</span><span class="pr" style="font-size:19px">${rp(o.proofRem?o.remPrice:o.price)}</span></div></div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px">
          <button class="g" style="width:100%;padding:12px" onclick="wa('${o.id}')">${ic('chat',17)}Chat Admin (WhatsApp)</button>
          <div class="row" style="justify-content:center"><button type="button" onclick="S.m=null;go('profil')">Riwayat Pesanan</button><button type="button" onclick="shClose()">Tutup</button></div>
        </div>
      </div>`;
    return;
  }
  if(!isPaid||payingRem){
    // TAMPILAN 1: POP-UP PEMBAYARAN
    // - QRIS: Gambar Produk, Judul, Deskripsi, Harga, Gambar QRIS + Tombol Download QRIS, Tombol Konfirmasi Pembayaran
    // - DANA: Gambar Produk, Judul, Deskripsi, Harga, Tanpa Gambar QRIS, Tombol Buka DANA (dari Admin Panel) + Tombol Konfirmasi Pembayaran
    $('.sh').innerHTML=`
      <div class="shi" style="${prodImg?`background-image:url(${prodImg})`:''}">${prodImg?'':ic(o.ic||'bag',68)}<button class="x" onclick="shClose()">${ic('close',18)}</button><span class="bd">${E(o.pay)}</span></div>
      <div class="shb">
        <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:4px">
          <span class="pill">${o.id}</span>
          <span class="st-badge st-${o.status}">${o.status}</span>
        </div>
        <h3 style="margin:6px 0">${E(o.title)}</h3>
        ${prodDesc?`<p class="mu" style="margin:0 0 12px">${E(prodDesc)}</p>`:''}
        <div class="gl" style="padding:12px;margin:10px 0">
          ${o.isDp?`<div class="srow"><span>Harga Penuh</span><span>${rp(o.fullPrice)}</span></div><div class="srow"><span>Sisa Pelunasan</span><b style="color:#fde047">${rp(o.remPrice)}</b></div>`:''}
          <div class="srow tot" style="${o.isDp?'':'border-top:0;margin-top:0;padding-top:0'}">
            <span>${payingRem?'Sisa Pelunasan':o.isDp?'Nominal DP ('+o.dpPct+'%)':'Harga Total'}</span>
            <span class="pr" style="font-size:20px">${rp(payingRem?o.remPrice:o.price)}</span>
          </div>
        </div>
        ${isQris?`
          <div class="gl" style="text-align:center;padding:14px;border-color:var(--gold);background:rgba(212,175,55,.06)">
            <b style="color:var(--gold2);display:block;margin-bottom:8px">Scan QRIS untuk Membayar</b>
            ${q?`<img src="${q}" style="width:100%;max-width:240px;border-radius:14px;margin:0 auto 12px;display:block;border:1px solid var(--ln)"><a href="${q}" download="QRIS-${E(D.set.name)}.png" style="text-decoration:none;display:block"><button type="button" style="width:100%;padding:11px;font-size:14px;border-color:var(--gold);color:var(--gold2)">${ic('download',16)}Download QRIS</button></a>`:'<p class="mu" style="margin:0">Gambar QRIS belum diunggah admin. Silakan konfirmasi atau hubungi admin.</p>'}
          </div>
        `:isDana?`
          <div class="gl" style="text-align:left;padding:14px;border-color:#38bdf8;background:rgba(56,189,248,.07)">
            <b style="color:#7dd3fc;display:block;margin-bottom:6px">Pembayaran via DANA</b>
            ${D.set.danaNote?`<p class="mu" style="margin:0 0 10px;white-space:pre-line">${E(D.set.danaNote)}</p>`:''}
            ${D.set.payAccounts?`<div class="row" style="justify-content:space-between;margin-bottom:10px;padding:8px 10px;background:rgba(0,0,0,.25);border-radius:10px"><pre style="margin:0;font:inherit;font-size:13px;white-space:pre-wrap;color:var(--tx)">${E(D.set.payAccounts)}</pre><button type="button" style="padding:4px 10px;font-size:12px" onclick="copyText(\`${E(D.set.payAccounts)}\`)">${ic('copy',13)}Salin</button></div>`:''}
            ${D.set.danaUrl?`<button type="button" style="width:100%;padding:12px;font-size:15px;background:linear-gradient(135deg,#0284c7,#38bdf8);color:#fff;border:0;font-weight:700" onclick="open('${E(D.set.danaUrl)}','_blank')">${ic('next',17)}${E(D.set.danaLabel||'Buka DANA')}</button>`:'<p class="mu" style="margin:0">Link DANA belum diatur di Admin Panel.</p>'}
          </div>
        `:`
          ${D.set.payAccounts?`<div class="gl" style="text-align:left;padding:12px"><div class="row" style="justify-content:space-between"><small class="mu">Tujuan Pembayaran (${E(o.pay)})</small><button type="button" style="padding:4px 10px;font-size:12px" onclick="copyText(\`${E(D.set.payAccounts)}\`)">${ic('copy',13)}Salin</button></div><pre style="margin:6px 0 0;font:inherit;white-space:pre-wrap;color:var(--gold2)">${E(D.set.payAccounts)}</pre></div>`:''}
        `}
        ${D.set.payinfo?`<p class="mu" style="font-size:12px;margin:8px 0 14px;white-space:pre-line">${E(D.set.payinfo)}</p>`:''}
        <div class="gl" style="padding:12px;margin:10px 0"><b style="display:block;margin-bottom:4px;color:var(--gold2)">Upload Bukti Pembayaran</b><p class="mu" style="margin:0 0 8px">Setelah bayar, upload foto atau screenshot bukti pembayaran. Akses terbuka setelah admin memverifikasi.</p>${fileBox('pf','image','')}</div>
        <button class="g" style="width:100%;padding:14px;font-size:16px" onclick="submitProof('${o.id}')">${ic('upload',18)}Kirim Bukti Pembayaran</button>
        <div class="row" style="justify-content:center;margin-top:10px">
          <button type="button" onclick="shClose()">Tutup</button>
        </div>
      </div>`;
    return;
  }

  // TAMPILAN 2: SETELAH KONFIRMASI PEMBAYARAN DITEKAN
  // Berisi: Banner, Judul, Deskripsi, Harga, Tombol Akses, dan Tombol Chat Admin
  const showBanner=ppop.on&&ppop.img?ppop.img:prodImg;
  const showTitle=ppop.on&&ppop.title?ppop.title:'Pembayaran Berhasil Dikonfirmasi!';
  const showDesc=ppop.on&&ppop.msg?ppop.msg:(prodDesc||'Terima kasih! Pembayaran pesananmu telah berhasil dikonfirmasi.');
  const hasAccess=ppop.on&&(ppop.hasAccess||ppop.filePath||ppop.linkUrl);
  const accessLabel=(ppop.linkLabel||'Akses Sekarang').trim();

  $('.sh').innerHTML=`
    ${showBanner?`<div class="shi" style="background-image:url(${showBanner});aspect-ratio:auto;min-height:200px"><img src="${showBanner}" style="width:100%;max-height:360px;object-fit:cover;display:block"><button class="x" onclick="shClose()">${ic('close',18)}</button></div>`:`<div class="shi" style="height:120px">${ic('check',54)}<button class="x" onclick="shClose()">${ic('close',18)}</button></div>`}
    <div class="shb">
      <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:6px">
        <span class="pill" style="border-color:#4ade80;color:#86efac;background:rgba(74,222,128,.12)">${ic('check',13)} Pembayaran Terkonfirmasi</span>
        <span class="mu">${o.id}</span>
      </div>
      <h3 style="margin:6px 0">${E(showTitle)}</h3>
      <p class="mu" style="margin:0 0 12px;white-space:pre-line">${E(showDesc)}</p>
      <div class="gl" style="padding:12px;margin:10px 0">
        <div class="srow"><span>Item</span><b>${E(o.title)}</b></div>
        <div class="srow"><span>Metode</span><span>${E(o.pay)}</span></div>
        ${o.isDp&&o.remPrice>0?`<div class="srow"><span>Sisa Pelunasan</span><b style="color:#fde047">${rp(o.remPrice)}</b></div>`:''}
        <div class="srow tot"><span>Harga Dibayar</span><span class="pr" style="font-size:19px">${rp(o.price)}</span></div>
      </div>
      ${o.isDp&&o.remPrice>0?`<div class="gl" style="border-color:var(--gold);background:rgba(212,175,55,.08);padding:12px"><small class="mu" style="display:block;margin-bottom:8px">Sisa pelunasan sebesar <b>${rp(o.remPrice)}</b> dapat dilunasi kapan saja:</small><button type="button" style="width:100%" onclick="payRemain('${o.id}')">${ic('upload',15)}Lunasi Sisa Sekarang (${rp(o.remPrice)})</button></div>`:''}
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px">
        ${hasAccess?`<button class="g" style="width:100%;padding:13px;font-size:15px" onclick="accessOrderFile()">${ic((ppop.hasFile||ppop.filePath)?'download':'next',17)}${E(accessLabel)}</button>`:''}
        <button class="${hasAccess?'':'g'}" style="width:100%;padding:12px" onclick="wa('${o.id}')">${ic('chat',17)}Chat Admin (WhatsApp)</button>
        <div class="row" style="justify-content:center;margin-top:4px">
          <button type="button" onclick="S.m=null;go('profil')">Riwayat Pesanan</button>
          <button type="button" onclick="shClose()">Tutup</button>
        </div>
      </div>
    </div>`;
}

function buy(id){sheet('p',id)}
function dt(id){sheet('p',id)}
function tu(gid,n){sheet('g',gid,n)}
const fileBox=(id,kind='image',cur='',key=id)=>`<div class="upl"><label class="up" for="${id}"><span class="upi${key=='av'?' round':''}" id="pv_${id}" style="${cur&&kind=='image'?`background-image:url(${cur})`:''}">${cur&&kind=='image'?'':ic(kind=='video'?'video':key=='av'?'user':'image',22)}</span><span class="upt"><b>${kind=='video'?'Pilih video':key=='av'?'Pilih foto profil':'Pilih foto'}</b><small id="fn_${id}">${cur?'Sudah ada · ketuk untuk mengganti':kind=='video'?'MP4 / WebM · maks 40MB':'JPG / PNG · otomatis dikompres'}</small></span></label><input id="${id}" type="file" accept="${kind=='video'?'video/*':'image/*'}" hidden onchange="fnm(this,'${kind}')">${AS?`<button class="upg" onclick="gal('${key}','${id}')">${ic('image',16)}Galeri</button>`:''}</div>`;
function fnm(el,kind){const f=el.files[0],n=$('#fn_'+el.id),p=$('#pv_'+el.id);if(!f)return;n.textContent=f.name+' · '+(f.size/1048576).toFixed(1)+' MB';if(kind!='video'){const r=new FileReader;r.onload=()=>{p.style.backgroundImage=`url(${r.result})`;p.innerHTML=''};r.readAsDataURL(f)}}
const galBtn=k=>`<div class="row" style="margin:-4px 0 12px"><button onclick="gal('${k}')">${ic('image',15)}Pilih dari Galeri</button><span class="mu" id="gp_${k}"></span></div>`;
async function gal(k,id){const vid=k=='vf';let l=[];try{if(AS)l=(await AS.list()).assets}catch(e){}l=l.filter(a=>vid?/^video/.test(a.contentType):/^image/.test(a.contentType)).reverse();
 const o=document.createElement('div');o.className='ov';o.id='ga';o.style.zIndex=50;o.onclick=e=>{if(e.target==o)o.remove()};
 o.innerHTML=`<div class="md"><h3 style="margin-top:0;color:var(--gold2)">Galeri ${vid?'Video':'Gambar'}</h3>${l.length?`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">${l.map(a=>`<div class="gi" data-u="/_blob/${a.id}">${vid?`<video src="/_blob/${a.id}" muted playsinline preload="metadata"></video>`:`<img src="/_blob/${a.id}">`}</div>`).join('')}</div>`:`<p class="mu">${AS?'Galeri masih kosong.':'Galeri hanya tersedia untuk pemilik halaman.'} Kirim foto atau video lewat chat, nanti dimasukkan ke galeri ini.</p>`}<div class="row" style="margin-top:12px"><button onclick="document.getElementById('ga').remove()">Tutup</button></div></div>`;
 document.body.append(o);o.querySelectorAll('.gi').forEach(d=>d.onclick=()=>{S.gv[k]=d.dataset.u;const n=$('#fn_'+(id||k)),p=$('#pv_'+(id||k));if(n)n.textContent='Dipilih dari galeri';if(p&&!vid){p.style.backgroundImage=`url(${d.dataset.u})`;p.innerHTML=''}o.remove()})}
init();