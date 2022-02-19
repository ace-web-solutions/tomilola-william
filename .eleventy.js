module.exports = eleventyConfig =>{

    eleventyConfig.addPassthroughCopy('assets')
    eleventyConfig.addWatchTarget('assets')
    eleventyConfig.addPassthroughCopy('uploads')
    eleventyConfig.addPassthroughCopy('webfonts')
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('src/admin')

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