import MyBoxFlag from "./MyBoxFlag"

export default function MyBox() {

  return (
    <div className="h-full w-full flex justify-center items-center">
      <MyBoxFlag color='blue'/>
      <MyBoxFlag color='orange'/>
      <MyBoxFlag color='red'/>
      
    </div>
  )
}
