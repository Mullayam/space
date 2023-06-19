import React from 'react'
import dynamic from 'next/dynamic'
type Props = {}
const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false
});

const Editor = (props: Props) => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['image', 'video'],
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'list', 'bullet',
        'align',
        'image', 'video'
    ];

    return (
        <div className="w-full max-w-[500px] mx-auto">
            <ReactQuill
                className="border border-black text-black"
                modules={modules}
                formats={formats}
            />
        </div>
    )
}

export default Editor