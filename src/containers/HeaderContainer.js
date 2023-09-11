import { connect } from "react-redux";
import { addToCart } from "../actions/Action";
import { HeaderComponent } from "../components/HeaderComponent";


const mapStateToProps = state => ({

    //props
    cart:state
})

const mapDispatchToProps = dispatch => ({

    //actions
    
})


export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
