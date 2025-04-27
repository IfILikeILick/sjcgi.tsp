
;interface AssociativeArray<RangeType> { [key :string] :RangeType; }

//
 /*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
//

((  ( globje_ :(()=>(AssociativeArray<any>))

)=> { let game= ''; // 'e2e4&e7e5&g1f3&'; // =to play black; NB: trailing '&' is reqd

      const globje= globje_(); globje;
      const stobje= { _: {}, __: {}, }; stobje; // TODO= FIX= types
      ;;type stobje_t_= typeof stobje; // TODO?= MOVE&USE (or LOSE)
      ;
      const veracity= true; const falsity= false; veracity; falsity;
      function atPlay() :boolean { return (location.pathname)==='/play/'; } // atPlay;
      const set_timeout= (ms :number
                        )=>(fn :(d :any)=>any, ...args :any[]
                        )=> setTimeout(fn, ms, ...args);
//
            set_timeout(0)(()=>{ // unnecessary //// TODO= LOSE= 'NONONO', nextish
//

const decomposure= /(?:\/-?@?|-?\d+(?:\.\d+)?[-@]|-?[A-Za-z]\w*[-@]|-_\w*[-@]|_[-\.].*?_\._[-@])/g;
const decompose= (it :string, NO= '#NONONO:-') :RegExpMatchArray=> (it.match(decomposure) || [NO+it]);
const precomposer= (it :string) :string=> ('/' + ((it||'')+'/').replace(/\//g, '@/'));
const decofilter= (it :string, at :number, sa :string[]) :boolean => { at; sa; // discard "/..."
  return it.charCodeAt(0) !== 47;
};
const decomposing= (it :string) :number=>{ // return the type-number of the substring
  let q= 0;
  for (let p= -1;;) { const c= it.charCodeAt(++p) /**\ || 0 /**/ ; /* TODO= PICK 0 or NaN */
                      if (c!==45||p) { q= c<<1|p; break; } }
  return q; // NB: The string itself is preserved (so, any leading hyphen remains in place)
};
const decomapping= (it :string, at :number, sa :string[])=> { at; sa;
  let il= it.length, rv= NaN;
  if (il) {
    const cz= it.charCodeAt(--il); // NB: throws are somewhat inconsistent wrt length:-
    if (cz === 45 || cz === 32     // TODO= USE; LOSE= '@'

|| cz === 64 // What about using 37, anyway?  SP would be best, I suppose?  Tricky one.

    ) {} else throw 'Not at 110 on 20250422 at 1744';
    if (it.charCodeAt(0) !== 95) {} else if ((il-= 3) >= 2) {} // throw invalid length:
                                    else throw 'Not at 111 on 20250422 at 2241';
    rv= decomposing(it);
    it= it.substring(rv!==190? 0: 2, il); // *can* yield an empty string, ie not throw
    sa[at]= it+'#'+rv;
  }
  return rv;
};/**\
const f_out= function (this :number[], v :string, i :number, a :string[]) :void { v; a;
  const t= this[i]; t;
};/**/
type eo_t_= { _  :AssociativeArray<number>;
              __ :AssociativeArray<string>;
              it :(number|string|null);     };
;
const emptyobj= () :eo_t_=> {
  const n= {} as AssociativeArray<number>;
  const s= {} as AssociativeArray<string>;
  const rv= { _: n, __: s, it: null, };
  return rv;
};
const f_in_= (t_ :number[]
          )=>(rv :eo_t_, v :string, i :number, a :string[])=> { a;
  const t= t_[i];

if (!veracity) {} else
{
//let out_ :boolean;
const S= 1, C= 0, U= undefined as (number|undefined), N= null as (number|null); S; C;
if (((N as number)>>>0&1)>=0) {} else { throw 'Nope' }
if (((U as number)>>>0&1)>=0) {} else { throw 'Nope' }
//throw 'OK';
}

if (veracity) {
  const pre= t>>>0&1;
       if (t===190) rv.it= v;
  else if ((t-96>>>0)<20 || t===91) rv.it= 0-parseFloat(v);
  else if (t!==191

|| v.length<2 // TODO= LOSE

          ) {}
  else if ('number' === typeof rv.it) { rv._[v.substring(pre)]= rv.it; }
       else if ('string' === typeof rv.it) { rv.__['$'+v.substring(pre)]= rv.it; }
       else if (rv.it === null) {}
//       else if ('object' === (typeof (rv.it))) {}
       else throw 'Not at 138 on 20250423 at 2343';

} else switch (0) {} // TODO= LOSE tests, above
  return rv;
};

