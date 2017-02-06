    
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-highlightjs');

  aurelia.start().then(() => aurelia.setRoot());
}

  