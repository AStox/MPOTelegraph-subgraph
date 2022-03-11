import { BigInt, log } from "@graphprotocol/graph-ts";

let generateSVG = (
  id: string,
  to: string,
  from: string,
  msg: string,
  blockNumber: BigInt
): string => {
  let start = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="-25 -25 400 400"><style>.text {font-family: sans-serif; fill: #B6412A; font-size: 10px;} .content{font-family: monospace; fill: #149CA5; font-size: 14px; font-weight: 700} .muted {fill: #1B3450; font-weight: 500;} .title {font-family: sans-serif; font-weight: 900; fill: #B6412A; font-size: 13px;} .metadata {font-family: monospace; fill: #0087A3; font-size: 10px; font-weight: 700} .subtitle {font-size: 18px;} .tiny {font-size: 8px } .fineprint {font-size: 6px }</style><rect x="-25" y="-25" width="425" height="425" fill="#A7C4C2" /><g transform="translate(0,50)"><rect width="350" height="250" fill="#0D141F" class="base" filter="url(#f2)" rx="4" ry="4"/><g transform="translate(80,40)"><text class="title">METAVERSAL POST OFFICE</text><line x1="17" y1="3" x2="160" y2="3" stroke="#B6412A"/><text class="title subtitle" x="35" y="20">TELEGRAPH</text></g><g transform="translate(10,18)"><text class="text" x="0" y="0">No.</text><text class="metadata" x="20" y="0">${id}</text><line x1="17" y1="3" x2="60" y2="3" stroke="#B6412A"/></g><g transform="translate(270,18)"><text class="text" x="0" y="0">Block</text><text class="metadata" x="30" y="0">${blockNumber}</text><line x1="27" y1="3" x2="75" y2="3" stroke="#B6412A"/></g><g transform="translate(287,27)"><text class="text" x="0" y="5">Block Stamp</text><polygon points="0,8 0,53, 55,53, 55,8" fill="none" stroke="#1B3450" stroke-dasharray="3"/><g transform="translate(-1,4) scale(1,1)"><g transform="translate(25,25) rotate(-30)  scale(0.3,0.3)"><polygon points="0,-60 -35,0 0,20 35,0" fill="none" stroke="#0087A3" stroke-width="3px"/><polygon points="-35,0 0,20 35,0 0,-20" fill="none" stroke="#0087A3" stroke-width="3px"/><polygon points="-35,10 0,60 35,10 0,30" fill="none" stroke="#0087A3" stroke-width="3px"/></g><text class="metadata tiny"><textPath href="#stamp">${blockNumber}`;

  let middle = `</textPath><animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25"  dur="10s" repeatCount="indefinite" /></text><path fill="none" d="M -2,25 A 27 27 0 1 0 -2,24.5 z" stroke="#0087A3" stroke-width="1" /></g></g><g transform="translate(0,100)"><g transform="translate(10,-10)"><text class="text" x="0" y="0">From</text><text class="metadata" x="28" y="0">${from}</text><line x1="25" y1="3" x2="110" y2="3" stroke="#B6412A"/></g><g transform="translate(240,-10)"><text class="text" x="0" y="0">To</text><text class="metadata" x="15" y="0">${to}</text><line x1="12" y1="3" x2="100" y2="3" stroke="#B6412A"/></g><g transform="translate(0,0)"><line x1="5" y1="0" x2="345" y2="0" stroke="#B6412A"/><line x1="40" y1="0" x2="40" y2="145" stroke="#B6412A"/><g transform="translate(55,20)"><text class="text content" x="0" y="-20"><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan>`;

  let lines = `${msg}</tspan></tspan><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan></tspan></tspan><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan></tspan></tspan><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan>`;
  let b64 = encode(
    `${start}${middle}${lines}</tspan></tspan></text><g transform="translate(0,119)"><text class="text fineprint" x="0" y="0">FOR ONE FREE RESPONSE TO THIS TELEGRAM, VISIT THE METAVERAL POST OFFICE OR</text><text class="text fineprint" x="0" y="6">WWW.METAVERSALPOST.IO WITH THE WALLET OWNING THIS NON-FUNGIBLE TELEGRAM.</text></g></g></g></g></g><defs><path id="stamp" fill="none" d="M 0,25 A 25 25 0 1 0 0,24.99 z" /><filter id="f2" x="-0.1" y="-0.1" width="200%" height="200%"><feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" /><feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter></defs></svg> `
  );
  return "data:image/svg+xml;base64,".concat(b64);
};

function encode(input: string): string {
  log.info("1", []);
  let output = "";
  let chr1: number,
    chr2: number,
    chr3: number,
    enc1: i32,
    enc2: i32,
    enc3: i32,
    enc4: i32;
  let i = 0;

  log.info("aaaaaa", []);
  input = _utf8_encode(input);
  while (i < input.length) {
    log.info("a", []);
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    log.info("b", []);
    enc1 = i32(chr1 as i32) >> (2 as i32);
    enc2 = i32((chr1 as i32 & 3) << 4) | ((chr2 as i32) >> 4);
    enc3 = i32((chr2 as i32 & 15) << 2) | ((chr3 as i32) >> 6);
    enc4 = i32(chr3 as i32 & 63);
    log.info("c", []);

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    log.info("heres {}", [_keyStr]);
    log.info("enc1s: {}, enc2: {}, enc3: {}, enc4: {}", [
      i32(enc1).toString(),
      enc2.toString(),
      enc3.toString(),
      enc4.toString(),
    ]);
    log.info("1: {}", [_keyStr.charAt(i32(enc1))]);
    log.info("2: {}", [_keyStr.charAt(enc2 as i32)]);
    log.info("3: {}", [_keyStr.charAt(enc3 as i32)]);
    log.info("4: {}", [_keyStr.charAt(enc4 as i32)]);
    output =
      output +
      _keyStr.charAt(enc1 as i32) +
      _keyStr.charAt(enc2 as i32) +
      _keyStr.charAt(enc3 as i32) +
      _keyStr.charAt(enc4 as i32);
    log.info("e", []);
  }

  return output;
}

function _utf8_encode(input: string): string {
  input = input.replace("/\r\n/g", "\n");
  let utftext = "";

  for (let n = 0; n < input.length; n++) {
    let c = input.charCodeAt(n);
    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode((c >> 6) | 192);
      utftext += String.fromCharCode((c & 63) | 128);
    } else {
      utftext += String.fromCharCode((c >> 12) | 224);
      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
      utftext += String.fromCharCode((c & 63) | 128);
    }
  }

  return utftext;
}

let _keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

export default generateSVG;
