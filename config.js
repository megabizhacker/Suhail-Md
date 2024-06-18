lookconst fs = require('fs-extra')
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348087463611,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_09_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkwLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI4LFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVjZwZWFpb3Ywdmh2ejAwU3l5K0VVS3lWZlIzKzNVdnI3MmNUVlA2c3g0bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidHpUY2NBcW1TNHF3SHhjTmkzSlRLUVwiLFxuICBcInBob25lSWRcIjogXCJmMGIzMjgyNi0wYjc5LTRjNjUtYTNmYi05NWI1YmE4OTkzMjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgNTksXG4gICAgICAzOCxcbiAgICAgIDI4LFxuICAgICAgMTgxLFxuICAgICAgMTM4LFxuICAgICAgMCxcbiAgICAgIDY2LFxuICAgICAgNDgsXG4gICAgICAyNyxcbiAgICAgIDE5MCxcbiAgICAgIDI0MCxcbiAgICAgIDI0MyxcbiAgICAgIDEzMSxcbiAgICAgIDE5OSxcbiAgICAgIDEzNixcbiAgICAgIDEzOSxcbiAgICAgIDY1LFxuICAgICAgMTk0LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDcsXG4gICAgICAxMDcsXG4gICAgICAyNDMsXG4gICAgICAxMixcbiAgICAgIDIyOCxcbiAgICAgIDE3NSxcbiAgICAgIDI1MyxcbiAgICAgIDE4NixcbiAgICAgIDEwNSxcbiAgICAgIDg3LFxuICAgICAgMTg4LFxuICAgICAgMTI3LFxuICAgICAgMTYwLFxuICAgICAgMTIyLFxuICAgICAgMTQ2LFxuICAgICAgMTYyLFxuICAgICAgMTgzLFxuICAgICAgMTAwLFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk00REU2UzFKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg3NDYzNjExOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODQ3NDQ0Mzc3NjA5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5LNS80RkVKWHZ4N01HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwaTFCaDNONGQ1YnBtMnhLcVUwK0VFMFJpbnZmckgrMHdpRjNROHBlVFNrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9ScC92MXpTTnpXS0duWlAvQlpRblB6TThSa09zVUtrM1lqdFZnQi9jZ3cxUDVldkhud0xtNWp2eDNpM256c2FKYWhybFZQMDQzU2dvZHF2M0ZWZENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJra1N3N01yYWliSkxMUW1lMEZ6T3VsTlBlejVCTHh3OFJBS2R1cFhjNHdSN29sZUVwUVhqKzRBVzlCZWErS2s0QkVveXIzbCs3NVNjTXIyV0k2cEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODc0NjM2MTE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzQ0OTg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSG55XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIbnkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPSmhGWnNwR2VQY3RUNWF1Ykx2VE9HVFFMSkdWZGJsb0pCU0ZTb2gyM05rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDgxMTU0ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODc0MjI2MTA4MFwifSIKfQ=="  // PUT your SESSION_ID 


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
