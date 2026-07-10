# Entity Relationship (ER) Diagram

## Overview

The EduGenie system is designed to help students interact with an AI-powered learning assistant. The system manages users, educational queries, AI-generated responses, and learning sessions.

## Main Entities

### 1. User

* User ID
* Name
* Email
* Login Details

### 2. Learning Session

* Session ID
* User ID
* Date and Time
* Session Status

### 3. Query

* Query ID
* User ID
* Question
* Subject
* Timestamp

### 4. AI Response

* Response ID
* Query ID
* Generated Answer
* Response Time

## Relationships

* One User can have multiple Learning Sessions.
* One User can ask multiple Queries.
* Each Query receives one AI Response.
* Every AI Response belongs to one Query.

## Purpose

The ER Diagram illustrates how users interact with the EduGenie platform and how educational queries and AI-generated responses are managed within the system.

