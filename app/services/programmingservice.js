app.service('programmingservice', function() {
    var programmingservice = {};
    programmingservice.programmingCollection = [
        {name: "One Click Resource", description: "A large resource for front end development, and many other categories for everything to be awesome.", siteurl: "https://github.com/vic317yeh/One-Click-to-Be-Pro", category: "programming"},
        {name: "Code Wars", description: "A site that gives you a challenge for a specific language you specilize in.", siteurl: "https://www.codewars.com/", category: "programming"},
        {name: "Typingio", description: "Place that allows you to practice safe typing while typing in a number of programming languages.", siteurl: "https://typing.io/", category: "programming"}
    ];
    
    return programmingservice;
})