import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Home = () => {
    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/advertisement")
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                setAds(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="content">
            <div className="container">
                <div className="content-head-block">
                    <h2 className="content-header">List of ads</h2>
                    <Link to="/add-ad"><button type="button" className="btn add-ad">Add ad</button></Link>
                </div>
                <div className="ads">
                        {!loading && ads.map((ad, idx) => (
                            <div className="ad public-ad">
                                <h4>Ad {idx+1}</h4>
                                <small>Author: {ad.author}</small>
                                <p>{ad.text}</p>
                                <small>Type: {ad.type_id == 1 ? "Public" : "Private"}</small>
                            </div>
                        ))}
                        {loading && <h4>Loading...</h4>}
                    {/* <div className="ad public-ad">
                        
                        <h4>Ad 1</h4>
                        <small>Author: apsoidal</small>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ab adipisci commodi, sunt aliquid ad
                            doloremque voluptatum distinctio blanditiis atque esse quis ut sed quas laudantium voluptas
                            sapiente! Incidunt, eaque.</p>
                        <small>Type: public</small>
        
                    </div>
                    <div className="ad private-ad">
                        <h4>Ad 2</h4>
                        <small>Author: apsoidal</small>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quis blanditiis fugiat dolore numquam
                            repellendus. Est, necessitatibus? Veniam fugiat ut quidem animi quibusdam in, adipisci, quasi illum
                            reprehenderit tempora ducimus!</p>
                        <small>Type: local</small>
                    </div> */}
                </div>
            </div>
	    </div>
    )
}

export default Home;
