---
sidebar: auto
---

# Hello Web3

## 示例代码
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

// 按照代码规范，合约名称使用大写开头
contract HelloWeb3 {
  string public myString = "hello web3";
}
```

## 详细解释
这段代码定义了一个简单的智能合约，名为 HelloWeb3

`// SPDX-License-Identifier: MIT`
这是 SPDX 许可证标识符，用于指定该智能合约的许可类型。在这里，它使用的是 MIT 许可证，这是一种常见的开源许可证，允许广泛使用、复制、修改和分发代码。
1.  pragma solidity ^0.8.22; 
  这行代码指定了 Solidity 编译器的版本要求。`^0.8.22` 表示该合约要求编译器版本是 `0.8.22` 或任何兼容的更高版本（即不引入破坏性更改的版本）。
1.  `contract HelloWorld {}`
  这行代码定义了一个名为 HelloWorld 的智能合约。智能合约是部署在区块链上的一段代码，可以在满足特定条件时自动执行。
1.  `string public myString = "hello web3"`; 
  这一行定义了一个名为 myString 的状态变量，类型为 string，并初始化为 "hello web3"。关键字 public 使得这个变量可以从外部访问，Solidity 会自动为其生成一个 getter 函数，这样任何人都可以读取这个字符串的值。

综上所述，这个 HelloWorld 智能合约包含一个公开的字符串变量 myString，其初始值为 "hello web3"。一旦合约部署到区块链上，任何人都可以通过调用自动生成的 getter 函数来读取这个字符串的值。