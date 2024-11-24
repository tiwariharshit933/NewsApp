import React, { useState } from 'react'
import Newsboard from './Newsboard';
import Footer from './Footer';
import Category from './Category';

const Bundle = ({ stickyRef }) => {
    const [category, setCategory] = useState("india");

    return (
        <>
        <div ref={stickyRef} style={{'paddingTop':'30px'}}>
            <Category setCategory={setCategory} />
            <Newsboard category={category} />
            <Footer />
        </div>
        </>
    )
}

export default Bundle
