# BIP39 (JavaScript)

JavaScript implementation of  [Bitcoin BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki): Mnemonic code for generating deterministic keys

Ported from [jacekv BIP39](https://github.com/jacekv/bip39) NodeJS implementation

## Dictionaries
> English

> Portuguese

> Czech

> Chinese (simplified)

> Chinese (traditional)

> French

> Italian

> Japanese

> Korean

> Spanish

## Word length
The following table describes the relation between the bit size and the length of the generated mnemonic sentence (MS) in words.

```
|  Size |  MS  |
+-------+------+
|  128  |  12  |
|  160  |  15  |
|  192  |  18  |
|  224  |  21  |
|  256  |  24  |
```

## How to setup
Just include the file "bip39.js" in your HTML

## Example
  
```javascript
(async () => {

const  size = 128; // 12 words

const  entropy = bip39.genEntropy(size);

console.log(entropy);

const  mnemonic = await  bip39.genMnemonic(entropy, dictionaries.portuguese);

console.log(mnemonic);

await  bip39.getBinaryFromMnemonic(mnemonic, dictionaries.portuguese);

})();  
```

# License
MIT