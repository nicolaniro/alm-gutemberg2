import { isEmpty } from 'lodash';

function MyAutocomplete({
    label,
    id,
    value,
    onChange,
    options = [],
}) {
    // Construct a unique ID for this block.
    const blockId = `my-autocomplete-${id}`;

    // Function to handle the onChange event.
    const onChangeValue = (event) => {
        onChange(event.target.value);
    };

    // Return the block, but only if options were passed in.
    return !isEmpty(options) && (
        <div>
            { /* Label for the block. */}
            <label for={blockId}>
                {label}
            </label>

            { /* Input field. */}
            <input
                list={blockId}
                value={value}
                onChange={onChangeValue}
            />

            { /* List of all of the autocomplete options. */}
            <datalist id={blockId}>
                {options.map((option, index) =>
                    <option value={option.value} label={option.label} />
                )}
            </datalist>
        </div>
    );
};

export default MyAutocomplete;
