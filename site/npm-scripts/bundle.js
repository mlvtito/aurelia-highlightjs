var pjson = require(process.cwd() + '/package.json');
var packages;

for(var key in pjson.jspm.dependencies) {
    addPackage(key);
}

for(var key in pjson.jspm.peerDependencies) {
    addPackage(key);
}

process.argv.forEach(function (val, index, array) {
    if( index > 1 ) {
        addPackage(val);
    }
});

spawn = require( 'child_process' ).spawn,
jspm = spawn( 'jspm', [ "bundle", packages, 'bundles/dependencies.bundle.js', "--inject", "--minify" ] );

jspm.stdout.on( 'data', data => {
    console.log( `${data}` );
});

jspm.stderr.on( 'data', data => {
    console.log( `${data}` );
});

jspm.on( 'close', code => {
    console.log( `child process exited with code ${code}` );
});

function addPackage(packageName) {
    if( packages !== undefined ) {
        packages = packages + " + " + packageName;
    }else {
        packages = packageName;
    }
}