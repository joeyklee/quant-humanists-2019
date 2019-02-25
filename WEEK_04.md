# WEEK `04`: FEB 25 2019
## Reflect: Understanding Our Signals

> 

This week we're going to take some more time to think about APIs and how they provide a foundation for thinking about our tracking and data collection. We introduce some more foundational knowlege about APIs and build from some starter code to work with some biometric data (e.g. our photos) along with contextual data that may provide more insight into our data selves.

### MATERIALS
- SLIDES: https://docs.google.com/presentation/d/1RC8OOgNe29_BzbjAMmaXgSKNwWqUvE5tsmiycWWCw_o/edit?usp=sharing

### AGENDA

- Attendance
- Assignment reviews (1 hour)
  - Guest reviewers: A. Anzollitto (designer/artist) and E. Wickett (artist/therapist) — to do reviews/critique of your projects.
- Break
- Project Highlight - interactive: Daniel Goddemeyer, Data Futures Interactive Discussion -- see: https://www.youtube.com/watch?v=MJeXyPFYVEY
- API Review and Simple Express API Demo / workshop (1 hr):
  - https://github.com/joeyklee/simple-express-api
- Assignment 4 Overview: https://github.com/joeyklee/data-selfie-app



## READINGS
- Neff, Gina., Nafus, Dawn., [Self-Tracking, **Chapter 4: Self Tracking and the Technology Industry**](https://ieeexplore-ieee-org.proxy.library.nyu.edu/book/7580017?bknumber=7580017), MIT Essential Knowledge Series. Print Copies available through NYU Library or PDFs though the IEEE Explore Library. 



## ASSIGNMENT 4 (DUE: WEEK `05`, 04 MAR 2019): Drawing Connections

For this week's assignment, we are going to continue our practice of working with client and server side interactions as a way to collect and visualize data about ourselves. 

Your assignment:

Using this starter code or building your application from scratch, you will create an application that makes multiple API calls such that each time you submit data to your application your service allows you to:
- Submit your location and an image via an api to a server you've built.
- Using your skills, you should consider submitting or gathering other data to your database that may provide context or specifically targets a variable of interest. Examples include:
  - weather
  - form inputs, numerical, truthy/falsy, qualitative/descriptive.
  - other derived or original inputs?
- As you're submitting these data, you can start to think of ways you might start to draw relations between your contextual data (e.g. location, weather), and the other data you're deliberatley tracking.


Your task is to submit data to your local data store each day. Preferably more often, but at least once a day. You should consider to add at least 1 additional data submission to your POST requests (e.g. from a form input or another method perhaps?).

You may also consider making some kind of other visualizaiton or perhaps more analytical exploration of your collected data. We will discuss this more next week.

Challenge: use the weather-js npm module to make a get request to msn weather each time you submit your image and location from the client. Append the weather data to your incoming submission and show that data on your "log" page.


