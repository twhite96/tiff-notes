# Understanding State and Props in React

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

## Metadata
- Author: [[Ruairidh Wynne-McHardy]]
- Full Title: Understanding State and Props in React
- Category: #articles
- URL: https://medium.com/p/94bc09232b9c

## Highlights
- State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.
- Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed.
- Props and State do similar things but are used in different ways. The majority of your components will probably be stateless.
- So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast.
- Props shouldn’t change, so state steps up.
- So we’re happy. Components receive data from the parent. All sorted, right?
- Well, this is why we have state.
- Well, not quite. What happens when a component receives data from someone other than the parent? What if the user inputs data directly to the component?
- This is why people refer to React as having uni-directional data flow. This takes a bit of getting your head around and I’ll probably blog on this later, but for now just remember: data flows from parent to child. Props are immutable (fancy word for it not changing)
- Normally components don’t have state and so are referred to as stateless.
- If you’re at all familiar with React then you should know that props flow downwards from the parent component.
