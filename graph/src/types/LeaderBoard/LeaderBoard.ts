import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Creation extends EthereumEvent {
  get params(): CreationParams {
    return new CreationParams(this);
  }
}

export class CreationParams {
  _event: Creation;

  constructor(event: Creation) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get name(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get nameId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Mint extends EthereumEvent {
  get params(): MintParams {
    return new MintParams(this);
  }
}

export class MintParams {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Vote extends EthereumEvent {
  get params(): VoteParams {
    return new VoteParams(this);
  }
}

export class VoteParams {
  _event: Vote;

  constructor(event: Vote) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nameId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get name(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get total(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MinterAdded extends EthereumEvent {
  get params(): MinterAddedParams {
    return new MinterAddedParams(this);
  }
}

export class MinterAddedParams {
  _event: MinterAdded;

  constructor(event: MinterAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterRemoved extends EthereumEvent {
  get params(): MinterRemovedParams {
    return new MinterRemovedParams(this);
  }
}

export class MinterRemovedParams {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Transfer extends EthereumEvent {
  get params(): TransferParams {
    return new TransferParams(this);
  }
}

export class TransferParams {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends EthereumEvent {
  get params(): ApprovalParams {
    return new ApprovalParams(this);
  }
}

export class ApprovalParams {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LeaderBoard__TheBoardResult {
  value0: Address;
  value1: BigInt;
  value2: Bytes;

  constructor(value0: Address, value1: BigInt, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromFixedBytes(this.value2));
    return map;
  }
}

export class LeaderBoard__loadStatusResult {
  value0: Address;
  value1: BigInt;
  value2: Bytes;

  constructor(value0: Address, value1: BigInt, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromFixedBytes(this.value2));
    return map;
  }
}

export class LeaderBoard extends SmartContract {
  static bind(address: Address): LeaderBoard {
    return new LeaderBoard("LeaderBoard", address);
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);
    return result[0].toBigInt();
  }

  TheBoard(param0: BigInt): LeaderBoard__TheBoardResult {
    let result = super.call("TheBoard", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new LeaderBoard__TheBoardResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBytes()
    );
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(owner)]);
    return result[0].toBigInt();
  }

  isMinter(account: Address): boolean {
    let result = super.call("isMinter", [EthereumValue.fromAddress(account)]);
    return result[0].toBoolean();
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(owner),
      EthereumValue.fromAddress(spender)
    ]);
    return result[0].toBigInt();
  }

  IsInTheBoard(param0: Address): boolean {
    let result = super.call("IsInTheBoard", [
      EthereumValue.fromAddress(param0)
    ]);
    return result[0].toBoolean();
  }

  loadStatus(nameId: BigInt): LeaderBoard__loadStatusResult {
    let result = super.call("loadStatus", [
      EthereumValue.fromUnsignedBigInt(nameId)
    ]);
    return new LeaderBoard__loadStatusResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBytes()
    );
  }
}
