import PropTypes from 'prop-types';

function CustomerNameInput(props) {
    return (
        <div>
            <div>
                Current Customer Name: AAAAA
            </div>

            <div>
                <input placeholder='Input new customer name'
                value={props.customerName}
                onChange={(e) => props.setCustomerName(e.target.value)}></input>
            </div>
        </div>
    )
}

CustomerNameInput.propTypes = {
    customerName: PropTypes.string,
    setProjectName: PropTypes.func,
};

export default CustomerNameInput;