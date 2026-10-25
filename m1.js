/* MBA 829 Module 1 — Units 1–5: what makes a leader */
(function(){
const {H}=Course, el=H.el, t_=H.t;
const tab=s=>el('g',{},s);
const box=(g,x,y,w,h,fill='var(--card)',stroke='var(--line)',rx=8)=>el('rect',{x,y,width:w,height:h,rx,fill,stroke},g);
const wrap=(g,x,y,str,max=28,a={})=>{const words=str.split(' ');let line='',ly=y;const lh=a.lh||15;words.forEach(w=>{if((line+' '+w).trim().length>max){t_(g,x,ly,line.trim(),a);line=w;ly+=lh;}else line+=' '+w;});if(line.trim())t_(g,x,ly,line.trim(),a);return ly;};
const showTabs=(tabs,t)=>tabs.forEach(([g,a,b,last])=>H.op(g,H.es(t,a-.12,a+.1)*(last?1:(1-H.es(t,b-.1,b+.05)))));
const chips=(g,items,x0,y0,w,h,cols,fill,col,fs=12)=>items.map((it,i)=>{const c=i%cols,r=Math.floor(i/cols),gg=el('g',{},g);box(gg,x0+c*(w+10),y0+r*(h+10),w,h,fill,'none',h/2);wrap(gg,x0+c*(w+10)+w/2,y0+r*(h+10)+h/2+(it.length>w/7?-2:4),it,Math.floor(w/7),{'text-anchor':'middle','font-size':fs,'font-weight':700,fill:col,lh:13});return gg;});

/* ================= Unit 1 ================= */
function u1Scene(stage){
  H.cap(stage,'What is leadership?');H.tag(stage,'Illustrative trends');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,1]);
  const mk=(y0,title,pts,col,lead)=>{const g=el('g',{},A);const ax=H.axes(g,{x:70,y:y0,w:470,h:120,xmin:0,xmax:10,ymin:0,ymax:10,xt:[],yt:[],yl:title});el('line',{x1:ax.sx(lead),x2:ax.sx(lead),y1:y0,y2:y0+120,stroke:'var(--org)','stroke-dasharray':'5 4','stroke-width':2},g);t_(g,ax.sx(lead)+6,y0+12,'new leader',{'font-size':11,'font-weight':700,fill:'var(--org)'});const p=el('path',{fill:'none',stroke:col,'stroke-width':3.5},g);return {ax,p,pts};};
  const c1=mk(60,'Company sales',[8,7,6,5,4,3.5,4.5,6,7.5,8.5,9],'var(--data)',5),c2=mk(260,'Football team wins',[8,8.5,8,9,8.5,8.8,5,4,3.5,4,3],'var(--emp)',5.5);
  const q=t_(A,300,428,'How much of the change was the leader?',{'text-anchor':'middle','font-size':13,'font-weight':700});
  const B=tab(s);tabs.push([B,1,3]);const bT=t_(B,300,40,'',{'text-anchor':'middle','font-size':15,'font-weight':700});
  box(B,40,64,250,300,'var(--data-soft)','none',14);box(B,310,64,250,300,'var(--org-soft)','none',14);t_(B,165,94,'Leader emergence',{'text-anchor':'middle','font-size':15,'font-weight':700,fill:'var(--data)'});t_(B,435,94,'Leader performance',{'text-anchor':'middle','font-size':15,'font-weight':700,fill:'var(--org)'});
  wrap(B,165,120,'Who becomes a leader? Almost 100 traits studied; only intelligence, dominance and masculinity commonly relate, and weakly.',30,{'text-anchor':'middle','font-size':12});
  wrap(B,435,120,'Who leads well? Research looks at traits, needs and orientation. Excellent leaders might be intelligent, assertive, friendly, independent.',30,{'text-anchor':'middle','font-size':12});
  const bars=[['intelligence',.3],['dominance',.25],['masculinity',.2]].map(([n,v],i)=>{t_(B,60,250+i*34,n,{'font-size':11.5});el('rect',{x:150,y:238+i*34,width:120,height:16,rx:3,fill:'var(--card)'},B);return el('rect',{x:150,y:238+i*34,height:16,rx:3,fill:'var(--data)'},B);});t_(B,165,352,'weak links (illustrative)',{'text-anchor':'middle','font-size':10.5,fill:'var(--muted)'});
  ['intelligence','interpersonal adjustment'].forEach((n,i)=>{box(B,340,240+i*48,190,36,'var(--card)','none',18);t_(B,435,263+i*48,n,{'text-anchor':'middle','font-size':12.5,'font-weight':700});});t_(B,435,350,'consistently linked (Heslin & Dunphy, 1964)',{'text-anchor':'middle','font-size':10.5,fill:'var(--muted)'});
  const C=tab(s);tabs.push([C,3,4]);t_(C,300,40,'Self-monitoring: adapting outward behaviour',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const sits=['Morning greeting','Daily check-in','Tough feedback','Public speech'];const shy=[2,3,2,1],shown=[7,7,6,7];
  const sB=sits.map((n,i)=>{const y=80+i*72;t_(C,40,y+24,n,{'font-size':13,'font-weight':700});el('rect',{x:200,y:y+8,width:340,height:22,rx:11,fill:'var(--sunk)'},C);return {r:el('rect',{x:200,y:y+8,height:22,rx:11,fill:'var(--org)'},C),i};});
  t_(C,200,378,'quiet',{'font-size':11,fill:'var(--muted)'});t_(C,540,378,'outgoing',{'font-size':11,fill:'var(--muted)','text-anchor':'end'});const cN=t_(C,300,408,'',{'text-anchor':'middle','font-size':12.5});
  const D=tab(s);tabs.push([D,4,5,true]);t_(D,300,40,'Right person, right place, right time',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Right person','traits needed, but not enough'],['Right place','the situation calls for it'],['Right time','history is ready']].forEach(([a,b],i)=>{const cx=[210,390,300][i],cy=[190,190,300][i];el('circle',{cx,cy,r:105,fill:['var(--org)','var(--data)','var(--emp)'][i],opacity:.22},D);t_(D,cx+[-40,40,0][i],cy+[-30,-30,50][i],a,{'text-anchor':'middle','font-size':13,'font-weight':700});wrap(D,cx+[-40,40,0][i],cy+[-12,-12,68][i],b,18,{'text-anchor':'middle','font-size':11});});
  t_(D,300,230,'excellent',{'text-anchor':'middle','font-size':12,'font-weight':700});t_(D,300,244,'leader',{'text-anchor':'middle','font-size':12,'font-weight':700});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);
    [c1,c2].forEach((c,j)=>{const p=H.es(t,.05+j*.2,.6+j*.2);const n=Math.max(2,Math.round(11*p));H.set(c.p,{d:H.path(c.pts.slice(0,n).map((v,i)=>[c.ax.sx(i),c.ax.sy(v)]))});});
    bT.textContent=k===1?'Two questions: who emerges, and who performs?':'Only two traits hold up for performance';const bp=H.es(t,1.3,1.8);bars.forEach((b,i)=>H.set(b,{width:120*[.3,.25,.2][i]*bp}));
    const ad=H.es(t,3.2,3.8);sB.forEach(b=>H.set(b.r,{width:340*H.lerp(shy[b.i],shown[b.i],ad)/10}));cN.textContent=ad>.5?'A shy leader who still greets and talks to every employee daily':'His natural trait: shyness';
  }};
}
Course.add({id:'1',module:1,title:'What Is Leadership?',vizLabel:'Two organisations and their new leaders',
  hook:{who:'Ngozi, board member',text:'Ngozi’s company has lost sales for five years. The board is replacing the managing director. One director wants “a born leader”; another wants someone trained; a third says “it depends on the situation”. Which theory you believe decides who you hire.'},
  objectives:['Explain the concept of leadership','Distinguish leader emergence from leader performance','Identify the traits linked to leadership and the role of self-monitoring'],
  steps:[
    {h:'Two stories',t:'<p>A company’s sales fall for five years; a new president arrives and it returns to profit. A winning football team loses its coach and starts losing. How much of each change was the leader? This course explores what types of people lead well, how leaders adapt, which skills matter, and how leaders use power and influence.</p><p>The theory executives believe shapes how they <b>select</b> and <b>develop</b> managers: born leaders, trainable skills, or the fit between behaviour and situation.</p>'},
    {h:'Leader emergence',t:'<p>The idea that leaders have traits non-leaders lack: what Azikiwe, Awolowo and Ahmadu Bello share that a neighbour does not. Almost 100 traits have been studied; only <b>intelligence, dominance and masculinity</b> commonly relate to emergence, and even then not strongly (Kenny & Zaccaro, 1983). Men and women emerge equally often; <b>high self-monitors</b> emerge more often.</p>'},
    {h:'Early signs of leadership',t:'<p>Bruce (1997) suggests choosing a CEO by looking for risk taking, innovation and vision early in a career: Harry Gray, Ray Tower, and Lee Iacocca’s “Buy a ’56 for $56” plan, which took his sales division from last to first.</p>'},
    {h:'Leader performance',t:'<p>Leader performance asks what excellent leaders have that poor ones lack. Research covers traits, needs and orientation. Heslin and Dunphy (1964) found only two traits consistently linked to performance: <b>intelligence</b> and <b>interpersonal adjustment</b>.</p>'},
    {h:'Self-monitoring',t:'<p>Perhaps good leaders need only one stable trait: <b>adaptability</b>, or self-monitoring. A shy leader who knows talking to staff matters greets everyone each morning and checks in daily. It is about what leaders <b>do</b>, not what they are.</p>'},
    {h:'Timing and chance',t:'<p>Certain traits may be necessary but not sufficient. Lyndon Johnson and Martin Luther King Jr. succeeded on civil rights partly because the time was right; others with the same skills before the 1960s did not.</p>'}
  ],
  scene:u1Scene,
  sandboxIntro:'A self-monitoring leader adjusts to each situation. Set your natural style and your adaptability.',
  sandbox(ctl,st){
    const s=H.svg(st,520,280);const p={nat:3,ad:50};const ro=H.readout(ctl);
    H.slider(ctl,{id:'u1n',label:'Your natural style (quiet → outgoing)',min:1,max:10,value:3},v=>{p.nat=v;draw();});
    H.slider(ctl,{id:'u1a',label:'Self-monitoring (adaptability)',min:0,max:100,step:5,value:50,fmt:v=>v+'%'},v=>{p.ad=v;draw();});
    const need=[['Welcoming new staff',7],['Crisis briefing',8],['One-to-one coaching',4],['Board presentation',7],['Quiet analysis',2]];
    function draw(){s.innerHTML='';let fit=0;need.forEach(([n,v],i)=>{const shown=H.lerp(p.nat,v,p.ad/100);const gap=Math.abs(v-shown);fit+=1-gap/9;const y=16+i*52;t_(s,10,y+20,n,{'font-size':12,'font-weight':700});
      el('rect',{x:190,y:y+8,width:300,height:18,rx:9,fill:'var(--sunk)'},s);el('circle',{cx:190+300*v/10,cy:y+17,r:9,fill:'none',stroke:'var(--muted)','stroke-width':2},s);el('circle',{cx:190+300*shown/10,cy:y+17,r:7,fill:gap<1.5?'var(--org)':'var(--err)'},s);});
      ro.innerHTML=`Fit across situations: <b>${Math.round(100*fit/need.length)}%</b><br>Hollow ring = what the situation needs; dot = how you behave.`;}
    draw();H.tag(st,'Illustrative');
  },
  sae:{q:'How can you explain leadership to a non-scholar?',a:'Leadership is getting people to work willingly toward a goal. Some people seem to step forward naturally, but research shows only a few traits (such as intelligence and getting on well with people) consistently matter. The best leaders read each situation and adjust how they act, and being in the right place at the right time helps.'},
  tma:{q:'Explain your understanding of the concept of leadership.',outline:['Why the theory matters: it shapes selection and development','Leader emergence: weak trait links; self-monitors emerge more','Leader performance: intelligence and interpersonal adjustment','Self-monitoring and adaptability','Right person, place and time; examples from the unit']},
  quiz:[
    {q:'Which two traits did Heslin and Dunphy (1964) find consistently related to leadership performance?',o:['Dominance and masculinity','Intelligence and interpersonal adjustment','Height and energy','Charisma and wealth'],a:1,w:'Only intelligence and interpersonal adjustment held up consistently.'},
    {q:'People who change their behaviour to fit the social situation are…',o:['Low self-monitors','High self-monitors','Transactional leaders','Change resisters'],a:1,w:'High self-monitors emerge as leaders more often.'},
    {q:'Leader emergence is about…',o:['How well a leader performs','Who is likely to become a leader','How leaders punish','Gender differences'],a:1,w:'Emergence asks who becomes a leader; performance asks who leads well.'}
  ],
  card:[{h:'Key ideas',items:['Leader emergence vs leader performance','Emergence traits: intelligence, dominance, masculinity (weak)','Performance traits: intelligence, interpersonal adjustment','Self-monitoring = adaptability','Right person, right place, right time']}]
});

