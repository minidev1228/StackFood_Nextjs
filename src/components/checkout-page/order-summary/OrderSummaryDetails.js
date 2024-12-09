import React from 'react'
import {Grid} from '@mui/material'
import { useTranslation } from 'react-i18next'
import RegularOrders from './RegularOrders'
import CampaignOrders from './CampaignOrders'
import 'simplebar/dist/simplebar.min.css'
const OrderSummaryDetails = (props) => {
    const { type, page, global } = props
    const { t } = useTranslation()

    return (
        <>
            <Grid item md={12} xs={12} container spacing={1} mt="10px" pl="10px">
                   {page === 'cart' && <RegularOrders />}
                   {page === 'campaign' && <CampaignOrders global={global} />}
            </Grid>
        </>
    )
}

OrderSummaryDetails.propTypes = {}

export default React.memo(OrderSummaryDetails)
