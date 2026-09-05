const pack = document.querySelector("#pack");
document.querySelectorAll(".product").forEach(btn=>{
  btn.addEventListener("click",()=>{
    pack.value=btn.dataset.pack;
    document.querySelector(".order").scrollIntoView({behavior:"smooth"});
  });
});
document.querySelector("#orderForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const order="PS-"+Date.now().toString().slice(-7);
  const result=document.querySelector("#result");
  result.hidden=false;
  result.innerHTML=`<b>Pedido ${order} creado.</b><br>Paquete: ${data.get("pack")}<br>UID: ${data.get("uid")}<br><br>⚠️ Demo: todavía no se cobra ni se realiza la recarga. El siguiente paso es conectar una pasarela de pago y un proveedor autorizado mediante API.`;
});