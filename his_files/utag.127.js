//tealium universal tag - utag.127 ut4.0.201608120710, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
if(utag.ut.merge===undefined){u.merge=function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d];}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined"){a[d]=b[d];}}}};}else{u.merge=utag.ut.merge;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.event_lookup={"ViewContent":{obj:"vc","map":["value","currency","content_name","content_ids","content_category"]},"Search":{obj:"search","map":["value","currency","content_category","content_ids"]},"AddToCart":{obj:"cart","map":["value","currency","content_name","content_ids"]},"AddToWishlist":{obj:"wish","map":["value","currency","content_name","content_ids"]},"InitiateCheckout":{obj:"cout","map":["value","currency","content_name","content_ids","num_items"]},"AddPaymentInfo":{obj:"payment","map":["value","currency","content_category","content_ids"]},"Purchase":{obj:"purch","map":["value","currency","content_name","content_ids","num_items"]},"Lead":{obj:"lead","map":["value","currency","content_name","content_category"]},"CompleteRegistration":{obj:"reg","map":["value","currency","content_name"]},"Conversion":{obj:"cnv","map":["value","currency"]},"Custom":{obj:"cust","map":[]},"PageView":{obj:"page","map":[]}};u.std_params={"value":function(g,event){if(g.value===undefined||g.value===""){if(event==="ViewContent"||event==="AddToCart"){g.value=u.data.ecom.product_unit_price;}else{g.value=u.data.ecom.order_subtotal;}}
g.value=u.val(g.value);},"currency":function(g){if(!g.currency){g.currency=u.data.ecom.order_currency;}},"content_name":function(g){if(!g.content_name){g.content_name=u.data.ecom.product_name;}
g.content_name=u.val(g.content_name);},"content_ids":function(g){var pn_s=utag.data['utagPageName'].toLowerCase()
if(typeof utag.data['utagPageName']!="undefined"&&(pn_s.indexOf('hotel')<0)&&(pn_s.indexOf('fhc.')<0)&&(pn_s.indexOf('package')<0)&&(pn_s.indexOf('lx')<0)){g.content_ids="";}else{if(!g.content_ids){g.content_ids=utag.data.hotelId}
if(u.typeOf(g.content_ids)!=="array"){g.content_ids=g.content_ids.toString().split(/\s*,\s*/);}}},"content_category":function(g){if(!g.content_category){g.content_category=u.data.ecom.product_category;}
g.content_category=u.val(g.content_category);},"num_items":function(g){if(!g.num_items&&u.data.calc_items==="true"){g.num_items=u.calc_items(u.data.ecom.product_quantity);}}};u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.val=function(value){return u.typeOf(value)==="array"?value[0]:value;};u.remove_empty=function(a){var b,t;for(b in utag.loader.GV(a)){t=u.typeOf(a[b]);if(t==="object"){u.remove_empty(a[b]);if(utag.ut.isEmptyObject(a[b])){try{delete a[b];}catch(e){a[b]=undefined;}}}else if(!((a[b]===0||a[b]===false)?!0:(t==="array"&&a[b].length===0)?!1:!!a[b])){try{delete a[b];}catch(e){a[b]=undefined;}}}
return a;};u.calc_items=function(quan){var q,i=0;for(q=0;q<quan.length;q++){i+=parseInt(quan[q]);}
return i;};u.map={"fb_cust_pixel_id":"cust_pixel","device.device.type":"homepage.device_type,search.device_type,purch.device_type,vc.device_type","destinationId":"search.city","city":"vc.city,search.city,cout.city,purch.city","country":"purch.country,search.country,vc.country,cout.country","stateProvinceCode":"purch.region,search.region,vc.region,cout.region","regionId":"purch.region_id,vc.region_id,search.region_id,cout.region_id","lengthOfStay":"purch.length_of_stay","numberOfGuests":"purch.number_of_people","originAirportCode":"purch.origin_airport,vc.origin_airport,search.origin_airport,cout.origin_airport","destinationAirportCode":"purch.destination_airport,vc.destination_airport,search.destination_airport,cout.destination_airport","carType":"purch.car_type","checkout.cartTotal.amount":"purch.value","checkInDate":"purch.departing_departure_date,search.departing_departure_date,vc.departing_departure_date,cout.departing_departure_date","checkOutDate":"purch.returning_departure_date,vc.returning_departure_date,cout.returning_departure_date,search.returning_departure_date","starRating":"purch.star_rating","checkout.trl":"purch.order_id","pricePerHotel":"vc.price","siteName":"search.pos,vc.pos,purch.pos","currencyCode":"purch.currency,cout.currency","lob.domain":"homepage.domain_lob,search.domain_lob,vc.domain_lob,purch.domain_lob,cout.domain_lob","fb_event":"evt_list","fb_content_type":"vc.content_type,search.content_type,purch.content_type,cout.content_type","fb_custom_event_name":"Homepage.event","checkout.cartTotal.netValue":"purch.value","hotelName":"purch.hotel_brand","rewardsStatus.membershipTier":"purch.loyalty_tier","guid":"search.external_id,vc.external_id,purch.external_id","hotelId_array":"search.content_ids","destination":"search.destination,vc.destination,purch.destination,cout.destination","origin":"vc.origin,search.origin","adults":"search.num_adults,vc.num_adults,cout.num_adults,purch.num_adults","childrenCount":"search.num_children,vc.num_children,cout.num_children,purch.num_children"};u.extend=[function(a,b){if(typeof b['hotelId']!='undefined'){b['hotelId']=b["hotelId"].toString();}
var lob=typeof b['lob.domain']!="undefined"
b['lob.domain']=b['lob.domain']||""
var lob_s=b['lob.domain'].toString().toLowerCase()
var pn=typeof b['utagPageName']!="undefined"
b['utagPageName']=b['utagPageName']||""
var pn_s=b['utagPageName'].toString().toLowerCase()
if(lob&&lob_s.indexOf('hotel'.toLowerCase())>-1){u.map['hotelId']="vc.content_ids,cout.content_ids, purch.content_ids";u.map['checkInDate']="vc.checkin_date,search.checkin_date,cout.checkin_date,purch.checkin_date";u.map['checkOutDate']="vc.checkout_date,search.checkout_date,cout.checkout_date,purch.checkout_date";b['fb_content_type']=['product','hotel'];if(pn&&pn_s.indexOf('search')>-1){b['destination']=b['entity.hotels.search.region']}else if(pn&&pn_s.indexOf('infosite')>-1){b['destination']=b['entity.hotels.listOfHotels.0.hotelRegion']}else if(pn&&pn_s.indexOf('checkout')>-1){b['destination']=b['entity.checkout.hotel.hotelRegion']}}else if(lob&&lob_s.indexOf('air'.toLowerCase())>-1){u.map['city']="vc.destination_city,search.destination_city,purch.destination_city";u.map['stateProvinceCode']="vc.destination_region,search.destination_region,purch.destination_region";u.map['origin']="vc.origin,search.origin,purch.origin"
b['fb_content_type']=['flight'];if(pn&&pn_s.indexOf('ratedetails')>-1){b['destination']=b["entity.tripDetails.flightOffer.destinationAirportCityState"]
b['origin']=b["entity.tripDetails.flightOffer.originAirportCityState"]}else{b['destination']=b['destination'];b['origin']=b['entity.flightSearch.searchParameters.departureAirportCityState'];}
if(pn&&pn_s.indexOf('checkout')>-1){b['destination']=b["entity"]["checkout"]["flightOffer"]["destinationAirportCityState"]?b["entity"]["checkout"]["flightOffer"]["destinationAirportCityState"]:b["entity.checkout.flightOffer.destinationAirportCityState"]
b['origin']=b["entity"]["checkout"]["flightOffer"]["originAirportCityState"]?b["entity"]["checkout"]["flightOffer"]["originAirportCityState"]:b["entity.checkout.flightOffer.originAirportCityState"]}}else if(lob&&lob_s.indexOf('car'.toLowerCase())>-1){u.map['city']="vc.destination,search.destination,cout.destination,purch.destination";b['fb_content_type']=['route'];}else if(lob&&lob_s.indexOf('lx'.toLowerCase())>-1){u.map['activityStartDate']="vc.departing_departure_date,search.departing_departure_date,cout.departing_departure_date,purch.departing_departure_date";if(pn&&pn_s.indexOf('search'.toLowerCase())>-1){u.map['firstThreeActivityIds']="search.content_ids"
b['destination']=b["entity.activities.activitySearchParameters.destination"]}else{u.map['activityId']="vc.content_ids,cout.content_ids,purch.content_ids"}
if(pn&&pn_s.indexOf('infosite')>-1){b['destination']=b["entity.activities.activityInfo.activityDetail.destination"]}
b['fb_content_type']=['product','route'];}
if(pn&&pn_s.indexOf('page.Packages.Infosite.Information'.toLowerCase())>-1){u.map['hotelId']="vc.content_ids"}
b['destination']=typeof b['destination']!="undefined"&&b['destination']==""?" ":b['destination'];b['origin']=typeof b['origin']!="undefined"&&b['origin']==""?" ":b['origin'];if(pn&&pn_s.indexOf('Hotel-Search'.toLowerCase())>-1){b['hotelId_array']=b.hotelId.split("|");}
if(pn&&pn_s.indexOf('fc'.toLowerCase())>-1&&pn_s.indexOf('package').toLowerCase()>-1){b['fb_content_type']=['product','flight','route'];}
else if(pn&&(pn_s.indexOf('page.Package-Search'.toLowerCase())>-1)||(pn_s.indexOf('fh'.toLowerCase())>-1&&pn_s.indexOf('package'.toLowerCase())>-1)||(pn_s.indexOf('page.Packages.Infosite.Information'.toLowerCase())>-1)||(pn_s.indexOf('page.Package.Checkout.Info'.toLowerCase())>-1)||(pn_s.indexOf('page.Package.Checkout.Confirmation'.toLowerCase())>-1)){u.map['hotelId']="vc.content_ids,cout.content_ids, purch.content_ids";b['fb_content_type']=['product','hotel','flight'];}
else if(pn&&pn_s.indexOf('fhc'.toLowerCase())>-1&&pn_s.indexOf('package'.toLowerCase())>-1){u.map['hotelId']="vc.content_ids,cout.content_ids, purch.content_ids";b['fb_content_type']=['product','hotel','flight','route'];}
else if(pn&&pn_s.indexOf('hc'.toLowerCase())>-1&&b['utagPageName'].indexOf('package'.toLowerCase())>-1){u.map['hotelId']="vc.content_ids,cout.content_ids, purch.content_ids";b['fb_content_type']=['product','hotel','route'];}
},function(a,b,c,d,e,f,g){d=b['utagPageName'];if(typeof d=='undefined')return;c=[{'ratedetails':'ViewContent'},{'infosite':'ViewContent'},{'homepage':'Homepage'},{'launch_':'Homepage'},{'search':'Search'},{'checkout.info':'InitiateCheckout'},{'checkout.payment':'InitiateCheckout'},{'checkout.confirmation':'Purchase'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){g=new RegExp(f,'i');if(g.test(d)){b['fb_event']=c[e][f];m=true};};if(m)break};},function(a,b){if(typeof b['ut.profile']!="undefined"&&b['ut.profile']!="travelocity"&&b['ut.profile']!="main"&&b['ut.profile']!="wotif"&&b['ut.profile']!="lastminute"&&b['ut.profile']!="airasiago"&&b['ut.profile']!="ebookers"&&b['ut.profile']!="mrjet"){return false;}},function(a,b){try{if(1){b['FB.Log_type']='click'}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b['track_attribution']='false'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g,h,evt=[];u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//connect.facebook.net/en_US/fbevents.js","cust_pixel":"","conv_pixel":"2.0","page_view":"true","calc_items":"true","default_event":"None","custom_data":{},"custom_event":"","product_id":[],"product_name":[],"product_category":[],"product_unit_price":[],"product_quantity":[],"evt_list":[],"ecom":{},"track_attribution":"true","attribution":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){evt=evt.concat(u.map[d].split(","));}}}}
if(u.data.evt_list&&u.typeOf(u.data.evt_list)!=="array"){u.data.evt_list=u.data.evt_list.split(/\s*,\s*/);}
if(u.data.default_event!=="None"&&u.data.default_event!==""){u.data.evt_list.push(u.data.default_event);}
u.data.evt_list=u.data.evt_list.concat(evt);g=u.data.ecom;g.order_id=u.data.order_id||b._corder||"";g.order_subtotal=u.data.order_subtotal||b._csubtotal||"";g.order_currency=u.data.order_currency||b._ccurrency||"";if(u.data.product_name.length===0&&b._cprodname!==undefined){g.product_name=b._cprodname.slice(0);}else{g.product_name=u.data.product_name;}
if(u.data.product_id.length===0&&b._cprod!==undefined){g.product_id=b._cprod.slice(0);}else{g.product_id=u.data.product_id;}
if(u.data.product_category.length===0&&b._ccat!==undefined){g.product_category=b._ccat.slice(0);}else{g.product_category=u.data.product_category;}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){g.product_unit_price=b._cprice.slice(0);}else{g.product_unit_price=u.data.product_unit_price;}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){g.product_quantity=b._cquan.slice(0);}else{g.product_quantity=u.data.product_quantity;}
u.data.track_attribution=u.data.track_attribution||"true";u.loader_cb=function(){var g={},i,j,_event,_track="track";if(u.data.evt_list.toString().indexOf("Purchase")===-1&&u.data.ecom.order_id){u.data.evt_list.push("Purchase");}
for(i=0;i<u.data.evt_list.length;i++){_event=u.data.evt_list[i];f=u.event_lookup[_event];c=f?f.map:[];f=f?f.obj:_event;g=u.data[f]=u.data[f]||{};for(j=0;j<c.length;j++){u.std_params[c[j]](g,_event);}
if(_event==="ViewContent"||_event==="AddToCart"){}else if(_event==="Lead"){if(!g.content_category){g.content_category='Quote';}}else if(_event==="Search"){if(!g.content_category){g.content_category='Product Search';}}else if(_event==="Conversion"&&u.data.conv_pixel){_event=u.data.conv_pixel;}else if(_event&&!u.event_lookup[_event]){_track="trackCustom";g=u.data[_event];}
if(g.value!==undefined){if(u.typeOf(g.value)==="array"){for(j=0;j<g.value.length;j++){g.value[j]=parseFloat(g.value[j])||0.00;}}else{g.value=parseFloat(g.value)||0.00;}}
if(_event){fbq(_track,_event,u.remove_empty(g));}}};u.callBack=function(){var data={};u.initialized=true;while(data=u.queue.shift()){u.data=data.data;u.loader_cb();}};if(u.initialized){u.loader_cb();}else{u.queue.push({"data":u.data});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":'utag_127'});!function(f,b,e){if(f.fbq)return;e=f.fbq=function(){e.callMethod?e.callMethod.apply(e,arguments):e.queue.push(arguments);};if(!f._fbq)f._fbq=e;e.push=e;e.loaded=!0;e.version='2.0';e.queue=[];e.agent='tlm';}(window,document);if(u.data.cust_pixel){u.data.cust_pixel=u.data.cust_pixel.split(/\s*,\s*/);for(var i=0;i<u.data.cust_pixel.length;i++){u.data.cust_pixel[i]=u.data.cust_pixel[i].replace(/^\s*/,"").replace(/\s*$/,"");fbq('init',u.data.cust_pixel[i]);}
if(u.data.page_view==="true"){fbq('track','PageView',u.data.page);}
if(u.data.track_attribution==="true"){var custom={};for(x in u.data.attribution){custom[x]=u.data.attribution[x];}
fbq("trackCustom","AttributionLog",custom);}}}}
}};utag.o[loader].loader.LOAD(id);}("127","expedia.orbitz"));}catch(error){utag.DB(error);}
