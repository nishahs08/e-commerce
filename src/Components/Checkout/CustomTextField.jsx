import { TextField,Grid ,InputLabel} from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

 export const CustomTextField = ({name,label}) => {
  const { control } = useFormContext();
  return (
    // <Grid item xs={12} sm={6}>
    //   <Controller render={(field)=>(<TextField {...field} label={label} required/>)} control={control} fullWidth name={name} />
    // </Grid>

    <Grid item xs={12} sm={6}>
      {/* <InputLabel>{label}</InputLabel> */}
      <Controller
                render={({ field }) => <TextField {...field} variant="outlined"   label={label}/>}
                name={name}
                control={control}
                fullWidth
                required       
                />
  </Grid>
  );
};
