import {FrameworkConfiguration} from 'aurelia-framework';
import {ConfigBuilder} from './config-builder';

export function configure(aurelia: FrameworkConfiguration, configCallback?: Function) {
    aurelia.globalResources(['./hljs']);
    const builder: ConfigBuilder = aurelia.container.get(ConfigBuilder);
    if (configCallback) {
        configCallback(builder);
    }else {
        builder.useAllLanguages();
    }
}

export * from './hljs';
