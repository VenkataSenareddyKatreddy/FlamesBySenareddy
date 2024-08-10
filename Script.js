//checking for first name
function check1() {
    var nameValue = document.getElementById("input1").value.trim();
    if (nameValue === "") {
        displayMessage(0,'Name cannot be empty');
        return false;
    }
    var a = nameValue.split(" ");
    
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (!/^[a-zA-Z]$/.test(a[i].charAt(j))) {
                displayMessage(0,'Name should contain alphabets only');
                return false;
            }
        }
    }
    displayMessage(1,'Valid name');
    return true;
}

function displayMessage(val,message) {
    var checkingElement = document.getElementById("checking1");
    var className = val === 0 ? 'danger' : 'success';
    checkingElement.innerHTML = `<span class="${className}">${message}</span>`;
    setTimeout(() => {
        checkingElement.innerHTML = '';
    }, 3000);
}
//checking for second name 
function check2() {
    var nameValue = document.getElementById("input2").value.trim();
    if (nameValue === "") {
        displayMessage1(0,'Name cannot be empty');
        return false;
    }
    var a = nameValue.split(" ");
    
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (!/^[a-zA-Z]$/.test(a[i].charAt(j))) {
                displayMessage1(0,'Name should contain alphabets only');
                return false;
            }
        }
    }
    displayMessage1(1,'Valid name');
    return true;
}

function displayMessage1(val,message) {
    var checkingElement = document.getElementById("checking2");
    var className = val === 0 ? 'danger' : 'success';
    checkingElement.innerHTML = `<span class="${className}">${message}</span>`;
    setTimeout(() => {
        checkingElement.innerHTML = '';
    }, 3000);
}




function calc(event) {
    event.preventDefault();
    var isValidName1 = check1();
    var isValidName2 = check2();
    if (isValidName1 && isValidName2) {
        //alert("Directed to the Output page");
        window.location.href = 'Page1.html';
        var nameValue1 = document.getElementById("input1").value.trim();
        var nameValue2 = document.getElementById("input2").value.trim();
        localStorage.setItem('names',JSON.stringify([nameValue1,nameValue2]));
    } else {
        alert("Please check the input");
    }
}
