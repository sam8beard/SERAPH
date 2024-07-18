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
                    value={props.customerName}
                    onChange={(e) => props.setCustomerName(e.target.value)}
                />
            </div>
        </div>
    );
}

CustomerNameInput.propTypes = {
    customerName: PropTypes.string,
    setCustomerName: PropTypes.func,
};

export default CustomerNameInput;
