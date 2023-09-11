import { connect } from "react-redux";
import { addToCart } from "../actions/Action";
import { HomeComponent } from "../components/HomeComponent";

const mapStateToProps = state => ({

    //props
    cart:state
})

const mapDispatchToProps = dispatch => ({

    //actions
    addToCarthandler: (product)=>{dispatch(addToCart(product))}
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
