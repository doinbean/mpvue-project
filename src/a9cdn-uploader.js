// must use module.exports,
// so can `cost conf = require('conf.js')`
module.exports = {
    active: 'qiniu', // the active cdn-name
    domain: '[your domin]', // public domain for check
    qiniu: { // the cdn name, qiniu cdn config
        accessKey: '[your accessKey]',
        secretKey: '[your secretKey]',
        bucket: '[your bucket]',
    },

    aliyun: { // ali yun config

    }
}
