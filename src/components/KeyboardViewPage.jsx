import { useState } from "react";
import "../App.css"
const KeyboardViewPage = ({ picture, titleAndPrice ,description }) => {
  const [displayPic, setDisplayPic] = useState(picture.picture1);
  return (
    <div style={{ backgroundColor: "#893331", display: "flex", height:"100vh"}}>
      <div id="displayContainer" style={{width:"75%", display:"flex", flexDirection:"column", alignItems:"center", marginTop:"5%"}}>
        <div style={{backgroundColor:"#944343", borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center", width:"80%", padding:"40px", gap:"20px"}}>
          <img src={displayPic} alt="" style={{width:"80%"}}/>
          <div id="slidesMenu" style={{display:"flex", justifyContent:"center", gap:"10px"}}>
            <div style={{width:"30%", display:"flex", justifyContent:"center", background:"white", padding:"10px", borderRadius:"10px", opacity:displayPic===picture.picture1?"1":"0.5"}}><img src={picture.picture1} alt="" onClick={()=>setDisplayPic(picture.picture1)} style={{width:"100%"}}/></div>
            <div style={{width:"30%", display:"flex", justifyContent:"center", background:"white", padding:"10px", borderRadius:"10px", opacity:displayPic===picture.picture2?"1":"0.5"}}><img src={picture.picture2} alt="" onClick={()=>setDisplayPic(picture.picture2)} style={{width:"100%"}}/></div>
            <div style={{width:"30%", display:"flex", justifyContent:"center", background:"white", padding:"10px", borderRadius:"10px", opacity:displayPic===picture.picture3?"1":"0.5"}}><img src={picture.picture3} alt="" onClick={()=>setDisplayPic(picture.picture3)} style={{width:"100%"}}/></div>
          </div>
        </div>
        <button style={{marginTop:"20px", border:"none", width:"150px", height:"50px"}}>Add To Cart</button>
      </div>
      <div id="descriptionContainer" style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", marginTop:"5%"}}>
        <h1 style={{color:"white"}}>{titleAndPrice.title}</h1>
        <h1 style={{color:"white", alignSelf:"flex-start", marginLeft:"30px", marginTop:"40px", marginBottom:"40px"}}>{titleAndPrice.price}</h1>
        <ul style={{alignSelf:"flex-start", color:"white"}}>
          {description.map((e,i)=>{
              return(
                  <li key={i} >{e}</li>
              )
          })}
        </ul>
      </div>
    </div>
  );
};
export default KeyboardViewPage;
