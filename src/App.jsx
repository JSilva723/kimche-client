function App() {

    return (
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        <h3 class="flex items-end justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">Rick Sanchez</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App