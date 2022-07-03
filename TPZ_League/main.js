let total;

function printJoinRate()  {  
    const v_num = Number(document.getElementById('v_num').value);
    const w_num = Number(document.getElementById('w_num').value);
    const x_num = Number(document.getElementById('x_num').value);
    const y_num = Number(document.getElementById('y_num').value);
    const z_num = Number(document.getElementById('z_num').value);
    const b_num = Number(document.getElementById('b_num').value);

    total = v_num + w_num + x_num + y_num + z_num + b_num;

    // const v_num = document.getElementById('v_num').value;
    let league_rate_v = Math.round(v_num / total *100);
    document.getElementById("result_v").innerText = league_rate_v;

    // const w_num = document.getElementById('w_num').value;
    let league_rate_w = Math.round(w_num / total *100);
    document.getElementById("result_w").innerText = league_rate_w;

    // const x_num = document.getElementById('x_num').value;
    let league_rate_x = Math.round(x_num / total *100);
    document.getElementById("result_x").innerText = league_rate_x;

    // const y_num = document.getElementById('y_num').value;
    let league_rate_y = Math.round(y_num / total *100);
    document.getElementById("result_y").innerText = league_rate_y;

    // const z_num = document.getElementById('z_num').value;
    let league_rate_z = Math.round(z_num / total *100);
    document.getElementById("result_z").innerText = league_rate_z;
    
    // const b_num = document.getElementById('b_num').value;
    let league_rate_b = Math.round(b_num / total *100);
    document.getElementById("result_b").innerText = league_rate_b;

    document.getElementById("total").innerText = total;
}

function printJoinTribeRate() {
    const T_Tnum = Number(document.getElementById('T_Tnum').value);
    const P_Tnum = Number(document.getElementById('P_Tnum').value);
    const Z_Tnum = Number(document.getElementById('Z_Tnum').value);

    tribe_total = T_Tnum + P_Tnum + Z_Tnum;
    document.getElementById("tribe_total").innerText = tribe_total;

    let league_TribeRate_T = Math.round(T_Tnum / tribe_total *100);
    document.getElementById("result_tribe_T").innerText = league_TribeRate_T;

    let league_TribeRate_P = Math.round(P_Tnum / tribe_total *100);
    document.getElementById("result_tribe_P").innerText = league_TribeRate_P;

    let league_TribeRate_Z = Math.round(Z_Tnum / tribe_total *100);
    document.getElementById("result_tribe_Z").innerText = league_TribeRate_Z;
}

