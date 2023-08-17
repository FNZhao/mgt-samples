import * as React from 'react';
import { FileList,
  SelectedChannel,
  Get
} from '@microsoft/mgt-react';
import { makeStyles } from '@fluentui/react-components';
import { Tree, TreeItem, TreeItemLayout } from '@fluentui/react-tree';
import { Loading } from '../components/Loading';



// const useStyles = makeStyles({
  
// });

const MyTeams = (props) => {
  const teams = props.dataContext.value;

  return(
    <Tree>
      {teams && (
        teams.map((team) => (
          <TreeItem itemType='branch'>
            <TreeItemLayout>{team.displayName}</TreeItemLayout>
            <Tree>
              <Get
              resource={`teams/${team.id}/channels`}
              >
                <MyChannels template='value'></MyChannels>
                <ChannelsLoading template='loading'>loading</ChannelsLoading>
              </Get>
            </Tree>
            
          </TreeItem>
        ))
      )}
    </Tree>
  );
}

const ChannelsLoading = (props) => {
  return(
    <div>
      loading
    </div>
  );
}

const MyChannels = (props) => {
  const channels = props.dataContext.value;

  return(
    // <Tree>
    //   {channels && (
    //     channels.map((channel) => (
          <TreeItem itemType='leaf'>
            <TreeItemLayout style={{ marginLeft:'3vh' }}>{props.dataContext.displayName}</TreeItemLayout>
          </TreeItem>
      //   ))
      // )}
    // </Tree>
  );
}

export const ChannelFilesPage: React.FunctionComponent = () => {
  const [selectedChannel, setSelectedChannel] = React.useState<SelectedChannel | null>(null);
  //const styles = useStyles();

  return (
    <>
      <Get
        resource='/me/joinedTeams'
      >
        <MyTeams template='default'></MyTeams>
        <Loading template='loading'></Loading>
      </Get>

      {selectedChannel && (
        <FileList
          groupId={selectedChannel.team.id}
          itemPath={selectedChannel.channel.displayName}
          pageSize={100}
        ></FileList>
      )}
    </>
  );
};