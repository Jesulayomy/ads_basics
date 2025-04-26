To backdate a new commit: bash

```bash
GIT_AUTHOR_DATE="2025-03-19 13:00:00" GIT_COMMITTER_DATE="2025-03-19 13:00:00" git commit -m "[RC]: Tardis:- "
```

You can also use relative dates like:
```bash
GIT_AUTHOR_DATE="46 days ago" GIT_COMMITTER_DATE="46 days ago" git commit -m "Backdated commit"
```

To backdate the last commit:
If you've already committed but want to change the date:

```bash
git commit --amend --no-edit --date="2024-02-10 12:00:00'
```

To also change the committer date:
```bash
GIT_AUTHOR_DATE="2024-02-10 12:00:00" GIT_COMMITTER_DATE="2024-02-10 12:00:00" git commit --amend --no-edit
```

If you've already pushed the commit:
You'll need to force push the updated history:
```bash
git push --force
```