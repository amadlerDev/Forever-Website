
const Home = () => {
    return (
        <div className="home content">
            <h4>Home</h4>

            <section className="product-1">
                <div className="">
                    <p>Our drinking gels are as close to the real thing as you can get. With up to 99.7% inner leaf aloe gel you can experience the true power of nature.</p>
                    <button>OUR DRINKS</button>
                </div>
            </section>

            <Facts />
        </div>
    )
};

const facts = [];
for(let i = 0; i < 6; i++) {
    facts.push(<Fact />);
}

function Facts() {
    return (
        <section class="facts">
            <h3>Fast Facts About Our Aloe</h3>
            <div class="facts-grid">
                {facts}
            </div>
            
        </section>
    )
}

function Fact() {
    return (
        <div>
            <img src="https://cdn.foreverliving.com/content/cards/images/our_aloe_-_largest_plantation_-_3b_icon_70x70_1558460840741.png" alt="" />
            <h4>Fast Facts About Our Aloe</h4>
            <p>On over 7,500 acres, we grow 50 million plants and produce 65 million pounds of aloe vera each year.</p>
        </div>
    )
}




export default Home;