function mapWinRate() {
    const fighting_T = Number(document.getElementById('fighting_T').value);
    const fighting_P = Number(document.getElementById('fighting_P').value);
    const fighting_Z = Number(document.getElementById('fighting_Z').value);
    fighting_total = fighting_T + fighting_P + fighting_Z;
    document.getElementById("fighting_total").innerText = fighting_total;

    let league_fighting_T = Math.round(fighting_T / fighting_total *100);
    document.getElementById("result_fighting_T").innerText = league_fighting_T;

    let league_fighting_P = Math.round(fighting_P / fighting_total *100);
    document.getElementById("result_fighting_P").innerText = league_fighting_P;

    let league_fighting_Z = Math.round(fighting_Z / fighting_total *100);
    document.getElementById("result_fighting_Z").innerText = league_fighting_Z;

    const eclipse_T = Number(document.getElementById('eclipse_T').value);
    const eclipse_P = Number(document.getElementById('eclipse_P').value);
    const eclipse_Z = Number(document.getElementById('eclipse_Z').value);
    eclipse_total = eclipse_T + eclipse_P + eclipse_Z;
    document.getElementById("eclipse_total").innerText = eclipse_total;

    let league_eclipse_T = Math.round(eclipse_T / eclipse_total *100);
    document.getElementById("result_eclipse_T").innerText = league_eclipse_T;

    let league_eclipse_P = Math.round(eclipse_P / eclipse_total *100);
    document.getElementById("result_eclipse_P").innerText = league_eclipse_P;

    let league_eclipse_Z = Math.round(eclipse_Z / eclipse_total *100);
    document.getElementById("result_eclipse_Z").innerText = league_eclipse_Z;

    const poli_T = Number(document.getElementById('poli_T').value);
    const poli_P = Number(document.getElementById('poli_P').value);
    const poli_Z = Number(document.getElementById('poli_Z').value);
    poli_total = poli_T + poli_P + poli_Z;
    document.getElementById("poli_total").innerText = poli_total;

    let league_poli_T = Math.round(poli_T / poli_total *100);
    document.getElementById("result_poli_T").innerText = league_poli_T;

    let league_poli_P = Math.round(poli_P / poli_total *100);
    document.getElementById("result_poli_P").innerText = league_poli_P;

    let league_poli_Z = Math.round(poli_Z / poli_total *100);
    document.getElementById("result_poli_Z").innerText = league_poli_Z;


    const accention_T = Number(document.getElementById('accention_T').value);
    const accention_P = Number(document.getElementById('accention_P').value);
    const accention_Z = Number(document.getElementById('accention_Z').value);
    accention_total = accention_T + accention_P + accention_Z;
    document.getElementById("accention_total").innerText = accention_total;

    let league_accention_T = Math.round(accention_T / accention_total *100);
    document.getElementById("result_accention_T").innerText = league_accention_T;

    let league_accention_P = Math.round(accention_P / accention_total *100);
    document.getElementById("result_accention_P").innerText = league_accention_P;

    let league_accention_Z = Math.round(accention_Z / accention_total *100);
    document.getElementById("result_accention_Z").innerText = league_accention_Z;
    
    const largo_T = Number(document.getElementById('largo_T').value);
    const largo_P = Number(document.getElementById('largo_P').value);
    const largo_Z = Number(document.getElementById('largo_Z').value);
    largo_total = largo_T + largo_P + largo_Z;
    document.getElementById("largo_total").innerText = largo_total;

    let league_largo_T = Math.round(largo_T / largo_total *100);
    document.getElementById("result_largo_T").innerText = league_largo_T;

    let league_largo_P = Math.round(largo_P / largo_total *100);
    document.getElementById("result_largo_P").innerText = league_largo_P;

    let league_largo_Z = Math.round(largo_Z / largo_total *100);
    document.getElementById("result_largo_Z").innerText = league_largo_Z;
    
    const goodnight_T = Number(document.getElementById('goodnight_T').value);
    const goodnight_P = Number(document.getElementById('goodnight_P').value);
    const goodnight_Z = Number(document.getElementById('goodnight_Z').value);
    goodnight_total = goodnight_T + goodnight_P + goodnight_Z;
    document.getElementById("goodnight_total").innerText = goodnight_total;

    let league_goodnight_T = Math.round(goodnight_T / goodnight_total *100);
    document.getElementById("result_goodnight_T").innerText = league_goodnight_T;

    let league_goodnight_P = Math.round(goodnight_P / goodnight_total *100);
    document.getElementById("result_goodnight_P").innerText = league_goodnight_P;

    let league_goodnight_Z = Math.round(goodnight_Z / goodnight_total *100);
    document.getElementById("result_goodnight_Z").innerText = league_goodnight_Z;
    
    const rivolber_T = Number(document.getElementById('rivolber_T').value);
    const rivolber_P = Number(document.getElementById('rivolber_P').value);
    const rivolber_Z = Number(document.getElementById('rivolber_Z').value);
    rivolber_total = rivolber_T + rivolber_P + rivolber_Z;
    document.getElementById("rivolber_total").innerText = rivolber_total;

    let league_rivolber_T = Math.round(rivolber_T / rivolber_total *100);
    document.getElementById("result_rivolber_T").innerText = league_rivolber_T;

    let league_rivolber_P = Math.round(rivolber_P / rivolber_total *100);
    document.getElementById("result_rivolber_P").innerText = league_rivolber_P;

    let league_rivolber_Z = Math.round(rivolber_Z / rivolber_total *100);
    document.getElementById("result_rivolber_Z").innerText = league_rivolber_Z;


}