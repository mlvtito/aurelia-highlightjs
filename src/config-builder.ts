import { Loader, DOM } from 'aurelia-framework';
import { Hljs } from './hljs';

export class ConfigBuilder {

    static inject = [Loader];

    constructor(private loader: Loader) { }

    useAllLanguages(): ConfigBuilder {
        this.loader.loadModule("highlight.js");
        return this;
    }

    useLanguage(language: string): ConfigBuilder {
        this.loader.loadModule("highlight.js/lib/languages/" + language + ".js")
            .then(languageModule => hljs.registerLanguage(language, languageModule));
        return this;
    }

    setDefaultTheme() {
        this.loader.loadText("highlight.js/styles/default.css").then(text => {
            let oldStyleHeader: Node = Hljs.styleHeader;
            Hljs.styleHeader = DOM.injectStyles(text);
            if (oldStyleHeader == null) {
                document.getElementsByTagName("head")[0].appendChild(Hljs.styleHeader);
            }
        });
    }
}