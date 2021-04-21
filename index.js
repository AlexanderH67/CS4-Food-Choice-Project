
function displayRadioValue() {
            var ele = document.getElementsByName('meat');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result").innerHTML
                        = "meat: "+ele[i].value;
            }
        }
