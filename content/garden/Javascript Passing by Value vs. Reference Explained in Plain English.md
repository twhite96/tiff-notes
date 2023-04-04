# Javascript Passing by Value vs. Reference Explained in Plain English

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Chris D’Ascoli]]
- Full Title: Javascript Passing by Value vs. Reference Explained in Plain English
- Category: #articles
- URL: https://medium.com/p/8d00fd06a47c

## Highlights
- When we create variable (b) and assign it the value of (a) the equals operator notices we’re dealing with a primitive value (5 in this case) and creates a NEW location in memory, points (b) to the NEW address, and fills it with a copy of (a)’s value (5). The console.log() of each variable prints what we would expect (5) at this point. However, when we change the value of (a) to 1 and console.log both variables (a) prints 1 as expected, but (b) is still equal to 5. Why? Because as discussed earlier when we assigned (b) to equal (a) a new location in memory was created, the equals operator did not simply have (b) point to the same spot in memory that (a) does, (b) was given its own location filled with the value of (a) at that time (5). So when (a) was changed (b) does not follow suit because it’s pointing to it’s OWN spot in memory, it has no idea that (a)’s value has changed since that is an entirely separate address in memory.
