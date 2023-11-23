import cn from 'classnames'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/button/Button'
import InputField from '@/components/ui/form-elements/input-field/InputField'

import { useActions } from '@/hooks/other/useActions'

import { validEmail } from '@/shared/regEmail'

import styles from './AuthForm.module.scss'

type TAuthField = {
	email: string
	password: string
}

const AuthForm: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login')
	const { login, logout, register } = useActions()
	const {
		register: registerValue,
		formState: { errors },
		handleSubmit
	} = useForm<TAuthField>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<TAuthField> = data => {
		type === 'login' ? login(data) : register(data)
	}

	return (
		<div className={styles.form}>
			<h3 className={styles.title}>Авторизация</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField
					type='email'
					placeholder='Email'
					{...registerValue('email', {
						required: 'Email обязателен',
						pattern: {
							value: validEmail,
							message: 'Неверный формат email'
						}
					})}
					error={errors.email}
					className={styles.input}
				/>
				<InputField
					type='password'
					placeholder='Пароль'
					{...registerValue('password', {
						required: 'Введите пароль',
						minLength: {
							value: 6,
							message: 'Минимальная длина пароля 6 символов'
						}
					})}
					error={errors.password}
					className={styles.input}
				/>
				<div className={styles.btn}>
					<Button
						onClick={() => setType('login')}
						variant='red'
						className={cn({
							[styles.disabled]: type === 'register'
						})}
					>
						Войти
					</Button>
					<Button
						onClick={() => setType('register')}
						variant='red'
						className={cn({
							[styles.disabled]: type === 'login'
						})}
					>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	)
}

export default AuthForm
