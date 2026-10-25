/* MBA 829 Module 3 — Units 10–15: people and leadership style */
(function(){
const {H}=Course, el=H.el, t_=H.t;
const tab=s=>el('g',{},s);
const box=(g,x,y,w,h,fill='var(--card)',stroke='var(--line)',rx=8)=>el('rect',{x,y,width:w,height:h,rx,fill,stroke},g);
const wrap=(g,x,y,str,max=28,a={})=>{const words=str.split(' ');let line='',ly=y;const lh=a.lh||15;words.forEach(w=>{if((line+' '+w).trim().length>max){t_(g,x,ly,line.trim(),a);line=w;ly+=lh;}else line+=' '+w;});if(line.trim())t_(g,x,ly,line.trim(),a);return ly;};
const showTabs=(tabs,t)=>tabs.forEach(([g,a,b,last])=>H.op(g,H.es(t,a-.12,a+.1)*(last?1:(1-H.es(t,b-.1,b+.05)))));
const pole=(g,y,l,r,ld,rd)=>{box(g,40,y,520,96,'var(--card)','var(--line)',12);el('line',{x1:90,x2:510,y1:y+30,y2:y+30,stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},g);t_(g,60,y+56,l,{'font-size':13.5,'font-weight':700,fill:'var(--data)'});t_(g,540,y+56,r,{'font-size':13.5,'font-weight':700,fill:'var(--org)','text-anchor':'end'});wrap(g,60,y+76,ld,34,{'font-size':10.5,fill:'var(--muted)',lh:12});wrap(g,540,y+76,rd,34,{'font-size':10.5,fill:'var(--muted)','text-anchor':'end',lh:12});return el('circle',{cy:y+30,r:11,fill:'var(--emp)'},g);};

/* ================= Unit 10 ================= */
function u10Scene(stage){
  H.cap(stage,'The human factor in enterprises');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,2]);const aT=t_(A,300,36,'',{'text-anchor':'middle','font-size':15,'font-weight':700});H.person(A,300,236,'var(--emp)',3.2);
  const roles=['Worker','Consumer','Family member','Church or mosque member','Citizen','Union or association member'].map((r,i)=>{const a=-Math.PI/2+i*Math.PI/3,x=300+Math.cos(a)*170,y=220+Math.sin(a)*140;const g=el('g',{},A);el('line',{x1:300,y1:220,x2:x,y2:y,stroke:'var(--line)','stroke-width':2},g);box(g,x-85,y-18,170,36,'var(--emp-soft)','none',18);t_(g,x,y+5,r,{'text-anchor':'middle','font-size':12,'font-weight':700});return g;});
  const B=tab(s);tabs.push([B,2,3]);t_(B,300,36,'There is no average person',{'text-anchor':'middle','font-size':15,'font-weight':700});const tr=['Needs','Ambition','Attitude','Responsibility','Skill'];const r=H.seeded(8);
  const ppl=[0,1,2,3,4].map(i=>{const g=el('g',{},B);const x=50+i*104;H.person(g,x+40,80,['var(--emp)','var(--data)','var(--org)','var(--err)','var(--muted)'][i],1.8);tr.forEach((t,j)=>{const v=.2+.8*r();el('rect',{x:x+10,y:110+j*44,width:60,height:30,rx:4,fill:'var(--sunk)'},g);el('rect',{x:x+10,y:110+j*44,width:60*v,height:30,rx:4,fill:['var(--emp)','var(--data)','var(--org)','var(--err)','var(--muted)'][i]},g);});return g;});
  tr.forEach((t,j)=>t_(B,40,130+j*44,t,{'font-size':11,'text-anchor':'end'}));const avg=el('g',{},B);tr.forEach((t,j)=>{el('line',{x1:55,x2:570,y1:125+j*44,y2:125+j*44,stroke:'var(--ink)','stroke-width':2,'stroke-dasharray':'6 4'},avg);});t_(avg,300,358,'“the average employee” fits nobody',{'text-anchor':'middle','font-size':13,'font-weight':700});
  const C=tab(s);tabs.push([C,3,4]);t_(C,300,36,'Dignity and the whole person',{'text-anchor':'middle','font-size':15,'font-weight':700});
  box(C,40,64,250,300,'var(--org-soft)','none',14);box(C,310,64,250,300,'var(--data-soft)','none',14);t_(C,165,96,'Personal dignity',{'text-anchor':'middle','font-size':15,'font-weight':700});t_(C,435,96,'The whole person',{'text-anchor':'middle','font-size':15,'font-weight':700});
  wrap(C,165,126,'Results matter, but the means must never violate people’s dignity. President to worker, all deserve respect.',30,{'text-anchor':'middle','font-size':12.5});wrap(C,435,126,'Knowledge, attitudes, skills and personality interact; family, school, church and associations come to work too.',30,{'text-anchor':'middle','font-size':12.5});
  const D=tab(s);tabs.push([D,4,5]);t_(D,300,36,'Schein’s four conceptions of people',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const sc=[['Rational-economic','motivated by economic incentives; passive, controlled by the organisation (like Theory X)'],['Social','motivated by social needs (the course text repeats the self-actualising description here)'],['Self-actualising','a hierarchy of needs up to using one’s full potential; self-motivated'],['Complex','complex, variable motives; can learn new motives (Schein’s own view)']];
  const dC=sc.map(([a,b],i)=>{const g=el('g',{},D);const x=40+(i%2)*270,y=64+Math.floor(i/2)*170;box(g,x,y,250,150,['var(--emp-soft)','var(--data-soft)','var(--org-soft)','var(--sunk)'][i],'none',14);t_(g,x+125,y+32,a,{'text-anchor':'middle','font-size':15,'font-weight':700});wrap(g,x+125,y+60,b,30,{'text-anchor':'middle','font-size':11.5});return g;});
  const E=tab(s);tabs.push([E,5,8,true]);t_(E,300,32,'Contrasting views (Porter, Lawler & Hackman)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const d1=pole(E,50,'Rational','Emotional','collects and weighs information; manager may ignore feelings','ruled by emotions; manager plays amateur psychiatrist'),d2=pole(E,165,'Behaviouristic','Phenomenological','behaviour controlled by environment: change the environment','unique, subjective, unpredictable, full of potential'),d3=pole(E,280,'Economic','Self-actualising','money is the prime motivator; self-interest','people want to grow and use their potential');
  const eN=t_(E,300,410,'',{'text-anchor':'middle','font-size':12.5});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);aT.textContent=k===0?'Leading: helping people meet their needs while serving the enterprise':'People assume many roles';roles.forEach((g,i)=>H.op(g,k===0?.15:H.es(t,1+i*.1,1.2+i*.1)));
    H.op(avg,H.es(t,2.5,2.8));dC.forEach((g,i)=>H.op(g,H.es(t,4+i*.15,4.2+i*.15)));
    [d1,d2,d3].forEach((d,i)=>{const on=k===5+i;const x=on?90+420*(.5+.45*Math.sin(H.seg(t,5+i,6+i)*Math.PI*2)):300;H.set(d,{cx:x});H.op(d,k>=5+i?1:.25);});eN.textContent=k>=5?'A manager’s hidden model of people shapes how he manages':'';
  }};
}
Course.add({id:'10',module:3,title:'The Human Factor in Enterprises I',vizLabel:'Roles, “the average person” and models of people',
  hook:{who:'Bayo, factory manager',text:'Bayo writes rules for “the average worker”. Yet one operator wants overtime money, another wants a title, a third wants to learn, and a fourth just wants respect. Who exactly is he managing?'},
  objectives:['Explain why managers must understand the human factor','Describe roles, individuality, dignity and the whole person','Describe Schein’s four conceptions of people','Contrast the views of Porter, Lawler and Hackman'],
  steps:[
    {h:'Leading and the human factor',t:'<p>Planning, organising, staffing and controlling achieve little if managers cannot lead. People follow those who help them satisfy their own needs. The manager’s task: encourage people to contribute willingly to enterprise goals while meeting their own needs.</p>'},
    {h:'People assume different roles',t:'<p>Individuals are more than a factor of production: they are consumers, family members, members of schools, churches and associations, and citizens. In these roles they shape the laws, ethics and traditions of dignity that govern managers.</p>'},
    {h:'There is no average person',t:'<p>Rules, schedules and job descriptions assume people are alike, yet each has different needs, ambitions, attitudes, desire for responsibility, knowledge and potential. Managers can even “engineer the job to fit the person” (Fiedler, 1965).</p>'},
    {h:'Dignity and the whole person',t:'<p>Results matter, but the means must never violate people’s dignity. And managers must consider the whole person: knowledge, attitudes, skills and personality interacting, shaped by family, neighbours, school, church, unions and politics.</p>'},
    {h:'Schein’s four conceptions',t:'<p><b>Rational-economic</b> (driven by money, passive; like Theory X), <b>social</b>, <b>self-actualising</b> (a needs hierarchy up to full potential) and <b>complex</b> (Schein’s own view: varied, changing motives that can be learned). Note: the course text accidentally repeats the self-actualising description under “social man”.</p>'},
    {h:'Rational or emotional?',t:'<p>A rational view sees people weighing information objectively; such a manager may ignore feelings. An emotional view sees people ruled by emotions; such a manager may play amateur psychiatrist.</p>'},
    {h:'Behaviouristic or phenomenological?',t:'<p>Behaviourists see behaviour as controlled by the environment, so they change the environment. The phenomenological view sees people as unique, subjective and unpredictable, and hard to understand by observation alone.</p>'},
    {h:'Economic or self-actualising?',t:'<p>The economic view sees money as the prime motivator, breeding a self-interest climate. The self-actualising view sees people wanting to develop and use their potential, so the manager creates room for self-direction.</p>'}
  ],
  scene:u10Scene,
  sandboxIntro:'Place your own view of people on each scale and see what kind of manager it makes you.',
  sandbox(ctl,st){
    const s=H.svg(st,520,240);const v=[50,50,50];const ro=H.readout(ctl);
    [['Rational ↔ emotional'],['Behaviouristic ↔ phenomenological'],['Economic ↔ self-actualising']].forEach(([l],i)=>H.slider(ctl,{id:'u10'+i,label:l,min:0,max:100,step:5,value:50,fmt:x=>x<35?'left':x>65?'right':'middle'},x=>{v[i]=x;draw();}));
    function draw(){s.innerHTML='';[['Rational','Emotional'],['Behaviouristic','Phenomenological'],['Economic','Self-actualising']].forEach(([a,b],i)=>{const y=40+i*70;el('line',{x1:60,x2:460,y1:y,y2:y,stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},s);el('circle',{cx:60+400*v[i]/100,cy:y,r:11,fill:'var(--emp)'},s);t_(s,60,y+28,a,{'font-size':12,'font-weight':700});t_(s,460,y+28,b,{'font-size':12,'font-weight':700,'text-anchor':'end'});});
      const tips=[v[0]<35?'You will reason with staff but may overlook feelings.':v[0]>65?'You will attend to feelings but risk playing psychiatrist.':'You balance reasons and feelings.',v[1]<35?'You manage by shaping the environment.':v[1]>65?'You treat each person as unique.':'',v[2]<35?'You will lean on pay as the main lever.':v[2]>65?'You will create room for growth and self-direction.':''];
      ro.innerHTML=tips.filter(Boolean).join('<br>')+'<br><b>The course’s advice (Unit 12): draw on several models, not one.</b>';}
    draw();
  },
  sae:{q:'Which of Schein’s models of man do you find most realistic, and why?',a:'Most writers, and Schein himself, favour the complex model: people have many motives that combine and change, and can learn new ones, so no single lever (money, social belonging or growth) works for everyone or all the time.'},saeOwn:true,
  tma:{q:'Which model of man best suits the worker in the public sector?',outline:['Summarise Schein’s four models and Porter et al.’s three contrasts','Consider public-sector realities: pay structures, job security, social ties, desire for development','Argue that no single model fits; many workers are “complex”','Implications for motivating public servants','Conclude with an eclectic approach (Unit 12)']},
  quiz:[
    {q:'Schein’s own view of people is the…',o:['Rational-economic model','Social model','Self-actualising model','Complex model'],a:3,w:'People are complex, variable and can learn new motives.'},
    {q:'A manager who changes the work environment to get desired behaviour holds a…',o:['Phenomenological view','Behaviouristic view','Emotional view','Self-actualising view'],a:1,w:'Behaviourists see behaviour as controlled by the environment.'},
    {q:'“There is no average person” means…',o:['Rules are useless','People differ in needs, ambitions, attitudes and skills','Everyone is above average','Only managers are unique'],a:1,w:'Principles must be adjusted to individuals.'}
  ],
  card:[{h:'The human factor',items:['People assume different roles','There is no average person','Personal dignity is important','Consider the whole person']},{h:'Schein’s models',items:['Rational-economic','Social','Self-actualising','Complex']},{h:'Porter et al. contrasts',items:['Rational vs emotional','Behaviouristic vs phenomenological','Economic vs self-actualising']}]
});

