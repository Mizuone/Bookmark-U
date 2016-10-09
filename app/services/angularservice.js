app.service('angularservice', function() {
    var angularservice = {};
    angularservice.angularCollection = [
        {name: "Angularjs.org", description: "Angular's homesite for all things angular", siteurl: "https://angularjs.org/", category: "angular"},
        {name: "Angular Style Guide", description: "The purpose of this style guide is to provide guidance on building Angular applications by showing the conventions I use and, more importantly, why I choose them.", siteurl: "https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md", category: "angular"},
        {name: "AngularJs Wiki", description: "AngularJS (commonly referred to as 'Angular' or 'Angular.js') is a complete JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications", siteurl: "https://en.wikipedia.org/wiki/AngularJS", category: "angular"}
    ];
    return angularservice;
});