'use client'
import { NextPage } from "next";
import { memo, useEffect, useState } from "react";
import Form from "@/ui/form/form";
import { useAppSelector } from "@/store/store";
import { FieldValues, useForm } from "react-hook-form";
import { useDate } from "@/hooks/useDate";
import { TUpdateUser } from "@/types/update-user.type";
import { useActions } from "@/hooks/useActions";
import { prepareUserToUpdate } from "@/utils/prepare-user-update";
import { IField } from "@/constants/forms/form.interface";
import { prepareUserToFields } from "@/utils/prepare-user-to-fileds";

const UserPage: NextPage = (): JSX.Element => {
  const { user, isLoading } = useAppSelector(state => state.user);
  const [fields, setFields] = useState<IField[]>([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const { updateUser } = useActions();
  const onSubmit = (data: FieldValues) => {
    const update: TUpdateUser = prepareUserToUpdate(data);     
    const wantSave = confirm("Хочете зберегти данні?");
    if(!wantSave) return;
    updateUser(update);
    console.log(update);
    
  };
  useEffect(() => {
    setCreatedAt(useDate(user?.createdAt || new Date()));
    setUpdatedAt(useDate(user?.updatedAt || new Date()));
    setFields(prepareUserToFields(user));
  }, [user])
  return (
    <section>
        <div>
          <Form 
            onSubmit={onSubmit}
            fields={fields}
            isLoading={isLoading}
            submitText="Зберегти"
            title="Користувач">
              
              <p>Створено: <time>{createdAt}</time></p>
              <p>Оновлено: <time>{updatedAt}</time></p>
          </Form>
        </div>
    </ section>
  );  
};

export default memo(UserPage);