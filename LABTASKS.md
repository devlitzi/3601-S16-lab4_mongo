#Lab Tasks

## Part 1: Exploring the project

- Set up this project to use Travis CI, and add your build status icon to the README.

##### What are the differences between the folder structure of this project and the previous one? Note that api/pets is server-side routing specific to the database, and the client folder contains the client-side portion of the project.

> It splits up the client side and server side files into different folders instead of running them at the surface level.

##### How is app.js (at the project root) different from the ones in the previous two labs? Give examples of the kinds of urls that app.js handles, and describe where each case will be routed.

> app.js mosly uses functions that connect to mongo. The urls are more specific to the ip of the database.

##### The project is connected to the database via mongoose. Where is this connection set?

> This connection is set ```mongodb://127:0.0.1:27017/```

##### Explain how api/pets/pets.controller.js gets added to app.js (remember this is all server-side).

> the pets.controller.js gets added to app.js by defining the API Route.

##### Study the file api/pets/pets.controller.js, answer the following questions:
-  What kind of documents would the database contain? What is the field in the model?
> It would contain 'Pet' documents. The model shows a ```{text: String}``` field
-  What functions are defined in the controller? How do they change the database data?
> functions index, create, and destroy are defined in the controller. ```index``` just displays data, ```create``` creates a new document, ```destroy``` destroys a document
-  How does one get or delete elements in the database?
> you get elements by calling the API route to the information you want, then use the function in the controller that gets or deletes the elements. (In this case, create and destroy)

##### What is the purpose of index.js in the api/pets? Where is it referenced?

> It actually defines the API module. This is not referenced according to the "find usages" function in Webstorm.

##### What views are used in the project?

>There are three views: ```404.html``` ```main.html``` and ```about.html```

##### We've seen a few different ways to display HTML in the last couple labs (straight, individual HTML pages and components being added to HTML). How are HTML files combined and displayed in this lab? 
> The HTML pages get displayed through the index.html using javascript to define what kind of view that page should display.

>Protip: main.html isn't a full HTML document, so how does it get displayed? 
>Through the index.html file

##### Where is the code for the navigation bar located? How is it connected to the pages of the project?

> It is located at ```components/navbar/navbar.html``` it is added to each view using an angular include.

##### client/app.js performs client-side routing. How do you think it works?

> It uses modules to define its actions based on the state of the main module.

## Part 2: Add another field to pet data.

- Add a numeric field to the pet model (say, for example, weight). Add a field to enter weight when a new pet document is created. Add a field in the main page to show the heaviest of all pets and its weight. Remember to practice TDD and perform frequent commits.

>Protip: Make sure to separate business logic functions from functions that make http calls. That is, don't have a function that performs both. This alows for optimal testing conditions.

## Part 3: Add a GPA calculator

- Add a view to enter courses and display the GPA. Add a link on the navigation bar that leads to it; add the corresponding route. Entered courses (name, credits, letter grade) must be stored in the database. Practice TDD and perform frequent commits. Don't forget to add new files to git before committing. Use the refactoring menu when renaming files (this will rename then in the git repo as well). Remember to check out you test coverage, and watch your build history on Travis-CI.
