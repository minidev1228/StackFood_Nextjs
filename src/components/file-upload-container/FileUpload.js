import { Stack, Tooltip, Typography } from '@mui/material'
import FileFormatInfo from '../file-format-text/FileFormatInfo'
import {
    FileUploadHeader,
    FileUploadTextContainer,
    ImageContainerFileUpload,
} from './FileUpload.style'
import { CustomTypographyGray } from '@/styled-components/CustomTypographies.style'
import { CustomDotBox } from '../file-previewer/FilePreviewer.style'
import BackupIcon from '@mui/icons-material/Backup'
import { t } from 'i18next'
import { useTheme } from '@mui/styles'

const FileUpload = (props) => {
    const {
        anchor,
        color,
        width,
        errorStatus,
        labelText,
        titleText,
        hintText,
    } = props
    const theme = useTheme()
    return (
        <Stack width="100%" spacing={3}>
            {titleText && (
                <FileUploadHeader>
                    <CustomTypographyGray variant="h5">
                        {titleText}
                    </CustomTypographyGray>
                </FileUploadHeader>
            )}
            <Stack alignItems="baseline" justifyContent="center" spacing={3}>
                <CustomDotBox
                    onClick={() => anchor.current.click()}
                    color={color}
                    component="label"
                    width={width}
                    errorStatus={errorStatus}
                >
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                    >
                        <ImageContainerFileUpload>
                            <BackupIcon
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    color: '#758590',
                                }}
                            />
                        </ImageContainerFileUpload>
                        <Tooltip title={labelText}>
                            <FileUploadTextContainer>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontSize: '16px',
                                        color: (theme) =>
                                            theme.palette.neutral[600],
                                        fontWeight: '500',
                                    }}
                                >
                                    <Typography
                                        component="span"
                                        sx={{
                                            marginInline: '5px',
                                            fontWeight: '500',
                                            textDecoration: 'underLine',
                                            color: (theme) =>
                                                theme.palette.primary.main,
                                        }}
                                    >
                                        {t('browse')}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        fontWeight="500"
                                    >
                                        {t('your file')}
                                    </Typography>
                                </Typography>
                                <Typography
                                    fontSize="12px"
                                    color={theme.palette.neutral[600]}
                                >
                                    {t(
                                        'Only  jpg, png, jpeg with max 10 Image'
                                    )}
                                </Typography>
                            </FileUploadTextContainer>
                        </Tooltip>
                    </Stack>
                </CustomDotBox>
                {hintText && <FileFormatInfo text={hintText} />}
            </Stack>
        </Stack>
    )
}

FileUpload.propTypes = {}

export default FileUpload
