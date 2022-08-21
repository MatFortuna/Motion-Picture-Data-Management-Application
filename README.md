# Motion-Picture-Data-Management-Application
A simple motion picture data management application.

## Let's Get Started
This is what I used to create this and would be easiest for you to have the same to load and run everything:
#### Database:
Microsoft SQL Server 2019 Express
Microsoft SQL Server Management Studio (SSMS)
#### IDE: 
Microsoft Visual Studio Community 2019
#### Server Side:
Latest versions of ASP.NET
C#
#### Client:
HTML
CSS
ES6
Vue.js

### DataBase
Open up Microsoft SQL Server Management Studio and make sure you are connected to (LocalDB)\SQLEXPRESS, 
![image](https://user-images.githubusercontent.com/99191287/185769312-3c3e28d2-aced-42dd-9c9a-5ffe69b9c431.png)

as that is where the backend is looking to go. 

![image](https://user-images.githubusercontent.com/99191287/185769329-642eca45-99dc-4cab-964e-0a94dae6ccc8.png)
you can change that here if you would like. 

Once you are connected to a local server: right click on its name and make a New Query.

![image](https://user-images.githubusercontent.com/99191287/185769409-c6818f2d-d94c-4fdf-9d45-a7f8a67a3425.png)

Find the file - MovieDBBuildCode.sql.
You can drag that file onto the query window or open that file and copy and paste it into the new query. 
It should look like this:

![image](https://user-images.githubusercontent.com/99191287/185769429-b383e560-f210-4f98-b8ac-2b619ad954d6.png)

Execute this code and the Database should be built with some Movie Data already inserted.

### Back End
Next find the Movie folder 

![image](https://user-images.githubusercontent.com/99191287/185769452-ffcdc6f6-e2ed-4cb8-90f7-4f597ffd7797.png)

Open it up and double click the file Movie.sln.  This should be opened with Microsoft Visual Studio Community 2019
Once open you can run it by clicking as shown below.

![image](https://user-images.githubusercontent.com/99191287/185769476-3c63a97d-1efc-4596-bd7f-6e89f3fecfa0.png)

### Front End
Go back now to the previous folder and find the MovieVue folder. You are going to want to open this folder.
Next right click on the whitespace of the folder and open it with Microsoft Visual Studio Community 2019.

![image](https://user-images.githubusercontent.com/99191287/185769659-ebf28a55-d1af-434d-91e8-6239fae1bf12.png)

Open the Developer Command Prompt and enter: npm install

This will install what you need for the website to run after its done in the same Command Prompt type: npm run serve

This will give you a localhost web address that the site should be running on. Go to it to view and interact with the webpage. 

![image](https://user-images.githubusercontent.com/99191287/185769713-895897ab-9306-4426-93bc-e53a17217c8c.png)
 
 # CONGRATS! YOU MADE IT!
 
 ![image](https://user-images.githubusercontent.com/99191287/185769749-b3a87768-fb7c-4cf4-a86f-27e16200c212.png)

## Know Bug
There is a known bug that occurs when data validating the year when editing a movie only. 
This can be fixed by just changing a number and changing it back. I am stumped on this atm, and would love to know what I missed.  
Thanks, hope you enjoy
-Mat



