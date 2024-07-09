import PropTypes from 'prop-types';

function CustomerNameInput(props) {
    return (
        <div>
            <div>
                Current Customer Name: {props.customerName}
            </div>

            <div>
                <input 
                    placeholder='Insert new customer name'
                    value={props.newCustomerName}
                    onChange={(e) => props.setNewCustomerName(e.target.value)}
                />
            </div>
        </div>
    );
}

CustomerNameInput.propTypes = {
    customerName: PropTypes.string.isRequired,
    newCustomerName: PropTypes.string.isRequired,
    setNewCustomerName: PropTypes.func.isRequired,
};

export default CustomerNameInput;
