
;interface AssociativeArray<RangeType> { [key: string]: RangeType; }

//
 /*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
//

((()=>{ let game= ''; // 'e2e4&e7e5&g1f3&'; // =to play black; NB: trailing '&' is reqd
//
        const veracity= true; const falsity= false; veracity; falsity;
        const set_timeout= (ms :number
                        )=>(fn :(d :any)=>any, ...args :any[]
                        )=> setTimeout(fn, ms, ...args);
              set_timeout(0)(()=>{ // unnecessary
//

;interface Obje { [key: string]: any; };
const globje= ( ()=>{} ).constructor('return this;')() as Obje;

 /*\ \**/ /**\ \**/ /**\ \**/

// SYMS= " ·•□■○●◎◉△▲☆★◇◆ ☖☗ ♥♠♣ ↑↓ ±× †‡ ·• ←↔→ ⇐⇔⇒ wʙx ⚐⚑ ♔♚♕♛♖♜♗♝♘♞♙♟"
const the_squares_= (pref :string, twice= 2       // syms= pref+'△▲ohnofu□■ck☆★○●◇◆itbrokesomehow_•_±×◎↑↓';
              )=>(idy :number                     // syms= pref+'♗♝○hn◉fu♔♚ck♘♞♕♛♖♜itbrokesomehow_·•●_±×◎↑↓';
              )=>(it_ :string, idx :number)=>{ const syms= pref+'△▲○hn●fu□■ck⚐⚑♡♥◇◆itbrokesomehow_•_±×◎↑↓☖☗';
  if (veracity) {} else if ((twice>>>= 1)===0) {} else { console.log(syms); }
  const it= it_.trim();  if (idx+7>>>3^1) return it;
  const alph= ( ((idx+idy&1? ' ': '-')+it).slice(-1).charCodeAt(0)+(it.length!==2? 0: 32) )&127;
  const alph2= alph>>>5, alph5= alph&31;
  const sym= syms.charAt(alph2>>>1? (alph&3? alph5&30: 0)+alph2: alph5&1);
// console.log("It's a '"+sym+"': "+it_);
  return sym;
};
const a_square= the_squares_(' ·○●'); // TODO= '◎' and NBSP
const o_square= the_squares_(' ·↓↑');
const e_square= the_squares_(' ·↑↓');

const a_rank= (unrotated :number)=>(it :string, idy :number)=>{
  const the_squares= unrotated? e_square: o_square; a_square;
  const the_square= !!falsity? the_squares: a_square;
  return (it+it.slice(0, 2)).split('\|').map(the_square(idy)).join('&nbsp;');
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
  const unrotated =(gamma[gamma.length-9].trim().charCodeAt(0)+7<<3 || 0)/7 >>> 3 ^ 8;
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
  const para1= globje['para1_'] as HTMLParagraphElement;
  const text1= globje['text1_'] as HTMLTextAreaElement;

  if (veracity) {} else { const qf= (x :string)=>(e_square(0)(x, 0));
                          console.log("It's "+it
  + qf(' ')  + qf('P')  + qf('b')
  + qf('N')  + qf('r')  + qf('Q')
  + qf('K')  + qf('k')  + qf('q')
  );}

  if (it.length>>>1 !== 2) {} else {
    const move= it? it + '&': '';
    const ante= "http://localhost/cgi-bin/sj5s.sh?d&force&st?5&";
    const post= "go&&d&quit";
    const prom= dostAsyncly(para1, text1, ante+game+move+post, move); prom;
  }
}

 /*\ \**/ /**\ \**/ /**\ \**/

if (veracity) {} else { const _ :typeof_dostSyncly= dostSyncly; _; } // typecheck

globje['dostSyncly']= dostSyncly;

//
});
              set_timeout(666)(()=>{ // TODO= LOSE= 'NONONO' haha
//

function atPlay() :boolean { return (location.pathname)==='/play/'; } atPlay;
const decomposure= /(?:\/-?@?|-?\d+(?:\.\d+)?[-@]|-?[A-Za-z]\w*[-@]|-_\w*[-@]|_[-\.].*?_\._[-@])/g;
const decompose= (it :string, NO= '#NONONO:-') :RegExpMatchArray=> (it.match(decomposure) || [NO+it]);
const precomposer= (it :string) :string=> ('/' + ((it||'')+'/').replace(/\//g, '@/'));
const decofilter= (it: string, at: number, sa: string[]) :boolean => { at; sa; // discard "/..."
  return it.charCodeAt(0) !== 47;
};
const decomposing= (it :string) :number=>{ // return the type-number of the substring
  let q= 0;
  for (let p= -1;;) { const c= it.charCodeAt(++p) /**\ || 0 /**/ ; /* TODO= PICK 0 or NaN */
                      if (c!==45||p) { q= c<<1|p; break; } }
  return q; // NB: The string itself is preserved (so, any leading hyphen remains in place)
};
const decomapping= (it: string, at: number, sa: string[])=> { at; sa;
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
type eo_t_= {
    _ :AssociativeArray<number>;
    __ :AssociativeArray<string>;
    it :(number|string
|null
//|undefined
        );
};
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
let out_ :boolean; const S= 1, C= 0, U= undefined as (number|undefined), N= null as (number|null); S; C;
if (((N as number)>>>0&1)>=0) {} else { throw 'Nope' }
if (((U as number)>>>0&1)>=0) {} else { throw 'Nope' }
//throw 'OK';
}

if (veracity) {
  const pre= t>>>0&1;
       if (t===190) rv.it= v;
  else if ((t-96>>>0)<20 || t===91) rv.it= 0-parseFloat(v);
  else if (t!==191

|| v.length<2

          ) {}
  else if ('number' === typeof rv.it) { rv._[v.substring(pre)]= rv.it; }
       else if ('string' === typeof rv.it) { rv.__['$'+v.substring(pre)]= rv.it; }
       else if (rv.it === null) {}
//       else if ('null' === (typeof (rv.it))) {}
       else throw 'Not at 138 on 20250423 at 2343';

} else
  switch (t) { // TODO= LOSE= switch; x*10**y; etc etc
    case 190: rv.it= v; break;
    case 96: case 103: case 105: rv.it= parseFloat(v); break;
    default: if ('number' === typeof rv.it) { rv._[v]= rv.it; }
        else if ('string' === typeof rv.it) { rv.__[v]= rv.it; }
        else if (rv.it === null) {}
//        else if ('null' === (typeof (rv.it))) {}
        else throw 'Not at 138 on 20250423 at 2343';
  }
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

const decomposer_patch= (it :string) :string=>{ if (falsity) return 'OUTOUTOUT'; else
  return JSON.stringify(decomposer(it!=="/play/"? it: patch4decomposer));
};

console.log("It's "
  + (((( ()=>{} ).constructor('return this;')
    () as { [key: string]: any; })
    ['dostSyncly'] as typeof_dostSyncly)
    ('','e2e4') ?? '\"' + decomposer_patch(location.pathname) + '\"'));

//
});

//
})());

//
 /*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
//

;type typeof_dostSyncly= (at :string, it :string)=>void;

