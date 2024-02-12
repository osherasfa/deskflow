import Image from "next/image";

const SearchBar = () => {
  return ( 
    <div className="flex w-[41rem] mt-6">
      <label className="flex flex-1 items-center gap-2 py-5 px-4 bg-white text-black">
        <Image
          src="/static/icons/search.svg"
          alt="search"
          width={24}
          height={24}
        />
        <input
          className="outline-none bg-transparent "
          type="text"
          placeholder="Search..."
        />
      </label>
      <button className="bg-[#3A3AF4] py-3 px-8 font-semibold text-lg">
        Search
      </button>
    </div>
   );
}
 
export default SearchBar;