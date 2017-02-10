    
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-highlightjs');

  aurelia.start().then(() => aurelia.setRoot());
}

  