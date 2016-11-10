import {customElement} from 'aurelia-framework';
import {} from'highlight.js/styles/darcula.css';
import * as hljs from 'highlight.js';

@customElement('hljs')
export class Hljs {
    name: string = "Guillaume Durand";
    
    attached() {
        hljs.initHighlighting();
    }
}

