import Container from '../../Layout/Container'
import React from 'react';
import Card from './Cards';
import productList from '../../Functions/productList';

const CardsContainer = () => {
    return (
        <div>
            <Container>

                <h1 className="text-center text-3xl font-bold mb-4
                dark:text-gray-200">My Projects</h1>

                <p className="text-center text-lg leading-8 tracking-wide
                uppercase dark:text-gray-500">A collection of my projects.</p>
                
                <div className='flex flex-wrap justify-around gap-x-6 gap-
                y-8 sm:justify-start'>
                    {/* Cards */}
                    {productList.map((product, index) => (
                        <Card key={index} product={product} />
                    ))}
                </div>

            </Container>
        </div>
    )
}

export default CardsContainer
