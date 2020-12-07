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
        gitHubUrl: "https://github.com/brantleymorris/Covid_Hotel_Booking"}
    ];

// create functions
    // need a function to write project to div when image is clicked
    function displayProject (i) {
        let target = $(".descriptions");
        target.empty();

        var project = `
            <div class="container border border-dark">
                <div class="row">
                    <h1 class="title col-6">${projects[i].title}</h1>
                    <img src="${projects[i].image}" class="col-6 img-fluid" style="mx-width:100%, height:auto">
                </div>

                <div class="row border border-dark">

                    <div id="products" class="col-8 border border-dark">
                        <p>${projects[i].description}</p>
                    </div>

                    <div id="image" class="col-4 border border-dark">
                        <div class="container border border-dark">
                            <div id="links"class="row border border-dark">
                                <a href="${projects[i].deployedURL}">
                                    <p>Check it out!</p>
                                </a>
                                <a href="${projects[i].gitHubUrl}" class="col-6">
                                    <img src="./assets/images/GitHub-Mark-64px.png">
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        `
        target.append(project);
        };

    // This function creates image buttons for projects when page is loaded
    function createImageButtons () {
        for (let i = 0; i < projects.length; i++) {
            var images = $(".images");

            var imageButton = $("<img>").attr("src", projects[i].image).attr("id", projects[i].title);
            // may need to add the on click here

            images.append(imageButton);
            }
    }

// call functions - event listeners
createImageButtons();
displayProject(1);