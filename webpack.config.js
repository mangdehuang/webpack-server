/**
 * Created by Administrator on 2017/10/10.
 */
module.exports = {
    devtool:'eval-source-map',
    entry:__dirname+"/app/main.js",
    output:{
        path:__dirname+'/public',
        filename:'bundle.js'
    },

    devServer: {
        contentBase:"./public",
        historyApiFallback:false,
        inline:true,
        // hot:true,
        port:8080
    }
};