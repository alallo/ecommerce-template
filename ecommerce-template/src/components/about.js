import aboutImg from '../img/about.jpg';

function About() {
    return (
      <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
              <div className="lg:w-1/2">
                  <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage: 'url('+aboutImg+')'}}></div>
              </div>
              <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-3xl text-gray-800 font-bold">What is eCrystal <span className="text-indigo-600">Idea</span></h2>
                  <p className="mt-4 text-gray-600">Every Occasion Deserves To Sparkle and Be Personal!
I have put together some photos of my previous work to help inspire you if you ever need an item crystallized or personalized. . . From turning that plain book into a beautiful Guest Book. . . Or adding a little sparkle to a princess' little booties and dresses to match. Embroidering Towels, Blankets, Bibs and Ribbons with characters, names and initials.
Alternatively, if you have an idea of your own or an item that needs to sparkle, feel free to contact me and we can design something thats just for you!
Please call eCrystal on 0758 552 5488 or email me @ ecrystal@hotmail.co.uk for prices and ideas</p>
              </div>
          </div>
      </div> 
  </div>
    );
  }
  
  export default About;
  