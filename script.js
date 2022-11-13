function convertToASCII(string){
    let length = string.length/2;
    const tab = []
    let min = 0;
    let max = 2;
    let i;
    for(i = 0; i < length; i++){
        tab.push(parseInt(string.slice(min,max),16));
        min+=2;
        max+=2;
    }
    return tab
}

function convertToCODE(string){
    const tab = [];
    for(let i = 0; i<string.length; i++){
        tab.push(string.charCodeAt(i));
    }
    return tab
}

function ascii_to_string(text){
    const tab = [];
    text.forEach(element => tab.push(String.fromCharCode(element)))
    return tab
}

function xor(cleartext, key){
    const codedtext = [];
    for(let i = 0; i < cleartext.length; i++){
        codedtext.push(cleartext[i] ^ key[i%key.length]);
    }
    return codedtext
}


let C0 = '3C0712020A4C1E16481909060D004D493E0C1113184E210B0C1A0A1B0149522D011A1A1C0E4E331E0A00041C1C19434C081D0C4D2C151A0C0C0F543B06030419000F0C4A49020D06170C12110C45041D4908181348091E021C18491A060904040D0B09041A1D4308121D1A030B0E0C1E1C';
let C1 = '1C0712501B0D1A18480207541B0A01171D070449004E100B0106491F0E45060D01542F00170308094D0F09190E5E4F3806530C024100000C1E4D54020D06160216000206491F0E45060D01542F00170308094D0D090110050E0B0C531F0C12541E001F1854010605110806084B';
let C2 = '3F4F3250224C2E53274D35543C453A413D492F492D4E214420432A502045264521542F45304E27473E413C4F32503D4C3E532D4D28543B4528413A492749244E3D4436432A5020453B4527542345314E2C473F41214F39502B4C20532D4D36542D45244120492649364E364429433D'; //duże litery i spacje. Nulle to spacje \x00 !!
let text0 = 'There we three (Jerzy Rozycki, Henryk Zygalskii and Marian Rejewski) recives _s_o_r_f_r_t_i_d_p_n_e_t_a_s_g_m'

const result = xor(convertToASCII(C2),convertToASCII(C0)); //msg1 ^ msg3
const result2 = xor(convertToASCII(C2),convertToASCII(C1));

const results = xor(result,convertToASCII('20')); //usuwnie msg3
const results2 = xor(result2,convertToASCII('20'));

let key = 'howpolishmathematiciansdecipheredtheenigma';

console.log(ascii_to_string(xor(convertToASCII(C0),convertToCODE(key))).join(''));
console.log(ascii_to_string(xor(convertToASCII(C1),convertToCODE(key))).join(''));
console.log(ascii_to_string(xor(convertToASCII(C2),convertToCODE(key))).join(''));










