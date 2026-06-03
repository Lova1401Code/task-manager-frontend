import PhoneIcon from "../assets/icons/PhoneIcon"
import VideoCameraIcon from "../assets/icons/VideoCameraIcon"
import XIcon from "../assets/icons/XIcon"
import profileImgUrl from "../assets/avatar.png"


export default function ExtendProfile() {
    return (
    <div className="flex items-start relative my-4 bg-white p-2">
        <button className="p-1 absolute top-1 left-1">
            <XIcon />
        </button>
        <div className="flex absolute top-1 right-1">
            <button className="p-1">
                <VideoCameraIcon />
            </button>
            <button className="p-1">
                <PhoneIcon />
            </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 w-full">
            <img src={ profileImgUrl } alt="Profile" className="w-32 h-auto rounded-full" />
            <div className="text-center space-y-2 mt-4">
                <h2 className="text-xl font-bold">Rober Fox</h2>
                <h3 className="text-[#3BA1FF] text-sm font-semibold">@robertfox</h3>
                <p className="text-[#9C9C9C] text-xs text-justify px-6">Massa ornare ultrices nisi in vestibulum. Iaculis commodo amet orci sit non lacus. Odio dui aliquet vitae diam vel tellus feugiat aliquam eu.</p>
                <button className="px-4 py-2 rounded-full border">iOS Developer</button>
            </div>
        </div>
    </div>
    )
}