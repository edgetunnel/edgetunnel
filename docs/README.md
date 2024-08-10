---
home: true
heroText: V2ray Edge
tagline: V2ray in Edge runtime
actions:
  - text: 部署到 Cloudflare Pages
    link: /guide/cf-pages.html
    type: primary
  - text: 加速 Cloudflare
    link: /guide/cf-ip.html
    type: primary
  - text: V2ray Node.js
    link: /guide/v2ray-nodejs.html
    type: primary
  - text: 部署到 Cloudflare Worker
    link: /guide/cf-worker.html
    type: secondary

features:
  - title: 无需任何服务器
    details: 快速部署到 Cloudflare Worker，无需任何服务器就可以运行 v2ray 服务。
  - title: 优化 Cloudflare IP
    details: 优选 Cloudflare IP 和 Cloudflare 中转 IP
  - title: Node.js 版本
    details: 在 Node.js 实现 Vless 协议。
footer: Licensed under GPL-2.0 license
---

# V2ray Edge（Beta）

众所周知，V2ray 是基于 `go` 的，导致原版 V2ray 无法部署到基于 `javaScript (V8)` 的平台上。

本项目通过，使用 `js` 实现 `VLESS`协议， 使得 **V2ray** 可以部署到一些 Edge 或者 Serverless 平台上。

> 本项目纯属技术性验证，探索最新的 web standard 和 edge runtime。如有人碰巧发现，请勿乱用，不给予任何保证。

## V2ray Edge server --- Cloudflare Worker

[cf-worker](./guide/cf-worker.md)

## V2ray Edge server --- Node.js

很多 Node.js 的平台都是支持 docker 的，所以可以直接部署原版 v2ray。使用 Node.js 实现仅仅是处于对技术好奇的考量。

### Docker

```bash
docker run -d -p 4600:4100 -e UUID=ce6d9073-7085-4cb1-a64d-382489a2af94 zizifn/node-vless:latest
```

> 如果你想让 DNS IPV4 优先， 请设置环境变量 DNSORDER=ipv4first

### Command

```bash
export UUID=ce6d9073-7085-4cb1-a64d-382489a2af94 PORT=4100 node  ./dist/apps/node-vless/main.js
```

小内存：

```bash
export UUID=ce6d9073-7085-4cb1-a64d-382489a2af94 PORT=4100 SMALLRAM=true node  ./dist/apps/node-vless/main.js
```

> 如果你想让 DNS IPV4 优先， 请设置环境变量 DNSORDER=ipv4first

## 客户端 v2rayN 配置

凡是支持 VLESS 协议的客户端，都可以使用。

### Windows 版本

https://github.com/2dust/v2rayN

具体配置，请参考部署服务的主页。

### 安卓

[v2rayNG](https://github.com/2dust/v2rayNG)

[SagerNet](https://github.com/SagerNet/SagerNet)

### IOS

> 需要美国区账户

[shadowrocket](https://apps.apple.com/us/app/shadowrocket/id932747118)

# FAQ

## 那些平台可以使用？

判断一个平台是否可以支持的，有 2 个必要条件，

1. 是否支持 websocket？
   - 或者支持，HTTP request stream 也是可以的。https://developer.chrome.com/articles/fetch-streaming-requests/
2. 可以创建 raw tcp socket？

> Cloudflare Worker 虽然支持 websocket，但是 Worker 的 runtime 没有支持 创建 raw tcp socket 的 API。

## 不支持 UDP

由于 edge 平台限制，无法转发 UDP 包。所以 DNS 策略请设置成 `Asis`.

## 不支持 VMESS

VMESS 协议过于复杂，并且所有 edge 平台都支持 HTTPS， 所以无需 VMESS.
