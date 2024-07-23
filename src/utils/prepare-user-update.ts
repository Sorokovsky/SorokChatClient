import { TUpdateUser } from "@/types/update-user.type"
import { FieldValues } from "react-hook-form"

export const prepareUserToUpdate = (data: FieldValues): TUpdateUser => {
  console.log(data);
  
    let keys: (keyof TUpdateUser)[] = Object.keys(data) as (keyof TUpdateUser)[];
    let update: TUpdateUser = {};
    keys.map(key => update[key] = data[key]);
    keys.forEach((key) => {
      if (update[key] == undefined || update[key] == null || update[key] == '') {
        delete update[key];
      }
    });
    if (update.avatar?.length === 0) delete update.avatar;
    return update;
};