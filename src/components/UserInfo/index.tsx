import { User } from '../../@types/user';
import * as SC from './user-info.styles';
import { IoLocationSharp } from 'react-icons/io5';
import { BsTwitter, BsLink45Deg } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';

type UserInfoProps = {
  user: User,
};

export const UserInfo = ({
  user
}: UserInfoProps) => {
  return (
    <SC.Container>
      <SC.Avatar
        src={user.avatarUrl}
      />
      <SC.Header>
        <SC.Username>
          {user.name}
        </SC.Username>

        <SC.ProfileAnchor
          href={user.profileUrl}
        >
          @{user.login}
        </SC.ProfileAnchor>

        <SC.AccountCreationDate>
          Joined {user.createdAt}
        </SC.AccountCreationDate>
      </SC.Header>

      <SC.Bio>
        {user.bio || 'this user  has no bio'}
      </SC.Bio>

      <SC.RepoStats>
        <SC.StatsItem>
          <SC.StatsItemTitle>Repos</SC.StatsItemTitle>
          <SC.StatsItemText>{user.repos}</SC.StatsItemText>
        </SC.StatsItem>
        <SC.StatsItem>
          <SC.StatsItemTitle>Followers</SC.StatsItemTitle>
          <SC.StatsItemText>{user.followers}</SC.StatsItemText>
        </SC.StatsItem>
        <SC.StatsItem>
          <SC.StatsItemTitle>Following</SC.StatsItemTitle>
          <SC.StatsItemText>{user.following}</SC.StatsItemText>
        </SC.StatsItem>
      </SC.RepoStats>

      <SC.Links>
        <SC.LinkItem>
          <IoLocationSharp height={16} />
          <SC.LintItemText
            noData={!user.location}
          >
            {user.location || 'Not available'}
          </SC.LintItemText>
        </SC.LinkItem>
        <SC.LinkItem>
          <BsLink45Deg height={16} />
          <SC.LintItemAnchor
            noData={!user.blog}
            href={user.blog || '#'}
          >
            {user.blog || 'Not available'}
          </SC.LintItemAnchor>
        </SC.LinkItem>
        <SC.LinkItem>
          <BsTwitter height={16} />
          <SC.LintItemAnchor
            href={user.twitterUsername ? `https://twitter.com/${user.twitterUsername}` : '#'}
            noData={!user.twitterUsername}
          >
            {user.twitterUsername || 'Not available'}
          </SC.LintItemAnchor>
        </SC.LinkItem>
        <SC.LinkItem>
          <BiBuildings height={16} />
          <SC.LintItemText
            noData={!user.company}
          >
            {user.company|| 'Not available'}
          </SC.LintItemText>
        </SC.LinkItem>
      </SC.Links>
    </SC.Container>
  )
}
