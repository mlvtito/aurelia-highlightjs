import { customElement, bindable, containerless, Loader, DOM } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

import * as hljs from 'highlight.js';

declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

@customElement('hljs')
@containerless
export class Hljs {
    @bindable language: string;
    @bindable theme: string;
    @bindable include: string;
    private static idCounter: number = 0;
    id: string = "hljsCodeTag" + Hljs.idCounter++;
    private styleHeader: Node;
    private httpClient: HttpClient = new HttpClient();
    private contentTypeMap = {
        "application/x-sql": "sql",
        "text/x-java-source": "java",
        "text/css": "css",
        "application/x-sh": "bash"
    };

    constructor(private loader: Loader) { }

    attached() {
        if (!this.hasInclude()) {
            this.highlightToDom();
        }
    }

    includeChanged() {
        this.httpClient.fetch(this.include)
            .then(response => {
                let contentType = response.headers.get("Content-Type");
                console.log("######## CONTENT-TYPE : " + contentType);
                this.extractLanguageFromContentType(contentType);
                return response.text()
            }).then(data => {
                this.highlightToDom(data);
            });
    }

    private extractLanguageFromContentType(contentType: string) {
        if (contentType != null) {
            let extracted = contentType.split(";")[0].trim();
            if (extracted != null && this.contentTypeMap[extracted] != null) {
                this.language = this.contentTypeMap[extracted];
            } else {
                this.language = undefined;
            }
        }
    }

    private highlightToDom(data?: string) {
        if (data != null) {
            let result: hljs.IHighlightResultBase = this.highlight(data);
            this.language = result.language;
            this.fixMarkupAndAppendToDom(result.value);
        } else {
            hljs.highlightBlock(document.querySelector("#" + this.id));
        }
    }

    private highlight(data: string): hljs.IHighlightResultBase {
        return this.language ?
            hljs.highlight(this.language, data, true)
            : hljs.highlightAuto(data);
    }

    private fixMarkupAndAppendToDom(value: string) {
        value = hljs.fixMarkup(value);
        document.querySelector("#" + this.id).innerHTML = value;
    }
    private hasInclude(): boolean {
        return this.include != null;
    }

    themeChanged() {
        if (this.theme == null) {
            this.theme = "default";
        }
        this.loadTheme();
    }

    private loadTheme() {
        this.loader.loadText("highlight.js/styles/" + this.theme + ".css").then(text => {
            let oldStyleHeader = this.styleHeader;
            this.styleHeader = DOM.injectStyles(text);
            if (oldStyleHeader != null) {
                document.getElementsByTagName("head")[0].replaceChild(this.styleHeader, oldStyleHeader);
            } else {
                document.getElementsByTagName("head")[0].appendChild(this.styleHeader);
            }
        });
    }
}

