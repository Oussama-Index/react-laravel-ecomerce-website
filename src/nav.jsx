export default function Navbar(){
    return (<>
        <div  class=" container flex flex-row justify-between bg-black-800  text-white items-center text-center color-black-800">
        <div class="titre flex">
            <img class="w-20" src="/img/logo-philo-removebg-preview.png" alt=""/>
            <h1 class="flex items-center  font-extrabold text-black">PHILOTIMO STUDENT </h1>
        </div>
        <ul class="flex justify-between text-black">
            {/* <li><a class="mr-5" href="s">home</a></li> */}
            
            <li><a class="mr-5" href="s"></a><button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
      <span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">home</span>
      </button></li>
            <li><a class="mr-5" href="s"></a><button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
      <span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">home</span>
      </button></li>
            <li><a class="mr-5" href="s"></a><button class="btn mr-4 relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
      <span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">home</span>
      </button></li>
        </ul>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/tw-elements/js/tw-elements.umd.min.js"></script>
    </>)
}