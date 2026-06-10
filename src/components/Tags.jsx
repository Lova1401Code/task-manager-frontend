export default function Tags({ tags }) {
    return (
        <>
            {
                tags.map((tag, index) => {
                    return (
                        <button key={index} className="rounded-full bg-[#3BA1FF] px-2 py-1 text-white text-xs">
                            {tag}
                        </button>
                    )
                })
            }
         </>
    )
}