//tealium universal tag - utag.34 ut4.0.201608030738, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim="&";u.kvp_delim="=";u.domain="my.orbitz.com/pub";u._a_="";u._c_="";u._ri_="";u._ei_="";u.action="once";u.base_url="//"+u.domain+"/rf?";u.map={"NonUsFlag":"INTERNATIONAL","countryCode":"COUNTRYCODE","device.device.type":"DEVICETYPE","guid":"ANONID","state":"STATEPROVINCENAME","city":"CITYNAME","checkout.trl":"LOCATORCODE","lob.domain":"BOOKORDER_CONTEXTCODE","inboundOperatingAirline":"AIRSUPPLIER","starRating":"HOTELRATING","checkInDate":"STARTDATE","checkOutDate":"ENDDATE","guestRating":"GUESTSATRATING","hotelId":"ONEG_ID","rewardsStatus.membershipTier":"MEMBERSTATUS","responsysRI":"_ri_","quantityField":"TOTALQUANTITY","numberOfRooms":"NUMBEROFROOMS","cheapestFare":"LOWESTPRICESHOWN","siteName":"LOCATION_HOSTNAME","childrenCount":"NUMBEROFCHILDREN","adults":"NUMBEROFADULTS","lengthOfStay":"LENGTHOFSTAY","regionId":"CITYCODE","country":"COUNTRYNAME","aspp.channelTracking.channel":"CHANNELTYPEFROMCOOKIE","aspp.channelTracking.marketingcode":"PARAMVALUEFROMCOOKIE","pageType":"PAGEID","numberOfGuests":"TOTALNUMBEROFGUESTS,TOTALAIRTICKETS","tuid":"MEMBER_UUID,MEMBERID","originAirportCode":"ORIGIN","destinationAirportCode":"DESTINATION","stateProvinceCode":"STATE_PROVINCE_CODE","checkout.cartTotal.amount":"TOTAL_PURCHASE_AMOUNT","tripType":"TRIP_TYPE","packageType":"PACKAGE_TYPE"};u.extend=[];u.send=function(a,b,c,d,e,f,g){if(u.ev[a]||typeof u.ev.all!="undefined"){c=[];g=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].toUpperCase()==e[f]){g.push(e[f]+"="+b[d])}else{u[e[f]]=b[d]}}}}
var _cquan=b._cquan?b._cquan.slice(0):[];if(u._a_){c.push("_a_="+u._a_);}
if(u._c_){c.push("_c_="+u._c_);}
if(u._ri_){c.push("_ri_="+u._ri_);}
if(u._ei_){c.push("_ei_="+u._ei_);}
if(u.action=="once"){c.push("action="+u.action);}
if(b._corder||u.OrderID){c.push("OrderID="+(u.OrderID?u.OrderID:b._corder));c.push("OrderTotal="+(u.OrderTotal?u.OrderTotal:b._ctotal));u.items=0;for(f=0;f<_cquan.length;f++){u.items+=parseInt(_cquan[f]);}
c.push("numItems="+(u.numItems?u.numItems:u.items));c.push("customerID="+(u.customerID?u.customerID:b._ccustid));if(typeof u.Type=="undefined"){u.Type=b._ctype;}
c.push("Type="+((u.Type)?u.Type:"purchase"));}
if(g.length>0){c.push(g.join("&"));}
u.img=new Image();u.img.src=u.base_url+c.join(u.qsp_delim);}};try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('34','expedia.orbitz');}catch(e){}
