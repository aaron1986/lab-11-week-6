# Project Name Can of Books

**Author**:
Babatunde Alfred O.
Neill Edwards
Vicky Isobel
Aaron Smith

**Version**: 1.0.9 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
 This application has the purpose of allowing a user to store a reading list of books. To make use of the list the user needs to be able to access the list of books and access information about individual books. To maintain the list the user needs to be able to edit information about existing books, mark them as read, add new books and remove ones that are no longer wanted. In addition for privacy and to prevent vandalism access should be restricted to authorised users.


## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

	- Set up the Can Of Books project folder.
	- Create the client folder and app under the Can Of Books folder with npm create vite@latest.
	- Create a server folder under Can Of Books with a server.js file inside it.
	- Write this boilerplate code in server.js:
	
				const express = require("express");
				const cors = require("cors");
				require("dotenv").config();
				const PORT = process.env.PORT || 8080;
				const app = express();
				app.use(cors());

				// add endpoints here

				app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
				
	- Create a package.json file under Can Of Books with npm init -y
	- Install libraries with npm i express cors dotenv axios mongoose
	- Use np i react-router-dom to install react router dom
	- Optionally install nodemon with npi i nodemon
	- Add .env files to the client and server folders
	- Add .env to the .gitignore file
	- Make the project folder a repository with git init
	- Link the local and remote repos with git remote add origin <project name>
	- The project is now ready for coding.


## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

The application has a client-server structure with the client handling the user interface and presention and the server handling the book database and processing queries to it. The code is written in Javacript and Node.js within a html framework and CSS styling and Express provides a server. The project is stored in a mono repository on Github with client and server folders. VS Code and Vite are employed for development. The client and server are deployed to the web on separate servers, on Vercel and Render respectively. The book list is implemented in MongoDB, a freely available noSQL database.

    	Code:		Javascript
    	Libraries:	Node
    			Express
    			Cors
    			Dotenv
    			React
    			React-router-dom
    			Mongoose
    			 

							
    	

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:


06-11-2023 14:30 	Repositories set up with starting templates.
06-11-2023 15:30 	Schema and model set up and modularised.
06-11-2023 16:00	Database seeded.
07-11-2023 15:00  	Front end and Read action operational.
07-11-2023 16:00  	Create function operational on localhost.
08-11-2023 15:00	Delete function operational on localhost.
08-11-2023 16:00	Update operational on local server.
09-11-2023 15:00	All functions operational on web.operational on web.
10-11-2023 11:00	Authorisation partially working.



## Estimates



Name of feature: Set up repositories

Estimate of time needed to complete: 1 hr

Start time: 13:30	06-11-2023

Finish time: 15:30

Actual time needed to complete: 2 hrs

Name of feature: Storage

Estimate of time needed to complete: 1 hr

Start time: 15:00	06-11-2023

Finish time: 14:00 	07-11-2023

Actual time needed to complete: 2 hrs

Name of feature: Book Component

Estimate of time needed to complete: 2 hr

Start time: 14:00 	07-11-2023

Finish time: 15:00

Actual time needed to complete: 1 hr

Name of feature: Create Function

Estimate of time needed to complete: 2 hr

Start time: 14:00 	07-11-2023

Finish time: 15:00

Actual time needed to complete: 1 hr

Name of feature:  Delete Function

Estimate of time needed to complete: 2 hr

Start time: 14:00 	08-11-2023

Finish time: 15:00	

Actual time needed to complete: 1 hr

Name of feature:  Update Function

Estimate of time needed to complete: 2 hr

Start time: 15:00 	08-11-2023

Finish time: 16:00	

Actual time needed to complete: 1 hr

Name of feature:  Authentication

Estimate of time needed to complete: 2 hr

Start time: 15:00 	09-11-2023

Finish time: 11:00	10-11-2023 Partially working	

Actual time needed to complete: 



## Credit and Collaborations

Logistical:

What hours will you be available to communicate?

9:00 to 20:00  

What platform will you use to communicate?

Discord

How often will you take breaks?

~ 10 minutes after every hour

What is your plan if you start to fall behind?

Extend group coding hours if possible. Carry out non-coding tasks when individuals are available, work subject to group review as necessary.

Cooperative:

Make a list of each parson’s strengths.

	** To be added **

How can you best utilize these strengths in the development of your application?

	** To be added **

In what areas do you each want to develop greater strength?

	** To be added **

Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?

Group coding with one person as driver in rotation.

Conflict Resolution

What will your team do if one person is pulling all the weight while the other person is not contributing?

Discuss situation. Refer to TAs as last resort.

What will your team do if one person is taking over the project and not letting the other member contribute?

Discuss situation. Refer to TAs as last resort.

How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?

Pace activity in recognition of this so that everybody is kept up to date.

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
