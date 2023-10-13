# Aitaca Frontend Developer Test
## Context
We are looking for a passionate Frontend Developer with outstanding skills to join our team. This test will evaluate your experience and aptitude in frontend development, especially in relation to our needs and objectives.

## General Instructions
Fork this repository to your GitHub account. Complete the tasks described below. Once finished, create a Pull Request to this repository so that we can review your solution.

## Tasks: Responsive Interface
Develop a responsive webpage using HTML, CSS, and Angular. This page should contain at least one form with validation, a couple of pages or three where routing is used, and some visual components (such as cards, buttons, among others).

Add at least one unit test that tests some of the developed functionalities.

### BONUS

- Use of observables and some of their operators (map, filter, reduce…)
- Use of Material
- Ensure that your page is optimized for speed and scalability
- Implement at least one security measure (such as protection against XSS or CSRF attacks).
- (Optional): Access to the device’s camera and integration with some simple MediaPipe functionality (https://developers.google.com/mediapipe) on one of the pages

## GitHub Collaboration
During development, create at least three commits to show how you manage version control and organize your work. Make sure your code is well-commented and organized.

## Documentation
Update README.md to include instructions on how to run and test your webpage and any additional functionality you have implemented.

## Card Manager App

This app is a crud with the function of manage cards with a firstname, lastname, decription and a picture.
You can run this app you have to install angular cli and running the command ng serve in the root directory:
    ng serve

You can create a card going to the "+" symbol in the right top corner of the app, here you'll have to fill the form (fields firstname an lastname are required and has a minimum length of three). Once sent, you'll have to go to home page with the button in the left top corner of the page, here you will see every card you had created. Once there, you cand delete or edit this cards.