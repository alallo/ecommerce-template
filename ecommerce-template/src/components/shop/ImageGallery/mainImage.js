function MainImage(props) {
    return (
        <div className="border-solid border border-gray-200 rounded-lg my-6 p-6">                
        <img src={props.image} />
    </div>
    );
  }
  
  export default MainImage;
  