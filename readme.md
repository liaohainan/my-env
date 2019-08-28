# 判断当前宿主环境
## install
```shell
npm install my-universal-env --save
```

## Usage

```js
import { isWeex, isWeb, isMiniApp, isReactNative } from 'my-universal-env';

```

fork by universal-env

并修复了相关bug，将isMiniApp的改为微信，而不是原来的支付宝小程序
