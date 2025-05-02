"use strict";
;
;
(((globje_) => {
    const globje = globje_();
    globje;
    const stobje = { _: {}, __: {}, };
    stobje; // TODO= FIX= types
    ;
    ;
    const pathname = globje['location'].pathname;
    const veracity = true;
    const falsity = false;
    veracity;
    falsity;
    function atPlay() { return (pathname) === '/play/'; } // atPlay;
    const set_timeout = (ms) => (fn, ...args // TODO= RESEARCH
    ) => setTimeout(fn, ms, ...args);
    //
    set_timeout(0)(() => {
        //
        ;
        ;
        const _ = { _: undefined, };
        _._ = _;
        const always = true;
        always; // const never= false; never;
        //
        /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
        /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
        /*  THE library  */ ;
        _._._._._._._._._._._._._._._._._._;
        const atNow = ((() => {
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            //// TODO= LOSE= 'NONONO', nextish
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
                    const c = it.charCodeAt(++p) /**\ || 0 /**/; /* TODO= PICK 0 or NaN */
                    if (c !== 45 || p) {
                        q = c << 1 | p;
                        break;
                    }
                }
                return q; // NB: The string itself is preserved (so, any leading hyphen remains in place)
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
                    sa[at] = it /**\ + '#' + rv /**/;
                }
                return rv;
            }; /**\
            const f_out= function (this :number[], v :string, i :number, a :string[]) :void { v; a;
              const t= this[i]; t;
            };/**/
            ;
            ;
            ;
            const emptyobj = () => {
                const n = {};
                const s = {};
                const rv = { _: n, __: s, it: null, };
                return rv;
            };
            const f_in_ = (t_) => (rv, v, i, a) => {
                a;
                const t = t_[i];
                if (!veracity) { }
                else {
                    //let out_ :boolean;
                    const S = 1, C = 0, U = undefined, N = null;
                    S;
                    C;
                    if ((N >>> 0 & 1) >= 0) { }
                    else {
                        throw 'Nope';
                    }
                    if ((U >>> 0 & 1) >= 0) { }
                    else {
                        throw 'Nope';
                    }
                    //throw 'OK';
                }
                if (veracity) {
                    const pre = t >>> 0 & 1;
                    if (t === 190)
                        rv.it = v;
                    else if ((t - 96 >>> 0) < 20 || t === 91)
                        rv.it = 0 - parseFloat(v);
                    else if (t !== 191
                        || v.length < 2 // TODO= LOSE
                    ) { }
                    else if ('number' === typeof rv.it) {
                        rv._[v.substring(pre)] = rv.it;
                    }
                    else if ('string' === typeof rv.it) {
                        rv.__['$' + v.substring(pre)] = rv.it;
                    }
                    else if (rv.it === null) { }
                    //       else if ('object' === (typeof (rv.it))) {}
                    else
                        throw 'Not at 138 on 20250423 at 2343';
                }
                else
                    switch (0) {
                    } // TODO= LOSE tests, above
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
                console.log('' + a.join('\xAC'));
                return rv;
            };
            const patches = ''
                + 'HALVE' + 'HH42' // +42
                + 'HHUFF' + 'H032' // -32
                //+ 'HULCE' + 'HH55' // -32 // TODO?= FIX or REPORT= not a string (which it isn't!)
                + 'HHOPE' + 'HH3Q2808' // +3...
                + 'HUQxyUQUQU' + 'HUQyzUQUQU' + 'HUQxyzUQUQU';
            const patch4decomposer = ('/' + patches + '/')
                .replace(/Q/g, '.').replace(/U/g, '_').replace(/H/g, '-');
            const decomposer_patch = (path) => {
                if (falsity)
                    return 'No stobje!';
                else {
                    const it = decomposer(path !== "/play/" ? path : patch4decomposer); // TODO?= USE= atPlay()
                    //  const it :stobje_t_= it_; stobje= it;
                    stobje._ = it._;
                    stobje.__ = it.__;
                    return it; // is infelicitous, but WTH
                }
            };
            (((path) => {
                const it = decomposer_patch(path);
                console.log("At 138 it's " + '\"' + JSON.stringify(it) + '\"');
            })(location.pathname));
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            const toExport = // IIFE
             ((() => {
                return {
                    atPlay, set_timeout, pathObje: ((it = patch4decomposer /**/) => decomposer(atPlay() ? it : pathname)),
                };
            })());
            const addedLib = // IIFE
             (((idealName, libToAdd) => {
                ;
                ;
                ;
                const globje = (() => { }).constructor('return this;')();
                if (globje['NO_' + idealName]) { }
                else {
                    let counter = 0 - 1; /**/
                    const suffix = () => (++counter ?
                        ('0' + counter.toString(2)).replace(/0/g, '_').replace(/1/g, '$') :
                        '_');
                    /*/ const suffix= function() { if (++counter) {} else return '_';
                     const s__= ( '0' + counter.toString(2) );
                     const s_= s__.replace(/0/g, '_'); const s= s_.replace(/1/g, '$');
                     return s; } /**/
                    let hopedName = idealName;
                    while ('undefined' !== typeof globje[hopedName])
                        hopedName = idealName + suffix();
                    globje[hopedName] = libToAdd;
                    console.log("Loaded " + idealName + " as " + hopedName);
                }
                return libToAdd;
            })('NML11th_LithePath', toExport)); /**/
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            /*  END library  */ _._._._._._._._._._._._._._._._._;
            return addedLib;
        })());
        /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
        /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
        /*  THE vectors  */ ;
        _._._._._._._._._._._._._._._._;
        ((($) => {
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            const theBest = (best, test) => ((b, t, d) => (d < 0 || !d && b < t))(best, test, test.length - best.length) ? best : test;
            const aName__ = (name, obje = globje) => Object.keys(obje)
                .filter((key) => 1 + key.search(new RegExp(name + '[$_]*')))
                .reduce(theBest);
            const aName_ = (genus, obje = globje) => (species) => aName__(genus + '_' + species, obje);
            const aName = aName_('NML11th');
            //const myName= myName_('LithePath');
            if (!always) { }
            else
                console.log('\n'
                    + JSON.stringify(aName('LithePath')) + '\n'
                    + JSON.stringify($) + '\n'
                    + JSON.stringify($.pathObje()) + '\n');
            //for (let i= 44, j= 1; --i; ) console.log(''+(j= (j>>>0<<1>>>0|j>>>1)));
            //for (let i= 4, j= 1; --i; ) console.log(''+(j= (j>>>0<<1>>>0|j>>>1)>>>0));
            //for (let i= 44, j= 0; --i; ) console.log(''+(j= ((j<<1>>>0|1)>>>0)+(j>>>1)));
            ((() => {
                const throwNaN = (whether // TODO= PICK= always throw?????
                ) => (it) => {
                    if (!whether) { }
                    else
                        throw 'NaN/risk on 20250430 at 2005';
                    return it !== null && it !== void 0 ? it : NaN;
                };
                const NaN_ = throwNaN(false);
                NaN_;
                const us01526Factory = (sh) => {
                    const k = sh & 31; // or 31 if need >25 days(!)
                    return (it) => ((it += (it >>> k | 1) >>> 0) < (-1 >>> 0) ? it : NaN_());
                };
                const strive = (dost, latest4species, ms16_, globje_ = globje) => (get_) => {
                    let ms16 = 0;
                    const f = (g) => () => {
                        const got = latest4species(get_);
                        console.log('Loaded ' + got + ' after ' + (ms16 >> 16) + 'ms');
                        if (got)
                            dost(globje_[got]);
                        else
                            set_timeout((ms16 = ms16_(ms16)) >> 16)(g(g));
                    };
                    const ff = f(f);
                    ff();
                };
                /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
                function go(it) {
                    const g = us01526Factory(it);
                    let i, j = 0;
                    const k = 999999;
                    let t = 0;
                    for (i = k; !!(j = g(j)) && --i;)
                        t += j >>> 16;
                    if (i) { }
                    else if (falsity)
                        throw 'Excessive iter.';
                    else
                        return +Infinity;
                    return /**/ (t / 60 >>> 0) / 1000.0; /*/ k-i /**/
                    ;
                }
                //  console.log('#1= '+((()=>{ const n= -1, p= n>>>1; return n>>>0|p; })()));
                console.log('#2=..' + ((() => {
                    let rv = '';
                    for (let i = 19; --i >= 0;)
                        rv += ', ' + i + ': ' + go(i);
                    return rv;
                })()));
                function st(it) {
                    console.log(JSON.stringify(it.pathObje()));
                }
                strive(st, aName, us01526Factory(3))('LithePath');
            })());
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            if (!!always) { }
            else // IIFE
                (((test) => {
                    const _ = undefined;
                    _;
                    console.log("It's a " + test);
                })('test'));
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            /*  END vectors  */ _._._._._._._._._._._._._._._._._._._;
            return;
        })(atNow));
        /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
        /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
        //
    }); // END 0ms timeout
    //
})(// FROM:= const globje= ( ()=>{} ).constructor('return this;')() as Obje;
(() => { }).constructor('return this;')
//
)); // END outermost
//
