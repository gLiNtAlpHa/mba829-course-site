/* MBA 829 Module 2 — Units 6–9: leading change */
(function(){
const {H}=Course, el=H.el, t_=H.t;
const tab=s=>el('g',{},s);
const box=(g,x,y,w,h,fill='var(--card)',stroke='var(--line)',rx=8)=>el('rect',{x,y,width:w,height:h,rx,fill,stroke},g);
const wrap=(g,x,y,str,max=28,a={})=>{const words=str.split(' ');let line='',ly=y;const lh=a.lh||15;words.forEach(w=>{if((line+' '+w).trim().length>max){t_(g,x,ly,line.trim(),a);line=w;ly+=lh;}else line+=' '+w;});if(line.trim())t_(g,x,ly,line.trim(),a);return ly;};
const showTabs=(tabs,t)=>tabs.forEach(([g,a,b,last])=>H.op(g,H.es(t,a-.12,a+.1)*(last?1:(1-H.es(t,b-.1,b+.05)))));
const N=v=>'₦'+Math.round(v).toLocaleString('en-NG');
const STAGES=[['Denial','“It won’t happen here”'],['Defence','justify the old way'],['Discarding','accept the new reality'],['Adaptation','test, learn, get frustrated'],['Internalisation','the new way is normal']];
const curveF=x=>x<4.5?5.2-3.2*Math.sin(x/4.5*Math.PI):5.2+(x-4.5)*.75-(x<7?Math.sin((x-4.5)/2.5*Math.PI)*.8:0);

/* ================= Unit 6 ================= */
function u6Scene(stage){
  H.cap(stage,'Organisational change');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,1]);t_(A,300,40,'Why organisations change',{'text-anchor':'middle','font-size':15,'font-weight':700});
  ['Downsizing','Reorganising','Introducing teams','External mandates','New regulations','New leadership or staff'].forEach((x,i)=>{const a=-Math.PI/2+i*Math.PI/3,cx=300+Math.cos(a)*150,cy=230+Math.sin(a)*130;el('line',{x1:300,y1:230,x2:cx,y2:cy,stroke:'var(--line)','stroke-width':2},A);box(A,cx-75,cy-20,150,40,'var(--emp-soft)','none',20);t_(A,cx,cy+5,x,{'text-anchor':'middle','font-size':12,'font-weight':700});});
  el('circle',{cx:300,cy:230,r:46,fill:'var(--org)'},A);t_(A,300,235,'Change',{'text-anchor':'middle','font-size':14,'font-weight':700,fill:'var(--card)'});
  const B=tab(s);tabs.push([B,1,2]);t_(B,300,40,'A sacred cow hunt (Kriegel & Brandt, 1996)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  ['Why are we doing it? Does it add value?','What if it didn’t exist?','Is someone else already doing it?','How and when did we start this?','Could another person or department do it better?'].forEach((x,i)=>{box(B,60,70+i*62,480,48,'var(--org-soft)','none',24);t_(B,86,99+i*62,'?',{'font-size':18,'font-weight':700,fill:'var(--org)'});t_(B,110,99+i*62,x,{'font-size':13});});
  const C=tab(s);tabs.push([C,2,3]);t_(C,300,40,'The paper cow',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const months=['Jan','Feb','Mar'];const pc=months.map((m,i)=>{const g=el('g',{},C);const x=110+i*150;for(let k=0;k<5;k++)el('rect',{x:x-40+k*3,y:150-k*5,width:80,height:100,rx:3,fill:'var(--card)',stroke:'var(--line)'},g);const X=t_(g,x+2,215,'✗',{'text-anchor':'middle','font-size':40,'font-weight':700,fill:'var(--err)'});t_(g,x,290,m+': report not sent',{'text-anchor':'middle','font-size':12});return {g,X};});
  const pcN=t_(C,300,350,'',{'text-anchor':'middle','font-size':15,'font-weight':700,fill:'var(--org)'});
  const D=tab(s);tabs.push([D,3,4]);t_(D,300,40,'The meeting cow: post the cost',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('rect',{x:160,y:70,width:280,height:70,rx:10,fill:'var(--ink)'},D);const meter=t_(D,300,116,'',{'text-anchor':'middle','font-size':30,'font-weight':700,class:'mono',fill:'var(--paper)'});
  el('ellipse',{cx:300,cy:260,rx:180,ry:60,fill:'var(--manila)'},D);for(let i=0;i<8;i++){const a=i/8*Math.PI*2;H.person(D,300+Math.cos(a)*200,265+Math.sin(a)*82,'var(--emp)',1.6);}
  const mN=t_(D,300,384,'8 managers at ₦6,000/hour + room ₦5,000 + refreshments ₦8,000 (illustrative)',{'text-anchor':'middle','font-size':11.5,fill:'var(--muted)'});const mT=t_(D,300,170,'',{'text-anchor':'middle','font-size':12.5});
  const E=tab(s);tabs.push([E,4,5]);const eax=H.axes(E,{x:80,y:70,w:460,h:270,xmin:0,xmax:10,ymin:0,ymax:10,xt:[[2,'relaxed'],[5,'optimal'],[9,'“by tomorrow”']],yt:[],xl:'pace of work',yl:'Quality'});
  const qf=x=>9-0.35*(x-5)*(x-5);const qp=[];for(let i=0;i<=60;i++){const x=10*i/60;qp.push([eax.sx(x),eax.sy(Math.max(0,qf(x)))]);}el('path',{d:H.path(qp),fill:'none',stroke:'var(--data)','stroke-width':3.5},E);
  const ed=el('circle',{r:8,fill:'var(--emp)'},E);t_(E,300,40,'The speed cow: unnecessary deadlines',{'text-anchor':'middle','font-size':15,'font-weight':700});const eN=t_(E,300,380,'',{'text-anchor':'middle','font-size':12.5});t_(E,530,86,'Illustrative',{'text-anchor':'end','font-size':10,fill:'var(--muted)'});
  const F=tab(s);tabs.push([F,5,6]);t_(F,300,40,'More ways to encourage change',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Think like a beginner','ask “why”, assume nothing makes sense'],['Don’t be complacent','keep improving even when it works'],['Make your own rules','don’t play by everyone else’s'],['Reward attempts','instead of penalising mistakes']].forEach(([a,b],i)=>{box(F,60,70+i*82,480,64,'var(--org-soft)','none',12);t_(F,84,98+i*82,a,{'font-size':14,'font-weight':700});t_(F,84,118+i*82,b,{'font-size':12});});
  const G=tab(s);tabs.push([G,6,7]);t_(G,300,40,'What employees fear losing (Bridges, 1985)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Identity','Who am I? What am I supposed to do?'],['Meaning','How do I fit into the changed organisation?'],['Belonging','Why must I work with people I don’t know?']].forEach(([a,b],i)=>{el('circle',{cx:120+i*180,cy:200,r:72,fill:['var(--data-soft)','var(--org-soft)','var(--emp-soft)'][i]},G);t_(G,120+i*180,206,a,{'text-anchor':'middle','font-size':16,'font-weight':700});wrap(G,120+i*180,310,b,22,{'text-anchor':'middle','font-size':12});});
  const Hh=tab(s);tabs.push([Hh,7,8,true]);const hax=H.axes(Hh,{x:60,y:70,w:480,h:260,xmin:0,xmax:10,ymin:0,ymax:10,xt:[],yt:[],xl:'time',yl:'Energy and acceptance'});
  const hp=[];for(let i=0;i<=100;i++){const x=10*i/100;hp.push([hax.sx(x),hax.sy(Math.min(9.6,curveF(x)))]);}el('path',{d:H.path(hp),fill:'none',stroke:'var(--data)','stroke-width':3.5},Hh);
  const sx=[.8,2.4,4.2,6,8.7];STAGES.forEach(([n],i)=>{t_(Hh,hax.sx(sx[i]),hax.sy(Math.min(9.6,curveF(sx[i])))+(i<3?24:-14),n,{'text-anchor':'middle','font-size':12,'font-weight':700});});const hd=el('circle',{r:9,fill:'var(--emp)'},Hh);const hT=t_(Hh,300,40,'Five stages employees go through',{'text-anchor':'middle','font-size':15,'font-weight':700});const hN=t_(Hh,300,380,'',{'text-anchor':'middle','font-size':12.5});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);
    const pm=Math.min(3,Math.floor(H.seg(t,2.05,2.9)*4));pc.forEach((p,i)=>H.op(p.X,i<pm?1:0));pcN.textContent=pm>=3?'Three months, three missing reports: no one complained':'';
    const mins=60*H.seg(t,3.05,3.95);meter.textContent=N(8*6000*mins/60+5000+8000);mT.textContent=Math.round(mins)+' minutes in';
    const x=1+8.5*H.seg(t,4.05,4.9);H.set(ed,{cx:eax.sx(x),cy:eax.sy(Math.max(0,qf(x)))});eN.textContent=x>6.5?'Rushing past the optimum: lower quality, more stress and health problems':'Working at a sensible pace';
    const hx=10*H.seg(t,7.05,7.95);H.set(hd,{cx:hax.sx(hx),cy:hax.sy(Math.min(9.6,curveF(hx)))});const si=hx<1.6?0:hx<3.3?1:hx<5?2:hx<7.5?3:4;hN.textContent=`${STAGES[si][0]}: ${STAGES[si][1]}`;
  }};
}
Course.add({id:'6',module:2,title:'Organisational Change',vizLabel:'Sacred cows, a meeting meter and the change curve',
  hook:{who:'Aisha, operations director',text:'Aisha’s weekly management meeting runs three hours, staff fill a 12-page monthly report nobody reads, and everything is due “by tomorrow”. She wants to change how the firm works, but last time staff dug in. Where should she start?'},
  objectives:['Explain why and how organisations change','Run a sacred cow hunt: paper, meeting and speed cows','Explain what employees fear in change','Describe the five stages employees go through'],
  steps:[
    {h:'Why change happens',t:'<p>Organisational development improves performance through organisation-wide change. Change comes from downsizing, reorganising, introducing teams, external mandates and regulations, or new leadership and personnel.</p>'},
    {h:'The sacred cow hunt',t:'<p>Kriegel and Brandt (1996): the first step is a hunt for <b>sacred cows</b>, long-standing practices that invisibly reduce productivity. Ask of every practice: why do we do it, what if it didn’t exist, is someone else doing it, how did it start, could someone do it better?</p>'},
    {h:'The paper cow',t:'<p>Unnecessary forms and reports that cost money to prepare, distribute and read. One company simply stopped sending a monthly report: three months, three missing reports, no complaints. Review all forms yearly.</p>'},
    {h:'The meeting cow',t:'<p>Ask whoever calls a meeting to cost it (an hour of each attendee’s pay, the room, refreshments) and weigh it against the benefit. Some firms post the cost at the start. Watch the meter rise.</p>'},
    {h:'The speed cow',t:'<p>Unnecessary deadlines push employees beyond their optimal pace, lowering quality and raising stress and health problems. “By tomorrow” is sometimes necessary, often not.</p>'},
    {h:'Strategies that encourage change',t:'<p>Think like a beginner; don’t be complacent with what works; don’t play by everyone else’s rules; reward attempts at change instead of penalising mistakes.</p>'},
    {h:'Why employees resist',t:'<p>People are comfortable with the old way and fear worse conditions. Bridges (1985): they feel out of control and fear losing <b>identity</b>, <b>meaning</b> and <b>belonging</b>.</p>'},
    {h:'Five stages of change',t:'<p><b>Denial</b> (“we tried that before”), <b>defence</b> (justifying old ways, feeling criticised), <b>discarding</b> (accepting change is inevitable), <b>adaptation</b> (testing the new system, often frustrated and angry), <b>internalisation</b> (comfortable with the new culture and co-workers).</p>'}
  ],
  scene:u6Scene,
  sandboxIntro:'Hunt your own meeting cow: what does your regular meeting really cost?',
  sandbox(ctl,st){
    const s=H.svg(st,520,240);const p={n:8,pay:6000,h:2,room:5000,ref:8000,per:4};const ro=H.readout(ctl);
    H.slider(ctl,{id:'u6n',label:'Attendees',min:2,max:30,value:8},v=>{p.n=v;draw();});
    H.slider(ctl,{id:'u6p',label:'Average pay per hour',min:500,max:30000,step:500,value:6000,fmt:N},v=>{p.pay=v;draw();});
    H.slider(ctl,{id:'u6h',label:'Length',min:.5,max:4,step:.5,value:2,fmt:v=>v+' h'},v=>{p.h=v;draw();});
    H.slider(ctl,{id:'u6r',label:'Room and refreshments',min:0,max:50000,step:1000,value:13000,fmt:N},v=>{p.room=v;p.ref=0;draw();});
    H.slider(ctl,{id:'u6f',label:'Meetings per month',min:1,max:20,value:4},v=>{p.per=v;draw();});
    function draw(){s.innerHTML='';const one=p.n*p.pay*p.h+p.room+p.ref,yr=one*p.per*12;el('rect',{x:40,y:40,width:440,height:80,rx:12,fill:'var(--ink)'},s);t_(s,260,95,N(one),{'text-anchor':'middle','font-size':34,'font-weight':700,class:'mono',fill:'var(--paper)'});t_(s,260,150,'per meeting',{'text-anchor':'middle','font-size':12});t_(s,260,190,N(yr)+' a year',{'text-anchor':'middle','font-size':20,'font-weight':700,fill:'var(--err)'});
      ro.innerHTML=`Would the decisions from this meeting be worth <b>${N(one)}</b>? Shorter meetings or fewer attendees: halving the length saves <b>${N(yr/2-(p.room+p.ref)*p.per*6)}</b> a year in staff time.`;}
    draw();
  },
  sae:{q:'Critically examine how changes can be carried out without problems in an organisation.',a:'Start with a sacred cow hunt so staff help identify useless practices; explain reasons; involve employees; expect and manage the five stages (denial to internalisation); address fears about identity, meaning and belonging; reward attempts to change. Problems can be reduced but rarely eliminated.'},
  tma:{q:'Look into any organisation undergoing change. What methods did they use?',outline:['Identify the reason for change (downsizing, teams, regulation, new leadership)','Did they hunt sacred cows (paper, meeting, speed)?','How did they handle employee fears (identity, meaning, belonging)?','Which of the five stages did staff show?','Evaluate against Kriegel and Brandt’s strategies']},
  quiz:[
    {q:'A sacred cow is…',o:['A protected product','A long-standing practice that invisibly reduces productivity','A senior manager','A cultural ritual'],a:1,w:'A sacred cow hunt tries to remove practices that serve no useful purpose.'},
    {q:'The first stage employees go through during change is…',o:['Defence','Denial','Adaptation','Discarding'],a:1,w:'Denial → defence → discarding → adaptation → internalisation.'},
    {q:'In which stage do employees often become frustrated and angry while learning the new system?',o:['Denial','Discarding','Adaptation','Internalisation'],a:2,w:'Adaptation takes tremendous energy.'},
    {q:'The speed cow refers to…',o:['Unnecessary meetings','Unnecessary paperwork','Unnecessary deadlines','Fast promotions'],a:2,w:'Unnecessary deadlines lower quality and raise stress.'}
  ],
  card:[{h:'Sacred cows',items:['Paper cow: needless forms and reports','Meeting cow: costly, needless meetings','Speed cow: needless deadlines']},{h:'Five stages of change',ordered:true,items:STAGES.map(s=>s[0])}]
});

