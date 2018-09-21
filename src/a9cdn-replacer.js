// must use module.exports,
// so can `cost conf = require('conf.js')`
module.exports = {

    cnfBase: { // global config with default value
        cdnHost: "http://xxxxxx.com", // the CDN url
        charset: "utf8", // text file encoding
        recurse: true, // recursive to children
        webRoot: "../src", // the local path used as start point
    },

    cdnFile: [ // the assets will upload to CDN
        { // file-conf-entry
            webRoot: "../static",
            uriPath: "/", // the relpath to $webRoot. `''`,`null`,`'.'`,`'./'`,`'/'` are same.
            include: [ // include files (not directory)
                /\.(png|jpg)$/i,
            ],
        }
    ],

    txtFile: [ // the text-file in which the asset uri will be replaced
        { // as same as `cdnFile`'s entry
            uriPath: "/", // the relpath to $webRoot. `''`,`null`,`'.'`,`'./'`,`'/'` are same.
            include: [
                "**.vue",
            ],
        }
    ],

    // `dryrun` - just log the message
    // `inline` - rename the cdn-file or modify the txt-file
    //  $filepath - copy the deploy-file to $filepath
    outFile: { // how to deal with the output files
        cdnType: "inline", // `dryrun|inline|/tmp/a9cdn/cdn`
        txtType: "inline", // `dryrun|inline|/tmp/a9cdn/txt`
    }
}
