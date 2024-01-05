import { SelectOption } from "./SelectOption";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export const Header = () => (
    <div>
        <div className="w-full pt-3 px-3">
            <input
                name="name"
                type="text"
                required
                className="relative min-w-0 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <span className="absolute rounded-r-md px-2 py-2 text-gray-400 -translate-x-full cursor-pointer">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </span>
        </div>
        <div className="p-3 sm:flex sm:items-center sm:justify-around">
            <SelectOption options={["Status"]} />
            <SelectOption options={["Gender"]} />
            <SelectOption options={["Especies"]} />
            <div className="mt-2">
                <button className="flex-none w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    Reset filters
                </button>
            </div>
        </div>
    </div>
)