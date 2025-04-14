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
var game = ''; // 'e2e4&e7e5&g1f3&'; // =to play black; NB: trailing '&' is reqd
const globje = (() => { }).constructor('return this')();
/**
globje['sjeng_para1_']= document.getElementById('para1'); // pro tem
globje['sjeng_text1_']= document.getElementById('text1'); // pro tem
/**/
const para1 = globje['para1_'];
const text1 = globje['text1_'];
const a_square = (idy) => (it_, idx) => {
    const it = it_.trim();
    return String.fromCharCode(((idx + idy & 1 ? '#' : ' ') + it).slice(-1).charCodeAt(0) + (it.length !== 2 ? 0 : 32));
};
function a_rank(it, idy) {
    return (it + it.slice(0, 2)).split('\|').map(a_square(idy)).join('&nbsp;');
}
function dostAsyncly(elem, what, move) {
    return __awaiter(this, void 0, void 0, function* () {
        const alpha = yield fetch(what);
        const beta = yield alpha.text();
        if (beta.indexOf('llegal') < 0) { }
        else
            return beta;
        const gamma = beta.split('\n');
        const reply = gamma[gamma.length - 10] || null;
        if (reply) { }
        else
            return beta;
        game += move + reply + '&';
        //  iel.value= '';
        const board = gamma.slice(-9, -1).map(a_rank).join('<br />');
        const edge1 = board.charCodeAt(0) & 1 ? '@ h g f e d c b a @' : '@ A B C D E F G H @';
        const edge2 = board.charCodeAt(0) & 1 ? '@ H G F E D C B A @' : '@ a b c d e f g h @';
        const rslt = edge1 + '<br />' + board + '<br />' + edge2;
        if (elem)
            elem.innerHTML = rslt;
        else
            console.log(rslt);
        return '';
    });
}
function dostSyncly(at, it) {
    at;
    if (it.length >>> 1 !== 2) { }
    else {
        const move = it + '&';
        const ante = "http://localhost/cgi-bin/sj5s.sh?d&force&st?5&";
        const post = "go&&d&quit";
        const prom = dostAsyncly(para1, ante + game + move + post, move);
        prom;
    }
}
