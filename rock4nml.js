/**\ vim: set syntax=typescript :miv -+- the ROCK -:= /**/
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
(((globje_) => {
    const globje = globje_();
    globje;
    const pathname = globje['location'].pathname;
    pathname;
    const veracity = true;
    const falsity = false;
    veracity;
    falsity;
    function atPlay() { return (pathname) === '/play/'; }
    atPlay;
    //
    const document__ = globje['document'];
    document__;
    const document = undefined;
    document;
    //      const elemById= document.getElementById;
    const set_timeout_ole = (ms) => (fn, ...args // TODO= all
    ) => setTimeout(fn, ms, ...args);
    set_timeout_ole;
    const getDocElementById = (gdoc = document__, okok = undefined) => (it) => { var _a; return ((_a = gdoc.getElementById(it)) !== null && _a !== void 0 ? _a : okok); };
    const getElementById = getDocElementById();
    getElementById;
    /**\
   const getDocElementById_out= (ok :HTMLElement
                             )=>(gdoc :Document= document
                             )=>(it :string)=> (gdoc.getElementById(it) ?? ok);
    /**/
    /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
    //
    /**\ const set_timeout_out= (ms :number
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
            //
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            //
            const wait4all = ((() => {
                //
                let genus_, gen_spec; // NB: Careful: these are assigned late
                const hits = {};
                //
                const prepare = (prfx, genus = 'NML11th', self = 'Rock') => (...list) => {
                    genus_ = genus += '_';
                    genus_;
                    gen_spec = genus + prfx + self;
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
                                console.log(s + ' seems OK');
                                hits[s] = o;
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
                                wait4(it, to, wait);
                            return hits;
                        };
                        return dothejob_(libs.length - 1, wait0);
                    };
                    return dothejob;
                    //
                })());
                //
                ;
                ;
                return (theCB, ...list) => {
                    if (list.length && !list[0]) { }
                    else
                        throw 'Not at 99 on 20250510 at 1431';
                    return execute(theCB, prepare('Lithe')(...list), 0)(undefined);
                };
                //
            })());
            //
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            //
            //
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            //
            ;
            ;
            ;
            ;
            ;
            ;
            const w4d_cb_eg_ = (gEl, fn0) => /**\ const w4d_cb_eg= /**/ (em, it = globje) => {
                const suf = '_';
                const fn1 = (q, v) => (q[v + suf] = gEl(v), q);
                const fn2 = fn0 ? (q, v) => (q[fn0(v)] = gEl(v), q) : fn1; /**/
                console.warn(''
                    + 'Adding \"' + em.map(fn0 ? fn0 : (s) => (s + suf)).join('\",\"')
                    + '\" to ' + Object.keys(it).join()); /**/
                return em.reduceRight(fn2, it);
            };
            //
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            //
            const wait4doc = (((document_fb) => {
                //const document_= undefined; document_;
                const unready = 1 << "uninitialized".length | 1 << "loading".length; // vector
                const isready = (document_ = document_fb) => !(unready & 1 << document_.readyState.length);
                const wait4doc_ = (s2s, gDEl /**\ :typeof getDocElementById /**/ = getDocElementById) => (document_ = document_fb
                //                )=>(cb :cbf_t_
                ) => (...names) => {
                    let once = 2;
                    const gEl = gDEl(document_);
                    const cb = w4d_cb_eg_(gEl, s2s);
                    const ignite = () => {
                        console.log("Document is " + document_.readyState); // Remove this line later, obviously
                        if ((once >>= 1) === 0) {
                            console.log("We ignited again, but who cares?");
                        } // idempotent
                        else {
                            console.log("We're igniting!"); // Remove this line later, obviously
                            //        globje__['para1_']= document_.getElementById('para1');
                            cb(names);
                            //        globje__['text1_']= document_.getElementById('text1');
                            console.log("We ignited!"); // Remove this line later, obviously
                        }
                    };
                    const rscListener = (event) => { if (event && isready(document_))
                        ignite(); };
                    document_.addEventListener('readystatechange', rscListener);
                    if (isready(document_))
                        ignite();
                };
                return wait4doc_;
            })(document__));
            //function readiness_out() { return 1 << document.readyState.length; } // use length as hash
            //
            /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
            const theLava = // IIFE
             ((() => {
                return {
                    throwNaN, _15ns26sequence, wait4doc, wait4all,
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
            $$;
            if (!!always) { }
            else { // BEGAN w/ $$; TODO= atPlay
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
                    const something2Do = (doMore = false) => (it) => __awaiter(void 0, void 0, void 0, function* () {
                        doMore;
                        /**\if (doMore) ( $.waitFor(something2Do(), $.nmlName, $$._15ns26sequence(1)) )
                                                                                         ('LithePath');
                        /**/ console.log(JSON.stringify(it.theLava.throwNaN(true)()));
                    });
                    $.waitFor(something2Do(true), $.nmlName, $$._15ns26sequence(2))('LitheRock');
                })()); // ENDED IIFE
                /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**\ \**/ /**75**/
                if (!!!always) { }
                else // IIFE
                    (((test) => {
                        ;
                        console.log("It's still just a " + test);
                        $$.wait4doc(undefined)()('para1', 'text1');
                        // TODO?= PASS= callback component
                    })('test'));
            } // ENDED w/ $$
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
