import React from 'react'
import Link from 'next/link';


const Homepage = () => {
  return (
    
    <div>
        
        <div className="eye-background">
            <div className="eye-container">
                <h1 className="eye-heading">Oculus Frames</h1>
                <p>
                    <Link href="/">
                        <button className="btn test">
                            Shop now
                        </button>
                    </Link>
                </p>
            </div>
        </div>  
    </div>

    )
}

export default Homepage