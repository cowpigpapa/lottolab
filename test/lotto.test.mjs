import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { analyzeDraws, generatePick, normalizeDraws, numberRows, rankTicket } from "../dist/lotto.js";

const draws=normalizeDraws([{draw_no:1,numbers:[1,2,3,4,5,6],bonus_no:7,date:"2002-12-07"},{draw_no:2,numbers:[1,8,9,10,11,12],bonus_no:13,date:"2002-12-14"}]);
test("normalizes and analyzes draws",()=>{const stats=analyzeDraws(draws);assert.equal(stats.latestRound,2);assert.equal(stats.frequency[1],2);assert.equal(stats.consecutiveRate,100);assert.equal(stats.repeated,0)});
test("generates six unique in-range numbers",()=>{const pick=generatePick(analyzeDraws(draws),[7,21],()=>0.4);assert.equal(pick.length,6);assert.equal(new Set(pick).size,6);assert.ok(pick.every((n)=>n>=1&&n<=45));assert.ok(pick.includes(7)||pick.includes(21))});
test("ranks winning tickets",()=>{assert.equal(rankTicket([1,2,3,4,5,6],draws[0]),"1등");assert.equal(rankTicket([1,2,3,4,5,7],draws[0]),"2등");assert.equal(rankTicket([1,2,3,40,41,42],draws[0]),"5등")});
test("builds all 45 number trend rows",()=>{const rows=numberRows(analyzeDraws(draws),draws);assert.equal(rows.length,45);assert.deepEqual(rows[0],{number:1,count:2,rate:100,gap:0,missing5:false,missing10:false,missing15:false,missing20:false,deviation:650});assert.equal(rows[44].number,45);assert.equal(rows[44].missing5,true);assert.equal(rows[44].missing20,true)});
test("publishes canonical URLs on the lottolab host",()=>{
  const home=readFileSync(new URL("../dist/index.html",import.meta.url),"utf8");
  const numbers=readFileSync(new URL("../dist/numbers.html",import.meta.url),"utf8");
  assert.match(home,/<link rel="canonical" href="https:\/\/lottolab\.onharu\.app\/">/);
  assert.match(numbers,/<link rel="canonical" href="https:\/\/lottolab\.onharu\.app\/numbers\.html">/);
  assert.doesNotMatch(home+numbers,/lottolap\.onharu\.app/);
});
