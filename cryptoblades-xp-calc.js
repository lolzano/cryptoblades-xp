// ==UserScript==
// @name         CryptoBlades XP calculator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Donation: 0x1e83a931d2b66a3e56d4F13be8b30d1301d3ad01 (BSC)
// @author       Alexis Lozano Teran
// @match        https://app.cryptoblades.io/*
// @icon         https://www.google.com/s2/favicons?domain=cryptoblades.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let v = [
    0,
    16,17,18,19,20,22,24,26,28,30,
    33,36,39,42,46,50,55,60,66,72,
    79,86,94,103,113,124,136,149,163,178,
    194,211,229,248,268,289,311,334,358,383,
    409,436,464,493,523,554,586,619,653,688,
    724,761,799,838,878,919,961,1004,1048,1093,
    1139,1186,1234,1283,1333,1384,1436,1489,1543,1598,
    1654,1711,1769,1828,1888,1949,2011,2074,2138,2203,
    2269,2336,2404,2473,2543,2614,2686,2759,2833,2908,
    2984,3061,3139,3218,3298,3379,3461,3544,3628,3713,
    3799,3886,3974,4063,4153,4244,4336,4429,4523,4618,
    4714,4811,4909,5008,5108,5209,5311,5414,5518,5623,
    5729,5836,5944,6053,6163,6274,6386,6499,6613,6728,
    6844,6961,7079,7198,7318,7439,7561,7684,7808,7933,
    8059,8186,8314,8443,8573,8704,8836,8969,9103,9238,
    9374,9511,9649,9788,9928,10069,10211,10354,10498,10643,
    10789,10936,11084,11233,11383,11534,11686,11839,11993,12148,
    12304,12461,12619,12778,12938,13099,13261,13424,13588,13753,
    13919,14086,14254,14423,14593,14764,14936,15109,15283,15458,
    15634,15811,15989,16168,16348,16529,16711,16894,17078,17263,
    17449,17636,17824,18013,18203,18394,18586,18779,18973,19168,
    19364,19561,19759,19958,20158,20359,20561,20764,20968,21173,
    21379,21586,21794,22003,22213,22424,22636,22849,23063,23278,
    23494,23711,23929,24148,24368,24589,24811,25034,25258,25483,
    25709,25936,26164,26393,26623,26854,27086,27319,27553,27788,
    28024,28261,28499,28738,0
];



setInterval(function(){
    let character = document.getElementsByClassName("character-data-column");
    let cuadro = character[0].lastChild;
    let b = cuadro.children;
    let s = b[1].innerText;
    let xp = "";
    let level = "";
    let cnt = 0;
    for(let i = 0; i < s.length; ++i) {
        if(s[i] >= '0' && s[i] <= '9') {
            if(cnt == 0) {
                level += s[i];
            } else {
                if(cnt == 2) {
                    xp += s[i];
                }
            }
        } else {
            cnt++;
        }
    }
    let levelint = parseInt(level);
    let xpint = parseInt(xp);

    let it = levelint;
    let sum = 0;
    while(it%10 != 0 && it < 255) {
        sum += v[it];
        it++;
    }
    sum += v[it];
    sum -= xpint;
    let a = document.getElementById("xpcalculator");
    if(a == null) {
        a = document.createElement("span");
        a.id = "xpcalculator";
        //a.innerText = "?" + " XP to level " + "?";
        let br = document.createElement("br");
        cuadro.appendChild(br);
        cuadro.appendChild(a);
    }
    a.innerText = sum + " XP to level " + parseInt(it + 1);
    let donar = document.getElementById("btn-donation");
    if(donar == null) {
        donar = document.createElement("button");
        donar.id = "btn-donation";
        donar.className = "btn-small btn-secondary";
        donar.innerText = "Donation!";
        donar.onclick = function() {
            prompt("Thank You!\nAddress: (Binance Smart Chain)", "0x1e83a931d2b66a3e56d4F13be8b30d1301d3ad01");
        }
        let br = document.createElement("br");
        cuadro.appendChild(br);
        cuadro.appendChild(donar);
    }
}, 1000);

})();
