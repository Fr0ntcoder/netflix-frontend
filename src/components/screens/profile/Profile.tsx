import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { TProfileInput } from 'service/user/user.types'

import Button from '@/components/ui/button/Button'
import InputField from '@/components/ui/form-elements/input-field/InputField'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/components/ui/meta/Meta'

import { useProfile } from '@/hooks/profile/useProfile'

import { validEmail } from '@/shared/regEmail'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<TProfileInput>({
		mode: 'onChange',
	})

	const { onSubmit } = useProfile(setValue)
	return (
		<Meta title="Профиль" description="">
			<Heading title="Профиль" variant="h4" className={styles.title} />
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
				<InputField
					type="password"
					placeholder="Пароль"
					{...register('password', {
						required: 'Введите пароль',
						minLength: {
							value: 6,
							message: 'Минимальная длина пароля 6 символов',
						},
					})}
					error={errors.password}
					className={styles.input}
				/>
				<Button variant="red">Обновить</Button>
			</form>
		</Meta>
	)
}

export default Profile
