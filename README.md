# Proof of Opossum
## Deploying contracts
Contracts are managed and deployed using [ZepKit](https://docs.zeppelinos.org/docs/zepkit.html)

``` shell
yarn global add truffle@5.0.2 && yarn global add ganache-cli@6.3.0
yarn global add zos@2.2.0
cd proof-of-opossum
# Add the contract to zos
zos add LeaderBoard
# Create a session
zos session --network rinkeby --from 0x26E0E5b59a08D0B055af46C9d3ebC5892A873f5A --expires 3600
# Push Proxy to the session
zos push --deploy-dependencies --force
# Create a contract
zos create LeaderBoard
```

### Issue
The rinkeby network used process.env.MNENOMIC instead of mnemonic. Same thing
with infura. Also could not push directly to networks had to run a session


### Deploy a new version

1.) Update your Contract
2.) run `yarn zos-all`
3.) `cd graph`
4.) change `subgraph.yaml`
4.) change `mappings.ts`

