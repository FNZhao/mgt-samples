import * as React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button, makeStyles, shorthands, mergeClasses } from '@fluentui/react-components';
import { ArrowCircleLeft48Regular, ArrowCircleRight48Regular, ChevronDown48Regular } from '@fluentui/react-icons';
import { Agenda } from '@microsoft/mgt-react';


const useStyles = makeStyles({
  container: {
    
  },

  panels: {
    ...shorthands.padding('10px')
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    //width: '70%'
  },

  mainButton: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export const CalendarByWeek: React.FunctionComponent = () => {
  const [days, setDays] = React.useState(7);
  const [today, setToday] = React.useState(new Date());
  const styles = useStyles();

  const dayOfWeek = today.getDay();
  const daysRemainning = 6 - dayOfWeek;

  React.useEffect(() => {
    setDays(daysRemainning);
    return;
  }, [])

  const clickPrev = () => {
    setDays(7);
    const curDayOfWeek = today.getDay();
    const curDate = today.getDate();
    const curMonth = today.getMonth();
    const curYear = today.getFullYear();
    setToday(new Date(curYear, curMonth, curDate - curDayOfWeek - 7));
  }

  const clickNext = () => {
    setDays(7);
    const curDayOfWeek = today.getDay();
    const curDate = today.getDate();
    const curMonth = today.getMonth();
    const curYear = today.getFullYear();
    setToday(new Date(curYear, curMonth, curDate - curDayOfWeek + 7));
  }

  const clickToday = () => {
    setToday(new Date());
    setDays(daysRemainning);
  }

  return (
    <>
      <PageHeader
        title='Calendar'
        description='Events this week'
      ></PageHeader>
      <div className={styles.container}>
        <div className={mergeClasses(styles.panels, styles.main)}>
          <Agenda groupByDay={true} date={today.toDateString()} days={days}></Agenda>
        </div>
        <div className={styles.mainButton}>
          <Button appearance='transparent' icon={<ArrowCircleLeft48Regular />} style={{fontSize: '20px'}}
            onClick={() => clickPrev()}
          >Previous week</Button>
          <Button appearance='transparent' icon={<ChevronDown48Regular />} style={{fontSize: '20px'}}
            onClick={() => clickToday()}
            >Today</Button>
          <Button appearance='transparent' icon={<ArrowCircleRight48Regular />} style={{fontSize: '20px'}}
            onClick={() => clickNext()}
          >Next week</Button>
        </div>
      </div>
    </>
  );
}