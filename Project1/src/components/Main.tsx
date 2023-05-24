const Main = (props) => {
  return (
    <main className={props.darkMode ? "bg-main-black" : "bg-white"}>
      <div className="p-[3rem] h-[85vh] ">
        <h2 className={`${props.darkMode ? "text-white" : "text-black"} text-[2rem] font-bold`} >Fun facts about React</h2>
        <ul className={`${props.darkMode ? "text-gray" : "text-black"} p-[2rem] text-[1.3rem] marker:text-sky-300 list-disc`}>
          <li>Was first realeased in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, icluding mobile apps</li>
        </ul>
      </div>
    </main>
  )
}

export default Main
