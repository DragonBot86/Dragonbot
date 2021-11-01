const tod = (prefix, ownerBot, botName) => {
        return `
「 *${DragónBot}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${Dragón}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *TOD*
  │
  ├─ ❏ ${prefix}trust
  └─ ❏ ${prefix}dare`
}
exports.tod = tod
