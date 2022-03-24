# Discord Status Action

This action fetches the status of a given user and updates that on a file. 

🟢 - Online
🟡 - Idle
🔴 - Do not disturb

## Inputs

### `file`

**Required** This is the file you want to action to update your status at. 

### `id`

**Required** The user whose discord status you want to fetch. Note that this must be a string for the action to work. 

## Example usage

```yml
on: [push]

jobs:
  status:
    runs-on: ubuntu-latest
    name: Update Discord Status
    steps:
      - name: Checkout files
        uses: actions/checkout@v3
      - name: Update Status
        uses: CompeyDev/discord-status-action@v0.2.0
        with:
          file: README.md
          id: "893762371770802227"

```
