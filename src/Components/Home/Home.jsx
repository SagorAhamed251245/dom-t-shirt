import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

    const tShirt = useLoaderData();
    console.log(tShirt)
  

    return (
        <div>
            <h1>This Is home</h1>
        </div>
    );
};

export default Home;