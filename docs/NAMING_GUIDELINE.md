# Naming Guideline

For greater organization and understanding, let's work with patterns in branch and commit names.

## Commit message

During local development, the developer should make small commits, following the [atomic commits pattern](https://en.wikipedia.org/wiki/Atomic_commit), and each commit must belong to a logical change, that is, no commits generic or with many features included.

For the descriptions in the commits, we will use the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/). It defines a set of rules for creating an explicit commit history.

The structure of a semantic commit is this:

```txt
<type>[scope optional]: <description>
  <optional body>
  <optional footer>
```

Let's use its simplified mode, without using its optional parts. The first description refers to your type and will be followed by some of the types described in the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) documentation:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

The description is mandatory in the syntax, and must always be presented in lowercase letters, with the exception of file and class names, which can be uppercase.

They must also be clear enough, and written in the English language at all times. For example:

```txt
test: ensure DbLoadSurveys throws if LoadSurveysRepository throws
```

## Branch naming

For branch names, the prefixes we will use are exactly those used in the standard commits, but with the following structure:

- build/*: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci/*: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs/*: Documentation only changes
- feat/*: A new feature
- fix/*: A bug fix
- perf/*: A code change that improves performance
- refactor/*: A code change that neither fixes a bug nor adds a feature
- style/*: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test/*: Adding missing tests or correcting existing tests

The * will be replaced by the branch name. It must have only lowercase letters and the separation of words must be done with a hyphen (-). For example, a feature that is to create a new component, the branch name could be “feature/button-component”. The name must always be in the English language.
