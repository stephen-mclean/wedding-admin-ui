"use client";

import { type Invite } from "@/api";
import {
  FormProvider,
  useFieldArray,
  useForm,
  Controller,
} from "react-hook-form";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { BaseSyntheticEvent } from "react";

type Props = {
  invite?: Invite;
  onSubmit: (invite: Invite) => void;
  disabled?: boolean;
};

const Guests = () => {
  const { fields, append, remove } = useFieldArray<Invite>({
    name: "guests",
  });

  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-lg font-bold">Guests</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-2">
          <Controller
            key={field.id}
            name={`guests.${index}.name`}
            render={({ field }) => <Input {...field} />}
          />
          <Controller
            name={`guests.${index}.isPlusOne`}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Button
            variant="destructive"
            onClick={() => remove(index)}
            type="button"
          >
            Remove
          </Button>
        </div>
      ))}
      <Button
        variant="outline"
        onClick={() => append({ name: "", id: fields.length })}
        type="button"
      >
        Add Guest
      </Button>
    </div>
  );
};

export const InviteForm = ({
  invite,
  onSubmit: submitInvite,
  disabled,
}: Props) => {
  const methods = useForm<Invite>({
    defaultValues: invite ?? { guests: [] },
  });

  const onSubmit = (data: Invite, e?: BaseSyntheticEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    submitInvite(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-12"
      >
        <Guests />

        <Button type="submit" disabled={disabled}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};
