

// function func(){
//     let paraEle=document.getElementById("section");
//     paraEle.innerHTML="See I have changed";
//     paraEle.style.color="green";
// }

// document.getElementsByClassName("btn")[0].addEventListener("click", changeColor);

// function changeColor(){
//     let liEle=document.getElementsByClassName("list")[0];
//     liEle.style.color="lightgreen";
// }

// let liEle=document.getElementsByTagName("li");
// console.log(liEle.length);

// console.log(document.getElementsByTagName("li")[0]);

// let ele=document.querySelectorAll("ol li");
// let firstEle=ele[0].innerHTML;
// console.log(firstEle);

// function clear(){
//     document.getElementById("first").value="";
//     document.getElementById("second").value="";
// }

// document.getElementById("add").addEventListener("click", sum);

// function sum(){
//     let ele1=document.getElementById("first").value;
//     console.log(ele1);
//     let ele2=document.getElementById("second").value;
//     console.log(ele2);
//     let result=parseInt(ele1)+parseInt(ele2);
//     console.log(result);

// }

// document.getElementById("sub").addEventListener("click", function (){
//     let num1=document.getElementById("first").value;
//     let num2=document.getElementById("second").value;
//     let ans=parseInt(num1) - parseInt(num2);
//     let res=document.getElementsByClassName("output")[0];
//     res.innerHTML=ans;
//     clear();
// });

document.getElementsByClassName("btn")[0].addEventListener("click", addtoList);

function addtoList(){
    let input=document.getElementById("text").value;
    console.log(input);

    let textEle=document.createElement("li");
    let nodeEle=document.createTextNode(input);
    textEle.appendChild(nodeEle);

    let olEle=document.getElementsByClassName("list")[0];
    olEle.appendChild(textEle);
}