/* ================= Unit 11 ================= */
const XA=['Average people dislike work and avoid it','So they must be coerced, controlled, directed and threatened','They prefer direction, avoid responsibility, want security above all'];
const YA=['Work is as natural as play or rest','People exercise self-direction toward objectives they are committed to','Commitment depends on rewards for achievement','Under the right conditions people seek responsibility','Imagination and creativity are widely distributed','Intellectual potential is only partly used'];
function u11Scene(stage){
  H.cap(stage,'Theory X and Theory Y (McGregor, 1960)');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,3]);box(A,20,50,275,370,'var(--err-soft)','none',14);box(A,305,50,275,370,'var(--org-soft)','none',14);t_(A,157,80,'Theory X',{'text-anchor':'middle','font-size':18,'font-weight':700,fill:'var(--err)'});t_(A,442,80,'Theory Y',{'text-anchor':'middle','font-size':18,'font-weight':700,fill:'var(--org)'});
  const xa=XA.map((x,i)=>{const g=el('g',{},A);wrap(g,40,118+i*76,`${i+1}. ${x}`,34,{'font-size':12});return g;});const ya=YA.map((x,i)=>{const g=el('g',{},A);wrap(g,322,112+i*50,`${i+1}. ${x}`,36,{'font-size':11.5});return g;});
  const aT=t_(A,300,32,'',{'text-anchor':'middle','font-size':13});
  const B=tab(s);tabs.push([B,3,4]);t_(B,300,36,'Common misunderstandings',{'text-anchor':'middle','font-size':15,'font-weight':700});
  ['They are assumptions to test, not prescriptions, and not research-based','Not “hard” vs “soft” management','Not two ends of one scale: completely different views','Theory Y is not consensus management or anti-authority','Different tasks and situations need different approaches (Morse & Lorsch, 1970)'].forEach((x,i)=>{box(B,50,62+i*70,500,56,'var(--sunk)','none',12);t_(B,72,95+i*70,'✗',{'font-size':16,'font-weight':700,fill:'var(--err)'});wrap(B,96,90+i*70,x,60,{'font-size':12.5});});
  const C=tab(s);tabs.push([C,4,7,true]);const cT=t_(C,300,36,'',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const org=(cx,lab,col)=>{const g=el('g',{},C);t_(g,cx,70,lab,{'text-anchor':'middle','font-size':16,'font-weight':700,fill:col});const top=[cx,120],mid=[[cx-80,210],[cx+80,210]],bot=[[cx-110,300],[cx-50,300],[cx+50,300],[cx+110,300]];H.person(g,...top,'var(--org)',2);mid.forEach(p=>H.person(g,...p,'var(--emp)',1.7));bot.forEach(p=>H.person(g,...p,'var(--emp)',1.5));return {g,top,mid,bot};};
  const X=org(150,'Theory X manager','var(--err)'),Y=org(450,'Theory Y manager','var(--org)');const arrX=el('g',{},C),arrY=el('g',{},C);
  const ln=(g,a,b,c,d)=>el('line',{x1:a[0],y1:a[1]+12,x2:b[0],y2:b[1]-22,stroke:c,'stroke-width':2.5,'stroke-dasharray':d?'5 4':'none'},g);
  [[X.top,X.mid[0]],[X.top,X.mid[1]],[X.mid[0],X.bot[0]],[X.mid[0],X.bot[1]],[X.mid[1],X.bot[2]],[X.mid[1],X.bot[3]]].forEach(([a,b])=>ln(arrX,a,b,'var(--err)'));
  [[Y.top,Y.mid[0]],[Y.top,Y.mid[1]],[Y.mid[0],Y.bot[0]],[Y.mid[0],Y.bot[1]],[Y.mid[1],Y.bot[2]],[Y.mid[1],Y.bot[3]]].forEach(([a,b])=>{ln(arrY,a,b,'var(--org)');ln(arrY,[b[0]+6,b[1]-30],[a[0]+6,a[1]+40],'var(--org)',true);});el('line',{x1:Y.mid[0][0]+20,x2:Y.mid[1][0]-20,y1:200,y2:200,stroke:'var(--org)','stroke-width':2.5,'stroke-dasharray':'5 4'},arrY);
  const cX=t_(C,150,360,'',{'text-anchor':'middle','font-size':12}),cX2=t_(C,150,378,'',{'text-anchor':'middle','font-size':12}),cY=t_(C,450,360,'',{'text-anchor':'middle','font-size':12}),cY2=t_(C,450,378,'',{'text-anchor':'middle','font-size':12});
  const txt=[['Objectives set at the top, passed down','low commitment','Staff set objectives, agreed with boss','committed to challenging goals'],['One-way, top-down; orders without coaching','hidden resistance','Up, down and across; frequent feedback','teamwork, accountability'],['Imposed standards; boss as judge','fault-finding, low trust','Self-control; boss as coach','problem solving, self-development']];
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);xa.forEach((g,i)=>H.op(g,H.es(t,.2+i*.2,.4+i*.2)));ya.forEach((g,i)=>H.op(g,H.es(t,1.1+i*.12,1.25+i*.12)));aT.textContent=k===0?'Traditional assumptions: pessimistic, static, rigid':k===1?'Optimistic, dynamic, flexible':'Neither is labelled “good” or “bad”: they are assumptions';
    const ci=H.clamp(k-4,0,2);cT.textContent=['Planning: setting objectives','Leading: how communication flows','Controlling: appraisal'][ci];[cX,cX2,cY,cY2].forEach((e,i)=>e.textContent=txt[ci][i]);
  }};
}
Course.add({id:'11',module:3,title:'The Human Factor in Enterprises II',vizLabel:'Theory X and Theory Y side by side',
  hook:{who:'Grace, supervisor',text:'Grace checks every task her team does, because “if you don’t watch them, they won’t work.” Her colleague Ade lets his team set their own targets and rarely checks. Both believe they are right. Their assumptions are showing.'},
  objectives:['State McGregor’s Theory X and Theory Y assumptions','Clear up five misunderstandings about the theories','Explain how each affects planning, leading and controlling'],
  steps:[
    {h:'Theory X assumptions',t:'<p>McGregor chose neutral labels: neither is “good” or “bad”. Theory X assumes average people dislike work and avoid it, so they must be coerced, controlled and threatened, and they prefer direction, avoid responsibility and want security above all.</p>'},
    {h:'Theory Y assumptions',t:'<p>Work is as natural as play or rest; people exercise self-direction toward objectives they are committed to; commitment follows rewards; people learn to seek responsibility; creativity is widely distributed; and intellectual potential is only partly used.</p>'},
    {h:'X is rigid, Y is flexible',t:'<p>Theory X is pessimistic, static and rigid, with external control. Theory Y is optimistic, dynamic and flexible, with self-direction. Each shapes how managers carry out their functions.</p>'},
    {h:'Five misunderstandings',t:'<p>They are untested assumptions, not prescriptions; not hard vs soft management; not two ends of one scale; Theory Y is not consensus management or anti-authority; and different tasks need different approaches (Morse & Lorsch, 1970).</p>'},
    {h:'Planning under X and Y',t:'<p>Under X the superior sets objectives with little participation and plans flow downward: commitment is low. Under Y subordinates set their own objectives and agree them with the superior: commitment to challenging, realistic goals.</p>'},
    {h:'Leading under X and Y',t:'<p>X leadership is autocratic: orders flow one way, top-down, with little coaching or feedback, breeding hidden resistance. Y leadership is participative: communication flows down, up and across, with frequent feedback and teamwork.</p>'},
    {h:'Controlling under X and Y',t:'<p>X controls rigidly with imposed standards; the boss is a judge, the appraisal low-trust and fault-finding. Y relies on self-control with jointly set standards; the boss is a coach and the appraisal looks forward to problem solving.</p>'}
  ],
  scene:u11Scene,
  sandboxIntro:'Agree or disagree with each statement to see which assumptions you hold.',
  sandbox(ctl,st){
    const items=[['Most people will avoid work if they can.',-1],['People will direct themselves toward goals they believe in.',1],['Staff need to be watched to perform.',-1],['Given the chance, people seek responsibility.',1],['Most staff want security more than challenge.',-1],['Creativity is found throughout the workforce.',1]];const a=items.map(()=>0);const ro=H.readout(ctl);const s=H.svg(st,520,220);
    items.forEach(([q],i)=>H.segBtns(ctl,q,[[1,'Agree'],[0,'Unsure'],[-1,'Disagree']],0,v=>{a[i]=v;draw();}));
    function draw(){s.innerHTML='';const sc=items.reduce((acc,[q,d],i)=>acc+a[i]*d,0);const x=260+sc*36;el('rect',{x:40,y:90,width:440,height:24,rx:12,fill:'var(--sunk)'},s);el('circle',{cx:x,cy:102,r:14,fill:sc<0?'var(--err)':sc>0?'var(--org)':'var(--muted)'},s);t_(s,40,140,'Theory X',{'font-size':13,'font-weight':700,fill:'var(--err)'});t_(s,480,140,'Theory Y',{'font-size':13,'font-weight':700,fill:'var(--org)','text-anchor':'end'});
      ro.innerHTML=`Your answers lean <b>${sc<-1?'Theory X':sc>1?'Theory Y':'neither way'}</b>.<br>McGregor’s point: these are assumptions to test against reality, and the situation should shape your approach.`;}
    draw();
  },
  sae:{q:'Which of the theories should be encouraged over the other?',a:'The course says neither should simply be preferred: they are assumptions, not prescriptions. Theory Y assumptions tend to produce more commitment, communication and self-development, but some tasks and situations call for more structure and authority (Morse & Lorsch). The effective manager adjusts to the people and the task.'},
  tma:{q:'What will you consider the best conditions to use each of the theories?',outline:['State X and Y assumptions','Clarify they are assumptions, not strategies','Conditions for more structure (X-like): routine tasks, crisis, inexperienced staff, safety rules','Conditions for Y: professional work, committed staff, need for creativity','Conclude: fit approach to task and people']},
  quiz:[
    {q:'Which is a Theory Y assumption?',o:['People inherently dislike work','People must be threatened with punishment','People exercise self-direction toward objectives they are committed to','People want security above all'],a:2,w:'Theory Y sees self-direction and self-control.'},
    {q:'Under Theory X, communication tends to flow…',o:['Up, down and across','One way, top-down','Only sideways','Only upward'],a:1,w:'Little feedback; orders flow down.'},
    {q:'Which statement about Theories X and Y is a misunderstanding?',o:['They are assumptions','They are opposite ends of one continuum','Different situations need different approaches','They are not based on research'],a:1,w:'McGregor saw them as completely different views, not a scale.'}
  ],
  card:[{h:'Theory X',items:XA},{h:'Theory Y',items:YA}]
});

