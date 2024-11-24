import React from 'react'

const Category = ({ setCategory }) => {
    return (
        <>
            <h1 className='text-center pt-4 pb-4 customClass d-flex tabSingle justify-content-center align-items-center'>Latest <span className='badge bg-danger text-white pt-1 clasSpancustom'>News</span></h1>
            <div className='tabMain container'>
                <ul className='tabSingle d-flex flex-wrap'>
                    <li className='LinkMain' onClick={() => setCategory('general')} >General</li>

                    <li className='LinkMain' onClick={() => setCategory('politics')} >Politics</li>

                    <li className='LinkMain' onClick={() => setCategory('business')} >business</li>

                    <li className='LinkMain' onClick={() => setCategory('entertainment')} >entertainment</li>

                    <li className='LinkMain' onClick={() => setCategory('health')} >health</li>

                    <li className='LinkMain' onClick={() => setCategory('science')} >science</li>

                    <li className='LinkMain' onClick={() => setCategory('sports')} >sports</li>

                    <li className='LinkMain' onClick={() => setCategory('technology')} >technology</li>

                </ul>
            </div>
        </>
    )
}

export default Category
