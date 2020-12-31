import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function FeaturedProduct(props) {

    const featuredProduct = props.products ? props.products.filter(product => product.isFeatured === true) : [];
    
    return (
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 w-full h-full">
            <div className="grid gap-6 mb-8 md:grid-cols-2 w-full h-full">
            {featuredProduct && featuredProduct.map((product) => {       
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
  
  FeaturedProduct.propTypes = 
  {
    product: (PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isFeatured: PropTypes.bool.isRequired
    }))
  }

  export default FeaturedProduct;
  