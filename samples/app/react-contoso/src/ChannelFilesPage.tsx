import * as React from 'react';
import { FileList, SelectedChannel, TeamsChannelPicker, MgtTemplateProps } from '@microsoft/mgt-react';
import { makeStyles } from '@fluentui/react-components';
import { Tree, TreeItem, TreeItemLayout } from '@fluentui/react-tree';


// const useStyles = makeStyles({
  
// });


const MyTeamsChannel = (props: MgtTemplateProps) => {
  const [teams, setTeams] = React.useState(props.dataContext.teams);
  
  React.useEffect(() => {
    console.log(props);
    setTeams(props.dataContext.teams);
  });

  return(
    <>
      <Tree aria-label='MyTeams'>
        {teams && (
          teams.map((team, index) => (
              <TreeItem itemType='branch'>
                <TreeItemLayout>{team.item.displayName}</TreeItemLayout> 
                <Tree>
                  {team.channels && team.channels.map((channel) => (
                    <TreeItem
                      itemType='leaf'
                      aria-selected={true}
                    >
                      <TreeItemLayout>{channel.item.displayName}</TreeItemLayout>
                    </TreeItem>
                  ))}
                </Tree>
              </TreeItem>
            )
          )
        )}
      </Tree>
    </>
  );
}

export const ChannelFilesPage: React.FunctionComponent = () => {
  const [selectedChannel, setSelectedChannel] = React.useState<SelectedChannel | null>(null);
  //const styles = useStyles();

  return (
    <div>
      <TeamsChannelPicker
        selectionChanged={e => {
          console.log(e);
          setSelectedChannel(e.detail)
        }
        }
      >
        <MyTeamsChannel template='default'></MyTeamsChannel>
      </TeamsChannelPicker>

      {selectedChannel && (
        <FileList
          groupId={selectedChannel.team.id}
          itemPath={selectedChannel.channel.displayName}
          pageSize={100}
        ></FileList>
      )}
    </div>
  );
};