/**
 * Article: https://hackernoon.com/a-quick-introduction-to-functional-javascript-7e6fe520e7fa
 */

// An array of articles with their tags
var articles = [
    { title: "Introduction to Javascript Scope", tags: ["Javascript", "Variables", "Scope"]},
    { title: "Javascript Closures", tags: ["Javascript", "Variables", "Closures"]},
    { title: "A Guide to PWAs", tags: ["Javascript", "PWA"]},
    { title: "Javascript Functional Programming Examples", tags: ["Javascript", "Functional", "Function"]},
    { title: "Why Javascript Closures are Important", tags: ["Javascript", "Variables", "Closures"]},
];

// A function that reduces the above array to an
// array based on tags
var tagView = function(accumulator, x)
{
    // For every tag in the articles tags array
    x.tags.forEach(function(currentTag)
    {
        // Create a function to check if it matches
        var findCurrentTag = function(y) { return y.tag == currentTag; };
        // Check if it's already in the accumulator array
        if (accumulator.some(findCurrentTag))
        {
            // Find it and get its index
            var existingTag = accumulator.find(findCurrentTag);
            var existingTagIndex = accumulator.findIndex(findCurrentTag);
            // Update the number and array of articles
            accumulator[existingTagIndex].count += 1;
            accumulator[existingTagIndex].articles.push(x.title);
        }
        else
        {
            accumulator.push({
                tag: currentTag,
                count: 1,
                articles: [x.title],
            });
        }
    });
    // Return the accumulator array
    return accumulator;
};

// transform the articles array
var result = articles.reduce(tagView, []);

// show result
console.log(result);