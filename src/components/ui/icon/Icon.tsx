import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcon } from '@/shared/icons/icon.type'

type TIconProps = {
	name: TypeMaterialIcon
}
const Icon: FC<TIconProps> = ({ name }) => {
	const Icon = MaterialIcons[name]

	return <Icon /> || <MaterialIcons.MdDragIndicator />
}

export default Icon
