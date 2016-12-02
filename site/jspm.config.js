SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "local:": "local_packages/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": ".",
    "bundles": {
      "bundles/dependencies.bundle.js": [
        "npm:highlight.js@9.8.0/lib/index.js",
        "npm:highlight.js@9.8.0.json",
        "npm:highlight.js@9.8.0/lib/languages/zephir.js",
        "npm:highlight.js@9.8.0/lib/languages/xquery.js",
        "npm:highlight.js@9.8.0/lib/languages/xl.js",
        "npm:highlight.js@9.8.0/lib/languages/x86asm.js",
        "npm:highlight.js@9.8.0/lib/languages/vim.js",
        "npm:highlight.js@9.8.0/lib/languages/vhdl.js",
        "npm:highlight.js@9.8.0/lib/languages/verilog.js",
        "npm:highlight.js@9.8.0/lib/languages/vbscript-html.js",
        "npm:highlight.js@9.8.0/lib/languages/vbscript.js",
        "npm:highlight.js@9.8.0/lib/languages/vbnet.js",
        "npm:highlight.js@9.8.0/lib/languages/vala.js",
        "npm:highlight.js@9.8.0/lib/languages/typescript.js",
        "npm:highlight.js@9.8.0/lib/languages/twig.js",
        "npm:highlight.js@9.8.0/lib/languages/tp.js",
        "npm:highlight.js@9.8.0/lib/languages/thrift.js",
        "npm:highlight.js@9.8.0/lib/languages/tex.js",
        "npm:highlight.js@9.8.0/lib/languages/tcl.js",
        "npm:highlight.js@9.8.0/lib/languages/tap.js",
        "npm:highlight.js@9.8.0/lib/languages/yaml.js",
        "npm:highlight.js@9.8.0/lib/languages/taggerscript.js",
        "npm:highlight.js@9.8.0/lib/languages/swift.js",
        "npm:highlight.js@9.8.0/lib/languages/subunit.js",
        "npm:highlight.js@9.8.0/lib/languages/stylus.js",
        "npm:highlight.js@9.8.0/lib/languages/step21.js",
        "npm:highlight.js@9.8.0/lib/languages/stata.js",
        "npm:highlight.js@9.8.0/lib/languages/stan.js",
        "npm:highlight.js@9.8.0/lib/languages/sql.js",
        "npm:highlight.js@9.8.0/lib/languages/sqf.js",
        "npm:highlight.js@9.8.0/lib/languages/sml.js",
        "npm:highlight.js@9.8.0/lib/languages/smalltalk.js",
        "npm:highlight.js@9.8.0/lib/languages/smali.js",
        "npm:highlight.js@9.8.0/lib/languages/scss.js",
        "npm:highlight.js@9.8.0/lib/languages/scilab.js",
        "npm:highlight.js@9.8.0/lib/languages/scheme.js",
        "npm:highlight.js@9.8.0/lib/languages/scala.js",
        "npm:highlight.js@9.8.0/lib/languages/rust.js",
        "npm:highlight.js@9.8.0/lib/languages/ruleslanguage.js",
        "npm:highlight.js@9.8.0/lib/languages/rsl.js",
        "npm:highlight.js@9.8.0/lib/languages/roboconf.js",
        "npm:highlight.js@9.8.0/lib/languages/rib.js",
        "npm:highlight.js@9.8.0/lib/languages/r.js",
        "npm:highlight.js@9.8.0/lib/languages/qml.js",
        "npm:highlight.js@9.8.0/lib/languages/q.js",
        "npm:highlight.js@9.8.0/lib/languages/python.js",
        "npm:highlight.js@9.8.0/lib/languages/purebasic.js",
        "npm:highlight.js@9.8.0/lib/languages/puppet.js",
        "npm:highlight.js@9.8.0/lib/languages/protobuf.js",
        "npm:highlight.js@9.8.0/lib/languages/prolog.js",
        "npm:highlight.js@9.8.0/lib/languages/profile.js",
        "npm:highlight.js@9.8.0/lib/languages/processing.js",
        "npm:highlight.js@9.8.0/lib/languages/powershell.js",
        "npm:highlight.js@9.8.0/lib/languages/pony.js",
        "npm:highlight.js@9.8.0/lib/languages/php.js",
        "npm:highlight.js@9.8.0/lib/languages/pf.js",
        "npm:highlight.js@9.8.0/lib/languages/parser3.js",
        "npm:highlight.js@9.8.0/lib/languages/oxygene.js",
        "npm:highlight.js@9.8.0/lib/languages/openscad.js",
        "npm:highlight.js@9.8.0/lib/languages/ocaml.js",
        "npm:highlight.js@9.8.0/lib/languages/objectivec.js",
        "npm:highlight.js@9.8.0/lib/languages/nsis.js",
        "npm:highlight.js@9.8.0/lib/languages/nix.js",
        "npm:highlight.js@9.8.0/lib/languages/nimrod.js",
        "npm:highlight.js@9.8.0/lib/languages/nginx.js",
        "npm:highlight.js@9.8.0/lib/languages/moonscript.js",
        "npm:highlight.js@9.8.0/lib/languages/monkey.js",
        "npm:highlight.js@9.8.0/lib/languages/mojolicious.js",
        "npm:highlight.js@9.8.0/lib/languages/perl.js",
        "npm:highlight.js@9.8.0/lib/languages/mizar.js",
        "npm:highlight.js@9.8.0/lib/languages/mipsasm.js",
        "npm:highlight.js@9.8.0/lib/languages/mercury.js",
        "npm:highlight.js@9.8.0/lib/languages/mel.js",
        "npm:highlight.js@9.8.0/lib/languages/maxima.js",
        "npm:highlight.js@9.8.0/lib/languages/matlab.js",
        "npm:highlight.js@9.8.0/lib/languages/mathematica.js",
        "npm:highlight.js@9.8.0/lib/languages/makefile.js",
        "npm:highlight.js@9.8.0/lib/languages/lua.js",
        "npm:highlight.js@9.8.0/lib/languages/lsl.js",
        "npm:highlight.js@9.8.0/lib/languages/livescript.js",
        "npm:highlight.js@9.8.0/lib/languages/livecodeserver.js",
        "npm:highlight.js@9.8.0/lib/languages/lisp.js",
        "npm:highlight.js@9.8.0/lib/languages/less.js",
        "npm:highlight.js@9.8.0/lib/languages/ldif.js",
        "npm:highlight.js@9.8.0/lib/languages/lasso.js",
        "npm:highlight.js@9.8.0/lib/languages/kotlin.js",
        "npm:highlight.js@9.8.0/lib/languages/julia.js",
        "npm:highlight.js@9.8.0/lib/languages/json.js",
        "npm:highlight.js@9.8.0/lib/languages/javascript.js",
        "npm:highlight.js@9.8.0/lib/languages/java.js",
        "npm:highlight.js@9.8.0/lib/languages/irpf90.js",
        "npm:highlight.js@9.8.0/lib/languages/ini.js",
        "npm:highlight.js@9.8.0/lib/languages/inform7.js",
        "npm:highlight.js@9.8.0/lib/languages/http.js",
        "npm:highlight.js@9.8.0/lib/languages/htmlbars.js",
        "npm:highlight.js@9.8.0/lib/languages/hsp.js",
        "npm:highlight.js@9.8.0/lib/languages/haxe.js",
        "npm:highlight.js@9.8.0/lib/languages/haskell.js",
        "npm:highlight.js@9.8.0/lib/languages/handlebars.js",
        "npm:highlight.js@9.8.0/lib/languages/haml.js",
        "npm:highlight.js@9.8.0/lib/languages/groovy.js",
        "npm:highlight.js@9.8.0/lib/languages/gradle.js",
        "npm:highlight.js@9.8.0/lib/languages/golo.js",
        "npm:highlight.js@9.8.0/lib/languages/go.js",
        "npm:highlight.js@9.8.0/lib/languages/glsl.js",
        "npm:highlight.js@9.8.0/lib/languages/gherkin.js",
        "npm:highlight.js@9.8.0/lib/languages/gcode.js",
        "npm:highlight.js@9.8.0/lib/languages/gauss.js",
        "npm:highlight.js@9.8.0/lib/languages/gams.js",
        "npm:highlight.js@9.8.0/lib/languages/fsharp.js",
        "npm:highlight.js@9.8.0/lib/languages/fortran.js",
        "npm:highlight.js@9.8.0/lib/languages/flix.js",
        "npm:highlight.js@9.8.0/lib/languages/fix.js",
        "npm:highlight.js@9.8.0/lib/languages/excel.js",
        "npm:highlight.js@9.8.0/lib/languages/erlang.js",
        "npm:highlight.js@9.8.0/lib/languages/erlang-repl.js",
        "npm:highlight.js@9.8.0/lib/languages/erb.js",
        "npm:highlight.js@9.8.0/lib/languages/ruby.js",
        "npm:highlight.js@9.8.0/lib/languages/elm.js",
        "npm:highlight.js@9.8.0/lib/languages/elixir.js",
        "npm:highlight.js@9.8.0/lib/languages/ebnf.js",
        "npm:highlight.js@9.8.0/lib/languages/dust.js",
        "npm:highlight.js@9.8.0/lib/languages/dts.js",
        "npm:highlight.js@9.8.0/lib/languages/dsconfig.js",
        "npm:highlight.js@9.8.0/lib/languages/dos.js",
        "npm:highlight.js@9.8.0/lib/languages/dockerfile.js",
        "npm:highlight.js@9.8.0/lib/languages/dns.js",
        "npm:highlight.js@9.8.0/lib/languages/django.js",
        "npm:highlight.js@9.8.0/lib/languages/diff.js",
        "npm:highlight.js@9.8.0/lib/languages/delphi.js",
        "npm:highlight.js@9.8.0/lib/languages/dart.js",
        "npm:highlight.js@9.8.0/lib/languages/markdown.js",
        "npm:highlight.js@9.8.0/lib/languages/d.js",
        "npm:highlight.js@9.8.0/lib/languages/css.js",
        "npm:highlight.js@9.8.0/lib/languages/csp.js",
        "npm:highlight.js@9.8.0/lib/languages/cs.js",
        "npm:highlight.js@9.8.0/lib/languages/crystal.js",
        "npm:highlight.js@9.8.0/lib/languages/crmsh.js",
        "npm:highlight.js@9.8.0/lib/languages/cos.js",
        "npm:highlight.js@9.8.0/lib/languages/coq.js",
        "npm:highlight.js@9.8.0/lib/languages/coffeescript.js",
        "npm:highlight.js@9.8.0/lib/languages/cmake.js",
        "npm:highlight.js@9.8.0/lib/languages/clojure-repl.js",
        "npm:highlight.js@9.8.0/lib/languages/clojure.js",
        "npm:highlight.js@9.8.0/lib/languages/clean.js",
        "npm:highlight.js@9.8.0/lib/languages/ceylon.js",
        "npm:highlight.js@9.8.0/lib/languages/capnproto.js",
        "npm:highlight.js@9.8.0/lib/languages/cal.js",
        "npm:highlight.js@9.8.0/lib/languages/brainfuck.js",
        "npm:highlight.js@9.8.0/lib/languages/bnf.js",
        "npm:highlight.js@9.8.0/lib/languages/basic.js",
        "npm:highlight.js@9.8.0/lib/languages/bash.js",
        "npm:highlight.js@9.8.0/lib/languages/axapta.js",
        "npm:highlight.js@9.8.0/lib/languages/awk.js",
        "npm:highlight.js@9.8.0/lib/languages/avrasm.js",
        "npm:highlight.js@9.8.0/lib/languages/autoit.js",
        "npm:highlight.js@9.8.0/lib/languages/autohotkey.js",
        "npm:highlight.js@9.8.0/lib/languages/aspectj.js",
        "npm:highlight.js@9.8.0/lib/languages/asciidoc.js",
        "npm:highlight.js@9.8.0/lib/languages/xml.js",
        "npm:highlight.js@9.8.0/lib/languages/armasm.js",
        "npm:highlight.js@9.8.0/lib/languages/arduino.js",
        "npm:highlight.js@9.8.0/lib/languages/cpp.js",
        "npm:highlight.js@9.8.0/lib/languages/applescript.js",
        "npm:highlight.js@9.8.0/lib/languages/apache.js",
        "npm:highlight.js@9.8.0/lib/languages/ada.js",
        "npm:highlight.js@9.8.0/lib/languages/actionscript.js",
        "npm:highlight.js@9.8.0/lib/languages/accesslog.js",
        "npm:highlight.js@9.8.0/lib/languages/abnf.js",
        "npm:highlight.js@9.8.0/lib/languages/1c.js",
        "npm:highlight.js@9.8.0/lib/highlight.js",
        "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
        "npm:aurelia-templating-router@1.0.0.json",
        "npm:aurelia-templating-router@1.0.0/route-href.js",
        "npm:aurelia-logging@1.1.1/aurelia-logging.js",
        "npm:aurelia-logging@1.1.1.json",
        "npm:aurelia-pal@1.0.0/aurelia-pal.js",
        "npm:aurelia-pal@1.0.0.json",
        "npm:aurelia-router@1.0.7/aurelia-router.js",
        "npm:aurelia-router@1.0.7.json",
        "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
        "npm:aurelia-event-aggregator@1.0.0.json",
        "npm:aurelia-history@1.0.0/aurelia-history.js",
        "npm:aurelia-history@1.0.0.json",
        "npm:aurelia-dependency-injection@1.2.0/aurelia-dependency-injection.js",
        "npm:aurelia-dependency-injection@1.2.0.json",
        "npm:aurelia-metadata@1.0.2/aurelia-metadata.js",
        "npm:aurelia-metadata@1.0.2.json",
        "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
        "npm:aurelia-route-recognizer@1.1.0.json",
        "npm:aurelia-path@1.1.1/aurelia-path.js",
        "npm:aurelia-path@1.1.1.json",
        "npm:aurelia-templating@1.1.2/aurelia-templating.js",
        "npm:aurelia-templating@1.1.2.json",
        "npm:aurelia-task-queue@1.1.0/aurelia-task-queue.js",
        "npm:aurelia-task-queue@1.1.0.json",
        "npm:aurelia-binding@1.0.9/aurelia-binding.js",
        "npm:aurelia-binding@1.0.9.json",
        "npm:aurelia-loader@1.0.0/aurelia-loader.js",
        "npm:aurelia-loader@1.0.0.json",
        "npm:aurelia-templating-router@1.0.0/router-view.js",
        "npm:aurelia-templating-router@1.0.0/route-loader.js",
        "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
        "npm:aurelia-templating-resources@1.1.1.json",
        "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
        "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
        "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
        "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
        "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
        "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
        "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
        "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
        "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
        "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
        "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
        "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
        "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
        "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
        "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
        "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
        "npm:aurelia-templating-resources@1.1.1/css-resource.js",
        "npm:aurelia-templating-resources@1.1.1/focus.js",
        "npm:aurelia-templating-resources@1.1.1/replaceable.js",
        "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
        "npm:aurelia-templating-resources@1.1.1/hide.js",
        "npm:aurelia-templating-resources@1.1.1/show.js",
        "npm:aurelia-templating-resources@1.1.1/repeat.js",
        "npm:aurelia-templating-resources@1.1.1/with.js",
        "npm:aurelia-templating-resources@1.1.1/if.js",
        "npm:aurelia-templating-resources@1.1.1/compose.js",
        "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
        "npm:aurelia-templating-binding@1.0.0.json",
        "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
        "npm:aurelia-logging-console@1.0.0.json",
        "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
        "npm:aurelia-loader-default@1.0.0.json",
        "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
        "npm:aurelia-history-browser@1.0.0.json",
        "npm:aurelia-framework@1.0.7/aurelia-framework.js",
        "npm:aurelia-framework@1.0.7.json",
        "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
        "npm:aurelia-fetch-client@1.0.1.json",
        "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
        "npm:aurelia-bootstrapper@1.0.1.json",
        "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
        "npm:aurelia-polyfills@1.1.1.json",
        "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
        "npm:aurelia-pal-browser@1.0.0.json",
        "github:frankwallis/plugin-typescript@5.3.1/plugin.js",
        "github:frankwallis/plugin-typescript@5.3.1.json",
        "npm:typescript@2.1.1/lib/typescript.js",
        "npm:typescript@2.1.1.json",
        "npm:crypto-browserify@3.11.0/index.js",
        "npm:crypto-browserify@3.11.0.json",
        "npm:jspm-nodelibs-process@0.2.0/process.js",
        "npm:jspm-nodelibs-process@0.2.0.json",
        "npm:public-encrypt@4.0.0/browser.js",
        "npm:public-encrypt@4.0.0.json",
        "npm:public-encrypt@4.0.0/privateDecrypt.js",
        "npm:jspm-nodelibs-buffer@0.2.0/global.js",
        "npm:jspm-nodelibs-buffer@0.2.0.json",
        "npm:buffer@4.9.1/index.js",
        "npm:buffer@4.9.1.json",
        "npm:isarray@1.0.0/index.js",
        "npm:isarray@1.0.0.json",
        "npm:ieee754@1.1.8/index.js",
        "npm:ieee754@1.1.8.json",
        "npm:base64-js@1.2.0/index.js",
        "npm:base64-js@1.2.0.json",
        "npm:public-encrypt@4.0.0/withPublic.js",
        "npm:bn.js@4.11.6/lib/bn.js",
        "npm:bn.js@4.11.6.json",
        "npm:create-hash@1.1.2/browser.js",
        "npm:create-hash@1.1.2.json",
        "npm:cipher-base@1.0.3/index.js",
        "npm:cipher-base@1.0.3.json",
        "npm:string_decoder@0.10.31/index.js",
        "npm:string_decoder@0.10.31.json",
        "npm:jspm-nodelibs-string_decoder@0.2.0.json",
        "npm:inherits@2.0.3/inherits_browser.js",
        "npm:inherits@2.0.3.json",
        "npm:stream-browserify@2.0.1/index.js",
        "npm:stream-browserify@2.0.1.json",
        "npm:readable-stream@2.2.2/passthrough.js",
        "npm:readable-stream@2.2.2.json",
        "npm:readable-stream@2.2.2/lib/_stream_passthrough.js",
        "npm:core-util-is@1.0.2/lib/util.js",
        "npm:core-util-is@1.0.2.json",
        "npm:readable-stream@2.2.2/lib/_stream_transform.js",
        "npm:readable-stream@2.2.2/lib/_stream_duplex.js",
        "npm:readable-stream@2.2.2/lib/_stream_writable.js",
        "npm:buffer-shims@1.0.0/index.js",
        "npm:buffer-shims@1.0.0.json",
        "npm:jspm-nodelibs-events@0.2.0/events.js",
        "npm:jspm-nodelibs-events@0.2.0.json",
        "npm:util-deprecate@1.0.2/browser.js",
        "npm:util-deprecate@1.0.2.json",
        "npm:process-nextick-args@1.0.7/index.js",
        "npm:process-nextick-args@1.0.7.json",
        "npm:readable-stream@2.2.2/lib/_stream_readable.js",
        "npm:readable-stream@2.2.2/lib/internal/streams/BufferList.js",
        "npm:readable-stream@2.2.2/transform.js",
        "npm:readable-stream@2.2.2/duplex.js",
        "npm:readable-stream@2.2.2/writable.js",
        "npm:readable-stream@2.2.2/readable.js",
        "npm:jspm-nodelibs-stream@0.2.0.json",
        "npm:sha.js@2.4.8/index.js",
        "npm:sha.js@2.4.8.json",
        "npm:sha.js@2.4.8/sha512.js",
        "npm:sha.js@2.4.8/hash.js",
        "npm:sha.js@2.4.8/sha384.js",
        "npm:sha.js@2.4.8/sha256.js",
        "npm:sha.js@2.4.8/sha224.js",
        "npm:sha.js@2.4.8/sha1.js",
        "npm:sha.js@2.4.8/sha.js",
        "npm:ripemd160@1.0.1/lib/ripemd160.js",
        "npm:ripemd160@1.0.1.json",
        "npm:create-hash@1.1.2/md5.js",
        "npm:create-hash@1.1.2/helpers.js",
        "npm:browserify-rsa@4.0.1/index.js",
        "npm:browserify-rsa@4.0.1.json",
        "npm:randombytes@2.0.3/browser.js",
        "npm:randombytes@2.0.3.json",
        "npm:public-encrypt@4.0.0/xor.js",
        "npm:public-encrypt@4.0.0/mgf.js",
        "npm:parse-asn1@5.0.0/index.js",
        "npm:parse-asn1@5.0.0.json",
        "npm:pbkdf2@3.0.9/browser.js",
        "npm:pbkdf2@3.0.9.json",
        "npm:pbkdf2@3.0.9/precondition.js",
        "npm:create-hmac@1.1.4/browser.js",
        "npm:create-hmac@1.1.4.json",
        "npm:browserify-aes@1.0.6/browser.js",
        "npm:browserify-aes@1.0.6.json",
        "npm:browserify-aes@1.0.6/modes.js",
        "npm:browserify-aes@1.0.6/decrypter.js",
        "npm:browserify-aes@1.0.6/modes/ctr.js",
        "npm:buffer-xor@1.0.3/index.js",
        "npm:buffer-xor@1.0.3.json",
        "npm:browserify-aes@1.0.6/modes/ofb.js",
        "npm:browserify-aes@1.0.6/modes/cfb1.js",
        "npm:browserify-aes@1.0.6/modes/cfb8.js",
        "npm:browserify-aes@1.0.6/modes/cfb.js",
        "npm:browserify-aes@1.0.6/modes/cbc.js",
        "npm:browserify-aes@1.0.6/modes/ecb.js",
        "npm:evp_bytestokey@1.0.0/index.js",
        "npm:evp_bytestokey@1.0.0.json",
        "npm:browserify-aes@1.0.6/authCipher.js",
        "npm:browserify-aes@1.0.6/ghash.js",
        "npm:browserify-aes@1.0.6/aes.js",
        "npm:browserify-aes@1.0.6/streamCipher.js",
        "npm:browserify-aes@1.0.6/encrypter.js",
        "npm:parse-asn1@5.0.0/fixProc.js",
        "npm:parse-asn1@5.0.0/aesid.json",
        "npm:parse-asn1@5.0.0/asn1.js",
        "npm:asn1.js@4.9.0/lib/asn1.js",
        "npm:asn1.js@4.9.0.json",
        "npm:asn1.js@4.9.0/lib/asn1/encoders/index.js",
        "npm:asn1.js@4.9.0/lib/asn1/encoders/pem.js",
        "npm:asn1.js@4.9.0/lib/asn1/encoders/der.js",
        "npm:asn1.js@4.9.0/lib/asn1/decoders/index.js",
        "npm:asn1.js@4.9.0/lib/asn1/decoders/pem.js",
        "npm:asn1.js@4.9.0/lib/asn1/decoders/der.js",
        "npm:asn1.js@4.9.0/lib/asn1/constants/index.js",
        "npm:asn1.js@4.9.0/lib/asn1/constants/der.js",
        "npm:asn1.js@4.9.0/lib/asn1/base/index.js",
        "npm:asn1.js@4.9.0/lib/asn1/base/node.js",
        "npm:minimalistic-assert@1.0.0/index.js",
        "npm:minimalistic-assert@1.0.0.json",
        "npm:asn1.js@4.9.0/lib/asn1/base/buffer.js",
        "npm:asn1.js@4.9.0/lib/asn1/base/reporter.js",
        "npm:asn1.js@4.9.0/lib/asn1/api.js",
        "npm:jspm-nodelibs-vm@0.2.0/vm.js",
        "npm:jspm-nodelibs-vm@0.2.0.json",
        "npm:public-encrypt@4.0.0/publicEncrypt.js",
        "npm:create-ecdh@4.0.0/browser.js",
        "npm:create-ecdh@4.0.0.json",
        "npm:elliptic@6.3.2/lib/elliptic.js",
        "npm:elliptic@6.3.2.json",
        "npm:elliptic@6.3.2/lib/elliptic/eddsa/index.js",
        "npm:elliptic@6.3.2/lib/elliptic/eddsa/signature.js",
        "npm:elliptic@6.3.2/lib/elliptic/eddsa/key.js",
        "npm:hash.js@1.0.3/lib/hash.js",
        "npm:hash.js@1.0.3.json",
        "npm:hash.js@1.0.3/lib/hash/hmac.js",
        "npm:hash.js@1.0.3/lib/hash/ripemd.js",
        "npm:hash.js@1.0.3/lib/hash/sha.js",
        "npm:hash.js@1.0.3/lib/hash/common.js",
        "npm:hash.js@1.0.3/lib/hash/utils.js",
        "npm:elliptic@6.3.2/lib/elliptic/ec/index.js",
        "npm:elliptic@6.3.2/lib/elliptic/ec/signature.js",
        "npm:elliptic@6.3.2/lib/elliptic/ec/key.js",
        "npm:elliptic@6.3.2/lib/elliptic/curves.js",
        "npm:elliptic@6.3.2/lib/elliptic/precomputed/secp256k1.js",
        "npm:elliptic@6.3.2/lib/elliptic/curve/index.js",
        "npm:elliptic@6.3.2/lib/elliptic/curve/edwards.js",
        "npm:elliptic@6.3.2/lib/elliptic/curve/mont.js",
        "npm:elliptic@6.3.2/lib/elliptic/curve/short.js",
        "npm:elliptic@6.3.2/lib/elliptic/curve/base.js",
        "npm:elliptic@6.3.2/lib/elliptic/hmac-drbg.js",
        "npm:brorand@1.0.6/index.js",
        "npm:brorand@1.0.6.json",
        "npm:elliptic@6.3.2/lib/elliptic/utils.js",
        "npm:elliptic@6.3.2/package.json",
        "npm:browserify-sign@4.0.0/browser.js",
        "npm:browserify-sign@4.0.0.json",
        "npm:browserify-sign@4.0.0/verify.js",
        "npm:browserify-sign@4.0.0/curves.js",
        "npm:browserify-sign@4.0.0/sign.js",
        "npm:browserify-sign@4.0.0/algos.js",
        "npm:diffie-hellman@5.0.2/browser.js",
        "npm:diffie-hellman@5.0.2.json",
        "npm:diffie-hellman@5.0.2/lib/dh.js",
        "npm:diffie-hellman@5.0.2/lib/generatePrime.js",
        "npm:miller-rabin@4.0.0/lib/mr.js",
        "npm:miller-rabin@4.0.0.json",
        "npm:diffie-hellman@5.0.2/lib/primes.json",
        "npm:browserify-cipher@1.0.0/browser.js",
        "npm:browserify-cipher@1.0.0.json",
        "npm:browserify-des@1.0.0/modes.js",
        "npm:browserify-des@1.0.0.json",
        "npm:browserify-des@1.0.0/index.js",
        "npm:des.js@1.0.0/lib/des.js",
        "npm:des.js@1.0.0.json",
        "npm:des.js@1.0.0/lib/des/ede.js",
        "npm:des.js@1.0.0/lib/des/cbc.js",
        "npm:des.js@1.0.0/lib/des/des.js",
        "npm:des.js@1.0.0/lib/des/cipher.js",
        "npm:des.js@1.0.0/lib/des/utils.js",
        "npm:jspm-nodelibs-crypto@0.2.0.json",
        "npm:os-browserify@0.2.1/browser.js",
        "npm:os-browserify@0.2.1.json",
        "npm:jspm-nodelibs-os@0.2.0.json"
      ]
    }
  },
  devConfig: {
    "map": {
      "http": "npm:jspm-nodelibs-http@0.2.0",
      "url": "npm:jspm-nodelibs-url@0.2.0",
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.3.1",
      "systemjs-plugin-text": "npm:systemjs-plugin-text@0.0.9",
      "assert": "npm:jspm-nodelibs-assert@0.2.0",
      "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
      "constants": "npm:jspm-nodelibs-constants@0.2.0",
      "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
      "events": "npm:jspm-nodelibs-events@0.2.0",
      "fs": "npm:jspm-nodelibs-fs@0.2.0",
      "net": "npm:jspm-nodelibs-net@0.2.0",
      "os": "npm:jspm-nodelibs-os@0.2.0",
      "path": "npm:jspm-nodelibs-path@0.2.1",
      "process": "npm:jspm-nodelibs-process@0.2.0",
      "stream": "npm:jspm-nodelibs-stream@0.2.0",
      "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
      "util": "npm:jspm-nodelibs-util@0.2.1",
      "vm": "npm:jspm-nodelibs-vm@0.2.0"
    },
    "packages": {
      "npm:jspm-nodelibs-http@0.2.0": {
        "map": {
          "http-browserify": "npm:stream-http@2.4.1"
        }
      },
      "npm:stream-http@2.4.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "xtend": "npm:xtend@4.0.1",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "isarray": "npm:isarray@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "string_decoder": "npm:string_decoder@0.10.31",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "core-util-is": "npm:core-util-is@1.0.2"
        }
      },
      "npm:jspm-nodelibs-url@0.2.0": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "github:frankwallis/plugin-typescript@5.3.1": {
        "map": {
          "typescript": "npm:typescript@2.1.1"
        }
      },
      "npm:jspm-nodelibs-os@0.2.0": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:jspm-nodelibs-crypto@0.2.0": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "randombytes": "npm:randombytes@2.0.3",
          "create-hmac": "npm:create-hmac@1.1.4",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "create-hash": "npm:create-hash@1.1.2",
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "browserify-cipher": "npm:browserify-cipher@1.0.0"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:jspm-nodelibs-buffer@0.2.0": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "sha.js": "npm:sha.js@2.4.8",
          "ripemd160": "npm:ripemd160@1.0.1",
          "cipher-base": "npm:cipher-base@1.0.3"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "ieee754": "npm:ieee754@1.1.8",
          "base64-js": "npm:base64-js@1.2.0"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "inherits": "npm:inherits@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "elliptic": "npm:elliptic@6.3.2",
          "browserify-rsa": "npm:browserify-rsa@4.0.1"
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
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.3.2"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-des": "npm:browserify-des@1.0.0",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "des.js": "npm:des.js@1.0.0",
          "cipher-base": "npm:cipher-base@1.0.3"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "create-hash": "npm:create-hash@1.1.2",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "asn1.js": "npm:asn1.js@4.9.0",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:elliptic@6.3.2": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6",
          "inherits": "npm:inherits@2.0.3",
          "hash.js": "npm:hash.js@1.0.3"
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
          "readable-stream": "npm:readable-stream@2.2.2"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:jspm-nodelibs-string_decoder@0.2.0": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:sha.js@2.4.8": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:asn1.js@4.9.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:readable-stream@2.2.2": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "inherits": "npm:inherits@2.0.3",
          "string_decoder": "npm:string_decoder@0.10.31",
          "core-util-is": "npm:core-util-is@1.0.2",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "buffer-shims": "npm:buffer-shims@1.0.0"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "app": {
      "main": "app.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  },
  map: {
    "aurelia-highlightjs": "local:aurelia-highlightjs@current",
    "text": "npm:systemjs-plugin-text@0.0.9",
    "source-map-support": "@empty",
    "highlight.js": "npm:highlight.js@9.8.0"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json",
    "local:@*/*.json",
    "local:*.json"
  ],
  map: {
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-binding": "npm:aurelia-binding@1.0.9",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.7",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.1.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
    "aurelia-router": "npm:aurelia-router@1.0.7",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
    "aurelia-templating": "npm:aurelia-templating@1.1.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
  },
  packages: {}
});
