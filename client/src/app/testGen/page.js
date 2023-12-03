"use client"

import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Loading from './loading';
import Editor from '@monaco-editor/react';
import FileUploadForm from '@/components/fileUploadForm';
import ZipFileViewer from '@/components/zipFileViewer';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#3717e8',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};


export default function Refactor(props) {

    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)

    const options = ["DJango", "React.js"]
    const [zipFile, setZipFile] = useState(null);
    const [fileContent, setFileContent] = useState('');

    const handleFileUpload = (file, entries) => {
        // Handle the selected file
        console.log('Selected File:', file);

        // Handle the list of entries
        console.log('Zip Entries:', entries);

        // Perform further processing as needed
    };


    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        maxFiles: 1,
    });

    const style = React.useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const uploadHandler = async () => {
        try {
            setLoading(true)
            const formData = new FormData();
            if (acceptedFiles.length > 0) {
                formData.append("file", acceptedFiles[0]);
            }

            var requestOptions = {
                method: "POST",
                body: formData,
                redirect: "follow",
            };

            const response = await fetch("http://localhost:8000/generate_tests", requestOptions);
            if (response.ok) {
                console.log("all is good")
                const content = await response.text();
                setFileContent(content);
                setLoading(false)
            } else {
                setLoading(false)
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
        }

    }

    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
    }

    return (
        <div className='flex flex-col justify-center items-center relative gap-10 '>
            {loading
                ? <Loading />
                : <>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-500 via-purple-400 inline text-[46px] font-bold">
                        Generate Tests
                    </h1>
                    <div class="flex justify-between w-full -z-[2px] absolute flex-row h-full left-0 lg:h-full lg:max-w-7xl lg:px-0 mx-auto px-6 right-0">
                        <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                        <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                        <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                        <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                        <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                        <div class="w-full h-full border-[#f5f5f510]/5 border-dashed border-x"></div>
                    </div>
                    <section className=' flex z-10 justify-around w-full'>
                        <div className=' w-1/3 h-3/4 min-h-fit rounded-xl p-6 flex justify-between items-center flex-col border-[1px] border-slate-600 hover:shadow-[5px_5px_rgba(86,_22,_122,_0.4),_10px_10px_rgba(86,_22,_122,_0.3),_15px_15px_rgba(86,_22,_122,_0.2),_20px_20px_rgba(86,_22,_122,_0.1),_25px_25px_rgba(86,_22,_122,_0.05)] bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'>
                            <h4 className=' flex justify-center m-4 font-semibold text-gray-100 text-center'>Upload your code file you want to generate tests</h4>
                            <section className="container">
                                <div {...getRootProps({ style })}>
                                    <input {...getInputProps()} />
                                    <p>Drag &apos;n&apos; drop, or click to select files</p>
                                    <p>Choose only one file</p>
                                </div>
                                <aside>
                                    {acceptedFiles.length > 0 &&
                                        <>
                                            <h4 className=' text-gray-100 font-semibold'>Files</h4>
                                            <ul className=' text-gray-100'>{files}</ul>
                                        </>}
                                </aside>
                            </section>
                            <button onClick={uploadHandler} class="relative inline-flex items-center justify-start px-2 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group w-48 mt-10">
                                <span class="w-40 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">Generate</span>
                            </button>
                        </div>
                        <div>
                            {/* <div>
                                <FileUploadForm onFileUpload={handleFileUpload} />
                                <ZipFileViewer zipFile={zipFile} />
                            </div> */}
                            <Editor
                                defaultLanguage="javascript"
                                defaultValue="// generated test code appear here"
                                onChange={handleEditorChange}
                                theme="vs-dark"
                                width="60vw"
                                value={fileContent}
                                className=""
                                height="80vh"
                            />
                        </div>
                    </section>
                </>
            }
            <img src="/gradient.svg" loading="eager" alt="" className=' -z-10 absolute w-[600px]'></img>
        </div>
    );
}