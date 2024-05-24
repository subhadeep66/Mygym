import React from "react";
function Footer(){
    return(
        <div className="footer">
            <div className="footer_1">
                <h3>services</h3>
                <a className="services_1" href="www.google.com">Google</a>
                <a className="services_1" href="www.hero.com">Features</a>
            </div>
            <div className="footer_1 para">
                <h3>company</h3>
                <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem debitis consectetur error enim dicta, doloremque sint. Architecto, quaerat dolorem eaque velit totam quam vel similique facilis inventore, reprehenderit eveniet.</p>
            </div>
            <div className="footer_1 support">
                <h3>support</h3>
                <a className="services_1" href="https://www.facebook.com/"><img src="https://toppng.com/uploads/preview/white-facebook-fb-logo-icon-round-outline-png-11689106239acusrtxplx.png" alt="" /></a>
                <a className="services_1" href="www.instagram.com"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" /></a>
            </div>
            <div className="footer_1">
                <h3 className="adress">address</h3>
                <p>Kailashahar Unakoti Tripura</p>
                <p>799270</p>
            </div>
        </div>
    )
}
export default Footer;