import Image from 'next/image'
import { CSSProperties, FC } from 'react'
import { FieldError } from 'react-hook-form'

import { useUpload } from '@/hooks/files/useUpload'

import { urlName } from '@/utils/string/url-name'

import styles from './UploadField.module.scss'

type TUploadFiled = {
	folder?: string
	value?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

const UploadField: FC<TUploadFiled> = ({
	folder,
	value,
	onChange,
	placeholder,
	error,
	style,
	isNoImage = false
}) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder)
	return (
		<div className={styles.upload}>
			<div className={styles.wrap}>
				<label className={styles.label}>
					<span className={styles.text}>{placeholder}</span>
					<div className={styles.file}>
						<span className={styles.btn}>Выберите файл</span>
						<span className={styles.empty}>
							{!value ? 'Файл не выбран' : urlName(value)}
						</span>
					</div>
					<input type='file' onChange={uploadFile} className={styles.hidden} />
				</label>
				{!isNoImage && (
					<div className={styles.image}>
						{value && (
							<Image
								src={value}
								fill={true}
								style={{
									objectFit: 'cover',
									objectPosition: 'center'
								}}
								alt='dff'
							/>
						)}
					</div>
				)}
			</div>
			{error && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}

export default UploadField
