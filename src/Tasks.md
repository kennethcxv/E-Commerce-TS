Products List with Search Functionality (search by name, by category) https://fakestoreapi.com/products
Contact Page
Cart Page (with a link in navbar) + font awesome icon for cart (with quantity displayed)
Checkout page (after cart)

When implementing cart slice also implement cart count and that will be the number on the cart image

In the contact page you will have a form where it will have name, email, subject, and description 

From cart you will go to checkout then on checkout you will have an option of placing orders, on placting and order you need to store all the details into redux. So you need a new slice for orders. ANd make it mobile friendly

Features needed to add
// Make it so that if the user places 2 of the same item then it should just appear with a quantity next to it

// Make it so that you also have the price and if the quantity is 2 the price is doubled etc

Show another navItem if the cart Item length is over 10

Make a delete button for the cart items



Make it so the delete button also changes the cart count
          // on Delete button makes deletes the quantity for cart cont
          // We grab the cart item id and then the quantity set to that id then subtract that to the cart count on delete



Make the items in cart a grid

Add a button to add to cart fomr the details page and style it

We will have an order button and on clicking the button the order will be placed and this means that the cart details
and the user details will be stored as an order 

And clear the cart