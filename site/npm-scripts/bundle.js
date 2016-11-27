var pjson = require(process.cwd() + '/package.json');
var parameters = ['bundle'];
var isPackagesAddedToParameters = false;

for (var key in pjson.jspm.dependencies) {
    addPackage(key);
}

for (var key in pjson.jspm.peerDependencies) {
    addPackage(key);
}

process.argv.forEach(function (val, index, array) {
    if (index > 1) {
        parameters.push(val);
    }
});

spawn = require('child_process').spawn;
jspm = spawn('jspm', parameters);//, 'bundles/dependencies.bundle.js', "--inject", "--minify" ] );

jspm.stdout.on('data', data => {
    process.stdout.write(`${data}`);
});

jspm.stderr.on('data', data => {
    process.stdout.write(`${data}`);
});

function addPackage(packageName) {
    if (isPackagesAddedToParameters) {
        parameters.push('+');
        parameters.push(packageName);
    } else {
        parameters.push(packageName);
        isPackagesAddedToParameters = true;
    }
}