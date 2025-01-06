import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]); 
    const [uniqueCategories, setUniqueCategories] = useState([]); 

    useEffect(() => {
       
        // fetch('https://equi-sports-server-mu.vercel.app/equipments')
        fetch('http://localhost:5000/equipments')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
                const unique = Array.from(new Set(data.map((item) => item.category)));
                setUniqueCategories(unique);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='bg-[#000A50]'>
            <div className='w-11/12 mx-auto py-10 md:py-20'>
                <h2 className='font-ZenDots text-3xl text-center text-white mb-7'>Categories</h2>
                <ul className='grid grid-cols-2 md:gird-cols-4 lg:flex gap-3 justify-center'>
                    {uniqueCategories.map((category, index) => (
                        <div className='bg-[#0A14F5] text-white hover:bg-white hover:text-[#0A14F5] py-5 px-10 rounded-md cursor-pointer '>
                            <li key={index} className='font-ZenDots'> {category}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;
