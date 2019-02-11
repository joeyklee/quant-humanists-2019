# WEEK `03`: FEB 11 2019
## Reflect: Seeing Our Data Selves


This week in Quant Humanists we will be thinking about the role of visualization and representation as a way to learn about yourself. In a [2013 Pew Research Center Internet & American Life Project Survey](http://www.pewinternet.org/files/old-media/Files/Reports/2013/PIP_TrackingforHealth%2520with%2520appendix.pdf), it was found that 69 % of Americans keep track of health data for themselves or another person, of this 47% do this tracking “in their heads,” 33% on pen and paper, and 20% via a digital surrogate or technology. We look at various methods for getting to know yourself through your data such as through hand drawn visualizations, digital/interactive charts and maps, and alternative expressions of data.

We dedicate a majority of this class to work through building our own custom data collection and visualization web application. We will work through and discuss together the conceptual and technical details of implementing this application. 


- 🔗 [Workshop Materials: My data feelings -- Full stack app with Feathersjs + P5js](https://joeyklee.github.io/my-data-feelings/#/)
- 🔗 [Code Repo](https://github.com/joeyklee/my-data-feelings)

![Sketch of a data collection and visualization web application](https://raw.githubusercontent.com/joeyklee/feathers-p5-example/master/assets/images/sketch-browse.png)


### MATERIALS
- SLIDES: https://docs.google.com/presentation/d/1WIVHnsbNIn7D-hR3yRrAPdbF1gi4oA4D97WQmt42ntI/edit?usp=sharing

### AGENDA

- Attendance
- Assignment reviews
  - paired feedback
  - selected Shareouts & Assignment Reviews
    + Student 1
    + Student 2
    + Student 3
    + Student 4
- Discussion
  - Project Highlight
  - Practical Considerations for Self-tracking Analysis
  - Visualization Methodologies
  - Data Access - What's an API? 
- Tutorial:
  - Your first full-stack ✨ web application using Feathers.js and P5.js 
- Assignment #3



## READINGS
- Neff, Gina., Nafus, Dawn., [Self-Tracking, **Chapter 3: Making Sense of Data**](https://ieeexplore-ieee-org.proxy.library.nyu.edu/book/7580017?bknumber=7580017), MIT Essential Knowledge Series. Print Copies available through NYU Library or PDFs though the IEEE Explore Library. 
- [The Psychology of Shapes - Knock Design into Shape. Psychology of Shapes](https://tubikstudio.com/knock-design-into-shape-psychology-of-shapes/), [The Meaning of Shapes and How to Use Them Creatively in Your Designs](https://visme.co/blog/geometric-meanings/)

## Supplemental Resources
- NY Times, [Your Apps Know Where You Were Last Night, and They’re Not Keeping It Secret](https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html)
- Avirgan, Jody., [Dear Data + FiveThirtyEight want you to visualize your podcast habits](http://fivethirtyeight.com/features/dear-data-and-fivethirtyeight-want-you-to-visualize-your-podcast-habits/) 
- Anonymous., originally in WIRED, [The nerdy charm of artisanal, hand drawn infographics](http://onlinefitnesshelp.com/the-nerdy-charm-of-artisanal-hand-drawn-infographics/)
- [Fry, Ben., Visualizing Data](https://www.safaribooksonline.com/library/view/visualizing-data/9780596514556/ch01.html)
- Sniderman, Zachary., [Manhattan of the Mind](http://www.nytimes.com/interactive/2013/02/17/magazine/mapping-manhattan.html#2)
- Farris, Jessica., [The hand-drawn infographics of W.E.B. Dubois](http://www.printmag.com/article/hand-drawn-infographics-w-e-b-dubois/)
- Evans, Kristen., [Bullet Journaling as an analog journaling alternative](http://theperfectdiy.com/12-layout-ideas-youll-want-to-steal-for-your-bullet-journal/), from [Pinterest, strategies for journaling and data keeping](https://www.pinterest.com/pin/230950287122242133/)
- Newton, Mark., [GutenTag Stamp for organizing your day radially](https://www.kickstarter.com/projects/gutentag/gutentag-see-the-day-seize-the-day-day-planner?ref=category)
- Thorp, Jer., Blog, [On Data and Performance, Jer Thorp](http://blog.blprnt.com/blog/blprnt/on-data-and-performance)
- Frick, Laurie., [Frickbits, turn your data into art](http://www.frickbits.com/)
- Frick, Laurie., [Visual Language for Self Tracking](https://vimeo.com/31875319)
- [Lupi, Georgia., Data Humanism](https://medium.com/@giorgialupi/data-humanism-the-revolution-will-be-visualized-31486a30dbfb)
- [Lupi, Georgia., Bruises](https://medium.com/@giorgialupi/bruises-the-data-we-dont-see-1fdec00d0036)

## ADDITIONAL RESOURCES

- Vigen, Tyler., [Spurious Correlations](http://www.tylervigen.com/spurious-correlations)
- Meyer, Sebastian and Glinka, Katrin., Talk, [Psychogeography in the age of the quantified self](https://vimeo.com/195647160)
- [Phototrails](http://phototrails.info/instagram-cities/) - global instagram visual city signatures
- Von Bismark, Julius., [Topshot helmet](http://juliusvonbismarck.com/bank/index.php?/projects/topshot-helmet/) 
- Hildebrandt, Lennart, and Otten, Heike., [Shifted Maps, FH Potsdam | UCLab](http://www.heikeotten.de/portfolio/shiftedmaps/)
- Huang, Shan., [Iconic History](https://chrome.google.com/webstore/detail/iconic-history/hfacpfhgpmaifaanbmgbbjkfgelookom?hl=en) - visualize your [browser history in favicons](https://www.fastcodesign.com/3027816/this-plugin-visualizes-your-entire-browser-history#4)
- [OpenNews.org, Drawing Conclusions from Data](https://source.opennews.org/articles/statistically-sound-data-journalism/)
- [Rost, Lisa., 6 years of google searches](https://lisacharlotterost.github.io/2015/06/20/Searching-through-the-years/)


## ASSIGNMENT 3 (DUE: WEEK `04`, 25 FEB 2019)

You will have 2 weeks to do this assignment! 

This week you will follow the workshop link below to create your own personal data collection and visualization platform. 

- 🔗 [Workshop Materials: My data feelings -- Full stack app with Feathersjs + P5js](https://joeyklee.github.io/my-data-feelings/#/)
- 🔗 [Code Repo](https://github.com/joeyklee/my-data-feelings)

### Assignment details:
You must do at least one of the following:

- **change the data model or create a new collection**: Change the data model by changing the properties in the data model `src/models/feelings.model.js`. Alternatively you may create an entirely new database by doing `feathers generate service` and developing another database in which to create your new data collection.
- **create your own visual encodings**: with the current data structure or with your newly added database collection and data model, come up with intriguing and meaningful ways to visualize that data. You may use the existing structure of the "small multiples" which show each entry or change up that structure entirely. The key is that you make a GET request to your database and pull data dynamically. 
  
NOTE: You do not need to deploy this application to the web, but you must document your work in a blog post. If you do want to deploy this application to the web - you should totally do it! See section: https://joeyklee.github.io/my-data-feelings/#/deploy

- **Submission**: Submit your Github Gist/blog post link as a [`comment in its respective github issue` in the quant-humanists-2019 repository](https://github.com/joeyklee/quant-humanists-2019/issues). See NOTE below.

**NOTE**: Please structure your blog post submissions according to the assignment template here: [Quant Humanist - assignment template](https://github.com/joeyklee/quant-humanists-2019/blob/master/_templates/assignment-submission-template.md)  
