import SelectOption from "./SelectOption";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export const Header = () => (
    <div>
        <div className="w-full pt-3 px-3 isolate inline-flex -space-x-px rounded-md shadow-sm">
        <input
                name="name"
                type="text"
                required
                className="relative min-w-0 w-full rounded-md border-b border-gray-200 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <div className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </div>
        </div>
        <div className="p-3 gap-x-3 md:flex md:items-center md:justify-between">
            <SelectOption options={["Status"]} />
            <SelectOption options={["Gender"]} />
            <SelectOption options={["Especies"]} />
            <div className="mt-2">
                <button className="flex-none w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    Reset
                </button>
            </div>
        </div>
    </div>
)