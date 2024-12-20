import React from 'react'
import PropTypes from 'prop-types'
import { CustomBoxFullWidth } from '@/styled-components/CustomStyles.style'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { useTranslation } from 'react-i18next'

const CustomSelectWithFormik = (props) => {
    const {
        inputLabel,
        selectFieldData,
        passSelectedValue,
        touched,
        errors,
        fieldProps,
        required,
        value,
        height,
    } = props
    const [age, setAge] = React.useState(value)
    const { t } = useTranslation()
    const handleChange = (event) => {
        debugger
        passSelectedValue(event.target.value)
        setAge(event.target.value)
    }

    return (
        <CustomBoxFullWidth>
            <FormControl fullWidth>
                <InputLabel
                    required={required}
                    id="demo-simple-select-label"
                    sx={{
                        color: (theme) => theme.palette.neutral[1000],
                        fontSize: '13px',
                    }}
                >
                    {inputLabel}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label={inputLabel}
                    onChange={handleChange}
                    error={Boolean(touched && errors)}
                    helperText={touched && errors}
                    {...fieldProps}
                    sx={{ height: height ?? 'inherit', borderRadius: '5px' }}
                >
                    {selectFieldData?.length > 0 &&
                        selectFieldData.map((item, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    value={item.value}
                                    sx={{
                                        maxWidth: '100%',
                                        fontSize: '13px',
                                        '&:hover': {
                                            backgroundColor: 'primary.main',
                                        },
                                    }}
                                >
                                    {t(item.label)}
                                </MenuItem>
                            )
                        })}
                </Select>
                {touched && errors && !value && (
                    <FormHelperText
                        sx={{ color: (theme) => theme.palette.error.main }}
                    >
                        {t('Please select an option.')}
                    </FormHelperText>
                )}
            </FormControl>
        </CustomBoxFullWidth>
    )
}

CustomSelectWithFormik.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    selectFieldData: PropTypes.array.isRequired,
    passSelectedValue: PropTypes.func.isRequired,
}

export default CustomSelectWithFormik
