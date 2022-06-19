import styled from 'styled-components';
import { ThemeEntity } from 'styles/Theme';

export const SubmenuStyle = styled.div`
    .submenuTitle {
    }

    .submenuList {
        display: flex;
        flex-wrap: wrap;
        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            display: block;
        }
        padding: 0;
        padding-left: 0;
        margin-left: 0;
        min-width: 150px;
        flex-grow: 1;
        font-size: 140px;

        ${({ theme }: {theme: ThemeEntity}) => theme.media.smAbove} {
            font-size: 16px;
        }
    }
`;
