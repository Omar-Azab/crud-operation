
    

// }

// function sum (num1,num2){
//     let summ = 0 ;
//     summ = num1 + num2 ;

//     return summ ; 
// }

// sum (2,5);

// function avg()

// {
//     let average = sum(5,5)/2;
//     console.log(`average is ${average}`);
// }
// avg();

// function sum (){
//     let numbers = [2,5,78,989];
//     let s = 0 ;


//     for(let i = 0 ; i<numbers.length ; i++){
//         s = s + numbers[i];

//     }
//     return s ;
// }

// console.log(sum());


// function num (x){
//     var f = 1;
//     if(x==0){
//         return f ;
//     }

//     else{
//     for (var i=x ; i>=1 ;i--)
//     {
//         f= f  * i;
//     }
// }
//     return f;
// }
// console.log(num(5))

// let myObject = {
//     name : "omar",
//     id   : 1,
//     age : 23,

//     printData : function(){
//         console.log(`name : ${myObject.name}  Age : ${myObject.age}`);
//     }

// }

// myObject.printData();
let proName = document.getElementById("productName");
let proPrice = document.getElementById("productPrice");
let proCat  = document.getElementById("productCategory");
let proDesc  = document.getElementById("productDesc");
let sa = document.getElementById("save");

let products = [];

function addProduct (){
    let product= {
        name : proName.value ,
        price : proPrice.value ,
        category : proCat.value,
        desc : proDesc.value
    }

    products.push(product);
    form.style.display = "none";
    content.style.display="block";
    sa.style.display="none";
    clear();
    create(products);


}


function create(products){
    var cartona = ``;
    for(i=0;i<products.length;i++){
        cartona += `<tr>
        <td>${i+1}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        `
    }
    var table = document.getElementById("tableRow").innerHTML = cartona;
}

function clear(){
            proName.value ="";
            proPrice.value ="";
            proCat.value="";
            proDesc.value="";

}

function displayForm(){
    sa.style.display = "none";
    content.style.display = "none";
    form.style.display = "block";
}

function deleteProduct(index){
    products.splice(index,1);
    create(products);
}

function updateProduct(index){
        form.style.display="block";
        add.style.display="none";
        sa.style.display="block";
        content.style.display="none";
        
        i = index ; 
         proName.value =products[index].name;
         proPrice.value= products[index].price;
         proCat.value= products[index].category;
         proDesc.value=products[index].desc;

         
}

function saveData(){
    
    products[i].name = proName.value;
    products[i].price = proPrice.value;
    products[i].category = proCat.value;
    products[i].desc = proDesc.value;
    clear();
    form.style.display="none";
    content.style.display="block";
    add.style.display="block";

   create(products);
}






