import { useEffect, useState } from "react"
import ContentHidden from "./ContentHidden";



const Menu = () => {
    const [data, setData] = useState(null);
    const [showIpContent, setShowIpContent] = useState(false);

    useEffect( ()=> {
        async function fetchData(){
            try{
                const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.myip.com");
                if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
                console.log(response)
                const results = await response.json();

                setData(results)
                console.log(data)
            } catch(error) {
              console.error("Error fetching IP" + error)
            }
        }

        if(!data){
          fetchData()
        }

    },[]);

  return (
  <>
    <div>
      <ContentHidden data={data} showIpContent={showIpContent} setShowIpContent={setShowIpContent}/>
    </div>
  </>
  )
}

export default Menu