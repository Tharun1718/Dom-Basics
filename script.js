

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

// document.getElementsByClassName("btn")[0].addEventListener("click", addtoList);

// function addtoList(){
//     let input=document.getElementById("text").value;
//     console.log(input);

//     let textEle=document.createElement("li");
//     let nodeEle=document.createTextNode(input);
//     textEle.appendChild(nodeEle);

//     let olEle=document.getElementsByClassName("list")[0];
//     olEle.appendChild(textEle);
// }

// setTimeout(timer,3000);
// function timer(){
//     console.log("called after 3000");
// }
// setTimeout(()=>{
//     console.log("called after 2000");
// },2000);

// setTimeout((a,b)=>{
//     console.log(a+b)
// },1000,20,20);

// setTimeout(add,3000,10,12);
// function add(a,b) {
//     console.log(a+b);
// }

// let time=setTimeout(()=>{
//     let ele=document.getElementById("box");
//     ele.innerHTML = "See I have Changed";
//     ele.style.color="lightgreen";
// },4000);

// function stop(){
//     clearTimeout(time);
//     console.log("anim stopped");
// }

//     let count=0;
// let change=setInterval(()=>{
//     count++;
//     let ele=document.getElementById("box");
//     ele.innerHTML = `See I have Changed ${count} times`;
//     ele.style.color="lightgreen";
// },2000);

// function stop(){
//     clearInterval(change);
//     console.log("interval stopped");
// }

// let timeEle = setInterval(timer,1000);
// let count = 11;
// function timer(){
//     count--;
//     let res=document.getElementById("output");
//     res.innerText = count;
//     if(count == 1){
//         clearInterval(timeEle);
//         res.innerText="HAPPY DAY";
//     }
// }
// let count = 11;
// let timeEle = setInterval(()=>{
//     count--;
//     let res=document.getElementById("output");
//     res.innerText = count;
//     if(count == 0){
//         clearInterval(timeEle);
//         res.innerText="HAPPY DAY";
//     }
// },1000);
// let count = 11;
// for(let i=1; i<=count; i++){
//     setTimeout(()=>{
//         count--;
//         let res=document.getElementById("output");
//         res.innerText = count;
//         if(i== 11){
//             res.innerText = "HAPPY DAY";
//         }
//     },1000*i);
// }

// alert("Welcome");

// confirm("Are you sure you want to continue");

// let ans=prompt("Are you above age 18?");
// console.log(ans);

let users= [
    {
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
        gender: "male",
        ip_address: "123.654.123",
        id: 1
    },
    {
        first_name: "Dhoni",
        last_name: "Ms",
        email:"ms@gmail.com",
        gender: "male",
        ip_address: "123.654.265",
        id: 2
    },
    {
        first_name: "Smrithi",
        last_name: "Mandanna",
        email:"mandanna@gmail.com",
        gender: "female",
        ip_address: "435.651.723",
        id: 3
    }
]

let allBtn = document.querySelector("#all-emp-btn");
allBtn.addEventListener("click", ()=>{
    allEmpData(users);
});

let maleBtn = document.querySelector("#male-emp-btn");
maleBtn.addEventListener("click", ()=>{
    let maleUsers=users.filter((usr)=>{
        return usr.gender === "male";
    })
    allEmpData(maleUsers);
    
});

let femaleBtn = document.querySelector("#female-emp-btn");
femaleBtn.addEventListener("click", ()=>{
    let femaleUsers=users.filter((usr)=>{
        return usr.gender === "female";
    })
    allEmpData(femaleUsers);    
});

let searchEle = document.querySelector("#search-input");
searchEle.addEventListener("keydown",()=>{
    let textEntered = searchEle.value;
    let arrayEle=[];
    if( textEntered !== ""){
        arrayEle = users.filter((usr)=>{
            return usr.first_name.toLowerCase().includes(textEntered.toLowerCase())
            || usr.last_name.toLowerCase().includes(textEntered.toLowerCase());
            
        })
        allEmpData(arrayEle);
    }else{
        allEmpData(users);
    }
});

let allEmpData = (users)=>{
    let tbody = document.querySelector("#table-body");
    let trow = "";
    for(let usr of users) {
        trow += 
        `<tr>
         <td>${usr.first_name}</td>
         <td>${usr.last_name}</td>
         <td>${usr.email}</td>
         <td>${usr.gender}</td>
         <td>${usr.ip_address}</td>
         <td>${usr.id}</td>
        </tr>`
        tbody.innerHTML = trow;
    }
};
