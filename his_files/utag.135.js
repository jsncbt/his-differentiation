//tealium universal tag - utag.135 ut4.0.201608160426, Copyright 2016 Tealium.com Inc. All Rights Reserved.
window.taq=window.taq||function(){}
window.taq.queue=window.taq.queue=[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"ta_track_action":"track_action","checkInDate":"travel_start_date","checkOutDate":"travel_end_date","utagPageName":"page_type","ta_user_segment":"user_segment","checkout.cartTotal.amount":"gbv"};u.extend=[function(a,b,c,d,e,f,g){d=b['utagPageName'];if(typeof d=='undefined')return;c=[{'checkout.payment':'START_BOOKING'},{'checkout.info':'START_BOOKING'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){g=new RegExp(f,'i');if(g.test(d)){b['ta_track_action']=c[e][f];m=true};};if(m)break};if(!m)b['ta_track_action']='PAGEVIEW';},function(a,b){var taTestGrp=function(){var taCustAud;var guidParse=typeof b['context.user.guid']!="undefined"&&b['context.user.guid']!=""?parseInt(b['context.user.guid'].split("-")[0],16)%191:"";if(guidParse!=""){if(guidParse>=0&&guidParse<=2){taCustAud='T1';}
if(guidParse>=3&&guidParse<=49){taCustAud='A1';}
if(guidParse>=50&&guidParse<=96){taCustAud='A2';}
if(guidParse>=97&&guidParse<=143){taCustAud='B1';}
if(guidParse>=144&&guidParse<=190){taCustAud='B2';}}else{taCustAud='';}
return taCustAud;}
b.ta_user_segment=taTestGrp();},function(a,b){try{if(b['utagPageName'].toString().toLowerCase().indexOf('checkout.confirmation'.toLowerCase())>-1){b['ta_track_action']='BOOKING_CONFIRMATION'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"travel_start_date":"","travel_end_date":"","track_action":"","is_member":"","pixel_id":"","page_type":"","user_segment":"","base_url":"//www.tripadvisor.com/js3/taevents-c.js"
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
if(/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){return}
u.data.pixel_id=u.data.pixel_id||"188527216";u.data.track_action=u.data.track_action||"PAGEVIEW";u.data.travel_start_date=u.data.travel_start_date||"";u.data.travel_end_date=u.data.travel_end_date||"";u.data.page_type=u.data.page_type||"";u.data.user_segment=u.data.user_segment||"";u.data.gbv=u.data.gbv||"";u.loader_cb=function(){u.initialized=true;taq('init',u.data.pixel_id);taq('track',u.data.track_action,{'travel_start_date':u.data.travel_start_date,'travel_end_date':u.data.travel_end_date,'page_type':u.data.page_type,'user_segment':u.data.user_segment,'gbv':u.data.gbv});};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_135'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("135","expedia.orbitz");}catch(error){utag.DB(error);}
