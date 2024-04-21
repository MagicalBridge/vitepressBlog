---
sidebar: auto
---

# Promise.race 基本使用和原理实现：

## 基本定义和概念

`Promise.race()` 是 Promise 对象的一个静态方法,它接受一个可迭代对象(如数组)作为参数, 并返回一个新的 Promise 实例。

`Promise.race()` 的行为类似于一场赛跑,它会在传入的可迭代对象中的 Promise 实例中选取一个 **最先完成** (最先解决或最先拒绝)的实例, 并将该实例的结果作为自己的结果。

具体来说:

1. 如果可迭代对象中有一个 Promise 实例先被解决(resolved),那么 `Promise.race()` 返回的 Promise 实例也会被解决,并且将这个先解决的 Promise 实例的值作为自己的值。

2. 如果可迭代对象中有一个 Promise 实例先被拒绝(rejected), 那么 `Promise.race()` 返回的 Promise 实例也会被拒绝,并且将这个先拒绝的 Promise 实例的值作为自己的值。

3. 如果可迭代对象为空, `Promise.race()` 返回的是一个 **永不解决** 的 Promise 实例。


## 应用场景
`Promise.race()` 常用于实现超时控制, 比如一个网络请求需要在指定时间内完成,否则就视为超时。

例如:


```javascript
const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Request data');
  }, 3000);
});

const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Request timed out');
  }, 2000);
});

Promise.race([request, timeout])
  .then(data => console.log(data))
  .catch(err => console.log(err));

// 输出: "Request timed out"
```

在这个例子中, `timeout` Promise 先被拒绝,因此 `Promise.race()` 返回的 Promise 实例也被拒绝,并输出 "Request timed out"。如果将 `timeout` 的超时时间延长至 4 秒,那么就会输出 "Request data"。

总之, `Promise.race()` 方法可以用于处理多个异步操作的竞态情况,并返回最先完成的那个异步操作的结果。

> race方法如果其中一个完成了，其他的还是会执行，只不过是不采用他的结果而已。

## promsie.race 模拟实现
- 1、接收的参数是一个数组，数组中数据可以是任何类型。
- 2、采用的是赛跑机制，也就是说，谁先执行完，就采用谁的值。
- 3、并不代表其他的不执行了，其他的依然会执行，只不过会忽略掉执行结果。
- 4、返回的是一个promise。

### 相关测试用例
```js
Promise.race([
  new Promise((resolve,reject)=>{resolve("成功1")}),  
  new Promise((resolve,reject)=>{resolve("成功2")}),  
  1,2,3
]).then((data) => {
  console.log(data)
}).catch((error) => { 
  console.log(error)
})
// 打印： 成功1

Promise.race([
  new Promise((resolve,reject)=>{reject("失败")}),  
  new Promise((resolve,reject)=>{resolve("成功2")}),  
  1,2,3
]).then((data) => {
  console.log(data)
}).catch((error) => { 
  console.log(error)
})
// 打印： 失败

Promise.race([
  1,
  new Promise((resolve,reject) => { reject("失败") }),  
  new Promise((resolve,reject) => { resolve("成功2") }),  
  2,3
]).then((data) => {
  console.log(data)
}).catch((error) => { 
  console.log(error)
})
// 打印：1
```

### 手写实现

```js
Promise.race = function(promises) {
  // Promise.race的返回值也是一个Promsie
  return new Promise((resolve, reject) => {
    // 使用for循环遍历
    for (let i = 0; i < promises.length; i++) {
      let p = promises[i]
      if (p && typeof p.then === "function" ) {
        // 无论有多少个promsie, 只要其中的一个成功就走成功，
        // 其中的一个失败就走失败
        p.then(resolve, reject)
      } else {
        resolve(p)
      }
    }
  })
}
```