/* ================= Unit 12 ================= */
const DAVIS=[['Autocratic','power','obedience','dependence on the boss','minimal performance','industrial revolution'],['Custodial','economic resources','security and benefits','dependence on the organisation','passive cooperation','1920s–1930s USA'],['Supportive','leadership','participation','involvement','awakened drives (like Theory Y)','today']];
function u12Scene(stage){
  H.cap(stage,'Behavioural models and perception');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,3]);t_(A,300,36,'Davis’s three models of organisational behaviour',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('line',{x1:40,x2:560,y1:90,y2:90,stroke:'var(--line)','stroke-width':4},A);
  const cards=DAVIS.map(([n,base,orient,psych,res,era],i)=>{const g=el('g',{},A);const x=30+i*190;el('circle',{cx:x+85,cy:90,r:8,fill:'var(--org)'},g);t_(g,x+85,72,era,{'text-anchor':'middle','font-size':11,fill:'var(--muted)'});box(g,x,110,170,290,['var(--err-soft)','var(--emp-soft)','var(--org-soft)'][i],'none',14);t_(g,x+85,140,n,{'text-anchor':'middle','font-size':16,'font-weight':700});
    [['Depends on',base],['Orientation',orient],['Employee result',psych],['Performance',res]].forEach(([a,b],j)=>{t_(g,x+14,172+j*56,a,{'font-size':10.5,fill:'var(--muted)'});wrap(g,x+14,190+j*56,b,22,{'font-size':12,'font-weight':700});});return g;});
  const B=tab(s);tabs.push([B,3,4]);t_(B,300,36,'An eclectic view',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const src=[['Schein: 4 models',120,110],['Porter et al.: 6 views',480,110],['McGregor: X and Y',120,330],['Davis: 3 models',480,330]];src.forEach(([n,x,y])=>{box(B,x-90,y-22,180,44,'var(--sunk)','none',22);t_(B,x,y+5,n,{'text-anchor':'middle','font-size':12.5,'font-weight':700});el('line',{x1:x,y1:y,x2:300,y2:220,stroke:'var(--org)','stroke-width':2.5,'stroke-dasharray':'6 4'},B);});
  el('circle',{cx:300,cy:220,r:66,fill:'var(--org)'},B);t_(B,300,214,'Effective',{'text-anchor':'middle','font-size':14,'font-weight':700,fill:'var(--card)'});t_(B,300,232,'manager',{'text-anchor':'middle','font-size':14,'font-weight':700,fill:'var(--card)'});
  t_(B,300,410,'No single model explains all behaviour: draw on several, treat people as whole persons with dignity',{'text-anchor':'middle','font-size':11.5,fill:'var(--muted)'});
  const C=tab(s);tabs.push([C,4,6,true]);const cT=t_(C,300,36,'',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const stim=[];const r=H.seeded(5);const labels=['machine noise','furnace heat','canteen smell','a late report','a cost overrun','a staff complaint','a new order','a safety issue','a rival’s price','a broken pump','gossip','a customer letter'];
  labels.forEach((l,i)=>{const g=el('g',{},C);const c=el('circle',{r:6,fill:'var(--data)'},g);const tx=t_(g,0,0,l,{'font-size':10.5});stim.push({g,c,tx,y:70+i*26,keep:[3,4,8].includes(i),fin:[3,4,8,10].includes(i)});});
  el('path',{d:'M285 60 L335 60 L325 400 L295 400 Z',fill:'var(--sunk)',stroke:'var(--line)'},C);const lens=t_(C,310,50,'perceiver',{'text-anchor':'middle','font-size':11,'font-weight':700});
  const cN=t_(C,300,428,'',{'text-anchor':'middle','font-size':12});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);cards.forEach((g,i)=>H.op(g,H.es(t,i,i+.3)));
    const pp=H.es(t,4.2,4.9);const fin=k>=5;stim.forEach(st=>{const pass=fin?st.fin:st.keep;const x=pass?H.lerp(40,380,pp):40;H.set(st.c,{cx:x,cy:st.y});H.set(st.tx,{x:x+10,y:st.y+4});H.op(st.g,pass?1:1-pp*.75);});
    cT.textContent=k===4?'Selective perception':'Background shapes what we notice';cN.textContent=k===4?'Outstanding things are noticed; unpleasant ones are often tuned out':'A finance-minded manager spots the cost overrun and the rival’s price first';
  }};
}
Course.add({id:'12',module:3,title:'The Human Factor in Enterprises III',vizLabel:'Three eras of management and a perception filter',
  hook:{who:'Ifeanyi, MBA student',text:'In a case discussion, the accountants in Ifeanyi’s class all say the problem is cash flow. The marketers say it is branding. The HR people say it is morale. Same case, different eyes.'},
  objectives:['Describe Davis’s autocratic, custodial and supportive models','Explain why an eclectic view of people is needed','Explain perception and selective perception at work'],
  steps:[
    {h:'The autocratic model',t:'<p>Davis (1977): dominant during the industrial revolution. Power was the base; managers saw authority as the only way to get things done; employees obeyed. The result was <b>dependence on the boss</b> and <b>minimal performance</b>, possible because workers lived at subsistence level.</p>'},
    {h:'The custodial model',t:'<p>Popular in the 1920s and 1930s in the United States. Managers used money for employee benefits, so the model depended on the firm’s ability to pay. Employees gained security but became <b>dependent on the organisation</b>, offering <b>passive cooperation</b> rather than full effort.</p>'},
    {h:'The supportive model',t:'<p>Depends on managerial <b>leadership</b>, not power or money. Managers support employees in achieving results through participation and involvement, similar to Theory Y and Likert’s supportive relationships.</p>'},
    {h:'An eclectic view',t:'<p>Which model is valid? None alone. People differ, and behave differently in different situations and at different times. Effective managers draw on several models, treat people with respect and dignity as whole persons, and adapt to the situation.</p>'},
    {h:'Selective perception',t:'<p>What we perceive is not necessarily the real world. Some information is processed and other data ignored; outstanding things are noticed, unobtrusive ones missed, and unpleasant ones often tuned out. First impressions and projecting our own faults distort too, as does the setting: a public reprimand is perceived differently from a private one.</p>'},
    {h:'Background shapes perception',t:'<p>Selective perception is largely shaped by background: accounting and finance students tend to see finance problems as the critical issues in a case. Sometimes it is a useful defence, like tuning out noise to concentrate.</p>'}
  ],
  scene:u12Scene,
  sandboxIntro:'Choose a background and see which issues in a company case you would notice first.',
  sandbox(ctl,st){
    const issues=[['Cash flow is tight','fin'],['Costs are over budget','fin'],['Brand looks dated','mkt'],['Competitor cut prices','mkt'],['Morale is low','hr'],['Two supervisors are feuding','hr'],['Machine downtime is rising','eng'],['Quality complaints doubled','eng']];let bg='fin';const ro=H.readout(ctl);const box_=H.h('div',{style:'padding:14px;display:grid;gap:8px'});st.append(box_);
    H.segBtns(ctl,'Your background',[['fin','Accounting'],['mkt','Marketing'],['hr','HR'],['eng','Engineering']],'fin',v=>{bg=v;draw();});
    function draw(){box_.innerHTML='';issues.forEach(([x,k])=>box_.append(H.h('div',{style:`padding:10px 12px;border-radius:8px;border:1px solid var(--line);${k===bg?'background:var(--org-soft);border-color:var(--org);font-weight:700':'opacity:.45'}`},x)));ro.innerHTML='The highlighted issues are the ones your background makes you notice first. A good manager deliberately looks at the faded ones too.';}
    draw();
  },
  sae:{q:'Do you agree that human behaviour in industry is better explained by an eclectic approach? Explain.',a:'Yes: people differ, behave differently across situations and over time, and want more than one thing from work (money, security, belonging, growth). Each model captures part of this (Schein, Porter et al., McGregor, Davis), so drawing on several fits reality better than any single model.'},
  tma:{q:'What characteristics would enable you to identify when human behaviour falls into each of the models discussed?',outline:['Autocratic: power base, obedience, dependence on boss, minimal effort','Custodial: benefits and security, dependence on organisation, passive cooperation','Supportive: leadership, participation, involvement, engagement','Give a workplace sign of each','Note mixtures: the eclectic view']},
  quiz:[
    {q:'The custodial model depends mainly on…',o:['Power','Economic resources to pay for benefits','Leadership','Fear'],a:1,w:'It gave security but bred passive cooperation.'},
    {q:'Which model is most similar to Theory Y?',o:['Autocratic','Custodial','Supportive','Rational-economic'],a:2,w:'Supportive, based on leadership and participation.'},
    {q:'Selective perception means…',o:['Seeing everything objectively','Processing some information and ignoring other data','Perceiving only colours','Choosing staff carefully'],a:1,w:'Outstanding features are noticed; less obvious ones overlooked.'}
  ],
  card:[{h:'Davis’s models',items:DAVIS.map(d=>`${d[0]}: ${d[1]} → ${d[4]}`)},{h:'Perception',items:['Selective perception','First impressions','Projection','Physical and social setting','Background (e.g. finance students see finance problems)']}]
});