/* ================= Unit 7 ================= */
const TYPES=[['Change agent','“If it isn’t broke, break it.”','var(--err)'],['Change analyst','“If it isn’t broke, leave it; if it’s broke, fix it.”','var(--org)'],['Receptive changer','“If it’s broke, I’ll help fix it.”','var(--data)'],['Reluctant changer','“Are you sure it’s broken?”','var(--emp)'],['Change resister','“It may be broken, but it’s better than the unknown.”','var(--muted)']];
function u7Scene(stage){
  H.cap(stage,'Factors that influence acceptance of change');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,1]);t_(A,300,36,'The reason behind the change',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const rs=[['Financial problems',.8],['External mandate',.78],['Improve the organisation',.75],['New philosophy',.45],['A whim: “let’s do teams”',.3],['“Everyone else has teams”',.28],['No reason given',.1]];const aB=rs.map(([n,v],i)=>{const y=60+i*46;t_(A,220,y+22,n,{'text-anchor':'end','font-size':12.5});el('rect',{x:230,y:y+6,width:300,height:24,rx:12,fill:'var(--sunk)'},A);return el('rect',{x:230,y:y+6,height:24,rx:12,fill:v>.6?'var(--org)':v>.25?'var(--emp)':'var(--err)'},A);});
  t_(A,380,400,'likely acceptance (illustrative)',{'text-anchor':'middle','font-size':11,fill:'var(--muted)'});
  const B=tab(s);tabs.push([B,1,2]);t_(B,300,36,'The person making the change',{'text-anchor':'middle','font-size':15,'font-weight':700});
  box(B,30,64,260,320,'var(--org-soft)','none',14);box(B,310,64,260,320,'var(--err-soft)','none',14);t_(B,160,94,'Accepted',{'text-anchor':'middle','font-size':15,'font-weight':700,fill:'var(--org)'});t_(B,440,94,'Rejected',{'text-anchor':'middle','font-size':15,'font-weight':700,fill:'var(--err)'});
  wrap(B,160,124,'A respected consultant switches her firm to team-based work. Staff trust her: she treats them like family, and her last change raised revenue 30%.',32,{'text-anchor':'middle','font-size':12});
  wrap(B,440,124,'A committee moves a 120-staff agency to an expensive, congested site far from clients, which turns out to be 5 minutes from each committee member’s home.',32,{'text-anchor':'middle','font-size':12});
  t_(B,160,330,'trust in the changer',{'text-anchor':'middle','font-size':12,'font-weight':700});t_(B,440,330,'motives doubted',{'text-anchor':'middle','font-size':12,'font-weight':700});
  const C=tab(s);tabs.push([C,2,3]);t_(C,300,36,'The person being changed',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const cT=TYPES.map(([a,b,c],i)=>{const g=el('g',{},C);const y=64+i*66;el('circle',{cx:70,cy:y+24,r:22,fill:c},g);box(g,104,y,460,50,'var(--card)','var(--line)',10);t_(g,120,y+21,a,{'font-size':14,'font-weight':700});t_(g,120,y+40,b,{'font-size':11.5,fill:'var(--muted)'});return g;});
  t_(C,300,410,'Receptive changers are essential for any major change to succeed',{'text-anchor':'middle','font-size':12,'font-weight':700});
  const D=tab(s);tabs.push([D,3,5]);const dT=t_(D,300,36,'',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const jj=el('g',{},D);[['Jill','“the bad old days”','var(--org)',150,'energetic, moving on'],['Jack','“the good old days”','var(--err)',450,'whining all week']].forEach(([n,m,c,x,d])=>{H.person(jj,x,180,c,3);box(jj,x-110,70,220,50,'var(--card)','var(--line)',25);t_(jj,x,100,m,{'text-anchor':'middle','font-size':14,'font-style':'italic'});t_(jj,x,230,n,{'text-anchor':'middle','font-size':15,'font-weight':700});t_(jj,x,250,d,{'text-anchor':'middle','font-size':12});});
  box(jj,60,290,480,90,'var(--org-soft)','none',12);wrap(jj,300,318,'Denton (1996): survey staff, share their dissatisfaction, so they focus on the “bad old days” and want change.',62,{'text-anchor':'middle','font-size':12.5});
  const fear=el('g',{},D);[['Emotional support'],['Let employees vent and discuss'],['A safety net for mistakes'],['Describe the benefits']].forEach(([a],i)=>{box(fear,60,76+i*76,480,58,'var(--org-soft)','none',29);t_(fear,300,111+i*76,a,{'text-anchor':'middle','font-size':14,'font-weight':700});});
  const E=tab(s);tabs.push([E,5,6]);t_(E,300,36,'Communicating details',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Communicating change is hard work','a readiness survey often shows staff still don’t understand'],['Train the communicators','to handle hostility and resistance'],['Two-way communication','employees give feedback to those making changes'],['Honesty is the best policy','share information as it arises']].forEach(([a,b],i)=>{box(E,60,64+i*84,480,68,'var(--data-soft)','none',12);t_(E,84,92+i*84,a,{'font-size':14,'font-weight':700});t_(E,84,114+i*84,b,{'font-size':12});});
  const F=tab(s);tabs.push([F,6,7,true]);const fax=H.axes(F,{x:80,y:70,w:460,h:260,xmin:0,xmax:4,ymin:0,ymax:10,xt:[[0,'0'],[1,'1 yr'],[2,'2 yrs'],[3,'3 yrs'],[4,'4 yrs']],yt:[],xl:'time in “change mode”',yl:'Risk of things going wrong'});
  el('rect',{x:fax.sx(2),y:fax.sy(10),width:fax.sx(4)-fax.sx(2),height:fax.sy(0)-fax.sy(10),fill:'var(--err-soft)',opacity:.6},F);t_(F,fax.sx(3),fax.sy(9),'beyond 2 years',{'text-anchor':'middle','font-size':12,'font-weight':700,fill:'var(--err)'});
  const fp=[];for(let i=0;i<=40;i++){const x=4*i/40;fp.push([fax.sx(x),fax.sy(1+2*x*x/4+x)]);}el('path',{d:H.path(fp),fill:'none',stroke:'var(--data)','stroke-width':3.5},F);t_(F,300,40,'Time frame and training',{'text-anchor':'middle','font-size':15,'font-weight':700});t_(F,300,380,'Consultants advise no more than 2 years in change mode; then train staff for the new system',{'text-anchor':'middle','font-size':12});t_(F,530,86,'Illustrative',{'text-anchor':'end','font-size':10,fill:'var(--muted)'});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);const ap=H.es(t,.1,.7);aB.forEach((b,i)=>H.set(b,{width:300*rs[i][1]*ap}));cT.forEach((g,i)=>H.op(g,H.es(t,2+i*.12,2.15+i*.12)));
    H.op(jj,k===3?1:0);H.op(fear,k===4?1:0);dT.textContent=k===3?'Create an atmosphere for change':'Then reduce the fear of change';
  }};
}
Course.add({id:'7',module:2,title:'Factors That Influence Acceptance of Change',vizLabel:'Reasons, changers and the good old days',
  hook:{who:'Emeka, HR manager',text:'Emeka’s company is moving everyone to a new computer system. Some staff are excited, some are sceptical, and a few are quietly sabotaging it. The same change, five different reactions.'},
  objectives:['Explain how the reason for change affects acceptance','Explain how trust in the person making the change matters','Identify five types of people reacting to change','Describe how to create an atmosphere for change, communicate it, time it and train for it'],
  steps:[
    {h:'The reason behind the change',t:'<p>Employees understand (if not like) change due to financial problems, external mandates or efforts to improve. Acceptance is lower for a change of philosophy, a whim (“let’s do teams”) or copying others. It is lowest when no reason is given.</p>'},
    {h:'The person making the change',t:'<p>Changes from leaders who are liked, respected and have a history of success are accepted more readily; those from leaders whose motives are doubted are not. The course contrasts a trusted consultant with an agency committee that chose a building near their own homes. It also cites Prof. Soludo’s credibility after bank consolidation.</p>'},
    {h:'The person being changed',t:'<p><b>Change agents</b> change for its own sake. <b>Change analysts</b> change only to improve. <b>Receptive changers</b> won’t start change but will help, and are essential. <b>Reluctant changers</b> change only if necessary. <b>Change resisters</b> fear and fight it.</p>'},
    {h:'Create an atmosphere for change',t:'<p>Denton (1996): first create <b>dissatisfaction</b> with the current system. Survey employees and share the results, so they remember the “bad old days” rather than pining for the “good old days”, like Jill rather than Jack.</p>'},
    {h:'Reduce the fear of change',t:'<p>Provide emotional support, let employees vent and discuss feelings, give a safety net for mistakes during the transition, and describe the benefits.</p>'},
    {h:'Communicate the details',t:'<p>Keep employees informed and involved from planning to implementation unless secrecy is needed (e.g. a merger); in the dark, people assume the worst. Communication is hard work, communicators need training, it must be two-way, and honesty is the best policy.</p>'},
    {h:'Time frame and training',t:'<p>The longer change takes, the more can go wrong and the more disillusioned staff become: many consultants advise no more than <b>2 years</b> in change mode. Afterwards, train staff for the new system: new computers, or teamwork, goal setting and presentation skills for self-directed teams.</p>'}
  ],
  scene:u7Scene,
  sandboxIntro:'Describe your workforce and see how ready it is for a major change.',
  sandbox(ctl,st){
    const s=H.svg(st,520,260);const v=[5,15,40,25,15];const ro=H.readout(ctl);
    TYPES.forEach(([n],i)=>H.slider(ctl,{id:'u7'+i,label:n+'s',min:0,max:60,value:v[i],fmt:x=>x+'%'},x=>{v[i]=x;draw();}));
    function draw(){s.innerHTML='';const tot=v.reduce((a,b)=>a+b,0)||1;let acc=0;TYPES.forEach(([n,m,c],i)=>{const w=480*v[i]/tot;el('rect',{x:20+acc,y:70,width:w,height:60,fill:c},s);if(w>40)t_(s,20+acc+w/2,155,n.split(' ')[1]||n,{'text-anchor':'middle','font-size':11});acc+=w;});
      const score=(v[1]*.8+v[2]*1+v[3]*.4-v[4]*.8+v[0]*.2)/tot;ro.innerHTML=`Readiness: <b>${score>.6?'high':score>.35?'moderate':'low'}</b>.<br>${v[2]/tot<.25?'Too few receptive changers: build them before launching.':'Enough receptive changers to carry the change.'} ${v[4]/tot>.25?'Many resisters: invest in reasons, trust and fear reduction.':''}`;}
    draw();H.tag(st,'Illustrative scoring');
  },
  sae:{q:'Examine how a company can use the information in this unit during reforms.',a:'Give clear reasons (financial, regulatory, improvement); let a trusted, respected leader front the change; identify and enlist receptive changers and analysts; create dissatisfaction with the status quo via surveys; reduce fear with support and a safety net; communicate honestly and two-way; finish within about two years; train staff for the new system.'},
  tma:{q:'Critically examine the factors involved in ensuring successful change in an organisation.',outline:['The reason behind the change','The person making the change: trust and motive','The person being changed: five types','Implementation: atmosphere, fear reduction, communication, time frame, training','Critically: these improve acceptance but cannot guarantee it']},
  quiz:[
    {q:'Which reason for change is least likely to be accepted?',o:['Financial problems','External mandate','No reason given','Improving the organisation'],a:2,w:'Employees are least likely to accept change when they are not told why.'},
    {q:'“If it’s broke, I’ll help fix it” describes a…',o:['Change agent','Change analyst','Receptive changer','Change resister'],a:2,w:'Receptive changers are essential for major change.'},
    {q:'Denton advises starting change by…',o:['Announcing it suddenly','Creating dissatisfaction with the current system','Firing resisters','Hiring consultants'],a:1,w:'Surveys that reveal dissatisfaction focus staff on the “bad old days”.'},
    {q:'Many consultants advise staying in “change mode” no longer than…',o:['3 months','6 months','2 years','5 years'],a:2,w:'The longer it takes, the more can go wrong.'}
  ],
  card:[{h:'Three acceptance factors',items:['The reason behind the change','The person making the change','The person being changed']},{h:'Five reactions',items:TYPES.map(x=>x[0])},{h:'Communicating change',items:['It is hard work','Train communicators','Two-way','Honesty']}]
});

