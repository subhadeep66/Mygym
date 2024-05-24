function Details(){
      const currentTime=new Date()
    const day=currentTime.getDay()
    let b=""
      if(day<2){
        b=<div className="details">
        <h5>Split Squats</h5>
        <h5>Glute Bridge</h5>
        <h5>Walking Lunges</h5>
        <h5>Squats</h5>
  </div>
      }
      else if(day<4){
        b=<div className="details">
        <h5>Split Squats</h5>
        <h5>Glute Bridge</h5>
        <h5>Walking Lunges</h5>
        <h5>Squats</h5>
  </div>
      }
      else if(day===5){
        b=<div className="details">
        <h5>Over Head press</h5>
        <h5>Side lateral raise</h5>
        <h5>One arm dumbell row</h5>
        <h5>Pull-up</h5>
  </div>
      }
      else if (day===6){
        b=<div className="details">
            <h5>Split Squats</h5>
            <h5>Glute Bridge</h5>
            <h5>Walking Lunges</h5>
            <h5>Squats</h5>
      </div>
      }
      if(day===0){
          b=<div className="details">
            <h5><img className="rest_pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8MXtbFOvLmzTfxe0lriXk80Cm0vsUIrjc-j3_1wW3A&s" alt="" /></h5>
          </div>
      }
    return (
        <div>{b}</div>
    )
}
export default Details