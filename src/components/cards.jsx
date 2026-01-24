import { Card } from '../components/card'


export function Cards({height, data = {}, link = false, darker = false}) {
  // const amountOfCards = data.length;
  
  // console.log(`link: ${link}`)
  
  
  if (link === true) {
    return (
      <div className="cards">
      {data.map((item, index) => {
        return <Card 
          key={index} 
          title={item.title} 
          desc={item.desc} 
          height={height} 
          link={true} 
          linkText={item.text} 
          linkUrl={item.url} 
          darker={darker} 
        ></Card>
      })}
      </div>
    )
  } else {
    return (
      <div className="cards">
      {data.map((item, index) => {
        return <Card 
          key={index} 
          title={item.title} 
          desc={item.desc} 
          height={height} 
          darker={darker}
        ></Card>
      })}
      </div>
    )
  }
}