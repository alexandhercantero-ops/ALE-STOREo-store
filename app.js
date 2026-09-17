const products=[
 {id:1,game:"Free Fire",icon:"🔥",name:"110 Diamantes",cost:7000,price:10000,info:"ID del jugador"},
 {id:2,game:"Free Fire",icon:"🔥",name:"341 Diamantes",cost:19000,price:27000,info:"ID del jugador"},
 {id:3,game:"Free Fire",icon:"🔥",name:"572 Diamantes",cost:30000,price:42000,info:"ID del jugador"},
 {id:4,game:"Fortnite",icon:"🟣",name:"1.000 Pavos",cost:55000,price:65000,info:"Método según proveedor"},
 {id:5,game:"Fortnite",icon:"🟣",name:"2.800 Pavos",cost:145000,price:170000,info:"Método según proveedor"},
 {id:6,game:"Roblox",icon:"🟩",name:"400 Robux",cost:30000,price:39000,info:"Método según proveedor"}
];
let selected=null;
const money=n=>new Intl.NumberFormat("es-PY",{style:"currency",currency:"PYG",maximumFractionDigits:0}).format(n);

function renderProducts(){
 const q=(document.getElementById("search")?.value||"").toLowerCase();
 document.getElementById("products").innerHTML=products.filter(p=>(p.name+p.game).toLowerCase().includes(q)).map(p=>`
 <article class="product"><div class="game">${p.icon}</div><div class="muted">${p.game}</div><h3>${p.name}</h3><p>${p.info}</p><div class="price">${money(p.price)}</div><button onclick="openCheckout(${p.id})">Comprar</button></article>`).join("");
}
function openCheckout(id){
 selected=products.find(p=>p.id===id);
 showModal(`<div class="eyebrow">CHECKOUT</div><h2>${selected.icon} ${selected.name}</h2>
 <p class="muted">${selected.game} · ${money(selected.price)}</p>
 <div class="checkout-row"><div class="field"><label>Tu nombre</label><input id="buyer" placeholder="Nombre"></div><div class="field"><label>WhatsApp / contacto</label><input id="contact" placeholder="+595 ..."></div></div>
 <div class="field"><label>${selected.info}</label><input id="player" placeholder="Ingresa el dato solicitado"></div>
 <div class="field"><label>Método de pago</label><select id="pay"><option>Pago online</option><option>Transferencia</option></select></div>
 <button class="btn primary" style="width:100%;margin-top:8px" onclick="submitOrder()">Continuar al pago · ${money(selected.price)}</button>
 <p class="muted" style="font-size:12px;margin-top:15px">Demo visual: el pago y la API se conectarán en la siguiente etapa.</p>`);
}
function submitOrder(){
 const code="RG-"+Math.floor(100000+Math.random()*900000);
 showModal(`<div class="eyebrow">PEDIDO CREADO</div><h2>Pedido ${code}</h2><p>Estado: <b style="color:#9e8bff">Pendiente de pago</b></p><p class="muted">Cuando conectemos la pasarela de pago y la API del proveedor, este paso podrá validar el pago y lanzar la recarga automáticamente.</p><button class="btn primary" onclick="closeModal()">Volver a la tienda</button>`);
}
function openAdmin(){
 showModal(`<div class="eyebrow">ADMINISTRACIÓN</div><h2>Panel de control</h2>
 <div class="admin-grid"><div class="stat"><small>Ventas del mes</small><strong>Gs. 1.240.000</strong></div><div class="stat"><small>Pedidos</small><strong>48</strong></div><div class="stat"><small>Margen estimado</small><strong>Gs. 285.000</strong></div></div>
 <h3>Pedidos recientes</h3><table class="table"><tr><th>Pedido</th><th>Producto</th><th>Estado</th><th>Total</th></tr>
 <tr><td>RG-829341</td><td>341 Diamantes</td><td>Completado</td><td>${money(27000)}</td></tr>
 <tr><td>RG-829122</td><td>1.000 Pavos</td><td>Procesando</td><td>${money(65000)}</td></tr>
 <tr><td>RG-828992</td><td>400 Robux</td><td>Completado</td><td>${money(39000)}</td></tr></table>
 <h3 style="margin-top:25px">Configuración</h3><p class="muted">Productos · Precios · Costos API · Saldo proveedor · Pagos · Webhooks · Usuarios administradores</p>`);
}
function showModal(content){document.getElementById("modalContent").innerHTML=content;document.getElementById("modal").classList.remove("hidden")}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
renderProducts();