import React from 'react'
import banner from './amazonBanner0.jpg'
import './Home.css'
import Product from './Product'
//all components load in real time 
const Home = () => {
    return (
        <div className="home">
            {/* {this is to write javascript as jsx} */}
            <img className="home_image"
            src={banner} alt="bannerlogo"/>

            <div className="home_row">
            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>

            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>

            </div>

            <div className="home_row">
            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>

            
            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>


            
            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>

            </div>


            <div className="home_row">
            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>

           
            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>



            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MulIgP92JYUPvK09a7FnrQHaE8%26pid%3DApi&f=1"/>

            </div>


            <div className="home_row">
                
            <Product id="121"
            title="I am the title"
            price={11.96}
            rating={5}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5G5rDR6y9mqqwDdlCmmTtQHaEh%26pid%3DApi&f=1"/>

            </div>
        </div>
    )
}

export default Home
