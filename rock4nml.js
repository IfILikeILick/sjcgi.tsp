"use strict";
;
;
(((globje_) => {
    const globje = globje_();
    globje;
    const pathname = globje['location'].pathname;
    const veracity = true;
    const falsity = false;
    veracity;
    falsity;
    function atPlay() { return (pathname) === '/play/'; }
    ;
    atPlay; /*
    const set_timeout_out= (ms :number
                        )=>(fn :(...out :any[])=>void, ...args :any[]
                        )=> setTimeout(fn, ms, ...args); set_timeout_out;/**/
    ;
    ;
    const notTimeout = (setfn, rv, ...args) => (setfn(...args),
        (rv !== null && rv !== void 0 ? rv : NaN));
    const has_timeout = (may, ms) => (setfn, ...args // TODO?= ?
    ) => may(setfn, ms, ...args);
    const not_timeout /**/ /**/ = (_, __) => {
        //if (veracity) throw 'Not at 51 on 20250503 at 0046'; // TODO= better
        return undefined;
    };
    const may_timeout = (ms) => has_timeout('number' === typeof ms && !Number.isNaN(ms) ? setTimeout : notTimeout, ms !== null && ms !== void 0 ? ms : NaN);
    const set_timeout /**/ /**/ = (ms) => ('number' === typeof ms && !Number.isNaN(ms) ?
        has_timeout :
        not_timeout)(setTimeout, ms);
    //
    may_timeout(null)(() => {
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
            const theBest = (best, test) => ((b, t, d) => (d < 0 || !d && b < t))(best, test, test.length - best.length) ? best : test;
            const theName = (name, obje = globje) => Object.keys(obje)
                .filter((key) => 1 + key.search(new RegExp(name + '[$_]*')))
                .reduce(theBest, '');
            const gloName = (genus, obje = globje) => (species) => theName(genus + '_' + species, obje);
            const nmlName = gloName('NML11th');
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            const throwNaN = (whether = true // TODO= PICK= really, always throw??
            ) => (it) => {
                if (!whether) { }
                else
                    throw 'NaN/risk on 20250430 at 2005';
                return it !== null && it !== void 0 ? it : NaN;
            };
            // const NaN_= throwNaN(false); NaN_;
            const _15ns26sequence = (sh, wh = false) => {
                const nan = throwNaN(wh);
                const k = sh & 31; // not 15?
                return (it) => ((it += (it >>> k | 1) >>> 0) < (-1 >>> 0) ? it : nan());
            };
            const waitFor = (dost, latest4species, ms16_, globje_ = globje) => (get_) => {
                let ms16 = 0;
                const f = (g) => () => {
                    const got = latest4species(get_);
                    console.log('Loaded ' + got + ' after ' + (ms16 >>> 16) + 'ms');
                    if (got)
                        dost(globje_[got]);
                    else if (Number.isNaN(ms16))
                        console.warn('NaN');
                    else
                        set_timeout((ms16 = ms16_(ms16)) >>> 16)(g(g));
                };
                const ff = f(f);
                ff();
            };
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            const theLava = // IIFE
             ((() => {
                return {
                    throwNaN, _15ns26sequence
                };
            })());
            const toExport = // IIFE
             ((() => {
                return {
                    atPlay, may_timeout, set_timeout, gloName, nmlName, waitFor, theLava,
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
                    let hopedName = idealName;
                    while ('undefined' !== typeof globje[hopedName])
                        hopedName = idealName + suffix();
                    globje[hopedName] = libToAdd;
                    console.log("Loaded " + idealName + " as " + hopedName);
                }
                return libToAdd;
            })('NML11th_LitheRock', toExport)); /**/
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
            const $$ = $.theLava;
            if (!always) { }
            else
                console.log('\n'
                    + JSON.stringify($.nmlName('LitheRock')) + '!\n'
                    + JSON.stringify($.nmlName('LithePath')) + '!\n'
                    + JSON.stringify('' + $$.throwNaN(!1)()) + '!\n');
            ((() => {
                function dur(it) {
                    const g = $.theLava._15ns26sequence(it);
                    let j = 0;
                    const k = 999999;
                    let i, t = 0;
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
                //for (let i= 44, j= 1; --i; ) console.log(''+(j= (j>>>0<<1>>>0|j>>>1)));
                //for (let i= 4, j= 1; --i; ) console.log(''+(j= (j>>>0<<1>>>0|j>>>1)>>>0));
                //for (let i= 44, j= 0; --i; ) console.log(''+(j= ((j<<1>>>0|1)>>>0)+(j>>>1)));
                //  console.log('#1= '+((()=>{ const n= -1, p= n>>>1; return n>>>0|p; })()));
                console.log('#2=..' + ((() => {
                    let rv = '';
                    for (let i = 19; --i >= 0;)
                        rv += ', ' + i + ': ' + dur(i);
                    return rv;
                })()));
                const something2Do = (doMore = false) => (it) => {
                    /**\if (doMore) ( $.waitFor(something2Do(), $.nmlName, $$._15ns26sequence(1)) )
                                                                                     ('LithePath');
                    /**/ console.log(JSON.stringify(it.theLava.throwNaN(true)()));
                };
                $.waitFor(something2Do(true), $.nmlName, $$._15ns26sequence(2))('LitheRock');
            })());
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            if (!!always) { }
            else // IIFE
                (((test) => {
                    ;
                    console.log("It's still just a " + test);
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
