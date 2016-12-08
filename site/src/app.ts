import {RouterConfiguration, Router} from 'aurelia-router';
import { autoinject, containerless} from 'aurelia-framework';

@autoinject
@containerless
export class App {
    router: Router;
    
    constructor(router: Router) {
        this.router = router;
    }
    
    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia highlight.js';
        config.map([
            { route: '', redirect: 'demo' },
            { route: 'demo', name: 'demo', moduleId: './demo', nav: true, title: 'Demo' },
            { route: 'install', name: 'install', moduleId: './install', nav: true, title: 'Installation' },
            { route: 'usage', name: 'usage', moduleId: './usage', nav: true, title: 'Usage' }
        ]);
        this.router = router;
    }
    
    attached() {
        console.log("APP ATTACHED");
        new Ink.UI.Drawer();
    }
}