import Content from "./Content"


const ContentHidden = ({ data, showIpContent, setShowIpContent}) => {
  

  const handleClick = () =>{
    setShowIpContent(true)
  }

  return (
    <>
    {!showIpContent ? (
      <div className="hidden-content">
        <h1>Click below to see your IP info!</h1>
        <button onClick={handleClick}>See your IP!</button>
      </div>
    ):(<Content data={data}/>)}
    
    </>
  )
}

export default ContentHidden