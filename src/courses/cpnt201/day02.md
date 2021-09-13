---
layout: layouts/day.njk
title: CPNT 201 Day 2 - Git and GitHub
description: Git is what devs use to manage, collaborate on and deploy our code. It's how your instructors publish the program website and it's the first skill employers will be looking for.
date: 2021-09-13
released: true
---

## Housekeeping
- Reminder for Tony: Hit record!
- [One website Issue fixed](https://github.com/sait-wbdv/fall-2021/issues/3)!
- Code Warrior leader board:
    - Belchi (3), David (3), Fesal (3), Lucas (3), Mysia (3), Icah (3), Jessica (3), Chris (2), Hayden (2), Evan (2), Jean-Marc (2), JP (2), Sharron (2), James (2),  Devon (2),  Jesse (2), Filora (2), Byung (1)

---

## [Today's Padlet](https://padlet.com/acidtone/fall_2021)

## Trophy of the Day: Deployed GitHub Pages website
Today's activities will show you how to use Git to push a static website to GitHub and deploy that site with GitHub Pages. 

In today's Daily in Brightspace, post a link to:
- your GitHub repo
- your published GH Pages website

---

## 1. Git Overview
- [What is Git?](https://www.google.com/search?q=what+is+git)
    - Git is version control software that help a software team manage changes to source code over time.
    - See: [Git Terminology]({{/takeaways/git/terminology/}})
- Why do we use it?
    - *To download projects* to our systems. See: [Clone a read-only repo](https://gist.github.com/acidtone/aeea8025550587db9e557e3b9a5bd982)
    - *Code backups*: Git allows you to take snapshots of a directory (commits) which we can rollback to in case we royally screw up.
    - *Syncing code*: If you work on two machings, like a home laptop and office system, you can use Git to sync your projects.
    - *Collaboration with teammates*: Git allows multiple developers to work on the same file at the same time. Conflicts will happen but Git helps resolve them.
    - *Deployment*: In industry, we use Git to sync our project code with a server to make it live.
- How does it work?
    - At the end of the day, Git keeps track of *each line of code* in your project, including:
        - who created it
        - every change made to it
        - who made each of those changes

## 2. First-time setup
If this is your first time using Git with your current system, you will need to [follow these steps](https://gist.github.com/acidtone/6ca4c62d88570732d3760904ef965e4d) to set your username, email and excludes file.

## 3. Initialize your first repo
Now that you've got Git setup, we can get to work and initialize our first repository.

- Gist: [Initialize a new local Git repo](https://gist.github.com/acidtone/34be4eeb841087ea6cf4a29fb83aecdc)

## 4. Dev Life: Committing changes to a repo
As a developer, you will be commiting code on a daily basis. This is done in 4 steps:
1. Generate some code. In other words, make changes to your project.
2. Add these changes to the staging area.
3. Commit the changes in the staging area.
4. Go to Step one and repeat or take a well deserved break.

See [Add changes and commit them to a repo](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Using_Github_pages)


## 5. First-time Setup: Connecting to GitHub using SSH
Now that we can commit changes to a local repo, we need to be able to "push" these changes to GitHub so we can collaborate, sync laptops or deploy code. 

Unfortunately, we need to jump through some hoops so we can connect with SSH. Luckily, GitHub has great step-by-step instructions in their documentation:
1. [About SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh) 
2. [Check for existing SSH keys](https://docs.github.com/zn/articles/checking-for-existing-ssh-keys)
3. [Generate a new SSH key and add it to the ssh-agent](https://docs.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
4. [Add your SSH key to your GitHub account](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
5. [Test your connection](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection)

## 6. Pushing changes to a GitHub repo
Once you can connect to GitHub with SSH, we can finally "push" and "pull" code to and from a remote repository.
1. [Link a local repo to a remote repo](https://gist.github.com/acidtone/f754c4c37d1014b73d061d09eea6b13c)

## 7. Activity: Commit Catch
*Goal*: pass committed changes to a partner and back again. See: [Pair programming process with Fiona and Semira](https://gist.github.com/acidtone/caa20b2520814a94240043c40301024a)
1. Your instructor will randomly put you into pairs.
2. Choose one person to create a GitHub repo (or use an existing one) and [invite the other as a collaborator](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).
3. Both partners should pull the GitHub repo to their local machines.
4. Pick a Driver. They will:
    1. Make a local change; 
    2. Add and commit the change;
    3. Push the commit to the GitHub repo.
4. Switch Drivers. The new Driver will:
    1. [Pull the new changes from GitHub](https://gist.github.com/acidtone/bfbf0d50baf834e7ffaf210cece78a69) with `git pull`.
    2. Make a local change; 
    3. Add and commit the change;
    4. Push the commit to the GitHub repo.
5. Switch Drivers and repeat until you get the hang of committing and pushing changes (or until 2:30pm).

## 8. [Deploy a static site with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site). 

---

## Prep
### Git and GitHub
- Padlet: [Git Pit](https://padlet.com/acidtone/git_github)
