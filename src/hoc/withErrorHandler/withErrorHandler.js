import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal'



const withReturnHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentWillMount () {
            
            axios.interceptors.request.use(request => {
                this.setState({error: null})
                return request;
            })

            axios.interceptors.response.use(response => response, error => {
                this.setState({error: error})
                return 
            })
        }
        
        clearErrorHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <>  
                    <Modal 
                    modalClosed={this.clearErrorHandler}
                    show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                    
                </>
            )
    }}
};

export default withReturnHandler;