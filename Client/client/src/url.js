import { SageMakerRuntimeClient, InvokeEndpointAsyncCommand } from "@aws-sdk/client-sagemaker-runtime";
export const url =async (url, domain)=>{

    var result = {};
    var patt = /(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[0-9]?[0-9])(\.|$){4}/;
    //var patt2 = /(0x([0-9][0-9]|[A-F][A-F]|[A-F][0-9]|[0-9][A-F]))(\.|$){4}/;

//---------------------- 5.  Redirecting using //  ----------------------

if(url.lastIndexOf("//")>7){
    result["Redirecting using //"]="1";
}else{
    result["Redirecting using //"]="-1";
}

//---------------------- 6. (-) Prefix/Suffix in domain  ----------------------

patt=/-/;
if(patt.test(domain)){ 
    result["(-) Prefix/Suffix in domain"]="1";
}else{
    result["(-) Prefix/Suffix in domain"]="-1";
}


//---------------------- 8.  HTTPS  ----------------------


patt=/https:\/\//;
if(patt.test(url)){
    result["HTTPS"]="-1";
}else{
    result["HTTPS"]="1";
}

//---------------------- 9.  Domain Registration Length  ----------------------

//---------------------- 12.  HTTPS in URL's domain part  ----------------------

var onlyDomain = domain && typeof domain === 'string' ? domain.replace('www.', '') : '';
patt=/https/;
if(patt.test(onlyDomain)){
    result["HTTPS in URL's domain part"]="1";
}else{
    result["HTTPS in URL's domain part"]="-1";
}

//---------------------- 13.  Request URL  ----------------------

var imgTags = document.getElementsByTagName("img");

var phishCount=0;
var legitCount=0;

patt=RegExp(onlyDomain,'g');

for(var i = 0; i < imgTags.length; i++){
    var src = imgTags[i].getAttribute("src");
    if(!src) continue;
    if(patt.test(src)){
        legitCount++;
    }else if(src.charAt(0)==='/'&&src.charAt(1)!=='/'){
        legitCount++;
    }else{
        phishCount++;
    }
}
var totalCount=phishCount+legitCount;
var outRequest=(phishCount/totalCount)*100;
//alert(outRequest);
//result["Request URL"]="-1";
if(outRequest<22){
    result["Request URL"]="-1";
}else if(outRequest>=22&&outRequest<61){
    result["Request URL"]="0";
}else{
    result["Request URL"]="1";
}

//---------------------- 14.  URL of Anchor  ----------------------
var aTags = document.getElementsByTagName("a");

phishCount=0;
legitCount=0;
//var allhrefs="";

for(i = 0; i < aTags.length; i++){
    var hrefs = aTags[i].getAttribute("href");
    if(!hrefs) continue;
   // allhrefs+=hrefs+"       ";
    if(patt.test(hrefs)){
        legitCount++;
    }else if(hrefs.charAt(0)==='#'||(hrefs.charAt(0)==='/'&&hrefs.charAt(1)!=='/')){
        legitCount++;
    }else{
        phishCount++;
    }
}
totalCount=phishCount+legitCount;
outRequest=(phishCount/totalCount)*100;

if(outRequest<31){
    result["Anchor"]="-1";
}else if(outRequest>=31&&outRequest<=67){
    result["Anchor"]="0";
}else{
    result["Anchor"]="1";
}

//---------------------- 15. Links in script and link  ----------------------

//var mTags = document.getElementsByTagName("meta");
var sTags = document.getElementsByTagName("script");
var lTags = document.getElementsByTagName("link");

phishCount=0;
legitCount=0;

//allhrefs="sTags  ";

for(i = 0; i < sTags.length; i++){
    var sTag = sTags[i].getAttribute("src");
    if(sTag!=null){
      //  allhrefs+=sTag+"      ";
        if(patt.test(sTag)){
            legitCount++;
        }else if(sTag.charAt(0)==='/'&&sTag.charAt(1)!=='/'){
            legitCount++;
        }else{
            phishCount++;
        }
    }
}

//allhrefs+="      lTags   ";
for(i = 0; i < lTags.length; i++){
    var lTag = lTags[i].getAttribute("href");
    if(!lTag) continue;
   // allhrefs+=lTag+"       ";
    if(patt.test(lTag)){
        legitCount++;
    }else if(lTag.charAt(0)==='/'&&lTag.charAt(1)!=='/'){
        legitCount++;
    }else{
        phishCount++;
    }
}

totalCount=phishCount+legitCount;
outRequest=(phishCount/totalCount)*100;

if(outRequest<17){
    result["Script & Link"]="-1";
}else if(outRequest>=17&&outRequest<=81){
    result["Script & Link"]="0";
}else{
    result["Script & Link"]="1";
}

//---------------------- 16.Server Form Handler ----------------------

var forms = document.getElementsByTagName("form");
var res = "-1";

for(i = 0; i < forms.length; i++) {
    var action = forms[i].getAttribute("action");
    if(!action || action === "") {
        res = "1";
        break;
    } else if(!(action.charAt(0)==="/" || patt.test(action))) {
        res = "0";
    }
}
result["SFH"] = res;

//---------------------- Sending the result  ----------------------
console.log(result);

}
