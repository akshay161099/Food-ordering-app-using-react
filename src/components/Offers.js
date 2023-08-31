const Offers = (params) =>{
    
    const items = params.offerItems;
    const {header,couponCode, description, offerLogo} = items;
    console.log(items);
    return (
        <div className="offerCards">
            <div className="offerCard">
            <h1>{header}</h1>
            <h3>{couponCode}</h3>
            <h3>{description}</h3>  
            </div>
        </div>
        
    );
}
export default Offers;