
function Logic(){
    let thought="No Pain No gain"
    const currentTime=new Date()
    const day=currentTime.getDay()
    let b=""
      if(day<2){
          b="Its Chest & Triceps Day"
      }
      else if(day<4){
          b="Its Triceps and Abs Day"
      }
      else if(day===5){
          b="Its Back and Shoulder Day"
      }
      else if (day===6){
          b="Its Leg Day"
      }
    if(day===0){
          b="Take Rest and Recover ☺️"
      }
      console.log(day)
      return (
        <div>
            <h3 className="logic">{b}</h3>
            <h5 className="logic2"> {thought}</h5>
        </div>
      )
}
export default Logic;