import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const DirectionIcon = (props) => {
    const { width = '16', height = '16' } = props
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <svg
            width={isSmall ? '13' : width}
            height={isSmall ? '13' : height}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_810_18334)">
                <path
                    d="M15.4613 6.74288L9.6891 0.970639C9.27337 0.586888 8.72972 0.331055 8.10613 0.331055C7.48253 0.331055 6.93889 0.586888 6.52316 0.970639L0.766902 6.74288C0.351172 7.14262 0.111328 7.70226 0.111328 8.32585C0.111328 8.94945 0.351172 9.4931 0.766902 9.90882L6.52316 15.6651C6.9229 16.0808 7.48253 16.3207 8.10613 16.3207C8.72972 16.3207 9.28936 16.0808 9.6891 15.6651L15.4613 9.90882C15.8611 9.4931 16.1009 8.93346 16.1009 8.32585C16.1009 7.71825 15.8611 7.14262 15.4613 6.74288ZM14.6299 9.09336L8.87363 14.8496C8.68175 15.0415 8.40993 15.1534 8.12212 15.1534C7.83431 15.1534 7.54649 15.0415 7.35462 14.8496L1.58237 9.09336C1.3905 8.90148 1.26258 8.62966 1.26258 8.32585C1.26258 8.02205 1.3905 7.76622 1.58237 7.57434L7.33863 1.8021C7.5305 1.61022 7.80233 1.48231 8.10613 1.48231C8.40993 1.48231 8.66576 1.61022 8.85764 1.8021L14.6139 7.55835C14.8058 7.75023 14.9337 8.02205 14.9337 8.30986C14.9337 8.59768 14.8058 8.88549 14.6139 9.07737L14.6299 9.09336ZM9.86498 5.55965C9.833 5.52767 9.80103 5.51169 9.76905 5.51169C9.6891 5.51169 9.62514 5.57564 9.62514 5.65559V6.98273H6.77899C5.83561 6.98273 5.0681 7.75023 5.0681 8.70961V10.6124C5.0681 10.8202 5.228 10.9801 5.43586 10.9801H5.81962C6.02748 10.9801 6.20337 10.8202 6.20337 10.6124V8.70961C6.20337 8.38981 6.4592 8.13398 6.77899 8.13398H9.62514V9.46112C9.62514 9.54106 9.6891 9.60502 9.76905 9.60502C9.80103 9.60502 9.833 9.58903 9.86498 9.55705L11.7358 7.70226C11.7677 7.67028 11.7997 7.62231 11.7997 7.55835C11.7997 7.4944 11.7677 7.46242 11.7358 7.43044L9.86498 5.55965Z"
                    fill={theme.palette.primary.main}
                />
            </g>
            <defs>
                <clipPath id="clip0_810_18334">
                    <rect
                        width="15.9896"
                        height="15.9896"
                        fill="white"
                        transform="translate(0.111328 -0.00488281)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default DirectionIcon