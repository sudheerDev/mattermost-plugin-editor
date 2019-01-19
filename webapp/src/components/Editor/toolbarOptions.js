import SimpleMDE from 'simplemde';

const toolbarOptions = [{
    name: 'bold',
    action: SimpleMDE.toggleBold,
    className: 'fa fa-bold',
    title: 'Bold',
    default: true,
}, {
    name: 'italic',
    action: SimpleMDE.toggleItalic,
    className: 'fa fa-italic',
    title: 'Italic',
    default: true,
}, {
    name: 'strikethrough',
    action: SimpleMDE.toggleStrikethrough,
    className: 'fa fa-strikethrough',
    title: 'Strikethrough',
}, {
    name: 'heading-smaller',
    action: SimpleMDE.toggleHeadingSmaller,
    className: 'fa fa-header fa-header-x fa-header-smaller',
    title: 'Smaller Heading',
}, {
    name: 'heading-bigger',
    action: SimpleMDE.toggleHeadingBigger,
    className: 'fa fa-header fa-header-x fa-header-bigger',
    title: 'Bigger Heading',
}, {
    name: 'code',
    action: SimpleMDE.toggleCodeBlock,
    className: 'fa fa-code',
    title: 'Code',
}, {
    name: 'quote',
    action: SimpleMDE.toggleBlockquote,
    className: 'fa fa-quote-left',
    title: 'Quote',
    default: true,
}, {
    name: 'unordered-list',
    action: SimpleMDE.toggleUnorderedList,
    className: 'fa fa-list-ul',
    title: 'Generic List',
    default: true,
}, {
    name: 'ordered-list',
    action: SimpleMDE.toggleOrderedList,
    className: 'fa fa-list-ol',
    title: 'Numbered List',
    default: true,
}, {
    name: 'link',
    action: SimpleMDE.drawLink,
    className: 'fa fa-link',
    title: 'Create Link',
    default: true,
}, {
    name: 'image',
    action: SimpleMDE.drawImage,
    className: 'fa fa-picture-o',
    title: 'Insert Image',
    default: true,
}, {
    name: 'table',
    action: SimpleMDE.drawTable,
    className: 'fa fa-table',
    title: 'Insert Table',
}, {
    name: 'horizontal-rule',
    action: SimpleMDE.drawHorizontalRule,
    className: 'fa fa-minus',
    title: 'Insert Horizontal Line',
}];

export default toolbarOptions;
