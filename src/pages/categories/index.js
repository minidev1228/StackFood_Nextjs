import React from 'react'
import Category from '../../components/category/Category'
import Meta from '../../components/Meta'
import { useTranslation } from 'react-i18next'
import { landingPageApi } from '@/components/landingpage/Api'
import HomeGuard from '../../components/home-guard/HomeGuard'

const index = ({ configData, landingPageData, pathName }) => {
    const { t } = useTranslation()
    return (
        <div className="div">
            <HomeGuard>
                <Meta
                    title={`${t('Categories')} on ${configData?.business_name}`}
                    ogImage={`${configData?.base_urls?.react_landing_page_images}/${landingPageData?.banner_section_full?.banner_section_img_full}`}
                    pathName={pathName}
                />
                <Category />
            </HomeGuard>
        </div>
    )
}

export default index

export const getServerSideProps = async (context) => {
    const { req, resolvedUrl } = context
    const language = req.cookies.languageSetting
    const domain = req.headers.host
    const pathName = 'https://' + domain + resolvedUrl
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
    const landingPageData = await landingPageApi.getLandingPageImages()
    return {
        props: {
            configData: config,
            landingPageData: landingPageData.data,
            pathName: pathName,
        },
    }
}
