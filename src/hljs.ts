import { customElement, bindable } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

import * as hljs from 'highlight.js';

@customElement('hljs')
export class Hljs {
    @bindable language: string;
    @bindable theme: string;
    @bindable include: string;
    private static idCounter: number = 0;
    id: string = "hljsCodeTag" + Hljs.idCounter++;
    private httpClient: HttpClient = new HttpClient();
    private contentTypeMap = {
        "application/x-sql": "sql",
        "text/x-java-source": "java",
        "text/css": "css"
    };

    attached() {
        if (!this.hasInclude()) {
            this.highlight();
        }
    }

    includeChanged() {
        this.httpClient.fetch(this.include)
            .then(response => {
                let contentType = response.headers.get("Content-Type");
                this.extractLanguageFromContentType(contentType);
                return response.text()
            }).then(data => {
                this.highlight(data);
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

    private highlight(data?: string) {
        if( data != null ) {
            document.querySelector("#" + this.id).innerHTML = data;
        }
        hljs.highlightBlock(document.querySelector("#" + this.id));
    }
    
    private hasInclude(): boolean {
        return this.include != null;
    }
}

