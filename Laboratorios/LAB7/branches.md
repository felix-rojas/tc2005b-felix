# Branches github

## Steps to create branch

1.Creamos rama nueva `git checkout -b lab7`
2.Stage changes and new files `git add -A`
3.Commit changes to save `git commit -m "first commit"`

## Merge branches with main

1.Switch to main branch`git checkout main`
2.Merge desired branch with current one `git merge lab7`
3.Push the changes online `git push`

### Conflicts

The only conflicts that git will notify you about are the ones where the same line of code is modified and merged into another branch that also fixed that
