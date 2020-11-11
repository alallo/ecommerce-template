import ProductItem from "./productItem";
import ProductListNav from "./productListNav";

let products = [
    {
        "id":"1",
        "name": "item 1",
        "image": "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
    {
        "id":"2",
        "name": "item 2",
        "image": "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
    {
        "id":"3",
        "name": "item 3",
        "image": "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
    {
        "id":"4",
        "name": "item 4",
        "image": "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
    {
        "id":"5",
        "name": "item 5",
        "image": "https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
    {
        "id":"6",
        "name": "item 6",
        "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
    {
        "id":"7",
        "name": "item 7",
        "image": "https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
    {
        "id":"8",
        "name": "item 8",
        "image": "https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
        "price": "10.00"
    },
]

function ProductList() {
    return (
        <section class="bg-white py-8">

        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

           <ProductListNav></ProductListNav>
           {products.map((product) =>
                <ProductItem product={product} key={product.id}/>
            )}
        </div>

    </section>
     
    );
  }
  
  export default ProductList;
  