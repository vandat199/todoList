// localStorage.setItem('products','Nguyễn Văn Đạt')
// console.log(localStorage.getItem('products'))
function save() {
    // let addProduct = document.getElementById('new__Product_id').value;
    let addProduct1 = document.getElementById('new__Product_Name').value;
    let addProduct2= document.getElementById('new__Product_Quality').value;
    // if(_.isEmpty(addProduct)) {
    //     document.getElementById('error__name').innerHTML = 'Vui Lòng nhập trên 6 kí tự'
    // }else if(addProduct.trim().length<=2) {
    //     document.getElementById('error__name').innerHTML = 'Không được nhỏ hơn 2 kí tự'
    // }
    // else if(addProduct.trim().length>50) {
    //     document.getElementById('error__name').innerHTML = 'Không được lớn hơn 50 kí tự'
    // }
    // else{
    //     document.getElementById('error__name').innerHTML = ''
    // }

    if(_.isEmpty(addProduct1)) {
        document.getElementById('error__name').innerHTML = 'Vui Lòng nhập trên 6 kí tự'
    }else if(addProduct1.trim().length<=2) {
        document.getElementById('error__name').innerHTML = 'Không được nhỏ hơn 2 kí tự'
    }
    else if(addProduct1.trim().length>50) {
        document.getElementById('error__name').innerHTML = 'Không được lớn hơn 50 kí tự'
    }
    else{
        document.getElementById('error__name').innerHTML = ''
    }
    if(_.isEmpty(addProduct2)) {
        document.getElementById('error__name').innerHTML = 'Vui Lòng nhập trên 6 kí tự'
    }else if(addProduct2.trim().length<=2) {
        document.getElementById('error__name').innerHTML = 'Không được nhỏ hơn 2 kí tự'
    }
    else if(addProduct2.trim().length>50) {
        document.getElementById('error__name').innerHTML = 'Không được lớn hơn 50 kí tự'
    }
    else{
        document.getElementById('error__name').innerHTML = ''
    }
    let product_name = document.getElementById('new__Product_Name').value;
    let product_Quality = document.getElementById('new__Product_Quality').value;
    let product_Date = document.getElementById('new__Product_Date').value;
    let product_Color = document.getElementById('new__Product_Color').value;
    let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    if(addProduct) {
        // let products = []
        products.push({
            id : addProduct,
            name: product_name,
            Date: product_Date,
            Quality : product_Quality,
            Color : product_Color,
        });
      
    localStorage.setItem('products',JSON.stringify(products))
    this.renderProducts();
    }
}

function renderProducts() {
    let products = localStorage.getItem('products') ?  JSON.parse(localStorage.getItem('products')) :[]
    // console.log(products.length)
    if(products.length === 0 ){
        document.getElementById('list__task').style.display = 'none'
        return false;
    } else {
        document.getElementById('list__task').style.display = 'block'
    }
    let tableContent = `<tr>
        <td>Id</td>
        <td>Name</td>
        <td>Date</td>
        <td>Quality</td>
        <td>Color</td>
        <td>
            <button class="btn__change-2">Change</button>
        </td>
        <td>
            <button class="btn__change">Delete</button>
        </td>
    </tr>`;

    products.forEach((element,index) => {
        let productId = index; 
        index++;
        tableContent+=`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.Date}</td>
        <td>${element.Quality}</td>
        <td>${element.Color}</td>
        <td>
            <button class="btn__change-2" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Change</button>
        </td>
        <td>
            <button onclick='deleteProduct(${productId})' class="btn__change">Delete</button>
        </td>
    </tr>`
    });
    document.getElementById('gird-product').innerHTML = tableContent
}
function deleteProduct(id) {
    let products = localStorage.getItem('products') ?  JSON.parse(localStorage.getItem('products')) :[]
    // console.log(id,products)
    products.splice(id,1)
    localStorage.setItem('products', JSON.stringify(products))
    renderProducts() ;
}