/* ================= Unit 13 ================= */
const GRID=[['1.1 Impoverished',1,1,'minimal concern for either; marking time'],['9.1 Autocratic task',9,1,'production only'],['1.9 Country club',1,9,'people only; relaxed, little effort'],['5.5 Middle of the road',5,5,'adequate, not outstanding'],['9.9 Team management',9,9,'highest concern for both']];
function u13Scene(stage){
  H.cap(stage,'Leadership behaviour and style I');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,2]);const aT=t_(A,300,36,'Styles based on the use of authority',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const sty=[['Autocratic','commands, expects compliance',1],['Democratic / participative','consults and encourages participation',2],['Free-rein','little use of power; subordinates set goals',3]];
  const aS=sty.map(([a,b,n],i)=>{const g=el('g',{},A);const x=40+i*180;box(g,x,70,160,300,'var(--sunk)','none',14);H.person(g,x+80,140,'var(--org)',2.4);for(let j=0;j<3;j++){H.person(g,x+40+j*40,250,'var(--emp)',1.5);el('line',{x1:x+80,y1:160,x2:x+40+j*40,y2:228,stroke:'var(--org)','stroke-width':[4,2,1][i],opacity:[1,.7,.3][i],'stroke-dasharray':i===2?'3 4':'none'},g);if(i===1)el('line',{x1:x+40+j*40,y1:228,x2:x+80,y2:162,stroke:'var(--emp)','stroke-width':1.5,'stroke-dasharray':'4 3'},g);}
    t_(g,x+80,300,a,{'text-anchor':'middle','font-size':13,'font-weight':700});wrap(g,x+80,322,b,20,{'text-anchor':'middle','font-size':11});return g;});
  const aN=t_(A,300,404,'',{'text-anchor':'middle','font-size':12});
  const B=tab(s);tabs.push([B,2,3]);t_(B,300,36,'Likert’s four systems of management',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const lk=[['System 1','Exploitive-authoritative','fear, downward only'],['System 2','Benevolent-authoritative','rewards and some fear'],['System 3','Consultative','substantial trust, two-way'],['System 4','Participative-group','complete trust, group decisions']];
  const lB=lk.map(([a,b,c],i)=>{const g=el('g',{},B);const x=40+i*135,h=60+i*70;el('rect',{x,y:340-h,width:115,height:h,rx:8,fill:i===3?'var(--org)':'var(--org-soft)'},g);t_(g,x+57,330-h-34,a,{'text-anchor':'middle','font-size':12.5,'font-weight':700});wrap(g,x+57,330-h-18,b,16,{'text-anchor':'middle','font-size':10.5,lh:12});wrap(g,x+57,360,c,18,{'text-anchor':'middle','font-size':10,fill:'var(--muted)',lh:11});return g;});
  t_(B,300,410,'Likert found System 4 managers most successful and productive',{'text-anchor':'middle','font-size':12,'font-weight':700});
  const C=tab(s);tabs.push([C,3,4]);t_(C,300,36,'Argyris: immaturity → maturity',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('line',{x1:60,x2:540,y1:200,y2:200,stroke:'var(--line)','stroke-width':10,'stroke-linecap':'round'},C);const ag=el('line',{x1:60,y1:200,y2:200,stroke:'var(--org)','stroke-width':10,'stroke-linecap':'round'},C);const am=el('g',{},C);H.person(am,0,0,'var(--emp)',2.2);
  t_(C,60,240,'Immaturity: dependent, submissive',{'font-size':12,'font-weight':700});t_(C,540,240,'Maturity: self-actualising',{'font-size':12,'font-weight':700,'text-anchor':'end'});
  wrap(C,300,300,'Organisational controls leave people submissive and dependent. The bigger the gap between personal and company needs, the more apathy, conflict and subversion. Effective leaders help people mature through challenge and opportunity.',66,{'text-anchor':'middle','font-size':12});
  const D=tab(s);tabs.push([D,4,6,true]);const dax=H.axes(D,{x:90,y:80,w:420,h:290,xmin:.5,xmax:9.5,ymin:.5,ymax:9.5,xt:[1,2,3,4,5,6,7,8,9].map(v=>[v,v]),yt:[1,2,3,4,5,6,7,8,9].map(v=>[v,v]),xl:'Concern for production →',yl:'↑ Concern for people'});
  GRID.forEach(([n,x,y])=>{el('circle',{cx:dax.sx(x),cy:dax.sy(y),r:24,fill:'var(--org-soft)'},D);t_(D,dax.sx(x),dax.sy(y)+(y>5?42:-30),n,{'text-anchor':'middle','font-size':11.5,'font-weight':700});});
  const gd=el('circle',{r:10,fill:'var(--emp)'},D);const dT=t_(D,300,30,'The managerial grid (Blake & Mouton)',{'text-anchor':'middle','font-size':15,'font-weight':700});const dN=t_(D,300,420,'',{'text-anchor':'middle','font-size':12.5});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);aS.forEach((g,i)=>H.op(g,k===0?H.es(t,i*.25,i*.25+.2):1));aN.textContent=k===0?'Three basic styles':'Variations: the benevolent autocrat listens but decides alone; the supportive leader consults and helps. A fire chief is autocratic; a research manager gives free rein.';
    lB.forEach((g,i)=>H.op(g,H.es(t,2+i*.15,2.2+i*.15)));const mp=H.es(t,3.1,3.8);H.set(ag,{x2:60+480*mp});am.setAttribute('transform',`translate(${60+480*mp},185)`);
    const gp=H.seg(t,4.05,5.9)*5;const gi=Math.min(4,Math.floor(gp)),fr=gp-gi;const a=GRID[gi],b=GRID[Math.min(4,gi+1)];const e=H.ease(H.clamp(fr*1.5-.5));H.set(gd,{cx:dax.sx(H.lerp(a[1],b[1],e)),cy:dax.sy(H.lerp(a[2],b[2],e))});dN.textContent=`${(e>.5?b:a)[0]}: ${(e>.5?b:a)[3]}`;
  }};
}
Course.add({id:'13',module:3,title:'Leadership Behaviour and Style I',vizLabel:'Likert’s systems and the managerial grid',
  hook:{who:'Musa, production manager',text:'Musa’s plant hits every target, but staff turnover is the highest in the group. His counterpart in Kano has a happy, relaxed team that misses deadlines. On the managerial grid, they are in opposite corners.'},
  objectives:['Describe styles based on the use of authority','Explain Likert’s four systems of management','Explain Argyris’s immaturity–maturity continuum','Place styles on Blake and Mouton’s managerial grid'],
  steps:[
    {h:'Three styles of authority',t:'<p><b>Autocratic</b>: commands, expects compliance, leads by reward and punishment. <b>Democratic or participative</b>: consults and encourages participation. <b>Free-rein</b>: uses power very little; subordinates set their own goals while the leader supplies information and external contact.</p>'},
    {h:'Variations and situations',t:'<p>A <b>benevolent autocrat</b> listens, then decides alone; a <b>supportive</b> leader consults and helps subordinates do their jobs. Style depends on the situation: a fire chief does not hold a meeting during a fire; a research manager gives scientists free rein but insists on protective clothing.</p>'},
    {h:'Likert’s four systems',t:'<p><b>System 1</b> exploitive-authoritative (fear, downward communication), <b>System 2</b> benevolent-authoritative, <b>System 3</b> consultative, <b>System 4</b> participative-group (complete trust, group decisions, communication in all directions). Likert found System 4 most effective and productive.</p>'},
    {h:'Argyris: immaturity to maturity',t:'<p>Organisational controls leave employees submissive and dependent while they have strong self-actualisation needs. The wider the gap between individual and company needs, the more apathy, conflict and subversion. Effective leaders move people from immaturity toward maturity.</p>'},
    {h:'The managerial grid',t:'<p>Blake and Mouton’s grid plots <b>concern for production</b> against <b>concern for people</b>, each from 1 to 9. It is used worldwide for training and diagnosing styles.</p>'},
    {h:'Five landmark styles',t:'<p><b>1.1</b> impoverished: minimal involvement. <b>9.1</b> autocratic task management. <b>1.9</b> country club: relaxed, friendly, little coordinated effort. <b>5.5</b> middle of the road: adequate, not outstanding. <b>9.9</b> team management: highest concern for both. The grid classifies styles but does not explain why a manager falls where he does.</p>'}
  ],
  scene:u13Scene,
  sandboxIntro:'Place a manager you know on the managerial grid.',
  sandbox(ctl,st){
    const s=H.svg(st,520,330);const p={pr:5,pe:5};const ro=H.readout(ctl);
    H.slider(ctl,{id:'u13a',label:'Concern for production',min:1,max:9,value:5},v=>{p.pr=v;draw();});
    H.slider(ctl,{id:'u13b',label:'Concern for people',min:1,max:9,value:5},v=>{p.pe=v;draw();});
    function draw(){s.innerHTML='';const g=el('g',{},s);const ax=H.axes(g,{x:60,y:20,w:400,h:270,xmin:.5,xmax:9.5,ymin:.5,ymax:9.5,xt:[1,5,9],yt:[1,5,9],xl:'production →',yl:'↑ people'});GRID.forEach(([n,x,y])=>{el('circle',{cx:ax.sx(x),cy:ax.sy(y),r:16,fill:'var(--org-soft)'},g);});
      el('circle',{cx:ax.sx(p.pr),cy:ax.sy(p.pe),r:11,fill:'var(--emp)'},g);const near=GRID.map(gg=>[gg,Math.hypot(gg[1]-p.pr,gg[2]-p.pe)]).sort((a,b)=>a[1]-b[1])[0][0];
      ro.innerHTML=`Grid position <b>${p.pr}.${p.pe}</b>, nearest to <b>${near[0]}</b>: ${near[3]}.`;}
    draw();
  },
  sae:{q:'Is it possible for a leader to combine many of the attributes described above?',a:'Yes. The course stresses that style depends on the situation: the same manager may be autocratic in an emergency, consultative when setting objectives and free-rein with research scientists. The 9.9 position itself combines high concern for production and for people.'},
  tma:{q:'If leadership style depends on the organisational environment, what criteria would you use to decide the appropriate style for an organisation of your choice?',outline:['Nature of the task (emergency, routine, creative)','Followers’ maturity and expertise (Argyris; free-rein for scientists)','Trust and communication (Likert’s systems)','Balance of concern for people and production (grid)','Apply to the chosen organisation and justify']},
  quiz:[
    {q:'Which Likert system did Likert find most effective?',o:['System 1','System 2','System 3','System 4'],a:3,w:'Participative-group management.'},
    {q:'On the managerial grid, 1.9 is called…',o:['Impoverished','Country club','Team management','Middle of the road'],a:1,w:'High concern for people, low for production.'},
    {q:'A benevolent autocrat…',o:['Lets the group decide','Listens to followers but makes the decision himself','Uses no authority','Rules by fear only'],a:1,w:'He hears ideas but the decision is his own.'},
    {q:'Argyris says organisational controls tend to make employees…',o:['Mature and independent','Submissive and dependent','Creative','Overpaid'],a:1,w:'Leaders should help people move toward maturity.'}
  ],
  card:[{h:'Styles by authority',items:['Autocratic (incl. benevolent autocrat)','Democratic / participative (incl. supportive)','Free-rein']},{h:'Likert’s systems',ordered:true,items:['Exploitive-authoritative','Benevolent-authoritative','Consultative','Participative-group']},{h:'Managerial grid',items:GRID.map(g=>g[0])}]
});

