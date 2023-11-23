import { ContentState, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { TTextEditor } from '@/ui/FormElements/TextEditor/text-editor.types'

import styles from './TextEditor.module.scss'

const TextEditor: FC<TTextEditor> = ({
	onChange,
	value,
	placeholder,
	error,
}) => {
	const [editor, setEditor] = useState(EditorState.createEmpty())
	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (isUpdated) return
		const defaultValue = value || ''
		const blocksFromHtml = htmlToDraft(defaultValue)

		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		)

		const newEditorState = EditorState.createWithContent(contentState)

		setEditor(newEditorState)
	}, [value, isUpdated])

	const onEditorChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditor(editorState)

		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}
	return (
		<div className={styles.root}>
			<label className={styles.label}>
				<span className={styles.text}>{placeholder}</span>
				<Editor
					toolbarClassName={styles.toolbar}
					editorClassName={styles.editor}
					editorState={editor}
					onEditorStateChange={onEditorChange}
					spellCheck
					toolbar={{
						options: ['inline', 'blockType', 'list'],
						inline: {
							inDropdown: false,
							className: undefined,
							component: undefined,
							dropdownClassName: undefined,
							options: ['bold', 'italic', 'underline', 'strikethrough'],
						},
						blockType: {
							inDropdown: false,
							options: [],
						},
						list: {
							inDrodown: false,
							options: ['unordered', 'ordered'],
						},
					}}
				/>
				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	)
}

export default TextEditor
