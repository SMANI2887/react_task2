import React from 'react';
import '../../src/App.css';
import { FaStar } from "react-icons/fa6";

function Section() {
  return (

     //  Section
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
{/* 1st card */}
                    <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                     {/* Product price */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
{/* 2nd Card */}
                    <div className="col mb-5">
                        <div className="card h-100">

                            <div className="txt">Sale</div>

                            
                            

                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Special Item</h5>

                                   
                                     {/* Product price */}
                                   
                                    {/* $40.00 - $80.00 */}
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <br />
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00

                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
{/* 3rd Card */}
                        <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        <div className="txt">Sale</div>

                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                     {/* Product price */}
                                   <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
{/* 4th Card */}
                        <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <br />
                                     {/* Product price */}
                                   $40.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>

{/* 5th Card */}

                        <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                            <div className="txt">Sale</div>
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                     {/* Product price */}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* Product actions*/}
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>

{/* 6th Card */}
                        <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                     {/* Product price */}
                                     $120.00 - $280.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
{/* 7th Card */}
                        <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                            <div className="txt">Sale</div>
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                     {/* Product price */}
                                     <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <br />
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
{/* 8th Card */}
                        <div className="col mb-5">
                        <div className="card h-100">
                             {/* Product image */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             {/* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                     {/* Product name */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> <br />
                                     {/* Product price */}
                                    $40.00

                                </div>
                            </div>
                            {/* Product actions*/}
                           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                            
                            </div>
                        </div>
                    </div>

                         
                </div>
            </div>
        </section>
  )
}

export default Section;