/* ================= Unit 2 ================= */
const IMPACT=[['Magnetic','energy and optimism','Despair','low morale'],['Position','power of the position','Instability','e.g. mergers'],['Affiliation','liking and caring','Anxiety','worry predominates'],['Coercive','reward and punishment','Crisis','e.g. war'],['Tactical','strategy and organising','Disorganisation','too much to do, little time'],['Informational','using information','Ignorance','people lack knowledge']];
function u2Scene(stage){
  H.cap(stage,'Characteristics associated with leadership');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,1]);t_(A,300,40,'Leadership motive pattern (McClelland)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const nb=[['Need for power',.85,'var(--org)'],['Need for achievement',.6,'var(--data)'],['Need for affiliation',.2,'var(--emp)']].map(([n,v,c],i)=>{const x=110+i*150;t_(A,x+40,390,n,{'text-anchor':'middle','font-size':12,'font-weight':700});el('rect',{x,y:110,width:80,height:260,rx:6,fill:'var(--sunk)'},A);return {r:el('rect',{x,width:80,rx:6,fill:c},A),v};});
  t_(A,300,72,'High (organisational) power, low affiliation: results over being liked',{'text-anchor':'middle','font-size':12,fill:'var(--muted)'});
  const B=tab(s);tabs.push([B,1,2]);const ax=H.axes(B,{x:110,y:60,w:400,h:300,xmin:0,xmax:10,ymin:0,ymax:10,xt:[[0,'low'],[10,'high']],yt:[[0,'low'],[10,'high']],xl:'Task orientation →',yl:'↑ Person orientation'});
  [['Person-oriented','satisfied employees',2.5,7.5,'var(--emp-soft)'],['Team leadership','satisfied and productive',7.5,7.5,'var(--org-soft)'],['Impoverished','unhappy, unproductive',2.5,2.5,'var(--err-soft)'],['Task-oriented','productive employees',7.5,2.5,'var(--data-soft)']].forEach(([a,b,x,y,c])=>{el('rect',{x:ax.sx(x-2.4),y:ax.sy(y+2.4),width:ax.sx(4.8)-ax.sx(0),height:ax.sy(0)-ax.sy(4.8),rx:8,fill:c},B);t_(B,ax.sx(x),ax.sy(y)-4,a,{'text-anchor':'middle','font-size':13,'font-weight':700});t_(B,ax.sx(x),ax.sy(y)+14,b,{'text-anchor':'middle','font-size':11});});
  t_(B,300,405,'Under pressure: person-oriented withdraw; task-oriented grow anxious and dominant (Bond, 1995)',{'text-anchor':'middle','font-size':11,fill:'var(--muted)'});
  const C=tab(s);tabs.push([C,2,5]);const cT=t_(C,300,36,'IMPACT: each style fits one climate',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const rows=IMPACT.map(([st,how,cl,why],i)=>{const g=el('g',{},C);const y=60+i*56;const l=box(g,40,y,200,44,'var(--org-soft)','none',22);t_(g,140,y+20,st+' style',{'text-anchor':'middle','font-size':13,'font-weight':700});t_(g,140,y+36,how,{'text-anchor':'middle','font-size':10.5});
    const r=box(g,360,y,200,44,'var(--emp-soft)','none',22);t_(g,460,y+20,'Climate of '+cl.toLowerCase(),{'text-anchor':'middle','font-size':13,'font-weight':700});t_(g,460,y+36,why,{'text-anchor':'middle','font-size':10.5});const ln=el('line',{x1:240,y1:y+22,x2:360,y2:y+22,stroke:'var(--org)','stroke-width':3},g);return {g,ln};});
  const D=tab(s);tabs.push([D,5,6,true]);t_(D,300,40,'Four ways to become effective (impact theory)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Find a climate that fits your style','needs luck or patience'],['Change your style to fit the climate','can be trained (Manz & Sims, 1986)'],['Change followers’ perception of the climate','common in politics'],['Change the actual climate','hard; Fiedler’s Leader Match']].forEach(([a,b],i)=>{box(D,60,72+i*82,480,64,'var(--org-soft)','none',12);t_(D,84,100+i*82,`${i+1}. ${a}`,{'font-size':14,'font-weight':700});t_(D,84,120+i*82,b,{'font-size':12,fill:'var(--muted)'});});
  return {update(t){showTabs(tabs,t);nb.forEach((b,i)=>{const h=260*b.v*H.es(t,.1+i*.15,.5+i*.15);H.set(b.r,{y:370-h,height:h});});
    const k=Math.floor(t);const n=Math.min(6,Math.round(H.seg(t,2.05,4.6)*6));rows.forEach((r,i)=>{H.op(r.g,i<n?1:.15);});
  }};
}
Course.add({id:'2',module:1,title:'Characteristics Associated with Leadership I',vizLabel:'Needs, the task–person grid and IMPACT climates',
  hook:{who:'Femi, newly promoted bank manager',text:'For six years Femi was a loan officer who went out with his ten colleagues after work. Now he is their manager and must order overtime and discipline lateness. His friends say he has become “too good for them”. What went wrong?'},
  objectives:['Describe the leadership motive pattern of needs','Contrast task- and person-oriented leaders','Match IMPACT leadership styles to organisational climates','State four ways to become an effective leader under impact theory'],
  steps:[
    {h:'Needs: power, achievement, affiliation',t:'<p>McClelland’s research found high-performing managers show a <b>leadership motive pattern</b>: a high need for (organisational, not personal) <b>power</b> and a low need for <b>affiliation</b>. Effective leaders care more about results than being liked.</p><p>This explains why internal promotions like Femi’s often struggle. Needs are measured with the Thematic Apperception Test, the Job Choice Exercise, or themes in speeches.</p>'},
    {h:'Task vs person orientation',t:'<p>Person-oriented leaders consult, praise and take a hands-off approach; task-oriented leaders set goals and decide without consulting. Person orientation brings satisfied employees, task orientation productive ones. High on both (<b>team leadership</b>) gives both; low on both (<b>impoverished</b>) gives neither (Pool, 1997). Measured with the LOQ and LBDQ.</p>'},
    {h:'IMPACT: style meets climate',t:'<p>Hogan and others studied unsuccessful leaders too: poor supervisors are a major source of employee stress. Impact theory says a leader succeeds when his style fits the climate.</p><p><b>Magnetic</b> leaders, leading through energy and optimism, fit a climate of <b>despair</b>. <b>Position</b> leaders, using the power of the post, fit <b>instability</b> such as mergers.</p>'},
    {h:'Affiliation and coercive styles',t:'<p><b>Affiliation</b> leaders, who like and care for people, fit <b>anxiety</b>: Jimmy Carter after Watergate (“I care”). <b>Coercive</b> leaders control reward and punishment and fit <b>crisis</b>: bankers used more coercive power in crises (Mulder et al., 1986).</p>'},
    {h:'Tactical and informational styles',t:'<p><b>Tactical</b> leaders lead through strategy and fit <b>disorganisation</b>: the student who organises the group project. Where the climate is <b>ignorance</b>, leaders use <b>information</b> to lead.</p>'},
    {h:'Four strategies to become effective',t:'<p>Find a climate that fits your style; change your style to fit the climate (Manz & Sims, 1986, trained 40 leaders in new behaviours); change followers’ perception of the climate; or change the climate itself, as in Fiedler’s Leader Match.</p>'}
  ],
  scene:u2Scene,
  sandboxIntro:'Diagnose the climate, then choose a style.',
  sandbox(ctl,st){
    const s=H.svg(st,520,260);let cl=0,sty=0;const ro=H.readout(ctl);
    H.segBtns(ctl,'Climate in the organisation',IMPACT.map((x,i)=>[i,x[2]]),0,v=>{cl=v;draw();});
    H.segBtns(ctl,'Your leadership style',IMPACT.map((x,i)=>[i,x[0]]),0,v=>{sty=v;draw();});
    function draw(){s.innerHTML='';const ok=cl===sty;el('rect',{x:30,y:80,width:200,height:90,rx:14,fill:'var(--emp-soft)'},s);t_(s,130,120,'Climate:',{'text-anchor':'middle','font-size':12});t_(s,130,145,IMPACT[cl][2],{'text-anchor':'middle','font-size':17,'font-weight':700});
      el('rect',{x:290,y:80,width:200,height:90,rx:14,fill:'var(--org-soft)'},s);t_(s,390,120,'Style:',{'text-anchor':'middle','font-size':12});t_(s,390,145,IMPACT[sty][0],{'text-anchor':'middle','font-size':17,'font-weight':700});
      el('line',{x1:230,x2:290,y1:125,y2:125,stroke:ok?'var(--org)':'var(--err)','stroke-width':4,'stroke-dasharray':ok?'none':'6 4'},s);t_(s,260,210,ok?'Match':'Mismatch',{'text-anchor':'middle','font-size':16,'font-weight':700,fill:ok?'var(--org)':'var(--err)'});
      ro.innerHTML=ok?`<b>Good fit.</b> ${IMPACT[sty][0]} leadership (${IMPACT[sty][1]}) suits a climate of ${IMPACT[cl][2].toLowerCase()}.`:`<b>Poor fit.</b> A climate of ${IMPACT[cl][2].toLowerCase()} calls for a ${IMPACT[cl][0].toLowerCase()} style. Options: change your style, change how followers see the climate, or change the climate.`;}
    draw();
  },
  sae:{q:'List the needs of a leader and explain why a high need for affiliation can be a problem.',a:'Needs for power, achievement and affiliation. A leader with a high need to be liked may avoid unpopular but necessary decisions (like ordering overtime) or apologise for tough calls, putting popularity above the organisation’s goals.'},saeOwn:true,
  tma:{q:'List the needs of a leader, and list and describe four features of a successful leader.',outline:['Needs: power, achievement, affiliation; leadership motive pattern (high power, low affiliation)','Features: fitting style to climate (magnetic/despair, position/instability, affiliation/anxiety, coercive/crisis, tactical/disorganisation)','Task and person orientation: team leadership','Ability to adapt style (Manz & Sims)']},
  quiz:[
    {q:'The leadership motive pattern is…',o:['High affiliation, low power','High power, low affiliation','High achievement only','Low power, low affiliation'],a:1,w:'High need for organisational power and low need for affiliation.'},
    {q:'Which style fits a climate of despair?',o:['Coercive','Magnetic','Position','Tactical'],a:1,w:'Magnetic leaders lead through energy and optimism.'},
    {q:'Leaders high on both task and person orientation practise…',o:['Impoverished leadership','Team leadership','Country club leadership','Laissez-faire'],a:1,w:'They have satisfied and productive employees.'},
    {q:'A coercive style is most effective in a climate of…',o:['Anxiety','Crisis','Despair','Instability'],a:1,w:'Coercive leaders control reward and punishment; typical in war.'}
  ],
  card:[{h:'IMPACT styles and climates',items:IMPACT.map(x=>`${x[0]} → ${x[2]}`)},{h:'Becoming effective',ordered:true,items:['Find a fitting climate','Change your style','Change perceptions of the climate','Change the climate']}]
});

