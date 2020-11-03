import aboutImg from '../img/about.jpg';

function About() {
    return (
      <div>
      <div class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
          <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
              <div class="lg:w-1/2">
                  <div class="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage: 'url('+aboutImg+')'}}></div>
              </div>
              <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                  <h2 class="text-3xl text-gray-800 font-bold">What is eCrystals <span class="text-indigo-600">Idea</span></h2>
                  <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
                  <div class="mt-8">
                      <a href="#" class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</a>
                  </div>
              </div>
          </div>
      </div> 
  </div>
    );
  }
  
  export default About;
  