const decomposer= (it :string) =>{
  it= precomposer(it);  const il= it.length;
  const sa__= decompose(it), sj= sa__.join(''), sl= sj.length;
//console.log("\n" + it.length + it + "\" -> " + JSON.stringify(sa) + " # = " + sl);
  if (sl===il || !atPlay()) {} else throw 'Not at 121 on 20250422 at 1732'; // TODO?= better (ideally)
  const a= sa__.filter(decofilter);
  const t= a.map(decomapping);
//  a.forEach(f_out, t);
  const rv= a.reduceRight(f_in_(t), emptyobj());

console.log(''+a.join('¬'));
  return rv;
};
const patches= ''
  + 'HALVE' + 'HH42' // +42
  + 'HHUFF' + 'H032' // -32
//+ 'HULCE' + 'HH55' // -32 // TODO?= FIX or REPORT= not a string (which it isn't!)
  + 'HHOPE' + 'HH3Q2808' // +3...
  + 'HUQxyUQUQU' + 'HUQyzUQUQU' + 'HUQxyzUQUQU';

const patch4decomposer= ('/'+patches+'/')
                        .replace(/Q/g, '.').replace(/U/g, '_').replace(/H/g, '-');



const decomposer_patch= (path :string) :eo_t_=>{ if (falsity) return 'No stobje!' as unknown as eo_t_; else {
  const it = decomposer(
    
    
path!=="/play/"? path: patch4decomposer);


//  const it :stobje_t_= it_; stobje= it;
  stobje._= it._;  stobje.__= it.__;
  return it;
}};

(((path :string)=>{ const it= decomposer_patch(path);
                    console.log("At 138 it's " + '\"' + JSON.stringify(it) + '\"');
})(location.pathname));

