### Merge Two repository
[source](https://blog.devgenius.io/how-to-merge-two-repositories-on-git-b0ed5e3b4448)

#### __Step 1__
**Clone one of the repositories (say repo1)**
```bash
git clone <https/ssh-link-for-repo1>
```

#### __Step 2__
**Create another remote in this clone which points to repo2-our second repository**
```bash
git remote add <your-custom-remote-name> <https/ssh-for-repo2>
```

```bash
# git remote -v
origin <repo-1-link> (fetch)
origin <repo-1-link> (push)
your-custom-remote-name <repo-2-link> (fetch)
your-custom-remote-name <repo-2-link> (push)
```

#### __Step 3__
**From remote to a local branch**
```bash
git checkout -b <new-branch-name> <your-custom-remote-name>/master
```

#### __Step 5__
**Merge with master**
```bash
git checkout main
git merge <new-branch-name>
```
##### **The nerge will ouput an error because the histories don't match**
```bash
git merge <new-branch-name> --allow-unrelated-histories
```