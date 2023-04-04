# The Two Pillars of JavaScript

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Eric Elliott]]
- Full Title: The Two Pillars of JavaScript
- Category: #articles
- URL: https://medium.com/p/ee6f3281e7f3

## Highlights
- The copy mechanism is another form of prototypal inheritance. Sources of clone properties are a specific kind of prototype called exemplar prototypes, and cloning an exemplar prototype is known as concatenative inheritance.
- If constructor behavior is the frying pan, classical inheritance isn’t the fire; it’s the fire from Dante’s seventh circle of hell.
- JavaScript doesn’t need constructor functions because any function can return a new object. With dynamic object extension, object literals and `Object.create()`, we have everything we need — with none of the mess. And `this` behaves just like it does in any other function. Hurray!
- In JavaScript, factory functions are simply constructor functions minus the `new` requirement, global pollution danger and awkward limitations (including that annoying initial capitalized letter convention).
- Constructors that aren’t running in strict mode can be downright dangerous, too. If a caller forgets `new` and you’re not using strict mode or ES6 classes [sigh], anything you assign to `this` will pollute the global namespace. That’s ugly.
- If you return an arbitrary object from a constructor function, it will break your prototype links, and the `this` keyword will no longer be bound to the new object instance in the constructor. It’s also less flexible than a real factory function because you can’t use `this` at all in the factory; it just gets thrown away.
- Constructors violate the open/closed principle because they couple all callers to the details of how your object gets instantiated. Making an HTML5 game? Want to change from new object instances to use object pools so you can recycle objects and stop the garbage collector from trashing your frame rate? Too bad. You’ll either break all the callers, or you’ll end up with a hobbled factory function.
- taxonomy
- factory function
