import {Loader} from 'aurelia-framework';

export class ConfigBuilder {

    static inject = [Loader];

    constructor(private loader: Loader) {}

    useAllLanguages(): ConfigBuilder {
        this.loader.loadModule("highlight.js");
        return this;
    }

    useLanguage(language: string): ConfigBuilder {
        this.loader.loadModule("highlight.js/lib/languages/" + language + ".js")
            .then(languageModule => hljs.registerLanguage(language, languageModule));
        return this;
    }
}