let button=document.querySelector("button");
let textInput=document.querySelector("#text-input");
let textOp=document.querySelector("#text-output");

let url="https://api.funtranslations.com/translate/shakespeare.json";

let getUrl=(text)=>{
    return url +"?"+ "text="+text;

}
let clickHandler=()=>{
    console.log("clicked");
    
    console.log(textInput.value);
    getApi();
}

getApi=()=>{
    fetch(getUrl(textInput.value)).then((resp)=>resp.json()).then((data)=>{
        let translatedData=data.contents.translated;
        textOp.innerHTML=translatedData;
       
    })
}

button.addEventListener("click",clickHandler);