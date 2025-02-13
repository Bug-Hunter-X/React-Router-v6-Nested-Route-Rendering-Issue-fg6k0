# React Router v6 Nested Route Bug

This repository demonstrates a bug encountered when using nested routes in React Router v6.  The issue involves the failure of nested routes to render correctly, with the catch-all route incorrectly triggering. 

## Bug Description

The application uses nested routes to structure its navigation. Despite the correct routing configuration, nested routes do not appear when they should. Instead, the catch-all route (`/*`) is rendered. This leads to an incorrect user experience and application malfunction.

## Setup

1. Clone the repository: `git clone <repo_url>`
2. Navigate to the repository: `cd react-router-v6-nested-route-bug`
3. Install dependencies: `npm install`
4. Run the application: `npm start`

## Solution

The solution involves correctly defining the nested routes within the parent route's element using the `useRoutes` hook which helps avoid rendering the catch-all route incorrectly. 