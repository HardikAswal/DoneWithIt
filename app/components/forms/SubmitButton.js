import { Form, FormikContext, useFormikContext } from "formik";
import React from "react";
import {} from "react-native";
import AppButton from "../AppButton";

function SubmitButton() {
    const {handleSubmit} = useFormikContext();

    return (
    <AppButton title="Login" onPress={handleSubmit} />
    );
}

export default SubmitButton;
