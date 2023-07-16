import { useState } from 'react';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { Header, MainContainer } from '@/styles/elements';
import ListTags from '@/components/ListTags';
import CreateTagForm from '@/components/CreateTag';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export interface TagProps {
  id: number;
  name: string;
  description: string;
}

export default function Home() {
  const [tags, setTags] = useState<TagProps[]>([
    { id: 1, name: 'Denise 1', description: 'description 1' },
    { id: 2, name: 'Denise 2', description: 'description 2' },
  ]);

  const deleteTag = (id: number) => {
    const updatedTags = tags.filter((tag) => tag.id !== id);
    setTags(updatedTags);
  };

  const editTag = (id: number, name: string, description: string) => {
    const updatedTags = tags.map((tag) => {
      if (tag.id === id) {
        return { ...tag, name, description };
      }
      return tag;
    });
    setTags(updatedTags);
  };

  const addTag = (name: string, description: string) => {
    const newTag: TagProps = {
      id: Date.now(),
      name,
      description,
    };
    setTags([...tags, newTag]);
  };

  return (
    <>
      <Head>
        <title>Move - TMS</title>
        <meta name="description" content="Move Tag Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer className={poppins.className}>
        <Header>
          <span>TMS</span>
        </Header>
        <CreateTagForm onAdd={addTag} />
        <ListTags tags={tags} onDelete={deleteTag} onEdit={editTag} />
      </MainContainer>
    </>
  );
}
