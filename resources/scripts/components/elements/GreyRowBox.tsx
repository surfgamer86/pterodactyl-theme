import styled from 'styled-components/macro';
import tw from 'twin.macro';

export default styled.div<{ $hoverable?: boolean }>`
    ${tw`flex rounded no-underline text-neutral-200 items-center p-4 border border-transparent transition-colors duration-150 overflow-hidden`};
    border:1px solid var(--borders);
    background-color:var(--secondary);

    ${props => props.$hoverable !== false && tw`hover:border-neutral-500`};

    & .icon {
        ${tw`rounded-full bg-neutral-500 p-3`};
    }
`;
