
import { Footer, Header } from "../../layouts";


export function CookingYourself() {
    return (
        <>
            <Header />


            <section className="bg-center bg-no-repeat bg-[url('https://wallpapers.com/images/hd/food-4k-spdnpz7bhmx4kv2r.jpg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <div className="text-center m-10">
                        <h1 className="mb-4 text-3xl font-serif font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400">Cooking</span> Recipe</h1>
                        <p className="text-lg font-normal text-gray-100 lg:text-xl dark:text-gray-400">Help you cook dishes for your own mood now.</p>
                    </div>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="/login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Recommend
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Search more
                        </a>
                    </div>
                </div>
            </section>
            <div className="text-center mt-10">
                <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Search <span className="underline underline-offset-3 decoration-8 decoration-red-400 dark:decoration-red-600">recipes</span></h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">What's remain on your fridge?</p>
            </div>
            <div className="mt-10 mb-10">

                <div className="border border-gray-100 p-5 rounded-lg w-1/2 mx-auto mt-10">
                    <p>The only ingredients we assume you have are salt, pepper and water</p>
                </div>


                <div className="shadow mx-auto w-1/2 mt-10">
                    <div className="flex">
                        <div className="p-2">
                            <img src="https://www.supercook.com/statics/sicons/All%20cuisines.png" width="80" alt="" />

                        </div>
                        <div className="flex items-center justify-center">
                            <h3 className="font-bold font-sans text-xl">Pantry Essentials</h3>
                        </div>

                    </div>
                    <hr />
                    <div className="flex gap-1 p-2 mt-5 flex-wrap">
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Egg</button>
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Pork</button>
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Beef</button>
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Salad</button>
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Tomato</button>
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Salmon</button>
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Onion</button>
                        <button type="button" className="bg-gray-100 text-gray-700 hover:text-white border border-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">+30 more</button>

                    </div>
                </div>
                <form className="max-w-md mx-auto mt-10">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Recipes, Chef..." required />
                        <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">Search</button>
                    </div>
                </form>
                <div className="flex justify-center gap-5 m-10 flex-wrap">
                    <div className="relative bg-red-100 w-[250px] rounded-lg p-5">
                        <img className="rounded-lg" src="https://bepvang.org.vn/Userfiles/Upload/images/Download/2023/3/25/d08219b6937647ed83340baa1ce87b9d.jpg" alt="" />
                        <h4 className="text-center font-bold">Food title</h4>
                        <p>500 Calories</p>
                        <p>Time: 15 minutes</p>
                        <p>Difficulty: Hard</p>
                        <p className="text-sm text-gray-500">View more...</p>

                    </div>
                    <div className="relative bg-red-100 w-[250px] rounded-lg p-5">
                        <img className="rounded-lg" src="https://bepvang.org.vn/Userfiles/Upload/images/Download/2023/3/25/d08219b6937647ed83340baa1ce87b9d.jpg" alt="" />
                        <h4 className="text-center font-bold">Food title</h4>
                        <p>500 Calories</p>
                        <p>Time: 15 minutes</p>
                        <p>Difficulty: Hard</p>
                        <p className="text-sm text-gray-500">View more...</p>

                    </div>
                    <div className="relative bg-red-100 w-[250px] rounded-lg p-5">
                        <img className="rounded-lg" src="https://bepvang.org.vn/Userfiles/Upload/images/Download/2023/3/25/d08219b6937647ed83340baa1ce87b9d.jpg" alt="" />
                        <h4 className="text-center font-bold">Food title</h4>
                        <p>500 Calories</p>
                        <p>Time: 15 minutes</p>
                        <p>Difficulty: Hard</p>
                        <p className="text-sm text-gray-500">View more...</p>

                    </div>
                </div>
                

<div className="flex justify-center">
  <a href="#" className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    Previous
  </a>
  <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </a>
</div>



            </div>


            <Footer />
        </>
    );
}
