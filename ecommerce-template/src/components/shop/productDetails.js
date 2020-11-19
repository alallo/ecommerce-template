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
    const [basketState, setBasketState] = useState(basketStoreService.initialState);
    const [productListState, setProductListState] = useState(productService.initialState);
    const productsFound = productListState.filter(item => item.id === productId);
    if(productsFound.length === 0)
        redirectToHome();
    const product = productsFound[0];

    const [quantity, setQuantity] = useState(1);

    const [featuredImage, setFeaturedImage] = useState({
        image: product.images[0],
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
        setFeaturedImage({ image: product.images[index] })
        setActive({ active: index })
    }

    return (
        <div>
            <div class="container mx-auto px-6 mt-20 mb-20">
                    <div class="md:flex md:items-center">
                        <div className="relative xl:w-1/2 sm:w-full">
                            <MainImage image={ featuredImage.image }/>
                            <ThumbnailImages images={ product.images } click={ clickHandler }  activeThumb={ active.active }/>
                        </div>

                        <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                            <h3 class="text-black-700 text-lg">{product.name}</h3>
                            <hr class="my-3"/>
                            <label class="text-black-700 text-md">{product.description}</label>
                            <hr class="my-3"/>
                            <span class="text-black-500 mt-3">£{product.price}</span>
                            <hr class="my-3"/>
                            <div class="mt-2">
                                <label class="text-black-700 text-sm" for="count">Quantity:</label>
                                <div class="flex items-center mt-1">
                                    <button class="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => (quantity > 1) ? setQuantity(quantity - 1) : undefined}>
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                        <span class="text-gray-700 text-lg mx-2">{quantity}</span>
                                    <button class="text-gray-500 focus:outline-none focus:text-gray-600" onClick={() => setQuantity(quantity + 1)}>
                                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="mt-3">
                                <label class="text-gray-700 text-sm" htmFor="count">Color:</label>
                                <div class="flex items-center mt-1">
                                    <button class="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                                    <button class="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                                    <button class="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
                                </div>
                            </div>
                            <div class="flex items-center mt-6">
                                <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500" onClick={onAddItemClick}>Add To Basket</button>
                                <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
  }
  
  export default ProductDetails;
