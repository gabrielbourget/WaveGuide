import ClassNames from 'classnames';
import last from 'lodash/last';

export const prepareComponent = (context, props, styles) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const openClass = (props.node.isOpen) ? styles.isOpen : null;

	const treeNodeStyle = {
		paddingLeft: getPaddingLeft(props.level, props.node.type) + 'px'
	};

	const treeNodeClasses = ClassNames(styles.treeNode, themeClass);

	const nodeIconStyle = {
		marginRight: props.r_mrgn + 'px'
	};

	const nodeIconClasses = ClassNames(styles.nodeIcon, themeClass);

	const spanClasses = ClassNames(styles.nodeSpan, openClass);

	return {
		treeNodeStyle,
		nodeIconStyle,
		treeNodeClasses,
		nodeIconClasses,
		spanClasses
	};
};

export const getNodeLabel = (node) => (last(node.path.split('/')));

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  //if (type === 'file') paddingLeft += 20;
  return paddingLeft;
};
