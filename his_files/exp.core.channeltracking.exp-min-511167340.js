if(window.location.hostname.indexOf("travelocity")>-1){var channelTrackingAlreadyLoaded=true;}if(typeof channelTrackingAlreadyLoaded=="undefined"){var channelTrackingAlreadyLoaded=true;var SEO_SOURCES={"www.google.":[true,null],"search.yahoo.com":[true,null],"wrs.yahoo.com":[true,null],"rc12.overture.com":[true,false],"bing.com/search":[true,null],"terra.es":[true,null],"ya.com":[true,null],"ricerca.virgilio.it":[true,null],"iltrovatore.it":[true,null],"213.215.201.230":[true,null],"orange.fr":[true,null],"lycos.":[true,null],"ask.com":[true,null],"search.aol.":[true,null],"askjeeves.":[true,null],"myway.com":[true,null],"altavista":[true,null],"baidu":[true,null],"daum.net":[true,null],"mywebsearch.com":[true,null],"naver.com":[true,null],"suche.web.de":[true,null],"mvirgilio.it":[true,null],"mywebsearch.com":[true,null],"yandex":[true,null]};var CHANNEL_TYPES="(AFF|OLA|EML|MDP|SEM|OFF|MSN|ICM|SEO|AFM)";if(typeof qUnitTestRun!=="undefined"&&qUnitTestRun!=null){var stub=sinon.stub(this,"getDomainLegacy",function(){return["://www.testDomain.com","www.","testDomain.com"];});}function tracking_array_contains(b,c){var a=b.length;while(a--){if(b[a]===c){return true;}}return false;}function ClearMediaCookieIfItIsTickSeparated(){var j="p1=";var a=document.cookie.indexOf(j);if(a==-1){var c="MediaCookie=";var i=document.cookie.indexOf(c);if(i>=0){var h=i+c.length+1;var d=document.cookie.indexOf(";",h);if(d==-1){d=document.cookie.length;}var f=h+1;if(f<d){var g=document.cookie.substring(h,f);if(g=="`"){var b=new Date(new Date().setTime(new Date().getTime()));var e=getDomainLegacy(location.href);if(e>""){e=e[2]?e[2]:"";document.cookie=c+"; expires="+b.toUTCString()+"; domain=."+e+"; path=/";}}}}}}function GetChannelSpecificCode(d,a){var c=/(?:cuid|tduid)=([^&]*)/i;var b=a;if(c.test(location.search)){b=c.exec(location.search)[1];}return b;}function getChannelSpecificConversionID(a){var b=/(?:mdpdtl|oladtl|afflid|icmdtl)=([^&]*)/i;var c="";if(b.test(location.search)){c=b.exec(location.search)[1];}else{c=a;}return c;}function IsLockedCode(b,d,c,a){return d&&d!=""&&d.slice(0,3)=="wpk"&&a.slice(0,3)!="wpk";}function GetASPPersistentCookie(){var c=document.cookie.indexOf("aspp=");var a=c+5;if(!c&&("aspp"!=document.cookie.substring(0,4))){return null;}if(c==-1){return null;}var b=document.cookie.indexOf(";",a);if(b==-1){b=document.cookie.length;}return document.cookie.substring(a,b);}function SetASPPersistentCookie(c){ExpireASPPCookieInParentDomain();var a=new Date(new Date().setTime(new Date().getTime()+5*365*24*60*60*1000));var b=getDomainLegacy(location.href);if(b>""){b=b[2]?b[2]:"";document.cookie="aspp="+c+"; expires="+a.toUTCString()+"; domain=."+b+"; path=/";}else{document.cookie="aspp="+c+"; expires="+a.toUTCString()+"; path=/";}if(b==null||b==""){if(typeof dctk!=="undefined"){dctk.loggingAdapter.logMessage("channelTrackingCookieDomainEmpty",["url="+encodeURIComponent(location.href),"cookies="+encodeURIComponent(document.cookie)]);}else{if(typeof expClientLogging!=="undefined"){expClientLogging.logMessage("channelTrackingCookieDomainEmpty",["url="+encodeURIComponent(location.href),"cookies="+encodeURIComponent(document.cookie)]);}}}}function getCookie(c){var a=RegExp("(?:^| |;)"+c+"=([^ ;]*)","i");var b=a.exec(document.cookie);if(b==null||b.length<=1){return null;}return b[1];}function setAspCookie(e,g){if(g==null||e==null){return;}var b=g?"aspp":"asps";var d=getDomain(location.href);var a=g?new Date(new Date().setTime(new Date().getTime()+5*365*24*60*60*1000)):null;var f="/";if(g){ExpireASPPCookieInParentDomain();}var c=b+"="+e+"; ";if(a!=null){c+="expires="+a.toUTCString()+"; ";}if(d>""&&d!="localhost"){c+="domain=."+d+"; ";}c+="path="+f;document.cookie=c;if(d==null||d==""){if(typeof dctk!=="undefined"){dctk.loggingAdapter.logMessage("channelTrackingCookieDomainEmpty",["url="+encodeURIComponent(location.href),"cookies="+encodeURIComponent(document.cookie)]);}else{if(typeof expClientLogging!=="undefined"){expClientLogging.logMessage("channelTrackingCookieDomainEmpty",["url="+encodeURIComponent(location.href),"cookies="+encodeURIComponent(document.cookie)]);}}}}function ExpireASPPCookieInParentDomain(){var a=new Date(new Date().setTime(new Date().getTime()-(5*365*24*60*60*1000)));var b=getDomainLegacy(location.href);b=b[2]?b[2]:"";if(b>""){document.cookie="aspp=; expires="+a.toUTCString()+"; path=/";}}function GetCookieValue(h,c,e){if(e==null){e=",";}h=h+"=";var g=document.cookie.indexOf(h);var a=g+h.length;if(!g&&(h!=document.cookie.substring(0,h.length))){return"";}if(g==-1){return"";}var b=document.cookie.indexOf(";",a);if(b==-1){b=document.cookie.length;}var f=document.cookie.substring(a,b);var d=f.split(e);if(d[c]!=null){return d[c];}else{return null;}}function GetP1CookieTpid(){var f="p1=";var e=document.cookie.indexOf(f);var a=e+f.length;if(e==-1){return GetCookieValue("tpid",1);}var b=document.cookie.indexOf(";",a);if(b==-1){b=document.cookie.length;}var c=(document.cookie.substring(a,b)).split("`");for(var d=0;d<c.length;d++){if(c[d].indexOf("tpid")!=-1){return c[d].split(",")[1];}}}function isValidASPPCookie(a){var c=/v\..*\|.*\|.*\|.*\|.*\|.*\|.*\|.*\|.*\|.*\|.*\|.*/i;var b=c.exec(a);if(!b){return false;}return true;}function captureZanpid(e){var b=getZanpids(e);var d=getCookie("asps");if(b.length<1){return;}if(!isValidAspsCookie(d)){d="0||||||0|"+b.toString();setAspCookie(d,false);return;}var c=d.split("|");c[7]=b.toString();d="";for(var a=0;a<c.length;a++){d+=c[a]+"|";}setAspCookie(d.substring(0,d.length-1),false);}function getZanpids(d){var a=/zanpid=([^&]*)/gi;var b;var c=[];while(b=a.exec(d)){if(b.length>1&&b[1]!=""){c.push(b[1]);}}return c;}function isValidAspsCookie(b){var a=/.*\|.*\|.*\|.*\|.*\|.*\|.*\|.*/i;return b!=null&&b>""&&a.test(b);}function getDomainLegacy(a){var b=a.match(/:\/\/(www\.)?([^\/:]+)/);return b;}function getDomain(a){var b=a!=null?a.match(/:\/\/(?:www\.)?([^\/:]+)/):"";if(b==null||b.length<=1){return"";}return b[1];}function getValueOfCookie(d){var b=d+"=";var a=document.cookie.split(";");for(var e=0;e<a.length;e++){var f=a[e];while(f.charAt(0)==" "){f=f.substring(1);}f=f.replace(" ","");if(f.indexOf(b)!=-1){return f.substring(b.length,f.length);}}return"";}function deleteCookie(b){var e=document.cookie.split(";");for(var f=0;f<e.length;f++){var g=e[f];while(g.charAt(0)==" "){g=g.substring(1);}g=g.replace(" ","");for(var d=0;d<b.length;d++){if(g.indexOf(b[d])!=-1&&g.length>300){var c=new Date(new Date().setTime(new Date().getTime()-(5*365*24*60*60*1000)));var h=getDomainLegacy(location.href);h=h[2]?h[2]:"";if(h>""){document.cookie=g.split("=")[0]+"= ;expires="+c.toUTCString()+"; domain=."+h+"; path=/";}else{document.cookie=g.split("=")[0]+"= ;expires="+c.toUTCString()+"; path=/";}return;}}}}ClearMediaCookieIfItIsTickSeparated();var tpid=GetP1CookieTpid();var eapid=GetCookieValue("iEAPID",0);var ChannelType="";var ChannelID="";var ASPPersistentCookie="";if(!(GetASPPersistentCookie()>""&&isValidASPPCookie(GetASPPersistentCookie()))){SetASPPersistentCookie("v.1,0|||||||||||||");}var previousChannelID=GetCookieValue("aspp",1,"|");var previousChannelType=GetCookieValue("aspp",10,"|");var referrerAddress=document.referrer;if(referrerAddress!=""){if(previousChannelID&&previousChannelID!=""&&previousChannelID.slice(0,3).toLowerCase()!="wpk"&&(tpid==20||(previousChannelType&&previousChannelType!=""&&previousChannelType.toLowerCase()!="aff"))){var clearSeocid=false;var clearCookie=false;for(var site in SEO_SOURCES){if(referrerAddress.toLowerCase().indexOf(site)>-1){clearSeocid=SEO_SOURCES[site][0];if(SEO_SOURCES[site][1]==null){clearCookie=(referrerAddress.toLowerCase().indexOf("semcid")==-1);}else{clearCookie=SEO_SOURCES[site][1];}}}if(clearCookie){SetASPPersistentCookie("v.1,0|||||||||||||");}if(clearSeocid){var urlAndQueryAttributes=window.location.toString().split("?");if(urlAndQueryAttributes.length>1){var url=urlAndQueryAttributes[0];var queryAttributes=urlAndQueryAttributes[1].split("&");var relocate=false;for(var index=0;
index<queryAttributes.length;index++){if(queryAttributes[index].toLowerCase().indexOf("seocid")==-1){url+=(index==0)?"?":"&";url+=queryAttributes[index];}else{relocate=true;}}if(relocate==true){window.location=url;}}}}}(function(){var f=new RegExp(CHANNEL_TYPES+"cid=([^&]*)","i");var g=f.exec(window.location.search);if(!g){g=f.exec(window.location.hash);}if(!g){g=f.exec(document.referrer);}if(!!g){ChannelType=g[1].toUpperCase();ChannelID=escape(g[2]);if(ChannelID!==""){ASPPersistentCookie=GetASPPersistentCookie();if(!ASPPersistentCookie>""){SetASPPersistentCookie("v.1,0|||||||||||||");ASPPersistentCookie=GetASPPersistentCookie();}if(!IsLockedCode(previousChannelType,previousChannelID,ChannelType,ChannelID)){var c=new Date(new Date().setTime(new Date().getTime()+30*24*60*60*1000));var m=c.getFullYear().toString();var k=(c.getMonth()+1).toString();if(k.length<2){k="0"+k;}var b=c.getDate().toString();if(b.length<2){b="0"+b;}var l=m+k+b;var d=ASPPersistentCookie.split("|");d[1]=ChannelID;d[10]=ChannelType;d[11]=l;d[12]=GetChannelSpecificCode(ChannelID,d[12]);d[13]=getChannelSpecificConversionID(d[13]);ASPPersistentCookie="";for(var e=0;e<d.length;e++){ASPPersistentCookie+=d[e]+"|";}ASPPersistentCookie=ASPPersistentCookie.substring(0,ASPPersistentCookie.length-1);SetASPPersistentCookie(ASPPersistentCookie);}}}var h=getValueOfCookie("aspp");if(h!=null&&h.length!=0&&h.split("|").length>14){var a=h.substring(0,h.indexOf(h.split("|")[14])-1);SetASPPersistentCookie(a);}var j=["_tq_ref","mvthistory"];deleteCookie(j);if(window.location.search.search(/zanpid/i)>-1){captureZanpid(window.location.search);}})();if(location.search.indexOf("cntrkrdebug")>-1){if(window.console&&window.console.log){console.log("Previous Channel Type: "+previousChannelType+"\n Previous Channel ID: "+previousChannelID+"\n Current Channel Type: "+ChannelType+"\n Current Channel ID: "+ChannelID+"\n ASPP Cookie Value: "+getCookie("aspp")+"\n ASPS Cookie Value: "+getCookie("asps"));}}}
/*!  generated on 2016-08-22 01:14:55.296 PDT(-0700) in 3 ms  */

/*!  served in 1 ms  */
