# Audiophile

A fictional e-commerce site for headphones.

## Table of contents

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Author](#author)

## Overview

### The challenge

Implement a multi page e-commerce site for headphones that is responsive. Users should be able to add/remove items from their cart and checkout their cart.

### Screenshot

![home](/screenshots/home.png)
![product](/screenshots/product.png)
![cart](/screenshots/cart.png)
![checkout](/screenshots/checkout.png)

### Links

- Live Site URL: [https://audiophile-ruby.vercel.app/](https://audiophile-ruby.vercel.app/)

## My process

### Built with

- React

- TypeScript
- React Router
- Styled Components
- Cypress
- Jest Testing Library
- Framer Motion

### What I learned

### Framer Motion

I learned how to use Framer Motion to animate page transitions in the application and a modal. Framer motion makes it very easy to animate pages based on when they mount and unmount. Essentially, the initial state for the page begins offscreen to the left and transitions in the correct position. For the modal, I just animated it coming in from afar giving the illusion that it is coming at you.

#### Context

I utilized context for this project in order to prevent prop drilling. I had global state, the shopping cart, which some components needed to add/remove items. Instead of having to pass the state and the updater function through intermediary components, the components that needed the state or update function could just use it.

#### Testing

For testing, I used Cypress and Jest Testing Library. I used Jest Testing Library for unit testing, in this case it was the incrementing/decrementing items before you add them to the cart. I just tested that the user could not decrement to a number smaller to 1 and clicking the increment button increased the item amount by 1. For Cypress, I did more integration test on the checkout form and cart functionality. For the cart, I tried to simulate a process that a user would take and assert that the app reflected the correct state. For example, if a user adds an item to the cart, and then opens the cart, it should display the item I just added.

## Author

- Website - [Add your name here](https://www.your-site.com)
