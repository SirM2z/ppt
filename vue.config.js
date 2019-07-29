module.exports = {
  lintOnSave: 'error',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ppt/'
    : '/'
  // runtimeCompiler: process.env.NODE_ENV !== 'production'
}
