import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '@/styled-components/CustomStyles.style'
import { Grid, NoSsr, Typography } from '@mui/material'
import { t } from 'i18next'
import CustomTextFieldWithFormik from '../form-fields/CustomTextFieldWithFormik'
import CustomPhoneInput from '../CustomPhoneInput'
import { useFormik } from 'formik'
import { CustomButtonPrimary } from '@/styled-components/CustomButtons.style'
import TrackOrderDetails from './TrackOrderDetails'
import { getGuestId } from '../checkout-page/functions/getGuestUserId'
import useGetTrackOrderData from '../../hooks/react-query/useGetTrackOrderData'

const TrackOrderInput = ({ configData }) => {
    const trackOrderFormik = useFormik({
        initialValues: {
            order_id: '',
            contact_person_number: '',
        },
        onSubmit: async () => {
            try {
                refetchTrackOrder()
            } catch (err) {}
        },
    })

    const nameHandler = (value) => {
        trackOrderFormik.setFieldValue('order_id', value)
    }
    const numberHandler = (value) => {
        trackOrderFormik.setFieldValue('contact_person_number', value)
    }
    const guestId = getGuestId()
    const { refetch: refetchTrackOrder, data: trackOrderData } =
        useGetTrackOrderData(
            trackOrderFormik?.values?.order_id,
            trackOrderFormik?.values?.contact_person_number,
            guestId
        )

    return (
        <NoSsr>
            <CustomStackFullWidth spacing={2} pt="60px">
                <CustomPaperBigCard>
                    <Typography
                        align="center"
                        paddingBottom="30px"
                        fontSize="20px"
                        fontWeight="600"
                    >
                        {t('Track Your Order')}
                    </Typography>
                    <form noValidate onSubmit={trackOrderFormik.handleSubmit}>
                        <Grid
                            container
                            spacing={2}
                            paddingX={{ xs: '.5rem', md: '2rem' }}
                        >
                            <Grid item xs={12} md={5}>
                                <CustomTextFieldWithFormik
                                    placeholder={t('Enter your order id')}
                                    required="true"
                                    type="text"
                                    label={t('Order Id')}
                                    touched={trackOrderFormik.touched.order_id}
                                    errors={trackOrderFormik.errors.order_id}
                                    fieldProps={trackOrderFormik.getFieldProps(
                                        'order_id'
                                    )}
                                    onChangeHandler={nameHandler}
                                    value={trackOrderFormik.values.order_id}
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <CustomPhoneInput
                                    value={
                                        trackOrderFormik.values
                                            .contact_person_number
                                    }
                                    onHandleChange={numberHandler}
                                    initCountry={configData?.country}
                                    touched={
                                        trackOrderFormik.touched
                                            .contact_person_number
                                    }
                                    errors={
                                        trackOrderFormik.errors
                                            .contact_person_number
                                    }
                                    rtlChange="true"
                                    //lanDirection={lanDirection}
                                    height="45px"
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <CustomButtonPrimary
                                    paddingTop="12px"
                                    paddingBottom="8px"
                                    type="submit"
                                >
                                    {t('Search Order')}
                                </CustomButtonPrimary>
                            </Grid>
                        </Grid>
                    </form>
                    {trackOrderData && (
                        <TrackOrderDetails
                            trackOrderFormik={trackOrderFormik}
                            trackOrderData={trackOrderData}
                        />
                    )}
                </CustomPaperBigCard>
            </CustomStackFullWidth>
        </NoSsr>
    )
}

export default TrackOrderInput
