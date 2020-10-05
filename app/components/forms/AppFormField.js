import React from 'react';
import { View } from 'react-native';
import AppTextInput from '../AppTextInput';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';

function AppFormField({name,width,  ...otherProps}) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <React.Fragment>
            <AppTextInput
                onBlur={()=>setFieldTouched(name)}
                onChangeText = {handleChange(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    )
}

export default AppFormField;