//
                                 }); // END timeout

            set_timeout(101)(()=>{ // unnecessary
//
if (atPlay()) {} else
set_timeout(666)(()=>{ const goaw= globje as Window;
                       const gdoc= goaw.document;
  const para1= gdoc.getElementById("para1") as HTMLParagraphElement | null;
  const percent= (stobje._ as


AssociativeArray<number>


                 )['_lOl'] || 300;

  if (!para1) { } else { ; para1.style.fontSize= ''+percent+'%'; }
                     }); // END inner timeout

 /*\ \**/ /**\ \**/ /**\ \**/

;type mP_t_= (s :string, n :number) => string; // TODO?= LOSE somehow
;
const makePieces= (overrides :AssociativeArray<number>, prefix= '_') :mP_t_=> { // TODO= ( not {
  const qf= (s :string, n? :number
/**/ | null /**/ )=> {
{
const c= s.charCodeAt(0) & 31, x= c ^ (c&3? c&1: 16);
//const z= 0o3257107746>>>((c>>1)*3-(c&3? 0: 24)) & 7;
const y= (0o4360210057>>>x+(x>>1) & 7)-1;
n= n ?? null;
if ('object'!==typeof n) {
if (y===n) {} else { console.error("Synth'd "+y+' not '+n); /**\ throw 'OOPS'; /**/ }
} else { n= y; }
}
    const twin= overrides[prefix+s] || (n? (n+9811)*100001+6: 16000183); // TODO= NBSP II
    return String.fromCharCode(twin/100000)+String.fromCharCode(twin%100000);
  };
  return qf; // PRO TEM
};
//;type mP_t_out= typeof (makePieces({}));

const haveFun= (k= 'ohnodratitbrokesomehowwhatadamnedshame')=> { let s= k, q= k, c= 18;
  for (let v= 0-503161950>>>1; v; v>>>= 5) {
    const p= String.fromCharCode(c+64) + String.fromCharCode(c+96) + s;
    const b= c&30, e= v&31, d= e+2&30;
    const t= k.slice(d, b); /*         console.log(
        (p+':   ').slice(0, 6) + (p.length>5? '[..]: (': '      (') + (' '+c).slice(-2)
      + '); next, ' + (e&30) + ' to ' + b + ' needs ' + t.length + '. '); /**/
    q= p + q;  s= t;  c= e;
  }
  return q;
}

function toLose(overrides :AssociativeArray<number>, ..._ :any[]) {
  const f= makePieces(overrides);
/*
if (veracity) {} else /**/ return haveFun() + '\n' /**\

  return '' /**/
    + f('x', 0) + '' + f('p', 6) + '' + f('b', 4) + 'ohnofu'
    + f('k', 1) + 'ck'
    + f('n', 5) + '' + f('q', 2) + '' + f('r', 3) + 'itbrokesomehow'
    ;
}

const charCodes= (s :string)=> ( 'FINALLY:-\n'
  + s.split('').map( (c)=>('x 0x'+c.charCodeAt(0).toString(16)) ).join()
  + '\n' + toLose({}, s)
);

// SYMS= " ·•□■○●◎◉△▲☆★◇◆ ☖☗ ♥♠♣ ↑↓ ±× †‡ ·• ←↔→ ⇐⇔⇒ wʙx ⚐⚑ ♔♚♕♛♖♜♗♝♘♞♙♟"
const the_squares_= (pref :string, twice= 2       // syms= pref+'△▲ohnofu□■ck☆★○●◇◆itbrokesomehow_•_±×◎↑↓';
              )=>(idy :number                     // syms= pref+'♗♝○hn◉fu♔♚ck♘♞♕♛♖♜itbrokesomehow_·•●_±×◎↑↓';
              )=>(it_ :string, idx :number)=>{ const syms= pref+'△▲○hn●fu□■ck⚐⚑♡♥◇◆itbrokesomehow_•_±×◎↑↓☖☗';
  if (!!!veracity) {} else if ((twice>>>= 1)===0) {} else { console.log(charCodes(syms)); }
  const it= it_.trim();  if (idx+7>>>3^1) return it; // 1..8 only
  const alph= ( ((idx+idy&1? ' ': '-')+it).slice(-1).charCodeAt(0)+(it.length!==2? 0: 32) )&127;
  const alph2= alph>>>5, alph5= alph&31; // 1..3 <=> sq, wh, bl;  whsq, blsq <=> 32, 45; etc; etc
  const sym= syms.charAt(alph2>>>1? (alph&3? alph5&30: 0)+alph2: alph5&1);
// console.log("It's a '"+sym+"': "+it_);
  return sym;
};
const a_square= the_squares_(' ·○●'); // TODO= '◎' and NBSP
const o_square= the_squares_(' ·↓↑');
const e_square= the_squares_(' ·↑↓');  a_square(0)('', 0);

const a_rank= (unrotated :number
           )=>(it :string, idy :number)=>{
  const the_squares= unrotated? e_square: o_square; a_square;
  const the_square= !!falsity? the_squares: a_square;
  return (it+it.slice(0, 2)).split('\|').map(the_square(idy)).join('&nbsp;'); // TODO= NBSPs
}

 /*\ \**/ /**\ \**/

async function dostAsyncly(elem :HTMLParagraphElement, field :HTMLTextAreaElement, what :string, move :string) {
  const alpha= await fetch(what); // const response = await fetch(url);
  if (alpha.ok) {} else {
    console.error('Got '+alpha.status+' from '+what);
    return false;
  }
  const beta= await alpha.text();
  if (beta.indexOf('llegal') < 0) {} else return beta;
  const gamma= beta.split('\n');
  const unrotated= (gamma[gamma.length-9].trim().charCodeAt(0)+7<<3 || 0)/7 >>> 3 ^ 8;
  const reply= gamma[gamma.length-10].trim() || null;
  if (unrotated<2 && reply && reply.length>>>1===2) {} else return beta;
  game+= move + reply + '&';  field.value= '';
  const board= gamma.slice(-9, -1).map(a_rank(unrotated)).join('<br />');
  const upper= unrotated? '◉ a b c d e f g h ◉': '◎ h g f e d c b a ◎';
  const lower= unrotated? '◎ a b c d e f g h ◎': '◉ h g f e d c b a ◉';
  const rslt= upper + '<br />' + board + '<br />' + lower;

  if (elem) elem.innerHTML= rslt; else console.log(rslt);

  return true;
}

function dostSyncly(at :string, it :string) { at;
  const para1= globje['para1_'] as HTMLParagraphElement | null;
  const text1= globje['text1_'] as HTMLTextAreaElement | null;

  if (veracity) {} else { const qf= (x :string)=>(e_square(0)(x, 0));
                          console.log("It's "+it
  + qf(' ')  + qf('P')  + qf('b')
  + qf('N')  + qf('r')  + qf('Q')
  + qf('K')  + qf('k')  + qf('q')    ); }

  if (!text1) {} else if (!para1) { ; // TODO= erase?
               } else if (it.length>>>1 !== 2) {} else { // TODO= ||atPlay()
    const move= it? it + '&': '';
    const ante= "http://localhost/cgi-bin/sj5s.sh?d&force&st?5&";
    const post= "go&&d&quit";
    const prom= dostAsyncly(para1, text1, ante+game+move+post, move); return prom;
  }
  return null;
}

 /*\ \**/ /**\ \**/ /**\ \**/

globje['dostSyncly']= dostSyncly;

if (veracity) {} else { const _out :domaintypeof_dostSyncly= dostSyncly; _out; } // typecheck

console.log("At 281 it's an " + typeof (
    ((( ()=>{} ).constructor('return this;')
    () as { [key :string] :any; })
    ['dostSyncly'] as domaintypeof_dostSyncly)
    ('','e2e4')
  ));

//
}); // END timeout

//
})(   // FROM:= const globje= ( ()=>{} ).constructor('return this;')() as Obje;
    ( ()=>{} ).constructor('return this;')
//
)); // END main

//
 /*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
//

;type domaintypeof_dostSyncly= (at :string, it :string)=>void;
;
