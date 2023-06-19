import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--indent);
`;

const ListItem = styled.li`
  display: inline-flex;

  flex-basis: calc((100% - var(--indent) * (var(--items) - 1)) / var(--items));
`;

export { List, ListItem };
