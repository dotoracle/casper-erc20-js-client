var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var casper_js_sdk_1 = require("casper-js-sdk");
var blake = __importStar(require("blakejs"));
var bytes_1 = require("@ethersproject/bytes");
var casper_js_client_helper_1 = require("casper-js-client-helper");
var constants_1 = require("./constants");
var sha256_1 = require("ethereum-cryptography/sha256");
var DEFAULT_TTL = casper_js_client_helper_1.constants.DEFAULT_TTL;
var fromCLMap = casper_js_client_helper_1.helpers.fromCLMap, toCLMap = casper_js_client_helper_1.helpers.toCLMap, installContract = casper_js_client_helper_1.helpers.installContract, setClient = casper_js_client_helper_1.helpers.setClient, contractSimpleGetter = casper_js_client_helper_1.helpers.contractSimpleGetter, contractCallFn = casper_js_client_helper_1.helpers.contractCallFn, createRecipientAddress = casper_js_client_helper_1.helpers.createRecipientAddress;
var genRanHex = function (size) {
    return __spreadArray([], Array(size), true).map(function () { return Math.floor(Math.random() * 16).toString(16); })
        .join("");
};
var ERC20Client = (function (_super) {
    __extends(ERC20Client, _super);
    function ERC20Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ERC20Client.prototype.install = function (keys, tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply, minter, swap_fee, dev, origin_chainid, origin_contract_address, paymentAmount, wasmPath) {
        return __awaiter(this, void 0, void 0, function () {
            var runtimeArgs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            name: casper_js_sdk_1.CLValueBuilder.string(tokenName),
                            symbol: casper_js_sdk_1.CLValueBuilder.string(tokenSymbol),
                            decimals: casper_js_sdk_1.CLValueBuilder.u8(tokenDecimals),
                            total_supply: casper_js_sdk_1.CLValueBuilder.u256(tokenTotalSupply),
                            minter: casper_js_sdk_1.CLValueBuilder.string(minter),
                            swap_fee: casper_js_sdk_1.CLValueBuilder.u256(swap_fee),
                            dev: casper_js_sdk_1.CLValueBuilder.string(dev),
                            origin_chainid: casper_js_sdk_1.CLValueBuilder.u256(origin_chainid),
                            origin_contract_address: casper_js_sdk_1.CLValueBuilder.string(origin_contract_address),
                        });
                        return [4, installContract(this.chainName, this.nodeAddress, keys, runtimeArgs, paymentAmount, wasmPath)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.setContractHash = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var properHash, _a, contractPackageHash, namedKeys;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        properHash = hash.startsWith("hash-") ? hash.slice(5) : hash;
                        return [4, setClient(this.nodeAddress, properHash, ["balances", "allowances", "request_map"])];
                    case 1:
                        _a = _b.sent(), contractPackageHash = _a.contractPackageHash, namedKeys = _a.namedKeys;
                        this.contractHash = hash;
                        this.contractPackageHash = contractPackageHash;
                        this.namedKeys = namedKeys;
                        return [2];
                }
            });
        });
    };
    ERC20Client.prototype.name = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "name",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.symbol = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "symbol",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.decimals = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "decimals",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.totalSupply = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "total_supply",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.swapFee = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "swap_fee",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.minter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "minter",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.originChainId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "origin_chainid",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.originContractAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "origin_contract_address",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.dev = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, contractSimpleGetter(this.nodeAddress, this.contractHash, [
                            "dev",
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.transfer = function (keys, recipient, transferAmount, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            recipient: createRecipientAddress(recipient),
                            amount: casper_js_sdk_1.CLValueBuilder.u256(transferAmount),
                        });
                        return [4, this.contractCall({
                                entryPoint: "transfer",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) {
                                    return _this.addPendingDeploy(constants_1.ERC20Events.Transfer, deployHash);
                                },
                                ttl: ttl,
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.transferFrom = function (keys, owner, recipient, transferAmount, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            recipient: createRecipientAddress(recipient),
                            owner: createRecipientAddress(owner),
                            amount: casper_js_sdk_1.CLValueBuilder.u256(transferAmount),
                        });
                        return [4, this.contractCall({
                                entryPoint: "transfer_from",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) {
                                    return _this.addPendingDeploy(constants_1.ERC20Events.Transfer, deployHash);
                                },
                                ttl: ttl,
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.approve = function (keys, spender, approveAmount, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            spender: createRecipientAddress(spender),
                            amount: casper_js_sdk_1.CLValueBuilder.u256(approveAmount),
                        });
                        return [4, this.contractCall({
                                entryPoint: "approve",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) {
                                    return _this.addPendingDeploy(constants_1.ERC20Events.Approve, deployHash);
                                },
                                ttl: ttl,
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.balanceOf = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var key, keyBytes, itemKey, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        key = createRecipientAddress(account);
                        keyBytes = casper_js_sdk_1.CLValueParsers.toBytes(key).unwrap();
                        itemKey = Buffer.from(keyBytes).toString("base64");
                        return [4, casper_js_client_helper_1.utils.contractDictionaryGetter(this.nodeAddress, itemKey, this.namedKeys.balances)];
                    case 1:
                        result = _a.sent();
                        return [2, result.toString()];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1.toString().includes("Failed to find base key at path")) {
                            return [2, "0"];
                        }
                        throw e_1;
                    case 3: return [2];
                }
            });
        });
    };
    ERC20Client.prototype.readRequestIndex = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, casper_js_client_helper_1.utils.contractDictionaryGetter(this.nodeAddress, id, this.namedKeys.requestMap)];
                    case 1:
                        result = _a.sent();
                        return [2, result.toString()];
                    case 2:
                        e_2 = _a.sent();
                        if (e_2.toString().includes("Failed to find base key at path")) {
                            return [2, "0"];
                        }
                        throw e_2;
                    case 3: return [2];
                }
            });
        });
    };
    ERC20Client.prototype.allowances = function (owner, spender) {
        return __awaiter(this, void 0, void 0, function () {
            var keyOwner, keySpender, finalBytes, blaked, encodedBytes, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyOwner = createRecipientAddress(owner);
                        keySpender = createRecipientAddress(spender);
                        finalBytes = (0, bytes_1.concat)([
                            casper_js_sdk_1.CLValueParsers.toBytes(keyOwner).unwrap(),
                            casper_js_sdk_1.CLValueParsers.toBytes(keySpender).unwrap(),
                        ]);
                        blaked = blake.blake2b(finalBytes, undefined, 32);
                        encodedBytes = Buffer.from(blaked).toString("hex");
                        return [4, casper_js_client_helper_1.utils.contractDictionaryGetter(this.nodeAddress, encodedBytes, this.namedKeys.allowances)];
                    case 1:
                        result = _a.sent();
                        return [2, result.toString()];
                }
            });
        });
    };
    ERC20Client.prototype.mint = function (keys, recipient, transferAmount, mintid, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var swapFee, runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.swapFee()];
                    case 1:
                        swapFee = _a.sent();
                        swapFee = swapFee.toString();
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            recipient: createRecipientAddress(recipient),
                            amount: casper_js_sdk_1.CLValueBuilder.u256(transferAmount),
                            mintid: casper_js_sdk_1.CLValueBuilder.string(mintid),
                            swap_fee: casper_js_sdk_1.CLValueBuilder.u256(swapFee),
                        });
                        return [4, this.contractCall({
                                entryPoint: "mint",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) { return _this.addPendingDeploy(constants_1.ERC20Events.Mint, deployHash); },
                                ttl: ttl,
                            })];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.createUnsignedMint = function (publicKey, recipient, transferAmount, mintid, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var swapFee, runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.swapFee()];
                    case 1:
                        swapFee = _a.sent();
                        swapFee = swapFee.toString();
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            recipient: createRecipientAddress(recipient),
                            amount: casper_js_sdk_1.CLValueBuilder.u256(transferAmount),
                            mintid: casper_js_sdk_1.CLValueBuilder.string(mintid),
                            swap_fee: casper_js_sdk_1.CLValueBuilder.u256(swapFee),
                        });
                        return [4, this.createUnsignedContractCall({
                                entryPoint: "mint",
                                publicKey: publicKey,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deploy) { return _this.addPendingDeploy(constants_1.ERC20Events.Mint, deploy); },
                                ttl: ttl,
                            })];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.changeMinter = function (keys, minter, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            minter: createRecipientAddress(minter),
                        });
                        return [4, this.contractCall({
                                entryPoint: "change_minter",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) {
                                    return _this.addPendingDeploy(constants_1.ERC20Events.ChangeMinter, deployHash);
                                },
                                ttl: ttl,
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.changeDev = function (keys, dev, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            dev: createRecipientAddress(dev),
                        });
                        return [4, this.contractCall({
                                entryPoint: "change_dev",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) {
                                    return _this.addPendingDeploy(constants_1.ERC20Events.ChangeDev, deployHash);
                                },
                                ttl: ttl,
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.changeSwapFee = function (keys, swapFee, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            swap_fee: casper_js_sdk_1.CLValueBuilder.u256(swapFee),
                        });
                        return [4, this.contractCall({
                                entryPoint: "change_swap_fee",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) {
                                    return _this.addPendingDeploy(constants_1.ERC20Events.ChangeFee, deployHash);
                                },
                                ttl: ttl,
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.requestBridgeBack = function (keys, amount, toChainId, receiverAddress, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var fee, id, runtimeArgs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.swapFee()];
                    case 1:
                        fee = _a.sent();
                        fee = fee.toString();
                        id = genRanHex(64).toLowerCase();
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            amount: casper_js_sdk_1.CLValueBuilder.u256(amount),
                            fee: casper_js_sdk_1.CLValueBuilder.u256(fee),
                            to_chainid: casper_js_sdk_1.CLValueBuilder.u256(toChainId),
                            receiver_address: casper_js_sdk_1.CLValueBuilder.string(receiverAddress),
                            id: casper_js_sdk_1.CLValueBuilder.string(id),
                        });
                        return [4, this.contractCall({
                                entryPoint: "request_bridge_back",
                                keys: keys,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deployHash) {
                                    return _this.addPendingDeploy(constants_1.ERC20Events.ChangeFee, deployHash);
                                },
                                ttl: ttl,
                            })];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    };
    ERC20Client.prototype.createUnsignedRequestBridgeBack = function (publicKey, amount, toChainId, receiverAddress, paymentAmount, ttl) {
        if (ttl === void 0) { ttl = DEFAULT_TTL; }
        return __awaiter(this, void 0, void 0, function () {
            var fee, id, runtimeArgs, deploy, hashToSign;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.swapFee()];
                    case 1:
                        fee = _a.sent();
                        fee = fee.toString();
                        id = genRanHex(64).toLowerCase();
                        runtimeArgs = casper_js_sdk_1.RuntimeArgs.fromMap({
                            amount: casper_js_sdk_1.CLValueBuilder.u256(amount),
                            fee: casper_js_sdk_1.CLValueBuilder.u256(fee),
                            to_chainid: casper_js_sdk_1.CLValueBuilder.u256(toChainId),
                            receiver_address: casper_js_sdk_1.CLValueBuilder.string(receiverAddress),
                            id: casper_js_sdk_1.CLValueBuilder.string(id),
                        });
                        return [4, this.createUnsignedContractCall({
                                entryPoint: "request_bridge_back",
                                publicKey: publicKey,
                                paymentAmount: paymentAmount,
                                runtimeArgs: runtimeArgs,
                                cb: function (deploy) { return _this.addPendingDeploy(constants_1.ERC20Events.Mint, deploy); },
                                ttl: ttl,
                            })];
                    case 2:
                        deploy = _a.sent();
                        hashToSign = (0, sha256_1.sha256)(Buffer.from(deploy.hash)).toString("hex");
                        return [2, { deploy: deploy, hashToSign: hashToSign }];
                }
            });
        });
    };
    return ERC20Client;
}(casper_js_client_helper_1.CasperContractClient));
exports.default = ERC20Client;
//# sourceMappingURL=erc20client.js.map