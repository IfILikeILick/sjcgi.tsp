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
//
/*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
//
((() => {
    let game = ''; // 'e2e4&e7e5&g1f3&'; // =to play black; NB: trailing '&' is reqd
    //
    const veracity = true;
    const falsity = false;
    veracity;
    falsity;
    const set_timeout = (ms) => (fn, ...args) => setTimeout(fn, ms, ...args);
    set_timeout(0)(() => {
        //
        ;
        ;
        const globje = (() => { }).constructor('return this;')();
        /*\ \**/ /**\ \**/ /**\ \**/
        // SYMS= " ·•□■○●◎◉△▲☆★◇◆ ☖☗ ♥♠♣ ↑↓ ±× †‡ ·• ←↔→ ⇐⇔⇒ wʙx ⚐⚑ ♔♚♕♛♖♜♗♝♘♞♙♟"
        const the_squares_ = (pref, twice = 2 // syms= pref+'△▲ohnofu□■ck☆★○●◇◆itbrokesomehow_•_±×◎↑↓';
        ) => (idy // syms= pref+'♗♝○hn◉fu♔♚ck♘♞♕♛♖♜itbrokesomehow_·•●_±×◎↑↓';
        ) => (it_, idx) => {
            const syms = pref + '△▲○hn●fu□■ck⚐⚑♡♥◇◆itbrokesomehow_•_±×◎↑↓☖☗';
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
            return sym;
        };
        const a_square = the_squares_(' ·○●'); // TODO= '◎' and NBSP
        const o_square = the_squares_(' ·↓↑');
        const e_square = the_squares_(' ·↑↓');
        const a_rank = (unrotated) => (it, idy) => {
            const the_squares = unrotated ? e_square : o_square;
            a_square;
            const the_square = !!falsity ? the_squares : a_square;
            return (it + it.slice(0, 2)).split('\|').map(the_square(idy)).join('&nbsp;');
        };
        /*\ \**/ /**\ \**/
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
                const unrotated = (gamma[gamma.length - 9].trim().charCodeAt(0) + 7 << 3 || 0) / 7 >> 3 ^ 8;
                const reply = gamma[gamma.length - 10].trim() || null;
                if (unrotated < 2 && reply && reply.length >>> 1 === 2) { }
                else
                    return beta;
                game += move + reply + '&';
                field.value = '';
                const board = gamma.slice(-9, -1).map(a_rank(unrotated)).join('<br />');
                const upper = unrotated ? '◉ a b c d e f g h ◉' : '◎ h g f e d c b a ◎';
                const lower = unrotated ? '◎ a b c d e f g h ◎' : '◉ h g f e d c b a ◉';
                const rslt = upper + '<br />' + board + '<br />' + lower;
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
        /*\ \**/ /**\ \**/ /**\ \**/
        if (veracity) { }
        else {
            const _ = dostSyncly;
            _;
        } // typecheck
        globje['dostSyncly'] = dostSyncly;
        //
    });
    set_timeout(666)(() => {
        //
        var _a;
        function atPlay() { return (location.pathname) === '/play/'; }
        atPlay;
        const decomposure = /(?:\/-?@?|-?\d+(?:\.\d+)?[-@]|-?[A-Za-z]\w*[-@]|-_\w*[-@]|_[-\.].*?_\._[-@])/g;
        const decompose = (it, NO = '#NONONO:-') => (it.match(decomposure) || [NO + it]);
        const precomposer = (it) => ('/' + ((it || '') + '/').replace(/\//g, '@/'));
        const decofilter = (it, at, sa) => {
            at;
            sa; // discard "/..."
            return it.charCodeAt(0) !== 47;
        };
        const decomposing = (it) => {
            let q = 0;
            for (let p = -1;;) {
                const c = it.charCodeAt(++p) /**\ || 0 /**/;
                if (c !== 45 || p) {
                    q = c << 1 | p;
                    break;
                }
            }
            return q;
        };
        const decomapping = (it, at, sa) => {
            at;
            sa;
            let il = it.length, rv = NaN;
            if (il) {
                const cz = it.charCodeAt(--il); // NB: throws are somewhat inconsistent wrt length:-
                if (cz === 45 || cz === 32 // TODO= USE; LOSE= '@'
                    || cz === 64 // What about using 37, anyway?  SP would be best, I suppose?  Tricky one.
                ) { }
                else
                    throw 'Not at 110 on 20250422 at 1744';
                if (it.charCodeAt(0) !== 95) { }
                else if ((il -= 3) >= 2) { } // throw invalid length:
                else
                    throw 'Not at 111 on 20250422 at 2241';
                rv = decomposing(it);
                it = it.substring(rv !== 190 ? 0 : 2, il); // *can* yield an empty string, ie not throw
                sa[at] = it + '#' + rv;
            }
            return rv;
        }; /**\
        const f_out= function (this :number[], v :string, i :number, a :string[]) :void { v; a;
          const t= this[i]; t;
        };/**/
        const emptyobj = () => {
            const n = {};
            const s = {};
            const rv = { _: n, __: s, it: null, };
            return rv;
        };
        const f_in_ = (t_) => (rv, v, i, a) => {
            a;
            const t = t_[i];
            if (veracity) {
                const ptv = (t >>> 0 & 1) !== 0;
                if (t === 190)
                    rv.it = v;
                else if ((t - 96 >> 0) < 20) {
                    const nat = parseFloat(v);
                    rv.it = ptv ? 0 - nat : nat;
                }
                else if (t !== 95) { }
                else if ('number' === typeof rv.it) {
                    rv._[v] = rv.it;
                }
                else if ('string' === typeof rv.it) {
                    rv.__[v] = rv.it;
                }
                else if (rv.it === null) { }
                //       else if ('null' === (typeof (rv.it))) {}
                else
                    throw 'Not at 138 on 20250423 at 2343';
            }
            else
                switch (t) { // TODO= LOSE= switch; x*10**y; etc etc
                    case 190:
                        rv.it = v;
                        break;
                    case 96:
                    case 103:
                    case 105:
                        rv.it = parseFloat(v);
                        break;
                    default: if ('number' === typeof rv.it) {
                        rv._[v] = rv.it;
                    }
                    else if ('string' === typeof rv.it) {
                        rv.__[v] = rv.it;
                    }
                    else if (rv.it === null) { }
                    //        else if ('null' === (typeof (rv.it))) {}
                    else
                        throw 'Not at 138 on 20250423 at 2343';
                }
            return rv;
        };
        const decomposer = (it) => {
            it = precomposer(it);
            const il = it.length;
            const sa__ = decompose(it), sj = sa__.join(''), sl = sj.length;
            //console.log("\n" + it.length + it + "\" -> " + JSON.stringify(sa) + " # = " + sl);
            if (sl === il || !atPlay()) { }
            else
                throw 'Not at 121 on 20250422 at 1732'; // TODO?= better (ideally)
            const a = sa__.filter(decofilter);
            const t = a.map(decomapping);
            //  a.forEach(f_out, t);
            const rv = a.reduceRight(f_in_(t), emptyobj());
            console.log('' + a.join('¬'));
            return rv;
        };
        const patches = ''
            + 'HALVE' + 'HHUFF'
            + 'HH42' + 'H032' + 'HH3Q2808'
            + 'HUQxyUQUQU' + 'HUQyzUQUQU' + 'HUQxyzUQUQU';
        const patch4decomposer = ('/' + patches + '/')
            .replace(/Q/g, '.').replace(/U/g, '_').replace(/H/g, '-');
        const decomposer_patch = (it) => {
            if (falsity)
                return 'OUTOUTOUT';
            else
                return JSON.stringify(decomposer(it !== "/play/" ? it : patch4decomposer));
        };
        console.log("It's "
            + ((_a = (() => { }).constructor('return this;')()['dostSyncly']('', 'e2e4')) !== null && _a !== void 0 ? _a : '\"' + decomposer_patch(location.pathname) + '\"'));
        //
    });
    //
})());
//
/*\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/
//
;
