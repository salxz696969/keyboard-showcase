const DisplayCard = ({props}) => {
    <div>
        <img src={props.image} alt="" />
        <p>{props.description}</p>
    </div>
};

export default DisplayCard;