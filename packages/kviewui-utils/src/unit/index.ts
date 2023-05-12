/**
 * @zh 获取单位
 * @param e
 */
export const getUnitByUnit = (e: any): string => {
	if  (e.endsWith('rpx')) {
		return 'rpx';
	}
    if (e.endsWith('px')) {
		return 'px';
	}
	if (e.endsWith('rem')) {
		return 'rem';
	}
    if (e.endsWith('em')) {
        return 'em';
    }
    if (e.endsWith('upx')) {
        return 'upx';
    }
    if (e.endsWith('vw')) {
        return 'vw';
    }
    if (e.endsWith('vh')) {
        return 'vh';
    }
	return '';
}

/**
 * @zh 获取尺寸单位数字
 * @param e 尺寸单位
 * @return
 */
export const getNumberByUnit = (e: any): any => {
	const arr = e.split(getUnitByUnit(e));
	return arr[0] || 0;
}