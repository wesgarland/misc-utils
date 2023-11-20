#! /usr/bin/env node

async function main()
{
  const wallet = require('dcp/wallet');
  var ks;

  ks = await new wallet.Keystore(null, '');
  console.log(String(await ks.getPrivateKey()), String(ks.address));
}

require('.').init().then(main).then(process.exit);