/* ================= Unit 3 ================= */
const READY=[['R1','unable and unwilling or insecure','Directing','tell what and how'],['R2','unable but willing or confident','Coaching','explain and clarify'],['R3','able but unwilling or insecure','Supporting','emotional support, two-way talk'],['R4','able and willing or confident','Delegating','hand over, light supervision']];
function u3Scene(stage){
  H.cap(stage,'Leaders, followers and situations');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,2]);t_(A,300,36,'Path–goal theory (House, 1971)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('path',{d:'M60 340 C 160 340 160 200 260 200 S 380 100 520 100',fill:'none',stroke:'var(--line)','stroke-width':26,'stroke-linecap':'round'},A);el('path',{d:'M60 340 C 160 340 160 200 260 200 S 380 100 520 100',fill:'none',stroke:'var(--card)','stroke-width':2,'stroke-dasharray':'8 8'},A);
  const rock=el('g',{},A);el('circle',{cx:300,cy:182,r:20,fill:'var(--err)'},rock);t_(rock,300,186,'!',{'text-anchor':'middle','font-size':16,'font-weight':700,fill:'var(--card)'});
  el('circle',{cx:530,cy:100,r:24,fill:'var(--org)'},A);t_(A,530,105,'goal',{'text-anchor':'middle','font-size':11,'font-weight':700,fill:'var(--card)'});const walker=el('g',{},A);H.person(walker,0,0,'var(--emp)',1.8);
  [['Instrumental','plan, organise, control'],['Supportive','concern for employees'],['Participative','share information, involve'],['Achievement','challenging goals, reward gains']].forEach(([a,b],i)=>{box(A,30+i*140,370,130,50,'var(--org-soft)','none',10);t_(A,95+i*140,390,a,{'text-anchor':'middle','font-size':12,'font-weight':700});t_(A,95+i*140,408,b,{'text-anchor':'middle','font-size':9.5});});
  const aN=t_(A,300,62,'',{'text-anchor':'middle','font-size':12});
  const B=tab(s);tabs.push([B,2,4]);const bax=H.axes(B,{x:60,y:70,w:480,h:240,xmin:0,xmax:4,ymin:0,ymax:10,xt:[],yt:[],xl:'',yl:'Supportive behaviour'});
  const curve=[];for(let i=0;i<=80;i++){const x=4*i/80;curve.push([bax.sx(x),bax.sy(1.5+7*Math.sin(Math.PI*x/4))]);}el('path',{d:H.path(curve),fill:'none',stroke:'var(--data)','stroke-width':3.5},B);
  const qs=READY.map(([r,d,st,how],i)=>{const g=el('g',{},B);el('rect',{x:bax.sx(i)+2,y:325,width:bax.sx(1)-bax.sx(0)-4,height:42,rx:6,fill:'var(--emp-soft)'},g);t_(g,bax.sx(i+.5),342,r,{'text-anchor':'middle','font-size':13,'font-weight':700});wrap(g,bax.sx(i+.5),358,d,22,{'text-anchor':'middle','font-size':9,lh:10});
    t_(g,bax.sx(i+.5),bax.sy(1.5+7*Math.sin(Math.PI*(i+.5)/4))-12,st,{'text-anchor':'middle','font-size':13,'font-weight':700,fill:'var(--org)'});return g;});
  const bDot=el('circle',{r:9,fill:'var(--emp)'},B);t_(B,300,402,'← follower readiness rises    (directive behaviour falls as readiness grows)',{'text-anchor':'middle','font-size':11,fill:'var(--muted)'});const bT=t_(B,300,40,'Situational leadership (Hersey & Blanchard)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const C=tab(s);tabs.push([C,4,5]);t_(C,300,36,'Vertical dyad linkage: in-group and out-group',{'text-anchor':'middle','font-size':15,'font-weight':700});
  H.person(C,300,140,'var(--org)',2.6);const ing=[0,1,2].map(i=>{const x=150+i*40;el('line',{x1:300,y1:150,x2:x,y2:250,stroke:'var(--org)','stroke-width':3},C);H.person(C,x,260,'var(--emp)',1.8);});const outg=[0,1,2].map(i=>{const x=370+i*40;el('line',{x1:300,y1:150,x2:x,y2:250,stroke:'var(--muted)','stroke-width':1.5,'stroke-dasharray':'4 4'},C);H.person(C,x,260,'var(--muted)',1.8);});
  box(C,90,300,200,96,'var(--org-soft)','none',12);t_(C,190,324,'In-group',{'text-anchor':'middle','font-size':14,'font-weight':700});['trusting, friendly','join decisions','rarely disciplined'].forEach((x,i)=>t_(C,190,346+i*16,x,{'text-anchor':'middle','font-size':11}));
  box(C,330,300,200,96,'var(--sunk)','none',12);t_(C,430,324,'Out-group',{'text-anchor':'middle','font-size':14,'font-weight':700});['direct orders','less say','more distance'].forEach((x,i)=>t_(C,430,346+i*16,x,{'text-anchor':'middle','font-size':11}));
  const D=tab(s);tabs.push([D,5,6,true]);t_(D,300,36,'Specific leader skills (Yukl, 1982)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  chips(D,['Initiate ideas','Interact informally','Support subordinates','Take responsibility','Build group atmosphere','Organise work','Communicate formally','Reward and punish','Set goals','Make decisions','Train and develop','Solve problems','Generate enthusiasm'],30,60,128,40,4,'var(--org-soft)','var(--ink)',11.5);
  t_(D,300,330,'If leadership is a set of skills, almost anyone can be trained',{'text-anchor':'middle','font-size':13,'font-weight':700});t_(D,300,352,'time management, goal setting, persuasion, communication',{'text-anchor':'middle','font-size':12,fill:'var(--muted)'});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);
    const wp=H.seg(t,.1,1.9);const path=A.querySelector('path');const L=path.getTotalLength();const blocked=k===0&&wp>.45;const pp=k===0?Math.min(wp,.45):wp;const pt=path.getPointAtLength(L*pp);walker.setAttribute('transform',`translate(${pt.x},${pt.y-10})`);H.op(rock,k===0?1:1-H.es(t,1.1,1.4));
    aN.textContent=k===0?'Leaders are accepted when they help followers reach their goals':'Clear the path: recognise needs, reward success, show the route, remove obstacles';
    const rp=H.seg(t,2.05,3.95);const x=.1+3.8*rp;H.set(bDot,{cx:bax.sx(x),cy:bax.sy(1.5+7*Math.sin(Math.PI*x/4))});qs.forEach((g,i)=>H.op(g,Math.floor(x)===i||k>=3?1:.35));
  }};
}
Course.add({id:'3',module:1,title:'Characteristics Associated with Leadership II',vizLabel:'Path–goal and the situational leadership curve',
  hook:{who:'Kemi, nursing supervisor',text:'Kemi leads two new graduate nurses who are eager but unsure, and one senior nurse who knows everything but has lost interest. Treating all three the same is not working.'},
  objectives:['Explain House’s path–goal theory and its four styles','Apply Hersey and Blanchard’s readiness levels and styles','Explain vertical dyad linkage (in-group and out-group)','List specific leader skills'],
  steps:[
    {h:'Path–goal theory',t:'<p>House (1971): followers accept a leader only to the extent the leader helps them achieve their goals. Needs change with each situation, so the leader must adjust.</p>'},
    {h:'Four path–goal styles',t:'<p><b>Instrumental</b> (plan, organise, control), <b>supportive</b> (concern for employees), <b>participative</b> (share information, involve) and <b>achievement-oriented</b> (challenging goals, reward improvement). The more able the subordinates, the less directive the leader; the less structured the task, the more directive. Intuitively appealing, but research support is limited.</p>'},
    {h:'Situational leadership: readiness',t:'<p>Hersey and Blanchard: the key follower characteristic is <b>readiness</b>, the ability and willingness to do a task. R1 unable and unwilling, R2 unable but willing, R3 able but unwilling, R4 able and willing.</p>'},
    {h:'Matching the style',t:'<p>R1 → <b>directing</b>; R2 → <b>coaching</b>; R3 → <b>supporting</b>; R4 → <b>delegating</b>. As followers develop, the leader becomes less directive, and should explain this to each employee.</p>'},
    {h:'Vertical dyad linkage',t:'<p>Dansereau et al. (1975): leaders form different relationships (leader–member exchanges) with different subordinates. The <b>in-group</b> is trusted, joins decisions and is rarely disciplined; the <b>out-group</b> gets direct orders and less say. Research is generally supportive (Gerstner & Day, 1997).</p>'},
    {h:'Specific leader skills',t:'<p>Yukl (1982) observed thousands of leaders and listed what they do, from initiating ideas to generating enthusiasm. If leadership is a set of learnable skills, almost anyone can be trained to lead.</p>'}
  ],
  scene:u3Scene,
  sandboxIntro:'Rate a follower’s ability and willingness on a task to find the style.',
  sandbox(ctl,st){
    const s=H.svg(st,520,260);const p={ab:30,wi:70};const ro=H.readout(ctl);
    H.slider(ctl,{id:'u3a',label:'Ability for this task',min:0,max:100,step:5,value:30,fmt:v=>v+'%'},v=>{p.ab=v;draw();});
    H.slider(ctl,{id:'u3w',label:'Willingness or confidence',min:0,max:100,step:5,value:70,fmt:v=>v+'%'},v=>{p.wi=v;draw();});
    function draw(){s.innerHTML='';const able=p.ab>=50,will=p.wi>=50;const i=!able&&!will?0:!able&&will?1:able&&!will?2:3;
      READY.forEach((r,j)=>{const x=20+j*125;el('rect',{x,y:60,width:115,height:130,rx:10,fill:j===i?'var(--org)':'var(--sunk)'},s);t_(s,x+57,92,r[0],{'text-anchor':'middle','font-size':20,'font-weight':700,fill:j===i?'var(--card)':'var(--ink)'});t_(s,x+57,125,r[2],{'text-anchor':'middle','font-size':14,'font-weight':700,fill:j===i?'var(--card)':'var(--ink)'});wrap(s,x+57,150,r[3],16,{'text-anchor':'middle','font-size':10.5,fill:j===i?'var(--card)':'var(--muted)'});});
      ro.innerHTML=`Readiness <b>${READY[i][0]}</b>: ${READY[i][1]}.<br>Use a <b>${READY[i][2].toLowerCase()}</b> style: ${READY[i][3]}.`;}
    draw();
  },
  sae:{q:'Can effective leadership be taught?',a:'Largely yes, if leadership is a set of skills and behaviours: Yukl’s list and training in decision making, goal setting, persuasion and communication show this, and Manz and Sims trained leaders in new behaviours. But traits, needs and fit with the situation also matter, so training works best combined with good selection and placement.'},
  tma:{q:'How does the way a leader carries himself lead to acceptability of his leadership?',outline:['Path–goal: accepted when helping followers reach goals','Adjusting style to follower readiness (directing → delegating)','In-group relationships build trust and performance','Displaying key skills: support, responsibility, enthusiasm','Conclude: acceptance is earned through behaviour']},
  quiz:[
    {q:'A follower who is able but unwilling is at readiness level…',o:['R1','R2','R3','R4'],a:2,w:'R3: able but unwilling or insecure → supporting style.'},
    {q:'For an R2 follower (unable but willing), the best style is…',o:['Directing','Coaching','Supporting','Delegating'],a:1,w:'Coaching explains and clarifies how to do the work.'},
    {q:'In vertical dyad linkage theory, in-group members are…',o:['Given direct orders','Trusted and involved in decisions','Ignored','Always new employees'],a:1,w:'In-group members have trusting relationships and participate in decisions.'},
    {q:'According to path–goal theory, as subordinate ability rises the leader should be…',o:['More directive','Less directive','More coercive','Absent'],a:1,w:'Higher ability calls for less direction.'}
  ],
  card:[{h:'Situational leadership',items:READY.map(r=>`${r[0]} (${r[1]}) → ${r[2]}`)},{h:'Path–goal styles',items:['Instrumental','Supportive','Participative','Achievement-oriented']}]
});

