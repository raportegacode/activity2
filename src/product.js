function Product(props){
    function cart(){
        alert(props.value.name + " added to cart")
    }
    function fave(){
        alert(props.value.name + " added to favourite")
    }
    return(
        <div className="tiles">
            <img className="img" src={props.value.img} alt="adidas"></img>
            <h3>{props.value.name}</h3>
            <p>{props.value.price}</p>
                <button className="cartbtn" onClick={cart}><strong>Add to Cart</strong></button>
                <button className="favebtn" onClick={fave}><strong>Add to Favourite</strong></button>
        </div>

    );
    
}
export default Product;