const frontProject = document.querySelector("#frontProject");
const backProject = document.querySelector("#backProject");
const clearFilter = document.querySelector("#clearFilter");
const filterFrontProject = document.getElementById("1");
const filterBackProject = document.getElementById("2");


frontProject.addEventListener("click", function (event) {
    if (frontProject.click === true) {
        frontProject.style.backgroundColor = "#253982";
        frontProject.style.color = "#969696";
        filterBackProject.style.display = "block";

    } else {
        frontProject.style.backgroundColor = "#5a3ce1";
        frontProject.style.color = "#ffffff";
        backProject.style.backgroundColor = "#253982";
        backProject.style.color = "#969696";
        clearFilter.style.display = "block";

        filterBackProject.style.display = "none";

    }
})

backProject.addEventListener("click", function (event) {
    if (backProject.click === true) {
        backProject.style.backgroundColor = "#253982";
        backProject.style.color = "#969696";
        filterFrontProject.style.display = "block";

    } else {
        backProject.style.backgroundColor = "#5a3ce1";
        backProject.style.color = "#ffffff";
        frontProject.style.backgroundColor = "#253982";
        frontProject.style.color = "#969696";
        clearFilter.style.display = "block";

        filterFrontProject.style.display = "none";

    }
})

clearFilter.addEventListener("click", function (event) {
    backProject.style.backgroundColor = "#253982";
    backProject.style.color = "#969696";
    frontProject.style.backgroundColor = "#253982";
    frontProject.style.color = "#969696";
    clearFilter.style.display = "none";
    filterBackProject.style.display = "block";
    filterFrontProject.style.display = "block";


})