# What I have learnt so far in forms (part 2b)
a. Form:
- Using the onSubmit handler which takes a function with an event "e.preventDefault()" that prevents the default action of submitting a form.

b. Controlled Component: 
- This allows us to access the data contained in the form's input element
- A new state is created for storing the user-submitted input 
- Using the onChange event handler which takes a function that sets 'e.target.value' to the state updating function which allows user to edit input element. 

# Getting data from server (part 2c)
a. Axios and Promises
- Axios is required in the execution of the program which is why it is installed as a runtime dependency.
- It's installation is to be done in the root directory of the working folder using the command; npm install axios
- It's 'get' method returns a promise (which is either pending, fulfilled or rejected) 
- To access the fulfilled result(.i.e response), an event handler must be registered to the promise and this is achieved by using the '.then method()'

b.json server
- The json server is also installed in the root directory of the working folder with the command; npm install json-server --save-dev
- Its runs on another port (port 3001) with the command 'npm run server' which is set in the package.json file.
- A db.json file contains the object to be fetched as response from the server and it doesn't accept comments

c. useEffect Hook
- helps perform side effects on function components such as data fetching, setting up a subscription, and manually changing the DOM in React components.

d. Extracting communication with the backend into a separate module
- this is done by creating a services folder, with a filename.js file in it in the src folder
- in the filename.js, declare variable baseUrl which equals the url of the json server.
- filename.js contains the getAll, create, update and remove functions
- the filenames.js is then imported where it is to be used.

c. Adding styles to React App
- several ways of styling (inline, index.css or specified in a component and set as style property)
- setting a setTimeout on message to be displayed