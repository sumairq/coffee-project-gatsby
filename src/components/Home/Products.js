import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import {StaticQuery, graphql} from 'gatsby'

const getProducts = graphql`
{
  products:allContentfulCoffeeProduct {
    edges {
      node {
        id
        price
        title
        contentful_id
        image {
          fluid(maxHeight: 426){
              src
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`
export default function Products(){
    return (
        <div>
          <StaticQuery query={getProducts} render={data =>{
              return(
                  <section className="py-5">
                      <div className="container">
                          <Title title="our products"/>
                          <div className="row">
                              {data.products.edges.map(({node:product})=>{
                            return <Product key={product.id} product={product} />
                              })}
                          </div>
                      </div>
                  </section>
              )
          }}/>
        </div>
    )
}
