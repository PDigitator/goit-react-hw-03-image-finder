// import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { List, ListItem } from 'components/ImageGallery/ImageGallery.styled';

const ImageGallery = data => {
  return (
    <List>
      {data.map(element => (
        <ListItem key={element.id}>
          <ImageGalleryItem element={element} />
        </ListItem>
      ))}
    </List>
  );
};

// ImageGallery.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

export default ImageGallery;
