function convertToASCII(sting){
    let length = sting.length;
    const tab = []
    let min = 0;
    let max = 2;
    let i;
    for(i = 0; i < sting.length; i++){
        tab.push(parseInt(sting.slice(min,max),16));
        min+=2;
        max+=2;
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

//let C0 = '3C1C19434C081D0C4D2C151A0C0C0F543B06030419000F0C4A49020D06170C12110C45041D4908181348091E021C18491A060904040D0B09041A1D4308121D1A030B0E0C1E1C';
let C1 = '1C0712501B0D1A18480207541B0A01171D070449004E100B0106491F0E45060D01542F00170308094D0F09190E5E4F3806530C024100000C1E4D54020D06160216000206491F0E45060D01542F00170308094D0D090110050E0B0C531F0C12541E001F1854010605110806084B';
let C2 = '3F4F3250224C2E53274D35543C453A413D492F492D4E214420432A502045264521542F45304E27473E413C4F32503D4C3E532D4D28543B4528413A492749244E3D4436432A5020453B4527542345314E2C473F41214F39502B4C20532D4D36542D45244120492649364E364429433D'; //duże litery i spacje
let C0 = '3C';

const result = xor(convertToASCII(C0),convertToASCII('0f'));
const result2 = xor(result,convertToASCII('0f'));


console.log(
    result
)
console.log(result2)


