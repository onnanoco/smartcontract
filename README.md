# MOEスマートコントラクト v.1.0.0

- truffleを使用します。
- proxyを使用してアップグレードすることができます。

## Testing

```console
npx truffle develop
truffle(develop)> migrate
truffle(develop)> token = await MoeToken.deployed()
truffle(develop)> token.address()
truffle(develop)> token.name()
truffle(develop)> token.symbol()
truffle(develop)> (await token.totalSupply()).toString()
truffle(develop)> (await token.balanceOf(accounts[0])).toString()
```

## Deploying (Robsten Testnet)

.secretファイルを追加してmnemonicを入力します。
truffle-config.jsファイルにINFURA Robsten endpointを追加します。

```console
truffle deploy --network ropsten
```
