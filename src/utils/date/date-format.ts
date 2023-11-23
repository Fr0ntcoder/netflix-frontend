export const dateFormat = (str: string) => {
	return new Date(str).toLocaleDateString('ru')
}
