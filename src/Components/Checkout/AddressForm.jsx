import {
    Typography,
    Grid,
    InputLabel,
    Select,
    MenuItem,
    Button
} from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../lib/commerce";
import { CustomTextField } from "./CustomTextField";
import {Link} from 'react-router-dom'
export const AddressForm = ({ checkoutToken ,next}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("");

    const method = useForm();

    const getShippingCountries = async (token) => {
        try {
            const { countries } = await commerce.services.localeListShippingCountries(token);
            setShippingCountries(countries);
            setShippingCountry(Object.keys(countries)[0]);
        } catch (err) {
            console.log("getShippingCountries", err);
        }
    };

    const getSubdivisions = async (countryCode) => {
        try {
            const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
            setShippingSubdivisions(subdivisions)
            setShippingSubdivision(Object.keys(subdivisions)[0]);
        } catch (err) {
            console.log('getShippingCountries', err);
        }
    };

    const getShippingOptions = async (checkoutTokenId, country, region) => {
        try {
            const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });

            setShippingOptions(options);
            setShippingOption(options[0].id);
        } catch {
            console.log("shipping", shippingOptions)
        }
    }

    useEffect(() => {
        getShippingCountries(checkoutToken.id);
    }, []);

    useEffect(() => {
        if (shippingCountry) getSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) getShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);

    const countriesList = Object.entries(shippingCountries).map(
        ([code, name]) => ({ id: name, label: name })
    );

    const subdivisionsList = Object.entries(shippingSubdivisions).map(
        ([code, name]) => ({ id: name, label: name })
    );

    console.log(countriesList);

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping Address
      </Typography>
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit((data)=>next({...data,shippingCountry,shippingSubdivision,shippingOption}))}>
                    <Grid container spacing={3}>
                        <CustomTextField required name="First Name" label="First Name" />
                        <CustomTextField required name="Last Name" label="Last Name" />
                        <CustomTextField required name="address" label="Address" />
                        <CustomTextField required name="email" label="Email" />
                        <CustomTextField required name="city" label="City" />
                        <CustomTextField required name="zip" label="ZIP" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select
                                value={shippingSubdivision}
                                fullWidth
                                onChange={(e) => setShippingSubdivision(e.target.value)}
                            >
                                {Object.entries(shippingSubdivisions)
                                    .map(([code, name]) => ({ id: code, label: name }))
                                    .map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    );
};
