import { TextField,Grid} from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

 export const CustomTextField = ({name,label}) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller render={(field)=>(<TextField {...field} label={label} required/>)} control={control} fullWidth name={name} />
    </Grid>
  );
};
