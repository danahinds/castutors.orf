document.querySelector("form").addEventListener("submit",r);var r=e=>{e.preventDefault();let t=document.getElementById("contact-us"),o=new FormData(t);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(o).toString()}).then(()=>console.log("Form successfully submitted")).catch(n=>alert(n))};
//# sourceMappingURL=index.js.map
