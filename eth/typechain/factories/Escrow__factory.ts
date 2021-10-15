/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Escrow } from "../Escrow";

export class Escrow__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Escrow> {
    return super.deploy(overrides || {}) as Promise<Escrow>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Escrow {
    return super.attach(address) as Escrow;
  }
  connect(signer: Signer): Escrow__factory {
    return super.connect(signer) as Escrow__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Closed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "by",
        type: "address",
      },
    ],
    name: "ConfirmPurchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "by",
        type: "address",
      },
    ],
    name: "ConfirmReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "End",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Restarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "SellerRefundBuyer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "SellerRefunded",
    type: "event",
  },
  {
    inputs: [],
    name: "buyer",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmPurchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "end",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "listPreviousBuyers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refundBuyer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundSeller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "restartContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "seller",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Escrow.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSales",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405233600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002346200005491906200010f565b6000819055503460005460026200006c919062000147565b14620000af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a690620000dc565b60405180910390fd5b62000239565b6000620000c4601583620000fe565b9150620000d18262000210565b602082019050919050565b60006020820190508181036000830152620000f781620000b5565b9050919050565b600082825260208201905092915050565b60006200011c82620001a8565b91506200012983620001a8565b9250826200013c576200013b620001e1565b5b828204905092915050565b60006200015482620001a8565b91506200016183620001a8565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200019d576200019c620001b2565b5b828202905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f56616c75652068617320746f206265206576656e2e0000000000000000000000600082015250565b611a3b80620002496000396000f3fe6080604052600436106100c25760003560e01c8063a035b1fe1161007f578063d696069711610059578063d6960697146101ed578063e8a61cc8146101f7578063efbe1c1c1461020e578063f74c124b14610225576100c2565b8063a035b1fe14610180578063c19d93fb146101ab578063c7981b1b146101d6576100c2565b806308551a53146100c757806330a52d5b146100f257806343d726d6146100fc5780636605ff66146101135780637150d8ae1461013e57806373fac6f014610169575b600080fd5b3480156100d357600080fd5b506100dc610250565b6040516100e99190611617565b60405180910390f35b6100fa610276565b005b34801561010857600080fd5b50610111610534565b005b34801561011f57600080fd5b5061012861077b565b604051610135919061170f565b60405180910390f35b34801561014a57600080fd5b50610153610788565b6040516101609190611617565b60405180910390f35b34801561017557600080fd5b5061017e6107ae565b005b34801561018c57600080fd5b50610195610a1b565b6040516101a2919061170f565b60405180910390f35b3480156101b757600080fd5b506101c0610a21565b6040516101cd9190611654565b60405180910390f35b3480156101e257600080fd5b506101eb610a34565b005b6101f5610d0d565b005b34801561020357600080fd5b5061020c610f6d565b005b34801561021a57600080fd5b50610223611204565b005b34801561023157600080fd5b5061023a611419565b6040516102479190611632565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610306576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fd906116af565b60405180910390fd5b60036004811115610340577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff166004811115610388577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b148061041257506004808111156103c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff166004811115610410577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b145b1561053257346000546002610427919061179d565b14610467576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045e906116ef565b60405180910390fd5b6000600460006101000a81548160ff021916908360048111156104b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f6aaf3aad1d1cbaace364e7580ac08458b9f1ae89f2a13c03fc6bc1c85e9690c842604051610529919061170f565b60405180910390a15b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bb906116af565b60405180910390fd5b60008060048111156105ff577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff166004811115610647577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067e9061168f565b60405180910390fd5b6003600460006101000a81548160ff021916908360048111156106d3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610740573d6000803e3d6000fd5b507f6cc09e7b5c3e49861ebe8f6867e1618fbfc14c8d0e968fde37c4243ca02a6f8342604051610770919061170f565b60405180910390a150565b6000600380549050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461083e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108359061166f565b60405180910390fd5b6001806004811115610879577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff1660048111156108c1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f89061168f565b60405180910390fd5b6002600460006101000a81548160ff0219169083600481111561094d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f193505050501580156109bc573d6000803e3d6000fd5b507fb96dd9bac389907c79dfc675d3c2dedf6867a8bad8c1b98568cafc4b42751b0942600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610a1092919061172a565b60405180910390a150565b60005481565b600460009054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ac4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610abb906116af565b60405180910390fd5b6002806004811115610aff577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff166004811115610b47577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610b87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7e9061168f565b60405180910390fd5b60048060006101000a81548160ff02191690836004811115610bd2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000546003610c22919061179d565b9081150290604051600060405180830381858888f19350505050158015610c4d573d6000803e3d6000fd5b506003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f3273c35ae429700d7ddfd8e47f99c0686bb32ef7c31f00fe6eb66b690c952e4942604051610d02919061170f565b60405180910390a150565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d95906116cf565b60405180910390fd5b6000806004811115610dd9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff166004811115610e21577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610e61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e589061168f565b60405180910390fd5b6000546002610e70919061179d565b341480610e7c57600080fd5b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460006101000a81548160ff02191690836004811115610f09577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055507f6df03f50e5eb5f7ec6366825f9ba45fea1a7a29151abb5dcecf204313129bb6142600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610f6192919061172a565b60405180910390a15050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff4906116af565b60405180910390fd5b6001806004811115611038577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff166004811115611080577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b146110c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b79061168f565b60405180910390fd5b6000600460006101000a81548160ff0219169083600481111561110c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600054600261115c919061179d565b9081150290604051600060405180830381858888f19350505050158015611187573d6000803e3d6000fd5b506000600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb141fd6cde1ad9b9950bdb10ef50487a6b31c237c16e12df3c1a72e16b29ae7c426040516111f9919061170f565b60405180910390a150565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611294576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128b906116af565b60405180910390fd5b600360048111156112ce577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff166004811115611316577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14806113a05750600480811115611356577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600460009054906101000a900460ff16600481111561139e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b145b15611417577f2c03d2f09622b67ee91478a7e43219c7ced47eff3a3f8bda2eef920181e86766426040516113d4919061170f565b60405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b6060600380548060200260200160405190810160405280929190818152602001828054801561149d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611453575b5050505050905090565b60006114b383836114dd565b60208301905092915050565b6114c881611858565b82525050565b6114d781611809565b82525050565b6114e6816117f7565b82525050565b60006114f782611763565b611501818561177b565b935061150c83611753565b8060005b8381101561153d57815161152488826114a7565b975061152f8361176e565b925050600181019050611510565b5085935050505092915050565b6115538161186a565b82525050565b600061156660198361178c565b9150611571826118fe565b602082019050919050565b6000611589600e8361178c565b915061159482611927565b602082019050919050565b60006115ac601a8361178c565b91506115b782611950565b602082019050919050565b60006115cf601b8361178c565b91506115da82611979565b602082019050919050565b60006115f260338361178c565b91506115fd826119a2565b604082019050919050565b6116118161184e565b82525050565b600060208201905061162c60008301846114ce565b92915050565b6000602082019050818103600083015261164c81846114ec565b905092915050565b6000602082019050611669600083018461154a565b92915050565b6000602082019050818103600083015261168881611559565b9050919050565b600060208201905081810360008301526116a88161157c565b9050919050565b600060208201905081810360008301526116c88161159f565b9050919050565b600060208201905081810360008301526116e8816115c2565b9050919050565b60006020820190508181036000830152611708816115e5565b9050919050565b60006020820190506117246000830184611608565b92915050565b600060408201905061173f6000830185611608565b61174c60208301846114bf565b9392505050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006117a88261184e565b91506117b38361184e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156117ec576117eb6118a0565b5b828202905092915050565b60006118028261182e565b9050919050565b60006118148261182e565b9050919050565b6000819050611829826119f1565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006118638261187c565b9050919050565b60006118758261181b565b9050919050565b60006118878261188e565b9050919050565b60006118998261182e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4f6e6c792062757965722063616e2063616c6c20746869732e00000000000000600082015250565b7f496e76616c69642073746174652e000000000000000000000000000000000000600082015250565b7f4f6e6c792073656c6c65722063616e2063616c6c20746869732e000000000000600082015250565b7f53656c6c65722073686f756c646e27742063616c6c20746869732e0000000000600082015250565b7f56616c75652068617320746f20626520657175616c20746f207768617420737460008201527f61727465642074686520636f6e74726163742e00000000000000000000000000602082015250565b60058110611a0257611a016118cf565b5b5056fea2646970667358221220a285132f45c16883da6d4a32fa838b52686dab90c4078452c4cb59f3f9fabeaa64736f6c63430008030033";