/* ================= Unit 4 ================= */
const POWERS=[['Expert','useful knowledge others know you have'],['Legitimate','your position: sergeant over corporal'],['Reward','pay, bonus, promotion, praise'],['Coercive','punishment people believe you will use'],['Referent','people like and admire you']];
function u4Scene(stage){
  H.cap(stage,'Factors that lead to successful leadership');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,1]);t_(A,300,36,'Decide alone or with others? (Vroom–Yetton)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const node=(x,y,txt,c='var(--card)')=>{box(A,x-85,y-20,170,40,c,'var(--line)',20);wrap(A,x,y+(txt.length>24?-2:4),txt,26,{'text-anchor':'middle','font-size':11,'font-weight':700,lh:12});};
  node(300,80,'Does decision quality matter?');node(160,170,'Decide quickly alone','var(--sunk)');node(440,170,'Do I have enough information?');node(330,260,'Must others accept it?');node(540,260,'Consult those who know','var(--org-soft)');node(220,350,'Decide alone','var(--org-soft)');node(440,350,'Involve the group','var(--org-soft)');
  [[300,100,160,150,'no'],[300,100,440,150,'yes'],[440,190,330,240,'yes'],[440,190,540,240,'no'],[330,280,220,330,'no'],[330,280,440,330,'yes']].forEach(([a,b,c,d,l])=>{el('line',{x1:a,y1:b,x2:c,y2:d,stroke:'var(--muted)','stroke-width':2},A);t_(A,(a+c)/2+6,(b+d)/2,l,{'font-size':10.5,fill:'var(--muted)'});});
  t_(A,300,412,'A simplified sketch of the idea; the real model asks more questions (Unit 9)',{'text-anchor':'middle','font-size':11,fill:'var(--muted)'});
  const B=tab(s);tabs.push([B,1,2]);t_(B,300,36,'Management by walking around',{'text-anchor':'middle','font-size':15,'font-weight':700});
  box(B,40,60,520,320,'var(--sunk)','none',12);const desks=[[120,130],[240,130],[360,130],[480,130],[120,280],[240,280],[360,280],[480,280]];desks.forEach(([x,y])=>{el('rect',{x:x-30,y:y-16,width:60,height:32,rx:4,fill:'var(--card)'},B);H.person(B,x,y-26,'var(--emp)',1.3);});
  el('rect',{x:270,y:190,width:60,height:40,rx:4,fill:'var(--org-soft)'},B);t_(B,300,214,'office',{'text-anchor':'middle','font-size':10});const loop=el('path',{d:'M300 210 C 200 205 120 210 110 200 S 120 60 300 85 S 520 80 500 200 S 480 360 300 360 S 90 340 110 220',fill:'none',stroke:'var(--org)','stroke-width':2,'stroke-dasharray':'6 6'},B);
  const mgr=el('g',{},B);H.person(mgr,0,0,'var(--org)',1.8);t_(B,300,408,'Effective bank managers spent more time walking around and monitoring (Komaki et al., 1986)',{'text-anchor':'middle','font-size':11,fill:'var(--muted)'});
  const C=tab(s);tabs.push([C,2,7,true]);const cT=t_(C,300,36,'Five types of power',{'text-anchor':'middle','font-size':15,'font-weight':700});const cx=300,cy=225,R=135;
  for(let r=1;r<=4;r++)el('polygon',{points:POWERS.map((_,k)=>{const a=-Math.PI/2+k*2*Math.PI/5;return [cx+Math.cos(a)*R*r/4,cy+Math.sin(a)*R*r/4].join(',');}).join(' '),fill:'none',stroke:'var(--line)'},C);
  const lbl=POWERS.map(([n],k)=>{const a=-Math.PI/2+k*2*Math.PI/5;el('line',{x1:cx,y1:cy,x2:cx+Math.cos(a)*R,y2:cy+Math.sin(a)*R,stroke:'var(--line)'},C);return t_(C,cx+Math.cos(a)*(R+20),cy+Math.sin(a)*(R+20)+5,n,{'text-anchor':Math.abs(Math.cos(a))<.2?'middle':Math.cos(a)>0?'start':'end','font-size':13,'font-weight':700});});
  const poly=el('polygon',{fill:'var(--org-soft)',stroke:'var(--org)','stroke-width':3,'fill-opacity':.8},C);const cN=t_(C,300,408,'',{'text-anchor':'middle','font-size':12.5});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);const L=loop.getTotalLength();const pt=loop.getPointAtLength(L*(H.seg(t,1,1.95)));mgr.setAttribute('transform',`translate(${pt.x},${pt.y})`);
    const pi=H.clamp(k-2,0,4);const vals=POWERS.map((_,i)=>i<pi?.75:i===pi?.75*H.es(t,k,k+.5):0);H.set(poly,{points:vals.map((v,i)=>{const a=-Math.PI/2+i*2*Math.PI/5;return [cx+Math.cos(a)*R*Math.max(.02,v),cy+Math.sin(a)*R*Math.max(.02,v)].join(',');}).join(' ')});
    lbl.forEach((l,i)=>H.set(l,{fill:i===pi?'var(--org)':'var(--ink)'}));cN.textContent=`${POWERS[pi][0]} power: ${POWERS[pi][1]}`;
  }};
}
Course.add({id:'4',module:1,title:'Factors That Lead to Successful Leadership',vizLabel:'A decision tree, a walking route and a power radar',
  hook:{who:'Chidi, plant superintendent',text:'Chidi spends most days in his office signing papers. His operators barely know him, and when he issues instructions they comply slowly. What sources of influence is he not using?'},
  objectives:['Explain leadership through decision making (Vroom–Yetton)','Explain management by walking around','Describe the five types of power'],
  steps:[
    {h:'Leadership through decision making',t:'<p>Vroom and Yetton (1973) showed that only in some situations are decisions best made with subordinates or colleagues. Their decision tree helps leaders decide when to decide alone and when to involve others. (Unit 9 lists its seven questions.)</p>'},
    {h:'Leadership through contact (MBWA)',t:'<p>Leaders are most effective when out of their offices, meeting employees and customers about their needs and progress. MBWA increases communication, builds relationships and encourages participation (Miller, 1998). Komaki’s studies of bank managers found effective managers spent more time walking around and monitoring.</p>'},
    {h:'Expert power',t:'<p>Power raises a leader’s ability to influence, obtain resources and advance. <b>Expert power</b> needs two things: knowledge others in the organisation need, and their awareness that the leader has it (Benzinger, 1982).</p>'},
    {h:'Legitimate power',t:'<p>Power from position: a sergeant over a corporal, a coach over players. Leaders with legitimate power are best at getting compliance (Rahim & Afza, 1993).</p>'},
    {h:'Reward power',t:'<p>Control over salary increases, bonuses and promotions, and the subtler praise or better assignments.</p>'},
    {h:'Coercive power',t:'<p>The ability to punish, from firing to a “cold shoulder”. It only works if others believe the leader will use it; a bluffing leader loses it.</p>'},
    {h:'Referent power',t:'<p>Positive feelings others hold for the leader. Well-liked leaders influence people even without reward or coercive power, by complimenting, doing favours and being friendly and supportive (Kipnis et al., 1980).</p>'}
  ],
  scene:u4Scene,
  sandboxIntro:'Build a leader’s power profile and see where their influence comes from.',
  sandbox(ctl,st){
    const s=H.svg(st,520,320);const v=[2,4,2,1,2];const ro=H.readout(ctl);
    POWERS.forEach(([n],i)=>H.slider(ctl,{id:'u4'+i,label:n+' power',min:0,max:5,value:v[i]},x=>{v[i]=x;draw();}));
    function draw(){s.innerHTML='';const cx=260,cy=165,R=115;for(let r=1;r<=5;r++)el('polygon',{points:POWERS.map((_,k)=>{const a=-Math.PI/2+k*2*Math.PI/5;return [cx+Math.cos(a)*R*r/5,cy+Math.sin(a)*R*r/5].join(',');}).join(' '),fill:'none',stroke:'var(--line)'},s);
      POWERS.forEach(([n],k)=>{const a=-Math.PI/2+k*2*Math.PI/5;t_(s,cx+Math.cos(a)*(R+16),cy+Math.sin(a)*(R+16)+4,n,{'text-anchor':Math.abs(Math.cos(a))<.2?'middle':Math.cos(a)>0?'start':'end','font-size':12,'font-weight':700});});
      el('polygon',{points:v.map((x,k)=>{const a=-Math.PI/2+k*2*Math.PI/5;return [cx+Math.cos(a)*R*x/5,cy+Math.sin(a)*R*x/5].join(',');}).join(' '),fill:'var(--org-soft)',stroke:'var(--org)','stroke-width':3,'fill-opacity':.8},s);
      const pos=v[1]+v[2]+v[3],per=v[0]+v[4];ro.innerHTML=`Position-based (legitimate, reward, coercive): <b>${pos}</b>/15 · personal (expert, referent): <b>${per}</b>/10<br>${per<3?'Influence rests on the job title: compliance, but little commitment. Walk around, share expertise, build referent power.':v[3]>=4&&v[4]<=1?'Heavy on coercion and low on liking: expect resentment.':'A balanced profile: the more sources of power, the more influence.'}`;}
    draw();
  },
  sae:{q:'Mention the leadership skills discussed in this unit. Which have you seen leaders use, and how?',a:'Decision making (deciding when to consult), management by walking around, and five types of power: expert, legitimate, reward, coercive, referent. A strong answer gives a real example for each, e.g. a head of department who walks the floor daily, or a supervisor followed because she is respected (referent).'},
  tma:{q:'Critically examine when it is best to use each of the leadership factors mentioned.',outline:['Decision making: alone when quality matters little or you have the information; involve others when acceptance matters or you lack knowledge','MBWA: to build communication and monitor performance','Expert power: technical problems; only if others know your expertise','Legitimate: routine compliance','Reward and coercive: crisis or performance issues; coercion only if credible','Referent: long-term commitment']},
  quiz:[
    {q:'Expert power requires knowledge others need AND…',o:['A senior title','That others know the leader has it','The power to punish','Popularity'],a:1,w:'Information is powerful only if others know the leader has it.'},
    {q:'Which power comes from position?',o:['Referent','Expert','Legitimate','Coercive'],a:2,w:'A sergeant has power over a corporal because of rank.'},
    {q:'Komaki’s studies found effective bank managers…',o:['Stayed in their offices','Spent more time walking around and monitoring','Avoided customers','Used only coercive power'],a:1,w:'Empirical support for MBWA.'}
  ],
  card:[{h:'Five types of power',items:POWERS.map(p=>`${p[0]}: ${p[1]}`)},{h:'Other factors',items:['Decision making (Vroom–Yetton)','Management by walking around']}]
});

