function statup()
{
var a=document.getElementById("heading")

// document.write(a);
a.style.color="red";
// a.style.fontSize="80px"
}

// function validation()
// {
//     var fname=document.getElementById("fname")
//     if(fname==null||fname==""){
//         alert("Please Enter Your Name")
//         return false
//     }
    
// }

function passcomp(){
    let c_pass=document.getElementById("cpass").value;
    let pass_1=document.getElementById("pass").value;
    if(c_pass==pass_1){
        document.getElementById("span1").innerHTML="Your password Is Correct";
    }
    else{
        let z=document.getElementById("span1").innerHTML="Your password Is INcorrect";
    }
    
}

function myfun(){
    let m=document.getElementById("male");
    let f=document.getElementById("female");
    let o=document.getElementById("others");

    if(m.checked)
        alert("Your Gender Is Male");
    else if(f.checked)
        alert("Your Gender Is Female");
    else if(o.checked)
        alert("Your Gender Is Others");
    else
    alert("Choose Your Gender");

    
}
