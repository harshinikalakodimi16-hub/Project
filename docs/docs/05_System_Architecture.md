# System Architecture

## Overview

EduGenie follows a simple client-server architecture where users interact with a web interface, and educational queries are processed using the Google Gemini API.

## Architecture Components

### User

The student enters a question through the web interface.

### Frontend

The frontend is developed using HTML, CSS, and JavaScript. It collects the user's question and sends it to the Gemini API.

### Google Gemini API

The Gemini model processes the user's question and generates an AI-powered educational response.

### Response Display

The generated response is displayed on the website for the user.

### Deployment

The application is hosted using GitHub Pages, making it accessible through any web browser.

## Architecture Diagram

![System Architecture](../assets/images/system_architecture.png)

