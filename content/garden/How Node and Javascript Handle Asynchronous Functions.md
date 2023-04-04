# How Node and Javascript Handle Asynchronous Functions

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[Jason Arnold]]
- Full Title: How Node and Javascript Handle Asynchronous Functions
- Category: #articles
- URL: https://medium.com/p/7feb9fc8a610

## Highlights
- The execution order of asynchronous actions along side synchronous actions can seem like a bit of a mystery when you first start using Javascript. But the built in workflow and mechanisms of the call stack, event loop, and callback queue are there to handle these requests at appropriate times.
- This is why callback functions show up after all of the functions in the main part of the program. Because they have to go through the callback queue and only get put into the call stack by the event loop once the call stack is empty.
- This is what causes output from a callback function to appear after all of the other non-callback functions. The non-callback functions are like VIPs that don’t have to wait in line to get executed. Meanwhile, those callback functions are being held in a separate queue until it is their turn.
- As you can see, we still get the ‘first’ and ‘last’ logged to the screen before the data from the Google API is returned. This is because when data is returned from the Axios call, it is in the form of a Promise and that Promise can have callback functions applied to it.
- You might think that the callback gets executed out of order due to the delay in setTimeout(). That’ what I thought at first, but take a look at this example:
- Here, the console of ‘second’ happened after ‘last’. Why? Because that console.log() statement is in a callback function which gets executed out of order. And since Javascript is non-blocking it continues on executing more functions. In this case, the ‘last’ console.log() gets executed and then finally the callback function is fired and ‘second’ is seen on the screen.
- In order to mimic something like an asynchronous call we can use the ‘setTimeout’ method. This takes two arguments; the first is a function which will be a callback function, and the second is the amount of time to delay calling that function in milliseconds.
- This necessity happens most often with programs that make requests over the network to retrieve data.
- A blocking function can be bad since everything in the program stops and waits for that function to finish before it can continue. They can also be necessary since sometimes you have to wait for one part of a program to finish before continuing on to the next.
- Callback functions are part of what is referred to as ‘asynchronous’ operations in Javascript. Asynchronous operations are those that are done in a different order than how they are listed in the program. Javascript has the ability to handle functions this way so that none of them, if written correctly, become a ‘blocking’ function.
- When a function is called, it is added to the top of the stack and run. If that function calls another function, it is then added to the top of the stack and then it is run. Only the function at the top of the stack is the one that can be run.
- The call stack is a mechanism in Javascript used to keep track of where it is in a program.
- It knows which functions are currently being run and which to call next.
- callback queue
- This is a kind of holding area where callback functions go once they are called.
- The catch with the call stack is that you can only add things to the top of the stack. It’s a last-in-first-out (LIFO) idea.
- The callback queue works together with the event loop to execute callback functions at the right time. The event loop checks the call stack to see if it is empty. If it is then the first callback function in the callback queue gets executed, then the second etc. If the call stack is not empty, then those callback functions wait.
