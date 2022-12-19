import { FormBox, StyledButton, StyledImg, StyledTextField, Text, Title, Wrapper } from "./style";
import ImagePlaceholder2 from '../../../assets/Img/ImagePlaceholder2.svg'
import { Grid } from "@mui/material";
import { Form, Formik, Field } from 'formik';
import { registrationSchema } from '../../../validationSchema';

const CreateAccount = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
      };
    return(
        <Wrapper container>
            <StyledImg src={ImagePlaceholder2} alt=""/>
            <FormBox>
                <Grid>
                    <Title>Create account</Title>
                    <Text>Welcome! enter your details and start creating, collecting and selling NFTs.</Text>
                </Grid>
                <Grid paddingTop="40px">
                    <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        
                    }}
                    validationSchema={registrationSchema}>
                        {({ errors, touched }) => (
                        <Form>
                            <Grid container gap="15px">
                                <Field
                                    component={StyledTextField}
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                />
                                <Field
                                    component={StyledTextField}
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                />
                                {errors.firstname && touched.firstname ? (<div>aboba</div>) : null}
                                <Field
                                    component={StyledTextField}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                                <Field
                                    component={StyledTextField}
                                    name="passwordConfirmation"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </Grid>
                            <StyledButton type="submit" variant="outlined">Create account</StyledButton>
                        </Form>
                        )}
                    </Formik>
                </Grid>
            </FormBox>
        </Wrapper>
    );
}

export default CreateAccount;