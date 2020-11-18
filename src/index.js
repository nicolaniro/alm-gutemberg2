
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton, BlockControls ,URLPopover } from '@wordpress/block-editor';
import { Toolbar, IconButton, Button, Popover, LinkControl } from "@wordpress/components";
import { withState } from '@wordpress/compose';
import { KeyboardShortcuts } from '@wordpress/components';




const MyPopover = withState( {
    isVisible: false,
} )( ( { isVisible, setState } ) => {
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };



    return (
        <div>
            <KeyboardShortcuts bindGlobal shortcuts={ {
                'mod+e': toggleVisible,
            } } />
        <Button
            icon="edit"
            onClick={ toggleVisible }>
            Toggle Popover!
            { isVisible && (
                <Popover>
                    <p>
                    <a href="">Popover is toggled!</a>
                    </p>

                    <p>
                    <a href="">Popover is toggled!</a>
                    </p>

                </Popover>
            )}
        </Button>
        </div>
    );
} );


const MyCustomButton = props => {
    return 	(
        <BlockControls>
            <Toolbar>
                {/* <Button
                    label="My very own custom button"
                    icon="edit"
                    className="my-custom-button"
                    onClick={() => {
                                console.log('pressed button')
                                return <MyPopover />
                         }
                    }

                /> */}

<MyPopover />
            </Toolbar>
       </BlockControls>
    )
};

registerFormatType(
    'my-custom-format/sample-output', {
        title: 'Sample output',
        tagName: 'samp',
        className: null,
        edit: MyCustomButton,
    }
);
