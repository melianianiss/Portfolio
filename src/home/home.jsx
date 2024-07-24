import "./home.css"
import Social from "./social"
import  Data  from "./data"
import Scroll from "./scroll"

export default function Home () {

    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div className="home__img"></div>

                    <Data />

                </div>
                <Scroll />
            </div>
        </section>
    )
}