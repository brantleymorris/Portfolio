// set variable
    // array of project objects to store data
    var projects = [
        {title: "Horizeon Optimization",
        description: "This project involved website optimization for search engine recognition.",
        image: "./assets/images/Horiseon-Optimzation.png",
        deployedURL: "https://brantleymorris.github.io/Horiseon_Optimization/",
        gitHubUrl: "https://github.com/brantleymorris/Horiseon_Optimization"},
        {title: "Secure Password Generator",
        description: "This program generates a randomized password bases on user criteria.",
        image: "./assets/images/securePasswordGenerator.png",
        deployedURL: "https://brantleymorris.github.io/SecurePasswordGenerator/",
        gitHubUrl: "https://github.com/brantleymorris/SecurePasswordGenerator"},
        {title: "Daily Planner",
        description: "This program creates a daily planner where the user can store tasks for the day. Each time frame is color coded so that the user knows which tasked need to be completed when.",
        image: "./assets/images/dailyPlanner.png",
        deployedURL: "https://brantleymorris.github.io/FrontEndQuiz/",
        gitHubUrl: "https://brantleymorris.github.io/FrontEndQuiz/"},
        {title: "Front End Quiz",
        description: "This program contains a quiz over elements for front end design and it's uses.",
        image: "./assets/images/frontEndQuiz.png",
        deployedURL: "https://brantleymorris.github.io/FrontEndQuiz/",
        gitHubUrl: "https://github.com/brantleymorris/FrontEndQuiz"},
        {title: "Weather Tracker",
        description: "This program present the current weather and 5 day forecast for the searched city.",
        image: "./assets/images/weatherTracker.png",
        deployedURL: "https://brantleymorris.github.io/Weather_Tracker/",
        gitHubUrl: "https://github.com/brantleymorris/Weather_Tracker"},
        {title: "Covid Travel Companion",
        description: "For those who want to travel during CoVid-19, and want to make sure they are reasonalbe safe, we are here to help.",
        image: "./assets/images/covidHotelBooking.png",
        deployedURL: "https://brantleymorris.github.io/Covid_Hotel_Booking/",
        gitHubUrl: "https://github.com/brantleymorris/Covid_Hotel_Booking"},
        {title: "Read Me Generator",
        description: "This project was developed to help users write a clear and well structured ReadMe.md file fo their own projects. It utilizes the inquirer framework to prompt the user for the content they would like their ReadMe.md file to contain. The file is then created using the fs framework.",
        image: "./assets/images/readMe.png",
        deployedUrl: "https://drive.google.com/file/d/1lEzAJrzvqlJgjiBjU4CCempVGqrqR_yV/view?usp=sharing",
        gitHubUrl: "https://github.com/brantleymorris/ReadMeGenerator/blob/main/index.js"},
        {title: "Note Taker",
        description: "This program allow the user to create and delete notes, that are persisted using a json file to store users data.",
        image: "./assets/images/noteTaker.png",
        deployedUrl: "https://fathomless-oasis-100030.herokuapp.com/",
        gitHubUrl: "https://github.com/brantleymorris/NoteTaker"
        },
        {title: "Team Tracker",
        description: "This program uses the inquirer cli to create an html file contain all team members roles and managers",
        image: "./assets/images/teamTracker.png",
        deployedUrl: "https://brantleymorris.github.io/TeamTracker/",
        gitHubUrl: "https://github.com/brantleymorris/TeamTracker/tree/main"
        },
        {title: "Burger Hunter",
        description: "This programs uses the handlebars framework and a SQL database to store and display the burgers that a user wants to eat and has eaten.",
        image: "./assets/images/burgerHunter.png",
        deployedUrl: "https://obscure-ocean-89115.herokuapp.com/",
        gitHubUrl: "https://github.com/brantleymorris/Burger_Hunter"
        }
    ];

// create functions
    // need a function to write project to div when image is clicked
    function displayProject (i) {
        let target = $(".descriptions");
        target.empty();

        var project = 
        `<div class="container" id="project">
                <div class="row align-items-center">
                    <h1 class="title col-12 col-md-6">${projects[i].title}</h1>
                    <img src="${projects[i].image}" class="col-12 col-md-6 img-fluid" style="mx-width:100%, height:auto">
                </div>

                <div class="row align-items-center">

                    <div id="products" class="col-8">
                        <p>${projects[i].description}</p>
                    </div>

                    <div id="image" class="col-4">
                        <div class="container">
                            <div id="links" class="row">
                                <a href="${projects[i].deployedURL}">
                                    <p>Try it out!</p>
                                </a>
                                <a href="${projects[i].gitHubUrl}" class="col-6">
                                    <img src="./assets/images/GitHub-Mark-64px.png">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

        target.append(project);
        };

    // This function creates image buttons for projects when page is loaded
    function createImageButtons () {
        for (let i = 0; i < projects.length; i++) {
            var images = $(".images");

            var imageButton = $("<img>").attr("src", projects[i].image).attr("class", "imageButton").attr("id", i);
           
            images.append(imageButton);

            $(`#${i}`).on("click", function() {
                displayProject(i)
                });
            }
    };

// call functions - event listeners
createImageButtons();