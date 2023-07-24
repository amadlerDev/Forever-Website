
const Home = () => {
    return (
        <div className="home">
            <h4>Home</h4>

            <Fasts />
        </div>
    )
};

const facts = [];
for(let i = 0; i < 6; i++) {
    facts.push(<Fact />);
}

function Fasts() {
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