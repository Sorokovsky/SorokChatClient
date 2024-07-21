'use client'
import { NextPage } from "next";
import { FormEvent, memo } from "react";
import Form from "@/ui/form/form";
import Input from "@/ui/form/input/input";
import fileInput from "@/components/ui/form/file-input/file-input";
import { useAppSelector } from "@/store/store";
import FileInput from "@/components/ui/form/file-input/file-input";

const UserPage: NextPage = (): JSX.Element => {
  const { user } = useAppSelector(state => state.user);
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
  };
  return (
    <section>
        <div>
          <Form 
            onSubmit={onSubmit}
            title="Користувач">
              <FileInput size={200} image={user?.avatarPath} />
              <Input
                id="email"
                placeholder="Email"
                type="email" 
                value={user?.email}
              />
              <Input
                id="surname"
                placeholder="Прізвище"
                type="text" 
                value={user?.surname}
              />
              <Input
                id="name"
                placeholder="Ім'я"
                type="text" 
                value={user?.name}
              />
              <Input
                id="middlName"
                placeholder="По батькові"
                type="text" 
                value={user?.middleName}
              />
          </Form>
        </div>
    </section>
  );  
};

export default memo(UserPage);