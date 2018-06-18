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

export class TokenController extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: false,
        inputs: [{ name: "_owner", type: "address" }],
        name: "proxyPayment",
        outputs: [{ name: "", type: "bool" }],
        payable: true,
        stateMutability: "payable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "onTransfer",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "onApprove",
        outputs: [{ name: "", type: "bool" }],
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
  ): Promise<TokenController> {
    const contract = new TokenController(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === "0x0") {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public proxyPaymentTx(
    _owner: BigNumber | string
  ): DeferredTransactionWrapper<IPayableTxParams> {
    return new DeferredTransactionWrapper<IPayableTxParams>(
      this,
      "proxyPayment",
      [_owner.toString()]
    );
  }
  public onTransferTx(
    _from: BigNumber | string,
    _to: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "onTransfer", [
      _from.toString(),
      _to.toString(),
      _amount.toString()
    ]);
  }
  public onApproveTx(
    _owner: BigNumber | string,
    _spender: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "onApprove", [
      _owner.toString(),
      _spender.toString(),
      _amount.toString()
    ]);
  }
}
