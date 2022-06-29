let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true

this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true

this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
this.updateBlockStatus(m.sender, 'block')
   }
    }

module.exports = handler
