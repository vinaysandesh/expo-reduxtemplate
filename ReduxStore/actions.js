import { CURRENT_STATE } from "./type";


export const updateCurrentState = (value) => (
    {
      type: CURRENT_STATE,
      payload: value,
    }
); 
  
