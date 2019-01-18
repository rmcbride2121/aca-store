
# Intro
Let's use a real backend server to store the important information of our store. We need to store the products and the cart on the server instead of on the client. We cannot use sessionStorage to store the cart because it won't allow the user to access their cart from another computer or browser. Our server is capable of handling all our basic http methods: GET, POST, PUT, DELETE.

https://acastore.herokuapp.com


## User
Now that we are saving the shopping cart on the server, we need to be able to identify who a cart belongs to. Let's have a user sign up with email and password before they can use the store.

## Sign Up
* When the web page is first opened, show a sign up screen.
* Create a text input for email and password
* Create a button for sign up
* When the sign up button is clicked, do a POST to /users. Save the returned object in localStorage
* Do not show the sign up screen again as long as the user object is in localStorage

## Show Products
* Use the the same code for listing out the array of products
* Intead of using the hard coded array, do a GET to /products

## Create Product
* Create a screen that is intended to be used by the employees of the company
