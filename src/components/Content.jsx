
const Content = ({data}) => {

  
  return (
    <>
    <h2>Your IP is {data?.ip}</h2>
  <p></p>
    <h2>Your country is {data?.country}</h2>
    <p></p>
    <h2> Your country code is {data?.cc}</h2>
    </>

  )
}

export default Content