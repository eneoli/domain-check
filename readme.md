# domain-check [![Build Status](https://travis-ci.org/EneOli/domain-check.svg?branch=master)](https://travis-ci.org/EneOli/domain-check)
domain-check is a node module using promises allowing to check if a domain is free to register or not

# Installation
```bash
npm install domain-check --save
yarn add mypluralize
bower install domain-check --save
```

# Usage

To check if a domain is free you can create a new `Domain` object...

```js
const domainCheck = require('domain-check');
const Domain = domainCheck.Domain;

...

const domain = new Domain('google.de');
console.log(await domain.isFree());

```

or the static method `isFree` of the Domain class

```js
    const Domain = require('domain-check').Domain;

    ...

    const isFree = await Domain.isFree('google.de');
    console.log(isFree);
```

# Known issues

It might be that the module shows an registered domain as available to register. This is because the underlying library [node-whois](https://github.com/FurqanSoftware/node-whois) can not handle newer domains. A fix is in progress.