global.ELECTRON_CONFIG = global.ELECTRON_CONFIG || {};
global.ELECTRON_CONFIG.width = 960;
global.ELECTRON_CONFIG.height = 1080;

require( "../Development-NodeJS_Modules/Common-Electron-000-Tool.js" );

/**
 * Initialized 함수
 * @function
 */
global.initialized = function()
{
	global.Lib.Ttw.importTll( "./native_modules/index.tll" );
};
