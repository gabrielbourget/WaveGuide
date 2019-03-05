import ClassNames from 'classnames';
import last from 'lodash/last';

export const prepareComponent = (context, props, styles) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const nodeRowClasses = ClassNames(styles.nodeRow, themeClass);

	const treeNodeStyle = {
		paddingLeft: getPaddingLeft(props.level, props.node.type) + 'px'
	};

	const treeNodeClasses = ClassNames(styles.treeNode, themeClass);

	const nodeIconStyle = {
		marginRight: props.r_mrgn + 'px'
	};

	const nodeIconClasses = ClassNames(styles.nodeIcon, themeClass);

	return {
		treeNodeStyle,
		nodeIconStyle,
		treeNodeClasses,
		nodeIconClasses
	};
};

export const getNodeLabel = (node) => (last(node.path.split('/')));

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  if (type === 'file') paddingLeft += 20;
  return paddingLeft;
};
