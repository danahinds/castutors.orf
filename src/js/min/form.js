document.querySelector("form").addEventListener("submit",a);var a=e=>{e.preventDefault();let t=document.getElementById("contact-us"),o=new FormData(t);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(o).toString()}).then(()=>console.log("Form successfully submitted")).catch(n=>alert(n))};
//# sourceMappingURL=form.js.map
