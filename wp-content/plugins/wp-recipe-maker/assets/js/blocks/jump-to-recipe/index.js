const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// Backwards compatibility.
let RichText;
if ( wp.hasOwnProperty( 'blockEditor' ) ) {
	RichText = wp.blockEditor.RichText;
} else {
	RichText = wp.editor.RichText;
}

import '../../../css/public/snippets.scss';

registerBlockType( 'wp-recipe-maker/jump-to-recipe', {
    title: __( 'Jump to Recipe' ),
    description: __( 'A button to jump to a WPRM Recipe on the same page.' ),
    icon: 'button',
    keywords: [ 'wprm' ],
    category: 'wp-recipe-maker',
    supports: {
		html: false,
    },
    example: {
		attributes: {
            id: -1,
		},
	},
    transforms: {
        from: [
            {
                type: 'shortcode',
                tag: 'wprm-recipe-jump',
                attributes: {
                    id: {
                        type: 'number',
                        shortcode: ( { named: { id = '' } } ) => {
                            return parseInt( id.replace( 'id', '' ) );
                        },
                    },
                    text: {
                        type: 'string',
                        shortcode: ( { named: { text = '' } } ) => {
                            return text.replace( 'text', '' );
                        },
                    },
                },
            },
        ]
    },
    edit: (props) => {
        const { attributes, setAttributes, isSelected, className } = props;
        const { text } = attributes;

        const richToString = ( text ) => {
            setAttributes( {
                text: text[0],
            } );
        }

        return (
            <div className={ className }>
                <RichText
                    tagName="a"
                    placeholder="Link Text"
                    value={ [text] }
                    onChange={ ( nextValue ) => richToString( nextValue ) }
                    multiline={ false }
                    allowedFormats={ [] }
                />
            </div>
        )
    },
    save: (props) => {
        return null;
    },
} );