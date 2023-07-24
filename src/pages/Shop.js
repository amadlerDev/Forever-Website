import productImg from '../assets/background-home.jpeg';


const products = [];
for(let i = 0; i < 16; i++){
    products.push(<Product />);
}

function Product() {
    return (
        <a className="product" href="#">
            <img src="http://localhost:3000/static/media/background-home.3fc549e20848875296aa.jpeg" alt="product" />
        </a>
    )
};

const Shop = () => {
    return (
        <div className="shop content">
            <h4>Shop</h4>
            <div className="products">{products}</div>
        </div>
    )
};
  
export default Shop;