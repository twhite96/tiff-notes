# Simple Timer in React

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Egor Egorov]]
- Full Title: Simple Timer in React
- Category: #articles
- URL: https://medium.com/p/df85d0867553

## Highlights
- We want to use Date.now() to get the timestamp in milliseconds and only use the setInterval() for updating as fast as it lets us. For this we will need to remember the timestamp when we start the timer and compare it to the current timestamp to get the milliseconds that have passed. We will need to add another property to our state object, the start time. We will set the start time to the current timestamp when start button is clicked.
