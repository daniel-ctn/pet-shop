import React, {useState} from 'react'
import {Form, Formik, FormikConfig, FormikValues} from "formik";
import {Button, CircularProgress, Grid, Step, StepLabel, Stepper} from "@material-ui/core";

export interface FormikStepProps
    extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: string;
}

export const FormikStep = ({children}: FormikStepProps) => {
    return <>{children}</>;
}

export const FormikStepper: React.FC<FormikConfig<FormikValues>> = ({children, ...props}) => {
    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);
                    helpers.setTouched({});
                }
            }}
        >
            {({isSubmitting}) => (
                <Form autoComplete="off">
                    <Stepper alternativeLabel activeStep={step}>
                        <Step completed><StepLabel>Sign In</StepLabel></Step>
                        {childrenArray.map((child, index) => (
                            <Step key={child.props.label} completed={step > index || completed}>
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {currentChild}

                    <Grid container spacing={2}>
                        {step > 0 ? (
                            <Grid item>
                                <Button disabled={isSubmitting} variant="outlined"
                                        color="primary" style={{margin: '8px 0'}}
                                        onClick={() => setStep((s) => s - 1)}
                                > Back </Button>
                            </Grid>
                        ) : null}
                        <Grid item>
                            <Button
                                startIcon={isSubmitting ? <CircularProgress size="1rem"/> : null}
                                disabled={isSubmitting} variant="outlined"
                                color="primary" type="submit" style={{margin: '8px 0'}}
                            >
                                {isSubmitting ? 'Submitting' : isLastStep() ? 'Place Order' : 'Continue'}
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}
