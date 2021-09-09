import { Typography,Grid } from '@material-ui/core';
import {useForm,FormProvider} from 'react-hook-form';
import {CustomTextField} from './CustomTextField'
export const AddressForm=()=>{
     const method = useForm();
    return (
        <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider {...method}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <CustomTextField required name='First Name' label='First Name'/>
                    <CustomTextField required name='First Name' label='First Name'/>
                    <CustomTextField required name='First Name' label='First Name'/>
                    <CustomTextField required name='First Name' label='First Name'/>
                </Grid>
            </form>
        </FormProvider>
        </>
    )
}