// set variable
    // array of project objects to store data
    var projects = [
        {title: "Horizeon Optimization",
        description: "This project involved website optimization for search engine recognition.",
        image: "./assets/images/Horiseon-Optimzation.png",
        deployedURL: "",
        gitHubUrl: ""},
        {title: "Secure Password Generator",
        description: "This program generates a randomized password bases on user criteria.",
        image: "./assets/images/securePasswordGenerator.png",
        deployedURL: "Test 1",
        gitHubUrl: "Test 2"},
        {title: "Daily Planner",
        description: "This program creates a daily planner where the user can store tasks for the day. Each time frame is color coded so that the user knows which tasked need to be completed when.",
        image: "./assets/images/dailyPlanner.png",
        deployedURL: "",
        gitHubUrl: ""},
        {title: "Front End Quiz",
        description: "This program contains a quiz over elements for front end design and it's uses.",
        image: "./assets/images/frontEndQuiz.png",
        deployedURL: "",
        gitHubUrl: ""},
        {title: "Weather Tracker",
        description: "This program present the current weather and 5 day forecast for the searched city.",
        image: "./assets/images/weatherTracker.png",
        deployedURL: "",
        gitHubUrl: ""},
        {title: "Covid Travel Companion",
        description: "For those who want to travel during CoVid-19, and want to make sure they are reasonalbe safe, we are here to help.",
        image: "./assets/images/covidHotelBooking.png",
        deployedURL: "",
        gitHubUrl: ""}
    ];

// create functions
    // need a function to write project to div when image is clicked
    function displayProject (i) {
        $(".descriptions").empty();

        var project = `
            <div class="container border border-dark">
                <h1>${projects[i].title}</h1>

                <div class="row border border-dark">

                    <div id="image" class="col-4 border border-dark">

                        <img src="${projects[i].image}" class="img-fluid" style="mx-width:100%, height:auto">

                        <div class="container border border-dark">
                            <div id="links"class="row border border-dark">
                                <p class="col-6">${projects[i].deployedURL}</p>
                                <p class="col-6">${projects[i].gitHubUrl}</p>
                            </div>
                        </div>
                    </div>

                    <div id="products" class="col-8 border border-dark">
                        <p>${projects[i].description}</p>
                    </div>

                </div>
            </div>
        `
        $(".descriptions").append(project);
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