/* ================= Unit 5 ================= */
function u5Scene(stage){
  H.cap(stage,'Leadership through vision and persuasion');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,2]);t_(A,300,36,'Transformational leaders: guidelines (Yukl, 1994)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const g10=chips(A,['Clear, appealing vision','Strategy to reach it','Articulate and promote it','Act confident and optimistic','Express confidence in followers','Early small wins','Celebrate successes','Dramatic symbolic actions','Lead by example','Shape symbols, slogans, ceremonies'],40,64,250,40,2,'var(--org-soft)','var(--ink)',12);
  const B=tab(s);tabs.push([B,2,3]);t_(B,300,36,'What good leaders have (Hunt & Laing, 1997)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const vb=[['High performers',72,'var(--org)'],['Least successful',34,'var(--err)']].map(([n,v,c],i)=>{const x=80+i*130;t_(B,x+40,330,n,{'text-anchor':'middle','font-size':12,'font-weight':700});el('rect',{x,y:100,width:80,height:210,rx:6,fill:'var(--sunk)'},B);const r=el('rect',{x,width:80,rx:6,fill:c},B);const tx=t_(B,x+40,0,'',{'text-anchor':'middle','font-size':16,'font-weight':700,class:'mono'});return {r,tx,v};});t_(B,145,360,'described as visionary',{'text-anchor':'middle','font-size':12});
  ['Vision','Differentiation','Values','Transmission','Flaws'].forEach((x,i)=>{box(B,350,80+i*58,210,44,'var(--org-soft)','none',22);t_(B,455,107+i*58,x,{'text-anchor':'middle','font-size':14,'font-weight':700});});
  const C=tab(s);tabs.push([C,3,4]);t_(C,300,36,'The persuasive communicator',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Expertise','knows the topic (matters less if the audience also knows)'],['Trustworthiness','motives not doubted; sometimes argue against own interest'],['Attractiveness','attractive people persuade more']].forEach(([a,b],i)=>{el('circle',{cx:120+i*180,cy:170,r:70,fill:['var(--data-soft)','var(--org-soft)','var(--emp-soft)'][i]},C);t_(C,120+i*180,176,a,{'text-anchor':'middle','font-size':14,'font-weight':700});wrap(C,120+i*180,280,b,24,{'text-anchor':'middle','font-size':11.5});});
  const D=tab(s);tabs.push([D,4,5]);const dax=H.axes(D,{x:70,y:70,w:470,h:250,xmin:8,xmax:22,ymin:0,ymax:10,xt:[[8,'₦8'],[10,'₦10'],[13,'₦13'],[16,'₦16'],[20,'₦20']],yt:[],xl:'first demand per hour',yl:'Expected result'});
  const pf=x=>x<10?2+ (x-8)*1.5:x<=13?5+ (x-10)*1.3:Math.max(.5,8.9-(x-13)*1.05);const pp=[];for(let i=0;i<=70;i++){const x=8+14*i/70;pp.push([dax.sx(x),dax.sy(pf(x))]);}el('path',{d:H.path(pp),fill:'none',stroke:'var(--data)','stroke-width':3.5},D);
  const dd=el('circle',{r:8,fill:'var(--emp)'},D);const dT=t_(D,300,40,'Message discrepancy: how much to ask for',{'text-anchor':'middle','font-size':15,'font-weight':700});const dN=t_(D,300,370,'',{'text-anchor':'middle','font-size':12.5});t_(D,540,86,'Illustrative',{'text-anchor':'end','font-size':10,fill:'var(--muted)'});
  const E=tab(s);tabs.push([E,5,6,true]);t_(E,300,36,'One-sided, two-sided, threats',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Audience already agrees','argue one side'],['Audience disagrees','argue both sides, then refute; raise your weak points yourself to “steal their thunder”'],['Threats','work only if believed and the outcome matters; breed resentment and backlash']].forEach(([a,b],i)=>{box(E,60,70+i*104,480,86,i===2?'var(--err-soft)':'var(--org-soft)','none',12);t_(E,84,100+i*104,a,{'font-size':14,'font-weight':700});wrap(E,84,122+i*104,b,66,{'font-size':12});});
  return {update(t){showTabs(tabs,t);g10.forEach((g,i)=>H.op(g,H.es(t,.1+i*.15,.25+i*.15)));
    const bp=H.es(t,2.1,2.6);vb.forEach(b=>{const h=210*b.v/100*bp;H.set(b.r,{y:310-h,height:h});H.set(b.tx,{y:304-h});b.tx.textContent=bp>.8?b.v+'%':'';});
    const x=8+12*H.seg(t,4.05,4.9);H.set(dd,{cx:dax.sx(x),cy:dax.sy(pf(x))});dN.textContent=x<10.5?'Ask for exactly ₦10: no room to give':x<15?'Ask ₦13, then give a little: credible and room to negotiate':'Ask ₦20: so far from the other side that credibility falls';
  }};
}
Course.add({id:'5',module:1,title:'Leadership through Vision',vizLabel:'Vision guidelines and a persuasion curve',
  hook:{who:'Tunde, union representative',text:'Tunde’s members earn ₦8 an hour and he believes they deserve ₦10. Should he ask for ₦10, ₦13 or ₦20? The persuasion research in this unit has an answer.'},
  objectives:['Explain transformational leadership and its guidelines','State the five characteristics of good leaders (Hunt & Laing)','Explain what makes a communicator persuasive','Apply message discrepancy, one- vs two-sided arguments, and threats'],
  steps:[
    {h:'Transformational leadership',t:'<p>Most theories focus on short-term leader–subordinate relations; transformational leadership focuses on <b>long-term goals</b>. Such leaders are visionary, charismatic and inspirational: they develop a vision, change the organisation to fit it and motivate people toward it. They innovate, challenge the status quo and trust their intuition (Yukl, 1994).</p>'},
    {h:'Guidelines and an example',t:'<p>The course cites Prof. Soludo, then Central Bank Governor, who held to bank consolidation despite challenge. Yukl’s guidelines include a clear vision and strategy, confidence, small early wins, celebration, symbolic actions and leading by example. Research suggests it is the most effective and best-liked form, used on every continent.</p>'},
    {h:'Five characteristics of good leaders',t:'<p>Hunt and Laing (1997): <b>vision</b> (72% of high performers described as visionary vs 34% of the least successful), <b>differentiation</b> (different yet relatable), <b>values</b>, <b>transmission</b> of vision and values, and <b>flaws</b> that make them human.</p>'},
    {h:'The persuasive communicator',t:'<p>Leaders must persuade bosses, colleagues and the public. Persuaders with <b>expertise</b>, <b>trustworthiness</b> and <b>attractiveness</b> succeed more. Trust grows when a leader occasionally argues against his own interest and shows his goals match the audience’s.</p>'},
    {h:'Message discrepancy',t:'<p>Asking for exactly what you want leaves no room to negotiate; asking far too much destroys credibility. Research favours asking for <b>somewhat more</b> and backing down: in the course example, ask ₦13 when you want ₦10.</p>'},
    {h:'One-sided, two-sided, threats',t:'<p>If the audience already agrees, argue one side; if not, argue both and refute (Sawyer, 1973), and bring up your own negatives first. Threats work only if believed, inevitable and about something valued, and they can provoke resentment or the opposite of what you want.</p>'}
  ],
  scene:u5Scene,
  sandboxIntro:'Plan a pay negotiation: how far above your target should you open?',
  sandbox(ctl,st){
    const s=H.svg(st,520,260);let p={now:8,want:10,ask:13};const ro=H.readout(ctl);
    H.slider(ctl,{id:'u5a',label:'Opening demand per hour',min:8,max:25,step:.5,value:13,fmt:v=>'₦'+v},v=>{p.ask=v;draw();});
    function draw(){s.innerHTML='';const room=p.ask-p.want,gap=(p.ask-p.now)/p.now;const cred=Math.max(0,100-Math.max(0,gap-.5)*160);const flex=Math.min(100,room/3*100);
      [['Room to concede',flex,'var(--data)'],['Credibility',cred,'var(--org)']].forEach(([l,v,c],i)=>{const y=60+i*80;t_(s,20,y+22,l,{'font-size':13,'font-weight':700});el('rect',{x:170,y:y+6,width:320,height:26,rx:13,fill:'var(--sunk)'},s);el('rect',{x:170,y:y+6,width:320*Math.max(0,v)/100,height:26,rx:13,fill:c},s);});
      ro.innerHTML=`Current ₦8, target ₦10, opening ₦${p.ask}.<br>${room<=0?'No room to give: you can only hold or lose.':cred<60?'Too far from the other side: your credibility suffers.':'A credible opening with room to concede.'}`;}
    draw();H.tag(st,'Illustrative model of the research idea');
  },
  sae:{q:'How can a leader with vision transform an organisation?',a:'By developing a clear, appealing vision and a strategy to reach it; communicating it repeatedly; showing confidence in followers; using early small wins and celebrating them; acting symbolically and leading by example; and reshaping symbols, slogans and ceremonies so the culture supports the vision. Persuasion skills (expertise, trust) help win support.'},
  tma:{q:'How do transformational leaders change their organisations towards the path of success?',outline:['Define transformational leadership: long-term, visionary, charismatic','Yukl’s guidelines','Hunt and Laing’s five characteristics','Persuasion: expertise, trust, attractiveness; message strategy','Example cited in the course: bank consolidation']},
  quiz:[
    {q:'According to persuasion research, what should a negotiator who wants ₦10 (from ₦8) ask for?',o:['₦10 exactly','About ₦13','₦20','₦8.50'],a:1,w:'Ask for more than you want, but not so much you lose credibility.'},
    {q:'When should you present both sides of an argument?',o:['When the audience already agrees','When the audience disagrees','Never','Only in writing'],a:1,w:'Two-sided arguments work better with an audience that disagrees.'},
    {q:'Hunt and Laing found what share of high-performing leaders were described as visionary?',o:['34%','50%','72%','95%'],a:2,w:'72% versus 34% of the least successful.'},
    {q:'Which is NOT one of Hunt and Laing’s five characteristics?',o:['Vision','Flaws','Coercion','Values'],a:2,w:'Vision, differentiation, values, transmission and flaws.'}
  ],
  card:[{h:'Five characteristics (Hunt & Laing)',items:['Vision','Differentiation','Values','Transmission','Flaws']},{h:'Persuasion',items:['Communicator: expertise, trust, attractiveness','Ask for more than you want, not too much','One side if they agree; two sides if they disagree','Threats: only if credible; risk backlash']}]
});
})();
