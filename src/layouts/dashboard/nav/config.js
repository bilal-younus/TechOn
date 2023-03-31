// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Account',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Cards',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Transaction',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Payment',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Invoicing',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
