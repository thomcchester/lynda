module.exports={
  entry: './src/index.js',
  output: {
    path:__dirdanme+'/public',
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
