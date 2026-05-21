export default function Navigator() {
    return <div className="bg-gray-100">
        <div className="w-10 h-screen bg-gray-900 flex flex-col">
            {/* Logo en haut */}
            <div className="h-16 flex items-center justify-center">
                <span className="text-white text-lg">LG</span>
            </div>

            {/* Icônes en bas */}
            <div className="flex-1 flex flex-col justify-between items-center py-4">
                <div className="flex flex-col space-y-4 items-center">
                <div className="w-8 h-8 bg-white/20 rounded"></div> {/* icône 1 */}
                <div className="w-8 h-8 bg-white/20 rounded"></div> {/* icône 2 */}
                <div className="w-8 h-8 bg-white/20 rounded"></div> {/* icône 3 */}
                <div className="w-8 h-8 bg-white/20 rounded"></div> {/* icône 4 */}
                <div className="w-8 h-8 bg-white/20 rounded"></div> {/* icône 5 */}
                <div className="w-8 h-8 bg-white/20 rounded"></div> {/* icône 6 */}
                </div>
            </div>
        </div>
    </div>
}