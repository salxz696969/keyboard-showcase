const PurchaseCard=({props})=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href="">Purchase</a>
        <img src={props.image} alt="" />
      </div>
    )
}
export default PurchaseCard;