import { FontFamily, FontSize, TextStyle } from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor, useEditorState } from '@tiptap/react';
import './styles.css';
import { useImperativeHandle, useState, useRef, forwardRef } from 'react';

const TipTap = forwardRef((_, ref) => {

    const editor = useEditor({
        extensions: [StarterKit, TextStyle, FontFamily, FontSize],
        content: `
        <p>This isn’t bold.</p>
        <p><strong>This is bold.</strong></p>
      `,
        immediatelyRender: false,
    });

    const editorState = useEditorState({
        editor,
        selector: () => {
            if (editor)
                return {
                    isInter: editor.isActive('textStyle', { fontFamily: 'Inter' }),
                    isComicSans: editor.isActive('textStyle', { fontFamily: '"Comic Sans MS", "Comic Sans"' }),
                    isSerif: editor.isActive('textStyle', { fontFamily: 'serif' }),
                    isMonospace: editor.isActive('textStyle', { fontFamily: 'monospace' }),
                }
        },
    });

    useImperativeHandle(ref, () => ({
        getHTML: () => editor?.getHTML(),
    }));


    if (!editor) return null;
    if (!editorState) return null;

    return (
        <>
            <div className="editor-container">

                <div className="control-group">
                    <div className="button-group">
                        <button
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className="font-bold"
                        >
                            Bold
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className="italic"
                        >
                            Italic
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            className="underline underline-offset-4"
                        >
                            Underline
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontSize('12px').run()}
                            className="text-sm"
                        >
                            12px
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontSize('18px').run()}
                            className="text-lg"
                        >
                            18px
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontSize('24px').run()}
                            className="text-2xl"
                        >
                            24px
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontSize('30px').run()}
                            className="text-3xl"
                        >
                            30px
                        </button>
                        <button
                            onClick={() => editor.commands.setFontFamily('Inter')}
                            className="text-3xl"
                        >
                            Font
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
                            className={editorState.isInter ? 'is-active' : ''}
                            data-test-id="inter"
                        >
                            Inter
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontFamily('"Comic Sans MS", "Comic Sans"').run()}
                            className={editorState.isComicSans ? 'is-active' : ''}
                            data-test-id="comic-sans"
                        >
                            Comic Sans
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontFamily('serif').run()}
                            className={editorState.isSerif ? 'is-active' : ''}
                            data-test-id="serif"
                        >
                            Serif
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setFontFamily('monospace').run()}
                            className={editorState.isMonospace ? 'is-active' : ''}
                            data-test-id="monospace"
                        >
                            Monospace
                        </button>
                    </div>
                </div>
                <EditorContent editor={editor} />

            </div>

        </>
    );
});

TipTap.displayName = 'TipTap';

export default TipTap;


