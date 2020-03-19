import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  tablet: 768,
  desktop: 992,
});
export const OnMobileAndTablet = layout.isAtMost('tablet');
export const OnDesktop = layout.is('desktop');