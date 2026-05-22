import Navigator from "./Navigator"
import ExtensionBar from "./ExtensionBar"
import Body from "./Body"
import ExtendProfile from "./ExtendProfile"

export default function Dashboard() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4">
      <div className="h-screen grid grid-cols-[42px_154px_1fr_312px] gap-1">
        <Navigator />
        <ExtensionBar />
        <Body />
        <ExtendProfile />
      </div>
    </div>
  )
}