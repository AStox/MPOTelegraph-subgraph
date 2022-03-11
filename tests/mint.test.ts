import { clearStore, test, assert } from "matchstick-as/assembly/index";
import {
  createNewMintEvent,
  createNewTransferEvent,
  handleMint,
  handleTransfer,
} from "../src/mapping";
import { Telegraph } from "../generated/schema";
import { Address, log, BigInt, ethereum } from "@graphprotocol/graph-ts";

test("Can call mappings with custom events", () => {
  // Initialise
  //   let telegraph = new Telegraph("1");
  //   telegraph.save();

  let transfer1 = createNewTransferEvent(
    "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
    "0x4e45AFCf5ea8446be066A163cB274e719020FC41",
    33
  );
  let mint1 = createNewMintEvent(
    "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
    33,
    "Hello world!"
  );

  let transfer2 = createNewTransferEvent(
    "0x4e45AFCf5ea8446be066A163cB274e719020FC41",
    "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
    2349076
  );
  let mint2 = createNewMintEvent(
    "0x4e45AFCf5ea8446be066A163cB274e719020FC41",
    2349076,
    "Goodbye world!"
  );

  log.info("qqqqqq", []);
  handleTransfer(transfer1);
  handleMint(mint1);
  handleTransfer(transfer2);
  handleMint(mint2);
  //
  assert.fieldEquals("Telegraph", "33", "id", "33");
  //   assert.fieldEquals(
  //     "Telegraph",
  //     "934984",
  //     "to",
  //     "0x225ef95fa90f4F7938A5b34234d14768cB4263dd"
  //   );

  assert.fieldEquals("Telegraph", "2349076", "message", "Goodbye world!");

  //   let svg = `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="-25 -25 400 400"><style>.text {font-family: sans-serif; fill: #B6412A; font-size: 10px;} .content{font-family: monospace; fill: #149CA5; font-size: 14px; font-weight: 700} .muted {fill: #1B3450; font-weight: 500;} .title {font-family: sans-serif; font-weight: 900; fill: #B6412A; font-size: 13px;} .metadata {font-family: monospace; fill: #0087A3; font-size: 10px; font-weight: 700} .subtitle {font-size: 18px;} .tiny {font-size: 8px } .fineprint {font-size: 6px }</style><rect x="-25" y="-25" width="425" height="425" fill="#A7C4C2" /><g transform="translate(0,50)"><rect width="350" height="250" fill="#0D141F" class="base" filter="url(#f2)" rx="4" ry="4"/><g transform="translate(80,40)"><text class="title">METAVERSAL POST OFFICE</text><line x1="17" y1="3" x2="160" y2="3" stroke="#B6412A"/><text class="title subtitle" x="35" y="20">TELEGRAPH</text></g><g transform="translate(10,18)"><text class="text" x="0" y="0">No.</text><text class="metadata" x="20" y="0">2349076</text><line x1="17" y1="3" x2="60" y2="3" stroke="#B6412A"/></g><g transform="translate(270,18)"><text class="text" x="0" y="0">Block</text><text class="metadata" x="30" y="0">1</text><line x1="27" y1="3" x2="75" y2="3" stroke="#B6412A"/></g><g transform="translate(287,27)"><text class="text" x="0" y="5">Block Stamp</text><polygon points="0,8 0,53, 55,53, 55,8" fill="none" stroke="#1B3450" stroke-dasharray="3"/><g transform="translate(-1,4) scale(1,1)"><g transform="translate(25,25) rotate(-30)  scale(0.3,0.3)"><polygon points="0,-60 -35,0 0,20 35,0" fill="none" stroke="#0087A3" stroke-width="3px"/><polygon points="-35,0 0,20 35,0 0,-20" fill="none" stroke="#0087A3" stroke-width="3px"/><polygon points="-35,10 0,60 35,10 0,30" fill="none" stroke="#0087A3" stroke-width="3px"/></g><text class="metadata tiny"><textPath href="#stamp">0</textPath><animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25"  dur="10s" repeatCount="indefinite" /></text><path fill="none" d="M -2,25 A 27 27 0 1 0 -2,24.5 z" stroke="#0087A3" stroke-width="1" /></g></g><g transform="translate(0,100)"><g transform="translate(10,-10)"><text class="text" x="0" y="0">From</text><text class="metadata" x="28" y="0">0x4e45afcf5ea8446be066a163cb274e719020fc41</text><line x1="25" y1="3" x2="110" y2="3" stroke="#B6412A"/></g><g transform="translate(240,-10)"><text class="text" x="0" y="0">To</text><text class="metadata" x="15" y="0">0x225ef95fa90f4f7938a5b34234d14768cb4263dd</text><line x1="12" y1="3" x2="100" y2="3" stroke="#B6412A"/></g><g transform="translate(0,0)"><line x1="5" y1="0" x2="345" y2="0" stroke="#B6412A"/><line x1="40" y1="0" x2="40" y2="145" stroke="#B6412A"/><g transform="translate(55,20)"><text class="text content" x="0" y="-20"><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan>Goodbye world!'</tspan></tspan><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan>','</tspan></tspan><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan>','</tspan></tspan><tspan x="0" dy="20"><tspan class="muted">></tspan><tspan>',</tspan></tspan></text><g transform="translate(0,119)"><text class="text fineprint" x="0" y="0">FOR ONE FREE RESPONSE TO THIS TELEGRAM, VISIT THE METAVERAL POST OFFICE OR</text><text class="text fineprint" x="0" y="6">WWW.METAVERSALPOST.IO WITH THE WALLET OWNING THIS NON-FUNGIBLE TELEGRAM.</text></g></g></g></g></g><defs><path id="stamp" fill="none" d="M 0,25 A 25 25 0 1 0 0,24.99 z" /><filter id="f2" x="-0.1" y="-0.1" width="200%" height="200%"><feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" /><feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" /><feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter></defs></svg>`;

  assert.fieldEquals(
    "Telegraph",
    "2349076",
    "image",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9Ii0yNSAtMjUgNDAwIDQwMCI+PHN0eWxlPi50ZXh0IHtmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZmlsbDogI0I2NDEyQTsgZm9udC1zaXplOiAxMHB4O30gLmNvbnRlbnR7Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZmlsbDogIzE0OUNBNTsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNzAwfSAubXV0ZWQge2ZpbGw6ICMxQjM0NTA7IGZvbnQtd2VpZ2h0OiA1MDA7fSAudGl0bGUge2ZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogOTAwOyBmaWxsOiAjQjY0MTJBOyBmb250LXNpemU6IDEzcHg7fSAubWV0YWRhdGEge2ZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZpbGw6ICMwMDg3QTM7IGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMH0gLnN1YnRpdGxlIHtmb250LXNpemU6IDE4cHg7fSAudGlueSB7Zm9udC1zaXplOiA4cHggfSAuZmluZXByaW50IHtmb250LXNpemU6IDZweCB9PC9zdHlsZT48cmVjdCB4PSItMjUiIHk9Ii0yNSIgd2lkdGg9IjQyNSIgaGVpZ2h0PSI0MjUiIGZpbGw9IiNBN0M0QzIiIC8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw1MCkiPjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMEQxNDFGIiBjbGFzcz0iYmFzZSIgZmlsdGVyPSJ1cmwoI2YyKSIgcng9IjQiIHJ5PSI0Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODAsNDApIj48dGV4dCBjbGFzcz0idGl0bGUiPk1FVEFWRVJTQUwgUE9TVCBPRkZJQ0U8L3RleHQ+PGxpbmUgeDE9IjE3IiB5MT0iMyIgeDI9IjE2MCIgeTI9IjMiIHN0cm9rZT0iI0I2NDEyQSIvPjx0ZXh0IGNsYXNzPSJ0aXRsZSBzdWJ0aXRsZSIgeD0iMzUiIHk9IjIwIj5URUxFR1JBUEg8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLDE4KSI+PHRleHQgY2xhc3M9InRleHQiIHg9IjAiIHk9IjAiPk5vLjwvdGV4dD48dGV4dCBjbGFzcz0ibWV0YWRhdGEiIHg9IjIwIiB5PSIwIj4yMzQ5MDc2PC90ZXh0PjxsaW5lIHgxPSIxNyIgeTE9IjMiIHgyPSI2MCIgeTI9IjMiIHN0cm9rZT0iI0I2NDEyQSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzAsMTgpIj48dGV4dCBjbGFzcz0idGV4dCIgeD0iMCIgeT0iMCI+QmxvY2s8L3RleHQ+PHRleHQgY2xhc3M9Im1ldGFkYXRhIiB4PSIzMCIgeT0iMCI+MTwvdGV4dD48bGluZSB4MT0iMjciIHkxPSIzIiB4Mj0iNzUiIHkyPSIzIiBzdHJva2U9IiNCNjQxMkEiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg3LDI3KSI+PHRleHQgY2xhc3M9InRleHQiIHg9IjAiIHk9IjUiPkJsb2NrIFN0YW1wPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMCw4IDAsNTMsIDU1LDUzLCA1NSw4IiBmaWxsPSJub25lIiBzdHJva2U9IiMxQjM0NTAiIHN0cm9rZS1kYXNoYXJyYXk9IjMiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSw0KSBzY2FsZSgxLDEpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSwyNSkgcm90YXRlKC0zMCkgIHNjYWxlKDAuMywwLjMpIj48cG9seWdvbiBwb2ludHM9IjAsLTYwIC0zNSwwIDAsMjAgMzUsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA4N0EzIiBzdHJva2Utd2lkdGg9IjNweCIvPjxwb2x5Z29uIHBvaW50cz0iLTM1LDAgMCwyMCAzNSwwIDAsLTIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDg3QTMiIHN0cm9rZS13aWR0aD0iM3B4Ii8+PHBvbHlnb24gcG9pbnRzPSItMzUsMTAgMCw2MCAzNSwxMCAwLDMwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDg3QTMiIHN0cm9rZS13aWR0aD0iM3B4Ii8+PC9nPjx0ZXh0IGNsYXNzPSJtZXRhZGF0YSB0aW55Ij48dGV4dFBhdGggaHJlZj0iI3N0YW1wIj4xPC90ZXh0UGF0aD48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVUeXBlPSJYTUwiIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDI1IDI1IiB0bz0iMzYwIDI1IDI1IiAgZHVyPSIxMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPjwvdGV4dD48cGF0aCBmaWxsPSJub25lIiBkPSJNIC0yLDI1IEEgMjcgMjcgMCAxIDAgLTIsMjQuNSB6IiBzdHJva2U9IiMwMDg3QTMiIHN0cm9rZS13aWR0aD0iMSIgLz48L2c+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTAwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsLTEwKSI+PHRleHQgY2xhc3M9InRleHQiIHg9IjAiIHk9IjAiPkZyb208L3RleHQ+PHRleHQgY2xhc3M9Im1ldGFkYXRhIiB4PSIyOCIgeT0iMCI+MHg0ZTQ1YWZjZjVlYTg0NDZiZTA2NmExNjNjYjI3NGU3MTkwMjBmYzQxPC90ZXh0PjxsaW5lIHgxPSIyNSIgeTE9IjMiIHgyPSIxMTAiIHkyPSIzIiBzdHJva2U9IiNCNjQxMkEiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLC0xMCkiPjx0ZXh0IGNsYXNzPSJ0ZXh0IiB4PSIwIiB5PSIwIj5UbzwvdGV4dD48dGV4dCBjbGFzcz0ibWV0YWRhdGEiIHg9IjE1IiB5PSIwIj4weDIyNWVmOTVmYTkwZjRmNzkzOGE1YjM0MjM0ZDE0NzY4Y2I0MjYzZGQ8L3RleHQ+PGxpbmUgeDE9IjEyIiB5MT0iMyIgeDI9IjEwMCIgeTI9IjMiIHN0cm9rZT0iI0I2NDEyQSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48bGluZSB4MT0iNSIgeTE9IjAiIHgyPSIzNDUiIHkyPSIwIiBzdHJva2U9IiNCNjQxMkEiLz48bGluZSB4MT0iNDAiIHkxPSIwIiB4Mj0iNDAiIHkyPSIxNDUiIHN0cm9rZT0iI0I2NDEyQSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1LDIwKSI+PHRleHQgY2xhc3M9InRleHQgY29udGVudCIgeD0iMCIgeT0iLTIwIj48dHNwYW4geD0iMCIgZHk9IjIwIj48dHNwYW4gY2xhc3M9Im11dGVkIj4+PC90c3Bhbj48dHNwYW4+R29vZGJ5ZSB3b3JsZCE8L3RzcGFuPjwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSIyMCI+PHRzcGFuIGNsYXNzPSJtdXRlZCI+PjwvdHNwYW4+PHRzcGFuPjwvdHNwYW4+PC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjIwIj48dHNwYW4gY2xhc3M9Im11dGVkIj4+PC90c3Bhbj48dHNwYW4+PC90c3Bhbj48L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iMjAiPjx0c3BhbiBjbGFzcz0ibXV0ZWQiPj48L3RzcGFuPjx0c3Bhbj48L3RzcGFuPjwvdHNwYW4+PC90ZXh0PjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTE5KSI+PHRleHQgY2xhc3M9InRleHQgZmluZXByaW50IiB4PSIwIiB5PSIwIj5GT1IgT05FIEZSRUUgUkVTUE9OU0UgVE8gVEhJUyBURUxFR1JBTSwgVklTSVQgVEhFIE1FVEFWRVJBTCBQT1NUIE9GRklDRSBPUjwvdGV4dD48dGV4dCBjbGFzcz0idGV4dCBmaW5lcHJpbnQiIHg9IjAiIHk9IjYiPldXVy5NRVRBVkVSU0FMUE9TVC5JTyBXSVRIIFRIRSBXQUxMRVQgT1dOSU5HIFRISVMgTk9OLUZVTkdJQkxFIFRFTEVHUkFNLjwvdGV4dD48L2c+PC9nPjwvZz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJzdGFtcCIgZmlsbD0ibm9uZSIgZD0iTSAwLDI1IEEgMjUgMjUgMCAxIDAgMCwyNC45OSB6IiAvPjxmaWx0ZXIgaWQ9ImYyIiB4PSItMC4xIiB5PSItMC4xIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj48ZmVPZmZzZXQgcmVzdWx0PSJvZmZPdXQiIGluPSJTb3VyY2VBbHBoYSIgZHg9IjAiIGR5PSIwIiAvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXJPdXQiIGluPSJvZmZPdXQiIHN0ZERldmlhdGlvbj0iMTAiIC8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iYmx1ck91dCIgbW9kZT0ibm9ybWFsIiAvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4g"
  );

  clearStore();
});
