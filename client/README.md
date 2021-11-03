# 3D Repo React Test

### This application is my attempt at the 3D Repo Offsite Test

#### Functionality:
* A list of users is fetched from an API
* The users list with some basic details of each user is displayed
* Clicking a user's image brings a single user detail page
* If no user is found or when navigating to an incorrect user some basic error handling occurs


#### To Do:
* Better error handling
	- Render a proper error page
	- If a user list has already been loaded into state, then maintain this list
	- Suggest a user who closely matches the user not found
* Search bar
	- Allow for searching of users by various fields, ideally all
* Implement clearer UI
	- Make selecting of user to see details clearer
	- Display users side by side, rather than one long list
	- When in single user page, allow for navigation to next and previous user in list
* Deployment
	- Create a backend server to serve the front-end
	- Dockerise to allow for safer use on different machines and more stable deployment


#### Deployment 
##### Local Deployment:
Clone this repository, then:

```
$ npm install

$ yarn start
```

The app will then be available at: ```http://localhost:3000```

#### Remote:
