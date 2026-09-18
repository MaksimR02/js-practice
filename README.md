# TODO List

A JavaScript TODO application that works with users and tasks loaded from the JSONPlaceholder API.

The project was created to practice working with asynchronous JavaScript, REST API requests, DOM manipulation, and user interactions.

## Technologies

- HTML5
- JavaScript
- Fetch API
- JSONPlaceholder API
- Git

## Features

- Load users and TODO items from an external API
- Display the username associated with each TODO
- Display completed and uncompleted tasks
- Add new TODO items
- Validate user input before adding a task
- Display newly added tasks at the top of the list
- Delete TODO items
- Reuse the same rendering logic for API and locally created tasks

## What I Practiced

During this project, I practiced:

- Working with REST API data
- Using `fetch`
- Working with Promises and `Promise.all`
- Asynchronous JavaScript
- Working with arrays and objects
- Linking data using `userId`
- DOM manipulation
- Event handling
- Form validation
- Rendering dynamic data on the page
- Git and GitHub workflow

## API

The project uses the JSONPlaceholder API to load:

- Users
- TODO items

Users are connected to their tasks using the `userId` property.

## How It Works

1. Users and TODO items are loaded from the API.
2. Each TODO is matched with the corresponding user.
3. Tasks are rendered on the page with the username and completion status.
4. The user can add a new TODO through the form.
5. Newly created TODO items are displayed at the beginning of the list.
6. TODO items can be removed from the interface.

## Project Purpose

The main goal of this project was to practice working with asynchronous data, API requests, DOM rendering, and building interactive functionality with vanilla JavaScript.
