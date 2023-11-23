import { EditorProps } from 'draft-js'

import { IFieldProps } from '@/components/ui/form-elements/input-field/input.types'

type TypeEditorPropsField = EditorProps & IFieldProps
export type TTextEditor = Omit<TypeEditorPropsField, 'editorState'> & {
	onChange: (...event: any[]) => void
	value: string
}
