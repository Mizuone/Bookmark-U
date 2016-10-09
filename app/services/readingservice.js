app.service('readingservice', function() {
    var readingservice = {};
    
    readingservice.readingCollection = [
        {name: "EloJS Chp4", description: "Eloquent JavaScript Chapter 4, Data Structures: Objects and Arrays", siteurl: "http://eloquentjavascript.net/04_data.html", category: "reading"},
        {name: "Medium", description: "Medium daily blog entries and articles for a wide range of topics", siteurl: "https://medium.com/", category: "reading"},
        {name: "JSBooks", description: "A Massive JavaScript book resource for all things concerning JS", siteurl: "http://jsbooks.revolunet.com/", category: "reading"}
    ];
    
    return readingservice;
});