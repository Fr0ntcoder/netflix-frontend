import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TUserInput } from 'service/user/user.types'

import Button from '@/components/ui/button/Button'
import InputField from '@/components/ui/form-elements/input-field/InputField'
import SwitchField from '@/components/ui/form-elements/switch-field/SwitchField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useUserEdit } from '@/hooks/users/user/useUserEdit'

import { validEmail } from '@/shared/regEmail'

import styles from './UserEdit.module.scss'

const UserEdit: FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		control,
	} = useForm<TUserInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useUserEdit(setValue)
	return (
		<Meta title="Администратор - обновить пользователя" description="">
			<Heading
				title="Обновить пользователя"
				variant="h4"
				className={styles.title}
			/>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<InputField
					type="email"
					placeholder="Email"
					{...register('email', {
						required: 'Email обязателен',
						pattern: {
							value: validEmail,
							message: 'Неверный формат email',
						},
					})}
					error={errors.email}
					className={styles.input}
				/>
				<span className={styles.text}>Администратор</span>
				<Controller
					name="isAdmin"
					control={control}
					render={({ field }) => (
						<SwitchField
							value={field.value}
							onHandler={() => {
								field.onChange(!field.value)
							}}
						/>
					)}
				/>
				<Button variant="red">Обновить</Button>
			</form>
		</Meta>
	)
}

export default UserEdit
