# Helpful Developer Resources

## Forward

Welcome to the Repay team, we are excited to have you on board for our summer internship program. We have outlined a few helpful resources (articles/videos) to help you quickly get up to speed. If you already feel confident in these areas we encourage you to spend some time looking through the sections to refresh and/or increase your knowledge.

---

## Contacts

If you have any questions before or after starting; feel free to reach out to anyone on our team. Below are people whom you may be working with directly on your first few days here at Repay.

| Team                 | Name               | Email                  |
| -------------------- | ------------------ | ---------------------- |
| Repay API (Channels) | Westin Christensen | wchristensen@repay.com |
| Gateway              | Justin Moran       | jmoran@repay.com       |
| UI                   | James Nimlos       | jnimlos@repay.com      |
| BI                   | Michael Guidone    | mguidone@repay.com     |
| Mobile               | Alex Hough         | ahough@repay.com       |

---

## Contents

1. [Forward](#forward)
1. [Contacts](#contacts)
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

1. [Markdown Resources](#markdown-resources)

   - [Useful Markdown Readings](#useful-markdown-readings)

1. [Git Resources](#git-resources)

   - [Useful Git Readings](#useful-git-readings)
   - [Useful Git Videos](#useful-git-videos)

1. [Agile Resources](#agile-resources)

   - [Kanban vs Scrum](#kanban-vs-scrum)

1. [Clean Code and Solid Principles](#clean-code-and-solid-principles)

   - [Clean Code](#clean-code)
   - [Solid Principles](#solid-principles)

1. [Postman](#postman)

---

## Javascript Resources

On the Channels API team we use a number of libraries to speed up our development process; thus, we have included a list of popular libraries that we use along with links to their documentation. You may already be familiar with these libraries as they are some of the most widely used. If not, feel free to check them out.

_One cool tip that you may not already know is, many javascript library websites allow you to use the library right in the web console._

### Useful Javascript Libraries

- [Lodash](https://lodash.com/docs/4.17.11)
- [Moment](https://momentjs.com/)

### Useful Javascript Readings

If you aren't already aware, javascript has some killer (in our opinion) built in ways to iterate over lists and other data types using functions such as `.map(), .filter(), .forEach(), .reduce()` and `.find()`. We found a good article that talks about these functions, how to use them and when they are best applied.

- [Functions Reading](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)

Javascript also has a concept that some may not be familiar with, that is the concept of **truthy** and **falsy** values (and yes those words are correct, albeit slightly childish). We were able to find a fairly short read that encompasses what is needed to understand this concept.

- [Truthy And Falsy Reading](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/)

Javascript also has the concept of arrow functions, arrow functions can be odd at first but can actually increase readability of code once you become familiar with it. This is something that we use throughout our code base and is an important concept to grasp. So please check it out and know we will be happy to clarify any questions you may have.

- [Arrow Functions Reading](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

### Useful Javascript Videos

If you prefer videos to reading, these videos provide a high-level overview of the truthy/falsy and arrow function concepts.

- [Truthy And Falsy Video](https://www.youtube.com/watch?v=O7rZJdtG10g)
- [Arrow Functions Video](https://www.youtube.com/watch?v=dB1KA-yz65s)

---

## React Resources

### Useful React Documentation

With all of our teams using React on the front end of our applications we use a variety of React tooling and libraries.

- React

  Where better to learn about React than straight from the source? Well, actually a lot of other places; but the React docs are beautifully maintained with many examples and can be a great tool when working in React.

  - [Official React Docs](https://reactjs.org/docs/getting-started.html)

  We actually came across a good post that covers the basics of React. You are welcome to follow along but by reading through the information you should be able to get a good idea about React and how it works.

  - [React Intro Walk Through](https://medium.freecodecamp.org/everything-you-need-to-know-about-react-eaedf53238c4)

- Redux

  We don't expect you to be an expert in Redux in a short period of time but to get a basic understanding we found a short video to cover the fundamentals.

  - [Redux Fundamentals](https://www.youtube.com/watch?v=7Erbf5NXQQw)

  This is the official documentation for Redux if you are interested; however, most of the information is very complex.

  - [Official Redux Docs](https://redux.js.org/api/api-reference)

- Redux Form

  Redux Form is a tool that we often use for creating our forms. The docs here are similar to that of Redux, this reference is fairly dry and abstract without having a solid understanding. We would encourage you to take a look but don't feel like you need to be an expert by any means.

  - [Official Redux Form Docs](https://redux-form.com/8.2.0/docs/api/)

### Useful React UI

While we are in the process of deprecating the usage of Semantic UI in favor of our own library (Cactus). We are still currently using Semantic UI so it is good to have some familiarity with it. We have added links for the docs to each library below.

- [Semantic UI React](https://react.semantic-ui.com/)
- [Repay Cactus Framework](https://repaygithub.github.io/cactus/)

---

## Python Resources

On the Channels API and BI teams our backend code is written in python. If you are going to be part of either of these teams this section is important to review and be familiar with.

### Useful Python Readings

There are multiple versions of Python out there, here at Repay we work in Python 3. To understand some of the differences between the two check out this article.

- [Python 2 vs Python 3](https://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html)

With Python 3.6 came f-strings (no Python doesn't just despise strings), they are an awesome way of injecting variables into strings.

- [f-strings](https://realpython.com/python-f-strings/)

Some other useful built-in functions available in Python are map, filter and lambda functions.

- [Map, Filter, Lambda](https://medium.com/@happymishra66/lambda-map-and-filter-in-python-4935f248593)

### Useful Python Videos

List comprehensions are a very powerful tool in Python, if you aren't familiar with them we recommend that you watch this tutorial because they are used often in our code base.

- [List Comprehensions Video](https://www.youtube.com/watch?v=1HlyKKiGg-4)

---

## Markdown Resources

At Repay we utilize Github for all of our code repositories. The Channels API team often adds specific testing instructions to our pull requests (commonly referred to as PRs), this is in the format of Markdown. If you are unfamiliar with markdown, you will find that it is very simple to use; these reading resources should help you get up to speed.

### Useful Markdown Readings

- [Best Practices For Formatting On Github](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
- [General Markdown Formatting](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---

## Git Resources

One of the most widely used tools across developers is Git. Git is a version control system that empowers developers to work collaboratively without interrupting each others flows. And maybe more importantly enables developers to look back into the history of code, isolate bugs and track when a feature may have been added or removed. Git is powerful, but also difficult. A popular albeit simple mantra around Git amongst developers is _"Git is hard"_ so don't feel like you will need to know it backwards and forwards. We are here to help you learn and fix mistakes as they will inevitably happen along the way. The typical path for someone learning Git is as follows.

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

- [What Is Git](https://medium.freecodecamp.org/what-is-git-and-how-to-use-it-c341b049ae61)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

### Useful Git Videos

- [Git Tutorial](https://www.youtube.com/watch?v=HVsySz-h9r4)

### Presentations

- [Hitchhicker's Guide to Git](./presentations/hitchhickers-guide-to-git/)

---

## Agile Resources

Here at Repay, all of our teams use some form of Agile strategy in prioritizing and finishing tasks or projects. The two specific methods that we use are Kanban and Scrum. If you are not familiar with these methodologies it will be helpful for you to understand what they are and how they can impact your day to day work. We will be going into more detail about these processes on a team by team basis but many companies also implement these strategies and it is helpful to know about them at a high level.

### Kanban vs Scrum

- [An Agile Comparison](https://www.atlassian.com/agile/kanban/kanban-vs-scrum)

---

## Clean Code and Solid Principles

Something that many students don't realize is that code is read more often than it is written. Because of this, it is important that our code is maintainable and easy to read/refactor. In order to encourage this pattern Robert C. Martin (informally referred to as "Uncle Bob"), created a guide of sorts, to help guide decisions in the software development process. The links below contain succinct summaries for both Clean Code and the SOLID principles respectively.

### Clean Code

- [What Is Clean Code](https://medium.com/mindorks/how-to-write-clean-code-lessons-learnt-from-the-clean-code-robert-c-martin-9ffc7aef870c)

### Solid Principles

- [What Are The Solid Principles](https://medium.com/@dhkelmendi/solid-principles-made-easy-67b1246bcdf)

## Postman

Postman is a powerful tool often used to assist in the development, testing and documenting of API's. Our team uses this in all three ways; understanding the basics on how to use this tool will allow you to get up to speed quickly. For a simple tutorial/overview on using Postman checkout the link below.

[Postman Tutorial](https://www.guru99.com/postman-tutorial.html)
