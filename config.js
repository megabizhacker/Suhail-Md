const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_24_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFZ1FPU25rRGI4eE1BN0drVkdMWUc1UUx4ZWV1QXpuSjdVM0N1S3hqRWxvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrbE9OWVptZ1RqaUt4QUdPaUdhTERnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNjNTEzYmQ0LWNlYjktNDVmYy1hYWE1LWI1YTcyM2E3ZTM4N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICA3MCxcbiAgICAgIDEwMyxcbiAgICAgIDEwNyxcbiAgICAgIDcyLFxuICAgICAgMTg4LFxuICAgICAgMjE2LFxuICAgICAgNzQsXG4gICAgICAxOTYsXG4gICAgICA4LFxuICAgICAgMTU5LFxuICAgICAgOTcsXG4gICAgICA2NSxcbiAgICAgIDIsXG4gICAgICAyMTEsXG4gICAgICA2NixcbiAgICAgIDk2LFxuICAgICAgODEsXG4gICAgICA2NixcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAxNjUsXG4gICAgICA4NCxcbiAgICAgIDEyMCxcbiAgICAgIDExMCxcbiAgICAgIDgsXG4gICAgICAxMjMsXG4gICAgICA3NSxcbiAgICAgIDQ5LFxuICAgICAgNTUsXG4gICAgICAxODcsXG4gICAgICAzNyxcbiAgICAgIDExMixcbiAgICAgIDE3LFxuICAgICAgMjE3LFxuICAgICAgMjQwLFxuICAgICAgMTE0LFxuICAgICAgMjE1LFxuICAgICAgMTY2LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllGR01KRzQyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg3NDYzNjExOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODQ3NDQ0Mzc3NjA5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5LNS80RkVON1p4N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwaTFCaDNONGQ1YnBtMnhLcVUwK0VFMFJpbnZmckgrMHdpRjNROHBlVFNrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRsMDNrVkFTS3lybzN6SUplV2dDUU1JdFZuM0NjTnlIeVBCZFNmS2tUUHppaFdvU3E1OEY4VEF5ZXZwb0V2d29BY2I2NjhpdnRLcjUzTjhpOUFYUkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRBeDJ0YjdNSG9hbXZ0TExsc1FKZUNNVEVPV0R6QmhUTWdkTnk3TWVKdTVpK2NRbDM5bjJ6MVdVSWZCWE9KYnpudG9HU3Fyc3pWZGp2K0pqb25uV2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODc0NjM2MTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzQyMjQyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
