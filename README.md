# RestauRooms

> This is a web app that allows users to search for restaurants using the Google Maps API and view the reviews and ratings of the restaurant's restrooms.

This is a fullstack project, with a great focus on React for functionality and React styled components for styling. The backend is comprised of an Express server and MongoDB as the datatbase, with Mongoose as the ODM.

## Preview of functionality

![restauroom_demo](https://user-images.githubusercontent.com/41028186/87491817-f077c400-c5fd-11ea-965e-7ef0cfa7fcde.gif)

## Table of Contents

1. [Features](#features)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Screenshots](#screenshots)
1. [Future Implementations](#future-implementations)

## Features
  * Search for restaurants
    - Search bar that uses Google Maps API to locate restaurants
    - Autocomplete feature while prioritising places based on location
    - Google Maps object loads and updates according to search (pin added to place and zoom in on location)
    - Information window pop up upon click of searched place on map
  * Reviews
    - Reviews rendered based on most recent
    - Read more feature if review exceeds 180 characters, which shows rest of review upon click
    - Overall rating from 1 - 5 received using toilet icon
  * Pagination
    - Show 10 reviews per page
    - Current page number highlighted
    - On-hover effect over page numbers
  * Submission form for review
    - Text box for user to type a review for a specific restaurant (once searched)
    - Radio buttons allows users to give an overall rating between 1 - 5 inclusive (default 1)
    - Pop up requiring field to be non-empty upon submission
    - Submit button saves review to the the database uon click

## Requirements
  * Google Maps API key
  * npm 6.10.x
  * Node 8.15.x
  * MongoDB 4.2.x

## Development

### Installing Dependencies and running module locally

From within the root directory:

1. Install project dependencies

```sh
npm install
```

2. Create and seed MongoDB database
```sh
npm run seed
```

3. Start server
```sh
npm run start-dev
```

Note: make sure to replace all `config token` instances with your own Google Maps API key. It will be necessary to rebuild the bundle file to carry out this updated action. Run build with command `npm run build`.

Visit `http://localhost:8080` on your browser to view!

## Screenshots

Screenshots of project:

Initial load

<img width="650" alt="Screen Shot 2020-07-14 at 5 00 00 PM" src="https://user-images.githubusercontent.com/41028186/87490167-dd62f500-c5f9-11ea-8766-c521c22a64a5.png">

Search bar with autocomplete

<img width="650" alt="Screen Shot 2020-07-14 at 5 06 22 PM" src="https://user-images.githubusercontent.com/41028186/87491220-69761c00-c5fc-11ea-9138-630f0f5f430e.png">

Google Maps update

<img width="650" alt="Screen Shot 2020-07-14 at 5 07 27 PM" src="https://user-images.githubusercontent.com/41028186/87491200-5cf1c380-c5fc-11ea-956a-6327cded29b2.png">

Pagination

<img width="650" alt="Screen Shot 2020-07-14 at 5 08 26 PM" src="https://user-images.githubusercontent.com/41028186/87491131-29af3480-c5fc-11ea-8cc8-b16d07c1e576.png">

Reviews with read more functionality

<img width="650" alt="Screen Shot 2020-07-14 at 5 09 30 PM" src="https://user-images.githubusercontent.com/41028186/87491176-4b102080-c5fc-11ea-8193-9d8f4b09272f.png">

Reviews submission form

<img width="650" alt="Screen Shot 2020-07-14 at 5 11 30 PM" src="https://user-images.githubusercontent.com/41028186/87491072-02f0fe00-c5fc-11ea-8661-82fce543be25.png">

Restaurant with no current reviews

<img width="650" alt="Screen Shot 2020-07-14 at 5 12 03 PM" src="https://user-images.githubusercontent.com/41028186/87490996-df2db800-c5fb-11ea-9688-ade5da365e62.png">

Posting of review

<img width="650" alt="Screen Shot 2020-07-14 at 5 13 44 PM" src="https://user-images.githubusercontent.com/41028186/87490921-ba394500-c5fb-11ea-862a-83cb75b2e680.png">

## Future Implementations

* Authentication system for user sign in and log out
