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
import generateSVG from "./utils/svgGenerator";

// export { runTests } from "../tests/mint.test";

export function handleMint(event: Mint): void {
  log.info("handleMint id: {}, from: {}, text: {}", [
    event.params.tokenId.toString(),
    event.params.from.toHexString(),
    event.params.text.toString(),
  ]);
  let telegraph = Telegraph.load(event.params.tokenId.toString());
  if (telegraph) {
    telegraph.name = "Multiversal Post Office Telegraph";
    telegraph.description =
      "An NFT messenger. Send a telegraph straight to any wallet.";
    telegraph.from = event.params.from.toHexString();
    telegraph.message = event.params.text.toString();
    telegraph.image = generateSVG(
      event.params.tokenId.toString(),
      telegraph.to as string,
      event.params.from.toHexString(),
      event.params.text.toString(),
      event.block.number,
      event.block.hash
    );
    telegraph.save();
  }
}

export function handleTransfer(event: Transfer): void {
  log.info("handleTransfer id: {}, from: {}, to: {}", [
    event.params.tokenId.toString(),
    event.params.from.toHexString(),
    event.params.to.toHexString(),
  ]);
  let telegraph = Telegraph.load(event.params.tokenId.toString());
  if (!telegraph) {
    telegraph = new Telegraph(event.params.tokenId.toString());
    telegraph.to = event.params.to.toHexString();
  }
  telegraph.save();
}

export function createNewMintEvent(from: string, id: i32, text: string): Mint {
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
    ethereum.Value.fromString(text)
  );
  newMintEvent.parameters.push(fromParam);
  newMintEvent.parameters.push(idParam);
  newMintEvent.parameters.push(textParam);

  return newMintEvent;
}

export function createNewTransferEvent(
  from: string,
  to: string,
  id: i32
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

  newTransferEvent.parameters.push(fromParam);
  newTransferEvent.parameters.push(toParam);
  newTransferEvent.parameters.push(idParam);

  return newTransferEvent;
}
