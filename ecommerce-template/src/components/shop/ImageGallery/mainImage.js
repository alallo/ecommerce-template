function MainImage(props) {
    const mainImage = props.image;
    return (
        <div className="border-solid border border-gray-200 rounded-lg my-6 p-6">                
        <img src={mainImage.image} alt={mainImage.altText}/>
    </div>
    );
  }
  
  export default MainImage;
  