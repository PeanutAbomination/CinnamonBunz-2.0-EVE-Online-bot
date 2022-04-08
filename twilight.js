const Discord = require("discord.js")
const twi = new Discord.Client({ intents: 14087});
const { SlashCommandBuilder } = require('@discordjs/builders');
const [gID] = [require("./var/GuildID.json")]
var fs = require("fs")
var translate = require("translate-google")
const [rp1,rp2,fCreat,fExist,fTerminate] = ["try{\nfs.readFile('","', 'utf8' , (err, data) => {\nif (err) {\nconsole.error(err)\nreturn\n}\neval(`${data}`)\n})\n}catch(e){\nconsole.log(e)\n}",`fs.writeFile(\`arjTemp/\${interaction.user.id}\`+".arj", '0', function (err) {\nif (err) throw err;\nconsole.log('File is created successfully.');\n});`,`try {\nif (fs.existsSync(\`arjTemp/\${interaction.user.id}\`+".arj")) {\n//file exists\nconsole.log("eyup")\n}else\n{if (fs.existsSync(!(\`arjTemp/\${interaction.user.id}\`+".arj"))) {\n//file does not exists\nconsole.log("eno")\nfs.unlink(\`arjTemp/\${interaction.user.id}\`+".arj", (err) => {\nif (err) throw err;\n});\n}\n} catch(err) {\nconsole.error(err)\n}`]

// gID declare as list form in JSON

twi.on("ready",() => {
  eval(rp1 + "./process/VariableCompaction/InterDeclare.jsev" + rp2)
  })

twi.on("interactionCreate", async (interaction) => {
  {
  if (fs.existsSync("./var/lang/"+interaction.user.id+".lang")) {
    var dLang = fs.readFileSync("./var/lang/"+interaction.user.id+".lang",
    {encoding:'utf8', flag:'r'});
    if(dLang == "en"){var defaultLang = "en"}else
    if(dLang == "zh"){var defaultLang = "zh-cn"}else
    if(dLang == "ru"){var defaultLang = "ru"}}else
if (!(fs.existsSync("./var/lang/"+interaction.user.id+".lang"))) {var defaultLang = "en"}
// declares default language for user
}
    if(!interaction.isCommand()){
      return
    }
    const {commandName,options} = interaction
    if(commandName === "route"){
      {
        try{
      var EVEoj = require("EVEoj"),
    SDD = EVEoj.SDD.Create("json", {
        path: "./static"
    }),
    map;

SDD.LoadMeta()
.then(function() {
    map = EVEoj.map.Create(SDD, "K");
    return map.Load();
})
.then(function() {
  try{
    var s = options.getString("start")
    var e = options.getString("end")
    var sec = options.getString("security")
    var end = map.GetSystem({name: `${e}`})
    var start = map.GetSystem({name: `${s}`})
    if(start && end){
      if((s==e)){eval(rp1 + "./process/cmdData/route/error/routeSameErr.jsev" + rp2)}else
      if(!(s==e)){
    if(!(sec == "safe") && !(sec == "fast") && !(sec == "not safe")){eval(rp1 + "./process/cmdData/route/error/securityErr.jsev" + rp2)}else
if((sec == "safe") || (sec == "fast") || (sec == "not safe")){eval(rp1 + "./process/interHandler/route.jsev" + rp2)}}else
if(!(start) || !(end)){eval(rp1 + "./process/cmdData/route/error/routeErr.jsev" + rp2)}}}catch(e){eval(rp1 + "./process/cmdData/route/error/allInvalidErr.jsev" + rp2)}})}catch(e){console.log(e)}
    }}else
    if(commandName === "profile"){
      eval(rp1 + "./process/interHandler/profile.jsev" + rp2)
    }else
    if(commandName === "language"){
      eval(rp1 + "./process/interHandler/language.jsev" + rp2)
    }
  })


twi.login("")
