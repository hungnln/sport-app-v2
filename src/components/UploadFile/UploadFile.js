import React, { Fragment, useCallback, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { uploadImage } from 'utils/Base64/base64';
export default function UploadFile(props) {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const [fileBase64, setFileBase64] = useState('')
    const handleChange = (file) => {
        setFile(file);
        uploadImage(file).then((data) => { setFileBase64(data), props.getFileCallBack(data) })

    };
    return (
        <Fragment>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} fileOrFiles={props.file} />
            {/* <input type="file" onChange={(e) => { console.log(e, "e") }}></input> */}
            {/* <img src={fileBase64}></img> */}
        </Fragment>
    )
}
