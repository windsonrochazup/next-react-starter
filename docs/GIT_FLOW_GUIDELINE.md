# Git flow Guideline

Git Flow is the workflow in Git. It was set up in order to facilitate the understanding of all project developers about all features, in addition to keeping an organized history of commits. Below are the flows for private (developer branch) and public (master, qa, and dev) branches, which will be described in more detail below.

![image](https://i.imgur.com/D4g6sgE.jpeg)

## Private Branches

Suppose the developer needs to perform a new feature to create a new component for the project. What must be done first is to check if the local master is up to date with the remote master. Just enter the master branch and do a rebase:

```sh
git checkout master

git pull --rebase
```

After updating the master it is necessary to create a private branch to make the changes locally. Don't forget the branching pattern which is detailed in [NAMING_GUIDELINE.md](docs/NAMING_GUIDELINE.md). As it will be a new feature, the branch must have the feature prefix:

```sh
git checkout -b feature/new-component
```

Before modifying and committing any changes, the Pull Request (PR) must be opened to the master branch. The description can be added at the end of the feature.

During feature development, several changes will be made, which may be related to testing, bug fixes, refactoring, etc. As such, it is essential that the developer follow the Conventional Commits specification detailed in [NAMING_GUIDELINE.md](docs/NAMING_GUIDELINE.md).

Assuming that in this feature of the new component the developer has performed unit tests and added support for the English language, he could make the following commits below:

```sh
git commit -m “feat: add english language”
git commit -m “test: create unit test”

git push
```

During the feature's progress the developer will make small commits during the working day, so it is essential that at the end of the day the remote branch is updated with the local branch, which is only on the machine, in order not to risk code loss. Just do a push as shown above.

Feature finished? Before asking for the code review it is necessary to check if the private branch is updated with the master (will it have any new feature on it?). Detail: NEVER upgrade without using rebase. To avoid merging into the private branch, the git pull --rebase pattern can be enabled with the command:

```sh
git config --global pull.rebase true
```

After everything finished and the local private branch updated with the remote private branch, it's time to add the description in the PR following the template made in github, and then ask for the Code Review to be performed.

## Public Branches

![image](https://i.imgur.com/3Wgpd6G.jpeg)

The public branches are: master, qa, and dev. These branches can never be committed directly, so the git flow for them refers to merging private branches into public ones.

In general, merging into a public branch is practically the same for all, only with the master we will have some points to emphasize.

Before any merges it is very important to check if the local branch is up to date, be it qa, dev or master.

```sh
git checkout master

git pull --rebase
```

There, branch updated. Now the merge can be done. Whenever a merge is done, it is necessary to use squash. For the qa and dev branches, the merge will be via the command line:

```sh
git merge --squash feature/new-context

$ git push
```

As for the master branch, as it is always necessary to have an open PR so that something can be placed in the master, we will do it via github, just click on "Squash and merge" in the PR:

![image](https://imgur.com/ufZVhWj.jpeg)

When finalizing the merge to the master branch, ALWAYS remember to delete the remote private branch. In that case the feature/new-context branch should be deleted. We don't want to leave several branches created unusable, ok?

Now with the merge done, it will be possible to deploy in the qa or dev environment and generate releases, as detailed in the workflow documentation.
