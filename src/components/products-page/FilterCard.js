import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import 'simplebar-react/dist/simplebar.min.css'
import { useTranslation } from 'react-i18next'
import CustomGroupCheckbox from '../custom-group-checkboxs/CustomGroupCheckbox'
import { useDispatch } from 'react-redux'
import { setFilterbyByDispatch } from '@/redux/slices/searchFilter'
import { WrapperForSideDrawerFilter } from '@/styled-components/CustomStyles.style'

const FilterCard = ({ stateData, setStateData }) => {
    const { t } = useTranslation()
    const [isFilterCall, setIsFilterCall] = useState(false)
    const dispatch = useDispatch()
    const handleFilterBy = () => {
        const activeFilters = stateData.filter((item) => item.isActive === true)
        dispatch(setFilterbyByDispatch(activeFilters))
    }
    useEffect(() => {
        if (isFilterCall) {
            handleFilterBy()
        }
    }, [stateData])

    return (
        <Box>
            <WrapperForSideDrawerFilter smminwith="270px">
                <Stack spacing={3}>
                    <Stack spacing={1}>
                        <Typography variant="h4">{t('Filter By')}</Typography>
                        <Stack direction="row">
                            <CustomGroupCheckbox
                                handleChangeFilter={handleFilterBy}
                                checkboxData={stateData?.slice(1)}
                                stateData={stateData}
                                setStateData={setStateData}
                                setIsFilterCall={setIsFilterCall}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </WrapperForSideDrawerFilter>
        </Box>
    )
}

FilterCard.propTypes = {}

export default FilterCard
