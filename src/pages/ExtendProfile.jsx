import PhoneIcon from "../assets/icons/PhoneIcon"
import VideoCameraIcon from "../assets/icons/VideoCameraIcon"
import XIcon from "../assets/icons/XIcon"
import profileImgUrl from "../assets/avatar.png"
import AddFriendsIcon from "../assets/icons/AddFriendsIcon"
import MessageIcon from "../assets/icons/MessageIcon"
import ChevronDownMicorIcon from "../assets/icons/ChevronDownMicorIcon";
import ChevronUpMicroIcon from "../assets/icons/ChevronUpMicroIcon";
import littleProfileImgUrl from "../assets/profile.png"


export default function ExtendProfile() {
    return (
    <div className="flex flex-col gap-3 items-start relative my-4 bg-white p-2">
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
            <img src={ profileImgUrl } alt="Profile" className="w-20 h-auto rounded-full" />
            <div className="text-center space-y-2 mt-4">
                <h2 className="text-xl font-bold">Rober Fox</h2>
                <h3 className="text-[#3BA1FF] text-sm font-semibold">@robertfox</h3>
                <p className="text-[#9C9C9C] text-xs text-justify px-6">Massa ornare ultrices nisi in vestibulum. Iaculis commodo amet orci sit non lacus. Odio dui aliquet vitae diam vel tellus feugiat aliquam eu.</p>
                <button className="px-2 py-1 text-sm rounded-full border border-[#9C9C9C] text-[#9C9C9C]">iOS Developer</button>
            </div>
            <div className="flex justify-center gap-2 flex-row mt-6">
                <button className="px-2 py-1 items-center justify-center font-semibold flex gap-1 text-sm">
                    <AddFriendsIcon color="#3BA1FF" />
                    <span>Add friends</span>
                </button>
                <button className="px-2 py-1 items-center justify-center font-semibold flex gap-1 text-sm">
                    <MessageIcon color="#3BA1FF"/>
                    <span>Message</span>
                </button>
                <button className="px-2 py-1 items-center justify-center font-semibold flex gap-1 text-sm">
                    <PhoneIcon color="#3BA1FF" />
                    <span>Call</span>
                </button>
            </div>
        </div>
        <hr className="w-full border-t border-[#E0E0E0]" />
        <div className="flex flex-col gap-3 w-full">
            <div className="flex w-full gap-2 text-[#9C9C9C] text-sm">
                <span className=""><ChevronDownMicorIcon /></span>
                <span>Teams</span>
            </div>
            <div className="flex gap-2">
                <button className="rounded-full bg-[#3BA1FF] px-2 py-1 text-white text-xs">Marketing Team</button>
                <button className="rounded-full bg-[#08BD51] px-2 py-1 text-white text-xs">UX/UI Design</button>
            </div>
        </div>
        <div className="flex w-full gap-2 text-[#9C9C9C] text-sm">
                <span className=""><ChevronDownMicorIcon /></span>
                <span>Friends</span>
        </div>
        <div className="flex flex-col gap-2 w-full p-2">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                    <img src={ littleProfileImgUrl } alt="profile" className="w-8 h-auto rounded-full" />
                    <div className="text-sm font-semibold">Leslie Alexander</div>
                </div>
                <div className="text-sm text-[#C4C4C4]">Team lead</div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                    <img src={ littleProfileImgUrl } alt="profile" className="w-8 h-auto rounded-full" />
                    <div className="text-sm font-semibold">Leslie Alexander</div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                    <img src={ littleProfileImgUrl } alt="profile" className="w-8 h-auto rounded-full" />
                    <div className="text-sm font-semibold">Leslie Alexander</div>
                </div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                    <img src={ littleProfileImgUrl } alt="profile" className="w-8 h-auto rounded-full" />
                    <div className="text-sm text-black font-semibold">Leslie Alexander</div>
                </div>
            </div>
            <button className="text-xs text-[#9C9C9C] bg-[#FAFAFA] px-2 py-1 w-full mt-2">More</button>
        </div>
        <hr className="w-full border-t border-[#E0E0E0]" />
        <div className="flex w-full gap-2 text-[#9C9C9C] text-sm">
                <span className=""><ChevronDownMicorIcon /></span>
                <span>Message</span>
        </div>
        <div className="flex w-full"> 
            <input type="text" placeholder="whrite a message" className="p-2 w-full text-sm text-[#C4C4C4] bg-[#FAFAFA]" />
        </div>
    </div>
    )
}