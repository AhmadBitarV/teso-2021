<br>

# A Preview:

<img src="./src/assets/todo_app.png"/>
<br>

# For quick access you can view the project on

https://ahmadbitarv.github.io/teso-2021/

 <br>

# Technologies used

This project was built with create-react-app (recommended browser: Chrome)

 <ul>
  <li><strong>TypeScript</strong></li>
  <li><strong>React.js - JSX</strong></li>
  <li><strong>SCSS (UI Desktop first)</strong></li>
 </ul>

<br>

## About the Project

Hi there,

Hope you doing great and thanks for checking out my work,

As I completed only around 60% of the required tasks during the test (due to time/speed issues and not lack of knowledge), I thought I'd come back to it later after work and finish it because I honestly hate unfinished work and so you could see what it would look like if I had a little bit more time on the clock.

<ul>
  <li>So If you would like to view the whole project up until this point, feel free to check out the last commit <i>"deploying v1.2"</i><strong> (around 2.5h - 3h spent on total </strong>). </li>
  <li>If you would like to see the work done during the exam time <strong>1.5 hour</strong>, please use the commit <i>"deploying"</i></li>
 </ul>
 <br>

# Patch v1.1 notes

<ul>
  <li>Add the delete functionality. </li>
  <li>Add a status to the tasks </li>
  <li>Updated CSS to a much better design (My own design by the way)</li>
  <li>The UI is now mobile friendly</li>
  <li>Fixed the error bug of error message always appearing on the UI</li>
  <li>Got rid of all kinda spagetti code</li>
  <li>The tasks now are stored on the user's browser</li>
 </ul>
 <br>

# Patch v1.2 notes

<ul>
  <li>Created a toggle functionality to update the status of each task</li>
  <li>Added an animation for the task component</li>
  <li>Gave the error message a fixed height</li>
  <li>Focusing the first input upon submitting empty fields</li>
 </ul>
 <br>

# Test Cases (Manual Testing):

| Test            | Adding a todo functionality                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| Test Case ID    | TC01                                                                                       |
| Executor        | Ahmad Bitar                                                                                |
| Description     | Verify the task been added successfully upon adding title and content and hitting a button |
| Preconditions   | user writes a title and body and hits the red button                                       |
| Execution Steps | add a dummy title and body and hit return                                                  |
| Expected Result | a new component (task) added to the page with the info provided                            |
| Actual Result   | Same as expected                                                                           |
| Status          | Passed                                                                                     |

 <br>

| Test            | Storing todos locally on the browser           |
| --------------- | ---------------------------------------------- |
| Test Case ID    | TC02                                           |
| Executor        | Ahmad Bitar                                    |
| Description     | Verify the tasks are saved on the localStorage |
| Preconditions   | User writes several todos and reloads the page |
| Execution Steps | Add a few todos and reload the page            |
| Expected Result | Todos appear on the page                       |
| Actual Result   | Same as expected                               |
| Status          | Passed                                         |

 <br>

| Test            | Deleting a todo                                                          |
| --------------- | ------------------------------------------------------------------------ |
| Test Case ID    | TC03                                                                     |
| Executor        | Ahmad Bitar                                                              |
| Description     | Verify a certain task is deleted upon clicking on a button               |
| Preconditions   | User adds a todo and clicks on the delete button                         |
| Execution Steps | Add a few todos and click on the delete button for one of them           |
| Expected Result | The targeted todo is deleted of the UI and deleted from the localStorage |
| Actual Result   | Same as expected                                                         |
| Status          | Passed                                                                   |

 <br>

| Test            | Updating the status of a task                                                     |
| --------------- | --------------------------------------------------------------------------------- |
| Test Case ID    | TC04                                                                              |
| Executor        | Ahmad Bitar                                                                       |
| Description     | Verify the status of a certain task is changed upon a click on it                 |
| Preconditions   | User adds a todo and clicks on the status to toggle it (completed / in progress)  |
| Execution Steps | Add a few todos and click on the status of a certain task                         |
| Expected Result | The clicked status is toggled successfully and updated on the UI and localStorage |
| Actual Result   | Same as expected                                                                  |
| Status          | Passed                                                                            |

<br>

## Check out some of other exams

<strong>Teso 2020</strong> done with ~ 2h https://github.com/AhmadBitarV/teso-2020 <br />
<br>

## Links

<strong>My LinkedIn</strong> https://www.linkedin.com/in/ahmedbitar/<br />
<strong>My Protofolio</strong> https://ahmadbitarv.github.io/Galaxy/ (In development and still buggy as hell 😄 😅 )<br />
