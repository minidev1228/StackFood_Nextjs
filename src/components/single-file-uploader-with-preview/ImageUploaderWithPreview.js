import React, { useRef } from 'react'
import ImagePreviewer from './ImagePreviewer'

const ImageUploaderWithPreview = ({
    file,
    labelText,
    hintText,
    onChange,
    width,
    imageUrl,
    borderRadius,
    error,
    isIcon,
}) => {
    const imageContainerRef = useRef()
    return (
        <>
            <ImagePreviewer
                anchor={imageContainerRef}
                file={file}
                label={labelText}
                hintText={hintText}
                width={width}
                imageUrl={imageUrl}
                borderRadius={borderRadius}
                error={error}
                isIcon={isIcon}
            />
            <input
                ref={imageContainerRef}
                id="file"
                name="file"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                    onChange(e)
                }}
            />
        </>
    )
}

export default ImageUploaderWithPreview
