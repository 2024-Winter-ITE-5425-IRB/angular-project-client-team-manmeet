Manmeet Kaur - N01536163

This is the Angular client part for the room boooking system. The front-end page has a header component which displays the title and links for home and faq page.

Then, I have created a listing page to show the room listings on the screen where I am displaying the room image, hotel name, no of rooms, room description along with the price and book now button. It's just for the display purpose so that's why book now button is not routing anywhere. It will redirect to home page only.

All the data is coming from the backend. I have the "Room" api in backend.

Once, user clicks on Rating, it will redirect them to "Reviews page", where, they can see all the reveiws for that particular room. I am showing the average rating along with the comment. Below the UserReviews, there's a form to leave a review.

The user can give rating out of 5 stars for fields cleanliness, location, accuracy, value, checkin, communication. Once, user fills the ratings and leave a comment, the response is stored and posted to the review api along with the average of all the fields.

Then there's a "FAQ page" which shows the Frequently asked questions. All the questions and answers are getting fetched from backend using the FAQ API/route created.
