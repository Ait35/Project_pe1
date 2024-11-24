let listAllitem = document.getElementsByClassName("mainAll_Block_contenT");
let navrow = document.querySelectorAll("[id^=navbutton_]");
let navbar_none = document.querySelector(".navbar-none");
let navbar_block = document.querySelector(".navbar");

document.getElementById("list-item-1").addEventListener("click", function () {
    document.querySelector(".texet_show").style.display = "none";
    document.querySelector("#navbutton_3").style = "background-color: hsl(0, 0%, 98%); ; color: green; border: 1px solid green;";
    for (var i = 0; i < listAllitem.length; i++) {
        if (i == 0) {
            listAllitem[i].style.display = "flex";
            navbar_block.style.display = "flex";
            navbar_none.style.display = "none";
            for (var numberRow = 0; numberRow < navrow.length; numberRow++) {
                navrow[numberRow].setAttribute("onclick", `buttonstyle(${numberRow + 1},'t')`)
            }
            document.getElementById("clear").setAttribute("onclick", `clearNode('t')`)
        } else {
            listAllitem[i].style.display = "none";
        }
    }
});

document.getElementById("list-item-2").addEventListener("click", function () {
    document.querySelector(".texet_show").style.display = "none";
    for (var i = 0; i < listAllitem.length; i++) {
        if (i == 1) {
            listAllitem[i].style.display = "block";
            navbar_none.style.display = "flex";
            navbar_none.style.justifyContent = "space-between";
            navbar_block.style.display = "none";

        } else {
            listAllitem[i].style.display = "none";
        }
    }
});
document.getElementById("list-item-3").addEventListener("click", function () {
    document.querySelector(".texet_show").style.display = "none";
    document.querySelector("#navbutton_3").style = "background-color: hsl(0, 0%, 98%); ; color: green; border: 1px solid green;";
    for (var i = 0; i < listAllitem.length; i++) {
        if (i == 2) {
            listAllitem[i].style.display = "flex";
            navbar_block.style.display = "flex";
            navbar_none.style.display = "none";

            for (let numberRow = 0; numberRow < navrow.length; numberRow++) {
                navrow[numberRow].setAttribute("onclick", `buttonstyle(${numberRow + 1},'ag')`)
            }
            document.getElementById("clear").setAttribute("onclick", `clearNode('ag')`)
        } else {
            listAllitem[i].style.display = "none";
        }
    }
});

document.getElementById("list-item-4").addEventListener("click", function () {
    document.querySelector(".texet_show").style.display = "none";
    for (var i = 0; i < listAllitem.length; i++) {
        if (i == 3) {
            listAllitem[i].style.display = "block";
            navbar_none.style.display = "flex";
            navbar_none.style.justifyContent = "space-between";
            navbar_block.style.display = "none";
        } else {
            listAllitem[i].style.display = "none";
        }
    }
});
document.getElementById("list-item-5").addEventListener("click", function () {
    document.querySelector(".texet_show").style.display = "none";
    for (var i = 0; i < listAllitem.length; i++) {
        if (i == 4) {
            listAllitem[i].style.display = "block";
            navbar_block.style.display = "flex";
            navbar_none.style.display = "none";
            for (var numberRow = 1; numberRow <= navrow.length; numberRow++) {    
                if (numberRow == 3) {
                    navrow[numberRow-1].style = "background-color: rgb(221, 221, 221); color: white; border: none";
                    navrow[numberRow-1].removeAttribute("onclick")
                }else{
                    navrow[numberRow-1].setAttribute("onclick", `buttonstyle(${numberRow},'Cr')`)
                }
            }
            document.getElementById("clear").setAttribute("onclick", `clearNode('Cr')`)
        } else {
            listAllitem[i].style.display = "none";
        }
    }
});


function clearNode(x) {
    switch (x) {
        case "t":
            var block_conten = document.querySelectorAll(".block_conten_triangle")
            if (block_conten.length > 1) {
                block_conten.forEach((element, index) => {
                    if (index != 0) {
                        element.remove()
                    }
                });
                break;
            } else {
                alert("ไม่สามารถลบได้")
            } break;
        case "ag":
            var block_conten = document.querySelectorAll(".main_block_AG")
            if (block_conten.length > 1) {
                block_conten.forEach((element, index) => {
                    if (index != 0) {
                        element.remove()
                    }
                });
                break;
            } else {
                alert("ไม่สามารถลบได้")
            }
        case "Cr":
            var block_conten = document.querySelectorAll(".Caircle_block_conten")
            if (block_conten.length > 1) {
                block_conten.forEach((element, index) => {
                    if (index != 0) {
                        element.remove()
                    }
                });
                break;
            } else {
                alert("ไม่สามารถลบได้")
            }
    }
}

