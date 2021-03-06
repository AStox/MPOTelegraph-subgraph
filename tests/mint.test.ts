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
    1
  );
  let mint1_message =
    "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human be\n";
  let mint1 = createNewMintEvent("0x225ef95fa90f4F7938A5b34234d14768cB4263dd", 1, mint1_message);

  // let transfer2 = createNewTransferEvent(
  //   "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
  //   "0x4e45AFCf5ea8446be066A163cB274e719020FC41",
  //   2
  // );
  // let mint2_message =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  // let mint2 = createNewMintEvent(
  //   "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
  //   2,
  //   mint2_message
  // );

  // let transfer3 = createNewTransferEvent(
  //   "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
  //   "0x4e45AFCf5ea8446be066A163cB274e719020FC41",
  //   16268249
  // );
  // let mint3_message = "1 \n2 \n3 \n4";
  // let mint3 = createNewMintEvent(
  //   "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
  //   16268249,
  //   mint3_message
  // );

  handleTransfer(transfer1);
  handleMint(mint1);
  // handleTransfer(transfer2);
  // handleMint(mint2);
  // handleTransfer(transfer3);
  // handleMint(mint3);
  //
  // assert.fieldEquals("Telegraph", "16268249", "id", "16268249");
  //   assert.fieldEquals(
  //     "Telegraph",
  //     "9
  //     "to",d
  //     "0x225ef95fa90f4F7938A5b34234d1476
  // );

  // assert.fieldEquals("Telegraph", "2", "message", mint2_message);

  // assert.fieldEquals(
  //   "Telegraph",
  //   "2349076",
  //   "image",
  //   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHd3dy53MIHByZXNlcnQXNwZN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9Ii0yNSAtMjUgNDAwIDQwMCI+PHN0eWxlPi50ZXh0IHtmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZmlsbDogI0I2NDEyQTsgZm9udC1zaXplOiAxMHB4O30gLmNvbnRlbnR7Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZmlsbDogIzE0OUNBNTsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNzAwfSAubXV0ZWQge2ZpbGw6ICMxQjM0NTA7IGZvbnQtd2VpZ2h0OiA1MDA7fSAudGl0bGUge2ZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogOTAwOyBmaWxsOiAjQjY0MTJBOyBmb250LXNpemU6IDEzcHg7fSAubWV0YWRhdGEge2ZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZpbGw6ICMwMDg3QTM7IGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMH0gLnN1YnRpdGxlIHtmb250LXNpemU6IDE4cHg7fSAudGlueSB7Zm9udC1zaXplOiA4cHggfSAuZmluZXByaW50IHtmb250LXNpemU6IDZweCB9PC9zdHlsZT48cmVjdCB4PSItMjUiIHk9Ii0yNSIgd2lkdGg9IjQyNSIgaGVpZ2h0PSI0MjUiIGZpbGw9IiNBN0M0QzIiIC8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw1MCkiPjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMEQxNDFGIiBjbGFzcz0iYmFzZSIgZmlsdGVyPSJ1cmwoI2YyKSIgcng9IjQiIHJ5PSI0Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODAsNDApIj48dGV4dCBjbGFzcz0idGl0bGUiPk1FVEFWRVJTQUwgUE9TVCBPRkZJQ0U8L3RleHQ+PGxpbmUgeDE9IjE3IiB5MT0iMyIgeDI9IjE2MCIgeTI9IjMiIHN0cm9rZT0iI0I2NDEyQSIvPjx0ZXh0IGNsYXNzPSJ0aXRsZSBzdWJ0aXRsZSIgeD0iMzUiIHk9IjIwIj5URUxFR1JBUEg8L3RleHQ+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLDE4KSI+PHRleHQgY2xhc3M9InRleHQiIHg9IjAiIHk9IjAiPk5vLjwvdGV4dD48dGV4dCBjbGFzcz0ibWV0YWRhdGEiIHg9IjIwIiB5PSIwIj4yMzQ5MDc2PC90ZXh0PjxsaW5lIHgxPSIxNyIgeTE9IjMiIHgyPSI2MCIgeTI9IjMiIHN0cm9rZT0iI0I2NDEyQSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzAsMTgpIj48dGV4dCBjbGFzcz0idGV4dCIgeD0iMCIgeT0iMCI+QmxvY2s8L3RleHQ+PHRleHQgY2xhc3M9Im1ldGFkYXRhIiB4PSIzMCIgeT0iMCI+MTwvdGV4dD48bGluZSB4MT0iMjciIHkxPSIzIiB4Mj0iNzUiIHkyPSIzIiBzdHJva2U9IiNCNjQxMkEiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg3LDI3KSI+PHRleHQgY2xhc3M9InRleHQiIHg9IjAiIHk9IjUiPkJsb2NrIFN0YW1wPC90ZXh0Pjxwb2x5Z29uIHBvaW50cz0iMCw4IDAsNTMsIDU1LDUzLCA1NSw4IiBmaWxsPSJub25lIiBzdHJva2U9IiMxQjM0NTAiIHN0cm9rZS1kYXNoYXJyYXk9IjMiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSw0KSBzY2FsZSgxLDEpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSwyNSkgcm90YXRlKC0zMCkgIHNjYWxlKDAuMywwLjMpIj48cG9seWdvbiBwb2ludHM9IjAsLTYwIC0zNSwwIDAsMjAgMzUsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA4N0EzIiBzdHJva2Utd2lkdGg9IjNweCIvPjxwb2x5Z29uIHBvaW50cz0iLTM1LDAgMCwyMCAzNSwwIDAsLTIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDg3QTMiIHN0cm9rZS13aWR0aD0iM3B4Ii8+PHBvbHlnb24gcG9pbnRzPSItMzUsMTAgMCw2MCAzNSwxMCAwLDMwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDg3QTMiIHN0cm9rZS13aWR0aD0iM3B4Ii8+PC9nPjx0ZXh0IGNsYXNzPSJtZXRhZGF0YSB0aW55Ij48dGV4dFBhdGggaHJlZj0iI3N0YW1wIj4xPC90ZXh0UGF0aD48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVUeXBlPSJYTUwiIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDI1IDI1IiB0bz0iMzYwIDI1IDI1IiAgZHVyPSIxMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPjwvdGV4dD48cGF0aCBmaWxsPSJub25lIiBkPSJNIC0yLDI1IEEgMjcgMjcgMCAxIDAgLTIsMjQuNSB6IiBzdHJva2U9IiMwMDg3QTMiIHN0cm9rZS13aWR0aD0iMSIgLz48L2c+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTAwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsLTEwKSI+PHRleHQgY2xhc3M9InRleHQiIHg9IjAiIHk9IjAiPkZyb208L3RleHQ+PHRleHQgY2xhc3M9Im1ldGFkYXRhIiB4PSIyOCIgeT0iMCI+MHg0ZTQ1YWZjZjVlYTg0NDZiZTA2NmExNjNjYjI3NGU3MTkwMjBmYzQxPC90ZXh0PjxsaW5lIHgxPSIyNSIgeTE9IjMiIHgyPSIxMTAiIHkyPSIzIiBzdHJva2U9IiNCNjQxMkEiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLC0xMCkiPjx0ZXh0IGNsYXNzPSJ0ZXh0IiB4PSIwIiB5PSIwIj5UbzwvdGV4dD48dGV4dCBjbGFzcz0ibWV0YWRhdGEiIHg9IjE1IiB5PSIwIj4weDIyNWVmOTVmYTkwZjRmNzkzOGE1YjM0MjM0ZDE0NzY4Y2I0MjYzZGQ8L3RleHQ+PGxpbmUgeDE9IjEyIiB5MT0iMyIgeDI9IjEwMCIgeTI9IjMiIHN0cm9rZT0iI0I2NDEyQSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDApIj48bGluZSB4MT0iNSIgeTE9IjAiIHgyPSIzNDUiIHkyPSIwIiBzdHJva2U9IiNCNjQxMkEiLz48bGluZSB4MT0iNDAiIHkxPSIwIiB4Mj0iNDAiIHkyPSIxNDUiIHN0cm9rZT0iI0I2NDEyQSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1LDIwKSI+PHRleHQgY2xhc3M9InRleHQgY29udGVudCIgeD0iMCIgeT0iLTIwIj48dHNwYW4geD0iMCIgZHk9IjIwIj48dHNwYW4gY2xhc3M9Im11dGVkIj4+PC90c3Bhbj48dHNwYW4+SGVsbG8gd29ybGQ8L3RzcGFuPjwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSIyMCI+PHRzcGFuIGNsYXNzPSJtdXRlZCI+PjwvdHNwYW4+PHRzcGFuPjwvdHNwYW4+PC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjIwIj48dHNwYW4gY2xhc3M9Im11dGVkIj4+PC90c3Bhbj48dHNwYW4+PC90c3Bhbj48L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iMjAiPjx0c3BhbiBjbGFzcz0ibXV0ZWQiPj48L3RzcGFuPjx0c3Bhbj48L3RzcGFuPjwvdHNwYW4+PC90ZXh0PjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTE5KSI+PHRleHQgY2xhc3M9InRleHQgZmluZXByaW50IiB4PSIwIiB5PSIwIj5GT1IgT05FIEZSRUUgUkVTUE9OU0UgVE8gVEhJUyBURUxFR1JBTSwgVklTSVQgVEhFIE1FVEFWRVJBTCBQT1NUIE9GRklDRSBPUjwvdGV4dD48dGV4dCBjbGFzcz0idGV4dCBmaW5lcHJpbnQiIHg9IjAiIHk9IjYiPldXVy5NRVRBVkVSU0FMUE9TVC5JTyBXSVRIIFRIRSBXQUxMRVQgT1dOSU5HIFRISVMgTk9OLUZVTkdJQkxFIFRFTEVHUkFNLjwvdGV4dD48L2c+PC9nPjwvZz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJzdGFtcCIgZmlsbD0ibm9uZSIgZD0iTSAwLDI1IEEgMjUgMjUgMCAxIDAgMCwyNC45OSB6IiAvPjxmaWx0ZXIgaWQ9ImYyIiB4PSItMC4xIiB5PSItMC4xIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj48ZmVPZmZzZXQgcmVzdWx0PSJvZmZPdXQiIGluPSJTb3VyY2VBbHBoYSIgZHg9IjAiIGR5PSIwIiAvPjxmZUdhdXNzaWFuQmx1ciByZXN1bHQ9ImJsdXJPdXQiIGluPSJvZmZPdXQiIHN0ZERldmlhdGlvbj0iMTAiIC8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iYmx1ck91dCIgbW9kZT0ibm9ybWFsIiAvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4g"
  // );

  clearStore();
});
