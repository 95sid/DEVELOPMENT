// Onclick vs Events
// Onclick only gives functionality of click and this can have problems
// Events can listen multiple events other than onclick event such as drag-drop,hover etc 

// 1-->
// document.getElementById("id").onclick = function () {
//     alert("Owl clicked");
// };

// 2-->
// Event listner 
// document.getElementById("owl").addEventListener('click',function(e){},false)
// 1-> Event type
// 2-> function with event object 
// 3-> Event propgation (EventCapturing ==> true/EventBubbling==>false) by default it is false
// EventBubbling ==> child to parent  
// EventCapturing ==> parent to child 
// ToStopBubblin/Capturing we can use e.stopPropgation()


// Event Object ==> had multiple property 
// it has multiple Event types such as Browser Event or Environment Events
// type,timestamp,defaultprevented(),
// ṭarget,toelement,srcElement,currenttarget
// ClientX,ClientY,screenX,scrrenY
// altkey,ctrlkey,shiftkey,keyCode



// 3-->
// attachEvent() --> used in Early days for internet Explorer
// onclickEvent() ==> jQuery