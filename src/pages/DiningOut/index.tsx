
import { Footer, Header } from "../../layouts";


export function DinningOut() {
  return (
    <>
      <Header />


      <section className="bg-center bg-no-repeat bg-[url('https://i0.wp.com/mauivang.com/wp-content/uploads/2018/10/eating-out.jpg?fit=2048%2C1152&ssl=1')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <div className="text-center m-10">
            <h1 className="mb-4 text-3xl font-serif font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400">Dinning</span> Out</h1>
            <p className="text-lg font-normal text-gray-100 lg:text-xl dark:text-gray-400">You are lazy? we will find food for you..</p>
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
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Search <span className="underline underline-offset-3 decoration-8 decoration-red-400 dark:decoration-red-600">food</span></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Eating out now..</p>
      </div>
      <div className="mt-10 mb-10">


        <form className="max-w-md mx-auto mt-10">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Food, Meal..." required />
            <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">Search</button>
          </div>
        </form>
        <div className="mx-auto mt-5">

          <div className="text-center"><label htmlFor="">You want to eat in : </label>
            <input type="number" id="default-search" className=" w-20 p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="" required />
              m
          </div>
          <div className="text-center mt-5"><label htmlFor="">You want to eat with your friend? : </label>
            <input type="text" id="default-search" className=" w-[200px] p-1  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="" readOnly required value='www.smartfood.com/invite' />
              
          </div>
        </div>
        
        <div className="flex justify-center gap-5 m-10 flex-wrap">
                    <div className="relative bg-red-100 w-[250px] rounded-lg p-5">
                        <img className="rounded-lg" src="https://bepvang.org.vn/Userfiles/Upload/images/Download/2023/3/25/d08219b6937647ed83340baa1ce87b9d.jpg" alt="" />
                        <h4 className="text-center font-bold">Food title</h4>
                        <p>Distance: 500m</p>
                        <p>Food Store: FPT</p>
                        <p className="text-sm text-gray-500">View more...</p>

                    </div>
                    <div className="relative bg-red-100 w-[250px] rounded-lg p-5">
                        <img className="rounded-lg" src="https://bepvang.org.vn/Userfiles/Upload/images/Download/2023/3/25/d08219b6937647ed83340baa1ce87b9d.jpg" alt="" />
                        <h4 className="text-center font-bold">Food title</h4>
                        <p>Distance: 500m</p>
                        <p>Food Store: FPT</p>
                        <p className="text-sm text-gray-500">View more...</p>

                    </div>
                    <div className="relative bg-red-100 w-[250px] rounded-lg p-5">
                        <img className="rounded-lg" src="https://bepvang.org.vn/Userfiles/Upload/images/Download/2023/3/25/d08219b6937647ed83340baa1ce87b9d.jpg" alt="" />
                        <h4 className="text-center font-bold">Food title</h4>
                        <p>Distance: 500m</p>
                        <p>Food Store: FPT</p>
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
