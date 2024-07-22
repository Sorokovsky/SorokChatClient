'use client'
import { NextPage } from "next";
import { memo, useEffect, useState } from "react";
import Form from "@/ui/form/form";
import Input from "@/ui/form/input/input";
import { useAppSelector } from "@/store/store";
import FileInput from "@/ui/form/file-input/file-input";
import Button from "@/ui/form/button/button";
import { FieldValues, useForm } from "react-hook-form";
import { useDate } from "@/hooks/useDate";

const UserPage: NextPage = (): JSX.Element => {
  const { user } = useAppSelector(state => state.user);
  const defaultAvatar = "https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png";
  const { register, handleSubmit } = useForm();
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    const wantSave = confirm("Хочете зберегти данні?");
    if(!wantSave) return;
    
  };
  useEffect(() => {
    setCreatedAt(useDate(user?.createdAt || new Date()));
    setUpdatedAt(useDate(user?.updatedAt || new Date()));
    
  }, [user])
  return (
    <section>
        <div>
          <Form 
            onSubmit={handleSubmit(onSubmit)}
            title="Користувач">
              <FileInput 
                size={282} 
                image={user?.avatarPath || defaultAvatar} 
                {...register('avatar', {required: false})}
              />
              <Input
                id="email"
                placeholder="Email"
                type="email" 
                value={user?.email}
                {...register('email', {
                  required: false
                })}
              />
              <Input
                id="surname"
                placeholder="Прізвище"
                type="text" 
                value={user?.surname}
                {...register('surname', {
                  required: false
                })}
              />
              <Input
                id="name"
                placeholder="Ім'я"
                type="text" 
                value={user?.name}
                {...register('name', {required: false})}
              />
              <Input
                id="middlName"
                placeholder="По батькові"
                type="text" 
                value={user?.middleName}
                {...register('middlName', {required: false})}

              />
              <p>Створено: <time>{createdAt!}</time></p>
              <p>Оновлено: <time>{updatedAt!}</time></p>
              <Button style={{maxWidth: '335rem', display: 'block'}} type="submit">Зберегти</Button>
          </Form>
        </div>
    </ section>
  );  
};

export default memo(UserPage);
