module.exports=function 
    (eleventyConfig){
        eleventyConfig.addPassthroughCopy("./")
    // eleventyConfig.setBrowserSyncConfig({
    //     notify: true
    //   });
    return{
        dir: {
            input: "src",
            output: "public",

        },
    };
};