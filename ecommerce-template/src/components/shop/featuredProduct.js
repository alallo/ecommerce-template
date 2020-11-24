import productService from "../../services/productService";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function FeaturedProduct() {
    const [productListState, setProductListState] = useState(productService.initialState);

    useEffect(()=> {
        productService.subscribe(setProductListState);
        productService.init();
    },[]);
    const featuredProduct = productListState.filter(product => product.isFeatured === true);

    return (

        
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 w-full h-full">
            <div className="grid gap-6 mb-8 md:grid-cols-2 w-full h-full">
            {featuredProduct.map((product, index) => {       
                return <Link
                    key={product.id}
                    to={{
                        pathname: "/product-details/" + product.id,
                        productId: product.id
                    }}>
                    <div className="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs bg-center bg-cover" style={{backgroundImage: 'url('+product.image+')', height:'300px'}}>
                        <h4 className="mb-4 font-semibold text-white-600 text-xl">
                            { product.name }
                        </h4>
                    </div>
                </Link>
            })}
            </div>
        </div>
    );
  }
  
  export default FeaturedProduct;
  