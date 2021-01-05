import PropTypes from "prop-types";

function InputField(props) {
    return (
        <div className="mt-6 flex">
            <label className="block flex-1 ml-3">
                <input type="text" className="form-input mt-1 block w-full text-gray-700" name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
            </label>
        </div>
    );
  }
  

  InputField.propTypes = 
  {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  export default InputField;
  

