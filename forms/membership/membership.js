
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



btnEnter.onclick=function(){
let name = inptFirstName.value

if (members.indexOf(name) !== -1) {
  NSB.MsgBox(`${name} is on the members list.`)
  
} else {
  NSB.MsgBox(`${name} has been added to the members list.`)
  members.push(name)
  }
}
