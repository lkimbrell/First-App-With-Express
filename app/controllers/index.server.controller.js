exports.render =
    function (req, res) {
        if (req.session.lastVisit) {
            console.log('Last visit was: ' + req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        res.status(200).render('index', {
            yourName: 'Landon Kimbrell',
            headerTitle: 'The MEAN Stack',
            definitions: [
                {
                    name: 'MongoDB',
                    definition: 'MongoDB is a document-oriented database that stores application data in flexible, JSON-like documents.'
                },
                {
                    name: 'Express',
                    definition: 'Express is a lightweight Node.js web framework for building HTTP servers, APIs, and middleware-driven applications.'
                },
                {
                    name: 'Angular',
                    definition: 'Angular is a TypeScript-based framework for building dynamic, component-driven web applications that run in browsers.'
                },
                {
                    name: 'Node.js',
                    definition: 'Node.js is a JavaScript runtime that executes code outside browsers and supports scalable network applications.'
                }
            ]
        });
    };