const Card = require("./src/_includes/components/Card");

module.exports=function 
    (eleventyConfig){
        eleventyConfig.addPassthroughCopy("src/assets/")
        eleventyConfig.addPassthroughCopy("src/css/")


        eleventyConfig.addWatchTarget("src/css/");

        eleventyConfig.addShortcode("Card", Card);
    // eleventyConfig.setBrowserSyncConfig({
    //     notify: true
    //   });
    return{
        dir: {
            input: "src",
            includes: "_includes",
            output: "_sites",

        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine:'njk',
        dataTemplateEngine: 'njk',
    };
};