function buttonstyle(x, typeManu) {
    let buttonav1 = document.getElementById("navbutton_1")
    let buttonav2 = document.getElementById("navbutton_2")
    let buttonav3 = document.getElementById("navbutton_3")
    if (typeManu == "t") {
        var block_conten = document.querySelectorAll(".block_conten_triangle")
        var displaybutton = document.querySelectorAll(".btn_Ad_Re")
        var input_T = document.querySelectorAll(".input_T")
        var result_T = document.querySelectorAll(".result_T")
        block_conten.forEach(block_conten => {
            switch (x) {
                case 1:
                    block_conten.style = "width 80%";
                    buttonav1.style.background = "green";
                    buttonav1.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    buttonav3.style.background = "white";
                    buttonav3.style.color = "green";
                    displaybutton.forEach(displaybutton => {
                        displaybutton.style.width = "200px"
                    })
                    input_T.forEach(input_T => {
                        input_T.style.width = "300px"
                    })
                    result_T.forEach(result_T => {
                        result_T.style.width = "423px"
                        result_T.style.marginTop = "15px"
                    })
                    break;
                case 2:
                    block_conten.style = "width: 45%";
                    buttonav2.style.background = "green";
                    buttonav2.style.color = "white";
                    buttonav1.style.background = "white";
                    buttonav1.style.color = "green";
                    buttonav3.style.background = "white";
                    buttonav3.style.color = "green";
                    input_T.forEach(input_T => {
                        input_T.style.width = "200px"
                    })
                    result_T.forEach(result_T => {
                        result_T.style.width = "326px"
                        result_T.style.marginTop = "15px"
                    })
                    break;
                case 3:
                    block_conten.style = "width: 30%";
                    buttonav3.style.background = "green";
                    buttonav3.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    buttonav1.style.background = "white";
                    buttonav1.style.color = "green";
                    input_T.forEach(input_T => {
                        input_T.style.width = "100px"
                    })
                    result_T.forEach(result_T => {
                        result_T.style.width = "225px"
                        result_T.style.marginTop = "15 px"
                    })
                    break;
                default:
                    block_conten.style.width = "80%";
                    buttonav1.style.background = "green";
                    buttonav1.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    buttonav3.style.background = "white";
                    buttonav3.style.color = "green";
                    displaybutton.forEach(displaybutton => {
                        displaybutton.style.width = "200px"
                    })
                    input_T.forEach(input_T => {
                        input_T.style.width = "300px"
                    })
                    result_T.forEach(result_T => {
                        result_T.style.width = "423px"
                        result_T.style.marginTop = "15px"
                    })
                    break;
            }
        })
    } else if (typeManu == "ag") {
        var Ag_block = document.querySelectorAll(".main_block_AG")
        var displaybutton = document.querySelectorAll(".btnAG_Ad_Re")
        Ag_block.forEach(Ag_block => {

            switch (x) {
                case 1:
                    Ag_block.style = "width 80%";
                    buttonav1.style.background = "green";
                    buttonav1.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    buttonav3.style.background = "white";
                    buttonav3.style.color = "green";
                    displaybutton.forEach(displaybutton => {
                        displaybutton.style.width = "200px"
                    })
                    break;
                case 2:
                    Ag_block.style = "width: 45%";
                    buttonav2.style.background = "green";
                    buttonav2.style.color = "white";
                    buttonav1.style.background = "white";
                    buttonav1.style.color = "green";
                    buttonav3.style.background = "white";
                    buttonav3.style.color = "green";
                    break;
                case 3:
                    Ag_block.style = "width: 30%";
                    buttonav3.style.background = "green";
                    buttonav3.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    buttonav1.style.background = "white";
                    buttonav1.style.color = "green";
                    break;
                default:
                    Ag_block.style.width = "80%";
                    buttonav1.style.background = "green";
                    buttonav1.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    buttonav3.style.background = "white";
                    buttonav3.style.color = "green";
                    displaybutton.forEach(displaybutton => {
                        displaybutton.style.width = "200px"
                    })
                    break;
            }
        }

        )
    } else if (typeManu == "Cr") {
        var Cr_block = document.querySelectorAll(".Caircle_block_conten")
        var displaybutton = document.querySelectorAll(".btnAG_Ad_Re")
        Cr_block.forEach(Cr_block => {
            switch (x) {
                case 1:
                    Cr_block.style = "width 80%";
                    buttonav1.style.background = "green";
                    buttonav1.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    displaybutton.forEach(displaybutton => {
                        displaybutton.style.width = "200px"
                    })
                    break;
                case 2:
                    Cr_block.style = "width: 45%";
                    buttonav2.style.background = "green";
                    buttonav2.style.color = "white";
                    buttonav1.style.background = "white";
                    buttonav1.style.color = "green";
                    break;
                default:
                    Cr_block.style.width = "80%";
                    buttonav1.style.background = "green";
                    buttonav1.style.color = "white";
                    buttonav2.style.background = "white";
                    buttonav2.style.color = "green";
                    displaybutton.forEach(displaybutton => {
                        displaybutton.style.width = "200px"
                    })
                    break;
            }
        }

        )
    }
}
