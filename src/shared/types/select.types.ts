import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

import { IFieldProps } from '@/shared/types/input.types'

export type TOption = {
	value: string
	label: string
}

export type TSelect = IFieldProps & {
	options: Options<TOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
