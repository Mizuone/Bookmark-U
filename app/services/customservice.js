app.service('customservice', function() {
   var customservice = {};
    
    customservice.customCollection = [
        {name: "UX/UI tweaks", description: "Site that has a list of UX choices to consider when designing an app", siteurl: "http://www.nickkolenda.com/user-experience/", category: "custom"},
        {name: "Anime Vibe", description: "Youtube site that has a collection of chill hop, old school vibes, some of my music for programming", siteurl: "https://www.youtube.com/channel/UC9uLMAmdGQaeLPHAOqkYlrw", category: "custom"},
        {name: "Learn Digital Painting", description: "Resource for learning basics of digital painting", siteurl: "http://www.ctrlpaint.com/", category: "custom"}
    ];
    return customservice;
});