/* ================= Unit 14 ================= */
function u14Scene(stage){
  H.cap(stage,'Leadership behaviour and style II');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,2]);t_(A,300,36,'The leadership continuum (Tannenbaum & Schmidt)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('path',{d:'M50 90 L550 90 L50 300 Z',fill:'var(--org)',opacity:.85},A);el('path',{d:'M550 90 L550 300 L50 300 Z',fill:'var(--emp-soft)'},A);t_(A,160,140,'use of authority by the manager',{'font-size':13,'font-weight':700,fill:'var(--card)'});t_(A,440,270,'area of freedom for subordinates',{'text-anchor':'end','font-size':13,'font-weight':700});
  t_(A,50,330,'Boss-centred',{'font-size':13,'font-weight':700});t_(A,550,330,'Subordinate-centred',{'font-size':13,'font-weight':700,'text-anchor':'end'});const mk=el('line',{y1:80,y2:310,stroke:'var(--ink)','stroke-width':3},A);
  const forces=el('g',{},A);[['Forces in the manager','values, confidence in staff, tolerance of uncertainty'],['Forces in subordinates','their readiness, expectations, abilities'],['Forces in the situation','traditions, team effectiveness, the problem, time pressure']].forEach(([a,b],i)=>{box(forces,20+i*190,350,180,74,'var(--sunk)','none',10);t_(forces,110+i*190,372,a,{'text-anchor':'middle','font-size':11.5,'font-weight':700});wrap(forces,110+i*190,390,b,26,{'text-anchor':'middle','font-size':10,lh:12});});
  const B=tab(s);tabs.push([B,2,3]);t_(B,300,36,'An open system: outside pressures',{'text-anchor':'middle','font-size':15,'font-weight':700});
  el('circle',{cx:300,cy:230,r:80,fill:'var(--org-soft)'},B);t_(B,300,226,'Leadership',{'text-anchor':'middle','font-size':14,'font-weight':700});t_(B,300,244,'style',{'text-anchor':'middle','font-size':14,'font-weight':700});
  ['Labour unions','Social responsibility','Civil rights movement','Ecology movement','Consumer movement','Organisational environment'].forEach((x,i)=>{const a=-Math.PI/2+i*Math.PI/3,cx=300+Math.cos(a)*190,cy=230+Math.sin(a)*150;el('line',{x1:cx,y1:cy,x2:300+Math.cos(a)*85,y2:230+Math.sin(a)*85,stroke:'var(--emp)','stroke-width':2.5},B);box(B,cx-82,cy-18,164,36,'var(--emp-soft)','none',18);t_(B,cx,cy+5,x,{'text-anchor':'middle','font-size':11.5,'font-weight':700});});
  const C=tab(s);tabs.push([C,3,4]);t_(C,300,36,'Path–goal: what effective leaders do (House, 1971)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  ['Define position and task roles clearly','Remove obstacles to performance','Involve members in setting goals','Promote cohesiveness and team effort','Increase satisfaction in the work','Reduce needless stress and controls','Make reward expectations clear'].forEach((x,i)=>{box(C,60,60+i*48,480,38,'var(--org-soft)','none',19);t_(C,84,84+i*48,'✓ '+x,{'font-size':13});});
  t_(C,300,410,'Strongest for upper-level and professional work; less clear for routine jobs',{'text-anchor':'middle','font-size':11.5,fill:'var(--muted)'});
  const D=tab(s);tabs.push([D,4,8,true]);const dT=t_(D,300,36,'Behaviours a leader can cultivate',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const cb=[['Awareness','know what makes leaders effective, and apply it'],['Empathy','imagine yourself in their position; don’t assume they feel as you do'],['Objectivity','trace causes unemotionally; count to ten'],['Self-knowledge','learn how your habits affect others']].map(([a,b],i)=>{const g=el('g',{},D);const x=40+(i%2)*270,y=64+Math.floor(i/2)*130;const r=box(g,x,y,250,112,'var(--sunk)','none',14);t_(g,x+125,y+36,a,{'text-anchor':'middle','font-size':16,'font-weight':700});wrap(g,x+125,y+62,b,30,{'text-anchor':'middle','font-size':11.5});return {g,r};});
  const see=el('g',{},D);el('path',{d:'M300 400 L286 424 L314 424Z',fill:'var(--muted)'},see);const beam=el('g',{},see);el('line',{x1:-170,x2:170,y1:0,y2:0,stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},beam);box(beam,-210,-30,100,28,'var(--org-soft)','none',14);t_(beam,-160,-11,'empathy',{'text-anchor':'middle','font-size':12,'font-weight':700});box(beam,110,-30,100,28,'var(--data-soft)','none',14);t_(beam,160,-11,'objectivity',{'text-anchor':'middle','font-size':12,'font-weight':700});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);const mx=50+500*(.5+.4*Math.sin(H.seg(t,0,1.9)*Math.PI*2));H.set(mk,{x1:mx,x2:mx});H.op(forces,k>=1?1:0);
    const ci=H.clamp(k-4,0,3);cb.forEach((c,i)=>H.set(c.r,{fill:i===ci?'var(--org-soft)':'var(--sunk)'}));H.op(see,k===6?1:0);beam.setAttribute('transform',`translate(300,398) rotate(${Math.sin(t*3)*6})`);
  }};
}
Course.add({id:'14',module:3,title:'Leadership Behaviour and Style II',vizLabel:'The leadership continuum and cultivated behaviours',
  hook:{who:'Ada, hospital administrator',text:'In a power outage Ada gives orders without discussion. In the monthly planning meeting she lets her senior nurses set the agenda. Is she inconsistent, or skilled?'},
  objectives:['Explain the leadership continuum and the forces that shape a style','Recognise leadership as an open system','Summarise the path–goal approach','Describe four behaviours leaders can cultivate'],
  steps:[
    {h:'Leadership as a continuum',t:'<p>Tannenbaum and Schmidt see a range of styles from highly <b>boss-centred</b> to highly <b>subordinate-centred</b>, varying with how much authority the leader grants. No style is always right or wrong.</p>'},
    {h:'Forces that shape the choice',t:'<p>Forces in the <b>manager</b> (values, confidence in subordinates, leaning, security in uncertainty), in the <b>subordinates</b>, and in the <b>situation</b> (organisational values and traditions, how well the team works, the problem, time pressure).</p>'},
    {h:'An open system',t:'<p>In 1973 they added the organisational and societal environment: unions, pressure for social responsibility, the civil rights, ecology and consumer movements, all challenging managers who ignore interests outside the organisation.</p>'},
    {h:'The path–goal approach',t:'<p>House (1971): the most effective leaders help subordinates achieve both enterprise goals and personal goals (money, promotion, interesting work, growth), by clarifying roles, removing obstacles, involving them in goals, building cohesion, reducing stress and making rewards clear.</p>'},
    {h:'Awareness',t:'<p>Some managers just run the routine. Being aware of what makes leaders effective, and how style depends on situation, helps any manager improve; knowing must turn into practice.</p>'},
    {h:'Empathy',t:'<p>Empathy is placing yourself in another’s position, simulating their feelings, prejudices and values. Leaders err when they assume followers feel as they do; this underlies paternalism: giving staff benefits the boss likes. Ask: “How would I react in their position?”</p>'},
    {h:'Objectivity',t:'<p>Trace the causes of events unemotionally and correct them intelligently. Balancing empathy and objectivity is a tightrope; restraint and the habit of analysis are learned (count to ten).</p>'},
    {h:'Self-knowledge',t:'<p>“Know thyself”: some people irritate others unwittingly. Leaders should learn how their attitudes and habits affect others, watch reactions and identify causes, remembering that people respond differently, and differently at different times.</p>'}
  ],
  scene:u14Scene,
  sandboxIntro:'Weigh the three forces and see where on the continuum your style should sit.',
  sandbox(ctl,st){
    const s=H.svg(st,520,240);const p={m:50,sub:50,sit:50};const ro=H.readout(ctl);
    H.slider(ctl,{id:'u14m',label:'Your confidence in subordinates',min:0,max:100,step:5,value:50,fmt:v=>v+'%'},v=>{p.m=v;draw();});
    H.slider(ctl,{id:'u14s',label:'Subordinates’ readiness and expertise',min:0,max:100,step:5,value:50,fmt:v=>v+'%'},v=>{p.sub=v;draw();});
    H.slider(ctl,{id:'u14t',label:'Time available (crisis ↔ plenty)',min:0,max:100,step:5,value:50,fmt:v=>v<30?'crisis':v>70?'plenty':'some'},v=>{p.sit=v;draw();});
    function draw(){s.innerHTML='';const pos=(p.m+p.sub+p.sit)/300;el('path',{d:'M20 40 L500 40 L20 180 Z',fill:'var(--org)',opacity:.85},s);el('path',{d:'M500 40 L500 180 L20 180 Z',fill:'var(--emp-soft)'},s);const x=20+480*pos;el('line',{x1:x,x2:x,y1:30,y2:190,stroke:'var(--ink)','stroke-width':3},s);
      t_(s,20,210,'Boss-centred',{'font-size':12,'font-weight':700});t_(s,500,210,'Subordinate-centred',{'font-size':12,'font-weight':700,'text-anchor':'end'});
      ro.innerHTML=pos<.35?'<b>Boss-centred:</b> decide and announce, with explanation where possible.':pos<.65?'<b>Middle:</b> consult, then decide.':'<b>Subordinate-centred:</b> set limits and let the group decide.';}
    draw();H.tag(st,'Illustrative');
  },
  sae:{q:'Critically examine some organisations and determine the leadership style of the manager.',a:'Model approach: for each organisation, place the manager on the continuum (boss- to subordinate-centred), name the forces in the manager, subordinates and situation that explain it, note path–goal behaviours (clarifying roles, removing obstacles), and judge awareness, empathy, objectivity and self-knowledge.'},
  tma:{q:'Which explanation of leadership style appears best to you, and why?',outline:['Choose one: continuum, path–goal, grid, Likert, situational','Explain it accurately','Argue why it fits real organisations (e.g. the continuum’s three forces; path–goal for professional work)','Acknowledge limits (path–goal weak for routine jobs)','Conclude with cultivated behaviours that make any style work']},
  quiz:[
    {q:'Tannenbaum and Schmidt’s continuum runs from…',o:['Theory X to Theory Y','Boss-centred to subordinate-centred','1.1 to 9.9','R1 to R4'],a:1,w:'Style varies with the authority granted to subordinates.'},
    {q:'Assuming followers feel as you do, and giving them benefits you like, reflects a lack of…',o:['Objectivity','Empathy','Awareness of costs','Authority'],a:1,w:'It underlies paternalism.'},
    {q:'Research suggests the path–goal approach is most valid for…',o:['Routine production jobs','Upper-level and professional work','Military crises only','Volunteers'],a:1,w:'Leaders have more influence on designing those environments.'}
  ],
  card:[{h:'Forces on the continuum',items:['Forces in the manager','Forces in subordinates','Forces in the situation']},{h:'Cultivated behaviours',items:['Awareness','Empathy','Objectivity','Self-knowledge']}]
});

