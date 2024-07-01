import PropTypes from 'prop-types';

function CustomerNameInput(props) {
    return (
        <div className="title">
            <div className="customerTitle">
                <p>Customer Name</p>
            </div>

            <div className="customer">
                <div className="customerInput">
                    <input
                        className="customerInputField"
                        placeholder="Enter name of customer"
                        value={props.customer}
                        onChange={(e) => props.setCustomerName(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

CustomerNameInput.propTypes = {
    customer: PropTypes.string.isRequired,
    setCustomerName: PropTypes.func.isRequired,
};

export default CustomerNameInput;
