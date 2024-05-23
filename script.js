
    var inputLabel = document.getElementById('inputLabel');
     
    function calcBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } else if (pushed == 'CLEAR') {
            // All Clear
            inputLabel.innerHTML = '0';
             
        }
        
        else if (pushed == 'DEL') {
            // All Clear
            inputLabel.innerHTML = inputLabel.innerHTML.substring(0, inputLabel.innerHTML.length - 1)
             
        }
        else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;   
            }
        }
    }