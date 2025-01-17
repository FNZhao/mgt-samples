import { NavigationItem } from '../models/NavigationItem';
import {
  HomeRegular,
  SearchRegular,
  TextBulletListSquareRegular,
  CalendarMailRegular,
  DocumentRegular,
  TagMultipleRegular,
  CalendarArrowCounterclockwise24Regular,
  DocumentBulletListMultiple24Regular
} from '@fluentui/react-icons';
import { DashboardPage } from '../pages/DashboardPage';
import { OutlookPage } from '../pages/OutlookPage';
import { SearchPage } from '../pages/SearchPage';
import { HomePage } from '../pages/HomePage';
import { FilesPage } from '../pages/FilesPage';
import { TaxonomyPage } from '../pages/TaxonomyPage';
import { CalendarByWeek } from '../pages/CalendarByWeek';
import { ChannelFilesPage } from '../pages/ChannelFilesPage';

export const getNavigation = (isSignedIn: boolean) => {
  let navItems: NavigationItem[] = [];

  navItems.push({
    name: 'Home',
    url: '/',
    icon: <HomeRegular />,
    key: 'home',
    requiresLogin: false,
    component: <HomePage />,
    exact: true
  });

  if (isSignedIn) {
    navItems.push({
      name: 'Dashboard',
      url: '/dashboard',
      icon: <TextBulletListSquareRegular />,
      key: 'dashboard',
      requiresLogin: true,
      component: <DashboardPage />,
      exact: true
    });

    navItems.push({
      name: 'Mail and Calendar',
      url: '/outlook',
      icon: <CalendarMailRegular />,
      key: 'outlook',
      requiresLogin: true,
      component: <OutlookPage />,
      exact: true
    });

    navItems.push({
      name: 'Files',
      url: '/files',
      icon: <DocumentRegular />,
      key: 'files',
      requiresLogin: true,
      component: <FilesPage />,
      exact: true
    });

    navItems.push({
      name: 'Taxonomy',
      url: '/taxonomy',
      icon: <TagMultipleRegular />,
      key: 'files',
      requiresLogin: true,
      component: <TaxonomyPage />,
      exact: true
    });

    navItems.push({
      name: 'Search',
      url: '/search',
      pattern: '/search/:query',
      icon: <SearchRegular />,
      key: 'search',
      requiresLogin: true,
      component: <SearchPage />,
      exact: false
    });
    
    navItems.push({
      name: 'CalendarByWeek',
      url: '/calendarByWeek',
      icon: <CalendarArrowCounterclockwise24Regular />,
      key: 'calendarByWeek',
      requiresLogin: true,
      component: <CalendarByWeek />,
      exact: true
    });

    navItems.push({
      name: 'Channel Files',
      url: '/channelFiles',
      icon: <DocumentBulletListMultiple24Regular />,
      key: 'channelFiles',
      requiresLogin: true,
      component: <ChannelFilesPage />,
      exact: true
    });
  }
  return navItems;
};

