import { useEffect, useState } from "react";
import productService from "../../services/productService";
import FeaturedProduct from "./featuredProduct";
import ProductItem from "./productItem";
import ProductListNav from "./productListNav";

function ProductList() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        async function fetchData() {
              productService.getProductList().then((response) => {
              setProductList(response)
            });
        }
        fetchData();
      }, [])

    if(!productList || productList.length == 0 )
      return <div>Loading...</div>
    else
    return (
        <div>
            <FeaturedProduct products={productList}/>
            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                <ProductListNav></ProductListNav>
                {productList.map((product) =>
                        <ProductItem product={product} key={product.id}/>
                    )}
                </div>
            </section>
        </div>

    );
  }
  
  export default ProductList;
  