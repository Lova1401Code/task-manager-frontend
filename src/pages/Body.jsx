import profileUrl from '../assets/profile.png'
import PlusIcon from '../assets/icons/PlusIcon'
import SearchIcon from '../assets/icons/SearchIcon'

export default function Body() {
    return (
        <div className="my-4 bg-white p-3">
            <div className="flex justify-between w-full items-center">
                <div className="text-lg font-semibold">Marketing Plane W23</div>
                <div className="flex justify-end items-center -space-x-4 gap-2">
                    <img src={profileUrl} alt="profile" className="w-8 h-auto rounded-full" />
                    <img src={profileUrl} alt="profile" className="w-8 h-auto rounded-full" />
                    <img src={profileUrl} alt="profile" className="w-8 h-auto rounded-full" />
                    <div className="flex pl-4"><PlusIcon /></div>
                    <div className="flex pl-8"><SearchIcon /></div>
                </div>
            </div>
         </div>
    )
}