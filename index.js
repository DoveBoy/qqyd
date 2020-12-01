'use strict';
exports.main_handler = async (event, context, callback) => {
	//解决云函数热启动问题
	delete require.cache[require.resolve('./qqyd.js')];
    require('./qqyd.js')
	//require('./qqyd.js')
    //require('./qqyd.js')
}