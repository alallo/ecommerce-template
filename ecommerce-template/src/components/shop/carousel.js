import carouselImg1 from '../../img/carousel1.jpg';
import carouselImg2 from '../../img/carousel2.jpg';
import carouselImg3 from '../../img/carousel3.jpg';

function Carousel() {
    return (
        <div className="carousel relative shadow-2xl bg-white">
            <div className="carousel-inner relative overflow-hidden w-full">

                <input className="carousel-open invisible" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
                <div className="carousel-item absolute opacity-0" style={{height:'50vh'}}>
                    <div className="block h-full w-full mx-auto flex pt-3 md:pt-0 md:items-center bg-cover bg-right" style={{backgroundImage: 'url('+carouselImg1+')'}}>

                        <div className="container mx-auto">
                            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 sitems-center md:items-start px-6 tracking-wide">
                                <p className="text-white text-2xl my-4">Personalised gift set</p>
                                <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-white hover:border-black" href="#">view product</a>
                            </div>
                        </div>

                    </div>
                </div>
                <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                

                <input className="carousel-open invisible" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
                <div className="carousel-item absolute opacity-0 bg-cover bg-right" style={{height:'50vh'}}>
                    <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{backgroundImage: 'url('+carouselImg2+')'}}>

                        <div className="container mx-auto">
                            <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                <p className="text-white text-2xl my-4">A memorial shadow box personalised just for you</p>
                                <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-white hover:border-black" href="#">view product</a>
                            </div>
                        </div>

                    </div>
                </div>
                <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


                <input class="carousel-open invisible" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
                <div class="carousel-item absolute opacity-0" style={{height:'50vh'}}>
                    <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom" style={{backgroundImage: 'url('+carouselImg3+')'}}>

                        <div class="container mx-auto">
                            <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                <p class="text-white text-2xl my-4">Personalised christening set</p>
                                <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-white hover:border-black" href="#">view product</a>
                            </div>
                        </div>

                    </div>
                </div>
                <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white-400 hover:text-white-900">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white-400 hover:text-white-900">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white-400 hover:text-white-900">•</label>
                    </li>
                </ol>

            </div>
        </div>
    );
  }
  
  export default Carousel;
  