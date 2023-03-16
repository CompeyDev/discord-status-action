#!/usr/bin/env node

const isProd = true // This should be set to true when not a local development version.

const core = require('@actions/core');
const axios = require('axios');
const { readFileSync, writeFileSync } = require('fs');
const id = isProd ? core.getInput("id") : "893762371770802227"
const file = isProd ? core.getInput("file") : "README.md"

const deriveReplacement = (status) => {
  const symbols = {
    offline: "⚪",
    online: "🟢",
    dnd: "🔴",
    idle: "🟡",
    streaming: "🟣"
  }
  const statusSymbol = symbols[status]

  const matcher = /🔴|🟣|🟡|⚪|🟢/g

  try {
    var fileBuf = readFileSync(file)
    console.log("[deriveReplacement] :: Successfully read target file.")
  } catch (_) { throw new Error("[deriveReplacement] :: Failed to read target file.") }
  const replacedContents = fileBuf.toString().replace(matcher, statusSymbol)

  try {
    writeFileSync(file, replacedContents)
    console.log("[deriveReplacement] :: Successfully wrote updated contents to target file.")
  } catch (_) { throw new Error("[deriveReplacement] :: Failed to write to target file.") }
}
axios.get(`https://api.lanyard.rest/v1/users/${id}`)
  .then((response) => {
    const fetchedRaw = response.data.data
    const status = fetchedRaw.discord_status
    console.log("[self] :: Successfully fetched user status -> ", status)

    if (!status) throw new Error("[self] :: Invalid status type. Refusing to continue.")

    deriveReplacement(status)
  })
  .catch((err) => {
    isProd ? core.setFailed(err.message) : console.error(err.message)
  })