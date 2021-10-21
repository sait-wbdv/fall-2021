---
layout: layouts/assignment.njk
title: CPNT 201 Assignment 4 - Collaborative Git
---

## Summary

This assignment will give you experience working with others using git. You will work as a maintainer, collaborator, and contributor.

Marks will be based on documented git commits. Each required commit will be worth 1 point.

- **NOTE**: commits not correctly documented will not be marked.

## Instructions

- Fork [this github repository](https://github.com/sait-wbdv/scavengit-hunt)
- Follow the following steps. More details are provided in the index.html page of the repository

### Steps

1. Set up gitignore and add a file that you use to document your commits (this will be tracked at the end of the assignment)
2. Add your git team mates

- you should have 1 person with commit access and 1 without
- you should be 1 person with commit access to another teammate's repo and you should have to make PRs for the other person's repo

3. As a team, write 3 rules for how you will use git. These should be stored in your README.

- Topics could include:
  - details about how commit messages should be written
  - A strategy for reviewing Pull Requests such as requiring a +1 from your collaborator before merging

4. Make a small edit to the html and css of both of your team mates projects. You should have a separate commit for the html edit and css edit (total of 4 commits). You must merge the PR from your contributor teammate.

- Your edits should be made on blog.html
- I've included some bugs that need to be fixed.
  - There are both syntax bugs and spelling errors.

5. Resolve a Merge Conflict

- In your own repository, create and resolve a merge conflict.

6. Remove the commit documentation file from your gitignore and add the file to your repository.

- **NOTE**: if you accidentally delete this file, you will have to go though your commit history to find all of the required commits.

### Required Commits

- Create a gitignore and add the name of your commit documentation markdown file to it
- Add you and your team to your README
- Add contributor rules to your README
- Pull Request commit HTML edit to the page that you are contributor
- Pull Request commit CSS edit to the page that you are a contributor
- HTML edit to the page that you are a collaborator
- CSS Edit to the page that you are a collaborator
- One pull request that you merged into your repo
- Resolved Merge Conflict Commit
- Commit documentation file being added to the repo

#### Total Points: 10

#### Commit documentation requirements

- A short description of what the commit is (you can use the required commits description)
- a link to the specific commit formatted like this
- example:
  - added blog repo and added nav to index - [172a3b](https://github.com/sait-wbdv/scavengit-game/commit/172ae3b5d8e152f427ffe76244793fc41c53242a)

## Submission Instructions

- Submit the following to brightspace:
  - a link to the commit documentation file in your repo (this is what I will be grading)
  - a zipped copy of your git repository
