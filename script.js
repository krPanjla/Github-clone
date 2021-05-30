var button = document.getElementById("searchBtn");
button.addEventListener("click", displayUsers);


async function displayUsers(){
    var input = document.getElementById("userName");
    var row = document.getElementById("row");
    userName = input.value;
     
        var res = await fetch("https://api.github.com/search/users?q=" + userName + "+in:user&per_page=100");
        
        
      
        var users = await res.json();
        console.log(users)

        users.items.forEach(element => {
            var img=element.avatar_url;
            var name=element.login;
            var url=element.repos_url;
            display(name,img,url);
            
        });
       
  
}


function display(uname,uimg,rurl) {
  
   
  
    var card = createElement("div", "card mb-3");
    card.style.width="100%"
    
  
    var cardRow = createElement("div", "row no-gutters");
  
    var imgDiv = createElement("div", "col-md-4");
    var img = createElement("img","img-fluid rounded text-center");
    img.alt = "User Image";
    img.style.width="200px"
    img.style.height="200px"
  
   
    img.src = uimg
    imgDiv.append(img);
    cardRow.append(imgDiv);
  
    var bodyDiv = createElement("div", "col-md-8");
  
    var cardBody = createElement("div", "card-body");
    var name = createElement("a", "card-title");
    console.log(rurl)
    //name.href=rurl
    name.addEventListener("click",repo)
    async function repo(){
        var res2 = await fetch("https://api.github.com/search/repositories?q=" + userName );
        var rep0 = await res2.json();
       

        //document.write(rep0.items[0].deployments)
       

    }
    name.innerHTML =" <h1>"+uname+"</h1>"
    cardBody.append(name);
  
    bodyDiv.append(cardBody);
    cardRow.append(bodyDiv);
  
    card.append(cardRow);
    row.append(card);

    




}


function createElement(eleName, eleClass = "", eleId = "") {
  var ele = document.createElement(eleName);
  ele.className = eleClass;
  ele.id = eleId;
  return ele;
}
