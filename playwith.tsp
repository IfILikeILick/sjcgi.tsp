
((()=>{ var game= ''; // 'e2e4&e7e5&g1f3&'; // =to play black; NB: trailing '&' is reqd
;;const set_timeout= (ms :number
                  )=>(fn :(d :any)=>any, ...args :any[]
                  )=>setTimeout(fn, ms, ...args);
        set_timeout(0)(()=>{ // unnecessary

;;interface Obje { [key: string]: any; };
const globje = ( ()=>{} ).constructor('return this;')() as Obje;

const para1= globje['para1_'] as HTMLParagraphElement;
const text1= globje['text1_'] as HTMLTextAreaElement;

const a_square= (idy :number
           )=>(it_ :string, idx :number)=>{
  const it= it_.trim();
  return String.fromCharCode(((idx+idy&1? ' ': '-')+it).slice(-1).charCodeAt(0)+(it.length!==2? 0: 32));
}

function a_rank(it :string, idy :number) {
  return (it+it.slice(0, 2)).split('\|').map(a_square(idy)).join('&nbsp;');
}

async function dostAsyncly(elem :HTMLParagraphElement, what :string, move :string) {
  const alpha= await fetch(what);
  const beta= await alpha.text();
  if (beta.indexOf('llegal') < 0) {} else return beta;
  const gamma= beta.split('\n');
  const reply= gamma[gamma.length-10] || null;
  if (reply) {} else return beta;
  game+= move + reply + '&';
  text1.value= '';
  const board= gamma.slice(-9, -1).map(a_rank).join('<br />');
  const edge1= board.charCodeAt(0)&1? '@ h g f e d c b a @': '@ A B C D E F G H @';
  const edge2= board.charCodeAt(0)&1? '@ H G F E D C B A @': '@ a b c d e f g h @';
  const rslt= edge1 + '<br />' + board + '<br />' + edge2;

  if (elem) elem.innerHTML= rslt; else console.log(rslt);
  return '';
}

function dostSyncly(at :string, it :string) { at;
  if (it.length>>>1 !== 2) {} else {
    const move= it + '&';
    const ante= "http://localhost/cgi-bin/sj5s.sh?d&force&st?5&";
    const post= "go&&d&quit";
    const prom= dostAsyncly(para1, ante+game+move+post, move); prom;
  }
}

globje['dostSyncly']= dostSyncly;

});
})());/**/
