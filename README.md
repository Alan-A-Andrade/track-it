# Track It

An application to help the user track their daily habits, where it's possible to sign-up and sign-in to create a personal routines <br/>

## Table of Contents

- [Overview](#overview)
  - [About](#about)
  - [Built with](#built-with)
- [How to run](#how-to-run)
- [Author](#author)

## Overview

Habit tracker web application. HTML5, CSS3 and ReactJS. <br />

Try it out now <a href="https://track-it-alan-andrade.vercel.app/" target="_blank"><strong>here</strong></a>.
###### obs: can be used in desktop and mobile, although it was designed for mobiles only.

### About

This app has the following features:
  - Enables the user to sign in their account
  - In case they don't have any, it's possible to create one in the sign up page
    - To sign up, the user needs to inform their Email, Password, Name and an valid URL image chosen by them.
  - After logging in, the ```TodayPage``` is shown, in which the user can:
    -  Check their daily habits, if they have any
    -  Click on the checkmark to mark it as done in that day
    -  Track their current streak and record of days that task/habit has been done
    -  And shows the user their daily progress in a circular progress bar on the botton center of the page
  - In the case the user has no habits to be tracked, they can go to the ```HabitsPage```, being able to:
    - Create their habits
    - Choose the days to do the habit
    - Save or Cancel the habits' creation
    - And delete the habit by clicking on the trashcan icon
  - In the ```HystoryPage``` the user can track their progress on a month calendar, where it's possible to track the days the habis have been done or not

### Built with

ReactJS, HTML and Styled Components.
  
## How to run

1. Clone this repository

2. Install dependencies
```bash
npm i
```

3. Run the app with
```bash
npm start
```

4. You can optionally build the project running
```bash
npm run build
```
5. Finally, access http://localhost:3000 on your favorite browser (unless it is Internet Explorer. In this case, review your life decisions)

## Author

- LinkedIn - [Alan de Andrade](https://www.linkedin.com/in/alan-de-andrade/)
