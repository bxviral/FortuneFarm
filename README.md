## Objective

- Fortune Farm is an innovative agriculture project that aims to provide farmers with easy access to agriculture products and weather information for better crop management. The project is designed to help farmers improve their farming practices, increase their productivity, and generate more income by leveraging the power of technology.

## Methodologies

- Needs Assessment: Conducting a comprehensive needs assessment to understand the specific requirements of farmers in the target region. This may involve conducting surveys, interviews, and focus groups with farmers to gather insights on their challenges, preferences, and requirements related to agriculture products and weather information.

- Design and Development: Based on the needs assessment findings, designing and developing the Fortune Farm platform. This may involve developing a user-friendly online marketplace for agriculture products, integrating weather forecasting technology, creating a nearby stores locator, and developing a shopkeeper enrollment system. The platform should be designed to be accessible and usable by farmers with varying levels of technological literacy.

- Testing and Refinement: Conducting thorough testing of the platform to ensure its functionality, reliability, and security. Feedback from farmers and shopkeepers should be collected during this stage to identify any issues or areas for improvement. Refinements should be made accordingly to optimize the platform's performance and user experience.

- Vendor Onboarding: Identifying and onboarding vendors, including agriculture product suppliers and shopkeepers, to participate in the Fortune Farm marketplace. This may involve establishing partnerships or collaborations with existing vendors or recruiting new ones to ensure a diverse range of products is available to farmers at competitive prices.

- Monitoring and Evaluation: Continuously monitoring and evaluating the performance and impact of the Fortune Farm project. This may involve collecting data on key performance indicators (KPIs), such as the number of farmers and shopkeepers using the platform, the volume of products sold, and the impact on farmers' productivity and income. The findings should be used to inform ongoing improvements and optimizations to ensure the project's success and sustainability.

## Results

- Online Agriculture Product Marketplace: The Fortune Farm platform provides farmers with an online marketplace where they can purchase a wide range of agriculture products, including seeds, fertilizers, pesticides, and farming equipment. This feature allows farmers to browse and compare products from different vendors and select the ones that best meet their needs.

- Weather Information: The Fortune Farm platform also provides farmers with accurate weather information for the next 5 days. This information is crucial for farmers to plan their crop management activities, such as sowing and harvesting, based on weather patterns. The platform uses advanced weather forecasting technology to provide real-time weather updates and alerts to farmers.

- Nearby Stores Locator: The Fortune Farm platform also features a nearby stores locator that helps farmers find the nearest stores from where they can buy products for their farm. This feature saves farmers time and effort in finding the right store to purchase products and ensures that they can access products quickly and conveniently.

- Shopkeeper Enrollment: The Fortune Farm platform allows shopkeepers to enroll themselves and add their own shop products to the marketplace. This feature enables small-scale shopkeepers to expand their business by reaching a wider customer base and selling their products online. It also benefits farmers by providing them with access to a diverse range of products from multiple vendors at competitive prices.

The Fortune Farm project is aimed at improving the agriculture sector by providing farmers with a more efficient way to manage their farms. By leveraging the power of technology, the project seeks to empower farmers with the tools and information they need to make informed decisions and improve their yields.


## Technologies

- Frontend: The frontend of the Fortune Farm project is developed using React JS, a popular JavaScript library for building user interfaces. React JS provides a modern and efficient approach to building web applications and allows for seamless updates and modifications.

- Backend: The backend of the Fortune Farm project is developed using Node JS, a server-side JavaScript runtime. Node JS provides a scalable and efficient way to handle server-side logic and database interactions.

- Database: The Fortune Farm platform uses MongoDB, a popular NoSQL database, to store and manage data. MongoDB provides a flexible and scalable approach to data storage and allows for efficient querying and indexing.

- Deployment: The Fortune Farm project is deployed using Google Cloud and AMD instance, which provides a reliable and scalable infrastructure for hosting web applications. The deployment process is automated using CI/CD pipelines to ensure a seamless and error-free deployment process.

## Roles of team members

- Rahul Shinde :- Frontend part ( weather API fetching and UI desgin) and deployment of backend and frontend to Google cloud.
- Apar Solanki :- Backend part (creating REST APIs for CRUD operations and integration of backend with frontend) 
- Shreya Patel :- Frontend part (UI desgin)
- Sanjana Daki :- Frontend part (UI design)


This app have been deployed directly to Google Cloud using AMD instance. The backend nodejs server is deployed in Compute engine Virtual instance and the frontend reactjs is deployed in app engine and its build folder in cloud storage. 

## File structure
#### `Frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `images` - This folder holds assets such as images.
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `Backend` - Holds the server application
- #### `db` - This holds our configuration files, like mongoDB uri
- #### `web` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `index.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


### View Project

http://meta-passkey-383508.uc.r.appspot.com/



