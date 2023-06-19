import React from 'react'
import '@/styles/Menubar.module.css'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import TextStyle from '@tiptap/extension-text-style'
import { type Editor, EditorContent, useEditor,type EditorOptions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { BiUndo, BiRedo } from 'react-icons/bi'
import { FiItalic, FiBold } from 'react-icons/fi'
import { GrStrikeThrough } from 'react-icons/gr'
import { MdFormatListBulleted } from 'react-icons/md'
import { VscListOrdered } from 'react-icons/vsc'

const MenuBar = ({ editor }: {
    editor: Editor | null
}) => {
    if (!editor) {
        return null
    }

    return (
        <div className='bg-gray-100 sticky w-full'>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleBold().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={`rounded-md p-2 m-1 hover:bg-emphasis ${editor.isActive('bold') ? 'is-active' : ''}`}>
                <FiBold
                    fontSize={20}
                />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleItalic().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={`rounded-md p-2 m-1 hover:bg-emphasis ${editor.isActive('italic') ? 'is-active' : ''}`}>
                <FiItalic
                    fontSize={20}
                />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleStrike().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={`rounded-md  p-2 m-1  hover:bg-emphasis ${editor.isActive('strike') ? 'is-active' : ''}`}
            >
                <GrStrikeThrough
                    fontSize={20}
                />
            </button>

            <button
                className=" rounded-md p-2 m-1 hover:bg-emphasis"
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().undo().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            >
                <BiUndo
                    fontSize={20}
                />
            </button>
            <button
                className=" rounded-md p-2 m-1 hover:bg-emphasis"
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().redo().run()
                }}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                <BiRedo
                    fontSize={20}
                />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleBulletList().run()
                }}
                className={` rounded-md  p-2 m-1  hover:bg-emphasis ${editor.isActive('bulletList') ? 'is-active' : ''}`}
            >
                <MdFormatListBulleted
                    fontSize={20}
                />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    editor.chain().focus().toggleOrderedList().run()
                }}
                className={`rounded-md p-2 m-1 hover:bg-emphasis ${editor.isActive('orderedList') ? 'is-active' : ''}`}
            >
                <VscListOrdered
                    fontSize={20}
                />
            </button>
        </div>
    )
}

export default function TipTapEditor({ placeholder }: {
    placeholder: string
}) {
    const editor = useEditor({
        onUpdate: (text => console.log(text)),
        editorProps: {
            attributes: {
                class: "focus:outline-none  pl-6 list-disc list-decimal  border placeholder:text-black border-black h-screen overflow-x-hidden min-h-full overflow-y-scroll  scrollbar-thin max-w-full border",
            }
        },
        extensions: [
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            /* TextStyle.configure({ types: [ListItem.name] }), */
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: true, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: 'list-disc'
                }
            })
        ],
    })
    
    const options = { placeholder: 'Enter your text here' } as Partial<EditorOptions>

    editor?.setOptions(options)

    return (
        <>
            <MenuBar
                editor={editor}
            />

            <EditorContent
                editor={editor}
            />

        </>
    )
}