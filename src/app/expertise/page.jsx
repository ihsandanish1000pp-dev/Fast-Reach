
'Use client'
import React from 'react'
import Image from 'next/image'
const page = () => {
  return (



    <>
      <div className="container-fluid Exp-hero-section">
        <div className="row">
          <h1 className='Exp-hero-text'>Our Expertise</h1>

          <div className='col-sm-12 col-md-12 col-lg-12'>

            <p className=' P-texttt  text-center'>

              <p className='mb-0'> Fast Reach Global delivers comprehensive contracting solutions through a  skilmultidisciplinary approach, combining technical excellence,</p>

              <p className='mb-0'>
                led manpower, and proven execution capabilities. Our expertise spans civil, mechanical, electrical, low-current, led manpower,
              </p>
              <p className='mb-0'>
                and proven execution
                capabilities.
                and specialized systems, enabling us to manage complex projects
              </p>
              <p>
                efficiently under a single integrated framework.
              </p>
            </p>


          </div>
        </div>
      </div>




      <section>
        <div className="container-fluid" style={{ marginTop: '30px' }}>
          <div className="row   row-height">
            <div className='col-sm-12 col-md-3 col-lg-3 box-1'>
              <Image src='/wood_metel img.webp'
                width={400}
                height={245}
                alt='pic'

                      className='img-fluid box-pic'
              />
            </div>
            <div className='col-sm-12 col-md-3 col-lg-3 box-1'>
              <Image src='/flooring.webp'
                width={400}
                height={245}
                alt='pic'

                      className='img-fluid box-pic'
              />


            </div>
            <div className='col-sm-12 col-md-3 col-lg-3 box-1'>

              <Image src='/gypsum.jpg'
                width={400}
                height={245}
                alt='pic'

                      className='img-fluid box-pic'
              />


            </div>
            <div className='col-sm-12 col-md-3 col-lg-3 box-1'>
              <Image src='/plasting.jpg'
                width={400}
                height={245}
                alt='pic'

                 className='img-fluid box-pic'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page