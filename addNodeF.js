let countAG = 0;
let countCircle = 0;
function add_block_conten(x) {
    switch (x) {
        case "AG":
            countAG++
            let newNodeAG = document.querySelector(".main_block_AG").cloneNode(true);
            newNodeAG.querySelectorAll("[id]").forEach(element => {
                element.id = element.id.substr(0, element.id.length - 1) + countAG
            });

            newNodeAG.querySelector("[id^=numbers]").value = "";
            newNodeAG.querySelector(["[id^=result]"]).innerHTML = "---";

            newNodeAG.querySelector("[id^=calculateAG]").setAttribute("onclick", `calculateAverage(${countAG})`);
            //----------------Delete-------------------
            newNodeAG.querySelector("[id^=removeAG_node]").setAttribute("onclick", `remove_main_AG(${countAG},"AG")`);

            document.querySelector(".AddNode_AG").appendChild(newNodeAG)

            let lastNodeAG = document.querySelectorAll("[id^=AGblockAG]")
            lastNodeAG = lastNodeAG[lastNodeAG.length - 1] // เข้าถึง node ที่มี id สุดท้าย เพราะ มีการเพิ่ม id เลื่อยๆ
            lastNodeAG.id = lastNodeAG.id.substr(0, lastNodeAG.id.length - 1) + countAG
            break;

        case "Circle":
            countCircle++
            let newNodeCircle = document.querySelector(".Caircle_block_conten").cloneNode(true);
            newNodeCircle.querySelectorAll("[id]").forEach(element => {
                element.id = element.id.substr(0, element.id.length - 1) + countCircle
            });

            newNodeCircle.querySelector("[id^=radius]").value = "";

            newNodeCircle.querySelector("[id^=diameterResult]").innerHTML = "";
            newNodeCircle.querySelector("[id^=areaResult]").innerHTML = "";
            newNodeCircle.querySelector("[id^=circumferenceResult]").innerHTML = "";

            newNodeCircle.querySelector("[id^=calculate_diameter]").setAttribute("onclick", `calculateDiameter(${countCircle})`);
            newNodeCircle.querySelector("[id^=calculate_area]").setAttribute("onclick", `calculateArea(${countCircle})`);
            newNodeCircle.querySelector("[id^=calculate_circumference]").setAttribute("onclick", `calculateCircumference(${countCircle})`);

            // ---------------set-select--------------
            newNodeCircle.querySelector("[id^=select_diameter]").setAttribute("onclick", `show_Conten_Caircle(0,${countCircle})`);
            newNodeCircle.querySelector("[id^=select_area]").setAttribute("onclick", `show_Conten_Caircle(1,${countCircle})`);
            newNodeCircle.querySelector("[id^=select_circumference]").setAttribute("onclick", `show_Conten_Caircle(2,${countCircle})`);

            //---------------Delete--------------------
            newNodeCircle.querySelector("[id^=remove_caircle_node]").setAttribute("onclick", `remove_main_All(${countCircle},"Circle")`);

            document.querySelector(".addNode_caircle").appendChild(newNodeCircle)

            let lastNodeCircle = document.querySelectorAll("[id^=Caircle_block_]")
            lastNodeCircle = lastNodeCircle[lastNodeCircle.length - 1] 
            lastNodeCircle.id = lastNodeCircle.id.substr(0, lastNodeCircle.id.length - 1) + countCircle
            break;
    }
}


function remove_main_All(blockAG, x) {
    switch (x) {
        case "AG":
            if (document.querySelectorAll(`[id^=AGblockAG]`).length <= 1 ||
                document.querySelector(`#AGblockAG${blockAG}`).id == document.querySelector("#AGblockAG0").id) {
                alert("ไม่สามารถลบได้")
            } else {
                document.querySelector(`#AGblockAG${blockAG}`).remove()
            }
            break;
        case "Circle":
            if (document.querySelectorAll(`[id^=Caircle_block_]`).length <= 1 ||
                document.querySelector(`#Caircle_block_${blockAG}`).id == document.querySelector("#Caircle_block_0").id) {
                alert("ไม่สามารถลบได้")
            } else {
                document.querySelector(`#Caircle_block_${blockAG}`).remove()
            }
            break;
    }

}