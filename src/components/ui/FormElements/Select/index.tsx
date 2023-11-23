import { FC } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import { TOption, TSelect } from '@/ui/FormElements/Select/select.types'

import styles from './Select.module.scss'

const animatedComponents = makeAnimated()

const Select: FC<TSelect> = ({
	placeholder,
	error,
	isMulti,
	isLoading,
	field,
	options,
}) => {
	const onChange = (newValue: unknown | OnChangeValue<TOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as TOption[]).map((item) => item.value)
				: (newValue as TOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((item) => field.value.indexOf(item.value) >= 0)
				: options.find((item) => item.value === field.value)
		} else {
			return isMulti ? [] : ''
		}
	}
	return (
		<div className={styles.select}>
			<label className={styles.label}>
				<span className={styles.text}>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
					placeholder="Выберите"
				/>
			</label>
			{error && <span className={styles.error}>{error.message}</span>}
		</div>
	)
}

export default Select
