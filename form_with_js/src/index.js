var showing = [1, 0, 0, 0, 0, 0, 0, 0, 0];
var windows = ['w0', 'w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8']

function previous(){
    var qElems = [];
    for (var i = 0; i < windows.length; i++) {
        qElems.push(document.getElementById(windows[i])); 
        let hiddenButton2 = document.getElementById("buttonNext"); 
    }  
    for (var i = 1; i < showing.length; i++) {
        if (showing[i] == 1) {
            qElems[i].style.display = 'none';
            showing[i] = 0;
            if (i != 0) {
                qElems[i - 1].style.display = 'block';
                showing[i - 1] = 1;
            }
            break;
        }
    }     
}
function next() {
    var qElems = [];
    for (var i = 0; i < windows.length; i++) {
        qElems.push(document.getElementById(windows[i]));  
        let hiddenButton = document.getElementById("buttonPrevious"); 
        if (i != 0){
            hiddenButton.removeAttribute("hidden");                           
        }else{                  
            hiddenButton.setAttribute("hidden","hidden"); 
        }
    }
    for (var i = 0; i < showing.length; i++) {
        if (showing[i] == 1) {
            qElems[i].style.display = 'none';
            showing[i] = 0;
            if (i == showing.length - 1) {
                qElems[0].style.display = 'block';
                showing[0] = 1;
            } else {
                qElems[i + 1].style.display = 'block';
                showing[i + 1] = 1;
            }
            break;
        }
    } 
}
var showCheckBoxes = true;
function showOptions() {
    var options = document.getElementById("options");
    if (showCheckBoxes) {
        options.style.display = "flex";
        showCheckBoxes = !showCheckBoxes;
    } else {
        options.style.display = "none";
        showCheckBoxes = !showCheckBoxes;
    }
}
var showCheckBoxes2 = true;
function showOptions2() {
    var options2 = document.getElementById("options2");
    if (showCheckBoxes2) {
        options2.style.display = "flex";
        showCheckBoxes2 = !showCheckBoxes2;
    } else {
        options2.style.display = "none";
        showCheckBoxes2 = !showCheckBoxes2;
    }
}