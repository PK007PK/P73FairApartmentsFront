import styled, { css } from 'styled-components';
import SearchBox from './search-box';

const open = css`
    width: 15em;
    background: ${({ theme }) => theme.background};
    cursor: text;
    margin-left: -1.6em;
    padding-left: 1.6em;
`;

const closed = css`
    width: 0;
    background: transparent;
    cursor: pointer;
    margin-left: -1em;
    padding-left: 1em;
`;

const ifStaticPlaceholder = css`
    width: 100%;
    margin: 0;
    cursor: text;
    background: white;
`;

const ifStaticInput = css`
    outline: none;
    border: 1px solid gray;
    font-size: 1em;
    transition: 100ms;
    border-radius: 0px;
    padding: 10px 25px;
`;

export default styled(SearchBox)`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: ${({ staticInput }) => (staticInput ? 'var(--spacingMedium)' : '0')};

    .SearchInput {
        outline: none;
        border: ${({ hasFocus }) => (hasFocus ? 'auto' : 'none')};
        font-size: 1em;
        transition: 100ms;
        border-radius: 2px;
        color: ${({ theme }) => theme.foreground};
        ${({ staticInput }) => (staticInput ? ifStaticInput : null)}

        ::placeholder {
            color: ${({ theme }) => theme.faded};
        }
        ${({ hasFocus }) => (hasFocus ? open : closed)}
        ${({ staticInput }) => (staticInput ? ifStaticPlaceholder : null)}
    }

    .SearchIcon {
        width: 1em;
        margin: 0.3em;
        color: ${({ theme }) => theme.foreground};
        pointer-events: none;

        ${({ staticInput }) =>
            staticInput &&
            css`
                display: none;
            `}
    }
`;
