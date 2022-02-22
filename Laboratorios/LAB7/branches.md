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

> we dont talk about the other branch

## Online and pushing

``` powershell
git add -A
git commit -m "initial develop"
git push origin develop
```

### Working on your user branch and save to cloud

``` powershell
git clone "blahblah"
git checkout develop
git checkout -b user/Case1
git add -A
git commit -m ""
# publish to branch
git push origin user/Case1
```

#### Another user in the same repo saves changes

``` powershell
# clone repo
git clone "blahblah"
# switch to develop branch
git checkout develop
# create user branch in develop
git checkout -b user2/Case2
# stage changes
git add -A
# save changes
git commit -m ""
```

### If your branch is old, here's how to update

``` powershell
# clone repo
git clone "blahblah"
# switch to develop branch
git checkout develop
# create user branch in develop
git checkout -b user/Case1
# stage changes
git add -A
# save changes
git commit -m ""
# sync changes
git pull
git merge
git push origin 
```

>Whenever you checkout to another branch, pull the new data
