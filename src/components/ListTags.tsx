import React, { useState } from 'react';
import { TagProps } from '../pages/index';
import {
  Button,
  Form,
  Input,
  Item,
  ItemBodyText,
  ItemFooter,
  ItemTitle,
  Label,
  ListTag,
  Span,
  UnorderedList,
} from '@/styles/elements';
import { Trash, CheckCircle, Pencil, XCircle } from '@phosphor-icons/react';

interface TagListProps {
  tags: TagProps[];
  onDelete: (id: number) => void;
  onEdit: (id: number, name: string, description: string) => void;
}

const ListTags = ({ tags, onDelete, onEdit }: TagListProps) => {
  const [editTagId, setEditTagId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  const handleEdit = (id: number, name: string, description: string) => {
    setEditTagId(id);
    setEditedName(name);
    setEditedDescription(description);
  };

  const handleCancelEdit = () => {
    setEditTagId(null);
    setEditedName('');
    setEditedDescription('');
  };

  const handleSaveEdit = (id: number) => {
    onEdit(id, editedName, editedDescription);
    setEditTagId(null);
    setEditedName('');
    setEditedDescription('');
  };

  return (
    <ListTag>
      <UnorderedList>
        {tags.map((tag) => (
          <Item key={tag.id}>
            {editTagId === tag.id ? (
              <>
                <Form onSubmit={() => handleSaveEdit(tag.id)}>
                  <Label htmlFor="tagDescription">Tag Name:</Label>
                  <Input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    placeholder="Edit a Name"
                    required
                  />

                  <Label htmlFor="tagDescription">Tag Description:</Label>
                  <Input
                    id="tagDescription"
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    placeholder="Edit a Description"
                    required
                  />
                  <ItemFooter>
                    <Button type="submit">
                      <CheckCircle size={20} alt="Save" />
                    </Button>
                    <Button onClick={handleCancelEdit}>
                      <XCircle size={20} alt="Cancel" />
                    </Button>
                  </ItemFooter>
                </Form>
              </>
            ) : (
              <>
                <Span>Tag Name:</Span>
                <ItemTitle>{tag.name}</ItemTitle>

                <Span>Tag Description:</Span>
                <ItemBodyText>{tag.description}</ItemBodyText>
                <ItemFooter>
                  <Button
                    onClick={() =>
                      handleEdit(tag.id, tag.name, tag.description)
                    }
                  >
                    <Pencil size={20} alt="Edit" />
                  </Button>
                  <Button onClick={() => handleDelete(tag.id)}>
                    <Trash size={20} alt="Delete" />
                  </Button>
                </ItemFooter>
              </>
            )}
          </Item>
        ))}
      </UnorderedList>
    </ListTag>
  );
};

export default ListTags;
