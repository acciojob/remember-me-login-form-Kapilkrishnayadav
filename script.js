//your JS code here. If required.
let submit=document.getElementById("submit");
let username=document.getElementById("username");
let password=document.getElementById("password");
let checkbox=document.getElementById("checkbox");
let existing=document.getElementById("existing");
if(localStorage.getItem("username"))
{
    existing.style.display="inline-block";
    console.log("hello");
}
else
{
    console.log("bye");
    existing.style.display="none";
}
existing.addEventListener("click",()=>{
    alert(`Logged in as ${localStorage.getItem("username")}`)
})

submit.addEventListener( "click",(event)=>{
	event.preventDefault();
    let name=username.value.trim();
	
	if(name=="" || password.value=="")
	{
		alert("Username or password field is empty");
		 return
	}
	if(checkbox.checked)
	{
		localStorage.setItem("username",`${name}`);
		localStorage.setItem("password",`${password.value}`);
        existing.style.display="inline-block"
		alert(`Logged in as ${name}`);
        alert("credentials are stored in localStorage");
		
	}
	else
	{
		localStorage.clear();
        existing.style.display="none"
	alert(`Logged in as ${name}`);
        alert("Credentials are not stored");
	}
    
    username.value="";
    password.value="";
})