'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        
        this.source = './src/';
        this.sourceApp = this.source + 'ts/';

        this.tsOutputPath = this.source + '/js';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'app.d.ts';
    }
	
    return GulpConfig;
})();

module.exports = GulpConfig;