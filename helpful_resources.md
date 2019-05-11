# Helpful Developer Resources

## Forward

Welcome to the Repay team, we are excited to have you on board for our summer internship program. We have outlined a few helpful resources (readings/videos) that may help you get up to speed quickly. If you already feel confident in these areas feel free to skim through the section at your own pace. We highly encourage you to spend some time looking through these to refresh and/or increase your knowledge in these areas.

---

## Contents

1. [Forward](#forward)
1. [Javascript Resources](#javascript-resources)

   - [Useful Javascript Libraries](#useful-javascript-libraries)
   - [Useful Javascript Readings](#useful-javascript-reading)
   - [Useful Javascript Videos](#useful-javascript-videos)

1. [React Resources](#react-resources)

   - [Useful React Documentation](#useful-react-documentation)
   - [Useful React UI](#useful-react-ui)

1. [Python Resources](#python-resources)

   - [Useful Python Libraries](#useful-python-libraries)
   - [Useful Python Readings](#useful-python-readings)
   - [Useful Python Videos](#useful-python-videos)

1. [Markdown Resources](#markdown-resources)

   - [Useful Markdown Readings](#useful-markdown-readings)

1. [Git Resources](#git-resources)
   - [Useful Git Readings](#useful-git-readings)
   - [Useful Git Videos](#useful-git-videos)

---

## Javascript Resources

On the Channels API team we use a number of libraries to speed up our development process; thus, we have included a list of a few popular libraries that we use along with links to their documentation. You may already be familiar with these libraries as they are some of the most widely used. If not, feel free to check them out, one cool tip that you may not already know is that many javascript library websites allow you to use the library right in the web console.

### Useful Javascript Libraries

- [Lodash](https://lodash.com/docs/4.17.11)
- [Moment](https://momentjs.com/)

### Useful Javascript Readings

If you aren't already aware, javascript has some killer (in my opinion) built in ways to iterate over lists and more using functions such as `.map(), .filter(), .forEach(), .reduce()` and `.find()`. I found a good article that talks about these functions how to use them and when they are best applied.

- [Functions Reading](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)

Javascript also has a concept that some may not be familiar with, that is the concept of **truthy** and **falsy** values (and yes those words are correct, albeit slightly childish). I was able to find a fairly short read that encompasses what is needed to understand this concept.

- [Truthy and Falsy Reading](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/)

Javascript also has the concept of arrow functions, arrow functions can be odd at first but can actually increase readability of code once you become familiar with it. This is something that we use throughout our code base and is an important concept to grasp. So please check it out if you aren't already familiar and we will be happy to help clarify anything questions you may have.

- [Arrow Functions Reading](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

### Useful Javascript Videos

If you prefer videos to reading this one give a decent high level overview of truthy and falsy.

- [Truthy and Falsy Video](https://www.youtube.com/watch?v=O7rZJdtG10g)
- [Arrow Functions Video](https://www.youtube.com/watch?v=dB1KA-yz65s)

---

## React Resources

### Useful React Documentation

With all of our teams using React on the front end of our applications we use a variety of React tooling and libraries.

- React

  Where better to learn about React than straight from the source? Well, actually a lot of other places; but the React docs are beautifully maintained with many examples and can be a great tool when working in React.

  - [Official React Docs](https://reactjs.org/docs/getting-started.html)

  I actually came across a good post that covers the basics of React and you are welcome to follow along but just reading through you should be able to get a good idea about React and how it works.

  - [React Intro Walk Through](https://medium.freecodecamp.org/everything-you-need-to-know-about-react-eaedf53238c4)

- Redux

  We don't expect you to be an expert in all things redux after only a few videos but to get a basic understanding we found a decent short video to cover the fundamentals.

  - [Redux Fundamentals](https://www.youtube.com/watch?v=7Erbf5NXQQw)

  This is the official documentation for Redux if you are interested, most of this may be over your head but if you want to take a look feel free.

  - [Official Redux Docs](https://redux.js.org/api/api-reference)

- Redux Form

  One tool that we often use for creating our forms currently is Redux form. The docs here are similar to that of Redux, most of it is fairly dry or abstract if you don't have an initial understanding. I would encourage you to take a look but don't feel like you need to be an expert by any means.

  - [Official Redux Form Docs](https://redux-form.com/8.2.0/docs/api/)

### Useful React UI

While we are in the process of deprecating the usage of Semantic UI in favor of our own library (Cactus), we still have usage so having some familiarity may help I have added links to the documentation to each library below.

- [Semantic UI React](https://react.semantic-ui.com/)
- [Repay Cactus Framework](https://repaygithub.github.io/cactus/)

---

## Python Resources

On the Channels API and BI team our backend code is written in python. If you are going to be part of either of these teams this section will pertain to you.

### Useful Python Readings

There are multiple versions of Python out there, here at Repay we work in Python 3 to see some of the differences between the two check out this article.

- [Python 2 vs Python 3](https://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html)

With Python 3.6 came f-strings, they are an awesome way of injecting variables into strings.

- [f-strings](https://realpython.com/python-f-strings/)

Some other tools available in Python are map, filter and lambda functions

- [Map, Filter, Lambda](https://medium.com/@happymishra66/lambda-map-and-filter-in-python-4935f248593)

### Useful Python Videos

List comprehensions are a very powerful tool in python, if you aren't familiar with them we recommend that you watch this tutorial because they are used often in our code base.

- [List Comprehensions Video](https://www.youtube.com/watch?v=1HlyKKiGg-4)

---

## Markdown Resources

At Repay we utilize github for all of our code repositories. The Channels API team often adds specific testing instructions to our pull requests (commonly referred to as PRs), this is in the format of Markdown. If you are unfamiliar with markdown, you will find that it is very simple to use; these reading resources should help you get up to speed.

### Useful Markdown Readings

- [Best practices for formatting on Github](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
- [General Markdown formatting](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---

## Git Resources

One of the most widely used tools in my experience across developers is Git. Git is a version control system that empowers developers to work collaboratively without interrupting each others flows. And maybe more importantly enables developers to look back into the history of code to isolate bugs and track when a feature may have been added or removed. Git is powerful, but also difficult. A popular albeit simple mantra around Git amongst developers is _"Git is hard"_ so don't feel like you will need to know it backwards and forwards. We are here to help you learn and fix mistakes as they will inevitably happen along the way. The typical path for someone learning Git is as follows.

```text
1. learn something new about git
2. feel like a git ninja
3. realize you need to do something you've never done
4. research a solution
5. mess something up locally while implementing that solution
6. fix what you broke
8. success
9. back to step 2
```

It's a never ending learning process and we are happy to help guide you to the answers / solutions along the way.

### Useful Git Readings

- [What is Git](https://medium.freecodecamp.org/what-is-git-and-how-to-use-it-c341b049ae61)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

### Useful Git Videos

- [Git Tutorial](https://www.youtube.com/watch?v=HVsySz-h9r4)
