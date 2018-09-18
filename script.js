function openFood(mealTime) {
    var i;
    var x = document.getElementsByClassName("meal");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(mealTime).style.display = "block"; 
}