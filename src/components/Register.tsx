export const Register: React.FC = (): JSX.Element => {
  return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="relative top-[200px] mx-auto w-4/12 w-min-[400px] px-2 py-8 h-fit text-center shadow-[0px_0px_4px_3px_rgba(0,0,0,0.3)] rounded-2xl">
                <h1 className="font-bold text-2xl mb-4"> Register </h1>
                <div className="grid grid-cols-[1fr,2fr] grid-rows-4 gap-4">
                    <label className="font-medium text-right"> Username: </label>
                    <input
                        className="bg-inherit px-4 placeholder:text-white placeholder:text-opacity-50 outline-none text-white rounded-full border-black border-b-2 border-r-2 w-9/12"
                        type="text"
                        placeholder="Rafael011..."
                    />
                    <label className="font-medium text-right"> Email: </label>
                    <input
                        className="bg-inherit px-4 placeholder:text-white placeholder:text-opacity-50 outline-none text-white rounded-full border-black border-b-2 border-r-2 w-9/12"
                        type="text"
                        placeholder="Rafael011@domain.com..."
                    />
                    <label className="font-medium text-right"> Password: </label>
                    <input
                        className="bg-inherit px-4 placeholder:text-white placeholder:text-opacity-50 outline-none text-white rounded-full border-black border-b-2 border-r-2 w-9/12"
                        type="password"
                        placeholder="Secret..."
                    />
                    <label className="font-medium text-right"> Repeat Password: </label>
                    <input
                        className="bg-inherit px-4 placeholder:text-white placeholder:text-opacity-50 outline-none text-white rounded-full border-black border-b-2 border-r-2 w-9/12"
                        type="password"
                        placeholder="Hashed..."
                    />
                </div>
            </div>
        </div>
  )
}
