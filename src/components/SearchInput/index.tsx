import { FormEvent, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { useUser } from '../../contexts/UserContext';
import Api from '../../services/api';
import * as SC from './search-input.styles';

type SearchInputProps = {
};

export const SearchInput = ({
}: SearchInputProps) => {
  const [username, setUsername] = useState<string>('lucasvsouza28');
  const { setUser } = useUser();

  const searchUser = async () => {
    try {
      if (!username) return;

      const { data } = await Api.get(`users/${username}`);

      if (data) {
        setUser({
          login: data.login,
          name: data.name,
          avatarUrl: data.avatar_url,
          createdAt: data.created_at ? new Date(data.created_at).toLocaleDateString() : '',
          profileUrl: data.html_url,
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location,
          blog: data.blog,
          twitterUsername: data.twitter_username,
          company: data.company,
        });
      }

    } catch (error: any) {
      console.log('Oops, there was a problem to fetch user data from Github: ' + error.message);
    } finally {
      setUsername('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await searchUser();
  }

  useEffect(() => {
    searchUser();
  }, [])

  const theme = useTheme();

  return (
    <SC.Container
      onSubmit={handleSubmit}
    >
      <BsSearch color={theme.color.text.anchor} />
      <SC.SearchUserInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='search Github username'
      />
    </SC.Container>
  )
}
