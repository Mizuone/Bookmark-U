app.service('ionicservice', function() {
   var ionicservice = {};
    ionicservice.ionicCollection = [
        {name: "Mainsite", description: "Main site for ionic framework, large resource", siteurl: "http://ionicframework.com/", category: "ionic"},
        {name: "Thinkster tutorial", description: "Step by step tutorial that guides you through a series of steps in learning ionic and completing an app", siteurl: "https://thinkster.io/ionic-framework-tutorial", category: "ionic"},
        {name: "Ionic 2 Joshmorony", description: "Detailed guide over through ionic 2, with a application break down of build process", siteurl: "http://www.joshmorony.com/ionic-2-first-look-series-your-first-ionic-2-app-explained/", category: "ionic"}
    ];
    return ionicservice;
});