import React from 'react'
import {
    FilePreviewerWrapper,
    CustomBoxForFilePreviewer,
} from '../file-previewer/FilePreviewer.style'
import ImageUploaderThumbnail from './ImageUploaderThumbnail'
import CustomImageContainer from '../CustomImageContainer'

const ImagePreviewer = ({
    anchor,
    file,
    label,
    width,
    imageUrl,
    borderRadius,
    error,
    isIcon,
}) => {
    let previewImage
    if (typeof file !== 'string') {
        previewImage = {
            url: URL.createObjectURL(file),
        }
    } else previewImage = file

    return (
        <>
            <CustomBoxForFilePreviewer>
                {previewImage ? (
                    <FilePreviewerWrapper
                        onClick={() => anchor.current.click()}
                        width={width}
                        height="100px"
                        objectFit
                        borderRadius={borderRadius}
                    >
                        {typeof file !== 'string' ? (
                            <CustomImageContainer
                                src={previewImage.url}
                                alt="preview"
                                objectFit="cover"
                            />
                        ) : (
                            <CustomImageContainer
                                src={`${previewImage}`}
                                alt="preview"
                                objectFit="cover"
                            />
                        )}
                    </FilePreviewerWrapper>
                ) : (
                    <FilePreviewerWrapper
                        onClick={() => anchor.current.click()}
                        width={width}
                        height="100px"
                        objectFit
                        borderRadius={borderRadius}
                    >
                        <ImageUploaderThumbnail
                            label={label}
                            width={width}
                            error={error}
                            isIcon={isIcon}
                            borderRadius={borderRadius}
                        />
                    </FilePreviewerWrapper>
                )}
            </CustomBoxForFilePreviewer>
        </>
    )
}

export default ImagePreviewer
