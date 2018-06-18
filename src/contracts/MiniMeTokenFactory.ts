/* GENERATED BY TYPECHAIN VER. 0.1.4 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import {
  TypeChainContract,
  promisify,
  ITxParams,
  IPayableTxParams,
  DeferredTransactionWrapper
} from "./typechain-runtime";

export class MiniMeTokenFactory extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: false,
        inputs: [
          { name: "_parentToken", type: "address" },
          { name: "_snapshotBlock", type: "uint256" },
          { name: "_tokenName", type: "string" },
          { name: "_decimalUnits", type: "uint8" },
          { name: "_tokenSymbol", type: "string" },
          { name: "_transfersEnabled", type: "bool" }
        ],
        name: "createCloneToken",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<MiniMeTokenFactory> {
    const contract = new MiniMeTokenFactory(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === "0x0") {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public createCloneTokenTx(
    _parentToken: BigNumber | string,
    _snapshotBlock: BigNumber | number,
    _tokenName: string,
    _decimalUnits: BigNumber | number,
    _tokenSymbol: string,
    _transfersEnabled: boolean
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "createCloneToken", [
      _parentToken.toString(),
      _snapshotBlock.toString(),
      _tokenName.toString(),
      _decimalUnits.toString(),
      _tokenSymbol.toString(),
      _transfersEnabled.toString()
    ]);
  }
}
