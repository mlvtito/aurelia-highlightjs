SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "hljs/": "src/"
  },
  browserConfig: {
    "baseURL": "."
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.2.7",
      "net": "npm:jspm-nodelibs-net@0.2.0",
      "http": "npm:jspm-nodelibs-http@0.2.0",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
      "os": "npm:jspm-nodelibs-os@0.2.0",
      "util": "npm:jspm-nodelibs-util@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
      "stream": "npm:jspm-nodelibs-stream@0.2.0",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "constants": "npm:jspm-nodelibs-constants@0.2.0",
      "events": "npm:jspm-nodelibs-events@0.2.0",
      "assert": "npm:jspm-nodelibs-assert@0.2.0",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.0",
      "url": "npm:jspm-nodelibs-url@0.2.0"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@5.2.7": {
        "map": {
          "typescript": "npm:typescript@2.0.6"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.0": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:jspm-nodelibs-os@0.2.0": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "randombytes": "npm:randombytes@2.0.3",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "ripemd160": "npm:ripemd160@1.0.1",
          "cipher-base": "npm:cipher-base@1.0.3",
          "sha.js": "npm:sha.js@2.4.5"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.3.2",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1"
        }
      },
      "npm:jspm-nodelibs-http@0.2.0": {
        "map": {
          "http-browserify": "npm:stream-http@2.4.1"
        }
      },
      "npm:stream-http@2.4.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5",
          "xtend": "npm:xtend@4.0.1",
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "core-util-is": "npm:core-util-is@1.0.2",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "isarray": "npm:isarray@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31",
          "util-deprecate": "npm:util-deprecate@1.0.2"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "miller-rabin": "npm:miller-rabin@4.0.0"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "inherits": "npm:inherits@2.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.3.2"
        }
      },
      "npm:elliptic@6.3.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "hash.js": "npm:hash.js@1.0.3",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "asn1.js": "npm:asn1.js@4.8.1"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.0": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "ieee754": "npm:ieee754@1.1.8",
          "base64-js": "npm:base64-js@1.2.0"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.0": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "npm:asn1.js@4.8.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:jspm-nodelibs-stream@0.2.0": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:jspm-nodelibs-url@0.2.0": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "querystring": "npm:querystring@0.2.0",
          "punycode": "npm:punycode@1.3.2"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "hljs": {
      "main": "hljs.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "highlight.js": "npm:highlight.js@9.7.0"
  },
  packages: {}
});
