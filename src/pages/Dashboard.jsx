import Navigator from "./Navigator"
import ExtensionBar from "./ExtensionBar"
import Body from "./Body"
import ExtendProfile from "./ExtendProfile"

export default function Dashboard() {
  return (
    <div className="w-full  mx-auto">
      <div className="h-auto grid grid-cols-[42px_154px_1fr_312px] gap-0.5">
        <Navigator />
        <ExtensionBar />
        <Body />
        <ExtendProfile />
      </div>
    </div>
  )
}