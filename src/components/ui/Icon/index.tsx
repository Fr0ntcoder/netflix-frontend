import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcon } from '@/shared/icons/icon.type'

type TIconProps = {
	name: TypeMaterialIcon
}
const Icon: FC<TIconProps> = ({ name }) => {
	const MIcon = MaterialIcons[name]

	return <MIcon /> || <MaterialIcons.MdDragIndicator />
}

export default Icon
