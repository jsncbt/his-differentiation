//tealium universal tag - utag.36 ut4.0.201606090727, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var criteo_q=criteo_q||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState==='complete'||this.readyState==='loaded')&&!b.hFlag){b.hFlag=1;o.cb();}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb();}};}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.known_params={"product":1,"order_id":1,"transaction_id":1,"product.id":1,"product.price":1,"product.quantity":1,"event":1,"requiresDOM":1,"account":1,"keywords":1,"new_customer":1,"deduplication":1,"site_type":1,"email":1,"login":1,"hashed_email":1,"hashed_login":1};u.isEmpty=function(value){if((value==="")||(value.constructor===Array&&value.length===0)){return true;}else{return false;}};u.prep=function(value,alwaysConvert){if(typeof value==="string"&&(alwaysConvert||value.indexOf(",")>0)){value=value.split(",");}
return value;};u.map={"checkInDate":"checkin_date","checkOutDate":"checkout_date","checkout.cartTotal.amount.array":"product.price","quantityField_array":"product.quantity","criteoProductIds":"product.id","device.device.type":"site_type","criteoEventName":"event","checkout.trl":"order_id"};u.extend=[function(a,b){try{if(b['utagPageName'].toString().toLowerCase().indexOf('page.Hotels.Search'.toLowerCase())>-1||b['utagPageName'].toString().toLowerCase().indexOf('page.Hotel-Search'.toLowerCase())>-1){b['criteoEventName']='viewList,viewSearch';b['criteoProductIds']=b['firstThreeHotels.array']}}catch(e){utag.DB(e)}},function(a,b){try{if(b['utagPageName'].toString().toLowerCase().indexOf('page.Hotels.Infosite.Information'.toLowerCase())>-1){b['criteoEventName']='viewItem viewSearch';b['criteoProductIds']=b['hotelId_array']}}catch(e){utag.DB(e)}},function(a,b){try{if(b['utagPageName'].toString().toLowerCase().indexOf('page.Hotels.Checkout.Confirmation'.toLowerCase())>-1){b['criteoEventName']='trackTransaction';b['criteoProductIds']=b['hotelId_array']}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"base_url":"//static.criteo.net/js/ld/ld.js"||"//static.criteo.net/js/ld/ld.js","account":"15315","event":"viewList,viewSearch","deduplication":1,"new_customer":"","keywords":"","setData":{},"site_type":"d","email":[],"login":[],"hashed_email":[],"hashed_login":[],"order_id":"","product_id":[],"product_quantity":[],"product_unit_price":[]};var t_criteo_q=[];for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(!u.known_params[e[f]]){u.data.setData[e[f]]=b[d];}else{u.data[e[f]]=b[d];}}}}
u.data.order_id=u.data.order_id||b._corder||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.transaction_id=u.data.transaction_id||u.data.order_id;u.data.product_id=u.data["product.id"]||u.data.product_id;u.data.product_unit_price=u.data["product.price"]||u.data.product_unit_price;u.data.product_quantity=u.data["product.quantity"]||u.data.product_quantity;if(!u.isEmpty(u.data.account)){t_criteo_q.push({"event":"setAccount","account":u.prep(u.data.account,false)});}else{utag.DB("error:36:Criteo Account ID Missing");return;}
if(!u.isEmpty(u.data.site_type)){t_criteo_q.push({"event":"setSiteType","type":u.data.site_type});}
if(!u.isEmpty(u.data.email)){t_criteo_q.push({"event":"setEmail","email":u.prep(u.data.email,true)});}
if(!u.isEmpty(u.data.login)){t_criteo_q.push({"event":"setLogin","login":u.prep(u.data.login,true)});}
if(!u.isEmpty(u.data.hashed_email)){t_criteo_q.push({"event":"setHashedEmail","email":u.prep(u.data.hashed_email,true)});}
if(!u.isEmpty(u.data.hashed_login)){t_criteo_q.push({"event":"setHashedLogin","login":u.prep(u.data.hashed_login,true)});}
for(d in u.data.setData){var c={"event":"setData"};c[d]=u.data.setData[d];t_criteo_q.push(c);}
if(u.data.transaction_id){f={event:"trackTransaction",id:u.data.transaction_id,new_customer:u.data.new_customer,deduplication:u.data.deduplication,product:[]};for(d=0;d<u.data.product_id.length;d++){f.product.push({id:u.data.product_id[d],price:u.data.product_unit_price[d],quantity:u.data.product_quantity[d]});}
t_criteo_q.push(f);}
if(u.data.event.indexOf("viewHome")>-1){t_criteo_q.push({event:"viewHome"});}
if(u.data.event.indexOf("viewItem")>-1){u.data.product_id=u.data["product.id"]||u.data.product_id[0];t_criteo_q.push({event:"viewItem",product:u.data.product_id});}
if(u.data.event.indexOf("viewList")>-1){t_criteo_q.push({event:"viewList",product:u.data.product_id,keywords:u.data.keywords});}
if(u.data.event.indexOf("viewBasket")>-1){f={event:"viewBasket",product:[]};for(d=0;d<u.data.product_id.length;d++){f.product.push({id:u.data.product_id[d],price:u.data.product_unit_price[d],quantity:u.data.product_quantity[d]});}
t_criteo_q.push(f);}
if(u.data.event.indexOf("viewSearch")>-1){if(utag_data['checkOutDate']!=undefined&&utag_data['checkInDate']!=undefined){t_criteo_q.push({event:"viewSearch",checkin_date:utag_data['checkInDate'],checkout_date:utag_data['checkOutDate']});}else{t_criteo_q.push({event:"viewSearch"});}}
criteo_q.push(t_criteo_q);u.loader_cb=function(){u.initialized=true;};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_36'});}
}};utag.o[loader].loader.LOAD(id);}('36','expedia.orbitz'));}catch(error){utag.DB(error);}
