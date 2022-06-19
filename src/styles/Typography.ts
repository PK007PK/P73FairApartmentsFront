import { createGlobalStyle } from 'styled-components';
import { ThemeEntity } from './Theme';

const Typography = createGlobalStyle`

  p, li {
    letter-spacing: 0.5px;
    font-weight: 300;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
    margin: 0;
    line-height: 140%;
  }

  h1 {
    font-size: var(--fontSizeBig1);

    ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
      font-size: var(--fontSizeBig2);
    }
    
  }

  h2 {
    font-size: var(--fontSizeBig1);
  }

  h3 {
    font-size: var(--fontSizeLead);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  a:hover {
    color: var(--black);
    text-decoration: none;
  }

  ul {
    padding: 0;
  }
`;

export default Typography;
