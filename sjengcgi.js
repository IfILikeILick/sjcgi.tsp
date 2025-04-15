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
((() => {
    var game = ''; // 'e2e4&e7e5&g1f3&'; // =to play black; NB: trailing '&' is reqd
    const veracity = true;
    const falsity = false;
    veracity;
    falsity;
    const set_timeout = (ms) => (fn, ...args) => setTimeout(fn, ms, ...args);
    set_timeout(0)(() => {
        ;
        ;
        const globje = (() => { }).constructor('return this;')();
        // SYMS= " ·•□■○◎●△▲☆★◇◆ ♥♠♣ ↑↓ ±× †‡ ·• ←↔→ ⇐⇔⇒ ʘwʙxθɵ ʘ◎ʘ øʘθØø"
        const the_squares_ = (pref, twice = 2 // syms= pref+'△▲ohnofu±×ck☆★□■◇◆itbrokesomehow_•_';
        ) => (idy // syms= pref+'△▲ohnofu□■ck☆★○●◇◆itbrokesomehow_•_±×_';
        ) => (it_, idx) => {
            const syms = pref + '△▲ohnofu□■ck☆★㈜♥◇◆itbrokesomehow_•_±×_◎';
            ;
            if (veracity) { }
            else if ((twice >>= 1) === 0) { }
            else {
                console.log(syms);
            }
            const it = it_.trim();
            if (idx + 7 >>> 3 ^ 1)
                return it;
            const alph = (((idx + idy & 1 ? ' ' : '-') + it).slice(-1).charCodeAt(0) + (it.length !== 2 ? 0 : 32)) & 127;
            const alph2 = alph >> 5, alph5 = alph & 31;
            const sym = syms.charAt(alph2 >> 1 ? (alph & 3 ? alph5 & 30 : 0) + alph2 : alph5 & 1);
            // console.log("It's a '"+sym+"': "+it_);
            return sym; // String.fromCharCode(sym);
        };
        const a_square = the_squares_(' ·○●'); // TODO= '◎' and NBSP
        const o_square = the_squares_(' ·↓↑');
        const e_square = the_squares_(' ·↑↓');
        const a_rank = (parity) => (it, idy) => {
            const the_squares = parity ? o_square : e_square;
            a_square;
            const the_square = veracity ? the_squares : a_square;
            return (it + it.slice(0, 2)).split('\|').map(the_square(idy)).join('&nbsp;');
        };
        /*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
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
                const parity = (gamma[gamma.length - 11].trim().charCodeAt(0) || 0) + 15 >> 2 ^ 16;
                const reply = gamma[gamma.length - 10].trim() || null;
                if (parity < 2 && reply && reply.length >>> 1 === 2) { }
                else
                    return beta;
                game += move + reply + '&';
                field.value = '';
                const board = gamma.slice(-9, -1).map(a_rank(parity)).join('<br />');
                const edge2 = parity ? '◎ h g f e d c b a ◎' : '◎ A B C D E F G H ◎';
                const edge1 = parity ? '◎ H G F E D C B A ◎' : '◎ a b c d e f g h ◎';
                const rslt = edge1 + '<br />' + board + '<br />' + edge2;
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
            if (it.length >>> 1 !== 2) { }
            else {
                const move = it ? it + '&' : '';
                const ante = "http://localhost/cgi-bin/sj5s.sh?d&force&st?5&";
                const post = "go&&d&quit";
                const prom = dostAsyncly(para1, text1, ante + game + move + post, move);
                prom;
            }
        }
        if (veracity) { }
        else {
            var _;
            var _ = dostSyncly;
            _;
        } // typecheck
        globje['dostSyncly'] = dostSyncly;
        //
    });
    set_timeout(1230)(() => {
        console.log("It's "
            + (() => { }).constructor('return this;')()['dostSyncly']('', 'e2e4'));
        //
    });
    //
})()); /**/
;
