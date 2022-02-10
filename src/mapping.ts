import { newMockEvent } from "matchstick-as/assembly/index";
import {
  Address,
  log,
  BigInt,
  ethereum,
  Bytes,
  ByteArray,
} from "@graphprotocol/graph-ts";
import {
  MPOTelegraph,
  Approval,
  ApprovalForAll,
  Mint,
  Transfer,
} from "../generated/MPOTelegraph/MPOTelegraph";
import { Telegraph } from "../generated/schema";

// export { runTests } from "../tests/mint.test";

export function handleMint(event: Mint): void {
  // log.info("handleMint id: {}, from: {}, text: {}", [
  //   event.params.tokenId.toString(),
  //   event.params.from.toHexString(),
  //   event.params.text.toString(),
  // ]);
  log.info("guff", []);
  let telegraph = Telegraph.load(event.params.tokenId.toString());
  if (telegraph) {
    log.info("hello", []);
    telegraph.from = event.params.from.toHexString();
    // telegraph.message = event.params.text.toString();
    log.info("goodbye", []);
    telegraph.save();
    log.info("bye", []);
  }
}

export function handleTransfer(event: Transfer): void {
  log.info("okay {}", [BigInt.fromI32(23).toString()]);
  // let id =
  log.info("handleTransfer id: {}", [
    event.params.tokenId.toString(),
    // event.params.from.toHexString(),
    // event.params.to.toHexString(),
  ]);
  log.info("transfer", []);
  let telegraph = Telegraph.load(event.params.tokenId.toString());
  if (!telegraph) {
    telegraph = new Telegraph(event.params.tokenId.toString());
    telegraph.to = event.params.to.toHexString();
  }
  telegraph.save();
}

export function createNewMintEvent(id: i32, from: string, text: string): Mint {
  log.info("new MindEvent id: {}, from: {}, text: {}", [
    id.toString(),
    from,
    text,
  ]);
  let mockEvent = newMockEvent();
  let newMintEvent = new Mint(
    mockEvent.address,
    mockEvent.logIndex,
    mockEvent.transactionLogIndex,
    mockEvent.logType,
    mockEvent.block,
    mockEvent.transaction,
    mockEvent.parameters
  );
  newMintEvent.parameters = new Array();
  let idParam = new ethereum.EventParam("tokenId", ethereum.Value.fromI32(id));
  let fromParam = new ethereum.EventParam(
    "from",
    ethereum.Value.fromAddress(Address.fromString(from))
  );
  let textParam = new ethereum.EventParam(
    "text",
    ethereum.Value.fromBytes(Bytes.fromUTF8(text))
  );
  newMintEvent.parameters.push(idParam);
  newMintEvent.parameters.push(fromParam);
  newMintEvent.parameters.push(textParam);

  return newMintEvent;
}

export function createNewTransferEvent(
  id: i32,
  from: string,
  to: string
): Transfer {
  log.info("new TransferEvent id: {}, from: {}, to: {}", [
    id.toString(),
    from,
    to,
  ]);
  let newTransferEvent = changetype<Transfer>(newMockEvent());
  newTransferEvent.parameters = new Array();
  let idParam = new ethereum.EventParam("tokenId", ethereum.Value.fromI32(id));
  let fromParam = new ethereum.EventParam(
    "from",
    ethereum.Value.fromAddress(Address.fromString(from))
  );
  let toParam = new ethereum.EventParam(
    "to",
    ethereum.Value.fromAddress(Address.fromString(to))
  );

  newTransferEvent.parameters.push(idParam);
  newTransferEvent.parameters.push(fromParam);
  newTransferEvent.parameters.push(toParam);

  return newTransferEvent;
}

export function createNewGravatarEvent(
  id: i32,
  ownerAddress: string,
  displayName: string,
  imageUrl: string
): NewGravatar {
  let newGravatarEvent = changetype<NewGravatar>(newMockEvent());
  newGravatarEvent.parameters = new Array();
  let idParam = new ethereum.EventParam("id", ethereum.Value.fromI32(id));
  let addressParam = new ethereum.EventParam(
    "ownderAddress",
    ethereum.Value.fromAddress(Address.fromString(ownerAddress))
  );
  let displayNameParam = new ethereum.EventParam(
    "displayName",
    ethereum.Value.fromString(displayName)
  );
  let imageUrlParam = new ethereum.EventParam(
    "imageUrl",
    ethereum.Value.fromString(imageUrl)
  );

  newGravatarEvent.parameters.push(idParam);
  newGravatarEvent.parameters.push(addressParam);
  newGravatarEvent.parameters.push(displayNameParam);
  newGravatarEvent.parameters.push(imageUrlParam);

  return newGravatarEvent;
}
