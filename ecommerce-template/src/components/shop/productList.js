import ProductItem from "./productItem";
import ProductListNav from "./productListNav";
import productService from "../../services/productService";
import { useEffect, useState} from "react";

function ProductList() {
    const [productListState, setProductListState] = useState(productService.initialState);
    useEffect(()=> {
        productService.subscribe(setProductListState);
        productService.init();
    });

    return (
        <section class="bg-white py-8">

        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">

           <ProductListNav></ProductListNav>
           {productListState.map((product) =>
                <ProductItem product={product} key={product.id}/>
            )}
        </div>

    </section>
     
    );
  }
  
  export default ProductList;
  