import React from 'react'
import Meta from '../../../components/Meta'
import { Container, CssBaseline } from '@mui/material'
import RateAndReview from '../../../components/rate-and-review/RateAndReview'

const index = ({ configData }) => {
    return (
        <>
            <Meta title={`Rate and Review - ${configData?.business_name}`} />
            <CssBaseline />
            <Container
                maxWidth="lg"
                sx={{ minHeight: '80vh', mb: { xs: '72px', md: '0' } }}
            >
                <RateAndReview />
            </Container>
        </>
    )
}

export default index

export const getServerSideProps = async (context) => {
    const { req } = context
    const language = req.cookies.languageSetting
    const configRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/config`,
        {
            method: 'GET',
            headers: {
                'X-software-id': 33571750,
                'X-server': 'server',
                'X-localization': language,
                origin: process.env.NEXT_CLIENT_HOST_URL,
            },
        }
    )
    const config = await configRes.json()
    return {
        props: {
            configData: config,
        },
    }
}
