import React from 'react';
import bannerImage from '../assets/bannerImage.webp'; // Adjust the path as needed
import '../App.css';

function Home() {
    return (
        <div className="home-container">
            <div style={{ textAlign: "center", margin: "20px 0" }}>
                <h1>Welcome to Recipe Explorer</h1>
                <p>Discover delicious recipes and culinary inspiration!</p>
                <hr />
            </div>
            <div style={{ textAlign: "center", margin: "20px 0" }}>
                <img
                    src={bannerImage}
                    alt="Welcome to Recipe Explorer"
                    style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
                />
            </div>
        </div>
    );
}

export default Home;