/* ================= Unit 15 ================= */
function u15Scene(stage){
  H.cap(stage,'Men, women and leadership style');
  const s=H.svg(stage,600,440);const tabs=[];
  const A=tab(s);tabs.push([A,0,2]);const ax=H.axes(A,{x:50,y:80,w:500,h:240,xmin:-3.5,xmax:3.5,ymin:0,ymax:.45,xt:[[-3,'less'],[3,'more']],yt:[],xl:'transformational behaviour'});
  const pA=el('path',{fill:'var(--data)',opacity:.3,stroke:'var(--data)','stroke-width':2.5},A),pB=el('path',{fill:'var(--emp)',opacity:.3,stroke:'var(--emp)','stroke-width':2.5},A);t_(A,300,36,'Meta-analysis of 45 studies (Eagly et al., 2003)',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const aN=t_(A,300,370,'',{'text-anchor':'middle','font-size':12.5});const aN2=t_(A,300,390,'',{'text-anchor':'middle','font-size':11.5,fill:'var(--muted)'});t_(A,540,96,'Illustrative shapes',{'text-anchor':'end','font-size':10,fill:'var(--muted)'});
  const lg=el('g',{},A);el('rect',{x:60,y:404,width:12,height:12,fill:'var(--data)'},lg);t_(lg,78,414,'men',{'font-size':11});el('rect',{x:120,y:404,width:12,height:12,fill:'var(--emp)'},lg);t_(lg,138,414,'women',{'font-size':11});
  const B=tab(s);tabs.push([B,2,3]);t_(B,300,36,'Three styles compared',{'text-anchor':'middle','font-size':15,'font-weight':700});
  [['Transformational','inspires, develops, like an excellent teacher','women higher','var(--org-soft)'],['Transactional','exchanges reward and punishment for performance','women higher on rewarding good work; men higher on punishment','var(--data-soft)'],['Laissez-faire','fails to take responsibility for managing','men higher','var(--err-soft)']].forEach(([a,b,c,col],i)=>{box(B,40,66+i*112,520,96,col,'none',12);t_(B,62,94+i*112,a,{'font-size':15,'font-weight':700});t_(B,62,116+i*112,b,{'font-size':12});wrap(B,62,138+i*112,'Finding: '+c,70,{'font-size':12,'font-weight':700});});
  const C=tab(s);tabs.push([C,3,4]);t_(C,300,36,'Why the research is hard to trust',{'text-anchor':'middle','font-size':15,'font-weight':700});
  ['Small numbers of participants','Narrow definitions of leadership','Reliance on self-report','Subjects not in real leadership roles (e.g. students)','Uncontrolled differences: job, level, experience, culture'].forEach((x,i)=>{box(C,60,62+i*66,480,52,'var(--sunk)','none',12);t_(C,84,94+i*66,'⚠',{'font-size':16,fill:'var(--emp)'});t_(C,110,93+i*66,x,{'font-size':13});});
  t_(C,300,410,'Over 170 studies of style and 86 of effectiveness in fifteen years, yet the information is “quite meagre”',{'text-anchor':'middle','font-size':11.5,fill:'var(--muted)'});
  const D=tab(s);tabs.push([D,4,6,true]);const dT=t_(D,300,36,'',{'text-anchor':'middle','font-size':15,'font-weight':700});
  const rows=[['Setting high standards, getting results','w'],['Strategic planning and vision','m'],['Energy, intensity, keeping others enthusiastic','w'],['People-oriented skills','w'],['Business-oriented skills','m'],['Overall effectiveness (bosses)','='],['Overall effectiveness (peers, direct reports)','w+']];
  const dR=rows.map(([a,b],i)=>{const g=el('g',{},D);const y=60+i*48;box(g,30,y,540,38,'var(--card)','var(--line)',8);t_(g,46,y+24,a,{'font-size':12.5});const lab=b==='w'?'women higher':b==='m'?'men higher':b==='='?'equal':'women slightly higher';box(g,410,y+6,150,26,b==='='?'var(--sunk)':b==='m'?'var(--data-soft)':'var(--emp-soft)','none',13);t_(g,485,y+24,lab,{'text-anchor':'middle','font-size':11.5,'font-weight':700});return g;});
  const dev=el('g',{},D);box(dev,30,60,540,250,'var(--card)','var(--line)',12);t_(dev,300,92,'Development opportunities',{'text-anchor':'middle','font-size':15,'font-weight':700});
  box(dev,50,110,240,150,'var(--emp-soft)','none',12);t_(dev,170,136,'Women managers',{'text-anchor':'middle','font-size':13.5,'font-weight':700});wrap(dev,170,162,'training in strategic analysis and planning, plus persuasive skills to sell ideas',28,{'text-anchor':'middle','font-size':12});
  box(dev,310,110,240,150,'var(--data-soft)','none',12);t_(dev,430,136,'Men managers',{'text-anchor':'middle','font-size':13.5,'font-weight':700});wrap(dev,430,162,'training in empathy, listening, sensitivity to differences, and giving constructive feedback',28,{'text-anchor':'middle','font-size':12});
  t_(dev,300,292,'There is no one right way to lead',{'text-anchor':'middle','font-size':13,'font-weight':700});
  return {update(t){showTabs(tabs,t);const k=Math.floor(t);const sh=H.es(t,.3,1)*.4;const mk=(m)=>{const pts=[];for(let i=0;i<=80;i++){const x=-3.5+7*i/80;pts.push([ax.sx(x),ax.sy(H.npdf(x,m,1))]);}return H.path(pts)+`L${ax.sx(3.5)} ${ax.sy(0)} L${ax.sx(-3.5)} ${ax.sy(0)}Z`;};
    H.set(pA,{d:mk(-sh/2)});H.set(pB,{d:mk(sh/2)});aN.textContent=k===0?'Average differences between equivalent men and women leaders are relatively small':'The curves overlap heavily: individuals vary far more than the averages';aN2.textContent=k===0?'Women in management were, on average, somewhat more transformational':'Bosses rated men and women equally effective overall';
    dR.forEach((g,i)=>H.op(g,k===4?H.es(t,4+i*.1,4.15+i*.1):0));H.op(dev,k>=5?1:0);dT.textContent=k===4?'360-degree findings reported in the course':'';
  }};
}
Course.add({id:'15',module:3,title:'Differences in Men and Women Leadership Styles',vizLabel:'Two heavily overlapping curves',
  hook:{who:'An MBA seminar',text:'A classmate says women are “naturally better” leaders; another says men are. The course reviews what the research actually found, and how far that research can be trusted.'},
  objectives:['Distinguish transformational, transactional and laissez-faire styles','Summarise the findings of Eagly et al. (2003)','Explain the methodological shortcomings of gender research','Identify development opportunities for both men and women managers'],
  steps:[
    {h:'What the meta-analysis found',t:'<p>Eagly, Johannesen-Schmidt and Engen (2003) combined 45 studies. On average women managers were somewhat more <b>transformational</b>, but the differences were <b>relatively small</b>, as expected for men and women in equivalent roles. The differences lie in discretionary behaviour, not basic role tasks.</p>'},
    {h:'Small averages, big overlap',t:'<p>Small average differences mean the two distributions overlap heavily: many men are more transformational than many women and vice versa. The course concludes that leadership skill is not the reserve of either sex.</p>'},
    {h:'Three styles',t:'<p><b>Transformational</b> leaders inspire followers to put group goals first, like an excellent teacher. <b>Transactional</b> leaders exchange reward and punishment for performance. <b>Laissez-faire</b> leaders fail to take responsibility. Women scored higher on transformational and on rewarding good performance; men higher on punishment and laissez-faire. The authors suggest transformational leadership may ease the distrust women leaders sometimes face.</p>'},
    {h:'Why the research is hard to trust',t:'<p>Over 170 studies of style and 86 of effectiveness, yet the information is meagre: small samples, narrow definitions, self-report, subjects not in real leadership roles, and uncontrolled differences in job, level, experience and culture, which the course calls the most serious limitation.</p>'},
    {h:'360-degree findings',t:'<p>Women scored higher on setting high standards and getting results, energy and keeping others enthusiastic, and people skills; men on strategic planning and vision and business skills. Bosses rated both equally effective; peers and direct reports rated women slightly higher. Older claims that men are more autocratic and women more democratic were not supported.</p>'},
    {h:'Development for everyone',t:'<p>One suggested reason: women may focus on results to prove their worth, while men feel freer to take risks on vision. Women managers may benefit from training in strategic analysis and persuasion; men from training in empathy, listening and feedback. The course’s premise: there is no one right way to lead.</p>'}
  ],
  scene:u15Scene,
  sandboxIntro:'See how much two groups overlap when their averages differ by a given amount.',
  sandbox(ctl,st){
    const s=H.svg(st,540,280);let d=.2;const ro=H.readout(ctl);
    H.slider(ctl,{id:'u15d',label:'Difference between group averages (in standard deviations)',min:0,max:2,step:.05,value:.2,fmt:v=>v.toFixed(2)},v=>{d=v;draw();});
    const Phi=x=>{const t=1/(1+.2316419*Math.abs(x)),y=1-H.npdf(Math.abs(x),0,1)*t*(.31938153+t*(-.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));return x>=0?y:1-y;};
    function draw(){s.innerHTML='';const g=el('g',{},s);const ax=H.axes(g,{x:30,y:20,w:480,h:200,xmin:-4,xmax:4,ymin:0,ymax:.45,xt:[],yt:[]});const mk=m=>{const pts=[];for(let i=0;i<=80;i++){const x=-4+8*i/80;pts.push([ax.sx(x),ax.sy(H.npdf(x,m,1))]);}return H.path(pts)+`L${ax.sx(4)} ${ax.sy(0)} L${ax.sx(-4)} ${ax.sy(0)}Z`;};
      el('path',{d:mk(-d/2),fill:'var(--data)',opacity:.3,stroke:'var(--data)','stroke-width':2},g);el('path',{d:mk(d/2),fill:'var(--emp)',opacity:.3,stroke:'var(--emp)','stroke-width':2},g);
      const ovl=2*Phi(-d/2),sup=Phi(d/Math.SQRT2);ro.innerHTML=`Overlap: <b>${Math.round(ovl*100)}%</b> of the two distributions.<br>A randomly chosen member of the higher group beats one from the lower group only <b>${Math.round(sup*100)}%</b> of the time (50% = no difference).`;}
    draw();H.tag(st,'Illustrative: not the study’s effect sizes');
  },
  sae:{q:'Why do the authors suggest women may favour a transformational style?',a:'It is relatively androgynous with some nurturing aspects, so it may reduce the distrust some people show toward women who exert authority; and it resembles leading as an excellent teacher, a skill women’s past socialisation may have developed. These are the researchers’ suggested reasons, not proven causes.'},saeOwn:true,
  tma:{q:'In the light of the facts presented on gender differences in leadership style, do you agree that females are the most effective leaders?',outline:['Summarise Eagly et al.: small average differences; women somewhat more transformational','Report the 360 findings: different strengths; bosses rate both equally effective','Weigh the methodological shortcomings','Argue a position with evidence; note overlap between individuals','Conclude: no one right way to lead; fit style to organisation']},
  quiz:[
    {q:'Eagly et al. (2003) combined how many studies?',o:['12','45','86','170'],a:1,w:'45 published and unpublished studies.'},
    {q:'On which transactional behaviour did women score higher?',o:['Using punishment','Rewarding employees for good performance','Laissez-faire','Management by exception'],a:1,w:'The only transactional aspect associated with positive outcomes.'},
    {q:'According to the course, bosses rated men and women managers’ overall effectiveness as…',o:['Men higher','Women much higher','Equal','Not measured'],a:2,w:'Peers and direct reports rated women slightly higher.'},
    {q:'Which does the course call the most serious limitation of gender-leadership studies?',o:['Small font','Uncontrolled differences between the groups compared','Too many studies','Use of bosses as raters'],a:1,w:'Differences in job, level, experience and culture confound results.'}
  ],
  card:[{h:'Styles',items:['Transformational: inspire and develop','Transactional: exchange reward and punishment','Laissez-faire: avoid responsibility']},{h:'Research shortcomings',items:['Small samples','Narrow definitions','Self-report','Non-leader subjects','Uncontrolled group differences']}]
});
})();
