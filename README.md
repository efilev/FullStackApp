**Architecture**

**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**
Express provides a simple preview of what the general layout of the web application will be. In today's age, Express HTML is not enough for a fully functional application. However, it provides a good baseline. With Express I introduced JavaScript into the application, which stored trips more efficiently in a db.js file. 

**Why did the backend use a NoSQL MongoDB database?**
NoSQL allows for easy lookup of our trips. Since it is a basic key-value schema, all we need is to assign the key portion to a basic ID, formatted as "_id" in our program, and the rest of the information is stored in JSON. The GET call retrieves a trip by its code or ID, and the rest is up to the developer to manipulate without having to redefine the structure of the database.  

**Functionality**

**How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**
JSON is a simple way to store data. The data can be called later by Javascript and other coding languages. Javascript, however, is its own complex language that cannot be adapted easily by others. This is where the key-value functionality comes in. In my JSON document for the list of trips, I stored the id, name, price, length, and other information all pertaining to the trip in an easy-to-read format. 

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.**
One instance that was fascinating in the process was the final touch of adding a login function. Every website in the modern age contains an option to log in to access more features, and especially for admin access. I have made many accounts across different websites, but never had the opportunity to add the functionality of it myself. Even with such a simple webpage, it made me realize how much effort goes into protecting data from malicious activity. I also realized how many tools there are to help developers prevent security incidents from occurring. 

**Testing**

**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.**
It took me a while to understand what API endpoints truly are. Postman helped me understand the process better. In short, an endpoint allows for easy server-client request-response calls. Usually the request is something simple, in our case a single trip or a full list of trips, and the api uses GET to respond with the appropriate item.  I used Postman to ensure the login and register features worked. I used the POST call to test the login feature, and POST to test addition of trips. GET was called whenever the EDIT button was pressed to retrieve an existing trip code and edit it. PUT is used to update trips. 

**Reflection**

**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?** 
My ultimate goal is to become a developer, whether that be in software engineering, full stack development, or game development. This class is one of many that has helped introduce me to another branch of computer science.
