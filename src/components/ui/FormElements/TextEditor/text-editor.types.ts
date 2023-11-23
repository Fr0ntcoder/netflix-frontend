import { EditorProps } from 'draft-js'

import { IFieldProps } from '@/ui/FormElements/InputField/input.types'

type TypeEditorPropsField = EditorProps & IFieldProps
export type TTextEditor = Omit<TypeEditorPropsField, 'editorState'> & {
	onChange: (...event: any[]) => void
	value: string
}
