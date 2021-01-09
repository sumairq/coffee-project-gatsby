import { Link } from 'gatsby'
import React from 'react'
import Title from '../Globals/Title'

export default function info(){
    return (
        <section className="py-5">
        <div className="container">
            <Title title="our story"></Title>
       <div className="row">
       <div className="col-10 col-sm-8 mx-auto text-center">
       <p className="lead text-muted mb-5">
       Sit cupidatat dolor nisi duis cupidatat. Mollit incididunt pariatur esse veniam. Anim duis pariatur in consectetur veniam aliqua amet dolor
        ad id nulla adipisicing dolore. Magna incididunt consectetur labore deserunt aliqua ut deserunt magna ad non. Enim amet reprehenderit
         reprehenderit laboris et ullamco sint ad ea sit ullamco quis.
       </p> 
       <Link to="/about/">
       <button className="btn text-uppercase btn-yellow">about page</button>
       </Link>
       </div>
       </div>
        </div>
            
        </section>
    )
}
