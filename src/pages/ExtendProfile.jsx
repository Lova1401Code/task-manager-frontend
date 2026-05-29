import PhoneIcon from "../assets/icons/PhoneIcon"
import VideoCameraIcon from "../assets/icons/VideoCameraIcon"
import XIcon from "../assets/icons/XIcon"
export default function ExtendProfile() {
    return (
    <div className="relative my-4 bg-white p-2">
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
    </div>
    )
}