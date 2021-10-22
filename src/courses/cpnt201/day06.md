---
layout: layouts/day.njk
title: CPNT 201 Day 6 - Team Collaboration with Git
description: This session will be all about working on a team using git. We will practice methods of .
date: 2021-10-22
released: true
---

## Morning Reflection

- Check in
- Questions about CPNT-201 A2 & A3
- Questions about git

## Assignment 4: Collaborative Git

- [Assignment Link]({{ '/assignments/cpnt201/assignment-4/' | url }})
- Assignment Due: October 28 @ 11:59pm

## Prep

- Watch [Git for Professionals](https://youtu.be/Uszj_k0DGsg?t=88)
  - Watch these parts:
    - the perfect commit
    - pull requests
    - merge conflicts
  - If you want to go deeper, also watch:
    - branching strategies
    - merge vs rebase
- Read [Creating Issues](https://docs.github.com/en/github/managing-your-work-on-github/creating-an-issue)
- Skim [Mastering Github Issues](https://guides.github.com/features/issues/)
- Read [Ignoring files](https://docs.github.com/en/free-pro-team@latest/github/using-git/ignoring-files)
- Read [https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts]
- Read [Git merge conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)

---

## Overview

- 1. [gitignore](#topic-1)
- 2. [forks and pull requests](#topic-2)
- 3. [Merge Conflicts](#topic-3)

## <a id="topic-1"></a> Ignoring files with gitignore

- gitignore is used to keep certain files out of your remote git repository
- this is important for security and repo size
- you can have a local gitignore in the project root repo
- you can also have a global gitignore

### Files to keep out of your git repo

- system files
- local configurations
- environment variables
- dependency directories

### Best practices

- use a global gitignore for system files
  - examples: .trash, npm-debug.log, Thumbs.db
- use a local(project) gitignore for project files
  - examples: .env, node_modules, .vscode

### Sample Code

These are some simple gitignore setups that you can use.

- [local gitignore](https://gist.github.com/lilyx13/55f2f92d520dc40de4a5129cfd70e26c)
- [global gitignore](https://gist.github.com/subfuzion/db7f57fff2fb6998a16c)

### Activity: Gitignore (10 minute activity)

1. create a new git repository called 'git-collab-practice' or something similar
2. add a `.gitignore` file manually
3. Create/add any file to the repo
4. Add it to the git ignore
5. Add files and Commit your changes
6. Create another file, **don't** add it to the gitignore
7. Commit changes and push
8. Check to make sure that the right files are in your remote repo

---

## <a id="topic-2"></a>Topic 2: Forks and Pull Requests

- When you fork a repo, you are creating your own version of it
- Oftentimes, you will work on your own version of the code
  - you can pull updates from the master repository
  - you can make **pull requests** to submit your own code to the master repository
- Collaborating on open source projects by making PRs is a great way to start building your dev experience

### How to make a Pull Request

- Basic Method (follow these steps):
  1. Edit code in your fork
  - fork and clone the repo onto your system
  - Make your edits
  2. Commit and push changes in your fork
  - Your changes need to be pushed to github
  3. Submit a pull request
  - Look for the green button that says "Compare & pull request"
- **(optional)** Advanced steps
  - Track the original repository
    - `git remote add --track master upstream git@github.com/repo-name.git`
  - Create new branches for your changes
    - do this for experiments and feature development (not required for this course)
      - `git checkout -b new-branch-title`

### Make good quality PRs

- Title and summary should be clear and concise
- describe your changes well in each commit
- keep it small
  - make a pr that focuses on 1 thing. don't make PRs that aim to do lots of different things
- test your code before submitting a PR
  - Do not submit broken code
  - Sometimes when we change too many things, unexpected breaks can occur
    - before submitting, double check that everything still looks good
- Lots of information can be found [in this gist](https://gist.github.com/mikepea/863f63d6e37281e329f8)

### Activity: Fork your [CPNT201-A4 Assignment Directory](https://github.com/sait-wbdv/scavengit-game)

1. Fork the repo noted above
2. in the directory named `players` add a markdown file titled your name
3. Inside the file, use proper markdown syntax to add a link to your personal github repo
4. Make a Pull Request to add it to the master repository

---

## <a id="topic-3"></a>Topic 3: Merge Conflicts

They are a bad time but they happen

### Learning Objectives

- Recognize when a merge conflict occurs.
- Understand what causes a merge conflict.
- Create a merge conflict in a new repo using the GitHub web interface.
- Resolve a merge conflict using VS Code.
- Recognize the difference between a normal commit and a merge commit on GitHub, based on the number of parent branches listed.

### Terminology

Merge
: When two branches in Git are merged into one. This will often happen if two developers are submitted code to a project or one developer is submitting code from two machines.

Merge conflict
: When two branches edit the same line of code. Git doesn't know which change to keep so it leaves it to the developer to decide when remote code is pulled.

Current Change
: The change (relevant to the conflict) that was made on the local repo.

Incoming Change
: The change that is incoming from the remote repo.

### Materials

- Activity: [Create a merge conflict](https://gist.github.com/acidtone/d8c2e285c9b25fcb7443a4f0f4e4b4e6)

### Key Takeaways

- Push code often. When two developers edit the same line of code, the dev that pushed their code last is the one that has to resolve the conflict.
- It's sometimes not obvious: after you accept the current/incoming change, you still need to `add` and `commit` the changes.

### Activity: Force a merge conflict in your gitignore activity from this morning

1. Add some text in the tracked markdown file **in the github editor**
2. Commit that change in github
3. **without pulling first** try to edit the same line of that file in vscode
4. Push changes
5. Resolve merge conflict
6. In brightspace, submit the link to the git commit where the merge conflict was resolved under the dailies.

---

## Lab Time

- [Assignment]({{ '/assignments/cpnt201/assignment-4/' | url }})
- Work on your assignment
- Most of the work should be able to be finished before the end of lab time.
