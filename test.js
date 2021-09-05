

(async () => {
    const size = 128; // 12 words
    const entropy = bip39.genEntropy(size);
    console.log(entropy);
    const mnemonic = await bip39.genMnemonic(entropy, dictionaries.portuguese);
    console.log(mnemonic);
    await bip39.getBinaryFromMnemonic(mnemonic, dictionaries.portuguese);
})();