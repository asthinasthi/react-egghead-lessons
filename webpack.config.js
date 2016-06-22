module.exports = {
  entry: './main.js',
  output:{
    path: './',
    filename: 'index.js'
  },
  devServer:{
    inline: true,
    port: 3333
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015,presets[]=react']
      }
    ]
  }
}
