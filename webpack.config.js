const path = require('path')

module.exports = (env, agrv) => {
  const isDev = agrv.mode === 'development'
  return {
    entry: './src/index.js', //nơi chứa một hay nhiều các file đầu vào. Ở đây mình dùng fileindex.js. Vì ở trong file này mình import mọi file khác vào mà 🙂
    module: {
      rules: [ // Nhận vào một array. Đây là nơi chứa các loader
        {
          test: /\.(js|jsx)$/, // Nhận vào một Regex để xác định kiểu file
          exclude: /(node_modules|bower_components)/, //  Nhận vào một regex để loader loại trừ ra những file này
          use: { // Nhận vào một object hoặc một array chứa thông tin loader
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: isDev ? true : false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isDev ? true : false }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    },
    resolve: { extensions: ['.js', '.jsx'] },//  Nơi chứa thứ tự ưu tiên khi import các file.
    output: {
      path: path.resolve('dist'), // Nhận vào một string là đường dẫn tuyệt đối đến thư mục sau khi build
      publicPath: '../dist/', // Chứa đường dẫn tương đối mà từ file index.html trỏ đến các file trong thư mục dist sau khi build
      filename: 'bundle.js',
      environment: {
        arrowFunction: false, // Hỗ trợ arrow function.
        bigIntLiteral: false, // Hỗ trợ BigInt
        const: false, // Hỗ trợ khai báo const và let
        destructuring: false, // Hỗ trợ destructuring
        dynamicImport: false, // Hỗ trợ async import
        forOf: false, // Hỗ trợ vòng lặp forOf cho các array
        module: false // Hỗ trợ moudle ES6 (import … from ‘…’)
      }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {  // In Webpack version 4 it will be
      // contentBase
      static : {
        directory : path.join(__dirname, "public/")
      },
      port: 3000,
      // publicPath
      devMiddleware:{
         publicPath: "https://localhost:3000/dist/",
      },
      // hotOnly
      hot: "only", // hot:true
    }
  }
}