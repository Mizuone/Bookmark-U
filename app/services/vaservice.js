//inject all service collections into viewall collection
app.service('vaservice', function(ionicservice, angularservice, readingservice, programmingservice, customservice) {
    var vaservice = {};
    
    vaservice.vaCollection = [
        
    ];
    
    
    if (localStorage['bookmarks']) {
        var bookmarks = JSON.parse(localStorage['bookmarks']);
    }else {
        var bookmarks = [];
        
        //pushes an objects property values into a collection and returns it
        //This function uses recrusion to push each sevice collection into a combined collection
        //Ex: vaservice.vaCollection = pushIntoCollection(angularservice, "angularCollection", 1);
        //The reOccur variable is the amount of times it will run itself.
        function pushIntoCollection(service, serviceCollection, reOccur) {

            let collection = [];

            for (let item in service[serviceCollection]) {
                collection.push(service[serviceCollection][item]);
            }

            if (reOccur !== 0) {
                collection.push(pushIntoCollection(ionicservice, "ionicCollection", reOccur - 1));
                collection.push(pushIntoCollection(readingservice, "readingCollection", reOccur - 1));
                collection.push(pushIntoCollection(programmingservice, "programmingCollection", reOccur - 1));
                collection.push(pushIntoCollection(customservice, "customCollection", reOccur - 1));
            }

            return collection;
        }
        vaservice.vaCollection = pushIntoCollection(angularservice, "angularCollection", 1);

        //Arranges a partial multi demensional array to a single array of objects
        //Organizes a collection consisting of 3 objects for the first 3 elements
        //After that is will organize sub arrays
        function collectionOrganizer(service, collection) {
            let newCollection = [];
            let id = 0;
            for (let i = 0; i < service[collection].length; i++) {
                if (i >= 3) {
                    break;
                }
                service[collection][i].id = id;
                newCollection.push(service[collection][i]);
                id++;
            }

            for (let i = 3; i < service[collection].length; i++) {

                for (let x = 0; x < service[collection][i].length; x++) {
                    service[collection][i][x].id = id
                    newCollection.push(service[collection][i][x]);
                    id++;

                }
            }
            return newCollection;
        }
        vaservice.vaCollection = collectionOrganizer(vaservice, "vaCollection");

        function saveToLocalStorage() {
            let id = 0;
            
            if (localStorage[0] !== undefined) {
                for (let i = 0; i < localStorage.length; i++) {
                    bookmarks.push(JSON.parse(localStorage.getItem(i)));
                }
            }
            
            
            if (localStorage[0] === undefined) {
                console.log("Hello");
                for (let i = 0; i < vaservice.vaCollection.length; i++) {
                    bookmarks.push(vaservice.vaCollection[i]);

                }
                bookmarks.forEach(function(elem) {
                    localStorage.setItem(id, JSON.stringify(elem));
                    id++;
                });
            }
            
            
            return bookmarks;
        }
        vaservice.vaCollection = saveToLocalStorage();
    }
    
    
    vaservice.removeMark = function (id) {
        var con = confirm("Do you want to delete this bookmark?");
        if (!con) {
            return;
        }
        for (var i = 0; i < vaservice.vaCollection.length; i++) {
            if (vaservice.vaCollection[i].id === id) {
                
                var index = vaservice.vaCollection.indexOf(vaservice.vaCollection[i]);
                vaservice.vaCollection.splice(index, 1);
                localStorage.removeItem(index);
            }
        }
    }
    
    
    return vaservice;
})