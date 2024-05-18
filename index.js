
 // alert("WELCOME TO MY WEB PAGE");
 var myVar;
  
  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }


document.addEventListener('contextmenu',
function(event){
    event.preventDefault();
})