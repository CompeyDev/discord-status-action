# Discord Status Action

This action fetches the status of a given user and updates that on a file. 

<img src="https://cdn.devcomp.tk/twemoji-13.1.0/assets/svg/1f7e2.svg" width="17"></img> - **Online**
<br>
<img src="https://cdn.devcomp.tk/twemoji-13.1.0/assets/svg/1f7e1.svg" width="17"></img> - **Idle**
<br>
<img src="https://cdn.devcomp.tk/twemoji-13.1.0/assets/svg/1f534.svg" width="17"></img> - **Do not disturb**
<br>
<img src="https://cdn.devcomp.tk/twemoji-13.1.0/assets/svg/1f7e3.svg" width="17"></img> - **Streaming**
<br>
<img src="https://cdn.devcomp.tk/twemoji-13.1.0/assets/svg/26aa.svg" width="17"></img> - **Offline**





## Inputs

### `file`

**Required** This is the file you want to action to update your status at. 

### `id`

**Required** The user whose discord status you want to fetch. Note that this must be a string for the action to work. 

## Example usage

```yml
on:
  schedule: [{cron: "*/7 * * * *"}]
  workflow_dispatch:
  push: {branches: ["master", "main"]}

jobs:
  status:
    runs-on: ubuntu-latest
    name: Update Discord Status
    steps:
      - name: Checkout files
        uses: actions/checkout@v3
      - name: Update Status
        uses: CompeyDev/discord-status-action@0.2.3
        with:
          file: README.md
          id: "893762371770802227"
      - name: Commit and push if there are changes
        run: |-
          git diff
          git config --global user.email "hi@devcomp.tk"
          git config --global user.name "StatsBot"
          git diff --quiet || (git add -u && git commit -m "🚀 Update Discord Status")
          git push               
```

---

### Discord Status: 🟢
---

This repository is licensed under a [MIT](https://compeydev.mit-license.org) License.
