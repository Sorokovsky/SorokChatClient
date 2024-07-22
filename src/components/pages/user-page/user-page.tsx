'use client'
import { NextPage } from "next";
import { FormEvent, memo } from "react";
import Form from "@/ui/form/form";
import Input from "@/ui/form/input/input";
import { useAppSelector } from "@/store/store";
import FileInput from "@/components/ui/form/file-input/file-input";

const UserPage: NextPage = (): JSX.Element => {
  const { user } = useAppSelector(state => state.user);
  const defaultAvatar = "https://static-00.iconduck.com/assets.00/user-avatar-icon-2048x2048-wpp8os2d.png";
  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
  };
  return (
    <section>
        <div>
          <Form 
            onSubmit={onSubmit}
            title="Користувач">
              <FileInput size={200} image={user?.avatarPath || defaultAvatar} />
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