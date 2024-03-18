

const Registration = () => {
    return (
        <div className="h-screen flex items-center">
            <div className="shadow-lg px-7 py-10 w-3/12 mx-auto rounded-md">
                <h2 className="text-purple-500 font-semibold text-2xl text-center">Singup From</h2>
                <form className="mt-5 space-y-3">
               <div className="flex flex-col gap-2">
               <label className="font-medium text-sm" htmlFor="">Name</label> 
                    <input className="outline-none border rounded-md py-1.5 px-3 text-sm" type="text" placeholder="Enter your name"/>
               </div>
               <div className="flex flex-col gap-2">
               <label className="font-medium text-sm" htmlFor="">Email</label> 
                    <input className="outline-none border rounded-md py-1.5 px-3 text-sm" type="text" placeholder="Enter your email"/>
               </div>
               <div className="flex flex-col gap-2">
               <label className="font-medium text-sm" htmlFor="">Password</label> 
                    <input className="outline-none border rounded-md py-1.5 px-3 text-sm" type="text" placeholder="Enter your password"/>
               </div>
               <div className="flex justify-end">
                <button className="bg-purple-500 hover:bg-purple-600 duration-100 delay-100 text-white px-3 py-2 rounded-md text-sm">Singup</button>
               </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;