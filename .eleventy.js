module.exports = eleventyConfig =>{

    eleventyConfig.addPassthroughCopy('assets')
    eleventyConfig.addWatchTarget('assets')

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: 'njk',
        templateFormats: ['html','njk','md'],
        pathPrefix: '/',
        dir: {
            input: 'src',
            output: '_site',
            includes: 'includes'
        }

    }
}