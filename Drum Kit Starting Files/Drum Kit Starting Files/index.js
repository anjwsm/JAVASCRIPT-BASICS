var numberOfDrumButtons = document.querySelectorAll(".drum").length ;

 for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++ ){ 

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {
        alert("I got Clicked");
    }
 }



