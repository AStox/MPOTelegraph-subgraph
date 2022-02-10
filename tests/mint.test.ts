import { clearStore, test, assert } from "matchstick-as/assembly/index";
import {
  createNewMintEvent,
  createNewTransferEvent,
  handleMint,
  handleTransfer,
} from "../src/mapping";
import { Telegraph } from "../generated/schema";
import { Address, log, BigInt, ethereum } from "@graphprotocol/graph-ts";

test("check ethereum values", () => {
  log.info("here we go", []);
  let val = ethereum.Value.fromUnsignedBigInt(BigInt.fromString("56"));
  let bigint = val.toBigInt();
  log.info("bbb {}", [val.toBigInt().toString()]);
});

test("Can call mappings with custom events", () => {
  // Initialise
  //   let telegraph = new Telegraph("1");
  //   telegraph.save();

  let transfer1 = createNewTransferEvent(
    33,
    "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
    "0x4e45AFCf5ea8446be066A163cB274e719020FC41"
  );
  let mint1 = createNewMintEvent(
    33,
    "0x225ef95fa90f4F7938A5b34234d14768cB4263dd",
    "Hello world!"
  );

  //   let transfer2 = createNewTransferEvent(
  //     BigInt.fromI32(2349076),
  //     "0x4e45AFCf5ea8446be066A163cB274e719020FC41",
  //     "0x225ef95fa90f4F7938A5b34234d14768cB4263dd"
  //   );
  //   let mint2 = createNewMintEvent(
  //     BigInt.fromI32(2349076),
  //     "0x4e45AFCf5ea8446be066A163cB274e719020FC41",
  //     "Goodbye world!"
  //   );

  handleTransfer(transfer1);
  handleMint(mint1);
  //   handleTransfer(transfer2);
  //   handleMint(mint2);
  //
  //   assert.fieldEquals("Telegraph", "1", "id", "1");
  assert.fieldEquals(
    "Telegraph",
    "934984",
    "to",
    "0x225ef95fa90f4F7938A5b34234d14768cB4263dd"
  );
  assert.fieldEquals("Telegraph", "2349076", "text", "Goodbye world!");

  clearStore();
});
