const Card = require("./src/_includes/components/Card");
const ProjectCard = require("./src/_includes/components/projects");

module.exports=function 
    (eleventyConfig){
        eleventyConfig.addPassthroughCopy("src/assets/")
        eleventyConfig.addPassthroughCopy("src/css/")


        eleventyConfig.addWatchTarget("src/css/");

        eleventyConfig.addShortcode("Card", Card);
        eleventyConfig.addShortcode("ProjectCard",ProjectCard);
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