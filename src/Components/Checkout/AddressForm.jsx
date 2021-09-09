import { Typography, Grid, InputLabel } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../../lib/commerce';
import { CustomTextField } from './CustomTextField'
export const AddressForm = () => {
    
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const method = useForm();
    
    const getShippingCountries =async(checkoutTokenId)=>{
        try{
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries) 
        }catch(err){
            console.log(err)
        }
    }


    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...method}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <CustomTextField required name='First Name' label='First Name' />
                        <CustomTextField required name='First Name' label='First Name' />
                        <CustomTextField required name='First Name' label='First Name' />
                        <CustomTextField required name='First Name' label='First Name' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Counrty</InputLabel>
                            {/* <Select value={} fullWidth onChange={}>
                                <MenuItem>Select Me</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem>Select Me</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem>Select Me</MenuItem>
                            </Select> */}
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}