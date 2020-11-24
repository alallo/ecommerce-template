import basketStoreService from '../../services/basketStoreService'
import { useEffect, useState } from "react";
import { useAlert } from 'react-alert'
import MainImage from './ImageGallery/mainImage';
import ThumbnailImages from './ImageGallery/thumbnailImages';
import productService from "../../services/productService";

function ProductDetails(props)
 {
    const alert = useAlert();
    let productId = props.location.productId
    if(!productId)
    {
        let pathName = props.location.pathname;
        let pathNameArray = pathName.split('/')
        let productIdFromPathName = pathNameArray[pathNameArray.length -1];
        if(isNaN(productIdFromPathName))
            redirectToHome();
        else
            productId = productIdFromPathName;

    }
    const [, setBasketState] = useState(basketStoreService.initialState);
    const [productListState, setProductListState] = useState(productService.initialState);
    const productsFound = productListState.filter(item => item.id === productId);
    if(productsFound.length === 0)
        redirectToHome();
    const product = productsFound[0];

    const [quantity, setQuantity] = useState(1);

    const [featuredImage, setFeaturedImage] = useState({
        image: product.images[0],
        altText: product.name
    });

    useEffect(()=> {
        //scroll at the top
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        basketStoreService.subscribe(setBasketState);
        basketStoreService.init();

        productService.subscribe(setProductListState);
        productService.init();

    },[]);

    const onAddItemClick = e => {
        e.preventDefault();
        const basketObject = {
          product: product,
          quantity: quantity
        };
        basketStoreService.addItemToBasket(basketObject);
        alert.success("The item is now in your basket");
      };

    const [active, setActive] = useState({
            active: 0
    });

    function redirectToHome() {
        window.location.href = '/';
    }

    function clickHandler(index) {
        setFeaturedImage({ image: product.images[index], altText: product.name })
        setActive({ active: index })
    }

    return (
        <div>
            <div className="container mx-auto px-6 mt-20 mb-20">
                    <div className="md:flex md:items-center">
                        <div className="relative xl:w-1/2 sm:w-full">
                            <MainImage image={ featuredImage }/>
                            <ThumbnailImages images={ product.images } click={ clickHandler }  activeThumb={ active.active }/>
                        </div>

                        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                            <h3 className="text-black-700 text-lg">{product.name}</h3>
                            <hr className="my-3"/>
                            <label className="text-black-700 text-md">{product.description}</label>
                            <hr className="my-3"/>
                            <span className="text-black-500 mt-3">£{product.price}</span>
                            <hr className="my-3"/>
                            <div className="mt-2">
                                <label className="text-black-700 text-sm" htmlFor="count">Quantity:</label>
                                <div className="flex items-center mt-1">
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => (quantity > 1) ? setQuantity(quantity - 1) : undefined}>
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                        <span className="text-gray-700 text-lg mx-2">{quantity}</span>
                                    <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => setQuantity(quantity + 1)}>
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="text-gray-700 text-sm" htmlFor="count">Color:</label>
                                <div className="flex items-center mt-1">
                                    <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                                    <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                                    <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                                </div>
                            </div>
                            <div className="flex items-center mt-6">
                                <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500" onClick={onAddItemClick}>Add To Basket</button>
                                <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
  }
  
  export default ProductDetails;
