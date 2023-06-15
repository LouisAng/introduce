import NavScroll from "../components/common/NavScroll";
import "../assets/css/main.css";
import "../assets/css/variables.css";
import mainImg from "../assets/img/hero-carousel/hero-carousel-3.svg";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";

function Home(){

    return (
        <div>
            <NavScroll/>
            <section id="hero-animated" className="hero-animated d-flex align-items-center">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
                    <img src={mainImg} className="img-fluid animated"/>
                    <h2>Welcome to <span>Ramovi</span></h2>
                    <p>개발 진행중 입니다.</p>
                    <div className="d-flex">
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        <a href="#" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>start</span></a>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Home;