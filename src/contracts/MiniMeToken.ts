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

export class MiniMeToken extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "creationBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_newController", type: "address" }],
        name: "changeController",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "version",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "parentToken",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "transfersEnabled",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "parentSnapShotBlock",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "tokenFactory",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "controller",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          { name: "_tokenFactory", type: "address" },
          { name: "_parentToken", type: "address" },
          { name: "_parentSnapShotBlock", type: "uint256" },
          { name: "_tokenName", type: "string" },
          { name: "_decimalUnits", type: "uint8" },
          { name: "_tokenSymbol", type: "string" },
          { name: "_transfersEnabled", type: "bool" }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      { payable: true, stateMutability: "payable", type: "fallback" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_token", type: "address" },
          { indexed: true, name: "_controller", type: "address" },
          { indexed: false, name: "_amount", type: "uint256" }
        ],
        name: "ClaimedTokens",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_from", type: "address" },
          { indexed: true, name: "_to", type: "address" },
          { indexed: false, name: "_amount", type: "uint256" }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_cloneToken", type: "address" },
          { indexed: false, name: "_snapshotBlock", type: "uint256" }
        ],
        name: "NewCloneToken",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "_owner", type: "address" },
          { indexed: true, name: "_spender", type: "address" },
          { indexed: false, name: "_amount", type: "uint256" }
        ],
        name: "Approval",
        type: "event"
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "transfer",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "transferFrom",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "approve",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" }
        ],
        name: "allowance",
        outputs: [{ name: "remaining", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_amount", type: "uint256" },
          { name: "_extraData", type: "bytes" }
        ],
        name: "approveAndCall",
        outputs: [{ name: "success", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_blockNumber", type: "uint256" }
        ],
        name: "balanceOfAt",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [{ name: "_blockNumber", type: "uint256" }],
        name: "totalSupplyAt",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_cloneTokenName", type: "string" },
          { name: "_cloneDecimalUnits", type: "uint8" },
          { name: "_cloneTokenSymbol", type: "string" },
          { name: "_snapshotBlock", type: "uint256" },
          { name: "_transfersEnabled", type: "bool" }
        ],
        name: "createCloneToken",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "generateTokens",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_amount", type: "uint256" }
        ],
        name: "destroyTokens",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_transfersEnabled", type: "bool" }],
        name: "enableTransfers",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "_token", type: "address" }],
        name: "claimTokens",
        outputs: [],
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
  ): Promise<MiniMeToken> {
    const contract = new MiniMeToken(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === "0x0") {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get name(): Promise<string> {
    return promisify(this.rawWeb3Contract.name, []);
  }
  public get creationBlock(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.creationBlock, []);
  }
  public get decimals(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.decimals, []);
  }
  public get version(): Promise<string> {
    return promisify(this.rawWeb3Contract.version, []);
  }
  public get parentToken(): Promise<string> {
    return promisify(this.rawWeb3Contract.parentToken, []);
  }
  public get symbol(): Promise<string> {
    return promisify(this.rawWeb3Contract.symbol, []);
  }
  public get transfersEnabled(): Promise<boolean> {
    return promisify(this.rawWeb3Contract.transfersEnabled, []);
  }
  public get parentSnapShotBlock(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.parentSnapShotBlock, []);
  }
  public get tokenFactory(): Promise<string> {
    return promisify(this.rawWeb3Contract.tokenFactory, []);
  }
  public get controller(): Promise<string> {
    return promisify(this.rawWeb3Contract.controller, []);
  }
  public get totalSupply(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.totalSupply, []);
  }
  public balanceOf(_owner: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.balanceOf, [_owner.toString()]);
  }
  public allowance(
    _owner: BigNumber | string,
    _spender: BigNumber | string
  ): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.allowance, [
      _owner.toString(),
      _spender.toString()
    ]);
  }
  public balanceOfAt(
    _owner: BigNumber | string,
    _blockNumber: BigNumber | number
  ): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.balanceOfAt, [
      _owner.toString(),
      _blockNumber.toString()
    ]);
  }
  public totalSupplyAt(_blockNumber: BigNumber | number): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.totalSupplyAt, [
      _blockNumber.toString()
    ]);
  }

  public changeControllerTx(
    _newController: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "changeController", [
      _newController.toString()
    ]);
  }
  public transferTx(
    _to: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transfer", [
      _to.toString(),
      _amount.toString()
    ]);
  }
  public transferFromTx(
    _from: BigNumber | string,
    _to: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transferFrom", [
      _from.toString(),
      _to.toString(),
      _amount.toString()
    ]);
  }
  public approveTx(
    _spender: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "approve", [
      _spender.toString(),
      _amount.toString()
    ]);
  }
  public approveAndCallTx(
    _spender: BigNumber | string,
    _amount: BigNumber | number,
    _extraData: BigNumber[]
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "approveAndCall", [
      _spender.toString(),
      _amount.toString(),
      _extraData.toString()
    ]);
  }
  public createCloneTokenTx(
    _cloneTokenName: string,
    _cloneDecimalUnits: BigNumber | number,
    _cloneTokenSymbol: string,
    _snapshotBlock: BigNumber | number,
    _transfersEnabled: boolean
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "createCloneToken", [
      _cloneTokenName.toString(),
      _cloneDecimalUnits.toString(),
      _cloneTokenSymbol.toString(),
      _snapshotBlock.toString(),
      _transfersEnabled.toString()
    ]);
  }
  public generateTokensTx(
    _owner: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "generateTokens", [
      _owner.toString(),
      _amount.toString()
    ]);
  }
  public destroyTokensTx(
    _owner: BigNumber | string,
    _amount: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "destroyTokens", [
      _owner.toString(),
      _amount.toString()
    ]);
  }
  public enableTransfersTx(
    _transfersEnabled: boolean
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "enableTransfers", [
      _transfersEnabled.toString()
    ]);
  }
  public claimTokensTx(
    _token: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "claimTokens", [
      _token.toString()
    ]);
  }
}
