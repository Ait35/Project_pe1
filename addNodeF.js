let countAG = 0;
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
            lastNodeAG = lastNodeAG[lastNodeAG.length - 1]
            lastNodeAG.id = lastNodeAG.id.substr(0, lastNodeAG.id.length - 1) + countAG
            break;
    }
}


function remove_main_AG(blockAG,x) {
    switch (x) {
        case "AG":
            if (document.querySelectorAll(`[id^=AGblockAG]`).length <= 1 ||  
            document.querySelector(`#AGblockAG${blockAG}`).id == document.querySelector("#AGblockAG0").id) {
                alert("ไม่สามารถลบได้")
            } else {
                document.querySelector(`#AGblockAG${blockAG}`).remove()
            }
            break;
    }

}