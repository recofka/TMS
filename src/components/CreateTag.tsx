import {
  Button,
  CreateTag,
  Form,
  Input,
  Label,
  Title,
} from '@/styles/elements';
import { PlusCircle } from '@phosphor-icons/react';
import React, { useState } from 'react';

interface CreateTagFormProps {
  onAdd: (name: string, description: string) => void;
}

const CreateTagForm = ({ onAdd }: CreateTagFormProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(name, description);
    setName('');
    setDescription('');
  };

  return (
    <CreateTag>
      <Title>Create a new Tag</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="tagDescription">Tag Name:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Insert a Name"
          required
        />
        <Label htmlFor="tagDescription">Tag Description:</Label>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Insert a Description"
          required
        />
        <Button id="newTag" type="submit">
          New Tag <PlusCircle size={20} />
        </Button>
      </Form>
    </CreateTag>
  );
};

export default CreateTagForm;