/* ================= Unit 8 ================= */
function u8Scene(stage){
  H.cap(stage,'Leadership and organisational culture');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,1]);t_(A,300,36,'Culture and subcultures',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('circle',{cx:300,cy:230,r:170,fill:'var(--org-soft)'},A);t_(A,300,90,'University culture: honesty and trust',{'text-anchor':'middle','font-size':13,'font-weight':700,fill:'var(--org)'});
  [['Study centre',230,210],['Your class',370,210],['Faculty',300,320]].forEach(([n,x,y])=>{el('circle',{cx:x,cy:y,r:60,fill:'var(--card)',stroke:'var(--org)'},A);t_(A,x,y+5,n,{'text-anchor':'middle','font-size':12,'font-weight':700});});
  t_(A,300,420,'Shared values, beliefs and traditions (Nwachukwu & Vitell, 1997)',{'text-anchor':'middle','font-size':11.5,fill:'var(--muted)'});
  const B=tab(s);tabs.push([B,1,2]);const bT=t_(B,300,36,'Norms spread by modelling',{'text-anchor':'middle','font-size':15,'font-weight':700});
  H.person(B,300,110,'var(--org)',2.6);t_(B,300,150,'facilitator arrives late',{'text-anchor':'middle','font-size':11.5});const studs=[];for(let i=0;i<24;i++){const x=120+(i%8)*50,y=210+Math.floor(i/8)*60;const g=el('g',{},B);H.person(g,x,y,'var(--emp)',1.5);studs.push(g);}
  const bN=t_(B,300,410,'',{'text-anchor':'middle','font-size':12.5});
  const C=tab(s);tabs.push([C,2,3]);t_(C,300,36,'Culture is usually ignored in restructuring',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('circle',{cx:300,cy:220,r:120,fill:'var(--sunk)'},C);const arc=el('path',{fill:'var(--err)'},C);t_(C,300,226,'70%',{'text-anchor':'middle','font-size':34,'font-weight':700,class:'mono',fill:'var(--card)'});
  wrap(C,300,370,'of 500 corporations surveyed said they lacked the knowledge to address cultural issues (Sherriton & Stern, 1997)',60,{'text-anchor':'middle','font-size':12.5});
  const D=tab(s);tabs.push([D,3,4]);t_(D,300,36,'Assessing the new culture: five steps',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const steps=[['Needs assessment','compare current with desired culture'],['Executive direction','will managers really share decisions?'],['Implementation','committees, management, or employees too?'],['Training','new philosophy means new role expectations'],['Evaluation','did it change, or do old norms remain?']];const dS=steps.map(([a,b],i)=>{const g=el('g',{},D);box(g,60,62+i*70,480,56,'var(--org-soft)','none',12);t_(g,84,86+i*70,`${i+1}. ${a}`,{'font-size':14,'font-weight':700});t_(g,84,106+i*70,b,{'font-size':12});return g;});
  const E=tab(s);tabs.push([E,4,5]);t_(E,300,36,'Create dissatisfaction, then maintain the new culture',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Share data','technology trends, financial performance'],['Attitude surveys','publish the dissatisfaction level'],['Allow employee input','commitment from all levels'],['New rewards','pay for performance, recognition, meaningful work (Hawk, 1995)']].forEach(([a,b],i)=>{box(E,60,64+i*84,480,68,i<3?'var(--emp-soft)':'var(--org-soft)','none',12);t_(E,84,92+i*84,a,{'font-size':14,'font-weight':700});t_(E,84,114+i*84,b,{'font-size':12});});
  const F=tab(s);tabs.push([F,5,6]);const fax=H.axes(F,{x:80,y:70,w:460,h:260,xmin:0,xmax:10,ymin:0,ymax:100,xt:[[0,'now'],[5,'5 yrs'],[10,'10 yrs']],yt:[[0,'0%'],[50,'50%'],[100,'100%']],xl:'years',yl:'Staff who fit the new culture'});
  const sim=(fit)=>{let v=30;const out=[[0,v]];for(let y=1;y<=10;y++){v=v*(1-.12)+12*fit;out.push([y,v]);}return out;};const fA=el('path',{fill:'none',stroke:'var(--org)','stroke-width':3.5},F),fB=el('path',{fill:'none',stroke:'var(--err)','stroke-width':3,'stroke-dasharray':'7 5'},F);
  t_(F,300,40,'Selection “freezes” the new culture (Lewin, 1951)',{'text-anchor':'middle','font-size':15,'font-weight':700});const fL1=t_(F,0,0,'hire for fit',{'font-size':12,'font-weight':700,fill:'var(--org)'}),fL2=t_(F,0,0,'keep hiring the old type',{'font-size':12,'font-weight':700,fill:'var(--err)'});t_(F,530,86,'Illustrative: 12% turnover a year',{'text-anchor':'end','font-size':10,fill:'var(--muted)'});
  const G=tab(s);tabs.push([G,6,7]);t_(G,300,36,'Socialisation reinforces culture',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Stories','repeated by staff at the water cooler','var(--emp-soft)'],['Rituals','awards banquets, staff picnics, probation','var(--org-soft)'],['Symbols','an on-site wellness centre, mission and value statements','var(--data-soft)']].forEach(([a,b,c],i)=>{el('circle',{cx:120+i*180,cy:200,r:76,fill:c},G);t_(G,120+i*180,206,a,{'text-anchor':'middle','font-size':16,'font-weight':700});wrap(G,120+i*180,310,b,22,{'text-anchor':'middle','font-size':12});});
  const Hh=tab(s);tabs.push([Hh,7,8,true]);t_(Hh,300,36,'Coping with change (Pritchett, 1993)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('path',{d:'M20 170 Q 150 140 300 170 T 580 170 L580 230 Q 450 260 300 230 T 20 230 Z',fill:'var(--data-soft)'},Hh);const wv=[0,1,2,3].map(i=>t_(Hh,0,205,'→',{'font-size':20,fill:'var(--data)'}));const canoe=el('g',{},Hh);el('path',{d:'M-34 0 Q 0 16 34 0 Z',fill:'var(--emp)'},canoe);H.person(canoe,0,-4,'var(--org)',1.3);
  t_(Hh,300,130,'Paddle faster than the current to steer',{'text-anchor':'middle','font-size':13,'font-weight':700});
  [['Speed up','get involved, don’t be left behind'],['Take the initiative','chart your own course, risk mistakes'],['Spend energy on solutions','not on complaining']].forEach(([a,b],i)=>{box(Hh,30+i*185,280,175,90,'var(--org-soft)','none',12);t_(Hh,117+i*185,310,a,{'text-anchor':'middle','font-size':13,'font-weight':700});wrap(Hh,117+i*185,332,b,22,{'text-anchor':'middle','font-size':11.5});});
  t_(Hh,300,400,'Managers can also lighten stress: baby pictures, a stress-free zone, a surprise hour off',{'text-anchor':'middle','font-size':11.5,fill:'var(--muted)'});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);
    const sp=H.seg(t,1.1,1.9);const nLate=Math.round(24*sp*sp);studs.forEach((g,i)=>g.style.fill=i<nLate?'var(--err)':'var(--emp)');studs.forEach((g,i)=>g.querySelectorAll('*').forEach(e=>e.style.fill=i<nLate?'var(--err)':'var(--emp)'));bN.textContent=`${nLate} of 24 students now arrive late: the accepted “norm”`;
    const ap=.7*H.es(t,2.1,2.7);const a=ap*2*Math.PI;const x=300+120*Math.sin(a),y=220-120*Math.cos(a);H.set(arc,{d:ap>0?`M300 220 L300 100 A120 120 0 ${ap>.5?1:0} 1 ${x} ${y}Z`:''});
    dS.forEach((g,i)=>H.op(g,H.es(t,3+i*.15,3.15+i*.15)));
    const fp=H.es(t,5.1,5.8);const A1=sim(1),B1=sim(.2);const cut=a=>a.slice(0,Math.max(2,Math.round(11*fp)));H.set(fA,{d:H.path(cut(A1).map(([x,v])=>[fax.sx(x),fax.sy(v)]))});H.set(fB,{d:H.path(cut(B1).map(([x,v])=>[fax.sx(x),fax.sy(v)]))});H.set(fL1,{x:fax.sx(7),y:fax.sy(A1[7][1])-10});H.set(fL2,{x:fax.sx(5.5),y:fax.sy(B1[6][1])+22});H.op(fL1,fp);H.op(fL2,fp);
    const cp=(t*60)%600;wv.forEach((w,i)=>H.set(w,{x:(i*150+cp*.3)%600}));canoe.setAttribute('transform',`translate(${80+380*H.seg(t,7.05,7.9)},196)`);
  }};
}
Course.add({id:'8',module:2,title:'Leadership and Organisational Culture',vizLabel:'Norms spreading and a culture that freezes',
  hook:{who:'Peju, new branch manager',text:'Peju declared her branch “empowered”: staff should now make decisions. Six months later nothing has changed. Supervisors still decide everything, and new hires learn from the old hands that initiative gets you in trouble.'},
  objectives:['Define organisational culture and subculture','Explain how culture spreads through modelling','Describe how to assess, create and maintain a new culture','Give advice for coping with change'],
  steps:[
    {h:'Culture and subcultures',t:'<p>Organisational culture is the shared values, beliefs and traditions in an organisation (Nwachukwu & Vitell, 1997). It sets norms of appropriate behaviour and the expectations staff and management have of each other. Departments form <b>subcultures</b>, as a study centre does within a university.</p>'},
    {h:'Culture spreads by modelling',t:'<p>People learn norms by watching role models. If a facilitator, or several classmates, arrive late without consequence, lateness becomes the norm. If top management behaves unethically, staff adopt those norms. To change it, the leader must model the right behaviour and use rewards or sanctions.</p>'},
    {h:'Culture is often ignored',t:'<p>Culture is usually ignored in restructuring, because people think it can’t be changed or don’t know how. In a survey of 500 corporations, <b>70%</b> said they lacked the knowledge (Sherriton & Stern, 1997). Without addressing culture, changes do not last.</p>'},
    {h:'Assessing the new culture',t:'<p>Keep what works and add what is needed. Five steps: <b>needs assessment</b>, <b>executive direction</b> (if supervisors won’t share decisions, empowerment can’t last), <b>implementation</b>, <b>training</b> and <b>evaluation</b>.</p>'},
    {h:'Create dissatisfaction, then maintain',t:'<p>Share data on technology trends and financial performance, publish attitude surveys, and let employees contribute. Then maintain the new culture with new <b>rewards</b>: pay for performance, recognition, meaningful work (Hawk, 1995).</p>'},
    {h:'Selection freezes the culture',t:'<p>Hire people who fit the new culture. As staff turn over, the culture becomes “frozen” in the desired form (Lewin, 1951). Keep hiring people who prefer the old way and the organisation drifts back.</p>'},
    {h:'Socialisation',t:'<p>New employees learn the culture through <b>stories</b> (often from the water cooler), <b>rituals</b> (awards banquets, picnics, probation) and <b>symbols</b> (a wellness centre, mission and value statements).</p>'},
    {h:'Coping with change',t:'<p>Pritchett (1993): <b>speed up</b> (paddle faster than the current to steer), <b>take the initiative</b>, and <b>spend energy on solutions</b>. Managers can reduce stress creatively: baby pictures of managers, a stress-free zone, a surprise hour off.</p>'}
  ],
  scene:u8Scene,
  sandboxIntro:'See how hiring decisions shape culture over ten years.',
  sandbox(ctl,st){
    const s=H.svg(st,520,280);const p={to:12,fit:80,start:30};const ro=H.readout(ctl);
    H.slider(ctl,{id:'u8t',label:'Staff turnover per year',min:2,max:30,value:12,fmt:v=>v+'%'},v=>{p.to=v;draw();});
    H.slider(ctl,{id:'u8f',label:'New hires who fit the new culture',min:0,max:100,step:5,value:80,fmt:v=>v+'%'},v=>{p.fit=v;draw();});
    H.slider(ctl,{id:'u8s',label:'Staff who fit today',min:0,max:100,step:5,value:30,fmt:v=>v+'%'},v=>{p.start=v;draw();});
    function draw(){s.innerHTML='';const g=el('g',{},s);const ax=H.axes(g,{x:60,y:20,w:430,h:220,xmin:0,xmax:10,ymin:0,ymax:100,xt:[0,2,4,6,8,10].map(v=>[v,v+' yr']),yt:[[0,'0%'],[50,'50%'],[100,'100%']]});let v=p.start;const pts=[[0,v]];for(let y=1;y<=10;y++){v=v*(1-p.to/100)+p.to*p.fit/100;pts.push([y,v]);}
      el('path',{d:H.path(pts.map(([x,y])=>[ax.sx(x),ax.sy(y)])),fill:'none',stroke:'var(--org)','stroke-width':3.5},g);ro.innerHTML=`After 10 years, <b>${Math.round(v)}%</b> of staff fit the new culture (long-run level: ${p.fit}%).<br>Selection sets where culture settles; turnover sets how fast.`;}
    draw();H.tag(st,'Illustrative model');
  },
  sae:{q:'How can you introduce change without stress in an organisation?',a:'Stress cannot be removed entirely, but it can be reduced: involve employees, explain reasons, train them, reward participation, and use Pritchett’s advice (speed up, take initiative, focus on solutions). Managers can add humour and relief: stress-free zones, a surprise hour off, light-hearted events.'},
  tma:{q:'Nigeria is going through many changes. In the light of this unit, would you say the organisational culture of reformed organisations has been an impediment?',outline:['Define culture and subculture; modelling','Did reforms assess current vs desired culture (five steps)?','Did leaders create dissatisfaction and involve staff?','Were rewards, selection and socialisation changed to match?','Use a Nigerian example and judge whether culture blocked or helped']},
  quiz:[
    {q:'Organisational culture is…',o:['The firm’s organisation chart','Shared values, beliefs and traditions','The product range','The salary structure'],a:1,w:'Nwachukwu and Vitell (1997).'},
    {q:'In a survey of 500 corporations, what share said they lacked knowledge to address culture?',o:['30%','50%','70%','90%'],a:2,w:'70% (Sherriton & Stern, 1997).'},
    {q:'Selecting employees who fit the new culture helps it to become…',o:['Thawed','Frozen','Ignored','Subcultured'],a:1,w:'Lewin (1951): the new culture becomes “frozen”.'},
    {q:'An annual awards banquet is an example of a…',o:['Story','Ritual','Symbol','Sacred cow'],a:1,w:'Rituals help employees become “one of the gang”.'}
  ],
  card:[{h:'Assessing a new culture',ordered:true,items:['Needs assessment','Executive direction','Implementation','Training','Evaluation']},{h:'Maintaining it',items:['Rewards','Selection for fit','Socialisation: stories, rituals, symbols']},{h:'Coping (Pritchett)',items:['Speed up','Take the initiative','Spend energy on solutions']}]
});

/* ================= Unit 9 ================= */
const VY=[['Importance of decision quality','Will one choice really be better than another? (Blue ink or black?)'],['Leader’s knowledge of the problem','Do I have enough information to decide alone?'],['Structure of the problem','Do I know what information I need and how to get it?'],['Importance of acceptance','Must others accept it? (Work hours: yes. My lunch: no.)'],['Probability of acceptance','Would they accept it if I decided alone?'],['Subordinate trust and motivation','Do they share the organisation’s goals?'],['Probability of subordinate conflict','Will they disagree about the best solution?']];
function u9Scene(stage){
  H.cap(stage,'Empowerment: when to involve employees');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,1]);t_(A,300,40,'Empowerment is a range',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('rect',{x:40,y:140,width:520,height:24,rx:12,fill:'var(--sunk)'},A);const ag=el('rect',{x:40,y:140,height:24,rx:12,fill:'var(--org)'},A);
  [['Leader decides alone',40],['Asks opinions',190],['Consults the group',350],['Employees decide',560]].forEach(([n,x],i)=>{el('circle',{cx:x,cy:152,r:9,fill:'var(--card)',stroke:'var(--org)','stroke-width':3},A);t_(A,x,i%2?200:120,n,{'text-anchor':i===0?'start':i===3?'end':'middle','font-size':12.5,'font-weight':700});});
  box(A,60,250,480,110,'var(--org-soft)','none',12);wrap(A,300,282,'Involve employees when quality matters, the decision affects them, the supervisor lacks knowledge, or employees do not trust the supervisor (Vroom & Yetton, 1973).',62,{'text-anchor':'middle','font-size':12.5});
  const B=tab(s);tabs.push([B,1,8]);const qs=VY.map(([a,b],i)=>{const g=el('g',{},B);const y=30+i*56;const r=box(g,30,y,540,46,'var(--card)','var(--line)',10);const n=t_(g,52,y+29,String(i+1),{'font-size':16,'font-weight':700,class:'mono',fill:'var(--muted)'});t_(g,80,y+20,a,{'font-size':13,'font-weight':700});t_(g,80,y+37,b,{'font-size':11,fill:'var(--muted)'});return {g,r,n};});
  const C=tab(s);tabs.push([C,8,9,true]);t_(C,300,36,'Case: the graduate assistantships',{'text-anchor':'middle','font-size':15,'font-weight':700});
  box(C,40,60,520,90,'var(--card)','var(--line)',12);wrap(C,60,86,'An assistant dean redesigned the assistantship system alone and announced it a week before the end of school. Awards came too late, forms lacked key information, deadlines suited only her office.',72,{'text-anchor':'start','font-size':12});
  [['Leader’s knowledge','She had never worked in financial aid, yet consulted no faculty, chairs or students.'],['Acceptance','Acceptance mattered, but she explained nothing; faculty already distrusted her office.']].forEach(([a,b],i)=>{box(C,40,170+i*110,520,92,'var(--err-soft)','none',12);t_(C,60,196+i*110,'✗ '+a,{'font-size':14,'font-weight':700,fill:'var(--err)'});wrap(C,60,218+i*110,b,72,{'font-size':12});});
  return {update(t){showTabs(tabs,t);H.set(ag,{width:520*H.es(t,.1,.8)});const k=Math.floor(t)-1;qs.forEach((q,i)=>{const on=i===k,done=i<k;H.set(q.r,{fill:on?'var(--org-soft)':done?'var(--sunk)':'var(--card)',stroke:on?'var(--org)':'var(--line)'});H.set(q.n,{fill:on?'var(--org)':'var(--muted)'});H.op(q.g,i<=k?1:.3);});}};
}
Course.add({id:'9',module:2,title:'Empowerment',vizLabel:'Seven questions before empowering staff',
  hook:{who:'Sola, head of department',text:'Sola wants to “empower” her team, but isn’t sure what that means. Should staff choose the new office layout? The new performance targets? Who gets the training budget? The answer is different each time.'},
  objectives:['Explain empowerment as a range from consulting to full control','Apply Vroom and Yetton’s seven factors','Diagnose what went wrong in a failed decision'],
  steps:[
    {h:'What empowerment means',t:'<p>Many employees are more satisfied when they have some control. Empowering can range from asking employees’ opinions to giving them complete decision-making control. Involve employees when quality matters, the decision affects them, the supervisor lacks knowledge, or they don’t trust the supervisor.</p>'},
    {h:'1. Importance of decision quality',t:'<p>Will one decision really be better than another? Whether to sign in blue or black ink makes no difference: little time or effort is warranted.</p>'},
    {h:'2. Leader’s knowledge of the problem',t:'<p>If the leader has enough information, consult only to make staff feel involved. If not, consultation is essential: you cannot choose a benefits package without asking employees what they need.</p>'},
    {h:'3. Structure of the problem',t:'<p>Does the leader know what information is needed and how to get it? If not, others must be involved and the decision takes longer.</p>'},
    {h:'4. Importance of acceptance',t:'<p>Must others accept the decision? Deciding employees’ working hours needs their agreement and input; deciding what you want for lunch does not (unless it involves onions or garlic).</p>'},
    {h:'5. Probability of acceptance',t:'<p>If acceptance matters, will they accept a decision made alone? A popular, competent leader may decide alone; otherwise, asking opinions first raises acceptance even when the leader already knows the answer.</p>'},
    {h:'6. Subordinate trust and motivation',t:'<p>Are subordinates motivated toward the organisation’s goals, so they can be trusted to decide in its interest?</p>'},
    {h:'7. Probability of subordinate conflict',t:'<p>If there are many possible solutions and staff will disagree, the leader is best served by gathering their information and then deciding himself.</p>'},
    {h:'A decision that went wrong',t:'<p>An assistant dean redesigned assistantships alone, a week before term ended. Two Vroom–Yetton failures: she lacked the knowledge yet consulted none of the stakeholders, and acceptance mattered yet she explained nothing to faculty who already distrusted her office.</p>'}
  ],
  scene:u9Scene,
  sandboxIntro:'Answer the seven questions for a real decision and get a recommended approach.',
  sandbox(ctl,st){
    const ans=[true,false,true,true,false,true,false];const ro=H.readout(ctl);const s=H.svg(st,520,220);
    VY.forEach(([q],i)=>H.segBtns(ctl,q,[[true,'Yes / high'],[false,'No / low']],ans[i],v=>{ans[i]=v;draw();}));
    function draw(){s.innerHTML='';const [qual,know,struct,accImp,accProb,trust,conf]=ans;let rec,lvl;
      if(!qual&&!accImp){rec='Decide alone, quickly.';lvl=0;}else if(conf&&accImp){rec='Gather everyone’s views, then decide yourself.';lvl=1;}else if(accImp&&!accProb&&trust){rec='Involve the group: let them reach the decision.';lvl=3;}else if(!know||!struct){rec='Consult those who have the information, then decide.';lvl=1;}else if(accImp&&!accProb){rec='Consult the group to win acceptance, then decide.';lvl=2;}else{rec='Decide alone, then explain your reasons.';lvl=0;}
      el('rect',{x:20,y:90,width:480,height:20,rx:10,fill:'var(--sunk)'},s);['Decide alone','Consult individuals','Consult group','Group decides'].forEach((n,i)=>{const x=20+i*160;el('circle',{cx:x,cy:100,r:i===lvl?14:8,fill:i===lvl?'var(--org)':'var(--card)',stroke:'var(--org)','stroke-width':3},s);t_(s,x,140,n,{'text-anchor':i===0?'start':i===3?'end':'middle','font-size':12,'font-weight':i===lvl?700:400});});
      ro.innerHTML=`<b>${rec}</b><br>A simplified reading of Vroom and Yetton’s seven factors.`;}
    draw();
  },
  sae:{q:'What reasons would you proffer for empowering employees?',a:'Better decisions where employees hold the information; higher acceptance and commitment when decisions affect them; greater job satisfaction from having some control; trust built where employees doubt the supervisor; and development of employees’ skills. Empower selectively, using Vroom and Yetton’s factors.'},
  tma:{q:'How can you decide whether an organisation has met the criteria for using any of the factors that determine whether employees should be empowered?',outline:['List the seven factors','For a sample decision, rate each factor (quality, knowledge, structure, acceptance importance and probability, trust, conflict)','Show how the answers point to deciding alone, consulting or delegating','Use the assistantship case as a warning','Conclude: empowerment is a skill, not a slogan']},
  quiz:[
    {q:'Choosing blue or black ink for signing a letter is low on…',o:['Decision acceptance','Decision quality importance','Subordinate conflict','Problem structure'],a:1,w:'One choice is no better than the other.'},
    {q:'If staff are likely to disagree strongly about many solutions, the leader should…',o:['Let them vote','Gather information from them, then decide himself','Ignore them','Delegate fully'],a:1,w:'High probability of conflict.'},
    {q:'In the assistantship case, which factor did the dean ignore first?',o:['Her lack of knowledge of the problem area','Ink colour','Subordinate conflict only','Time pressure'],a:0,w:'She had never worked in financial aid yet consulted no one.'}
  ],
  card:[{h:'Vroom–Yetton factors',ordered:true,items:VY.map(v=>v[0])}]
});
})();
