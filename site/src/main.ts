import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
//        .developmentLogging()
        .plugin('aurelia-highlightjs', config => config
            .useLanguage("ruby")
            .useLanguage("java")
            .useLanguage("sql")
            .useLanguage("css")
            .useLanguage("go")
            .useLanguage("ini")
            .useLanguage("bash")
            .useLanguage("python")
            .useLanguage("javascript")
            .useLanguage("xml")
            );

    aurelia.start().then(() => aurelia.setRoot());
}

