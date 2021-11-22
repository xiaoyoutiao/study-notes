const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: isProd
        ? 'https://xiaoyoutiao.github.io/'
        : '/'
}