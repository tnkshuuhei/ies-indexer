// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class EvaluationCreated extends ethereum.Event {
  get params(): EvaluationCreated__Params {
    return new EvaluationCreated__Params(this);
  }
}

export class EvaluationCreated__Params {
  _event: EvaluationCreated;

  constructor(event: EvaluationCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get evaluation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ImpactReportCreated extends ethereum.Event {
  get params(): ImpactReportCreated__Params {
    return new ImpactReportCreated__Params(this);
  }
}

export class ImpactReportCreated__Params {
  _event: ImpactReportCreated;

  constructor(event: ImpactReportCreated) {
    this._event = event;
  }

  get projectHatId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reportHatId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get proposalId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get treasury(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get governor(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get schemaUID(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get topHatId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class MinimumDepositChanged extends ethereum.Event {
  get params(): MinimumDepositChanged__Params {
    return new MinimumDepositChanged__Params(this);
  }
}

export class MinimumDepositChanged__Params {
  _event: MinimumDepositChanged;

  constructor(event: MinimumDepositChanged) {
    this._event = event;
  }

  get minDeposit(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PoolFunded extends ethereum.Event {
  get params(): PoolFunded__Params {
    return new PoolFunded__Params(this);
  }
}

export class PoolFunded__Params {
  _event: PoolFunded;

  constructor(event: PoolFunded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ProfileCreated extends ethereum.Event {
  get params(): ProfileCreated__Params {
    return new ProfileCreated__Params(this);
  }
}

export class ProfileCreated__Params {
  _event: ProfileCreated;

  constructor(event: ProfileCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get hatId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get metadata(): string {
    return this._event.parameters[3].value.toString();
  }

  get owner(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleCreated extends ethereum.Event {
  get params(): RoleCreated__Params {
    return new RoleCreated__Params(this);
  }
}

export class RoleCreated__Params {
  _event: RoleCreated;

  constructor(event: RoleCreated) {
    this._event = event;
  }

  get projectHatid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reportHatId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get roleHatId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get wearers(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get metadata(): string {
    return this._event.parameters[4].value.toString();
  }

  get imageURL(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TreasuryUpdated extends ethereum.Event {
  get params(): TreasuryUpdated__Params {
    return new TreasuryUpdated__Params(this);
  }
}

export class TreasuryUpdated__Params {
  _event: TreasuryUpdated;

  constructor(event: TreasuryUpdated) {
    this._event = event;
  }

  get treasury(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class IES__createReportResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getReportHatsId(): BigInt {
    return this.value0;
  }

  getPoolId(): BigInt {
    return this.value1;
  }

  getProposalId(): BigInt {
    return this.value2;
  }
}

export class IES__evaluationsResult {
  value0: Bytes;
  value1: BigInt;
  value2: Address;
  value3: Address;
  value4: BigInt;
  value5: string;

  constructor(
    value0: Bytes,
    value1: BigInt,
    value2: Address,
    value3: Address,
    value4: BigInt,
    value5: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromString(this.value5));
    return map;
  }

  getProfileId(): Bytes {
    return this.value0;
  }

  getProjectHatId(): BigInt {
    return this.value1;
  }

  getEvaluation(): Address {
    return this.value2;
  }

  getToken(): Address {
    return this.value3;
  }

  getAmount(): BigInt {
    return this.value4;
  }

  getMetadata(): string {
    return this.value5;
  }
}

export class IES__profilesByIdResult {
  value0: Bytes;
  value1: BigInt;
  value2: string;
  value3: string;
  value4: Address;
  value5: string;

  constructor(
    value0: Bytes,
    value1: BigInt,
    value2: string,
    value3: string,
    value4: Address,
    value5: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromString(this.value5));
    return map;
  }

  getId(): Bytes {
    return this.value0;
  }

  getHatId(): BigInt {
    return this.value1;
  }

  getName(): string {
    return this.value2;
  }

  getMetadata(): string {
    return this.value3;
  }

  getOwner(): Address {
    return this.value4;
  }

  getImageURL(): string {
    return this.value5;
  }
}

export class IES__registerProjectResult {
  value0: Bytes;
  value1: BigInt;

  constructor(value0: Bytes, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getProfileId(): Bytes {
    return this.value0;
  }

  getHatId(): BigInt {
    return this.value1;
  }
}

export class IES extends ethereum.SmartContract {
  static bind(address: Address): IES {
    return new IES("IES", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MIN_DEPOSIT(): BigInt {
    let result = super.call("MIN_DEPOSIT", "MIN_DEPOSIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_DEPOSIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_DEPOSIT", "MIN_DEPOSIT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  attest(
    profileId: Bytes,
    contributors: Array<Address>,
    proposal: string,
    metadataUID: string
  ): Bytes {
    let result = super.call(
      "attest",
      "attest(bytes32,address[],string,string):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(profileId),
        ethereum.Value.fromAddressArray(contributors),
        ethereum.Value.fromString(proposal),
        ethereum.Value.fromString(metadataUID)
      ]
    );

    return result[0].toBytes();
  }

  try_attest(
    profileId: Bytes,
    contributors: Array<Address>,
    proposal: string,
    metadataUID: string
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "attest",
      "attest(bytes32,address[],string,string):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(profileId),
        ethereum.Value.fromAddressArray(contributors),
        ethereum.Value.fromString(proposal),
        ethereum.Value.fromString(metadataUID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  createReport(
    _hatId: BigInt,
    _contributors: Array<Address>,
    _description: string,
    _imageURL: string,
    _proposor: Address,
    _roleData: Array<Bytes>
  ): IES__createReportResult {
    let result = super.call(
      "createReport",
      "createReport(uint256,address[],string,string,address,bytes[]):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_hatId),
        ethereum.Value.fromAddressArray(_contributors),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_imageURL),
        ethereum.Value.fromAddress(_proposor),
        ethereum.Value.fromBytesArray(_roleData)
      ]
    );

    return new IES__createReportResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_createReport(
    _hatId: BigInt,
    _contributors: Array<Address>,
    _description: string,
    _imageURL: string,
    _proposor: Address,
    _roleData: Array<Bytes>
  ): ethereum.CallResult<IES__createReportResult> {
    let result = super.tryCall(
      "createReport",
      "createReport(uint256,address[],string,string,address,bytes[]):(uint256,uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_hatId),
        ethereum.Value.fromAddressArray(_contributors),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_imageURL),
        ethereum.Value.fromAddress(_proposor),
        ethereum.Value.fromBytesArray(_roleData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IES__createReportResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  eas(): Address {
    let result = super.call("eas", "eas():(address)", []);

    return result[0].toAddress();
  }

  try_eas(): ethereum.CallResult<Address> {
    let result = super.tryCall("eas", "eas():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  evaluationAddrByHatId(param0: BigInt): Address {
    let result = super.call(
      "evaluationAddrByHatId",
      "evaluationAddrByHatId(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_evaluationAddrByHatId(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "evaluationAddrByHatId",
      "evaluationAddrByHatId(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  evaluationCount(): BigInt {
    let result = super.call(
      "evaluationCount",
      "evaluationCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_evaluationCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "evaluationCount",
      "evaluationCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  evaluations(param0: BigInt): IES__evaluationsResult {
    let result = super.call(
      "evaluations",
      "evaluations(uint256):(bytes32,uint256,address,address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new IES__evaluationsResult(
      result[0].toBytes(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toString()
    );
  }

  try_evaluations(param0: BigInt): ethereum.CallResult<IES__evaluationsResult> {
    let result = super.tryCall(
      "evaluations",
      "evaluations(uint256):(bytes32,uint256,address,address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IES__evaluationsResult(
        value[0].toBytes(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toString()
      )
    );
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  governor(): Address {
    let result = super.call("governor", "governor():(address)", []);

    return result[0].toAddress();
  }

  try_governor(): ethereum.CallResult<Address> {
    let result = super.tryCall("governor", "governor():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hats(): Address {
    let result = super.call("hats", "hats():(address)", []);

    return result[0].toAddress();
  }

  try_hats(): ethereum.CallResult<Address> {
    let result = super.tryCall("hats", "hats():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    operator: Address,
    from: Address,
    ids: Array<BigInt>,
    values: Array<BigInt>,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigIntArray(ids),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    operator: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    operator: Address,
    from: Address,
    id: BigInt,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(operator),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(id),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  profilesById(param0: BigInt): IES__profilesByIdResult {
    let result = super.call(
      "profilesById",
      "profilesById(uint256):(bytes32,uint256,string,string,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new IES__profilesByIdResult(
      result[0].toBytes(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toString(),
      result[4].toAddress(),
      result[5].toString()
    );
  }

  try_profilesById(
    param0: BigInt
  ): ethereum.CallResult<IES__profilesByIdResult> {
    let result = super.tryCall(
      "profilesById",
      "profilesById(uint256):(bytes32,uint256,string,string,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IES__profilesByIdResult(
        value[0].toBytes(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toString(),
        value[4].toAddress(),
        value[5].toString()
      )
    );
  }

  projectReportCount(param0: BigInt): BigInt {
    let result = super.call(
      "projectReportCount",
      "projectReportCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_projectReportCount(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "projectReportCount",
      "projectReportCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  registerProject(
    _name: string,
    _imageURL: string,
    _metadata: string,
    _owner: Address
  ): IES__registerProjectResult {
    let result = super.call(
      "registerProject",
      "registerProject(string,string,string,address):(bytes32,uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_imageURL),
        ethereum.Value.fromString(_metadata),
        ethereum.Value.fromAddress(_owner)
      ]
    );

    return new IES__registerProjectResult(
      result[0].toBytes(),
      result[1].toBigInt()
    );
  }

  try_registerProject(
    _name: string,
    _imageURL: string,
    _metadata: string,
    _owner: Address
  ): ethereum.CallResult<IES__registerProjectResult> {
    let result = super.tryCall(
      "registerProject",
      "registerProject(string,string,string,address):(bytes32,uint256)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_imageURL),
        ethereum.Value.fromString(_metadata),
        ethereum.Value.fromAddress(_owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new IES__registerProjectResult(value[0].toBytes(), value[1].toBigInt())
    );
  }

  resolver(): Address {
    let result = super.call("resolver", "resolver():(address)", []);

    return result[0].toAddress();
  }

  try_resolver(): ethereum.CallResult<Address> {
    let result = super.tryCall("resolver", "resolver():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  schemaUID(): Bytes {
    let result = super.call("schemaUID", "schemaUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_schemaUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("schemaUID", "schemaUID():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  splitsToken(): Address {
    let result = super.call("splitsToken", "splitsToken():(address)", []);

    return result[0].toAddress();
  }

  try_splitsToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("splitsToken", "splitsToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  topHatId(): BigInt {
    let result = super.call("topHatId", "topHatId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_topHatId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("topHatId", "topHatId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  treasury(): Address {
    let result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  voteToken(): Address {
    let result = super.call("voteToken", "voteToken():(address)", []);

    return result[0].toAddress();
  }

  try_voteToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("voteToken", "voteToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _treasury(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _gonernor(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _eas(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _schemaRegistry(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _hats(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _imageURL(): string {
    return this._call.inputValues[7].value.toString();
  }

  get _splitsToken(): Address {
    return this._call.inputValues[8].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AttestCall extends ethereum.Call {
  get inputs(): AttestCall__Inputs {
    return new AttestCall__Inputs(this);
  }

  get outputs(): AttestCall__Outputs {
    return new AttestCall__Outputs(this);
  }
}

export class AttestCall__Inputs {
  _call: AttestCall;

  constructor(call: AttestCall) {
    this._call = call;
  }

  get profileId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get contributors(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get proposal(): string {
    return this._call.inputValues[2].value.toString();
  }

  get metadataUID(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class AttestCall__Outputs {
  _call: AttestCall;

  constructor(call: AttestCall) {
    this._call = call;
  }

  get attestationUID(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ChangeMinDepositCall extends ethereum.Call {
  get inputs(): ChangeMinDepositCall__Inputs {
    return new ChangeMinDepositCall__Inputs(this);
  }

  get outputs(): ChangeMinDepositCall__Outputs {
    return new ChangeMinDepositCall__Outputs(this);
  }
}

export class ChangeMinDepositCall__Inputs {
  _call: ChangeMinDepositCall;

  constructor(call: ChangeMinDepositCall) {
    this._call = call;
  }

  get _minDeposit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeMinDepositCall__Outputs {
  _call: ChangeMinDepositCall;

  constructor(call: ChangeMinDepositCall) {
    this._call = call;
  }
}

export class CreateReportCall extends ethereum.Call {
  get inputs(): CreateReportCall__Inputs {
    return new CreateReportCall__Inputs(this);
  }

  get outputs(): CreateReportCall__Outputs {
    return new CreateReportCall__Outputs(this);
  }
}

export class CreateReportCall__Inputs {
  _call: CreateReportCall;

  constructor(call: CreateReportCall) {
    this._call = call;
  }

  get _hatId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _contributors(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _description(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _imageURL(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _proposor(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _roleData(): Array<Bytes> {
    return this._call.inputValues[5].value.toBytesArray();
  }
}

export class CreateReportCall__Outputs {
  _call: CreateReportCall;

  constructor(call: CreateReportCall) {
    this._call = call;
  }

  get reportHatsId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get poolId(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get proposalId(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RegisterProjectCall extends ethereum.Call {
  get inputs(): RegisterProjectCall__Inputs {
    return new RegisterProjectCall__Inputs(this);
  }

  get outputs(): RegisterProjectCall__Outputs {
    return new RegisterProjectCall__Outputs(this);
  }
}

export class RegisterProjectCall__Inputs {
  _call: RegisterProjectCall;

  constructor(call: RegisterProjectCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _imageURL(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _metadata(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _owner(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class RegisterProjectCall__Outputs {
  _call: RegisterProjectCall;

  constructor(call: RegisterProjectCall) {
    this._call = call;
  }

  get profileId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }

  get hatId(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get callerConfirmation(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class UpdateTreasuryCall extends ethereum.Call {
  get inputs(): UpdateTreasuryCall__Inputs {
    return new UpdateTreasuryCall__Inputs(this);
  }

  get outputs(): UpdateTreasuryCall__Outputs {
    return new UpdateTreasuryCall__Outputs(this);
  }
}

export class UpdateTreasuryCall__Inputs {
  _call: UpdateTreasuryCall;

  constructor(call: UpdateTreasuryCall) {
    this._call = call;
  }

  get _treasury(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateTreasuryCall__Outputs {
  _call: UpdateTreasuryCall;

  constructor(call: UpdateTreasuryCall) {
    this._call = call;
  }
}
