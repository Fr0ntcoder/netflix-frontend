import { EditorProps } from 'draft-js'

import { IFieldProps } from '@/shared/types/input'

type TypeEditorPropsField = EditorProps & IFieldProps
export type TTextEditor = Omit<TypeEditorPropsField, 'editorState'> & {
	onChange: (...event: any[]) => void
	value: string
}
