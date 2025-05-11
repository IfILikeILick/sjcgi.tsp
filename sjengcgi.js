/**\ vim: set syntax=typescript :miv -+- very alpha MATE -:= /**/
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
//
/**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
//
(((globje_
/////
) => {
    let game = ''; // 'e2e4&e7e5&g1f3&'; // =play black; trailing '&' is reqd!
    const globje = globje_();
    globje;
    const stobje = { _: {}, __: {}, };
    stobje; // TODO= FIX= types
    ;
    ;
    const veracity = true;
    const falsity = false;
    veracity;
    falsity;
    function atPlay() { return (location.pathname) === '/play/'; }
    const set_timeout_old = (ms) => (fn, ...args) => setTimeout(fn, ms, ...args);
    //
    /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
    //
    function theCB(it_, is_) {
        switch (it_) {
            case 'LitheRock':
                {
                    const rock_lib = is_;
                    if (rock_lib) { }
                    else
                        throw 'Not loaded at 31: ' + it_;
                    const lava_lib = rock_lib['theLava'];
                    console.log('Obtained lava[](): ' + JSON.stringify(lava_lib));
                    if (lava_lib) { }
                    else
                        throw 'Not fitted at 33: theLava';
                    lava_lib.wait4doc(undefined)()('para1', 'text1'); // the HTML elems
                }
                break;
            case 'LithePath':
                {
                    const path_lib = is_;
                    if (path_lib) { }
                    else
                        throw 'Not loaded at 38: ' + it_;
                    const path_obj = path_lib['pathObje']();
                    console.log('Obtained path[][]: ' + JSON.stringify(path_obj));
                    if (path_obj) { }
                    else
                        throw 'Not fitted at 41: pathObje()';
                    stobje._ = path_obj['_'];
                    stobje.__ = path_obj['__'];
                    calling(); // forward
                }
                break;
            default: throw 'Not a known Lithe at 44 on 20250510 at 2254';
        }
    }
    //
    /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
    //
    if (!!veracity) {
        globje.NML11th_LitheRock.theLava.wait4all(theCB, '', 'Path');
    }
    else
        ((() => {
            //
            let genus_, gen_spec; // NB: Careful: these are assigned late
            const allLoaded = {};
            //
            {
                const out = undefined;
                out;
            }
            //
            const prepare = (prfx, genus = 'NML11th', self = 'Rock') => (...list) => {
                genus_ = genus += '_';
                gen_spec = genus + prfx + self;
                genus_;
                list[list.length] = self;
                list[list.length] = '';
                return list.map((it) => (it ? prfx + it : ''));
            };
            //
            const execute = ((() => {
                //
                let $, $$;
                //
                if (veracity) { }
                else {
                    const _out = undefined;
                    _out;
                    const __out = undefined;
                    __out;
                }
                //
                const dothejob = (cb, libs, wait0) => {
                    //
                    const rock_1st = globje[gen_spec];
                    $ = rock_1st;
                    $$ = rock_1st.theLava;
                    const wait4 = (it, to, wait // TODO= NIX nmlName
                    ) => ($.waitFor(to, $.nmlName, $$._15ns26sequence(wait)))(it);
                    const dothejob_ = (todo, wait = 1) => (obj) => {
                        console.log('Doing #' + todo + ' in' + JSON.stringify(libs));
                        const at = libs[todo];
                        const it = libs[--todo]; // console.log('\n= '+it+' after '+at);
                        const to = dothejob_(todo);
                        const link = (s = at, o = obj) => {
                            if (s) { }
                            else
                                throw 'Not at 62 on 20250505 at 2355';
                            allLoaded[s] = o;
                            console.log(s + ' seems OK');
                            return s;
                        };
                        if (!at) {
                            ;
                            ;
                        }
                        else {
                            if (libs[todo + 2]) { }
                            else {
                                $ = obj;
                                $$ = obj.theLava;
                            }
                            cb(link(), obj);
                        }
                        if (!it) { }
                        else
                            return wait4(it, to, wait);
                        return undefined; // TODO= tighten-up types
                    };
                    return dothejob_(libs.length - 1, wait0);
                };
                return dothejob;
                //
            })());
            //
            execute(theCB, prepare('Lithe')('', 'Path'), 0)(undefined);
            //
        })());
    //
    /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
    //
    function calling() {
        set_timeout_old(0)(() => {
            //
            if (atPlay()) { }
            else
                set_timeout_old(1984)(() => {
                    const goaw = globje;
                    const gdoc = goaw.document;
                    const para1 = gdoc.getElementById("para1");
                    if (!para1) { }
                    else {
                        const numbers = stobje._;
                        para1.style.fontSize = '' + (numbers['_z'] || 222) + '%';
                    }
                });
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            ;
            const makePieces = (overrides, prefix = '_') => {
                const qf = (s, n /**/) => {
                    {
                        const c = s.charCodeAt(0) & 31, x = c ^ (c & 3 ? c & 1 : 16);
                        //const z= 0o3257107746>>>((c>>1)*3-(c&3? 0: 24)) & 7;
                        const y = (0o4360210057 >>> x + (x >> 1) & 7) - 1;
                        n = n !== null && n !== void 0 ? n : null;
                        if ('object' !== typeof n) {
                            if (y === n) { }
                            else {
                                console.error("Synth'd " + y + ' not ' + n); /**\ throw 'OOPS'; /**/
                            }
                        }
                        else {
                            n = y;
                        }
                    }
                    const twin = overrides[prefix + s] || (n ? (n + 9811) * 100001 + 6 : 16000183); // TODO= NBSP II
                    return String.fromCharCode(twin / 100000) + String.fromCharCode(twin % 100000);
                };
                return qf; // PRO TEM
            };
            //;type mP_t_out= typeof (makePieces({}));
            const haveFun = (k = 'ohnodratitbrokesomehowwhatadamnedshame') => {
                let s = k, q = k, c = 18;
                for (let v = 0 - 503161950 >>> 1; v; v >>>= 5) {
                    const p = String.fromCharCode(c + 64) + String.fromCharCode(c + 96) + s;
                    const b = c & 30, e = v & 31, d = e + 2 & 30;
                    const t = k.slice(d, b); /*         console.log(
                        (p+':   ').slice(0, 6) + (p.length>5? '[..]: (': '      (') + (' '+c).slice(-2)
                      + '); next, ' + (e&30) + ' to ' + b + ' needs ' + t.length + '. '); /**/
                    q = p + q;
                    s = t;
                    c = e;
                }
                return q;
            };
            function toLose(overrides, ..._) {
                const f = makePieces(overrides);
                /*
                if (veracity) {} else /**/ return haveFun() + '\n' /**\
                
                  return '' /**/
                    + f('x', 0) + '' + f('p', 6) + '' + f('b', 4) + 'ohnofu'
                    + f('k', 1) + 'ck'
                    + f('n', 5) + '' + f('q', 2) + '' + f('r', 3) + 'itbrokesomehow';
            }
            const charCodes = (s) => ('FINALLY:-\n'
                //+ s.split('').filter( (c)=>(c.charCodeAt(0)-97)>>>0>=26 ).map( (c)=>('x0x'+c.charCodeAt(0).toString(16)) ).join()
                + s.split('').filter((c) => (c.charCodeAt(0) - 97) >>> 0 >= 26).map((c) => (c + c.charCodeAt(0).toString(10))).join()
                + '\n' + toLose({}, s));
            // SYMS= " ·•□■○●◎◉△▲☆★◇◆ ☖☗ ♥♠♣ ↑↓ ±× †‡ ·• ←↔→ ⇐⇔⇒ wʙx ⚐⚑ ♔♚♕♛♖♜♗♝♘♞♙♟"
            const the_squares__ = (pref, once = 2 // syms= pref+'△▲ohnofu□■ck☆★○●◇◆itbrokesomehow_•_±×◎↑↓';
            ) => (idy // syms= pref+'♗♝○hn◉fu♔♚ck♘♞♕♛♖♜itbrokesomehow_·•●_±×◎↑↓';
            ) => (it_, idx) => {
                const syms = pref + '△▲○hn●fu□■ck⚐⚑♡♥◇◆itbrokesomehow_•_±×◎↑↓☖☗';
                if (!!!veracity) { }
                else if ((once >>>= 1) === 0) { }
                else {
                    console.log(charCodes(syms));
                }
                const it = it_.trim();
                if (idx + 7 >>> 3 ^ 1)
                    return it; // 1..8 only
                const alph = (((idx + idy & 1 ? ' ' : '-') + it).slice(-1).charCodeAt(0) + (it.length !== 2 ? 0 : 32)) & 127;
                const alph2 = alph >>> 5, alph5 = alph & 31; // 1..3 <=> sq, wh, bl;  whsq, blsq <=> 32, 45; etc; etc
                const sym = syms.charAt(alph2 >>> 1 ? (alph & 3 ? alph5 & 30 : 0) + alph2 : alph5 & 1);
                // console.log("It's a '"+sym+"': "+it_);
                return sym;
            };
            const the_squares_ = (_) => {
                const f = makePieces(stobje._);
                return the_squares__(''
                    + f('x', 0) + '' + f('p', 6) + '' + f('b', 4) + 'ohnofu'
                    + f('k', 1) + 'ck'
                    + f('n', 5) + '' + f('q', 2) + '' + f('r', 3) + 'itbrokesomehow');
            };
            const a_square = the_squares_(' ·○●'); // TODO= '◎' and NBSP
            const o_square = the_squares_(' ·↓↑');
            const e_square = the_squares_(' ·↑↓');
            a_square(0)('', 0);
            console.warn('(PREV)');
            const a_rank = (unrotated) => (it, idy) => {
                const the_squares = unrotated ? e_square : o_square;
                a_square;
                const the_square = !!falsity ? the_squares : a_square;
                return (it + it.slice(0, 2)).split('\|').map(the_square(idy)).join('&nbsp;'); // TODO= NBSPs
            };
            /*\ \**/ /**\ \**/
            const rank09__ = (it, mi = 201) => {
                const so = it >= 0;
                const un = so ? it : 0 - it;
                const by = it / un;
                let at = un << 1;
                it = mi - by * 9;
                let rv = '';
                for (let i = 9 + 1; --i; at = it += by << 1)
                    rv += '&#' + (at >>> 1) + ';&nbsp;';
                rv += '&#' + un + ';';
                console.warn(rv);
                return rv;
            };
            ;
            ;
            const rank09_ = () => {
                return {
                    0: rank09__(-9673),
                    1: rank09__(9678),
                    8: rank09__(9673),
                    9: rank09__(-9678),
                };
            };
            const rank09 = ((() => {
                let once = 2;
                let obje = undefined;
                return () => ((once >>= 1) ? obje = rank09_() : obje);
            })());
            function dostAsyncly(elem, field, what, move) {
                return __awaiter(this, void 0, void 0, function* () {
                    const alpha = yield fetch(what); // const response = await fetch(url);
                    if (alpha.ok) { }
                    else {
                        console.error('Got ' + alpha.status + ' from ' + what);
                        return false;
                    }
                    const beta = yield alpha.text();
                    if (beta.indexOf('llegal') < 0) { }
                    else
                        return beta;
                    const gamma = beta.split('\n');
                    const unrotated = (gamma[gamma.length - 9].trim().charCodeAt(0) + 7 << 3 || 0) / 7 >>> 3 ^ 8;
                    const reply = gamma[gamma.length - 10].trim() || null;
                    if (unrotated < 2 && reply && reply.length >>> 1 === 2) { }
                    else
                        return beta;
                    game += move + reply + '&';
                    field.value = '';
                    const board = gamma.slice(-9, -1).map(a_rank(unrotated)).join('<br />');
                    //  const upper= unrotated? '◉ a b c d e f g h ◉': '◎ h g f e d c b a ◎';
                    //  const lower= unrotated? '◎ a b c d e f g h ◎': '◉ h g f e d c b a ◉';
                    //  const rslt= upper + '<br />' + board + '<br />' + lower;
                    const edges = rank09();
                    const rslt = edges[9 ^ unrotated] + '<br />' + board + '<br />' + edges[unrotated];
                    if (elem)
                        elem.innerHTML = rslt;
                    else
                        console.log(rslt);
                    return true;
                });
            }
            function dostSyncly(at, it) {
                at;
                const para1 = globje['para1_'];
                const text1 = globje['text1_'];
                if (veracity) { }
                else {
                    const qf = (x) => (e_square(0)(x, 0));
                    console.log("It's " + it
                        + qf(' ') + qf('P') + qf('b')
                        + qf('N') + qf('r') + qf('Q')
                        + qf('K') + qf('k') + qf('q'));
                }
                if (!text1) { }
                else if (!para1) {
                    ; // TODO= erase?
                }
                else if (it.length >>> 1 !== 2) { }
                else { // TODO= ||atPlay()
                    const move = it ? it + '&' : '';
                    const ante = "http://localhost/cgi-bin/sj5s.sh?d&force&st?5&";
                    const post = "go&&d&quit";
                    const prom = dostAsyncly(para1, text1, ante + game + move + post, move);
                    return prom;
                }
                return null;
            }
            /*\ \**/ /**\ \**/ /**\ \**/
            globje['dostSyncly'] = dostSyncly;
            if (veracity) { }
            else {
                const _out = dostSyncly;
                _out;
            } // typecheck
            console.log("At 281 it's an " + typeof ((() => { }).constructor('return this;')()['dostSyncly']('', 'e2e4')));
            console.log('' + JSON.stringify(rank09()));
            //
        }); // END timeout
    } // END calling
    //
})(// FROM:= const globje= ( ()=>{} ).constructor('return this;')() as Obje;
(() => { }).constructor('return this;')
//
)); // END main
//
/*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
//
;
